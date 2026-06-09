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
    "Built in Kuala Lumpur for Malaysian SMEs. Founded in 2023 by accountants and engineers tired of asking SME owners to debug Excel — meet the team behind BukuCloud.",
  path: "/about",
  keywords: [
    "BukuCloud team",
    "Malaysian accounting startup",
    "BukuCloud founders",
    "Kuala Lumpur SaaS",
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
