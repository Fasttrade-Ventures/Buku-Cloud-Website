export type Locale = "en" | "bm";

export const LOCALES: Locale[] = ["en", "bm"];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  bm: "Bahasa Malaysia",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en-MY",
  bm: "ms-MY",
};

export const STORAGE_KEY = "bukucloud-locale";
