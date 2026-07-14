import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";
import { pageMetadata } from "@/lib/seo";
import { FaqJsonLd } from "@/components/seo/jsonld";
import { en } from "@/lib/i18n";

export const metadata: Metadata = pageMetadata({
  title: "BukuCloud — Cloud accounting for Malaysian SMEs",
  description:
    "Cloud accounting built for Malaysia: SST, MyInvois e-Invoicing, invoicing, bills, payroll and reports. From RM 0/mo. Practice console for accountants included.",
  path: "/",
  alternateMsPath: "/ms",
  keywords: [
    "best accounting software Malaysia",
    "Xero alternative Malaysia",
    "SQL Account alternative",
    "Wave alternative Malaysia",
    "online invoicing Malaysia",
    "free accounting software Malaysia",
  ],
});

export default function HomePage() {
  return (
    <>
      <FaqJsonLd items={[...en.home.faq.items]} />
      <HomeContent />
    </>
  );
}
