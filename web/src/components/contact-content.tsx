"use client";

import { Eyebrow, Section, SectionHeading } from "@/components/ui";
import { Faq } from "@/components/faq";
import { ContactForm } from "@/components/contact-form";
import { HELLO_EMAIL, SUPPORT_WHATSAPP_URL } from "@/lib/site";
import { useT } from "./i18n-provider";

const OFFICE_MAP_URL =
  "https://maps.google.com/?q=Wisma+KFC+Jln+Sultan+Ismail+Kuala+Lumpur";
const WHATSAPP_DISPLAY = "+60 12-345 6789";

export function ContactContent() {
  const t = useT();
  const channels = [
    {
      icon: <WhatsappIcon />,
      eyebrow: t.contact.channels.whatsapp,
      title: WHATSAPP_DISPLAY,
      sub: t.contact.channels.whatsappHours,
      href: SUPPORT_WHATSAPP_URL,
      external: true,
    },
    {
      icon: <MailIcon />,
      eyebrow: t.contact.channels.email,
      title: HELLO_EMAIL,
      sub: t.contact.channels.emailHours,
      href: `mailto:${HELLO_EMAIL}`,
      external: false,
    },
    {
      icon: <CalendarIcon />,
      eyebrow: t.contact.channels.demo,
      title: t.contact.channels.demoTitle,
      sub: t.contact.channels.demoSub,
      href: "#form",
      external: false,
    },
    {
      icon: <BuildingIcon />,
      eyebrow: t.contact.channels.office,
      title: t.contact.channels.officeAddress,
      sub: t.contact.channels.officeSub,
      href: OFFICE_MAP_URL,
      external: true,
    },
  ];

  return (
    <>
      <Section>
        <div className="container-max flex flex-col items-center gap-6 py-20 text-center md:py-28">
          <Eyebrow>{t.contact.hero.eyebrow}</Eyebrow>
          <h1 className="max-w-[20ch] font-display text-[clamp(40px,5.6vw,72px)] font-medium leading-[1.02] tracking-[-0.025em] text-ink">
            {t.contact.hero.h1}
          </h1>
          <p className="max-w-[58ch] text-[18px] leading-[1.55] text-ink-muted">
            {t.contact.hero.body}
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-max grid gap-12 pb-20 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-3 rounded-[16px] border border-border bg-surface p-6 transition-shadow hover:shadow-[0_20px_60px_-30px_rgba(26,26,26,0.18)]"
              >
                <div className="text-ink">{c.icon}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                  {c.eyebrow}
                </div>
                <div className="font-display text-[18px] font-medium leading-tight text-ink">
                  {c.title}
                </div>
                <div className="text-[13px] text-ink-muted">{c.sub}</div>
              </a>
            ))}
          </div>

          <ContactForm />
        </div>
      </Section>

      <Section bg="alt">
        <div className="container-max py-24">
          <SectionHeading
            eyebrow={t.contact.faqEyebrow}
            title={t.contact.faqTitle}
          />
          <div className="mt-12 max-w-[860px]">
            <Faq items={t.contact.faqItems} />
          </div>
        </div>
      </Section>
    </>
  );
}

function WhatsappIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 2a9 9 0 0 0-7.6 13.7L2 20l4.4-1.3A9 9 0 1 0 11 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8 8c.4-1 2-1 2 0s2 3 1 4-2 1-2 1c0 0-1 0-2-1s-1-2-1-2c0 0 0-1 1-2Z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="3" y="5" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="m3.5 6 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="3.5" y="5" width="15" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 9h15M7 3v4m8-4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M5 18V6l6-3 6 3v12" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M5 18h12M9 18v-4h4v4M9 9h.01M13 9h.01M9 12h.01M13 12h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
