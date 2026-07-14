import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { ARTICLES, TOPICS } from "@/lib/help-content";
import { GUIDES } from "@/lib/guides";

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
  { path: "/guides", changeFrequency: "weekly", priority: 0.85 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/help", changeFrequency: "weekly", priority: 0.7 },
  { path: "/legal", changeFrequency: "monthly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.4 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.4 },
  { path: "/dpa", changeFrequency: "monthly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
  /** Crawlable Bahasa Malaysia twins (hreflang pairs). */
  { path: "/ms", changeFrequency: "weekly", priority: 0.85 },
  { path: "/ms/harga", changeFrequency: "weekly", priority: 0.85 },
  { path: "/ms/e-invois", changeFrequency: "monthly", priority: 0.85 },
  { path: "/ms/akauntan", changeFrequency: "weekly", priority: 0.85 },
  { path: "/ms/hubungi", changeFrequency: "yearly", priority: 0.55 },
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
  const guideRoutes: Entry[] = GUIDES.map((g) => ({
    path: `/guides/${g.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [
    ...STATIC_ROUTES,
    ...guideRoutes,
    ...helpTopicRoutes,
    ...helpArticleRoutes,
  ].map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
