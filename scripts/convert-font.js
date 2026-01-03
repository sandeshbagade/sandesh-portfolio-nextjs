const fs = require('fs');
const path = require('path');

// Read the TTF font file
const fontPath = path.join(__dirname, '../public/fonts/NotoSansDevanagari-Regular.ttf');
const fontBuffer = fs.readFileSync(fontPath);

// Convert to base64
const fontBase64 = fontBuffer.toString('base64');

// Create a module that exports the font
const fontModule = `// Auto-generated font file for pdf-lib
export const NotoSansDevanagariFont = '${fontBase64}';
`;

// Write to a TypeScript file
const outputPath = path.join(__dirname, '../src/lib/NotoSansDevanagariFont.ts');
fs.writeFileSync(outputPath, fontModule);

console.log('Font converted successfully!');
console.log(`Output: ${outputPath}`);
console.log(`Size: ${(fontBase64.length / 1024).toFixed(2)} KB`);

