import type { Metadata } from "next";
import { AboutContent } from "@/components/about-content";
import { pageMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  LocalBusinessJsonLd,
} from "@/components/seo/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "About BukuCloud",
  description:
    "Built in Sendayan, Negeri Sembilan by Fasttrade Ventures for Malaysian SMEs. Founded in 2023 by accountants and engineers tired of asking SME owners to debug Excel.",
  path: "/about",
  keywords: [
    "BukuCloud team",
    "Malaysian accounting startup",
    "BukuCloud founders",
    "Fasttrade Ventures Sendayan",
  ],
});

export default function AboutPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <AboutContent />
    </>
  );
}
