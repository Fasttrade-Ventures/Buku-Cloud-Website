import type { Metadata } from "next";
import { HelpContent } from "@/components/help-content";
import {
  type HelpTopic,
  type PopularArticle,
} from "@/components/help-browser";
import { APP_URL, REGISTER_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/jsonld";
import {
  TOPICS,
  articlesForTopic,
  popularArticles,
} from "@/lib/help-content";

export const metadata: Metadata = pageMetadata({
  title: "Help Center — BukuCloud guides and FAQs",
  description:
    "Guides, walkthroughs and answers to the questions Malaysian SMEs and accountants ask about BukuCloud — invoicing, SST, MyInvois, the Practice console, billing and more.",
  path: "/help",
  keywords: [
    "BukuCloud help",
    "BukuCloud guide",
    "Malaysia accounting software help",
    "MyInvois guide",
    "SST invoice guide",
  ],
});

const topics: HelpTopic[] = TOPICS.map((t) => {
  const list = articlesForTopic(t.slug);
  return {
    slug: t.slug,
    icon: t.icon,
    title: t.title,
    body: t.summary,
    articles: list.map((a) => ({ slug: a.slug, title: a.title })),
    count: list.length,
    audience: t.audience,
  };
});

const popular: PopularArticle[] = popularArticles().map((a) => {
  const t = TOPICS.find((tp) => tp.slug === a.topicSlug);
  return {
    slug: a.slug,
    title: a.title,
    topic: t?.title ?? a.topicSlug,
    topicSlug: a.topicSlug,
    readTime: a.readTime,
    audience: a.audience,
  };
});

const quickStarts = [
  {
    label: "For SMEs",
    title: "Send your first invoice",
    minutes: "5 min",
    steps: [
      {
        n: "01",
        text: (
          <>
            Sign up at{" "}
            <a
              href={REGISTER_URL}
              className="font-semibold text-accent hover:text-accent-dark"
            >
              register
            </a>{" "}
            with your business email.
          </>
        ),
      },
      {
        n: "02",
        text: <>Go to <strong>Customers</strong> and add your first customer (TIN optional).</>,
      },
      {
        n: "03",
        text: <>Open <strong>Invoices → New</strong>, pick the customer, add line items with SST.</>,
      },
      {
        n: "04",
        text: <><strong>Post</strong> the invoice, then click <strong>Email</strong> to send the PDF.</>,
      },
    ],
  },
  {
    label: "For SMEs",
    title: "Add your accountant",
    minutes: "3 min",
    steps: [
      {
        n: "01",
        text: <>Open <strong>Settings → Team</strong> and choose <strong>Invite firm</strong>.</>,
      },
      {
        n: "02",
        text: <>Type your accountant&apos;s email. They get a link.</>,
      },
      {
        n: "03",
        text: (
          <>
            They sign in (or create their Practice account) and switch into
            your books from the Practice console.
          </>
        ),
      },
      {
        n: "04",
        text: <>Every action they take is recorded in the per-tenant audit log.</>,
      },
    ],
  },
  {
    label: "For SMEs",
    title: "Run this month's P&L",
    minutes: "1 min",
    steps: [
      {
        n: "01",
        text: <>Go to <strong>Reports → Profit &amp; Loss</strong>.</>,
      },
      {
        n: "02",
        text: <>Pick the date range (e.g. <em>This month</em>).</>,
      },
      {
        n: "03",
        text: <>Click <strong>Export PDF</strong> or copy the share link.</>,
      },
      {
        n: "04",
        text: <>Year-end? Use <strong>Reports → Year-end pack</strong> for everything.</>,
      },
    ],
  },
];

const practiceQuickStarts = [
  {
    title: "Add your first client",
    minutes: "2 min",
    steps: [
      "Register a Practice account at /register/practice.",
      "From the Practice console, click Add client.",
      "Enter the client's company name, MyKad/SSM number and contact email.",
      "Their tenant is provisioned with its own database in seconds.",
    ],
  },
  {
    title: "Switch into a client",
    minutes: "30 sec",
    steps: [
      "Open the Practice console.",
      "Find the client in the list (use search if you have many).",
      "Click Open. You enter their books with one click — no second login.",
      "Click Back to firm to return. Every switch is audit-logged.",
    ],
  },
  {
    title: "Cross-client AR aging",
    minutes: "1 min",
    steps: [
      "Open the Practice console.",
      "Go to Reports → Cross-client AR aging (Practice Growth and above).",
      "Filter by overdue bucket (30/60/90+ days) across every client at once.",
      "Use the bulk-action toolbar to send statements in batch.",
    ],
  },
];

const faqItems = [
  {
    q: "Does BukuCloud handle SST?",
    a: "Yes. SST 6% can be applied per-line on invoices and bills, and the Sales Tax (SST) report rolls up output and input tax for the period. Your company profile holds your SST registration number and turnover threshold.",
  },
  {
    q: "When will MyInvois e-Invoicing be ready?",
    a: "The permission gate (myinvois.submit) is wired in for Corporate and Enterprise plans. The submission flow is on the roadmap and will be auto-enabled for tenants whose company profile is Malaysia and has a TIN. We won't ship a half-baked LHDN integration — see /e-invoice for the latest status.",
  },
  {
    q: "Can my accountant see my books?",
    a: "Only when you invite them. From Settings → Team → Invite firm, type their email — they accept the link and can switch into your books from their Practice console with one click. Every switch is recorded in your tenant's audit log.",
  },
  {
    q: "Is my data secure on cloud?",
    a: "Yes. Each company gets its own isolated database (Stancl Tenancy multi-tenant model), encryption at rest, role-based permissions, optional 2FA, and a per-tenant audit log. We're PDPA-aligned and offer right-of-access export and account erasure on request.",
  },
  {
    q: "Can I export my data anytime?",
    a: "Yes. Settings → Data export gives you a full archive of your tenant data (invoices, customers, journals, attachments). This is your PDPA right of access — included on every plan.",
  },
  {
    q: "Can I cancel my plan? What happens to my data?",
    a: "You can cancel from Settings → Plan at any time. After cancellation we keep your data read-only for a grace period so you can export it. After that, you can request full account erasure (right to be forgotten) and we delete the tenant database.",
  },
  {
    q: "Do you support multiple companies on one account?",
    a: "If you run several SMEs you have two options: (1) sign up each company separately, or (2) better — use a Practice Free account, which gives you one Practice console with one client (yourself) included. Add more companies as you grow.",
  },
  {
    q: "Is there a free trial?",
    a: "Two free tiers, no time limit: Startup (Free) for SMEs, and Practice Free for accountants. Both are scoped (one user / one client) but otherwise full features. Want to test Growth-tier features specifically? Talk to us — we grant 30-day comps for fair evaluation.",
  },
  {
    q: "Can I self-host BukuCloud?",
    a: "Yes — same Docker image, same code as the SaaS app. The license at boot decides which features are active. Self-hosted is a Talk-to-Sales tier with a license + engineer-led deployment. See /pricing#enterprise or contact sales.",
  },
  {
    q: "I forgot my password. How do I reset it?",
    a: `Go to ${APP_URL}/forgot-password and enter your registered email. We send a reset link valid for 60 minutes. Still stuck? Reach out via WhatsApp or the contact form.`,
  },
];

export default function HelpPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Help Center", href: "/help" },
        ]}
      />
      <FaqJsonLd items={faqItems} />
      <HelpContent
        topics={topics}
        popular={popular}
        quickStarts={quickStarts}
        practiceQuickStarts={practiceQuickStarts}
        faqItems={faqItems}
      />
    </>
  );
}
