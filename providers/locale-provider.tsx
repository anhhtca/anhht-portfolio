"use client";

import { defaultLocale, getDictionary, Locale, LocaleDictionary } from "@/locales";
import * as React from "react";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: LocaleDictionary;
}

const LocaleContext = React.createContext<LocaleContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  toggleLocale: () => {},
  t: getDictionary(defaultLocale),
});

const STORAGE_KEY = "portfolio-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(defaultLocale);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "vi" || stored === "en") {
        setLocaleState(stored);
        document.documentElement.lang = stored;
      } else {
        // Fallback or browser detection
        const browserLang = navigator.language.toLowerCase();
        const initialLocale: Locale = browserLang.startsWith("vi") ? "vi" : "en";
        setLocaleState(initialLocale);
        document.documentElement.lang = initialLocale;
      }
    } catch {
      // ignore localStorage errors (e.g. incognito)
    } finally {
      setMounted(true);
    }
  }, []);

  const setLocale = React.useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // ignore
    }
  }, []);

  const toggleLocale = React.useCallback(() => {
    setLocale(locale === "vi" ? "en" : "vi");
  }, [locale, setLocale]);

  const t = React.useMemo(() => getDictionary(locale), [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextType {
  const context = React.useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
