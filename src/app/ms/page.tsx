import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, ORG_ADDRESS_DISPLAY, ORG_PHONE_DISPLAY, SUPPORT_HOURS, TRUST_STATS } from "@/lib/seo";
import { REGISTER_URL } from "@/lib/site";
import { Button, Eyebrow, Section } from "@/components/ui";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "BukuCloud — Perakaunan awan untuk PKS Malaysia",
  description:
    "BukuCloud oleh Fasttrade Ventures di Sendayan: invois, SST, MyInvois, bil pembekal dan konsol akauntan. Plan Startup percuma. Sokongan Isnin–Sabtu 9pagi–6petang.",
  path: "/ms",
  locale: "ms",
  alternateEnPath: "/",
  alternateMsPath: "/ms",
  keywords: [
    "perisian perakaunan Malaysia",
    "perakaunan awan PKS",
    "MyInvois",
    "SST invois",
  ],
});

const LINKS = [
  { href: "/ms/harga", label: "Harga & pelan" },
  { href: "/ms/e-invois", label: "E-Invois MyInvois" },
  { href: "/ms/akauntan", label: "Untuk firma akauntan" },
  { href: "/ms/hubungi", label: "Hubungi kami" },
  { href: "/guides", label: "Panduan (EN)" },
  { href: "/", label: "English home" },
];

export default function MsHomePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Bahasa Malaysia", href: "/ms" },
        ]}
      />
      <Section>
        <div className="container-max py-16 lg:py-24">
          <Eyebrow>Bahasa Malaysia</Eyebrow>
          <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(36px,5vw,56px)] font-medium leading-[1.05] tracking-[-0.025em] text-ink">
            Perakaunan awan untuk PKS Malaysia.
          </h1>
          <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.55] text-ink-muted">
            BukuCloud membantu anda invois pelanggan, rekod bil, kekalkan SST
            kemas, dan bekerjasama dengan akauntan — tanpa spreadsheet 17 tab.
            Dibina oleh Fasttrade Ventures di {ORG_ADDRESS_DISPLAY}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={REGISTER_URL} size="lg" external>
              Mulakan percuma →
            </Button>
            <Button href="/ms/harga" variant="secondary" size="lg">
              Lihat harga
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3 text-[13px] text-ink-muted">
            <li className="rounded-full border border-border px-3 py-1">
              {TRUST_STATS.freePlan}
            </li>
            <li className="rounded-full border border-border px-3 py-1">
              {TRUST_STATS.pdpa}
            </li>
            <li className="rounded-full border border-border px-3 py-1">
              {TRUST_STATS.smeCount} PKS
            </li>
            <li className="rounded-full border border-border px-3 py-1">
              Sokongan {SUPPORT_HOURS}
            </li>
            <li className="rounded-full border border-border px-3 py-1">
              WhatsApp {ORG_PHONE_DISPLAY}
            </li>
          </ul>
          <nav className="mt-14 grid gap-3 sm:grid-cols-2">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-[12px] border border-border bg-surface px-5 py-4 text-[15px] font-medium text-ink hover:border-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </Section>
    </>
  );
}
