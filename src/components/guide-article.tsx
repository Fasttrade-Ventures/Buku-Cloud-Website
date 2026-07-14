import Link from "next/link";
import type { Guide } from "@/lib/guides";
import { REGISTER_URL } from "@/lib/site";
import { Button, Eyebrow, Section } from "@/components/ui";
import { Faq } from "@/components/faq";

function resolveHref(href: string): string {
  if (href.includes("app.bukucloud.com/register")) return REGISTER_URL;
  return href;
}

export function GuideArticle({ guide }: { guide: Guide }) {
  return (
    <>
      <Section>
        <article className="container-max max-w-3xl py-16 lg:py-24">
          <Eyebrow>{guide.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-[clamp(36px,5vw,56px)] font-medium leading-[1.05] tracking-[-0.025em] text-ink">
            {guide.h1}
          </h1>
          <p className="mt-6 text-[18px] leading-[1.55] text-ink-muted">
            {guide.intro}
          </p>
          <p className="mt-4 text-[13px] text-ink-muted">
            Updated {guide.dateModified}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={resolveHref(guide.ctaPrimary.href)} size="lg" external={guide.ctaPrimary.href.startsWith("http")}>
              {guide.ctaPrimary.label} <span aria-hidden>→</span>
            </Button>
            <Button href={guide.ctaSecondary.href} variant="secondary" size="lg">
              {guide.ctaSecondary.label}
            </Button>
          </div>

          <div className="mt-14 flex flex-col gap-12">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-[28px] font-medium tracking-[-0.02em] text-ink">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((para) => (
                    <p
                      key={para.slice(0, 48)}
                      className="text-[16px] leading-[1.65] text-ink-muted"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="font-display text-[28px] font-medium tracking-[-0.02em] text-ink">
              Frequently asked
            </h2>
            <div className="mt-6">
              <Faq items={guide.faq} />
            </div>
          </div>

          <nav className="mt-16 border-t border-border pt-8 text-[14px]">
            <Link href="/guides" className="text-ink-muted hover:text-ink">
              ← All guides
            </Link>
          </nav>
        </article>
      </Section>
    </>
  );
}
