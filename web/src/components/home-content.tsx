"use client";

import Link from "next/link";
import { Button, CheckIcon, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { HomeHero } from "@/components/home-hero";
import { PracticeConsoleMockup } from "@/components/practice-console-mockup";
import { PricingGrid } from "@/components/pricing-grid";
import { Faq } from "@/components/faq";
import { REGISTER_URL } from "@/lib/site";
import { useI18n } from "./i18n-provider";

const trustLogos = [
  "Fasttrade Ventures",
  "Hunt & Gather Sdn Bhd",
  "Hirix AI",
  "Aexlora Sdn Bhd",
];

const HELP_ICONS = [<FileIcon key="f" />, <BillIcon key="b" />, <ReportIcon key="r" />, <UsersIcon key="u" />];

const TESTIMONIALS_META = [
  { name: "Asyraf Pauzi", role: { en: "CEO, Fasttrade Ventures", bm: "Ketua Pegawai Eksekutif, Fasttrade Ventures" }, stat: "−87%", statLabel: { en: "time on invoicing", bm: "masa untuk invois" } },
  { name: "Zulhafiz Awaldin", role: { en: "CEO, Hunt & Gather Sdn Bhd", bm: "Ketua Pegawai Eksekutif, Hunt & Gather Sdn Bhd" }, stat: "4×", statLabel: { en: "headcount, same finance team", bm: "kakitangan, pasukan kewangan sama" } },
  { name: "Amir Hamidi", role: { en: "CEO, Aexlora Sdn Bhd", bm: "Ketua Pegawai Eksekutif, Aexlora Sdn Bhd" }, stat: "−50%", statLabel: { en: "monthly close time", bm: "masa tutup bulanan" } },
  { name: "Aizuddin Badry", role: { en: "CEO, Hirix AI", bm: "Ketua Pegawai Eksekutif, Hirix AI" }, stat: "4 min", statLabel: { en: "to first invoice", bm: "ke invois pertama" } },
];

const TESTIMONIAL_QUOTES = {
  en: [
    "Before BukuCloud my Excel had 17 tabs. Three of them only Aishah understood. Now my whole team logs invoices in real time — books actually feel like an asset.",
    "We grew from 8 to 32 staff in 18 months. BukuCloud scaled with us — payroll, SST, reports, no migration drama. The accountant just keeps saying ‘still tidy’.",
    "SST used to be the worst part of my month. Now it's the report I export on Friday morning before lunch. The whole month-end takes a coffee.",
    "I'm an engineer, I judge software harshly. BukuCloud is the first accounting tool that didn't make me sigh on day one. We had clean books in week one.",
  ],
  bm: [
    "Sebelum BukuCloud, Excel saya ada 17 tab. Tiga daripadanya hanya Aishah faham. Sekarang seluruh pasukan log invois secara masa nyata — buku akaun rasa seperti aset.",
    "Kami berkembang dari 8 ke 32 kakitangan dalam 18 bulan. BukuCloud berkembang dengan kami — gaji, SST, laporan, tanpa drama migrasi. Akauntan hanya kata ‘masih kemas’.",
    "SST dulu bahagian terburuk dalam bulan saya. Sekarang ia laporan yang saya eksport pada pagi Jumaat sebelum makan tengah hari. Tutup bulan ambil masa secangkir kopi.",
    "Saya jurutera, saya nilai perisian dengan tegas. BukuCloud adalah alat perakaunan pertama yang tak buat saya mengeluh pada hari pertama. Buku akaun kami kemas pada minggu pertama.",
  ],
};

export function HomeContent() {
  const { t, locale } = useI18n();
  const isBm = locale === "bm";
  const quotes = isBm ? TESTIMONIAL_QUOTES.bm : TESTIMONIAL_QUOTES.en;

  return (
    <>
      <Section>
        <HomeHero />
      </Section>

      <Section bg="alt" bordered>
        <div className="container-max py-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow>{t.home.trust.eyebrow}</Eyebrow>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {trustLogos.map((l) => (
                <span
                  key={l}
                  className="font-display text-[20px] font-medium text-ink-muted"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.home.problems.eyebrow}
            title={t.home.problems.title}
            subtitle={t.home.problems.sub}
            size="lg"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.home.problems.list.map((p) => (
              <article
                key={p.title}
                className="flex flex-col gap-4 rounded-[16px] border border-border bg-surface p-7"
              >
                <h3 className="font-display text-[22px] font-medium text-ink">
                  {p.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-ink-muted">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="alt">
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.home.helps.eyebrow}
            title={t.home.helps.title}
            subtitle={t.home.helps.sub}
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.home.helps.list.map((h, i) => (
              <div
                key={h.title}
                className="flex flex-col gap-4 rounded-[16px] border border-border bg-bg-cream p-7"
              >
                <div className="text-ink">{HELP_ICONS[i]}</div>
                <h3 className="font-display text-[22px] font-medium leading-tight text-ink">
                  {h.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-ink-muted">
                  {h.body}
                </p>
                <Link
                  href="/features"
                  className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold text-accent hover:text-accent-dark"
                >
                  {t.home.helps.learnMore} <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-24">
          <div className="grid gap-10 rounded-[20px] border border-border bg-bg-cream p-8 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="flex flex-col gap-5">
              <Eyebrow>{t.home.switchOffer.eyebrow}</Eyebrow>
              <h2 className="font-display text-[clamp(32px,4.4vw,52px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
                {t.home.switchOffer.title}
              </h2>
              <p className="text-[16px] leading-[1.6] text-ink-muted">
                {t.home.switchOffer.body}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" size="md">
                  {t.home.switchOffer.primary} <span aria-hidden>→</span>
                </Button>
                <Button href="/pricing" variant="secondary" size="md">
                  {t.home.switchOffer.secondary}
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {t.home.switchOffer.cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[16px] border border-border bg-surface p-5"
                >
                  <h3 className="font-display text-[22px] font-medium leading-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.home.testimonials.eyebrow}
            title={t.home.testimonials.title}
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {TESTIMONIALS_META.map((m, i) => (
              <article
                key={m.name}
                className="relative flex flex-col gap-6 rounded-[16px] border border-border bg-bg-cream p-8"
              >
                <p className="font-display text-[20px] italic leading-[1.45] text-ink">
                  “{quotes[i]}”
                </p>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[14px] font-semibold text-ink">
                      {m.name}
                    </div>
                    <div className="text-[12px] text-ink-muted">
                      {isBm ? m.role.bm : m.role.en}
                    </div>
                  </div>
                  <div className="rounded-[8px] border border-border bg-surface px-3 py-2 text-right">
                    <div className="font-mono text-[16px] font-medium text-ink">
                      {m.stat}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.075em] text-ink-muted">
                      {isBm ? m.statLabel.bm : m.statLabel.en}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="cream" bordered>
        <div className="container-max grid items-center gap-12 py-24 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>{t.home.accountantsBlock.eyebrow}</Eyebrow>
            <h2 className="font-display text-[clamp(32px,4.4vw,48px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              {t.home.accountantsBlock.title}
            </h2>
            <p className="max-w-[58ch] text-[16px] leading-[1.6] text-ink-muted">
              {t.home.accountantsBlock.body}
            </p>
            <ul className="flex flex-col gap-3 text-[14px] text-ink">
              {t.home.accountantsBlock.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckIcon /> {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/accountants#pricing" size="md">
                {t.home.accountantsBlock.primary} <span aria-hidden>→</span>
              </Button>
              <Link
                href="/accountants"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-accent"
              >
                {t.home.accountantsBlock.secondary} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <PracticeConsoleMockup />
        </div>
      </Section>

      <Section>
        <div className="container-max py-24">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={t.home.pricing.eyebrow}
              title={
                <>
                  {t.home.pricing.titleLine1}
                  <br />
                  {t.home.pricing.titleLine2}
                </>
              }
              size="lg"
            />
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-accent"
            >
              {t.home.pricing.seeFull} <span aria-hidden>→</span>
            </Link>
          </div>
          <PricingGrid />
        </div>
      </Section>

      <Section bg="alt">
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.home.faq.eyebrow}
            title={t.home.faq.title}
            size="lg"
          />
          <div className="mt-12">
            <Faq items={t.home.faq.items} />
          </div>
        </div>
      </Section>

      <Section className="bg-mustard/[.08]">
        <div className="container-max flex flex-col items-center gap-6 py-24 text-center">
          <Eyebrow>{t.home.finalCta.eyebrow}</Eyebrow>
          <h2 className="max-w-[18ch] font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
            {t.home.finalCta.title}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={REGISTER_URL} size="lg" external>
              {t.home.finalCta.primary} <span aria-hidden>→</span>
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              {t.home.finalCta.secondary}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function FileIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M6 4h11l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M17 4v5h5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 14h10M9 18h10M9 22h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function BillIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M5 4h18v20l-3-2-3 2-3-2-3 2-3-2-3 2V4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 10h10M9 14h10M9 18h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function ReportIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M5 23V8M11 23V12M17 23V5M23 23v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="11" cy="10" r="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 23a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="20" cy="11" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M17 23a5 5 0 0 1 9-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
