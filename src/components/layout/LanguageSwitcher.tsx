"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";
import { HiGlobeAlt } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en" as Language, name: "English", nativeName: "English" },
  { code: "hi" as Language, name: "Hindi", nativeName: "हिंदी" },
  { code: "mr" as Language, name: "Marathi", nativeName: "मराठी" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === language);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
        aria-label='Change language'
      >
        <HiGlobeAlt className='w-5 h-5 text-gray-700 dark:text-gray-300' />
        <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
          {currentLanguage?.nativeName}
        </span>
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50'>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                language === lang.code
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {lang.nativeName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
