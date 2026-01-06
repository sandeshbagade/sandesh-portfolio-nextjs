"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // Detect browser language and set default
  useEffect(() => {
    // First check if user has previously selected a language
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "hi" || saved === "mr")) {
      setLanguageState(saved);
      return;
    }

    // If no saved preference, detect from browser
    const browserLang = navigator.language.toLowerCase();

    // Check for Hindi
    if (browserLang.startsWith("hi")) {
      setLanguageState("hi");
      localStorage.setItem("language", "hi");
    }
    // Check for Marathi
    else if (browserLang.startsWith("mr")) {
      setLanguageState("mr");
      localStorage.setItem("language", "mr");
    }
    // Default to English for all other languages
    else {
      setLanguageState("en");
      localStorage.setItem("language", "en");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
