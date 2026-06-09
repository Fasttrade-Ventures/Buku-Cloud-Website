import type { PricingPlan } from "@/components/pricing-card";
import { REGISTER_PRACTICE_URL, REGISTER_URL } from "./site";

export const businessPlans: PricingPlan[] = [
  {
    tier: "Startup (Free)",
    price: { mode: "text", bigText: "Free" },
    sub: "1 user included",
    ctaLabel: "Start free",
    ctaHref: REGISTER_URL,
    features: [
      "Basic invoicing",
      "Up to 5 active customers",
      "Single bank account",
      "1 user",
      "Community support",
    ],
  },
  {
    tier: "Solo",
    price: { mode: "amount", amount: "49" },
    sub: "1 user included",
    ctaLabel: "Choose plan",
    ctaHref: REGISTER_URL,
    features: [
      "Everything in Startup",
      "Unlimited invoices, customers & bills",
      "Email invoices & estimates",
      "Recurring invoices & credit notes",
      "OCR receipt capture",
      "P&L and sales reports",
      "1 user (no extras)",
      "Email support",
    ],
  },
  {
    tier: "Growth",
    price: { mode: "amount", amount: "99" },
    sub: "3 users included",
    ctaLabel: "Choose plan",
    ctaHref: REGISTER_URL,
    popular: true,
    features: [
      "Everything in Solo",
      "Up to 3 team members included",
      "Customer statements",
      "Products & services catalogue",
      "Balance sheet & cash flow reports",
      "Sales tax & ageing reports",
      "Priority email support",
    ],
    extraSeat: "RM12.00 per extra user/month",
  },
  {
    tier: "Corporate",
    price: { mode: "amount", amount: "219" },
    sub: "5 users included",
    ctaLabel: "Choose plan",
    ctaHref: REGISTER_URL,
    features: [
      "Everything in Growth",
      "Up to 5 team members included",
      "Audit log & compliance pack",
      "Payroll module",
      "LHDN MyInvois e-Invoicing — coming soon",
      "Dedicated account manager",
    ],
    extraSeat: "RM15.00 per extra user/month",
  },
  {
    tier: "Enterprise",
    price: { mode: "text", bigText: "Talk to us" },
    sub: "Pricing scoped to your needs",
    ctaLabel: "Talk to sales →",
    ctaHref: "/contact",
    dark: true,
    features: [
      "Everything in Corporate",
      "Unlimited team members",
      "Self-hosted deployment option",
      "Custom SLAs & uptime guarantees",
      "White-label branding (self-hosted)",
      "Single sign-on (SSO) — coming soon",
      "Custom integrations & data residency",
      "Dedicated implementation engineer",
    ],
  },
];

export const practicePlans: PricingPlan[] = [
  {
    tier: "Practice Free",
    price: { mode: "text", bigText: "Free" },
    sub: "Up to 1 client · 1 firm-staff seat",
    ctaLabel: "Switch to free",
    ctaHref: REGISTER_PRACTICE_URL,
    features: [
      "Manage 1 client (perfect for trying it out)",
      "1 firm-staff seat",
      "Practice console with cross-client overview",
      "Switch into your client with one click",
      "Community support",
    ],
  },
  {
    tier: "Practice Starter",
    price: { mode: "amount", amount: "99" },
    sub: "Up to 5 clients · 1 seat included",
    ctaLabel: "Choose plan",
    ctaHref: REGISTER_PRACTICE_URL,
    features: [
      "Manage up to 5 client books",
      "1 firm-staff seat",
      "Practice console with cross-client overview",
      "Switch into any client with one click",
      "Email support",
    ],
    extraSeat: "RM25 per extra seat/month",
  },
  {
    tier: "Practice Growth",
    price: { mode: "amount", amount: "249" },
    sub: "Up to 25 clients · 3 seats included",
    ctaLabel: "Choose plan",
    ctaHref: REGISTER_PRACTICE_URL,
    popular: true,
    features: [
      "Manage up to 25 client books",
      "3 firm-staff seats",
      "Cross-client AR aging & SST reports",
      "Bulk-action toolbar across clients",
      "Priority email support",
    ],
    extraSeat: "RM25 per extra seat/month",
  },
  {
    tier: "Practice Firm",
    price: { mode: "amount", amount: "599" },
    sub: "Unlimited clients · 10 seats included",
    ctaLabel: "Choose plan",
    ctaHref: REGISTER_PRACTICE_URL,
    features: [
      "Manage unlimited client books",
      "10 firm-staff seats included",
      "Cross-client reports + custom branding",
      "Practice-wide audit log & activity feed",
      "Phone + email support during MY business hours",
    ],
    extraSeat: "RM35 per extra seat/month",
  },
  {
    tier: "Practice Self-Hosted",
    price: { mode: "text", bigText: "Custom" },
    sub: "License + setup quoted on demand. Unlimited clients · 9999 seats",
    ctaLabel: "Talk to sales →",
    ctaHref: "/contact",
    dark: true,
    customBadge: true,
    features: [
      "Run BukuCloud on your own infrastructure",
      "Everything in Practice Firm",
      "Custom SLAs & uptime guarantees",
      "White-label branding",
      "Single sign-on (SSO) — coming soon",
      "Dedicated implementation engineer",
    ],
  },
];

export function applyYearlyDiscount(plan: PricingPlan): PricingPlan {
  if (plan.price.mode !== "amount") return plan;
  const monthly = parseFloat(plan.price.amount.replace(/,/g, ""));
  if (!Number.isFinite(monthly)) return plan;
  const yearly = Math.round(monthly * 10);
  return {
    ...plan,
    price: { mode: "amount", amount: yearly.toLocaleString(), period: "/year" },
    sub:
      (plan.sub ? plan.sub + " · " : "") +
      `Equivalent to RM${(yearly / 12).toFixed(0)}/month`,
  };
}
