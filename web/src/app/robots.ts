import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Allow search + AI retrieval crawlers. Disallow app API routes only.
 * Host matches the preferred www canonical.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt", "/guides"],
        disallow: ["/api/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/llms.txt", "/guides"],
        disallow: ["/api/"],
      },
      {
        userAgent: "Google-Extended",
        allow: ["/", "/llms.txt", "/guides"],
        disallow: ["/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/llms.txt", "/guides"],
        disallow: ["/api/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/llms.txt", "/guides"],
        disallow: ["/api/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/", "/llms.txt", "/guides"],
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
