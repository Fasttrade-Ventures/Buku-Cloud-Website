import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Section } from "@/components/ui";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  COMPANY_REGISTRATION,
  DPO_EMAIL,
  LEGAL_DOCS,
  LEGAL_EMAIL,
  LEGAL_LAST_UPDATED,
  LEGAL_VERSION,
} from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "Legal — Privacy, Terms, DPA, Cookies",
  description:
    "All BukuCloud legal documents: Privacy Policy (PDPA-aligned, EN+BM), Terms of Service, Data Processing Agreement, and Cookie Policy. Backed by shipped product controls.",
  path: "/legal",
  keywords: [
    "BukuCloud legal",
    "PDPA Malaysia software",
    "Malaysia DPA template",
    "Malaysia privacy policy SaaS",
  ],
});

export default function LegalIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Legal", href: "/legal" },
        ]}
      />
      <Section bordered>
        <div className="container-max py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-14">
            <div className="flex flex-col gap-5">
              <Eyebrow>Legal</Eyebrow>
              <h1 className="font-display text-[clamp(40px,5.6vw,72px)] font-medium leading-[1.02] tracking-[-0.025em] text-ink">
                Legal templates,
                <br />
                <span className="italic text-accent">written plainly.</span>
              </h1>
              <p className="max-w-[60ch] text-[17px] leading-[1.6] text-ink-muted md:text-[18px]">
                Everything we&apos;re obliged to publish under Malaysia&apos;s
                Personal Data Protection Act 2010 (PDPA) and a few things
                we&apos;re not, but think you deserve to read in plain
                English. Each document has a one-paragraph summary at the
                top.
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-ink-muted">
                <span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">
                    Last updated
                  </span>{" "}
                  <span className="font-mono text-ink">
                    {LEGAL_LAST_UPDATED}
                  </span>
                </span>
                <span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">
                    Version
                  </span>{" "}
                  <span className="font-mono text-ink">{LEGAL_VERSION}</span>
                </span>
              </div>
            </div>
            <div className="rounded-[18px] border border-border bg-surface p-6 md:p-7">
              <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                Controller of record
              </div>
              <div className="mt-3 font-display text-[20px] font-medium text-ink">
                {COMPANY_NAME}
              </div>
              <div className="mt-1 font-mono text-[12px] text-ink-muted">
                {COMPANY_REGISTRATION}
              </div>
              <div className="mt-3 text-[13px] leading-[1.55] text-ink-muted">
                {COMPANY_ADDRESS}
              </div>
              <div className="mt-5 h-px w-full bg-border" />
              <div className="mt-5 flex flex-col gap-1.5 text-[13px]">
                <span className="text-ink-muted">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">
                    DPO
                  </span>{" "}
                  <a
                    className="font-semibold text-accent hover:text-accent-dark"
                    href={`mailto:${DPO_EMAIL}`}
                  >
                    {DPO_EMAIL}
                  </a>
                </span>
                <span className="text-ink-muted">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">
                    Legal
                  </span>{" "}
                  <a
                    className="font-semibold text-accent hover:text-accent-dark"
                    href={`mailto:${LEGAL_EMAIL}`}
                  >
                    {LEGAL_EMAIL}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-20 md:py-24">
          <div className="grid gap-5 md:grid-cols-2">
            {LEGAL_DOCS.map((d, i) => (
              <Link
                key={d.slug}
                href={d.href}
                className="group relative flex flex-col gap-5 overflow-hidden rounded-[20px] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_18px_42px_-18px_rgba(26,26,26,0.22)] md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-semibold tracking-[0.08em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-border bg-surface-alt px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                    {d.badge}
                  </span>
                </div>
                <h2 className="font-display text-[26px] font-medium leading-[1.15] text-ink md:text-[30px]">
                  {d.title}
                </h2>
                <p className="text-[14px] leading-[1.6] text-ink-muted md:text-[15px]">
                  {d.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-5 text-[13px]">
                  <span className="font-mono text-ink-muted">
                    Last updated {LEGAL_LAST_UPDATED}
                  </span>
                  <span className="font-semibold text-accent transition-all group-hover:translate-x-0.5">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="alt" bordered>
        <div className="container-max grid gap-8 py-20 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <div>
            <Eyebrow>What we ship</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              The PDPA controls behind these documents.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.65] text-ink-muted">
            Our policies aren&apos;t marketing copy — every claim is wired
            into the product. Each item below is shipped, in code, today.
          </p>
        </div>
        <div className="container-max pb-24">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Per-tenant database",
                body: "Each company gets its own MySQL database (Stancl Tenancy). Cross-tenant leaks are physically impossible.",
              },
              {
                title: "Encryption at rest",
                body: "AES-256 on every tenant DB, TLS 1.2+ in transit. Daily encrypted backups for 30 days.",
              },
              {
                title: "Right of access",
                body: "Settings → Data export gives you a full archive (24-hour rate limit, audit-logged).",
              },
              {
                title: "Right to erasure",
                body: "Settings → Delete account triggers a 30-day cooling-off then a hard delete with PII redacted.",
              },
              {
                title: "Two-factor auth",
                body: "TOTP on every plan with recovery codes. Tenant admins can require 2FA for all staff.",
              },
              {
                title: "Audit log",
                body: "Per-tenant audit log of every action. Sensitive reads (admin views, exports) are double-logged.",
              },
              {
                title: "Receipt safety",
                body: "Private S3 with tenant-prefixed paths, short-lived signed URLs, EXIF/GPS stripped on upload.",
              },
              {
                title: "Log scrubbing",
                body: "Passwords, API keys, payment data redacted from application logs by a Monolog scrubber.",
              },
              {
                title: "Breach response",
                body: "Documented runbook, 72-hour PDPC notification, customer notification template (EN + BM).",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-3 rounded-[16px] border border-border bg-surface p-6"
              >
                <h3 className="font-display text-[17px] font-medium text-ink">
                  {f.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-ink-muted">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-20 md:py-24">
          <div className="overflow-hidden rounded-[24px] border border-border bg-surface px-8 py-14 text-center md:px-16 md:py-20">
            <Eyebrow>Need a signed copy?</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-[28ch] font-display text-[clamp(28px,3.4vw,42px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
              Counter-signed DPAs and procurement questionnaires welcome.
            </h2>
            <p className="mx-auto mt-5 max-w-[58ch] text-[15px] leading-[1.65] text-ink-muted">
              Most customers are covered by these click-through documents.
              For Enterprise procurement (signed DPA, security questionnaire,
              SOC summary, source-code escrow on Enterprise contracts) reach
              out to{" "}
              <a
                className="font-semibold text-accent hover:text-accent-dark"
                href={`mailto:${LEGAL_EMAIL}`}
              >
                {LEGAL_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
