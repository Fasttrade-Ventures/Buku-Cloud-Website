import { CheckIcon } from "./ui";

type PriceMode =
  | { mode: "amount"; amount: string; period?: string }
  | { mode: "text"; bigText: string };

export type PricingPlan = {
  tier: string;
  price: PriceMode;
  sub?: string;
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
  customBadge?: boolean;
  dark?: boolean;
  features: string[];
  extraSeat?: string;
};

export function PricingCard({ plan }: { plan: PricingPlan }) {
  const dark = plan.dark === true;

  return (
    <div
      className={`relative flex h-full flex-col gap-4 rounded-[16px] border p-6 ${
        dark
          ? "bg-ink text-white border-ink"
          : plan.popular
          ? "bg-surface border-accent border-2"
          : "bg-surface border-border"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-5 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.075em] text-white">
          Most popular
        </span>
      )}
      {plan.customBadge && (
        <span className="absolute -top-3 left-5 rounded-full bg-mustard px-3 py-1 text-[10px] font-bold uppercase tracking-[0.075em] text-ink">
          Custom
        </span>
      )}

      <div
        className={`text-[11px] font-bold uppercase tracking-[0.12em] ${
          dark ? "text-white/60" : "text-ink-muted"
        }`}
      >
        {plan.tier}
      </div>

      {plan.price.mode === "amount" ? (
        <div className="flex items-end gap-1">
          <span
            className={`font-mono text-[16px] font-medium ${
              dark ? "text-white/80" : "text-ink"
            }`}
          >
            RM
          </span>
          <span
            className={`font-mono text-[34px] leading-none font-medium ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {plan.price.amount}
          </span>
          <span
            className={`pb-1 text-[13px] ${
              dark ? "text-white/60" : "text-ink-muted"
            }`}
          >
            {plan.price.period ?? "/month"}
          </span>
        </div>
      ) : (
        <div
          className={`font-display text-[32px] leading-none font-medium ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {plan.price.bigText}
        </div>
      )}

      {plan.sub && (
        <p
          className={`text-[12px] leading-[1.5] ${
            dark ? "text-white/60" : "text-ink-muted"
          }`}
        >
          {plan.sub}
        </p>
      )}

      <ul
        className={`mt-1 flex flex-col gap-2 ${
          dark ? "text-white/85" : "text-ink"
        }`}
      >
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-[13px] leading-[1.5]"
          >
            <CheckIcon tone={dark ? "mustard" : "forest"} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {plan.extraSeat && (
        <p
          className={`mt-1 text-[12px] font-medium ${
            dark ? "text-mustard" : "text-accent"
          }`}
        >
          {plan.extraSeat}
        </p>
      )}

      <a
        href={plan.ctaHref}
        className={`mt-auto inline-flex w-full items-center justify-center rounded-[12px] px-4 py-3 text-[13px] font-semibold transition-colors ${
          plan.popular
            ? "bg-accent text-white hover:bg-accent-dark"
            : dark
            ? "bg-mustard text-ink hover:bg-mustard/90"
            : "bg-ink text-white hover:bg-ink/90"
        }`}
      >
        {plan.ctaLabel}
      </a>
    </div>
  );
}
