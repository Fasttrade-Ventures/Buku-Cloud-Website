"use client";

import Link from "next/link";
import { Badge, Button, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { PricingGrid } from "@/components/pricing-grid";
import { PracticeConsoleMockup } from "@/components/practice-console-mockup";
import { REGISTER_PRACTICE_URL } from "@/lib/site";
import { useT } from "./i18n-provider";
import { ProofStrip } from "@/components/proof-strip";
import { GuideHubLinks } from "@/components/related-links";

const TOOL_ICONS = [<DashboardIcon key="d" />, <SwitchIcon key="s" />, <BulkIcon key="b" />];

export function AccountantsContent() {
  const t = useT();

  return (
    <>
      <Section>
        <div className="container-max grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
          <div className="flex flex-col items-start gap-6">
            <Eyebrow>{t.accountants.hero.eyebrow}</Eyebrow>
            <h1 className="font-display text-[clamp(40px,5.6vw,72px)] font-medium leading-[1.02] tracking-[-0.025em] text-ink">
              {t.accountants.hero.h1}
            </h1>
            <p className="max-w-[55ch] text-[18px] leading-[1.55] text-ink-muted">
              {t.accountants.hero.body}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href={REGISTER_PRACTICE_URL} external size="lg">
                {t.accountants.hero.primary} <span aria-hidden>→</span>
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                {t.accountants.hero.secondary}
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Badge tone="default">
                <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                {t.accountants.hero.badges[0]}
              </Badge>
              <Badge tone="default">{t.accountants.hero.badges[1]}</Badge>
              <Badge tone="default">{t.accountants.hero.badges[2]}</Badge>
            </div>
          </div>
          <PracticeConsoleMockup />
        </div>
      </Section>

      <ProofStrip title="Built for Malaysian practices" />

      <Section bg="alt">
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.accountants.tools.eyebrow}
            title={t.accountants.tools.title}
            size="lg"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {t.accountants.tools.list.map((tool, i) => (
              <div
                key={tool.title}
                className="flex flex-col gap-4 rounded-[16px] border border-border bg-bg-cream p-7"
              >
                <div className="text-ink">{TOOL_ICONS[i]}</div>
                <h3 className="font-display text-[22px] font-medium leading-tight text-ink">
                  {tool.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-ink-muted">
                  {tool.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.accountants.testimonials.eyebrow}
            title={t.accountants.testimonials.title}
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {t.accountants.testimonials.list.map((tm) => (
              <article
                key={tm.name}
                className="relative flex flex-col gap-6 rounded-[16px] border border-border bg-bg-cream p-8"
              >
                <p className="font-display text-[20px] italic leading-[1.45] text-ink">
                  “{tm.quote}”
                </p>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[14px] font-semibold text-ink">
                      {tm.name}
                    </div>
                    <div className="text-[12px] text-ink-muted">{tm.firm}</div>
                  </div>
                  <div className="rounded-[8px] border border-border bg-surface px-3 py-2 text-right">
                    <div className="font-mono text-[16px] font-medium text-ink">
                      {tm.stat}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.075em] text-ink-muted">
                      {tm.statLabel}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="alt" id="pricing" className="scroll-mt-24">
        <div className="container-max py-24">
          <div className="flex flex-col items-center gap-5 text-center">
            <Eyebrow>{t.accountants.plans.eyebrow}</Eyebrow>
            <h2 className="max-w-[20ch] font-display text-[clamp(32px,4.4vw,52px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              {t.accountants.plans.title}
            </h2>
            <p className="max-w-[60ch] text-[16px] leading-[1.55] text-ink-muted">
              {t.accountants.plans.sub}
            </p>
          </div>
          <div className="mt-12">
            <PricingGrid
              defaultAudience="accountant"
              showAudienceToggle={false}
            />
          </div>

          <div className="mt-20 overflow-hidden rounded-[20px] border border-border bg-ink text-white">
            <div className="grid gap-10 p-10 md:grid-cols-[1.2fr_1fr] md:gap-14 md:p-12">
              <div className="flex flex-col gap-5">
                <Eyebrow tone="white">{t.accountants.partner.eyebrow}</Eyebrow>
                <h3 className="font-display text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
                  {t.accountants.partner.titleLine1}
                  <br />
                  {t.accountants.partner.titleLine2}{" "}
                  <span className="text-mustard">
                    {t.accountants.partner.titleLine3}
                  </span>
                  {t.accountants.partner.titleLine4}
                </h3>
                <p className="max-w-[52ch] text-[15px] leading-[1.65] text-white/75">
                  {t.accountants.partner.body}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button href="/contact" variant="mustard" size="md">
                    {t.accountants.partner.primary} <span aria-hidden>→</span>
                  </Button>
                  <a
                    href={REGISTER_PRACTICE_URL}
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-white/85 hover:text-white"
                  >
                    {t.accountants.partner.secondary} <span aria-hidden>→</span>
                  </a>
                </div>
              </div>

              <ol className="flex flex-col gap-3 self-center">
                {t.accountants.partner.steps.map((s) => (
                  <li
                    key={s.n}
                    className="flex gap-4 rounded-[12px] border border-white/10 bg-white/[0.04] p-4"
                  >
                    <span className="font-mono text-[18px] font-medium text-mustard">
                      {s.n}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-[14px] font-semibold text-white">
                        {s.h}
                      </span>
                      <span className="text-[13px] leading-[1.55] text-white/65">
                        {s.b}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p className="border-t border-white/10 px-10 py-4 text-center text-[12px] text-white/55 md:px-12">
              {t.accountants.partner.footnote}
            </p>
          </div>
        </div>
      </Section>

      <GuideHubLinks />

      <Section className="bg-mustard/[.08]">
        <div className="container-max flex flex-col items-center gap-6 py-24 text-center">
          <Eyebrow>{t.accountants.finalCta.eyebrow}</Eyebrow>
          <h2 className="max-w-[22ch] font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
            {t.accountants.finalCta.title}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={REGISTER_PRACTICE_URL} external size="lg">
              {t.accountants.finalCta.primary} <span aria-hidden>→</span>
            </Button>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-accent"
            >
              {t.accountants.finalCta.secondary} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function DashboardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="9" height="9" stroke="currentColor" strokeWidth="1.4" />
      <rect x="15" y="4" width="9" height="5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="4" y="15" width="9" height="9" stroke="currentColor" strokeWidth="1.4" />
      <rect x="15" y="11" width="9" height="13" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function SwitchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 9h16l-3-3M24 19H8l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BulkIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="6" width="20" height="4" stroke="currentColor" strokeWidth="1.4" />
      <rect x="4" y="12" width="20" height="4" stroke="currentColor" strokeWidth="1.4" />
      <rect x="4" y="18" width="20" height="4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
