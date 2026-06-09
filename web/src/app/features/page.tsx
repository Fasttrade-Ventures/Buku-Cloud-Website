import type { Metadata } from "next";
import { FeaturesContent } from "@/components/features-content";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "Features — Invoicing, SST, MyInvois, reports",
  description:
    "Everything BukuCloud handles for Malaysian SMEs: invoicing, supplier bills, SST, MyInvois e-Invoicing, financial reports, and accountant collaboration. Built for the way Malaysian businesses work.",
  path: "/features",
  keywords: [
    "Malaysian accounting features",
    "SST invoice software",
    "OCR receipt capture Malaysia",
    "Practice console accountants",
    "Cloud accounting features Malaysia",
  ],
});

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
        ]}
      />
      <FeaturesContent />
    </>
  );
}
