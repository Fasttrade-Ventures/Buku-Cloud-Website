import type { Metadata } from "next";
import {
  pageMetadata,
  ORG_ADDRESS_DISPLAY,
  ORG_PHONE_DISPLAY,
  SUPPORT_HOURS,
  SITE_LEGAL_NAME,
} from "@/lib/seo";
import { SUPPORT_WHATSAPP_URL, HELLO_EMAIL } from "@/lib/site";
import { Button, Eyebrow, Section } from "@/components/ui";
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from "@/components/seo/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "Hubungi BukuCloud — WhatsApp & pejabat Sendayan",
  description: `WhatsApp ${ORG_PHONE_DISPLAY}, e-mel ${HELLO_EMAIL}. ${SITE_LEGAL_NAME}, ${ORG_ADDRESS_DISPLAY}. Sokongan ${SUPPORT_HOURS}.`,
  path: "/ms/hubungi",
  locale: "ms",
  alternateEnPath: "/contact",
  alternateMsPath: "/ms/hubungi",
  keywords: ["hubungi BukuCloud", "WhatsApp perakaunan"],
});

export default function MsHubungiPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "BM", href: "/ms" },
          { name: "Hubungi", href: "/ms/hubungi" },
        ]}
      />
      <Section>
        <div className="container-max py-16 lg:py-24">
          <Eyebrow>Hubungi</Eyebrow>
          <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(36px,5vw,56px)] font-medium tracking-[-0.025em] text-ink">
            Cakap dengan manusia.
          </h1>
          <p className="mt-6 max-w-[55ch] text-[18px] leading-[1.55] text-ink-muted">
            Produk: BukuCloud · Syarikat: {SITE_LEGAL_NAME}. Pejabat:{" "}
            {ORG_ADDRESS_DISPLAY}. Waktu: {SUPPORT_HOURS}.
          </p>
          <dl className="mt-8 grid gap-4 text-[15px] sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.075em] text-ink-muted">
                WhatsApp
              </dt>
              <dd className="mt-1 font-display text-[22px] text-ink">
                {ORG_PHONE_DISPLAY}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.075em] text-ink-muted">
                E-mel
              </dt>
              <dd className="mt-1 font-display text-[22px] text-ink">
                {HELLO_EMAIL}
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={SUPPORT_WHATSAPP_URL} size="lg" external>
              WhatsApp sekarang →
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Borang EN
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
