"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge, Eyebrow } from "./ui";
import { DashboardMockup } from "./dashboard-mockup";
import { PracticeConsoleMockup } from "./practice-console-mockup";
import { REGISTER_PRACTICE_URL, REGISTER_URL } from "@/lib/site";
import { useT } from "./i18n-provider";

type Audience = "sme" | "firm";

export function HomeHero() {
  const t = useT();
  const [audience, setAudience] = useState<Audience>("sme");
  const c = t.home.hero[audience];
  const isFirm = audience === "firm";
  const primaryHref = isFirm ? REGISTER_PRACTICE_URL : REGISTER_URL;
  const secondaryHref = isFirm ? "/accountants#pricing" : "/contact";
  const secondaryIsExternal = false;
  const dotMap = [true, false, false] as const;

  return (
    <section className="container-max grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-24">
      <div className="flex flex-col items-start gap-6">
        <div
          role="tablist"
          aria-label={t.home.hero.audienceSme + " / " + t.home.hero.audienceFirm}
          className="inline-flex rounded-full bg-ink p-1 text-[12px] font-semibold"
        >
          <button
            role="tab"
            aria-selected={audience === "sme"}
            onClick={() => setAudience("sme")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 transition-colors ${
              audience === "sme"
                ? "bg-surface text-ink"
                : "text-white/70 hover:text-white"
            }`}
          >
            <BriefcaseIcon /> {t.home.hero.audienceSme}
          </button>
          <button
            role="tab"
            aria-selected={audience === "firm"}
            onClick={() => setAudience("firm")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 transition-colors ${
              audience === "firm"
                ? "bg-surface text-ink"
                : "text-white/70 hover:text-white"
            }`}
          >
            <CalcIcon /> {t.home.hero.audienceFirm}
          </button>
        </div>

        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="font-display text-[clamp(40px,5.6vw,72px)] font-medium leading-[1.02] tracking-[-0.025em] text-ink">
          {c.h1}
        </h1>
        <p className="max-w-[52ch] text-[18px] leading-[1.55] text-ink-muted">
          {c.body}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-[12px] bg-accent px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {c.primary} <span aria-hidden>→</span>
          </a>
          {secondaryIsExternal ? (
            <a
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-[12px] border border-ink bg-transparent px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              {c.secondary}
            </a>
          ) : (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-[12px] border border-ink bg-transparent px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              {c.secondary}
            </Link>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {c.badges.map((label, i) => (
            <Badge key={label}>
              {dotMap[i] && (
                <span className="h-1.5 w-1.5 rounded-full bg-forest" />
              )}
              {label}
            </Badge>
          ))}
        </div>
      </div>

      <div className="lg:min-w-0">
        {audience === "sme" ? <DashboardMockup /> : <PracticeConsoleMockup />}
      </div>
    </section>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="1.5" y="4" width="11" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 4V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function CalcIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="2.5" y="1.5" width="9" height="11" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4.5 4h5M4.5 7h1m2 0h1m-4 2.5h1m2 0h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
