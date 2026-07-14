import type { Metadata } from "next";
import { EInvoiceContent } from "@/components/einvoice-content";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/jsonld";
import { en } from "@/lib/i18n";

export const metadata: Metadata = pageMetadata({
  title: "MyInvois e-Invoicing for Malaysian businesses",
  description:
    "LHDN MyInvois e-Invoicing built into BukuCloud. Submit, validate and archive automatically. Phase 2 starts in 2026 — be ready early. Built-in for tenants whose company profile is Malaysia + has a TIN.",
  path: "/e-invoice",
  alternateMsPath: "/ms/e-invois",
  keywords: [
    "MyInvois Malaysia",
    "LHDN e-Invoice",
    "e-Invoice Phase 2 Malaysia",
    "e-Invoice software Malaysia",
    "e-Invoicing TIN",
    "e-Invois LHDN",
  ],
});

export default function EInvoicePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "E-Invoice (MyInvois)", href: "/e-invoice" },
        ]}
      />
      <FaqJsonLd items={[...en.einvoice.faq.items]} />
      <EInvoiceContent />
    </>
  );
}
