import {
  ORG_ADDRESS,
  ORG_PHONE,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  socialSameAs,
} from "@/lib/seo";

type JsonLdProps = {
  data: object | object[];
  id?: string;
};

/**
 * Renders structured data as a JSON-LD <script> tag. Must be a server-side
 * render to be discoverable by crawlers — do not wrap in a client component.
 */
export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      id={id}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      id="org-jsonld"
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: SITE_LEGAL_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/icon.png"),
          width: 512,
          height: 512,
        },
        description:
          "BukuCloud is a Malaysia-first cloud accounting platform for SMEs and the accountancy firms that serve them.",
        foundingDate: "2023",
        foundingLocation: {
          "@type": "Place",
          name: "Kuala Lumpur, Malaysia",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: ORG_ADDRESS.street,
          addressLocality: ORG_ADDRESS.locality,
          addressRegion: ORG_ADDRESS.region,
          postalCode: ORG_ADDRESS.postalCode,
          addressCountry: ORG_ADDRESS.country,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: ORG_PHONE,
            contactType: "customer support",
            email: "support@bukucloud.com",
            areaServed: "MY",
            availableLanguage: ["English", "Malay"],
          },
          {
            "@type": "ContactPoint",
            email: "sales@bukucloud.com",
            contactType: "sales",
            areaServed: "MY",
            availableLanguage: ["English", "Malay"],
          },
        ],
        sameAs: socialSameAs(),
      }}
    />
  );
}

export function WebsiteJsonLd() {
  return (
    <JsonLd
      id="website-jsonld"
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        // SSR content is English (en-MY). BM UI toggle is not a separate URL.
        inLanguage: "en-MY",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/help?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export type SoftwareAppOffer = {
  name: string;
  price: string;
  priceCurrency?: string;
  url: string;
  description?: string;
};

export function SoftwareApplicationJsonLd({
  offers,
}: {
  offers: SoftwareAppOffer[];
}) {
  return (
    <JsonLd
      id="softwareapp-jsonld"
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "AccountingApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
        description:
          "BukuCloud is a multi-tenant cloud-accounting platform for Malaysian SMEs and the accountancy firms that serve them — invoicing, SST, MyInvois e-Invoicing, bills, payroll, and reports.",
        offers: offers.map((o) => ({
          "@type": "Offer",
          name: o.name,
          price: o.price,
          priceCurrency: o.priceCurrency ?? "MYR",
          url: o.url,
          description: o.description,
          availability: "https://schema.org/InStock",
        })),
        // No AggregateRating until verified on-page reviews exist.
      }}
    />
  );
}

export function ArticleJsonLd({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return (
    <JsonLd
      id="article-jsonld"
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        url: absoluteUrl(path),
        mainEntityOfPage: absoluteUrl(path),
        datePublished,
        dateModified: dateModified ?? datePublished,
        inLanguage: "en-MY",
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
      }}
    />
  );
}

export function FaqJsonLd({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <JsonLd
      id="faq-jsonld"
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: it.a,
          },
        })),
      }}
    />
  );
}

export type BreadcrumbItem = { name: string; href: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      id="breadcrumb-jsonld"
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: absoluteUrl(it.href),
        })),
      }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <JsonLd
      id="localbusiness-jsonld"
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: SITE_LEGAL_NAME,
        url: SITE_URL,
        telephone: ORG_PHONE,
        email: "hello@bukucloud.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: ORG_ADDRESS.street,
          addressLocality: ORG_ADDRESS.locality,
          addressRegion: ORG_ADDRESS.region,
          postalCode: ORG_ADDRESS.postalCode,
          addressCountry: ORG_ADDRESS.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 3.156,
          longitude: 101.71,
        },
        areaServed: {
          "@type": "Country",
          name: "Malaysia",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],
      }}
    />
  );
}

export function ContactPageJsonLd() {
  return (
    <JsonLd
      id="contactpage-jsonld"
      data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: `${SITE_URL}/contact`,
        name: "Contact BukuCloud",
        about: { "@id": `${SITE_URL}/#organization` },
      }}
    />
  );
}
