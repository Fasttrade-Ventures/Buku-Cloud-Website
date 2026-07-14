export type GuideFaq = { q: string; a: string };

export type GuideSection = {
  heading: string;
  body: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: GuideSection[];
  faq: GuideFaq[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

export const GUIDES: Guide[] = [
  {
    slug: "cloud-accounting-malaysia",
    title: "Cloud accounting Malaysia — what SMEs need in 2026",
    description:
      "What Malaysian SMEs should look for in cloud accounting: SST, MyInvois readiness, accountant collaboration, and clean books without a full finance team.",
    keywords: [
      "cloud accounting Malaysia",
      "online accounting software Malaysia",
      "best accounting software Malaysia",
    ],
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    eyebrow: "Guide",
    h1: "Cloud accounting for Malaysian SMEs, explained.",
    intro:
      "If you invoice customers, pay suppliers, and still reconcile in spreadsheets at month-end, you are already doing accounting work — just without a system that keeps SST, AR, and year-end tidy. This guide covers what “good enough” looks like in Malaysia in 2026.",
    sections: [
      {
        heading: "What cloud accounting must cover in Malaysia",
        body: [
          "Malaysia-specific stack: invoicing with SST where applicable, supplier bills, bankable reports (P&L, balance sheet, AR aging), and a clear path to LHDN MyInvois e-Invoicing.",
          "Multi-user access matters once more than one person touches invoices. Accountant access matters even earlier — your firm should not need a 12-tab Excel handoff.",
          "Data residency and backups: ask where data lives and how you export. BukuCloud stores data in AWS Asia Pacific (Singapore) with daily backups retained for 30 days, and CSV export anytime.",
        ],
      },
      {
        heading: "SME vs accountant workflows",
        body: [
          "SME owners need fast invoicing, bills, and weekly cash clarity — not a desktop licence per workstation.",
          "Firms need a Practice console: cross-client health, deadlines, and one-click entry into client books. BukuCloud Practice is built for that volume work.",
        ],
      },
      {
        heading: "How to evaluate tools without drowning in features",
        body: [
          "Start from jobs: raise invoice → collect payment → log bills → close month → hand accountant a clean export.",
          "Price for your real seat count. BukuCloud Startup is free; Solo is RM49/mo; Growth RM99/mo with accountant collaboration.",
          "Migration cost counts: customers, products, opening balances, and historical invoices should import — not rebuild from zero.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need to know accounting to use cloud accounting software?",
        a: "No. BukuCloud is built for SME owners: you log invoices and bills; the books stay structured for your accountant at year-end.",
      },
      {
        q: "Is BukuCloud only for Malaysia?",
        a: "It is Malaysia-first: SST, local support, and MyInvois preparation are first-class product decisions, not afterthoughts.",
      },
    ],
    ctaPrimary: { label: "Start free", href: "https://app.bukucloud.com/register" },
    ctaSecondary: { label: "See pricing", href: "/pricing" },
  },
  {
    slug: "xero-alternative-malaysia",
    title: "Xero alternative in Malaysia — when BukuCloud fits better",
    description:
      "Comparing Xero vs a Malaysia-first option: SST workflows, MyInvois readiness, local pricing in MYR, and accountant Practice console for Malaysian firms.",
    keywords: [
      "Xero alternative Malaysia",
      "Xero vs BukuCloud",
      "accounting software Malaysia",
    ],
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    eyebrow: "Comparison",
    h1: "Looking for a Xero alternative in Malaysia?",
    intro:
      "Xero is a strong global product. Malaysian SMEs and firms often still need clearer MYR pricing, SST-native workflows, and support that speaks LHDN and MyInvois — without paying for features aimed at other markets.",
    sections: [
      {
        heading: "When a global tool feels heavy",
        body: [
          "Billing currency, tax modules, and support queues can feel overseas-first even when you operate only in Malaysia.",
          "Accountant handoffs still stall if the firm cannot see all clients in one Practice console priced for Malaysian practices.",
        ],
      },
      {
        heading: "What BukuCloud emphasises instead",
        body: [
          "SST invoicing and Malaysian SME language on day one.",
          "Free firm-staff seat for your accountant, or Practice console for firms serving many books.",
          "Transparent MYR plans from Free Startup through Corporate, with a free Solo trial.",
        ],
      },
      {
        heading: "Fair comparison checklist",
        body: [
          "Map: invoice → receipt → bill → SST report → AR aging → accountant export.",
          "Confirm MyInvois roadmap against your LHDN phase dates.",
          "Import customers, products, and opening balances before you cut over.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I migrate from Xero-style CSV exports?",
        a: "Yes. BukuCloud supports CSV import for customers, vendors, products, opening balances and historical transactions.",
      },
      {
        q: "Will my accountant lose access?",
        a: "No. Invite them as a free firm-staff seat or link via Practice console used by 200+ Malaysian firms.",
      },
    ],
    ctaPrimary: { label: "Compare plans", href: "/pricing" },
    ctaSecondary: { label: "Plan my migration", href: "/contact" },
  },
  {
    slug: "sql-account-alternative",
    title: "SQL Account alternative — move to cloud without starting from zero",
    description:
      "Why Malaysian SMEs leave desktop SQL Account for cloud accounting: remote access, SST and MyInvois readiness, and guided migration of customers, products and balances.",
    keywords: [
      "SQL Account alternative",
      "SQL Account to cloud",
      "SQL Account migration Malaysia",
    ],
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    eyebrow: "Comparison",
    h1: "SQL Account alternative: cloud books that travel with you.",
    intro:
      "Desktop accounting works until the second laptop, the third branch, or the accountant who needs live access. A SQL Account alternative should preserve your history — not force you to retype five years of customers.",
    sections: [
      {
        heading: "Limits of desktop-first setups",
        body: [
          "Single workstation installs break remote work and multi-branch ops.",
          "MyInvois and continuous compliance push teams toward always-on cloud submission and archive, not only month-end backups.",
          "Spreadsheet side-car files creep back in when the desktop file is “busy”.",
        ],
      },
      {
        heading: "What migration help should look like",
        body: [
          "CSV import for customers, vendors, products, opening balances and historical transactions.",
          "A one-time migration helper path for SQL Account data files (see Help / Contact).",
          "Accountant already linked before go-live so review does not lag the cutover.",
        ],
      },
      {
        heading: "After cutover",
        body: [
          "Invoices and bills live in one tenant; reports rebuild from transactions.",
          "SST and ageing reports stop depending on a fragile workbook.",
          "Firm staff can enter the book without VPN folklore.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you support SQL Account migration?",
        a: "Yes. CSV import covers the usual masters and balances, and BukuCloud offers a one-time migration helper for SQL Account data files.",
      },
      {
        q: "Can I keep my accountant’s workflow?",
        a: "Invite them for free or connect through Practice console so year-end stays in one place.",
      },
    ],
    ctaPrimary: { label: "Start free", href: "https://app.bukucloud.com/register" },
    ctaSecondary: { label: "Talk migration", href: "/contact" },
  },
  {
    slug: "sst-invoicing-malaysia",
    title: "SST invoicing Malaysia — keep invoices and tax columns tied",
    description:
      "How Malaysian SMEs handle SST on invoices without broken Excel columns: calculate, send, report, and prepare books your accountant can trust.",
    keywords: [
      "SST invoicing Malaysia",
      "SST invoice software",
      "SST 6% invoice",
    ],
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    eyebrow: "Guide",
    h1: "SST invoicing without the #REF! tax column.",
    intro:
      "SST mistakes usually come from shared spreadsheets, not from intent. Cloud invoicing should calculate tax on the document, post it cleanly, and feed sales-tax reports — so month-end is an export, not a reconstruction.",
    sections: [
      {
        heading: "What SST-ready invoicing includes",
        body: [
          "Correct tax on each line or document, with totals that match the PDF customers receive.",
          "Sales tax and ageing reports built from the same ledger as the invoice — no weekend paste.",
          "Clear customer and product masters so rates do not get reinvented every Monday.",
        ],
      },
      {
        heading: "Where Excel usually fails",
        body: [
          "Deleted rows break formula ranges.",
          "Two people edit tax columns at once.",
          "The accountant receives a file that no longer ties to bank deposits.",
        ],
      },
      {
        heading: "How BukuCloud approaches it",
        body: [
          "Create invoices, apply SST where required, email customers, and keep AR visible.",
          "Reports auto-build from transactions — P&L, balance sheet, AR aging, sales tax views on Growth+.",
          "Pair with MyInvois preparation as LHDN phases expand — see the e-Invoice page for pipeline status.",
        ],
      },
    ],
    faq: [
      {
        q: "Does BukuCloud calculate SST on invoices?",
        a: "Yes. Invoicing is built for Malaysian SMEs including SST handling on documents you send to customers.",
      },
      {
        q: "Can my accountant review SST figures?",
        a: "Yes. Invite them as firm staff or via Practice console so they see the same books you use daily.",
      },
    ],
    ctaPrimary: { label: "Try invoicing free", href: "https://app.bukucloud.com/register" },
    ctaSecondary: { label: "MyInvois overview", href: "/e-invoice" },
  },
  {
    slug: "migrate-from-excel",
    title: "Migrate from Excel to cloud accounting — a practical checklist",
    description:
      "Step-by-step migration from multi-tab Excel books to BukuCloud: customers, products, opening balances, invoices, and accountant handoff without a weekend rebuild.",
    keywords: [
      "migrate from Excel accounting",
      "Excel to cloud accounting Malaysia",
      "spreadsheet to BukuCloud",
    ],
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    eyebrow: "Guide",
    h1: "Leave the 17-tab workbook. Keep the history that matters.",
    intro:
      "Spreadsheets are a start. They are not a system of record once invoices, SST, and payments multiply. Migration should be a checklist: masters first, balances next, then live documents — with your accountant already invited.",
    sections: [
      {
        heading: "Week-zero checklist",
        body: [
          "Export customers, suppliers, and products to clean CSV columns.",
          "Agree opening AR/AP and bank balances with your accountant.",
          "Pick a cutover date; stop issuing Excel invoices after that date.",
        ],
      },
      {
        heading: "Import and verify",
        body: [
          "Use BukuCloud CSV import for customers, vendors, products, opening balances and historical transactions.",
          "Spot-check five invoices and five bills against bank movements.",
          "Turn on recurring invoices only after the first clean weekly close.",
        ],
      },
      {
        heading: "Keep Excel out of the loop",
        body: [
          "AR aging and P&L should come from the app, not a shadow workbook.",
          "Share Practice or firm-staff access instead of emailing Friday night exports.",
          "Archive the old spreadsheet read-only for audit nostalgia — not for new invoices.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I import historical Excel transactions?",
        a: "Yes via CSV. Start with masters and opening balances, then historical rows if you need them for continuity.",
      },
      {
        q: "How long does migration take?",
        a: "Solo businesses often go live in days; denser books need a planned cutover. Book a walkthrough if you want a guided path.",
      },
    ],
    ctaPrimary: { label: "Start free", href: "https://app.bukucloud.com/register" },
    ctaSecondary: { label: "Book a walkthrough", href: "/contact" },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}
