import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { ARTICLES, TOPICS } from "@/lib/help-content";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const STATIC_ROUTES: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/features", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.95 },
  { path: "/e-invoice", changeFrequency: "monthly", priority: 0.9 },
  { path: "/accountants", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/help", changeFrequency: "weekly", priority: 0.7 },
  { path: "/legal", changeFrequency: "monthly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.4 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.4 },
  { path: "/dpa", changeFrequency: "monthly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const helpTopicRoutes: Entry[] = TOPICS.map((t) => ({
    path: `/help/${t.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  const helpArticleRoutes: Entry[] = ARTICLES.map((a) => ({
    path: `/help/${a.topicSlug}/${a.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));
  return [...STATIC_ROUTES, ...helpTopicRoutes, ...helpArticleRoutes].map(
    ({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    }),
  );
}
