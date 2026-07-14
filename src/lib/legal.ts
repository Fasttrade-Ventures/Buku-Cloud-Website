export const LEGAL_VERSION = "1.0";
export const LEGAL_LAST_UPDATED = "9 June 2026";
export const LEGAL_LAST_UPDATED_BM = "9 Jun 2026";

export const COMPANY_NAME = "BukuCloud Sdn Bhd";
export const COMPANY_ADDRESS =
  "Wisma KFC, Jln Sultan Ismail, 50250 Kuala Lumpur, Malaysia";
export const COMPANY_REGISTRATION = "202401234567 (1234567-X)";

export const DPO_EMAIL = "dpo@bukucloud.com";
export const PRIVACY_EMAIL = "privacy@bukucloud.com";
export const LEGAL_EMAIL = "legal@bukucloud.com";
export const SUPPORT_EMAIL = "support@bukucloud.com";

export type LegalDoc = {
  slug: string;
  href: string;
  title: string;
  description: string;
  badge: string;
};

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "privacy",
    href: "/privacy",
    title: "Privacy Policy",
    description:
      "What personal data we collect, how we use it, and your rights under Malaysia's Personal Data Protection Act 2010 (PDPA) and its 2024 amendments.",
    badge: "PDPA",
  },
  {
    slug: "terms",
    href: "/terms",
    title: "Terms of Service",
    description:
      "The agreement between you and BukuCloud when you sign up, subscribe to a plan, or use the platform — what we do, what you do, and what happens if either side stops.",
    badge: "Customer",
  },
  {
    slug: "dpa",
    href: "/dpa",
    title: "Data Processing Agreement",
    description:
      "For SMEs and accounting firms — how we process your customers' personal data on your behalf as a data processor under PDPA.",
    badge: "B2B",
  },
  {
    slug: "cookies",
    href: "/cookies",
    title: "Cookie Policy",
    description:
      "Which cookies and similar technologies BukuCloud uses, why we use them, and how to manage them in your browser.",
    badge: "Cookies",
  },
];

export const SUBPROCESSORS = [
  {
    name: "Amazon Web Services (AWS)",
    purpose: "Application hosting, encrypted storage and backups",
    location: "Asia Pacific (Singapore)",
  },
  {
    name: "ToyyibPay",
    purpose: "Subscription billing — FPX, credit card, e-wallets",
    location: "Malaysia",
  },
  {
    name: "Google (Gemini)",
    purpose:
      "Optional OCR for receipt capture — only when tenant explicitly enables Gemini in settings; default is on-device Tesseract",
    location: "Asia Pacific",
  },
  {
    name: "Postmark",
    purpose: "Transactional email (invoice delivery, password resets)",
    location: "United States",
  },
  {
    name: "LHDN MyInvois",
    purpose:
      "e-Invoice submission — only for tenants with MyInvois enabled (Corporate / Enterprise, when feature ships)",
    location: "Malaysia",
  },
];
