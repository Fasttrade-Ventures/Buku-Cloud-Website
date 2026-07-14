import type { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";
import { pageMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  ContactPageJsonLd,
  FaqJsonLd,
  LocalBusinessJsonLd,
} from "@/components/seo/jsonld";
import { en } from "@/lib/i18n";

export const metadata: Metadata = pageMetadata({
  title: "Contact BukuCloud — WhatsApp, email or book a demo",
  description:
    "Talk to a real human at BukuCloud — WhatsApp, email, or book a 20-min walkthrough. Mon–Sat, 9am–6pm MYT. Office in Wisma KFC, Jln Sultan Ismail, Kuala Lumpur.",
  path: "/contact",
  keywords: [
    "BukuCloud contact",
    "BukuCloud WhatsApp",
    "BukuCloud demo",
    "Malaysia accounting software support",
  ],
});

export default function ContactPage() {
  return (
    <>
      <ContactPageJsonLd />
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <FaqJsonLd items={[...en.contact.faqItems]} />
      <ContactContent />
    </>
  );
}
