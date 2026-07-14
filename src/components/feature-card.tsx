import type { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  body,
  href,
  linkLabel = "Learn more",
}: {
  icon: ReactNode;
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[16px] border border-border bg-bg-cream p-7">
      <div className="text-ink">{icon}</div>
      <h3 className="font-display text-[22px] font-medium leading-tight text-ink">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.6] text-ink-muted">{body}</p>
      {href && (
        <a
          href={href}
          className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold text-accent hover:text-accent-dark"
        >
          {linkLabel} <span aria-hidden>→</span>
        </a>
      )}
    </div>
  );
}
