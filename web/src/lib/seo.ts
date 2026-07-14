import type { Metadata } from "next";

/**
 * Preferred host MUST match Vercel production (apex 308 → www).
 * Override with NEXT_PUBLIC_SITE_URL only if deploying elsewhere.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bukucloud.com"
).replace(/\/+$/, "");

export const SITE_NAME = "BukuCloud";
export const SITE_LEGAL_NAME = "BukuCloud Sdn Bhd";
export const SITE_TAGLINE = "Cloud accounting for Malaysian SMEs";
export const SITE_DESCRIPTION =
  "Cloud accounting built for Malaysia: SST, MyInvois e-Invoicing, invoicing, bills, payroll, and reports. Calm, multi-tenant, and made for the accountants who serve Malaysian SMEs.";

/** Only include verified, resolvable profiles. Omit dead handles. */
export const SOCIAL = {
  twitter: "" as string,
  facebook: "https://www.facebook.com/bukucloud",
  linkedin: "https://www.linkedin.com/company/bukucloud",
  instagram: "https://www.instagram.com/bukucloud",
};

/** Real WhatsApp support number (E.164), also shown on /contact. */
export const ORG_PHONE = "+60126804697";
export const ORG_ADDRESS = {
  street: "Wisma KFC, Jln Sultan Ismail",
  locality: "Kuala Lumpur",
  region: "Wilayah Persekutuan Kuala Lumpur",
  postalCode: "50250",
  country: "MY",
};

export const KEYWORDS_GLOBAL = [
  "cloud accounting Malaysia",
  "Malaysian SME accounting software",
  "MyInvois e-Invoicing",
  "LHDN MyInvois",
  "SST invoice software",
  "perisian perakaunan Malaysia",
  "BukuCloud",
  "Practice console for accountants",
  "online accounting software Malaysia",
];

export type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
  type?: "website" | "article" | "profile" | "book";
};

/**
 * Build a Next.js Metadata object for a page with sane SEO defaults.
 * Combines site-wide tokens with per-page overrides for canonical URLs,
 * Open Graph, Twitter cards and robots directives.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage,
  noindex = false,
  type = "website",
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const image = ogImage ?? "/opengraph-image";
  const twitterCard: Metadata["twitter"] = {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  };
  if (SOCIAL.twitter) {
    twitterCard.site = SOCIAL.twitter;
    twitterCard.creator = SOCIAL.twitter;
  }

  return {
    title,
    description,
    keywords: [...KEYWORDS_GLOBAL, ...keywords],
    alternates: {
      canonical: url,
      // Only declare languages that have crawlable, distinct URLs.
      // BM is a client UI toggle today — do not fake ms-MY hreflang.
      languages: {
        "en-MY": url,
        "x-default": url,
      },
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: "en_MY",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: twitterCard,
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function socialSameAs(): string[] {
  return [SOCIAL.facebook, SOCIAL.linkedin, SOCIAL.instagram].filter(Boolean);
}
