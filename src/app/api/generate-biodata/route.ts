import { NextRequest, NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import { join } from "path";
import { createWriteStream } from "fs";
import { Readable } from "stream";

export async function POST(request: NextRequest) {
  try {
    const { lang, data, translations } = await request.json();

    const isEnglish = lang === "en";
    const fontsPath = join(process.cwd(), "public", "fonts");

    // Create PDF document with custom font to avoid Helvetica.afm error
    const doc = new PDFDocument({
      size: "A4",
      margins: { top: 42, bottom: 42, left: 42, right: 42 },
      font: join(fontsPath, "Roboto-Regular.ttf"), // Start with Roboto
    });

    // Register fonts with names
    // For Hindi/Marathi, we need BOTH Roboto (for English text) and Devanagari (for Hindi/Marathi text)
    doc.registerFont("Roboto", join(fontsPath, "Roboto-Regular.ttf"));
    doc.registerFont("RobotoBold", join(fontsPath, "Roboto-Bold.ttf"));
    doc.registerFont(
      "Devanagari",
      join(fontsPath, "NotoSansDevanagari-Regular.ttf"),
    );
    doc.registerFont(
      "DevanagariB",
      join(fontsPath, "NotoSansDevanagari-Bold.ttf"),
    );

    // Helper function to split text into segments by script
    const splitByScript = (text: string) => {
      const segments: Array<{ text: string; isDevanagari: boolean }> = [];
      let currentSegment = "";
      let currentIsDevanagari = false;

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const isDevanagari = /[\u0900-\u097F]/.test(char);

        if (i === 0) {
          currentIsDevanagari = isDevanagari;
          currentSegment = char;
        } else if (isDevanagari === currentIsDevanagari) {
          currentSegment += char;
        } else {
          segments.push({
            text: currentSegment,
            isDevanagari: currentIsDevanagari,
          });
          currentSegment = char;
          currentIsDevanagari = isDevanagari;
        }
      }

      if (currentSegment) {
        segments.push({
          text: currentSegment,
          isDevanagari: currentIsDevanagari,
        });
      }

      return segments;
    };

    // Helper function to render mixed-script text
    const renderMixedText = (
      text: string,
      x: number,
      y: number,
      options: any = {},
    ) => {
      const { bold, ...otherOptions } = options;

      if (isEnglish) {
        doc.font(bold ? "RobotoBold" : "Roboto").text(text, x, y, otherOptions);
        return;
      }

      const segments = splitByScript(text);

      segments.forEach((segment, index) => {
        const font = segment.isDevanagari
          ? bold
            ? "DevanagariB"
            : "Devanagari"
          : bold
          ? "RobotoBold"
          : "Roboto";
        doc.font(font);

        if (index === 0) {
          doc.text(segment.text, x, y, {
            ...otherOptions,
            continued: index < segments.length - 1,
          });
        } else {
          doc.text(segment.text, {
            ...otherOptions,
            continued: index < segments.length - 1,
          });
        }
      });
    };

    // Collect PDF data
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));

    const pdfPromise = new Promise<Buffer>((resolve, reject) => {
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);
    });

    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;
    const margin = 42;
    let yPos = margin;

    const availableWidth = pageWidth - 3 * margin;
    const photoWidth = availableWidth * 0.4;
    const photoHeight = photoWidth;
    const photoX = pageWidth - margin - photoWidth;

    // Load and add profile image
    try {
      const imagePath = join(
        process.cwd(),
        "public",
        "images",
        "user_profile.png",
      );
      doc.image(imagePath, photoX, yPos, {
        width: photoWidth,
        height: photoHeight,
      });
    } catch (imgError) {
      console.error("Error loading image:", imgError);
    }

    // Personal Information Section
    renderMixedText(translations.personalDetails, margin, yPos, { bold: true });
    doc.fontSize(14);
    yPos += 18;

    doc
      .moveTo(margin, yPos)
      .lineTo(margin + availableWidth * 0.6, yPos)
      .stroke();
    yPos += 8;

    // Personal details
    doc.fontSize(10);
    const labelX = margin;
    const contentX = margin + 120;

    const personalFields = [
      {
        label: translations.name,
        value:
          typeof data.personal.name === "string"
            ? data.personal.name
            : data.personal.name[lang],
      },
      { label: translations.dateOfBirth, value: data.personal.dateOfBirth },
      { label: translations.height, value: data.personal.height.feet },
      { label: translations.weight, value: data.personal.weight },
      { label: translations.complexion, value: data.personal.complexion[lang] },
      { label: translations.caste, value: data.personal.caste[lang] },
      { label: translations.location, value: data.personal.location[lang] },
      { label: translations.phone, value: data.personal.phone },
    ];

    personalFields.forEach((field) => {
      renderMixedText(`${field.label}:`, labelX, yPos, { bold: true });
      // Use renderMixedText for values that might contain Devanagari
      renderMixedText(field.value, contentX, yPos, {});
      yPos += 14;
    });

    // Website (clickable)
    renderMixedText(`${translations.website}:`, labelX, yPos, { bold: true });
    doc
      .font("Roboto")
      .fillColor("blue")
      .text(data.personal.website, contentX, yPos, {
        link: `https://${data.personal.website}`,
        underline: true,
      });
    doc.fillColor("black");
    yPos += 14;

    // Instagram (clickable)
    renderMixedText(`${translations.instagram}:`, labelX, yPos, { bold: true });
    doc
      .font("Roboto")
      .fillColor("blue")
      .text(data.personal.instagram, contentX, yPos, {
        link: data.personal.instagramUrl,
        underline: true,
      });
    doc.fillColor("black");
    yPos += 14;

    // LinkedIn (clickable)
    renderMixedText(`${translations.linkedin}:`, labelX, yPos, { bold: true });
    doc
      .font("Roboto")
      .fillColor("blue")
      .text(data.personal.linkedin, contentX, yPos, {
        link: data.personal.linkedinUrl,
        underline: true,
      });
    doc.fillColor("black");
    yPos += 30;

    // Education Section
    doc.fontSize(14);
    renderMixedText(translations.educationDetails, margin, yPos, {
      bold: true,
    });
    yPos += 18;
    doc
      .moveTo(margin, yPos)
      .lineTo(pageWidth - margin, yPos)
      .stroke();
    yPos += 8;

    doc.fontSize(10);
    renderMixedText(data.education.degree[lang], margin, yPos, {});
    yPos += 14;
    const eduText = `${data.education.major[lang]}, ${data.education.minor[lang]}`;
    renderMixedText(eduText, margin, yPos, {});
    yPos += 30; // Spacing between sections

    // Professional Details Section
    doc.fontSize(14);
    renderMixedText(translations.professionalDetails, margin, yPos, {
      bold: true,
    });
    yPos += 18;
    doc
      .moveTo(margin, yPos)
      .lineTo(pageWidth - margin, yPos)
      .stroke();
    yPos += 8;

    doc.fontSize(10);
    renderMixedText(
      data.professional.softwareDevelopment.title[lang],
      margin,
      yPos,
      { bold: true },
    );
    yPos += 14;
    renderMixedText(
      data.professional.softwareDevelopment.description[lang],
      margin,
      yPos,
      {
        width: pageWidth - 2 * margin,
      },
    );
    yPos += 40;

    renderMixedText(data.professional.stockMarket.title[lang], margin, yPos, {
      bold: true,
    });
    yPos += 14;
    renderMixedText(
      data.professional.stockMarket.description[lang],
      margin,
      yPos,
      {
        width: pageWidth - 2 * margin,
      },
    );
    yPos += 40; // Spacing between sections

    // Interests & Hobbies Section
    doc.fontSize(14);
    renderMixedText(translations.interests, margin, yPos, { bold: true });
    yPos += 18;
    doc
      .moveTo(margin, yPos)
      .lineTo(pageWidth - margin, yPos)
      .stroke();
    yPos += 8;

    doc.fontSize(10);
    renderMixedText(data.lifestyle.interests[lang], margin, yPos, {
      width: pageWidth - 2 * margin,
    });
    yPos += 50; // Spacing between sections

    // Family Background Section
    doc.fontSize(14);
    renderMixedText(translations.familyDetails, margin, yPos, { bold: true });
    yPos += 18;
    doc
      .moveTo(margin, yPos)
      .lineTo(pageWidth - margin, yPos)
      .stroke();
    yPos += 8;

    doc.fontSize(10);

    const familyLabelX = margin;
    const familyContentX = margin + 55;

    const fatherText = `${data.family.father.name[lang]} - ${data.family.father.occupation[lang]} (${data.family.father.contact})`;
    renderMixedText(`${translations.father}:`, familyLabelX, yPos, {
      bold: true,
    });
    renderMixedText(fatherText, familyContentX, yPos, {
      width: pageWidth - familyContentX - margin,
    });
    yPos += 16;

    const motherText = `${data.family.mother.name[lang]} - ${data.family.mother.occupation[lang]}`;
    renderMixedText(`${translations.mother}:`, familyLabelX, yPos, {
      bold: true,
    });
    renderMixedText(motherText, familyContentX, yPos, {
      width: pageWidth - familyContentX - margin,
    });
    yPos += 16;

    const sisterText = `${data.family.sister.name[lang]} (${data.family.sister.status[lang]})`;
    renderMixedText(`${translations.sister}:`, familyLabelX, yPos, {
      bold: true,
    });
    renderMixedText(sisterText, familyContentX, yPos, {
      width: pageWidth - familyContentX - margin,
    });

    doc.end();

    const pdfBuffer = await pdfPromise;

    const langSuffix = lang === "en" ? "EN" : lang === "hi" ? "HI" : "MR";

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=Sandesh_Bagade_Biodata_${langSuffix}.pdf`,
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
