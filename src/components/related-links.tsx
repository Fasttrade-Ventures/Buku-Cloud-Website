import Link from "next/link";
import { REGISTER_URL } from "@/lib/site";

export type RelatedLink = { label: string; href: string };

export function RelatedLinks({
  title = "Related pages",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (!links.length) return null;
  return (
    <aside className="mt-14 rounded-[16px] border border-border bg-surface-alt p-6">
      <h2 className="font-display text-[20px] font-medium text-ink">{title}</h2>
      <ul className="mt-4 flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[15px] font-medium text-accent hover:text-accent-dark"
            >
              {l.label} →
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function GuideHubLinks() {
  const links: RelatedLink[] = [
    {
      label: "MyInvois Phase 2 checklist",
      href: "/guides/myinvois-phase-2-checklist",
    },
    {
      label: "SST invoice mistakes Malaysia",
      href: "/guides/sst-return-invoice-mistakes",
    },
    {
      label: "Xero vs BukuCloud vs SQL Account",
      href: "/guides/xero-vs-bukucloud-vs-sql-account",
    },
    {
      label: "Practice console for accountants",
      href: "/guides/accountant-practice-console",
    },
    { label: "Customer stories", href: "/guides/customer-stories" },
    { label: "See pricing", href: "/pricing" },
    { label: "Start free", href: REGISTER_URL },
  ];
  return (
    <section className="border-t border-border bg-bg-cream">
      <div className="container-max py-16">
        <p className="text-[12px] font-semibold uppercase tracking-[0.075em] text-ink-muted">
          Keep reading
        </p>
        <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(28px,3.5vw,40px)] font-medium tracking-[-0.02em] text-ink">
          Guides that answer real Malaysian search intent.
        </h2>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-[12px] border border-border bg-surface px-5 py-4 text-[15px] font-medium text-ink hover:border-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
