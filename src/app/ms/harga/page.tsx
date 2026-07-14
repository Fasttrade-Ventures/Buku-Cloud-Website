import type { Metadata } from "next";
import { pageMetadata, TRUST_STATS, SUPPORT_HOURS } from "@/lib/seo";
import { REGISTER_URL } from "@/lib/site";
import { Button, Eyebrow, Section } from "@/components/ui";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";
import { ProofStrip } from "@/components/proof-strip";

export const metadata: Metadata = pageMetadata({
  title: "Harga BukuCloud — dari percuma hingga Corporate",
  description:
    "Plan Startup percuma, Solo RM49/bln, Growth RM99/bln, Corporate RM219/bln. Practice untuk firma akauntan dari RM99/bln. PDPA, migrasi dibantu, sokongan tempatan.",
  path: "/ms/harga",
  locale: "ms",
  alternateEnPath: "/pricing",
  alternateMsPath: "/ms/harga",
  keywords: ["harga perisian perakaunan", "BukuCloud pricing BM"],
});

export default function MsHargaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "BM", href: "/ms" },
          { name: "Harga", href: "/ms/harga" },
        ]}
      />
      <Section>
        <div className="container-max py-16 lg:py-24">
          <Eyebrow>Harga</Eyebrow>
          <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(36px,5vw,56px)] font-medium tracking-[-0.025em] text-ink">
            Mula percuma. Cuba Solo 14 hari.
          </h1>
          <p className="mt-6 max-w-[55ch] text-[18px] leading-[1.55] text-ink-muted">
            Harga dalam MYR untuk PKS Malaysia. Termasuk ruangan akauntan,
            migrasi CSV, dan sokongan {SUPPORT_HOURS}. Lihat jadual penuh dalam
            Bahasa Inggeris di halaman Pricing.
          </p>
          <ul className="mt-8 grid gap-3 text-[15px] text-ink-muted sm:grid-cols-2">
            <li>Startup — percuma ({TRUST_STATS.freePlan})</li>
            <li>Solo — RM49/bulan · {TRUST_STATS.trial}</li>
            <li>Growth — RM99/bulan · kolaborasi akauntan</li>
            <li>Corporate — RM219/bulan · audit & payroll</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={REGISTER_URL} size="lg" external>
              Mulakan percuma →
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              Jadual penuh (EN)
            </Button>
          </div>
        </div>
      </Section>
      <ProofStrip title="Bukti sebelum anda pilih pelan" />
    </>
  );
}
