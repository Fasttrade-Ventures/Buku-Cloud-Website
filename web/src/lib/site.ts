export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "http://127.0.0.1:8000";

export const REGISTER_URL = `${APP_URL}/register`;
export const REGISTER_PRACTICE_URL = `${APP_URL}/register/practice`;
export const LOGIN_URL = `${APP_URL}/login`;

// Real WhatsApp / email contact endpoints used by buttons across the site.
// Centralized so every CTA is wired to a real, working destination.
export const WHATSAPP_NUMBER = "60126804697";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const SUPPORT_WHATSAPP_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi BukuCloud, I have a question about the product."
)}`;
export const SUPPORT_EMAIL = "support@bukucloud.com";
export const SALES_EMAIL = "sales@bukucloud.com";
export const HELLO_EMAIL = "hello@bukucloud.com";
export const CAREERS_EMAIL = "careers@bukucloud.com";

export const NAV_LINKS = [
  { href: "/features", labelKey: "features" as const },
  { href: "/pricing", labelKey: "pricing" as const },
  { href: "/e-invoice", labelKey: "eInvoice" as const },
  { href: "/accountants", labelKey: "accountants" as const },
];

export type FooterColumnKey = "Product" | "Company" | "Help" | "Legal";

export const FOOTER_LINKS: Record<
  FooterColumnKey,
  { href: string; labelEn: string; labelBm: string }[]
> = {
  Product: [
    { href: "/features", labelEn: "Features", labelBm: "Ciri-ciri" },
    { href: "/pricing", labelEn: "Pricing", labelBm: "Harga" },
    {
      href: "/e-invoice",
      labelEn: "E-Invoice (MyInvois)",
      labelBm: "E-Invois (MyInvois)",
    },
    {
      href: "/accountants",
      labelEn: "For Accountants",
      labelBm: "Untuk Akauntan",
    },
  ],
  Company: [
    { href: "/about", labelEn: "About", labelBm: "Tentang" },
    { href: "/contact", labelEn: "Contact", labelBm: "Hubungi" },
  ],
  Help: [
    { href: "/help", labelEn: "Help Center", labelBm: "Pusat Bantuan" },
    {
      href: "/contact",
      labelEn: "Talk to a human",
      labelBm: "Cakap dengan manusia",
    },
  ],
  Legal: [
    {
      href: "/privacy",
      labelEn: "Privacy Policy",
      labelBm: "Dasar Privasi",
    },
    {
      href: "/terms",
      labelEn: "Terms of Service",
      labelBm: "Terma Perkhidmatan",
    },
    {
      href: "/dpa",
      labelEn: "Data Processing Agreement",
      labelBm: "Perjanjian Pemprosesan Data",
    },
    { href: "/cookies", labelEn: "Cookie Policy", labelBm: "Dasar Kuki" },
    {
      href: "/legal",
      labelEn: "All legal documents",
      labelBm: "Semua dokumen perundangan",
    },
  ],
};
