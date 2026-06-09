"use client";

import { useI18n } from "./i18n-provider";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  return (
    <span
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-border bg-surface text-[11px] font-semibold tracking-wider text-ink-muted ${className}`}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        aria-label={t.nav.languageEnglishAria}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === "en" ? "bg-ink text-white" : "text-ink-muted hover:text-ink"
        }`}
      >
        {t.nav.languageEN}
      </button>
      <button
        type="button"
        onClick={() => setLocale("bm")}
        aria-pressed={locale === "bm"}
        aria-label={t.nav.languageBMAria}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === "bm" ? "bg-ink text-white" : "text-ink-muted hover:text-ink"
        }`}
      >
        {t.nav.languageBM}
      </button>
    </span>
  );
}
