import type { Metadata } from "next";

/**
 * Preferred host MUST match Vercel production.
 * Override with NEXT_PUBLIC_SITE_URL only if deploying elsewhere.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bukucloud.com"
).replace(/\/+$/, "");

/** Product / brand name shown in UI and Google results. */
export const SITE_NAME = "BukuCloud";
/** Operating company (NAP legal name). */
export const SITE_LEGAL_NAME = "Fasttrade Ventures";
export const SITE_TAGLINE = "Cloud accounting for Malaysian SMEs";
export const SITE_DESCRIPTION =
  "Cloud accounting built for Malaysia: SST, MyInvois e-Invoicing, invoicing, bills, payroll, and reports. Calm, multi-tenant, and made for the accountants who serve Malaysian SMEs.";

/** Verified, resolvable profiles only. */
export const SOCIAL = {
  twitter: "" as string,
  facebook: "https://www.facebook.com/bukucloud",
  linkedin: "https://www.linkedin.com/company/bukucloud",
  instagram: "https://www.instagram.com/bukucloud",
};

/** Real WhatsApp support number (E.164). */
export const ORG_PHONE = "+60126804697";
export const ORG_PHONE_DISPLAY = "+60 12-680 4697";

/** NAP — Sendayan, Negeri Sembilan. */
export const ORG_ADDRESS = {
  street: "Bandar Sri Sendayan",
  locality: "Sendayan",
  region: "Negeri Sembilan",
  postalCode: "71950",
  country: "MY",
};

export const ORG_ADDRESS_DISPLAY =
  "Bandar Sri Sendayan, 71950 Sendayan, Negeri Sembilan, Malaysia";

export const ORG_GEO = {
  /** Approximate coordinates for Bandar Sri Sendayan, NS */
  latitude: 2.6235,
  longitude: 101.8432,
  /** ISO 3166-2:MY for Negeri Sembilan */
  regionCode: "MY-05",
  placename: "Sendayan",
};

export const SUPPORT_HOURS = "Mon–Sat, 9am–6pm MYT";
export const TRUST_STATS = {
  smeCount: "1,200+",
  firmCount: "200+",
  pdpa: "PDPA registered",
  trial: "14-day Solo trial",
  freePlan: "Free Startup plan",
} as const;

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
  /** Crawlable Malay URL for en↔ms hreflang pairs. */
  alternateMsPath?: string;
  /** When this page is Malay, pass the English twin path. */
  alternateEnPath?: string;
  locale?: "en" | "ms";
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage,
  noindex = false,
  type = "website",
  alternateMsPath,
  alternateEnPath,
  locale = "en",
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

  const enUrl = absoluteUrl(
    locale === "ms" ? (alternateEnPath ?? "/") : path,
  );
  const msUrl = alternateMsPath
    ? absoluteUrl(alternateMsPath)
    : locale === "ms"
      ? url
      : undefined;

  const languages: Record<string, string> = {
    "en-MY": enUrl,
    "x-default": enUrl,
  };
  if (msUrl) languages["ms-MY"] = msUrl;

  return {
    title,
    description,
    keywords: [...KEYWORDS_GLOBAL, ...keywords],
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: locale === "ms" ? "ms_MY" : "en_MY",
      ...(msUrl && locale === "en" ? { alternateLocale: ["ms_MY"] } : {}),
      ...(locale === "ms" ? { alternateLocale: ["en_MY"] } : {}),
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
