"use client";

import Link from "next/link";
import { FOOTER_LINKS, type FooterColumnKey } from "@/lib/site";
import { LanguageToggle } from "./language-toggle";
import { LogoLight } from "./logo";
import { useI18n } from "./i18n-provider";

const COLUMN_TITLE_KEY: Record<FooterColumnKey, "sectionProduct" | "sectionCompany" | "sectionHelp" | "sectionLegal"> = {
  Product: "sectionProduct",
  Company: "sectionCompany",
  Help: "sectionHelp",
  Legal: "sectionLegal",
};

export function Footer() {
  const { t, locale } = useI18n();
  const isBm = locale === "bm";

  return (
    <footer className="bg-ink text-white/80">
      <div className="container-max grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="flex flex-col gap-5">
          <LogoLight height={30} />
          <p className="max-w-[28ch] text-[14px] leading-[1.6] text-white/70">
            {t.footer.tagline}
          </p>
          <p className="text-[12px] text-white/50">
            Fasttrade Ventures · Sendayan, NS · {t.footer.pdpa}
          </p>
        </div>

        {(Object.entries(FOOTER_LINKS) as [FooterColumnKey, typeof FOOTER_LINKS[FooterColumnKey]][]).map(
          ([col, links]) => (
            <div key={col} className="flex flex-col gap-4">
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.075em] text-white/60">
                {t.footer[COLUMN_TITLE_KEY[col]]}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.href + l.labelEn}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-white/80 hover:text-white"
                    >
                      {isBm ? l.labelBm : l.labelEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/55">
            © {new Date().getFullYear()} Fasttrade Ventures. BukuCloud.{" "}
            {t.footer.rights}
          </p>
          <div className="flex items-center gap-3 text-[12px] text-white/55">
            <LanguageToggle className="border-white/15 bg-white/5 text-white/70" />
            <span>{t.footer.madeIn}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
