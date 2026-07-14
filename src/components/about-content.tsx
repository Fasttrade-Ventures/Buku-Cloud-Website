"use client";

import Link from "next/link";
import { Button, Eyebrow, Section } from "@/components/ui";
import { Counter } from "@/components/counter";
import { REGISTER_URL } from "@/lib/site";
import { useT } from "./i18n-provider";

const PRESS = ["The Edge", "The Star", "Sin Chew", "TechInAsia", "DigitalNewsAsia"];

export function AboutContent() {
  const t = useT();
  return (
    <>
      <Section>
        <div className="container-max py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.55fr_1fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow>{t.about.hero.eyebrow}</Eyebrow>
              <h1 className="mt-6 font-display text-[clamp(36px,7vw,96px)] font-medium leading-[1.02] tracking-[-0.03em] text-ink sm:leading-[0.98]">
                {t.about.hero.h1Line1}
                <br />
                <span className="italic text-accent">{t.about.hero.h1Line2}</span>
              </h1>
              <p className="mt-8 max-w-[58ch] text-[18px] leading-[1.65] text-ink-muted md:text-[20px]">
                {t.about.hero.body}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href={REGISTER_URL} size="lg" external>
                  {t.about.hero.tryFree} <span aria-hidden>→</span>
                </Button>
                <Link
                  href="#story"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-accent"
                >
                  {t.about.hero.readStory} <span aria-hidden>↓</span>
                </Link>
              </div>
            </div>
            <AboutHeroCard />
          </div>
        </div>
      </Section>

      <Section bg="ink" bordered>
        <div className="container-max grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:grid-cols-4 md:py-20">
          {t.about.stats.map((s, i) => (
            <div key={s.label} className="flex flex-col gap-3">
              <div className="font-display text-[clamp(36px,5vw,64px)] font-medium leading-[0.95] tracking-[-0.025em] text-white">
                <Counter value={s.value} delay={i * 80} />
              </div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="story">
        <div className="container-max grid gap-12 py-24 md:py-32 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>{t.about.story.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(34px,4.4vw,56px)] font-medium leading-[1.02] tracking-[-0.025em] text-ink">
              {t.about.story.title}
            </h2>
            <div className="mt-8 inline-flex items-center gap-4 rounded-[14px] border border-border bg-surface px-5 py-4">
              <span className="font-display text-[44px] leading-none text-accent">
                2023
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                {t.about.story.yearLabel}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-8 text-[17px] leading-[1.75] text-ink-muted md:text-[18px]">
            <p>{t.about.story.p1}</p>
            <blockquote className="relative rounded-[18px] border-l-[3px] border-accent bg-surface px-6 py-6 font-display text-[22px] italic leading-[1.45] text-ink md:px-8 md:py-7 md:text-[26px]">
              <span
                aria-hidden
                className="absolute left-5 top-2 font-display text-[56px] leading-none text-accent/25 md:left-7"
              >
                &ldquo;
              </span>
              <span className="relative">{t.about.story.quote}</span>
              <footer className="mt-4 text-[11px] font-semibold uppercase not-italic tracking-[0.1em] text-ink-muted">
                {t.about.story.quoteAttr}
              </footer>
            </blockquote>
            <p>{t.about.story.p2}</p>
            <p>{t.about.story.p3}</p>
          </div>
        </div>
      </Section>

      <Section bg="alt">
        <div className="container-max py-24 md:py-32">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
            <div className="max-w-[36ch]">
              <Eyebrow>{t.about.principles.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(32px,4.2vw,52px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
                {t.about.principles.title}
              </h2>
            </div>
            <p className="max-w-[44ch] text-[15px] leading-[1.65] text-ink-muted">
              {t.about.principles.sub}
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.about.principles.list.map((p) => (
              <div
                key={p.n}
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[20px] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_18px_42px_-18px_rgba(26,26,26,0.22)]"
              >
                <div className="font-mono text-[12px] font-semibold tracking-[0.08em] text-accent">
                  {p.n}
                </div>
                <h3 className="font-display text-[22px] font-medium leading-[1.18] text-ink">
                  {p.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-ink-muted">
                  {p.body}
                </p>
                <div className="mt-auto h-px w-10 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-accent" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-24 md:py-32">
          <div className="flex flex-col gap-5 md:max-w-[44ch]">
            <Eyebrow>{t.about.milestones.eyebrow}</Eyebrow>
            <h2 className="font-display text-[clamp(32px,4.2vw,52px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              {t.about.milestones.title}
            </h2>
          </div>
          <ol className="relative mt-16 flex flex-col gap-12 md:grid md:grid-cols-4 md:gap-8">
            <div
              aria-hidden
              className="absolute left-4 top-4 h-[calc(100%-32px)] w-px bg-border md:hidden"
            />
            <div
              aria-hidden
              className="absolute left-0 right-0 top-[14px] hidden h-px bg-gradient-to-r from-accent via-border to-transparent md:block"
            />
            {t.about.milestones.list.map((m, i) => (
              <li
                key={m.year}
                className="group relative flex flex-col gap-3 pl-12 md:pl-0"
              >
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-bg-cream font-mono text-[12px] font-semibold text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white md:relative">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="font-display text-[28px] leading-none text-ink md:mt-3 md:text-[32px]">
                  {m.year}
                </span>
                <h3 className="font-display text-[18px] font-medium leading-[1.25] text-ink md:text-[20px]">
                  {m.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-ink-muted">
                  {m.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section bg="ink" bordered>
        <div className="container-max grid gap-10 py-20 md:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <div>
            <Eyebrow tone="white">{t.about.mission.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(36px,5vw,64px)] font-medium leading-[1.02] tracking-[-0.025em] text-white">
              {t.about.mission.title}
            </h2>
          </div>
          <p className="text-[17px] leading-[1.7] text-white/70 lg:text-[18px]">
            {t.about.mission.body}
          </p>
        </div>
      </Section>

      <Section bg="alt">
        <div className="container-max py-24 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
            <div className="max-w-[40ch]">
              <Eyebrow>{t.about.team.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(32px,4.2vw,52px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
                {t.about.team.title}
              </h2>
            </div>
            <p className="max-w-[42ch] text-[15px] leading-[1.65] text-ink-muted">
              {t.about.team.sub}
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.team.list.map((m, i) => (
              <div
                key={m.name}
                className="group relative flex flex-col gap-5 overflow-hidden rounded-[20px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_-18px_rgba(26,26,26,0.22)]"
              >
                <div className="relative flex aspect-[4/5] items-end justify-center overflow-hidden rounded-[14px] bg-gradient-to-br from-accent/15 via-mustard/20 to-forest/15 p-5">
                  <div
                    aria-hidden
                    className="absolute right-3 top-3 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-ink/40"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="font-display text-[88px] font-medium leading-none text-ink/30 transition-all duration-500 group-hover:scale-105 group-hover:text-ink/50">
                    {m.initials}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
                    {m.role}
                  </div>
                  <div className="mt-2 font-display text-[20px] font-medium leading-[1.2] text-ink">
                    {m.name}
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.55] text-ink-muted">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bordered>
        <div className="container-max flex flex-col items-center gap-8 py-16 text-center md:py-20">
          <Eyebrow>{t.about.press.eyebrow}</Eyebrow>
          <h3 className="max-w-[36ch] font-display text-[20px] font-medium leading-[1.3] text-ink md:text-[24px]">
            {t.about.press.title}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {PRESS.map((p) => (
              <span
                key={p}
                className="font-display text-[20px] font-medium text-ink-muted transition-colors hover:text-ink md:text-[24px]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-20 md:py-28">
          <div className="overflow-hidden rounded-[24px] border border-border bg-surface px-8 py-16 text-center md:px-16 md:py-24">
            <Eyebrow>{t.about.finalCta.eyebrow}</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-[24ch] font-display text-[clamp(32px,4.4vw,56px)] font-medium leading-[1.05] tracking-[-0.025em] text-ink">
              {t.about.finalCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-[1.65] text-ink-muted md:text-[17px]">
              {t.about.finalCta.body}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href={REGISTER_URL} size="lg" external>
                {t.about.finalCta.primary} <span aria-hidden>→</span>
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-accent"
              >
                {t.about.finalCta.secondary} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function AboutHeroCard() {
  const t = useT();
  return (
    <div className="relative isolate mx-auto flex min-h-[300px] w-full max-w-[460px] items-center justify-center sm:min-h-[340px] lg:min-h-[440px]">
      <div className="absolute -top-1 right-2 z-10 -rotate-[8deg] sm:-top-2 sm:right-0 md:-top-4">
        <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 border-dashed border-accent/70 bg-bg-cream/85 backdrop-blur-sm sm:h-[124px] sm:w-[124px] md:h-[148px] md:w-[148px]">
          <div className="flex h-full w-full items-center justify-center rounded-full border-[1.5px] border-accent/60">
            <div className="text-center">
              <div className="font-display text-[9px] font-semibold uppercase tracking-[0.22em] text-accent sm:text-[10px]">
                {t.about.heroCard.stamp1}
              </div>
              <div className="mt-1 font-display text-[18px] leading-none text-accent sm:text-[22px]">
                {t.about.heroCard.stamp2}
              </div>
              <div className="mt-1 font-display text-[9px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[10px]">
                {t.about.heroCard.stamp3}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[420px] -rotate-[1.5deg] rounded-[18px] border border-border bg-surface p-5 shadow-[0_2px_0_rgba(26,26,26,0.04)] sm:p-6 md:p-7">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
            INV-2026-0042
          </span>
          <span className="rounded-full bg-forest/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-forest">
            {t.about.heroCard.paid}
          </span>
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
              {t.about.heroCard.amountDue}
            </div>
            <div className="mt-1 font-mono text-[28px] font-semibold leading-none text-ink">
              RM 0.00
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
              Saturday, 9:13 AM
            </div>
            <div className="mt-1 font-display text-[14px] italic text-ink">
              {t.about.heroCard.reconciled}
            </div>
          </div>
        </div>
        <div className="mt-5 h-px w-full bg-border" />
        <div className="mt-4 flex items-center justify-between text-[12px] text-ink-muted">
          <span>{t.about.heroCard.sst}</span>
          <span className="font-mono">RM 12.00</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-[12px] text-ink-muted">
          <span>{t.about.heroCard.myInvoisLabel}</span>
          <span className="font-mono text-forest">{t.about.heroCard.myInvoisStatus}</span>
        </div>
      </div>
    </div>
  );
}
