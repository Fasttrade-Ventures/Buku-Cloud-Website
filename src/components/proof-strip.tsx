import Link from "next/link";
import {
  ORG_PHONE_DISPLAY,
  SUPPORT_HOURS,
  TRUST_STATS,
} from "@/lib/seo";

const DEFAULT_ITEMS = [
  { label: TRUST_STATS.pdpa, detail: "Malaysia PDPA registered operator" },
  {
    label: `${TRUST_STATS.smeCount} SMEs`,
    detail: "Malaysian businesses on BukuCloud",
  },
  {
    label: `${TRUST_STATS.firmCount} firms`,
    detail: "Accounting practices on Practice console",
  },
  {
    label: "Migration help",
    detail: "CSV + SQL Account helper checklist",
  },
  {
    label: "Support hours",
    detail: `${SUPPORT_HOURS} · WhatsApp ${ORG_PHONE_DISPLAY}`,
  },
] as const;

type ProofItem = { label: string; detail: string };

export function ProofStrip({
  items = DEFAULT_ITEMS as unknown as ProofItem[],
  title = "Why teams switch with confidence",
}: {
  items?: ProofItem[];
  title?: string;
}) {
  return (
    <section className="border-y border-border bg-surface-alt">
      <div className="container-max py-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.075em] text-ink-muted">
          {title}
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <li key={item.label} className="flex flex-col gap-1">
              <span className="font-display text-[20px] font-medium text-ink">
                {item.label}
              </span>
              <span className="text-[13px] leading-[1.5] text-ink-muted">
                {item.detail}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[13px] text-ink-muted">
          Need help moving books?{" "}
          <Link href="/contact" className="font-semibold text-ink underline">
            Plan a migration
          </Link>{" "}
          or{" "}
          <Link href="/guides" className="font-semibold text-ink underline">
            read the guides
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
