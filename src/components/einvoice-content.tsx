"use client";

import Link from "next/link";
import { Badge, Button, CheckIcon, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { Faq } from "@/components/faq";
import { REGISTER_URL } from "@/lib/site";
import { useT } from "./i18n-provider";
import { ProofStrip } from "@/components/proof-strip";
import { GuideHubLinks } from "@/components/related-links";

export function EInvoiceContent() {
  const t = useT();
  return (
    <>
      <Section>
        <div className="container-max grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-28">
          <div className="flex flex-col items-start gap-6">
            <Eyebrow>{t.einvoice.hero.eyebrow}</Eyebrow>
            <h1 className="font-display text-[clamp(40px,5.6vw,72px)] font-medium leading-[1.02] tracking-[-0.025em] text-ink">
              {t.einvoice.hero.h1}
            </h1>
            <p className="max-w-[55ch] text-[18px] leading-[1.55] text-ink-muted">
              {t.einvoice.hero.body}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href={REGISTER_URL} size="lg" external>
                {t.einvoice.hero.primary} <span aria-hidden>→</span>
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                {t.einvoice.hero.secondary}
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Badge tone="forest">{t.einvoice.hero.badges[0]}</Badge>
              <Badge tone="default">{t.einvoice.hero.badges[1]}</Badge>
              <Badge tone="default">{t.einvoice.hero.badges[2]}</Badge>
            </div>
          </div>

          <div className="rounded-[16px] border border-border bg-surface p-6 shadow-[0_30px_80px_-30px_rgba(26,26,26,0.18)]">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-[18px] text-ink">
                {t.einvoice.hero.pipeline}
              </span>
              <span className="rounded-full bg-forest px-3 py-1 text-[11px] font-semibold text-white">
                {t.einvoice.hero.connected}
              </span>
            </div>
            <div className="flex flex-col gap-2 text-[12px]">
              {[
                ["INV-0921", "Validated", "var(--color-forest)"],
                ["INV-0922", "Submitted", "var(--color-mustard)"],
                ["INV-0923", "Issued", "var(--color-ink-muted)"],
                ["INV-0918", "Archived (7 yr)", "var(--color-ink-muted)"],
              ].map(([id, s, c]) => (
                <div
                  key={id}
                  className="flex items-center justify-between rounded-[8px] border border-border bg-bg-cream p-3"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: c as string }}
                    />
                    <span className="font-mono text-ink">{id}</span>
                  </div>
                  <span className="font-semibold text-ink">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ProofStrip title="MyInvois-ready ops, Malaysia-first proof" />

      <Section bg="alt">
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.einvoice.what.eyebrow}
            title={t.einvoice.what.title}
            subtitle={t.einvoice.what.sub}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.einvoice.what.facts.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-3 rounded-[16px] border border-border bg-bg-cream p-7"
              >
                <h3 className="font-display text-[20px] font-medium text-ink">
                  {f.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-ink-muted">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.einvoice.handle.eyebrow}
            title={t.einvoice.handle.title}
            subtitle={t.einvoice.handle.sub}
          />
          <div className="relative mt-16">
            <div
              className="pointer-events-none absolute left-[7%] right-[7%] top-[2.25rem] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
              aria-hidden
            />
            <ol className="grid gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-4 lg:gap-x-6">
              {t.einvoice.handle.steps.map((s, i) => (
                <li
                  key={s.n}
                  className="relative flex flex-col items-center gap-4 text-center"
                >
                  <div className="relative">
                    <span
                      className="absolute inset-0 -z-10 rounded-full bg-accent/10 blur-md"
                      aria-hidden
                    />
                    <span className="relative inline-flex h-[72px] w-[72px] items-center justify-center rounded-full border border-border bg-surface font-display text-[24px] font-medium text-ink shadow-[0_8px_24px_-12px_rgba(26,26,26,0.18)]">
                      {s.n}
                      <span
                        className="absolute -bottom-1 -right-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white"
                        aria-hidden
                      >
                        <StepIcon index={i} />
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                      {t.einvoice.handle.stepLabel} {s.n}
                    </span>
                    <h3 className="font-display text-[20px] font-medium leading-[1.2] text-ink">
                      {s.title}
                    </h3>
                    <p className="text-[14px] leading-[1.6] text-ink-muted">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section bg="alt">
        <div className="container-max py-24">
          <div className="rounded-[16px] border border-border bg-surface p-10 md:p-14">
            <div className="grid gap-10 md:grid-cols-[1fr_320px] md:items-center">
              <div>
                <Eyebrow>{t.einvoice.demo.eyebrow}</Eyebrow>
                <h2 className="mt-4 font-display text-[clamp(28px,3.6vw,40px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
                  {t.einvoice.demo.title}
                </h2>
                <p className="mt-3 max-w-[58ch] text-[16px] leading-[1.6] text-ink-muted">
                  {t.einvoice.demo.body}
                </p>
                <ul className="mt-5 flex flex-col gap-2 text-[14px] text-ink">
                  {t.einvoice.demo.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckIcon /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <Button href={REGISTER_URL} size="lg" external>
                  {t.einvoice.demo.primary} <span aria-hidden>→</span>
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 rounded-[12px] border border-border bg-bg-cream px-5 py-3 text-[14px] font-semibold text-ink hover:bg-surface-alt"
                >
                  {t.einvoice.demo.secondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.einvoice.faq.eyebrow}
            title={t.einvoice.faq.title}
          />
          <div className="mt-12">
            <Faq items={t.einvoice.faq.items} />
          </div>
        </div>
      </Section>

      <GuideHubLinks />

      <Section bg="accent">
        <div className="container-max flex flex-col items-center gap-6 py-24 text-center text-white">
          <Eyebrow tone="white">{t.einvoice.finalCta.eyebrow}</Eyebrow>
          <h2 className="max-w-[22ch] font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.05] tracking-[-0.02em]">
            {t.einvoice.finalCta.title}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={REGISTER_URL} variant="dark" size="lg" external>
              {t.einvoice.finalCta.primary} <span aria-hidden>→</span>
            </Button>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-white hover:text-white/80"
            >
              {t.einvoice.finalCta.secondary} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function StepIcon({ index }: { index: number }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": true,
  } as const;
  if (index === 0) {
    return (
      <svg {...common}>
        <path
          d="M3 1.5h5l3 3v8a.5.5 0 0 1-.5.5h-7.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M8 1.5V5h3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common}>
        <path d="M7 11V3M4 6l3-3 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg {...common}>
        <path d="m2.5 7 3 3 6-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="2" y="3" width="10" height="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 6v6.5h8V6M5.5 8.5h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
