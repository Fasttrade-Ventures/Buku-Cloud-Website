"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  bm,
  en,
  LOCALE_HTML_LANG,
  STORAGE_KEY,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
};

const I18nContext = createContext<Ctx | null>(null);

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "bm") return stored;
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("ms") || nav.startsWith("id")) return "bm";
  } catch {
    /* ignore */
  }
  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Hydrate from storage / browser preference once on the client.
  useEffect(() => {
    const next = detectInitialLocale();
    setLocaleState(next);
  }, []);

  // Keep <html lang> in sync so screen readers, browsers and Google Translate
  // know which language is being shown.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", LOCALE_HTML_LANG[locale]);
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      locale,
      setLocale,
      t: locale === "bm" ? bm : en,
    }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/** Returns the current dictionary plus the locale and a setter. */
export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // SSR / pre-hydration fallback — return English so the static HTML still
    // renders. Once the provider mounts, content updates to the chosen locale.
    return { locale: "en" as Locale, setLocale: () => {}, t: en };
  }
  return ctx;
}

/** Convenience hook: returns just the dictionary. */
export function useT(): Dictionary {
  return useI18n().t;
}
