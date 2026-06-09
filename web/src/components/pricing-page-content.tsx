"use client";

import { useState } from "react";
import { Button, CheckIcon, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { PricingGrid } from "@/components/pricing-grid";
import { Faq } from "@/components/faq";
import { REGISTER_URL } from "@/lib/site";
import { useT } from "./i18n-provider";

const compareRows: Array<[string, string, string, string, string, string]> = [
  ["Active customers", "5", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  ["Team members", "1", "1", "3", "5", "Unlimited"],
  ["Bank accounts", "1", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  ["Bills & supplier payments", "—", "•", "•", "•", "•"],
  ["OCR receipt capture", "—", "•", "•", "•", "•"],
  ["Estimates & recurring invoices", "—", "•", "•", "•", "•"],
  ["P&L & sales reports", "—", "•", "•", "•", "•"],
  ["Customer statements & catalogue", "—", "—", "•", "•", "•"],
  ["Balance sheet & cash flow", "—", "—", "•", "•", "•"],
  ["Sales tax & ageing reports", "—", "—", "•", "•", "•"],
  ["Audit log & compliance pack", "—", "—", "—", "•", "•"],
  ["Payroll module", "—", "—", "—", "•", "•"],
  ["LHDN MyInvois e-Invoicing", "—", "—", "—", "Soon", "Soon"],
  ["Single sign-on (SSO)", "—", "—", "—", "—", "Soon"],
  ["Self-hosted deployment", "—", "—", "—", "—", "•"],
  ["Support", "Community", "Email", "Priority email", "Dedicated AM", "Dedicated engineer"],
];

const tierHeaders = ["Startup", "Solo", "Growth", "Corporate", "Enterprise"];

function CompareCellMobile({ value }: { value: string }) {
  if (value === "•") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-forest">
        <CheckIcon /> Included
      </span>
    );
  }
  if (value === "—") {
    return <span className="text-[13px] text-ink-muted/60">Not included</span>;
  }
  return <span className="text-[13px] font-semibold text-ink">{value}</span>;
}

function CompareMobile() {
  const [tier, setTier] = useState(2); // default to Growth (highlighted)
  return (
    <div className="md:hidden">
      <div
        role="tablist"
        aria-label="Plan comparison tabs"
        className="-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2"
      >
        {tierHeaders.map((name, i) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={tier === i}
            onClick={() => setTier(i)}
            className={`shrink-0 snap-start rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
              tier === i
                ? "border-ink bg-ink text-white"
                : i === 2
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-border bg-surface text-ink-muted"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="mt-4 overflow-hidden rounded-[16px] border border-border bg-surface">
        <div className="border-b border-border bg-bg-cream px-5 py-3 text-[12px] font-bold uppercase tracking-[0.075em] text-ink-muted">
          What&apos;s in {tierHeaders[tier]}
        </div>
        <ul className="divide-y divide-border">
          {compareRows.map((row) => (
            <li
              key={row[0]}
              className="flex items-start justify-between gap-4 px-5 py-3.5"
            >
              <span className="text-[14px] font-medium text-ink">{row[0]}</span>
              <CompareCellMobile value={row[tier + 1]} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PricingPageContent() {
  const t = useT();
  return (
    <>
      <Section>
        <div className="container-max flex flex-col items-center gap-6 py-20 text-center md:py-28">
          <Eyebrow>{t.pricing.hero.eyebrow}</Eyebrow>
          <h1 className="max-w-[18ch] font-display text-[clamp(40px,5.6vw,72px)] font-medium leading-[1.02] tracking-[-0.025em] text-ink">
            {t.pricing.hero.h1}
          </h1>
          <p className="max-w-[58ch] text-[18px] leading-[1.55] text-ink-muted">
            {t.pricing.hero.body}
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-max pb-24">
          <PricingGrid />
        </div>
      </Section>

      <Section bg="alt">
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.pricing.compare.eyebrow}
            title={t.pricing.compare.title}
            size="md"
          />
          <div className="mt-10">
            <CompareMobile />
          </div>
          <div className="mt-10 hidden overflow-x-auto rounded-[16px] border border-border bg-surface md:block">
            <table className="w-full min-w-[800px] text-left">
              <thead>
                <tr className="border-b border-border bg-bg-cream">
                  <th className="w-[260px] px-5 py-4 text-[12px] font-bold uppercase tracking-[0.075em] text-ink-muted">
                    {t.pricing.compare.featureCol}
                  </th>
                  {tierHeaders.map((tier, i) => (
                    <th
                      key={tier}
                      className={`px-4 py-4 text-center text-[12px] font-bold uppercase tracking-[0.075em] ${
                        i === 2 ? "text-accent" : "text-ink-muted"
                      }`}
                    >
                      {tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row[0]} className="border-b border-border last:border-b-0">
                    <td className="px-5 py-3.5 text-[14px] font-medium text-ink">
                      {row[0]}
                    </td>
                    {row.slice(1).map((cell, idx) => (
                      <td
                        key={idx}
                        className={`px-4 py-3.5 text-center text-[14px] ${
                          idx === 2 ? "bg-bg-cream/60 text-ink" : "text-ink-muted"
                        }`}
                      >
                        {cell === "•" ? (
                          <span className="inline-flex items-center justify-center">
                            <CheckIcon />
                          </span>
                        ) : cell === "—" ? (
                          <span className="text-ink-muted/50">—</span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-20">
          <div className="flex flex-col items-center gap-6 rounded-[16px] border border-border bg-bg-cream px-8 py-16 text-center md:flex-row md:justify-between md:text-left">
            <div className="max-w-[48ch]">
              <Eyebrow>{t.pricing.enterprise.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(28px,3.6vw,40px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
                {t.pricing.enterprise.title}
              </h2>
              <p className="mt-3 text-[16px] leading-[1.55] text-ink-muted">
                {t.pricing.enterprise.body}
              </p>
            </div>
            <Button href="/contact" variant="dark" size="lg">
              {t.pricing.enterprise.cta} <span aria-hidden>→</span>
            </Button>
          </div>
        </div>
      </Section>

      <Section bg="alt">
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.pricing.faq.eyebrow}
            title={t.pricing.faq.title}
          />
          <div className="mt-12">
            <Faq items={t.pricing.faq.items} />
          </div>
        </div>
      </Section>

      <Section className="bg-mustard/[.08]">
        <div className="container-max flex flex-col items-center gap-6 py-24 text-center">
          <Eyebrow>{t.pricing.finalCta.eyebrow}</Eyebrow>
          <h2 className="max-w-[20ch] font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
            {t.pricing.finalCta.title}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={REGISTER_URL} size="lg" external>
              {t.pricing.finalCta.primary} <span aria-hidden>→</span>
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              {t.pricing.finalCta.secondary}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
