import type { Metadata } from "next";
import { AccountantsContent } from "@/components/accountants-content";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "For Accountants — BukuCloud Practice console",
  description:
    "One Practice console for every client book. Cross-client AR aging, bulk-action toolbar, one-click switch into any client, practice-wide audit log. Free Practice plan up to Practice Firm at RM 599/mo.",
  path: "/accountants",
  keywords: [
    "Practice console Malaysia",
    "accounting firm software Malaysia",
    "multi-client accounting Malaysia",
    "BukuCloud Practice",
    "white-label accounting Malaysia",
  ],
});

export default function AccountantsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "For Accountants", href: "/accountants" },
        ]}
      />
      <AccountantsContent />
    </>
  );
}
