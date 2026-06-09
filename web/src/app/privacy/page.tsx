import type { Metadata } from "next";
import { LegalContact, LegalHero } from "@/components/legal-shell";
import { PrivacyContent } from "@/components/privacy-content";
import { DPO_EMAIL } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy (PDPA)",
  description:
    "How BukuCloud collects, stores and protects your data. PDPA 2010 + 2024-amendments aligned. Available in English and Bahasa Malaysia.",
  path: "/privacy",
  keywords: ["PDPA Malaysia", "privacy policy SaaS Malaysia", "BukuCloud privacy"],
});

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Legal", href: "/legal" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      />
      <LegalHero
        title="Privacy Policy"
        badge="PDPA"
        description={
          <>
            How we collect, use, store and protect your personal data — and
            the rights you have under Malaysia&apos;s Personal Data Protection
            Act 2010 (PDPA) and its 2024 amendments. Available in English and
            Bahasa Malaysia.
          </>
        }
      />
      <PrivacyContent />
      <LegalContact
        title="Privacy questions, data-subject requests, complaints."
        body="Email our Data Protection Officer at"
        email={DPO_EMAIL}
      />
    </>
  );
}
