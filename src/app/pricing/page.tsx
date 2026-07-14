import type { Metadata } from "next";
import { PricingPageContent } from "@/components/pricing-page-content";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  SoftwareApplicationJsonLd,
} from "@/components/seo/jsonld";
import { en } from "@/lib/i18n";

export const metadata: Metadata = pageMetadata({
  title: "Pricing — Cloud accounting from RM 0/mo",
  description:
    "Free Startup tier. RM 49/mo Solo, RM 99/mo Growth (most popular), RM 219/mo Corporate, custom Enterprise. Practice plans for accountants from RM 99/mo. Annual billing saves ~17%.",
  path: "/pricing",
  alternateMsPath: "/ms/harga",
  keywords: [
    "BukuCloud pricing",
    "Malaysian accounting software pricing",
    "free accounting software Malaysia",
    "SST accounting software pricing",
  ],
});

const pricingOffers = [
  {
    name: "Startup (Free)",
    price: "0",
    url: absoluteUrl("/pricing#sme"),
    description: "Free tier for solo SMEs — basic invoicing, up to 5 customers.",
  },
  {
    name: "Solo",
    price: "49",
    url: absoluteUrl("/pricing#sme"),
    description: "Single-user SME plan with unlimited invoices and OCR.",
  },
  {
    name: "Growth",
    price: "99",
    url: absoluteUrl("/pricing#sme"),
    description: "3 users included. Customer statements, full reports.",
  },
  {
    name: "Corporate",
    price: "219",
    url: absoluteUrl("/pricing#sme"),
    description: "5 users, audit log, payroll, MyInvois (coming soon).",
  },
  {
    name: "Practice Starter",
    price: "99",
    url: absoluteUrl("/pricing#firm"),
    description: "Up to 5 client books for accounting firms.",
  },
  {
    name: "Practice Growth",
    price: "249",
    url: absoluteUrl("/pricing#firm"),
    description: "Up to 25 client books with cross-client AR aging.",
  },
  {
    name: "Practice Firm",
    price: "599",
    url: absoluteUrl("/pricing#firm"),
    description: "Unlimited client books, custom branding, audit log.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SoftwareApplicationJsonLd offers={pricingOffers} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />
      <FaqJsonLd items={[...en.pricing.faq.items]} />
      <PricingPageContent />
    </>
  );
}
