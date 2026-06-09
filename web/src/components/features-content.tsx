"use client";

import Link from "next/link";
import { Button, CheckIcon, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { REGISTER_URL } from "@/lib/site";
import { useI18n } from "./i18n-provider";

const COMPARE_ROWS_KEYS = [
  ["Built for Malaysia", "Yes", "Generic", "Generic"],
  ["SST 6% auto-calc", "Yes", "Yes (manual)", "Manual"],
  ["MyInvois e-Invoicing", "Yes (included)", "Add-on", "—"],
  ["Mobile receipt OCR", "Yes", "Yes", "—"],
  ["WhatsApp invoice send", "Yes", "—", "—"],
  ["Practice console for accountants", "Yes", "Add-on", "—"],
  ["Local support (Malay & English)", "Yes", "Email only", "Forum only"],
  ["Self-hosted option", "Yes (Enterprise)", "—", "—"],
];

const COMPARE_ROWS_BM = [
  ["Dibina untuk Malaysia", "Ya", "Generik", "Generik"],
  ["Auto-kira SST 6%", "Ya", "Ya (manual)", "Manual"],
  ["E-Invois MyInvois", "Ya (disertakan)", "Tambahan", "—"],
  ["OCR resit mudah alih", "Ya", "Ya", "—"],
  ["Hantar invois WhatsApp", "Ya", "—", "—"],
  ["Konsol Practice untuk akauntan", "Ya", "Tambahan", "—"],
  ["Sokongan tempatan (BM & Inggeris)", "Ya", "Emel sahaja", "Forum sahaja"],
  ["Pilihan self-hosted", "Ya (Enterprise)", "—", "—"],
];

export function FeaturesContent() {
  const { t, locale } = useI18n();
  const compareRows = locale === "bm" ? COMPARE_ROWS_BM : COMPARE_ROWS_KEYS;

  return (
    <>
      <Section>
        <div className="container-max flex flex-col items-center gap-6 py-20 text-center md:py-28">
          <Eyebrow>{t.features.hero.eyebrow}</Eyebrow>
          <h1 className="max-w-[18ch] font-display text-[clamp(40px,5.6vw,72px)] font-medium leading-[1.02] tracking-[-0.025em] text-ink">
            {t.features.hero.h1Line1}
            <br />
            {t.features.hero.h1Line2}
          </h1>
          <p className="max-w-[58ch] text-[18px] leading-[1.55] text-ink-muted">
            {t.features.hero.body}
          </p>
        </div>
      </Section>

      {t.features.jobs.map((job, i) => (
        <Section key={job.title} bg={i % 2 === 1 ? "alt" : "cream"}>
          <div className="container-max grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-5">
              <Eyebrow>{job.eyebrow}</Eyebrow>
              <h2 className="font-display text-[clamp(28px,3.8vw,44px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
                {job.title}
              </h2>
              <p className="max-w-[58ch] text-[16px] leading-[1.6] text-ink-muted">
                {job.body}
              </p>
              <ul className="mt-2 flex flex-col gap-2.5 text-[14px] text-ink">
                {job.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="leading-[1.5]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <JobMockup index={i} />
          </div>
        </Section>
      ))}

      <Section>
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.features.compare.eyebrow}
            title={t.features.compare.title}
            subtitle={t.features.compare.sub}
            size="md"
          />
          {/* Mobile-friendly stacked variant */}
          <div className="mt-10 flex flex-col gap-3 md:hidden">
            {compareRows.map((r) => (
              <div
                key={r[0]}
                className="rounded-[14px] border border-border bg-surface px-5 py-4"
              >
                <div className="text-[14px] font-semibold text-ink">{r[0]}</div>
                <dl className="mt-3 grid gap-2 text-[13px]">
                  <div className="flex items-center justify-between rounded-[10px] bg-bg-cream/70 px-3 py-2">
                    <dt className="font-semibold uppercase tracking-[0.08em] text-[10px] text-accent">
                      {t.features.compare.colBuku}
                    </dt>
                    <dd className="font-semibold text-ink">{r[1]}</dd>
                  </div>
                  <div className="flex items-center justify-between px-3 py-1">
                    <dt className="font-semibold uppercase tracking-[0.08em] text-[10px] text-ink-muted">
                      {t.features.compare.colGeneric}
                    </dt>
                    <dd className="text-ink-muted">{r[2]}</dd>
                  </div>
                  <div className="flex items-center justify-between px-3 py-1">
                    <dt className="font-semibold uppercase tracking-[0.08em] text-[10px] text-ink-muted">
                      {t.features.compare.colExcel}
                    </dt>
                    <dd className="text-ink-muted">{r[3]}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <div className="mt-10 hidden overflow-x-auto rounded-[16px] border border-border bg-surface md:block">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-border bg-bg-cream">
                  <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-[0.075em] text-ink-muted">
                    {t.features.compare.capability}
                  </th>
                  <th className="px-4 py-4 text-center text-[12px] font-bold uppercase tracking-[0.075em] text-accent">
                    {t.features.compare.colBuku}
                  </th>
                  <th className="px-4 py-4 text-center text-[12px] font-bold uppercase tracking-[0.075em] text-ink-muted">
                    {t.features.compare.colGeneric}
                  </th>
                  <th className="px-4 py-4 text-center text-[12px] font-bold uppercase tracking-[0.075em] text-ink-muted">
                    {t.features.compare.colExcel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r[0]} className="border-b border-border last:border-b-0">
                    <td className="px-5 py-4 text-[14px] font-medium text-ink">
                      {r[0]}
                    </td>
                    {r.slice(1).map((c, idx) => (
                      <td
                        key={idx}
                        className={`px-4 py-4 text-center text-[14px] ${
                          idx === 0 ? "bg-bg-cream/60 text-ink" : "text-ink-muted"
                        }`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section className="bg-mustard/[.08]">
        <div className="container-max flex flex-col items-center gap-6 py-24 text-center">
          <Eyebrow>{t.features.finalCta.eyebrow}</Eyebrow>
          <h2 className="max-w-[20ch] font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
            {t.features.finalCta.title}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={REGISTER_URL} size="lg" external>
              {t.features.finalCta.primary} <span aria-hidden>→</span>
            </Button>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-accent"
            >
              {t.features.finalCta.secondary} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function JobMockup({ index }: { index: number }) {
  const isInvoice = index === 0;
  const isPay = index === 1;
  const isCompliant = index === 2;
  const isReports = index === 3;

  return (
    <div className="overflow-hidden rounded-[16px] border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(26,26,26,0.18)]">
      <div className="border-b border-border bg-bg-cream px-4 py-3 font-mono text-[11px] text-ink-muted">
        {isInvoice && "Invoice INV-0921"}
        {isReports && "Reports hub"}
        {isCompliant && "MyInvois pipeline"}
        {isPay && "Bills · this week"}
        {!(isInvoice || isReports || isCompliant || isPay) && "Accountant view"}
      </div>
      <div className="p-6">
        {isInvoice && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-display text-[18px] text-ink">
                Andalus Catering Sdn Bhd
              </span>
              <span className="rounded-full bg-forest px-3 py-1 text-[11px] font-semibold text-white">
                Paid
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[12px]">
              <div className="rounded-[8px] border border-border bg-bg-cream p-3">
                <div className="text-ink-muted">Subtotal</div>
                <div className="font-mono text-[15px] text-ink">RM 4,820.00</div>
              </div>
              <div className="rounded-[8px] border border-border bg-bg-cream p-3">
                <div className="text-ink-muted">SST (6%)</div>
                <div className="font-mono text-[15px] text-ink">RM 289.20</div>
              </div>
              <div className="col-span-2 rounded-[8px] bg-ink p-3 text-white">
                <div className="text-[11px] uppercase tracking-[0.12em] text-white/70">
                  Total due
                </div>
                <div className="font-mono text-[20px]">RM 5,109.20</div>
              </div>
            </div>
          </div>
        )}
        {isReports && (
          <div className="grid grid-cols-3 gap-3">
            {[
              ["Profit & Loss", "var(--color-forest)"],
              ["Sales Reports", "var(--color-accent)"],
              ["Income by Customer", "var(--color-forest)"],
              ["Customer Credits", "var(--color-mustard)"],
              ["Purchases by Vendor", "var(--color-ink)"],
              ["Sales Tax Report", "var(--color-accent)"],
              ["Balance Sheet", "var(--color-ink)"],
              ["Cashflow Summary", "var(--color-mustard)"],
              ["Aged Reports (AP/AR)", "var(--color-accent)"],
            ].map(([label, c]) => (
              <div
                key={label}
                className="rounded-[8px] p-3 text-white"
                style={{ background: c as string }}
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.12em] opacity-80">
                  Report
                </div>
                <div className="mt-1 font-display text-[13px] leading-tight">
                  {label}
                </div>
              </div>
            ))}
          </div>
        )}
        {isCompliant && (
          <div className="flex flex-col gap-3">
            {[
              ["Issued", "INV-0918 · LHDN cleared", "var(--color-forest)"],
              ["Submitted", "INV-0921 · awaiting", "var(--color-mustard)"],
              ["Validated", "INV-0922 · OK", "var(--color-forest)"],
              ["Archived", "INV-0901 · 7-yr retention", "var(--color-ink-muted)"],
            ].map(([s, d, c]) => (
              <div
                key={d}
                className="flex items-center gap-3 rounded-[8px] border border-border bg-bg-cream p-3 text-[12px]"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: c as string }}
                />
                <div className="flex-1">
                  <div className="font-semibold text-ink">{s}</div>
                  <div className="text-ink-muted">{d}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {isPay && (
          <div className="flex flex-col gap-2 text-[12px]">
            {[
              ["Sime Darby Property", "RM 8,420", "Due 12 Jun"],
              ["TM Streamyx", "RM 240", "Due 15 Jun"],
              ["KWSP (EPF)", "RM 1,815", "Due 15 Jun"],
              ["LHDN PCB", "RM 920", "Due 15 Jun"],
            ].map(([v, a, d]) => (
              <div
                key={v}
                className="flex items-center justify-between rounded-[8px] border border-border bg-bg-cream p-3"
              >
                <div>
                  <div className="font-semibold text-ink">{v}</div>
                  <div className="text-ink-muted">{d}</div>
                </div>
                <div className="font-mono text-ink">{a}</div>
              </div>
            ))}
          </div>
        )}
        {!(isInvoice || isReports || isCompliant || isPay) && (
          <div className="flex flex-col gap-3 text-[13px]">
            <div className="flex items-center justify-between rounded-[8px] border border-border bg-bg-cream p-3">
              <div>
                <div className="font-semibold text-ink">Year-end pack export</div>
                <div className="text-ink-muted">PDF + Excel · audit-ready</div>
              </div>
              <span className="text-accent font-semibold">Export →</span>
            </div>
            <div className="flex items-center justify-between rounded-[8px] border border-border bg-bg-cream p-3">
              <div>
                <div className="font-semibold text-ink">Aishah Lim</div>
                <div className="text-ink-muted">Firm staff · Read + Adjust</div>
              </div>
              <span className="text-forest font-semibold">Active</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
