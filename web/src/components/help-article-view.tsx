import Link from "next/link";
import { Section, Eyebrow, Button } from "@/components/ui";
import {
  type Article,
  type Topic,
  relatedArticles,
} from "@/lib/help-content";
import { SUPPORT_WHATSAPP_URL } from "@/lib/site";

const calloutTone = {
  info: "border-accent/30 bg-accent/5",
  warn: "border-mustard/40 bg-mustard/10",
  tip: "border-forest/30 bg-forest/5",
} as const;

const calloutLabel = {
  info: "Info",
  warn: "Heads up",
  tip: "Tip",
} as const;

export function HelpArticleView({
  topic,
  article,
}: {
  topic: Topic;
  article: Article;
}) {
  const related = relatedArticles(article);
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
            <Link
              href={`/help/${topic.slug}`}
              className="hover:text-ink"
            >
              {topic.title}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink">{article.title}</span>
          </nav>
        </div>
      </Section>

      <Section>
        <div className="container-max grid gap-12 pb-20 pt-10 md:pt-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
          <article className="min-w-0">
            <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.1em] text-ink-muted">
              <span className="text-[20px]" aria-hidden>
                {topic.icon}
              </span>
              <span className="font-semibold">{topic.title}</span>
              <span aria-hidden>·</span>
              <span className="font-mono">{article.readTime}</span>
            </div>
            <h1 className="mt-4 max-w-[26ch] font-display text-[clamp(32px,4.4vw,52px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              {article.title}
            </h1>
            <p className="mt-5 max-w-[60ch] text-[18px] leading-[1.6] text-ink-muted">
              {article.intro}
            </p>

            {article.prereqs && article.prereqs.length > 0 && (
              <div className="mt-8 rounded-[16px] border border-border bg-surface-alt px-6 py-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  What you&apos;ll need
                </span>
                <ul className="mt-3 flex flex-col gap-1.5 text-[14px] leading-[1.55] text-ink/85">
                  {article.prereqs.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span aria-hidden className="mt-[7px] inline-block h-1 w-1 rounded-full bg-ink" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-12 flex flex-col gap-12">
              {article.sections.map((s, idx) => (
                <section key={s.heading}>
                  <h2 className="font-display text-[clamp(22px,2.4vw,28px)] font-medium leading-[1.15] tracking-[-0.01em] text-ink">
                    <span className="mr-3 font-mono text-[14px] font-semibold text-accent">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {s.heading}
                  </h2>
                  {s.body.length > 0 && (
                    <div className="mt-4 flex flex-col gap-3 text-[15px] leading-[1.7] text-ink/85">
                      {s.body.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  )}
                  {s.steps && s.steps.length > 0 && (
                    <ol className="mt-5 flex flex-col gap-3 text-[15px] leading-[1.6] text-ink/85">
                      {s.steps.map((st, i) => (
                        <li
                          key={st}
                          className="flex items-start gap-3 rounded-[12px] border border-border bg-surface px-4 py-3"
                        >
                          <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-semibold text-white">
                            {i + 1}
                          </span>
                          <span>{st}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {s.callout && (
                    <div
                      className={`mt-5 rounded-[14px] border px-5 py-4 text-[14px] leading-[1.6] text-ink/85 ${calloutTone[s.callout.tone]}`}
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                        {s.callout.title ?? calloutLabel[s.callout.tone]}
                      </span>
                      <p className="mt-2">{s.callout.body}</p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-border pt-8">
              {article.next ? (
                <Button href={article.next.href} size="md">
                  {article.next.label} <span aria-hidden>→</span>
                </Button>
              ) : (
                <Button href={`/help/${topic.slug}`} size="md" variant="secondary">
                  Back to {topic.title}
                </Button>
              )}
              <a
                href={SUPPORT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-accent"
              >
                Still stuck? WhatsApp us <span aria-hidden>→</span>
              </a>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[20px] border border-border bg-surface p-6">
              <Eyebrow>In this topic</Eyebrow>
              <ul className="mt-4 flex flex-col gap-2 text-[14px] leading-[1.5]">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/help/${topic.slug}/${r.slug}`}
                      className="flex items-start gap-2 rounded-[10px] px-2 py-2 text-ink/85 transition-colors hover:bg-surface-alt hover:text-ink"
                    >
                      <span aria-hidden className="mt-[5px] text-ink-muted">
                        ›
                      </span>
                      <span>{r.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/help/${topic.slug}`}
                className="mt-5 inline-flex text-[13px] font-semibold text-accent hover:text-accent-dark"
              >
                See all {topic.title.toLowerCase()} guides{" "}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
