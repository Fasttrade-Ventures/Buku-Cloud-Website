import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  TOPICS,
  articlesForTopic,
  getTopic,
} from "@/lib/help-content";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";
import { HelpTopicView } from "@/components/help-topic-view";

export function generateStaticParams() {
  return TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return {};
  return pageMetadata({
    title: `${topic.title} — Help Center`,
    description: topic.summary,
    path: `/help/${topic.slug}`,
    keywords: [
      "BukuCloud help",
      `${topic.title.toLowerCase()} guide`,
      "BukuCloud documentation",
    ],
  });
}

export default async function HelpTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();
  const articles = articlesForTopic(slug);
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Help Center", href: "/help" },
          { name: topic.title, href: `/help/${topic.slug}` },
        ]}
      />
      <HelpTopicView topic={topic} articles={articles} />
    </>
  );
}
