import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";
import { Eyebrow, Section } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Guides — Cloud accounting for Malaysian SMEs",
  description:
    "Practical guides on cloud accounting Malaysia, SST invoicing, MyInvois context, Xero and SQL Account alternatives, and migrating from Excel.",
  path: "/guides",
  keywords: [
    "BukuCloud guides",
    "cloud accounting Malaysia guide",
    "SST invoicing guide",
  ],
});

export default function GuidesIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ]}
      />
      <Section>
        <div className="container-max py-16 lg:py-24">
          <Eyebrow>Resources</Eyebrow>
          <h1 className="mt-4 max-w-[20ch] font-display text-[clamp(36px,5vw,56px)] font-medium leading-[1.05] tracking-[-0.025em] text-ink">
            Guides for Malaysian SMEs and firms.
          </h1>
          <p className="mt-6 max-w-[55ch] text-[18px] leading-[1.55] text-ink-muted">
            Crawlable answers on SST, migration, and cloud accounting choices —
            written for search and for humans who still run the business.
          </p>

          <ul className="mt-14 flex flex-col gap-6">
            {GUIDES.map((g) => (
              <li key={g.slug} className="border-t border-border pt-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.075em] text-ink-muted">
                  {g.eyebrow}
                </p>
                <Link
                  href={`/guides/${g.slug}`}
                  className="mt-2 block font-display text-[24px] font-medium text-ink hover:underline"
                >
                  {g.title}
                </Link>
                <p className="mt-2 max-w-[65ch] text-[15px] leading-[1.55] text-ink-muted">
                  {g.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
