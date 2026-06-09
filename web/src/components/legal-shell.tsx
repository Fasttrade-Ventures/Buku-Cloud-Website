"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Eyebrow, Section } from "@/components/ui";
import { LEGAL_LAST_UPDATED, LEGAL_VERSION } from "@/lib/legal";
import { useT } from "./i18n-provider";

export type LegalTocItem = { id: string; label: string };

export function LegalHero({
  title,
  description,
  badge,
  rightSlot,
  lastUpdated = LEGAL_LAST_UPDATED,
  version = LEGAL_VERSION,
}: {
  title: string;
  description?: ReactNode;
  badge?: string;
  rightSlot?: ReactNode;
  lastUpdated?: string;
  version?: string;
}) {
  const t = useT();
  return (
    <Section bordered>
      <div className="container-max py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Eyebrow>{t.legal.eyebrow}</Eyebrow>
              {badge && (
                <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                  {badge}
                </span>
              )}
            </div>
            <h1 className="font-display text-[clamp(36px,4.6vw,56px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              {title}
            </h1>
            {description && (
              <p className="max-w-[60ch] text-[16px] leading-[1.65] text-ink-muted md:text-[17px]">
                {description}
              </p>
            )}
            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-ink-muted">
              <span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">
                  {t.legal.lastUpdated}
                </span>{" "}
                <span className="font-mono text-ink">{lastUpdated}</span>
              </span>
              <span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">
                  {t.legal.version}
                </span>{" "}
                <span className="font-mono text-ink">{version}</span>
              </span>
              <Link
                href="/legal"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                {t.legal.backLink}
              </Link>
            </div>
          </div>
          {rightSlot && (
            <div className="flex justify-start md:justify-end">{rightSlot}</div>
          )}
        </div>
      </div>
    </Section>
  );
}

export function LegalLayout({
  toc,
  children,
}: {
  toc: LegalTocItem[];
  children: ReactNode;
}) {
  const t = useT();
  return (
    <Section>
      <div className="container-max grid gap-12 py-20 md:py-24 lg:grid-cols-[260px_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
            {t.legal.onThisPage}
          </div>
          <nav className="mt-3 flex flex-col gap-1.5">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[13px] leading-[1.5] text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
        <article className="flex flex-col gap-10">{children}</article>
      </div>
    </Section>
  );
}

export function LegalSection({
  id,
  title,
  number,
  children,
}: {
  id: string;
  title: string;
  number?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-baseline gap-3">
        {number && (
          <span className="font-mono text-[13px] font-semibold text-accent">
            {number}
          </span>
        )}
        <h2 className="font-display text-[24px] font-medium leading-[1.2] tracking-[-0.01em] text-ink md:text-[28px]">
          {title}
        </h2>
      </div>
      <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.7] text-ink-muted md:text-[16px]">
        {children}
      </div>
    </section>
  );
}

export function LegalContact({
  title,
  body,
  email,
}: {
  title: string;
  body: string;
  email: string;
}) {
  const t = useT();
  return (
    <Section bg="alt" bordered>
      <div className="container-max flex flex-col items-center gap-3 py-16 text-center">
        <Eyebrow>{t.legal.contactEyebrow}</Eyebrow>
        <h2 className="max-w-[36ch] font-display text-[22px] font-medium leading-[1.2] text-ink md:text-[26px]">
          {title}
        </h2>
        <p className="max-w-[60ch] text-[15px] leading-[1.6] text-ink-muted">
          {body}{" "}
          <a
            href={`mailto:${email}`}
            className="font-semibold text-accent hover:text-accent-dark"
          >
            {email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
