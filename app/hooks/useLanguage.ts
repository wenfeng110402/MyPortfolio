"use client";

import { useState, useEffect } from "react";
import { translations } from "../data/translations";

export type Lang = "zh" | "en";

export function useLanguage() {
  // Always initialize with "en" to match server rendering
  // Language will be updated from localStorage after mount
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    // Read language from localStorage after component mounts
    // This ensures SSR and initial CSR match (hydration fix)
    const saved = localStorage.getItem("lang") as Lang;
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(saved);
    }

    // Listen for language changes
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setLang(customEvent.detail);
    };

    window.addEventListener("languageChange", handleLangChange);
    return () => window.removeEventListener("languageChange", handleLangChange);
  }, []);

  const t = (key: string): React.ReactNode => {
    const keys = key.split(".");
    let value: unknown = translations[lang];
    
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    
    return (value as React.ReactNode) || key;
  };

  return { lang, t };
}
