import { REGISTER_URL } from "./site";

export type GuideFaq = { q: string; a: string };
export type GuideSection = { heading: string; body: string[] };
export type GuideRelated = { label: string; href: string };
export type GuideTable = { caption?: string; headers: string[]; rows: string[][] };

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
  relatedLinks: GuideRelated[];
  table?: GuideTable;
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
    ctaPrimary: { label: "Start free", href: REGISTER_URL },
    ctaSecondary: { label: "See pricing", href: "/pricing" },
    relatedLinks: [
      { label: "Features overview", href: "/features" },
      { label: "Pricing plans", href: "/pricing" },
      { label: "MyInvois e-Invoice", href: "/e-invoice" },
    ],
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
    relatedLinks: [
      { label: "Features overview", href: "/features" },
      { label: "Pricing plans", href: "/pricing" },
      { label: "Xero vs BukuCloud vs SQL Account", href: "/guides/xero-vs-bukucloud-vs-sql-account" },
    ],
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
    ctaPrimary: { label: "Start free", href: REGISTER_URL },
    ctaSecondary: { label: "Talk migration", href: "/contact" },
    relatedLinks: [
      { label: "Features overview", href: "/features" },
      { label: "Pricing plans", href: "/pricing" },
      { label: "Migrate from Excel guide", href: "/guides/migrate-from-excel" },
    ],
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
    ctaPrimary: { label: "Try invoicing free", href: REGISTER_URL },
    ctaSecondary: { label: "MyInvois overview", href: "/e-invoice" },
    relatedLinks: [
      { label: "Features overview", href: "/features" },
      { label: "MyInvois e-Invoice", href: "/e-invoice" },
      { label: "SST return invoice mistakes", href: "/guides/sst-return-invoice-mistakes" },
    ],
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
    ctaPrimary: { label: "Start free", href: REGISTER_URL },
    ctaSecondary: { label: "Book a walkthrough", href: "/contact" },
    relatedLinks: [
      { label: "Features overview", href: "/features" },
      { label: "Pricing plans", href: "/pricing" },
      { label: "For accountants", href: "/accountants" },
    ],
  },
  {
    slug: "myinvois-phase-2-checklist",
    title: "MyInvois Phase 2 checklist — what Malaysian SMEs need ready",
    description:
      "A practical MyInvois Phase 2 readiness checklist for Malaysian SMEs: who is in scope, document fields, the Issue→Validate→Submit→Archive pipeline, and how to avoid common delays.",
    keywords: [
      "MyInvois Phase 2",
      "MyInvois checklist Malaysia",
      "LHDN e-Invoice Phase 2",
      "e-Invoice readiness Malaysia",
    ],
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    eyebrow: "Guide",
    h1: "MyInvois Phase 2: get your documents ready before the deadline bites.",
    intro:
      "LHDN’s MyInvois rollout moves in phases. Phase 2 brings more businesses into mandatory e-Invoicing — and the delays we see are almost always missing master data, not software capability. Use this checklist to close gaps before your go-live date.",
    sections: [
      {
        heading: "Who is in Phase 2",
        body: [
          "Phase 2 typically covers businesses above a lower revenue threshold than Phase 1 — check the latest LHDN gazette and MyInvois portal announcements for your exact classification.",
          "If you already invoice with SST, you are likely in scope or will be soon. Treat Phase 2 as a firm deadline, not a “we’ll see” item.",
          "Accountants serving multiple clients should map each book against LHDN phase dates — one late client drags the whole firm’s reputation.",
        ],
      },
      {
        heading: "Document checklist: TIN, SST, address",
        body: [
          "Tax Identification Number (TIN) on every customer and supplier master — validate against LHDN records before first submission.",
          "SST registration number where applicable; confirm whether each product line is taxable, exempt, or zero-rated.",
          "Registered business address, contact details, and invoice numbering sequence that does not collide with legacy Excel runs.",
          "Bank details and payment terms are not always mandatory for MyInvois, but gaps here slow internal approval before you even reach LHDN.",
        ],
      },
      {
        heading: "The pipeline: Issue → Validate → Submit → Archive",
        body: [
          "Issue: raise the invoice in your accounting system with correct tax and customer identifiers.",
          "Validate: run pre-submission checks — TIN format, mandatory fields, SST totals, UUID and timestamp rules per LHDN schema.",
          "Submit: push to MyInvois; handle rejections with a clear retry path, not a manual retype.",
          "Archive: store validated UUID, QR data, and submission receipts alongside the PDF your customer received — auditors will ask for both.",
        ],
      },
      {
        heading: "How BukuCloud prepares you",
        body: [
          "Customer and product masters are the same records your SST invoices use — no duplicate “e-Invoice only” spreadsheet.",
          "MyInvois pipeline status is visible on the e-Invoice page; BukuCloud is building toward full Issue→Validate→Submit→Archive inside the product.",
          "Your accountant can review documents via firm-staff access or Practice console before anything hits LHDN.",
          "CSV export remains available if your firm needs a parallel archive during transition.",
        ],
      },
      {
        heading: "Common delays — and how to avoid them",
        body: [
          "Missing or wrong TIN on B2B customers — fix masters two weeks before go-live, not on submission day.",
          "Invoice numbers that restart mid-year after Excel migration — agree a clean sequence with your accountant.",
          "SST figures that do not match the PDF — usually a sign you are still editing tax in a side workbook.",
          "No named owner for rejections — assign one person (or your firm) to clear MyInvois errors within 24 hours.",
        ],
      },
    ],
    faq: [
      {
        q: "Does BukuCloud submit to MyInvois today?",
        a: "BukuCloud is on the MyInvois preparation path with pipeline stages documented on the e-Invoice page. Use this checklist to get masters and SST clean now so submission is a switch, not a rebuild.",
      },
      {
        q: "What if my customers do not have a TIN?",
        a: "B2B e-Invoices generally require valid TINs. Collect them during onboarding; for B2C, follow the latest LHDN guidance for consolidated or simplified documents.",
      },
      {
        q: "Can my accountant manage Phase 2 for all clients?",
        a: "Yes. Practice console gives firms cross-client visibility and one-click entry into each book — far safer than tracking phase dates in a shared spreadsheet.",
      },
    ],
    ctaPrimary: { label: "MyInvois overview", href: "/e-invoice" },
    ctaSecondary: { label: "See pricing", href: "/pricing" },
    relatedLinks: [
      { label: "MyInvois e-Invoice", href: "/e-invoice" },
      { label: "Pricing plans", href: "/pricing" },
      { label: "Talk to us", href: "/contact" },
    ],
  },
  {
    slug: "sst-return-invoice-mistakes",
    title: "SST return and invoice mistakes — what Malaysian SMEs get wrong",
    description:
      "Common SST return and invoice mistakes in Malaysia: wrong rates, credit notes, Excel errors, late amendments, and how cloud invoicing keeps figures tied to what you filed.",
    keywords: [
      "SST return mistakes Malaysia",
      "SST invoice errors",
      "SST filing Malaysia SME",
      "SST credit note",
    ],
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    eyebrow: "Guide",
    h1: "SST return mistakes start on the invoice — not on filing day.",
    intro:
      "Most SST return problems are invoice problems that aged badly. Wrong rates, missing credit-note tax, and Excel formulas that silently broke in March — they all show up when you try to reconcile sales tax against bank deposits. This guide names the usual failures and how to stop repeating them.",
    sections: [
      {
        heading: "Wrong rate on the wrong product",
        body: [
          "Mixed baskets — taxable services plus exempt items on one invoice — need line-level rates, not a single column copied from last month.",
          "Promotional discounts that change the taxable base but leave SST calculated on the pre-discount amount.",
          "New SKUs added in a hurry without a default tax code; someone picks 6% from memory when the item is exempt.",
        ],
      },
      {
        heading: "Missing tax on credit notes",
        body: [
          "A credit note without mirrored SST reduces your revenue but leaves tax overstated in returns — a classic audit conversation.",
          "Partial credits must reduce tax proportionally; flat “RM100 off” notes without tax lines are where spreadsheets lie.",
          "Link every credit note to the original invoice so your accountant can trace the adjustment, not guess it.",
        ],
      },
      {
        heading: "The Excel #REF! problem",
        body: [
          "Delete row 47 and your SST column stops summing — but the invoice PDF you emailed on Tuesday still shows tax.",
          "Two editors, one workbook: version A goes to the customer, version B goes to the return.",
          "Month-end “fix tabs” that rebuild tax from bank deposits instead of documents — fast, but not defensible.",
        ],
      },
      {
        heading: "Late amendments and return drift",
        body: [
          "Invoices amended after the SST period closed without a matching amendment workflow — returns and books diverge.",
          "Debit notes raised in email but never logged in the ledger until year-end.",
          "Filing on the due date with numbers you know are wrong “because we’ll fix next month” — next month rarely comes.",
        ],
      },
      {
        heading: "How cloud invoices reduce mistakes",
        body: [
          "Tax calculates on the document at issue time; reports pull from the same ledger — no shadow SST tab.",
          "Credit and debit notes inherit product tax codes from masters, not from someone’s Friday afternoon memory.",
          "AR aging, sales tax views, and P&L rebuild from transactions so your accountant exports one truth.",
          "Pair clean SST with MyInvois readiness — see the SST invoicing guide and e-Invoice page for the full stack.",
        ],
      },
    ],
    faq: [
      {
        q: "Can BukuCloud fix a wrong SST invoice after sending?",
        a: "Issue a credit note or amended invoice in the system so tax and AR stay tied. Your accountant can review before you refile.",
      },
      {
        q: "Do I still need Excel for SST returns?",
        a: "No — not if invoices and credit notes live in BukuCloud. Sales tax reports on Growth+ export from the same transactions you invoice with.",
      },
      {
        q: "What should I check before each SST filing?",
        a: "Spot-check five issued invoices, five credit notes, and compare sales tax report totals to bank deposits for the period. Fifteen minutes beats a letter from customs.",
      },
    ],
    ctaPrimary: { label: "Try invoicing free", href: REGISTER_URL },
    ctaSecondary: { label: "SST invoicing guide", href: "/guides/sst-invoicing-malaysia" },
    relatedLinks: [
      { label: "Features overview", href: "/features" },
      { label: "SST invoicing guide", href: "/guides/sst-invoicing-malaysia" },
      { label: "Pricing plans", href: "/pricing" },
    ],
  },
  {
    slug: "xero-vs-bukucloud-vs-sql-account",
    title: "Xero vs BukuCloud vs SQL Account — honest comparison for Malaysia",
    description:
      "Side-by-side comparison of BukuCloud, Xero, and SQL Account for Malaysian SMEs and accounting firms: MYR pricing, SST, MyInvois, Practice console, migration, and support.",
    keywords: [
      "Xero vs BukuCloud",
      "SQL Account vs cloud",
      "accounting software comparison Malaysia",
      "BukuCloud vs Xero vs SQL Account",
    ],
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    eyebrow: "Comparison",
    h1: "Xero vs BukuCloud vs SQL Account — what actually matters in Malaysia.",
    intro:
      "Global tools, desktop legends, and Malaysia-first cloud each solve part of the problem. This comparison is blunt about trade-offs: SST, MyInvois, how your accountant works, and what migration really costs — not feature bingo.",
    sections: [
      {
        heading: "How to read this comparison",
        body: [
          "We built BukuCloud — so we are not neutral. We are specific: what Malaysian SMEs and firms ask us in sales calls, migration sessions, and Practice onboarding.",
          "“Yes with workaround” means you can get there, but you will pay in time, add-ons, or firm hours.",
          "Your cutover checklist should still be: masters → opening balances → live invoices → accountant sign-off.",
        ],
      },
      {
        heading: "When each option fits",
        body: [
          "SQL Account: mature desktop workflows, single-site teams comfortable with local files and manual backups.",
          "Xero: strong global ecosystem, multi-country ops, or firms already standardised on Xero practice tools.",
          "BukuCloud: Malaysia-only or Malaysia-primary businesses that want MYR pricing, SST-native invoicing, MyInvois preparation, and a Practice console priced for local firms.",
        ],
      },
      {
        heading: "Migration reality",
        body: [
          "SQL Account → cloud: CSV export of customers, products, and balances; BukuCloud offers a one-time migration helper for SQL data files.",
          "Xero → BukuCloud: CSV import for the same masters plus historical transactions; plan a cutover weekend with your accountant.",
          "Excel → any system: the hard part is agreeing opening balances, not the button click — see the migrate-from-excel guide.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Xero bad for Malaysia?",
        a: "No — it is capable. Many teams simply want MYR-native pricing, SST-first workflows, and local MyInvois support without configuring a foreign tax module.",
      },
      {
        q: "Should I leave SQL Account?",
        a: "Not necessarily today — but if you need remote access, multi-branch, or MyInvois submission, desktop limits compound every quarter.",
      },
      {
        q: "Can my firm use BukuCloud Practice alongside Xero clients?",
        a: "Many firms run mixed stacks during transition. Practice console is for the books you move to BukuCloud — one place for Malaysian-client volume work.",
      },
    ],
    ctaPrimary: { label: "Compare plans", href: "/pricing" },
    ctaSecondary: { label: "Xero alternative guide", href: "/guides/xero-alternative-malaysia" },
    relatedLinks: [
      { label: "Pricing plans", href: "/pricing" },
      { label: "For accountants", href: "/accountants" },
      { label: "Xero alternative guide", href: "/guides/xero-alternative-malaysia" },
    ],
    table: {
      caption: "Malaysia-focused capability comparison",
      headers: ["Capability", "BukuCloud", "Xero", "SQL Account"],
      rows: [
        [
          "Malaysia-first pricing (MYR)",
          "Yes — Startup free, Solo RM49/mo, Growth RM99/mo",
          "Often billed in foreign currency; MYR plans vary by partner",
          "Desktop licence + annual maintenance in MYR",
        ],
        [
          "SST native on invoices",
          "Yes — built for Malaysian SME invoicing",
          "Available via configuration; not Malaysia-default",
          "Yes — long-standing local SST support",
        ],
        [
          "MyInvois e-Invoice path",
          "Active preparation; pipeline on e-Invoice page",
          "Partner-dependent; not Malaysia-first roadmap",
          "Vendor-dependent; desktop-to-cloud gap for submission",
        ],
        [
          "Practice console for firms",
          "Yes — cross-client AR, one-click client entry",
          "Xero Practice — strong globally, overseas pricing",
          "No — firm workflows rely on exports per client file",
        ],
        [
          "Desktop vs cloud",
          "Cloud — browser, multi-user, no per-PC install",
          "Cloud",
          "Desktop-first — remote access needs workarounds",
        ],
        [
          "Migration via CSV",
          "Yes — customers, vendors, products, balances, history",
          "Export from Xero; import to BukuCloud via CSV",
          "Export from SQL; BukuCloud migration helper available",
        ],
        [
          "Local EN / BM support",
          "Yes — product and support in English and Bahasa Malaysia",
          "Primarily English; localisation varies",
          "Bahasa Malaysia UI; vendor support local",
        ],
        [
          "Free tier",
          "Yes — Startup plan free",
          "Limited trials; no permanent free SME tier",
          "Trial or demo; no ongoing free cloud tier",
        ],
      ],
    },
  },
  {
    slug: "accountant-practice-console",
    title: "Accountant Practice console — one desk for Malaysian client books",
    description:
      "How BukuCloud Practice console helps Malaysian accounting firms: cross-client AR, one-click client entry, volume pricing, firm-staff seats, and why it beats spreadsheet packs.",
    keywords: [
      "accountant practice software Malaysia",
      "accounting firm console",
      "BukuCloud Practice",
      "multi-client accounting Malaysia",
    ],
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    eyebrow: "Guide",
    h1: "Practice console: stop living in Friday night spreadsheet packs.",
    intro:
      "Malaysian firms do not fail on technical skill — they fail on throughput. Twenty clients, twenty Excel exports, twenty WhatsApp threads asking “which tab is SST?” Practice console puts client health, AR, and entry in one place priced for local firm economics.",
    sections: [
      {
        heading: "Cross-client AR at a glance",
        body: [
          "See overdue invoices across every BukuCloud client without opening separate files or VPN sessions.",
          "Sort by oldest debt, plan collection calls, and spot the one book that will miss month-end before it happens.",
          "AR in the console reads the same ledger the client uses — no “firm copy” that drifts by Tuesday.",
        ],
      },
      {
        heading: "One-click enter client",
        body: [
          "Jump from firm dashboard into any client tenant without sharing passwords over WhatsApp.",
          "Review invoices, post bills, or clear MyInvois rejections with a proper audit trail.",
          "Clients keep ownership; firm staff get scoped access — free seat on SME plans or Practice volume pricing.",
        ],
      },
      {
        heading: "Volume pricing for firms",
        body: [
          "Practice plans scale by active client count — not a full desktop licence per staff member per client.",
          "200+ Malaysian firms already use BukuCloud; pricing stays in MYR with no surprise currency conversion.",
          "Onboard clients on Startup free or Solo trials before they commit — lowers sales friction for the firm.",
        ],
      },
      {
        heading: "Firm-staff seats",
        body: [
          "SME Growth plans include a free firm-staff seat — enough for many small engagements.",
          "Larger teams map to Practice console with multiple staff and client partitions.",
          "Train once on BukuCloud; reuse the same workflow across SST, reports, and MyInvois prep.",
        ],
      },
      {
        heading: "Vs the spreadsheet pack",
        body: [
          "Spreadsheet packs are snapshots; console data is live — changes reflect before the client emails “why doesn’t this match?”",
          "No version A / version B / “final FINAL_v3” in Google Drive.",
          "Month-end becomes review and export, not rebuild from emailed PDFs and bank CSVs.",
          "Pair with the Xero vs BukuCloud vs SQL Account comparison when clients ask why move at all.",
        ],
      },
    ],
    faq: [
      {
        q: "How is Practice different from a free firm-staff seat?",
        a: "Firm-staff suits single-book clients on Growth+. Practice is for firms managing many clients — cross-client AR, bulk visibility, and volume pricing.",
      },
      {
        q: "Can clients block firm access?",
        a: "Clients invite the firm and can revoke access. Firm entry is always permissioned — not a back door.",
      },
      {
        q: "Do you train firm staff?",
        a: "Yes — book a walkthrough via Contact. Most teams are productive after one session because workflows mirror SST invoicing clients already know.",
      },
    ],
    ctaPrimary: { label: "For accountants", href: "/accountants" },
    ctaSecondary: { label: "See pricing", href: "/pricing" },
    relatedLinks: [
      { label: "For accountants", href: "/accountants" },
      { label: "Pricing plans", href: "/pricing" },
      { label: "Talk to us", href: "/contact" },
    ],
  },
  {
    slug: "customer-stories",
    title: "Customer stories — Malaysian SMEs on BukuCloud",
    description:
      "Real outcomes from Fasttrade Ventures, Hunt & Gather, Aexlora, and Hirix AI: less time on invoicing, faster month-end, and scaling headcount without scaling finance chaos.",
    keywords: [
      "BukuCloud customer stories",
      "accounting software case study Malaysia",
      "SME cloud accounting results",
    ],
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    eyebrow: "Stories",
    h1: "Four Malaysian teams. Real numbers — not marketing fiction.",
    intro:
      "These are companies that use BukuCloud today — including the team that built it. No star ratings, no invented logos. Just what changed when invoices, SST, and month-end moved out of spreadsheets.",
    sections: [
      {
        heading: "Fasttrade Ventures — −87% time on invoicing",
        body: [
          "Asyraf Pauzi, CEO of Fasttrade Ventures (the company behind BukuCloud), ran the same spreadsheet pain as every other SME founder before productising the fix.",
          "“Before BukuCloud my Excel had 17 tabs. Three of them only Aishah understood. Now my whole team logs invoices in real time — books actually feel like an asset.”",
          "Invoicing time dropped 87% once the team issued documents in one tenant instead of reconciling parallel workbook versions.",
          "Today Fasttrade dogfoods every release — SST, AR, and MyInvois prep ship only after they survive this book.",
        ],
      },
      {
        heading: "Hunt & Gather — 4× headcount, same finance team",
        body: [
          "Zulhafiz Awaldin leads Hunt & Gather Sdn Bhd through rapid growth — from 8 to 32 staff in 18 months without hiring a proportionally larger finance team.",
          "“We grew from 8 to 32 staff in 18 months. BukuCloud scaled with us — payroll, SST, reports, no migration drama. The accountant just keeps saying ‘still tidy’.”",
          "Payroll-linked bills, SST returns, and AR stayed in one system as headcount quadrupled; the firm did not add a second full-time bookkeeper.",
          "The win is throughput: more transactions, same finance team, no weekend rebuild tabs.",
        ],
      },
      {
        heading: "Aexlora — −50% monthly close time",
        body: [
          "Amir Hamidi, CEO of Aexlora Sdn Bhd, used to dread SST week — tax lived in a fragile column next to revenue formulas.",
          "“SST used to be the worst part of my month. Now it's the report I export on Friday morning before lunch. The whole month-end takes a coffee.”",
          "Monthly close time fell 50% when sales tax reports pulled from issued invoices instead of a shadow spreadsheet.",
          "Friday morning exports replaced three-day reconciliation sprints — the accountant gets the same figures the customer saw on the PDF.",
        ],
      },
      {
        heading: "Hirix AI — 4 minutes to first invoice",
        body: [
          "Aizuddin Badry, CEO of Hirix AI, evaluates software harshly — his team ships technical products and has little patience for opaque accounting UX.",
          "“I'm an engineer, I judge software harshly. BukuCloud is the first accounting tool that didn't make me sigh on day one. We had clean books in week one.”",
          "First invoice issued in 4 minutes from signup — masters imported, SST applied, PDF sent without a training course.",
          "Week-one books meant investors and auditors saw structured AR and P&L, not a “we’ll clean this later” workbook.",
        ],
      },
      {
        heading: "What these stories have in common",
        body: [
          "None started with perfect data — they started with a cutover date and stopped issuing Excel invoices.",
          "Every team gave their accountant live access early; year-end was review, not archaeology.",
          "SST and AR stayed tied to documents, which is the same foundation MyInvois Phase 2 demands.",
        ],
      },
    ],
    faq: [
      {
        q: "Are these verified third-party reviews?",
        a: "These are real companies using BukuCloud, with quotes from their CEOs. We publish outcomes they report internally — not aggregated star ratings from a review site.",
      },
      {
        q: "Can we share our story?",
        a: "If you are a BukuCloud customer with a measurable outcome, contact us — we prefer specifics (time saved, headcount scaled) over generic praise.",
      },
    ],
    ctaPrimary: { label: "Start free", href: REGISTER_URL },
    ctaSecondary: { label: "See features", href: "/features" },
    relatedLinks: [
      { label: "Pricing plans", href: "/pricing" },
      { label: "Features overview", href: "/features" },
      { label: "Talk to us", href: "/contact" },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}
