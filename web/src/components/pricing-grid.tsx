"use client";

import { useState } from "react";
import { type PricingPlan } from "./pricing-card";
import { PricingCarousel } from "./pricing-carousel";
import {
  applyYearlyDiscount,
  businessPlans,
  practicePlans,
} from "@/lib/plans";
import { useT } from "./i18n-provider";

type Audience = "business" | "accountant";
type Billing = "monthly" | "yearly";

export function PricingGrid({
  defaultAudience = "business",
  showAudienceToggle = true,
  showBillingToggle = true,
}: {
  defaultAudience?: Audience;
  showAudienceToggle?: boolean;
  showBillingToggle?: boolean;
}) {
  const t = useT();
  const [audience, setAudience] = useState<Audience>(defaultAudience);
  const [billing, setBilling] = useState<Billing>("monthly");

  const source: PricingPlan[] =
    audience === "business" ? businessPlans : practicePlans;

  const plans: PricingPlan[] =
    billing === "yearly" ? source.map(applyYearlyDiscount) : source;

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4">
        {showAudienceToggle && (
          <div className="inline-flex rounded-full bg-ink p-1 text-[13px] font-semibold">
            <button
              onClick={() => setAudience("business")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 transition-colors ${
                audience === "business"
                  ? "bg-surface text-ink"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <BriefcaseIcon /> {t.pricing.audienceBusiness}
            </button>
            <button
              onClick={() => setAudience("accountant")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 transition-colors ${
                audience === "accountant"
                  ? "bg-surface text-ink"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <CalcIcon /> {t.pricing.audienceAccountant}
            </button>
          </div>
        )}

        {showBillingToggle && (
          <div className="inline-flex rounded-full border border-border bg-surface-alt p-1 text-[13px] font-medium">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-1.5 transition-colors ${
                billing === "monthly"
                  ? "bg-surface text-ink shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {t.pricing.billingMonthly}
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-1.5 transition-colors ${
                billing === "yearly"
                  ? "bg-surface text-ink shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {t.pricing.billingYearly}
              <span className="rounded-full bg-mustard px-2 py-0.5 text-[10px] font-semibold text-ink">
                {t.pricing.billingSave}
              </span>
            </button>
          </div>
        )}
      </div>

      <PricingCarousel plans={plans} />
    </div>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="1.5" y="4" width="11" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 4V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function CalcIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="2.5" y="1.5" width="9" height="11" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4.5 4h5M4.5 7h1m2 0h1m-4 2.5h1m2 0h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
