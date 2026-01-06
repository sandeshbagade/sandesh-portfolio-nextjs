"use client";

import { useEffect, useCallback, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { biodataInfo } from "@/lib/biodataData";

export const BiodataGenerator = () => {
  const { t, language } = useLanguage();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const CORRECT_PASSWORD = "21091998";

  const openPasswordModal = useCallback(() => {
    setShowPasswordModal(true);
    setPassword("");
    setError("");
  }, []);

  const closePasswordModal = useCallback(() => {
    setShowPasswordModal(false);
    setPassword("");
    setError("");
  }, []);

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
      
      // Close modal and reset state after successful download
      setShowPasswordModal(false);
      setPassword("");
      setError("");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  }, [language, t]);

  const handlePasswordSubmit = useCallback(() => {
    if (password === CORRECT_PASSWORD) {
      setError("");
      generatePDF();
    } else {
      setError(t.biodata.passwordError);
      setPassword("");
    }
  }, [password, generatePDF, t]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handlePasswordSubmit();
    }
  }, [handlePasswordSubmit]);

  const handleDownloadClick = useCallback(() => {
    // Skip password protection in development mode
    if (process.env.NODE_ENV === "development") {
      generatePDF();
    } else {
      openPasswordModal();
    }
  }, [generatePDF, openPasswordModal]);

  useEffect(() => {
    (window as any).generateBiodataPDF = handleDownloadClick;
    return () => {
      delete (window as any).generateBiodataPDF;
    };
  }, [handleDownloadClick]);

  return (
    <>
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.biodata.passwordTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t.biodata.passwordPrompt}
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t.biodata.passwordPlaceholder}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}
            <div className="flex gap-3">
              <button
                onClick={handlePasswordSubmit}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {t.biodata.passwordSubmit}
              </button>
              <button
                onClick={closePasswordModal}
                className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {t.biodata.passwordCancel}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BiodataGenerator;
