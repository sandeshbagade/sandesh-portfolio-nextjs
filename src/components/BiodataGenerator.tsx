"use client";

import { useEffect, useCallback } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { biodataInfo } from "@/lib/biodataData";

export const BiodataGenerator = () => {
  const { t, language } = useLanguage();

  const generatePDF = useCallback(async () => {
    try {
      const lang = language as "en" | "hi" | "mr";

      const response = await fetch("/api/generate-biodata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lang,
          data: biodataInfo,
          translations: t.biodata,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.error || "Failed to generate PDF");
        return;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const langSuffix =
        language === "en" ? "EN" : language === "hi" ? "HI" : "MR";
      link.download = `Sandesh_Bagade_Biodata_${langSuffix}.pdf`;
      link.click();
      URL.revokeObjectURL(url);

      console.log("PDF generated successfully");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  }, [language, t]);

  useEffect(() => {
    (window as any).generateBiodataPDF = generatePDF;
    return () => {
      delete (window as any).generateBiodataPDF;
    };
  }, [generatePDF]);

  return null;
};

export default BiodataGenerator;
