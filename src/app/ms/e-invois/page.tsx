import type { Metadata } from "next";
import { pageMetadata, TRUST_STATS } from "@/lib/seo";
import { REGISTER_URL } from "@/lib/site";
import { Button, Eyebrow, Section } from "@/components/ui";
import { BreadcrumbJsonLd } from "@/components/seo/jsonld";
import { ProofStrip } from "@/components/proof-strip";

export const metadata: Metadata = pageMetadata({
  title: "E-Invois MyInvois untuk perniagaan Malaysia",
  description:
    "Persediaan LHDN MyInvois dalam BukuCloud: Issue → Validate → Submit → Archive. Semak senarai semakan Fasa 2 untuk PKS.",
  path: "/ms/e-invois",
  locale: "ms",
  alternateEnPath: "/e-invoice",
  alternateMsPath: "/ms/e-invois",
  keywords: ["MyInvois BM", "e-Invois LHDN", "Fasa 2 MyInvois"],
});

export default function MsEInvoisPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "BM", href: "/ms" },
          { name: "E-Invois", href: "/ms/e-invois" },
        ]}
      />
      <Section>
        <div className="container-max py-16 lg:py-24">
          <Eyebrow>MyInvois</Eyebrow>
          <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(36px,5vw,56px)] font-medium tracking-[-0.025em] text-ink">
            Bersedia untuk e-Invois LHDN.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[18px] leading-[1.55] text-ink-muted">
            Simpan TIN, alamat dan SST pada profil syarikat, pastikan pelanggan
            lengkap, dan ikut pipeline pengesahan. Baca senarai semakan Fasa 2
            (EN) jika anda hampir ke tarikh mandat.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={REGISTER_URL} size="lg" external>
              Mulakan percuma →
            </Button>
            <Button
              href="/guides/myinvois-phase-2-checklist"
              variant="secondary"
              size="lg"
            >
              Checklist Fasa 2
            </Button>
            <Button href="/e-invoice" variant="secondary" size="lg">
              Halaman EN
            </Button>
          </div>
          <p className="mt-6 text-[14px] text-ink-muted">
            {TRUST_STATS.smeCount} PKS · {TRUST_STATS.pdpa}
          </p>
        </div>
      </Section>
      <ProofStrip title="Mengapa PKS pilih BukuCloud untuk MyInvois" />
    </>
  );
}
