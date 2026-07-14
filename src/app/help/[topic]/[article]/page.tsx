import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ARTICLES,
  getArticle,
  getTopic,
} from "@/lib/help-content";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";
import { HelpArticleView } from "@/components/help-article-view";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ topic: a.topicSlug, article: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string; article: string }>;
}): Promise<Metadata> {
  const { topic: topicSlug, article: articleSlug } = await params;
  const topic = getTopic(topicSlug);
  const article = getArticle(topicSlug, articleSlug);
  if (!topic || !article) return {};
  return pageMetadata({
    title: `${article.title} — ${topic.title} | Help`,
    description: article.summary,
    path: `/help/${topic.slug}/${article.slug}`,
    keywords: [
      "BukuCloud help",
      article.title.toLowerCase(),
      `${topic.title.toLowerCase()} guide`,
    ],
  });
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ topic: string; article: string }>;
}) {
  const { topic: topicSlug, article: articleSlug } = await params;
  const topic = getTopic(topicSlug);
  const article = getArticle(topicSlug, articleSlug);
  if (!topic || !article) notFound();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Help Center", href: "/help" },
          { name: topic.title, href: `/help/${topic.slug}` },
          {
            name: article.title,
            href: `/help/${topic.slug}/${article.slug}`,
          },
        ]}
      />
      <HelpArticleView topic={topic} article={article} />
    </>
  );
}
