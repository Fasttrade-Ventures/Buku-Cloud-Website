"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useT } from "./i18n-provider";

export type HelpTopic = {
  slug: string;
  icon: string;
  title: string;
  body: string;
  articles: { slug: string; title: string }[];
  count: number;
  audience: "sme" | "firm" | "both";
};

export type PopularArticle = {
  slug: string;
  title: string;
  topic: string;
  topicSlug: string;
  readTime: string;
  audience: "sme" | "firm" | "both";
};

const SUGGESTED = [
  "SST",
  "MyInvois",
  "Invoice",
  "Practice console",
  "Cancel plan",
  "Add accountant",
];

export function HelpBrowser({
  topics,
  popular,
}: {
  topics: HelpTopic[];
  popular: PopularArticle[];
}) {
  const t = useT();
  const [q, setQ] = useState("");
  const [tab, setTab] = useState<"all" | "sme" | "firm">("all");

  const lowQ = q.trim().toLowerCase();

  const matchAudience = (a: "sme" | "firm" | "both") =>
    tab === "all" || a === "both" || a === tab;

  const filteredTopics = useMemo(() => {
    return topics.filter((tp) => {
      if (!matchAudience(tp.audience)) return false;
      if (!lowQ) return true;
      return (
        tp.title.toLowerCase().includes(lowQ) ||
        tp.body.toLowerCase().includes(lowQ) ||
        tp.articles.some((a) => a.title.toLowerCase().includes(lowQ))
      );
    });
  }, [lowQ, topics, tab]);

  const filteredPopular = useMemo(() => {
    return popular.filter((a) => {
      if (!matchAudience(a.audience)) return false;
      if (!lowQ) return true;
      return (
        a.title.toLowerCase().includes(lowQ) ||
        a.topic.toLowerCase().includes(lowQ)
      );
    });
  }, [lowQ, popular, tab]);

  const hasResults = filteredTopics.length > 0 || filteredPopular.length > 0;
  const isFiltering = lowQ.length > 0;

  return (
    <>
      <div className="container-max -mt-4 pb-4 md:-mt-6 md:pb-2">
        <div className="mx-auto max-w-[680px]">
          <div className="group flex items-center gap-3 rounded-[14px] border border-border bg-surface px-5 py-4 shadow-[0_2px_0_rgba(26,26,26,0.04)] transition-shadow focus-within:border-ink focus-within:shadow-[0_8px_30px_-12px_rgba(26,26,26,0.18)]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="shrink-0 text-ink-muted"
              aria-hidden
            >
              <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.4" />
              <path d="m12 12 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t.help.search.placeholder}
              className="flex-1 bg-transparent text-[15px] outline-none placeholder:text-ink-muted/60"
              aria-label={t.help.search.ariaSearch}
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ("")}
                className="text-[12px] font-semibold text-ink-muted hover:text-ink"
              >
                {t.help.search.clear}
              </button>
            )}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[12px]">
            <span className="text-ink-muted">{t.help.search.popular}</span>
            {SUGGESTED.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setQ(s)}
                className="rounded-full border border-border bg-surface px-3 py-1 font-semibold text-ink transition-colors hover:border-ink"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-max flex justify-center pb-8 pt-6 md:pb-10 md:pt-8">
        <div
          role="tablist"
          aria-label={t.help.search.ariaTabs}
          className="inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1"
        >
          {(
            [
              { id: "all", label: t.help.tabs.all },
              { id: "sme", label: t.help.tabs.sme },
              { id: "firm", label: t.help.tabs.firm },
            ] as const
          ).map((tabItem) => (
            <button
              key={tabItem.id}
              type="button"
              role="tab"
              aria-selected={tab === tabItem.id}
              onClick={() => setTab(tabItem.id)}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                tab === tabItem.id
                  ? "bg-ink text-white"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {tabItem.label}
            </button>
          ))}
        </div>
      </div>

      {!hasResults && (
        <div className="container-max pb-24 text-center">
          <div className="mx-auto max-w-[44ch] rounded-[20px] border border-border bg-surface px-8 py-12">
            <div className="font-display text-[44px] leading-none text-ink/20">
              ?
            </div>
            <p className="mt-4 font-display text-[22px] font-medium text-ink">
              {t.help.search.noResultsTitle} &ldquo;{q}&rdquo;.
            </p>
            <p className="mt-3 text-[14px] leading-[1.6] text-ink-muted">
              {t.help.search.noResultsBody}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setQ("");
                  setTab("all");
                }}
                className="rounded-[12px] border border-ink bg-transparent px-4 py-2.5 text-[13px] font-semibold text-ink hover:bg-ink hover:text-white"
              >
                {t.help.search.clearFilters}
              </button>
              <Link
                href="/contact"
                className="rounded-[12px] bg-accent px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-accent-dark"
              >
                {t.help.search.talkToHuman}
              </Link>
            </div>
          </div>
        </div>
      )}

      {filteredTopics.length > 0 && (
        <div className="container-max pb-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                {t.help.sections.browseTopic}
              </span>
              <h2 className="mt-3 font-display text-[clamp(24px,3vw,34px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
                {isFiltering
                  ? `${filteredTopics.length} ${t.help.sections.topicsMatch}`
                  : t.help.sections.pickTopic}
              </h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTopics.map((tp) => (
              <Link
                key={tp.slug}
                id={tp.slug}
                href={`/help/${tp.slug}`}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[20px] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_18px_42px_-18px_rgba(26,26,26,0.22)]"
                aria-label={`${tp.title} — ${tp.count} ${t.help.search.articles}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[28px]" aria-hidden>
                    {tp.icon}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${
                      tp.audience === "firm"
                        ? "border-mustard/60 bg-mustard/10 text-mustard"
                        : tp.audience === "sme"
                          ? "border-accent/40 bg-accent/10 text-accent"
                          : "border-border bg-surface-alt text-ink-muted"
                    }`}
                  >
                    {tp.audience === "firm"
                      ? t.help.badges.firm
                      : tp.audience === "sme"
                        ? t.help.badges.sme
                        : t.help.badges.both}
                  </span>
                </div>
                <h3 className="font-display text-[20px] font-medium leading-[1.2] text-ink">
                  {tp.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-ink-muted">
                  {tp.body}
                </p>
                <ul className="flex flex-col gap-1.5 text-[13px] text-ink/85">
                  {tp.articles.slice(0, 3).map((a) => (
                    <li
                      key={a.slug}
                      className="flex items-start gap-2 leading-[1.5]"
                    >
                      <span aria-hidden className="mt-[6px] text-ink-muted">
                        ›
                      </span>
                      <span className="line-clamp-1">{a.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-[12px]">
                  <span className="font-mono text-ink-muted">
                    {tp.count} {t.help.search.articles}
                  </span>
                  <span className="font-semibold text-accent transition-all group-hover:translate-x-0.5">
                    {t.help.search.browse} <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {filteredPopular.length > 0 && (
        <div className="container-max pb-24">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                {t.help.sections.popularQuestions}
              </span>
              <h2 className="mt-3 font-display text-[clamp(24px,3vw,34px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
                {isFiltering
                  ? `${filteredPopular.length} ${t.help.sections.matchingArticles}`
                  : t.help.sections.mostSearched}
              </h2>
            </div>
          </div>
          <ul className="grid gap-3 md:grid-cols-2">
            {filteredPopular.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/help/${a.topicSlug}/${a.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-[14px] border border-border bg-surface px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-[0_12px_28px_-14px_rgba(26,26,26,0.2)]"
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display text-[16px] font-medium leading-[1.3] text-ink">
                      {a.title}
                    </span>
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.08em] text-ink-muted">
                      <span className="font-semibold">{a.topic}</span>
                      <span aria-hidden>·</span>
                      <span className="font-mono">{a.readTime}</span>
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-[18px] text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
