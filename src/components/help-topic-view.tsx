import Link from "next/link";
import { Section, Eyebrow, Button } from "@/components/ui";
import {
  type Article,
  type Topic,
  TOPICS,
} from "@/lib/help-content";
import { SUPPORT_WHATSAPP_URL } from "@/lib/site";

const audienceBadge = {
  firm: "border-mustard/60 bg-mustard/10 text-mustard",
  sme: "border-accent/40 bg-accent/10 text-accent",
  both: "border-border bg-surface-alt text-ink-muted",
} as const;

const audienceLabel = {
  firm: "For accountants",
  sme: "For SMEs",
  both: "For everyone",
} as const;

export function HelpTopicView({
  topic,
  articles,
}: {
  topic: Topic;
  articles: Article[];
}) {
  const otherTopics = TOPICS.filter((t) => t.slug !== topic.slug);
  return (
    <>
      <Section>
        <div className="container-max pt-14 md:pt-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-ink-muted"
          >
            <Link href="/help" className="hover:text-ink">
              Help
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink">{topic.title}</span>
          </nav>

          <div className="mt-8 grid gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-start md:gap-10">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-[18px] border border-border bg-surface text-[34px]"
              aria-hidden
            >
              {topic.icon}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>Help · {topic.title}</Eyebrow>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${audienceBadge[topic.audience]}`}
                >
                  {audienceLabel[topic.audience]}
                </span>
              </div>
              <h1 className="mt-4 max-w-[24ch] font-display text-[clamp(36px,5.2vw,64px)] font-medium leading-[1.04] tracking-[-0.02em] text-ink">
                {topic.title}
              </h1>
              <p className="mt-5 max-w-[60ch] text-[18px] leading-[1.55] text-ink-muted">
                {topic.summary}
              </p>
              <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.1em] text-ink-muted">
                {articles.length} guides
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max pb-16 pt-12 md:pb-20 md:pt-16">
          <div className="grid gap-5 sm:grid-cols-2">
            {articles.map((a, idx) => (
              <Link
                key={a.slug}
                href={`/help/${topic.slug}/${a.slug}`}
                className="group flex h-full flex-col justify-between gap-5 rounded-[20px] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_18px_42px_-18px_rgba(26,26,26,0.22)]"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                    <span className="font-mono">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{a.readTime}</span>
                  </div>
                  <h2 className="font-display text-[20px] font-medium leading-[1.2] text-ink">
                    {a.title}
                  </h2>
                  <p className="text-[14px] leading-[1.55] text-ink-muted">
                    {a.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4 text-[12px]">
                  <span className="font-mono text-ink-muted">
                    {a.sections.length} sections
                  </span>
                  <span className="font-semibold text-accent transition-all group-hover:translate-x-0.5">
                    Read <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="alt" bordered>
        <div className="container-max py-20 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[40ch]">
              <Eyebrow>Other topics</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(26px,3.4vw,40px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
                Browse another part of BukuCloud
              </h2>
            </div>
            <Button href="/help" size="md" variant="secondary">
              Back to all topics
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherTopics.map((t) => (
              <Link
                key={t.slug}
                href={`/help/${t.slug}`}
                className="group flex flex-col gap-3 rounded-[16px] border border-border bg-surface px-5 py-5 transition-colors hover:border-ink"
              >
                <span className="text-[24px]" aria-hidden>
                  {t.icon}
                </span>
                <span className="font-display text-[16px] font-medium leading-[1.2] text-ink">
                  {t.title}
                </span>
                <span className="text-[12px] leading-[1.5] text-ink-muted">
                  {t.summary}
                </span>
                <span className="mt-auto text-[12px] font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                  Browse <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-max py-20 md:py-24">
          <div className="rounded-[24px] border border-border bg-surface px-8 py-12 text-center md:px-16 md:py-16">
            <Eyebrow>Still stuck?</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-[24ch] font-display text-[clamp(24px,3vw,36px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
              Talk to a real human, line by line.
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="md">
                Contact support <span aria-hidden>→</span>
              </Button>
              <a
                href={SUPPORT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-accent"
              >
                WhatsApp us <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
