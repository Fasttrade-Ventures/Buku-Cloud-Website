"use client";

import Link from "next/link";
import { Button, Eyebrow, Section } from "@/components/ui";
import { Faq, type FaqItem } from "@/components/faq";
import {
  HelpBrowser,
  type HelpTopic,
  type PopularArticle,
} from "@/components/help-browser";
import { REGISTER_PRACTICE_URL, SUPPORT_WHATSAPP_URL } from "@/lib/site";
import { useT } from "./i18n-provider";

type QuickStart = {
  label: string;
  title: string;
  minutes: string;
  steps: { n: string; text: React.ReactNode }[];
};

type PracticeQuickStart = {
  title: string;
  minutes: string;
  steps: string[];
};

export function HelpContent({
  topics,
  popular,
  quickStarts,
  practiceQuickStarts,
  faqItems,
}: {
  topics: HelpTopic[];
  popular: PopularArticle[];
  quickStarts: QuickStart[];
  practiceQuickStarts: PracticeQuickStart[];
  faqItems: FaqItem[];
}) {
  const t = useT();

  return (
    <>
      <Section>
        <div className="container-max flex flex-col items-center gap-6 pt-20 text-center md:pt-28">
          <Eyebrow>{t.help.hero.eyebrow}</Eyebrow>
          <h1 className="max-w-[22ch] font-display text-[clamp(40px,5.6vw,72px)] font-medium leading-[1.02] tracking-[-0.025em] text-ink">
            {t.help.hero.h1}
          </h1>
          <p className="max-w-[60ch] text-[18px] leading-[1.55] text-ink-muted">
            {t.help.hero.body}
          </p>
        </div>
      </Section>

      <Section className="pb-2 pt-12 md:pt-16">
        <HelpBrowser topics={topics} popular={popular} />
      </Section>

      <Section bg="alt" bordered>
        <div className="container-max py-24 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
            <div className="max-w-[40ch]">
              <Eyebrow>{t.help.quick.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(30px,4vw,48px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
                {t.help.quick.title}
              </h2>
            </div>
            <p className="max-w-[44ch] text-[15px] leading-[1.65] text-ink-muted">
              {t.help.quick.sub}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {quickStarts.map((g, idx) => (
              <article
                key={g.title}
                className="group relative flex flex-col gap-6 rounded-[20px] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_18px_42px_-18px_rgba(26,26,26,0.22)]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-accent">
                    {g.label}
                  </span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                    {g.minutes}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[40px] leading-none text-ink/15">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[22px] font-medium leading-[1.18] text-ink">
                    {g.title}
                  </h3>
                </div>
                <ol className="flex flex-col gap-3">
                  {g.steps.map((s) => (
                    <li
                      key={s.n}
                      className="flex items-start gap-3 text-[14px] leading-[1.55] text-ink/85"
                    >
                      <span className="mt-0.5 font-mono text-[11px] font-semibold text-accent">
                        {s.n}
                      </span>
                      <span>{s.text}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-24 md:py-32">
          <div className="rounded-[24px] border border-border bg-ink p-10 text-white md:p-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-[40ch]">
                <Eyebrow tone="white">{t.help.firm.eyebrow}</Eyebrow>
                <h2 className="mt-5 font-display text-[clamp(28px,3.6vw,44px)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
                  {t.help.firm.title}
                </h2>
              </div>
              <p className="max-w-[44ch] text-[15px] leading-[1.65] text-white/70">
                {t.help.firm.sub}
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {practiceQuickStarts.map((g) => (
                <div
                  key={g.title}
                  className="flex flex-col gap-5 rounded-[18px] border border-white/10 bg-white/5 p-6 transition-colors hover:border-mustard/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-mustard/40 bg-mustard/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-mustard">
                      Practice
                    </span>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-white/60">
                      {g.minutes}
                    </span>
                  </div>
                  <h3 className="font-display text-[20px] font-medium leading-[1.2] text-white">
                    {g.title}
                  </h3>
                  <ol className="flex flex-col gap-2.5 text-[13px] leading-[1.55] text-white/75">
                    {g.steps.map((s, i) => (
                      <li key={s} className="flex items-start gap-2.5">
                        <span className="mt-[2px] font-mono text-[11px] font-semibold text-mustard">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href={REGISTER_PRACTICE_URL}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[12px] bg-mustard px-5 py-3 text-[14px] font-semibold text-ink transition-colors hover:bg-mustard/90"
              >
                {t.help.firm.primary}
              </a>
              <Link
                href="/accountants"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-white hover:text-mustard"
              >
                {t.help.firm.secondary} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="alt" bordered>
        <div className="container-max grid gap-12 py-24 md:py-32 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>{t.help.faq.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(30px,4vw,48px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              {t.help.faq.title}
            </h2>
            <p className="mt-5 max-w-[40ch] text-[15px] leading-[1.65] text-ink-muted">
              {t.help.faq.sub}{" "}
              <Link
                href="/contact"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                {t.help.faq.ask}
              </Link>
              .
            </p>
          </div>
          <div className="rounded-[20px] border border-border bg-surface px-6 md:px-8">
            <Faq items={faqItems} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-20 md:py-28">
          <div className="overflow-hidden rounded-[24px] border border-border bg-surface px-8 py-14 text-center md:px-16 md:py-20">
            <Eyebrow>{t.help.stuck.eyebrow}</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-[24ch] font-display text-[clamp(28px,3.4vw,42px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
              {t.help.stuck.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-[1.65] text-ink-muted">
              {t.help.stuck.body}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                {t.help.stuck.primary} <span aria-hidden>→</span>
              </Button>
              <Link
                href={SUPPORT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-accent"
              >
                {t.help.stuck.secondary} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
