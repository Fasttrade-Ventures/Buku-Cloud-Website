import type { Metadata } from "next";
import { pageMetadata, TRUST_STATS } from "@/lib/seo";
import { REGISTER_PRACTICE_URL } from "@/lib/site";
import { Button, Eyebrow, Section } from "@/components/ui";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";
import { ProofStrip } from "@/components/proof-strip";

export const metadata: Metadata = pageMetadata({
  title: "Konsol Practice untuk firma akauntan Malaysia",
  description:
    "Urus berpuluh buku klien dalam satu konsol: AR rentas klien, masuk satu klik, harga mengikut buku aktif. Digunakan lebih 200 firma.",
  path: "/ms/akauntan",
  locale: "ms",
  alternateEnPath: "/accountants",
  alternateMsPath: "/ms/akauntan",
  keywords: ["akauntan Malaysia cloud", "Practice console", "firma perakaunan"],
});

export default function MsAkauntanPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "BM", href: "/ms" },
          { name: "Akauntan", href: "/ms/akauntan" },
        ]}
      />
      <Section>
        <div className="container-max py-16 lg:py-24">
          <Eyebrow>Untuk akauntan</Eyebrow>
          <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(36px,5vw,56px)] font-medium tracking-[-0.025em] text-ink">
            Urus 30 klien. Bukan 30 spreadsheet.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[18px] leading-[1.55] text-ink-muted">
            BukuCloud Practice memberi satu konsol untuk setiap buku klien —
            kesihatan, AR, tarikh akhir, dan masuk satu klik.{" "}
            {TRUST_STATS.firmCount} firma di Malaysia sudah guna jalur ini.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={REGISTER_PRACTICE_URL} size="lg" external>
              Daftar Practice →
            </Button>
            <Button
              href="/guides/accountant-practice-console"
              variant="secondary"
              size="lg"
            >
              Panduan Practice
            </Button>
            <Button href="/accountants" variant="secondary" size="lg">
              Halaman EN
            </Button>
          </div>
        </div>
      </Section>
      <ProofStrip title="Isyarat kepercayaan untuk firma" />
    </>
  );
}
