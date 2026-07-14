import { REGISTER_URL, REGISTER_PRACTICE_URL } from "./site";

export type Audience = "sme" | "firm" | "both";

export type ArticleSection = {
  heading: string;
  body: string[];
  steps?: string[];
  callout?: { tone: "info" | "warn" | "tip"; title?: string; body: string };
};

export type Article = {
  slug: string;
  topicSlug: string;
  title: string;
  summary: string;
  audience: Audience;
  readTime: string;
  popular?: boolean;
  intro: string;
  prereqs?: string[];
  sections: ArticleSection[];
  next?: { label: string; href: string };
};

export type Topic = {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  audience: Audience;
};

export const TOPICS: Topic[] = [
  {
    slug: "getting-started",
    icon: "🏁",
    title: "Getting started",
    summary:
      "Sign up, set up your company profile, seed your chart of accounts and invite your team.",
    audience: "both",
  },
  {
    slug: "invoicing",
    icon: "📩",
    title: "Invoicing",
    summary:
      "Drafts, posting, sending by email, recurring billing and credit notes.",
    audience: "sme",
  },
  {
    slug: "customers",
    icon: "👥",
    title: "Customers",
    summary:
      "Customer records, statements, customer credits and aged receivables.",
    audience: "sme",
  },
  {
    slug: "bills",
    icon: "🧾",
    title: "Suppliers & bills",
    summary: "Vendors, bills, accounts payable and scheduled payments.",
    audience: "sme",
  },
  {
    slug: "sst-myinvois",
    icon: "🛡️",
    title: "SST & MyInvois",
    summary:
      "Apply SST 6% on invoice lines, run the Sales Tax report, and prepare for LHDN MyInvois.",
    audience: "both",
  },
  {
    slug: "reports",
    icon: "📊",
    title: "Reports",
    summary:
      "P&L, Balance Sheet, Cash Flow, Trial Balance, Sales report and more.",
    audience: "both",
  },
  {
    slug: "practice",
    icon: "🏢",
    title: "Practice console",
    summary:
      "For accountants: add clients, switch in with one click, run cross-client reports, bulk actions.",
    audience: "firm",
  },
  {
    slug: "team-security",
    icon: "🔐",
    title: "Team & security",
    summary:
      "Invite teammates, manage roles, turn on 2FA, and review the audit log.",
    audience: "both",
  },
  {
    slug: "billing",
    icon: "💳",
    title: "Billing & plans",
    summary:
      "Toyyibpay checkout, upgrade and downgrade between plans, cancel and refunds.",
    audience: "both",
  },
];

const GETTING_STARTED: Article[] = [
  {
    slug: "register-your-company",
    topicSlug: "getting-started",
    title: "Register your company in 2 minutes",
    summary:
      "Create your BukuCloud tenant, set your company name and currency (MYR by default), and land on a freshly seeded dashboard.",
    audience: "sme",
    readTime: "2 min read",
    intro:
      "Sign-up creates an isolated tenant database for your company so your data is never mixed with other businesses on the platform.",
    prereqs: ["A working email address", "Your company name (SSM name is fine)"],
    sections: [
      {
        heading: "Create your account",
        body: [
          `Go to ${REGISTER_URL} and choose Start free for SMEs.`,
          "Enter your name, email and a password. Use a real business email — invoice emails will use this as a default sender if you do not set a separate brand email later.",
        ],
      },
      {
        heading: "Set up your company profile",
        body: [
          "On first login you land on Settings → Company. Enter your business name (the legal name on SSM), short address, and phone.",
          "Currency is MYR by default. Tax mode is set to Malaysia SST. You can edit either later if you operate in another jurisdiction.",
        ],
      },
      {
        heading: "What gets seeded automatically",
        body: [
          "A default Malaysia chart of accounts is provisioned for you so you can start posting on day one.",
          "A starter Sales item, Service item and Bank account are created so the New Invoice form works without further setup.",
        ],
      },
    ],
    next: {
      label: "Create your first invoice",
      href: "/help/invoicing/create-and-post-first-invoice",
    },
  },
  {
    slug: "set-sst-and-tin",
    topicSlug: "getting-started",
    title: "Set your SST registration & TIN",
    summary:
      "Enter your SST number and Malaysian TIN once — every invoice and report uses them automatically.",
    audience: "sme",
    readTime: "2 min read",
    intro:
      "Your SST registration number and Tax Identification Number (TIN) live on the company profile. They are stamped onto invoices, the Sales Tax report and (when LHDN MyInvois goes live) every e-invoice submission.",
    sections: [
      {
        heading: "Where to enter them",
        steps: [
          "Open Settings → Company.",
          "Scroll to the Tax & compliance block.",
          "Enter your SST registration number (format: WXX-XXXX-XXXXXXXX).",
          "Enter your TIN — required if you are preparing for MyInvois.",
          "Save. Existing draft invoices will pick up the new fields next time you open them.",
        ],
        body: [],
      },
      {
        heading: "Where these appear",
        body: [
          "On the invoice PDF header, just under your business address.",
          "On the Sales Tax (SST) report as the registrant identity.",
          "On the MyInvois e-Invoice payload (TIN), once the integration is enabled on Corporate or Enterprise plans.",
        ],
      },
      {
        heading: "Not SST registered yet?",
        body: [
          "Leave the SST field blank — invoices will simply not show an SST line and the Sales Tax report stays at 0.",
          "Once you cross the registration threshold, fill the field; new invoices will start showing SST and the report will pick it up from that date forward.",
        ],
      },
    ],
  },
  {
    slug: "seed-chart-of-accounts",
    topicSlug: "getting-started",
    title: "Seed the default chart of accounts",
    summary:
      "Use the Malaysia-flavoured default Chart of Accounts (COA) or import your own.",
    audience: "both",
    readTime: "3 min read",
    intro:
      "Every BukuCloud tenant starts with a Malaysia-flavoured COA so journals, reports and tax codes work on day one. You can extend it or import your own.",
    sections: [
      {
        heading: "What is in the default COA",
        body: [
          "Assets — Cash, Bank, Accounts Receivable, Inventory, Fixed Assets and depreciation.",
          "Liabilities — Accounts Payable, SST Output Tax, SST Input Tax, Accrued expenses.",
          "Equity, Revenue and Expense roots ready for sub-accounts.",
        ],
      },
      {
        heading: "Add or rename accounts",
        steps: [
          "Open Settings → Chart of Accounts.",
          "Click Add account, choose its type (Asset, Liability, Equity, Revenue, Expense).",
          "Set a code (e.g. 5100 for Marketing) and a display name.",
          "Optional: set a parent account so it nests in P&L and Balance Sheet.",
          "Save. New journals can immediately post to it.",
        ],
        body: [],
      },
      {
        heading: "Import a COA from Excel",
        body: [
          "Click Import in the Chart of Accounts toolbar to download the template.",
          "Fill the template (Code, Name, Type, Parent code, Opening balance) and re-upload.",
          "Validation runs row-by-row — any errors are shown inline so you can fix and re-upload.",
        ],
        callout: {
          tone: "tip",
          title: "Tip",
          body: "Keep account codes 4 digits. It plays nicely with the seeded Malaysia COA and most accountants in Malaysia expect that style.",
        },
      },
    ],
  },
  {
    slug: "switch-language",
    topicSlug: "getting-started",
    title: "Switch language to Bahasa Malaysia",
    summary:
      "Change the app interface and invoice templates between English and Bahasa Malaysia.",
    audience: "both",
    readTime: "1 min read",
    intro:
      "BukuCloud ships fully bilingual. The interface, invoice templates and customer-facing emails can be flipped between English and Bahasa Malaysia per user.",
    sections: [
      {
        heading: "Change the interface language",
        steps: [
          "Click your avatar in the top-right of the app.",
          "Choose Profile → Preferences.",
          "Set Language to Bahasa Malaysia.",
          "The interface reloads — labels, menus, reports and date formatting flip.",
        ],
        body: [],
      },
      {
        heading: "Invoice templates in BM",
        body: [
          "Open Settings → Templates → Invoice.",
          "Pick the BM template variant. Your own custom template can have both language fields side-by-side if you sell to mixed audiences.",
          "The customer email body picks up the same language as the invoice template.",
        ],
      },
    ],
  },
  {
    slug: "import-opening-balances",
    topicSlug: "getting-started",
    title: "Import opening balances from Excel",
    summary:
      "Bring across your year-to-date balances using the opening-balance import wizard.",
    audience: "both",
    readTime: "4 min read",
    intro:
      "Opening balances let you start using BukuCloud mid-year without losing history. The Import wizard walks you through it.",
    sections: [
      {
        heading: "Pick a cut-over date",
        body: [
          "Choose a clean cut-over (most SMEs pick the start of a month or financial year).",
          "Pull a Trial Balance from your old system as of one day before the cut-over.",
          "Pull an Aged Receivables and Aged Payables list as of the same date.",
        ],
      },
      {
        heading: "Run the import",
        steps: [
          "Open Settings → Data → Opening balances.",
          "Upload the Trial Balance into Step 1 (account code + balance).",
          "Upload Aged Receivables in Step 2 (customer + invoice + amount + due date).",
          "Upload Aged Payables in Step 3 (supplier + bill + amount + due date).",
          "Review the journal preview. Click Post.",
        ],
        body: [],
      },
      {
        heading: "What it creates",
        body: [
          "A single dated opening-balance journal so reports run cleanly from day one.",
          "Per-customer and per-supplier ledgers carrying their open balances.",
          "An import audit log entry with the original file attached.",
        ],
        callout: {
          tone: "warn",
          title: "Heads up",
          body: "If the trial balance does not balance to zero, the wizard will block posting until you fix the source. Borrow a tea, take your time.",
        },
      },
    ],
  },
  {
    slug: "invite-your-team",
    topicSlug: "getting-started",
    title: "Invite teammates and assign a role",
    summary:
      "Add owners, admins, accountants and bookkeepers — each with the right permissions.",
    audience: "both",
    readTime: "2 min read",
    intro:
      "BukuCloud uses role-based access control so you can invite anyone safely without giving them more than they need.",
    sections: [
      {
        heading: "Invite a teammate",
        steps: [
          "Open Settings → Team → Invite.",
          "Type their email and pick a role.",
          "They get a single-use invite link valid for 72 hours.",
          "On accept, they set a password and 2FA (if you have enforced 2FA for the tenant).",
        ],
        body: [],
      },
      {
        heading: "Roles at a glance",
        body: [
          "Owner — full control, billing access, can delete the tenant.",
          "Admin — manage users, roles, settings; cannot delete the tenant or change billing.",
          "Accountant — read + post journals, run all reports, no user management.",
          "Bookkeeper — invoices, bills, customers, suppliers; no journals, no reports.",
          "Viewer — read-only across the app, ideal for advisors who should not edit.",
        ],
      },
    ],
  },
];

const INVOICING: Article[] = [
  {
    slug: "create-and-post-first-invoice",
    topicSlug: "invoicing",
    title: "Create and post your first invoice",
    summary:
      "Pick a customer, add lines (with SST if registered), preview the PDF and post the journal.",
    audience: "sme",
    readTime: "3 min read",
    popular: true,
    intro:
      "Invoices in BukuCloud move through three states: Draft, Posted and Paid. Posting writes the journal; emailing sends the PDF.",
    prereqs: [
      "At least one customer (you can create one inline)",
      "Optional: your SST registration set, if you charge SST",
    ],
    sections: [
      {
        heading: "Create the invoice",
        steps: [
          "Open Invoices → New.",
          "Pick a customer or click + to create one inline (name + email is enough).",
          "Set the issue date and due date. Default terms come from the customer record.",
          "Add lines: pick a sales item, set quantity and price.",
          "If you charge SST, the SST 6% line is calculated per row automatically.",
          "Add a note in the Customer notes field — it appears on the PDF.",
        ],
        body: [],
      },
      {
        heading: "Preview and post",
        body: [
          "Click Preview to see the PDF as your customer will see it. Tweak the layout in Settings → Templates if needed.",
          "Click Post. The invoice number is assigned, the journal is written, and AR ledgers update instantly.",
        ],
        callout: {
          tone: "info",
          body: "Posted invoices cannot be edited line-by-line. Need a change? Issue a credit note and re-post a new invoice — that keeps the audit trail clean.",
        },
      },
      {
        heading: "Send by email",
        steps: [
          "From the posted invoice, click Email.",
          "BukuCloud pre-fills the customer email and a templated message in the customer's preferred language.",
          "Attach extras if you need to, then Send.",
          "Delivery status (sent, opened) shows back on the invoice timeline.",
        ],
        body: [],
      },
    ],
    next: {
      label: "Set up recurring invoices",
      href: "/help/invoicing/recurring-invoices",
    },
  },
  {
    slug: "email-invoice-pdf",
    topicSlug: "invoicing",
    title: "Email an invoice as a PDF",
    summary:
      "Send the invoice straight from BukuCloud with your branding — no manual PDF download.",
    audience: "sme",
    readTime: "2 min read",
    intro:
      "BukuCloud renders the invoice PDF on the fly using your active template and emails it from your sender address.",
    sections: [
      {
        heading: "Send from the invoice page",
        steps: [
          "Open the posted invoice.",
          "Click Email.",
          "Edit the to/cc fields and the body if needed.",
          "Send. The email is logged on the invoice timeline.",
        ],
        body: [],
      },
      {
        heading: "Set your sender brand",
        body: [
          "Settings → Email → Sender lets you set the From name and reply-to. By default, BukuCloud sends from a verified shared sender so deliverability stays high; you can verify your own domain on Corporate plans for full white-labelling.",
        ],
      },
      {
        heading: "Re-send and bounce handling",
        body: [
          "If the email bounces, the invoice timeline shows the bounce reason. You can edit the address and re-send in one click.",
        ],
      },
    ],
  },
  {
    slug: "recurring-invoices",
    topicSlug: "invoicing",
    title: "Set up recurring invoices",
    summary:
      "Bill retainers, subscriptions or rentals on a schedule — pause, resume or edit anytime.",
    audience: "sme",
    readTime: "3 min read",
    popular: true,
    intro:
      "A recurring invoice is a template that auto-issues a real invoice on the schedule you set.",
    sections: [
      {
        heading: "Create a recurring schedule",
        steps: [
          "Open Invoices → Recurring → New.",
          "Pick the customer and add the lines (just like a normal invoice).",
          "Choose the cadence: weekly, monthly, quarterly, yearly, or custom days.",
          "Pick a start date and (optionally) an end date or end-after-N-issues.",
          "Choose Auto-send to email the invoice when it issues, or leave on Hold for manual review.",
        ],
        body: [],
      },
      {
        heading: "Pause, resume and edit",
        body: [
          "From the Recurring list, hit Pause to skip the next issue without ending the schedule.",
          "Edit lines or pricing — the change applies to the next issue, not the past.",
          "End-of-life: hit Stop to end the schedule. Issued invoices remain unchanged.",
        ],
      },
      {
        heading: "What happens on issue day",
        body: [
          "A real invoice is created and posted, with the next number in the sequence.",
          "If Auto-send is on, the email is sent in the customer's preferred language.",
          "The recurring schedule moves on to the next slot automatically.",
        ],
      },
    ],
  },
  {
    slug: "credit-note-against-invoice",
    topicSlug: "invoicing",
    title: "Issue a credit note against an invoice",
    summary:
      "Cancel or partially refund a posted invoice with a credit note that the SST report respects.",
    audience: "sme",
    readTime: "2 min read",
    intro:
      "Credit notes are first-class in BukuCloud — they reverse the right portion of revenue and SST, and show up correctly on customer statements.",
    sections: [
      {
        heading: "Create a credit note",
        steps: [
          "Open the posted invoice.",
          "Click Credit note.",
          "Pick the lines to credit (full or partial).",
          "Add a reason in the notes field — appears on the PDF.",
          "Post. A negative entry is written; the customer balance updates.",
        ],
        body: [],
      },
      {
        heading: "Apply the credit",
        body: [
          "Apply the credit to another open invoice from the customer's ledger, or refund cash and let BukuCloud post the bank entry.",
        ],
      },
      {
        heading: "How reports treat it",
        body: [
          "Sales tax (SST) report — the SST that you previously remitted is reversed in the period the credit note was posted.",
          "Aged Receivables — the customer balance drops by the credit note amount.",
          "P&L — revenue line drops by the credit note net.",
        ],
      },
    ],
  },
  {
    slug: "customer-statements-aging",
    topicSlug: "invoicing",
    title: "Customer statements with aging buckets",
    summary:
      "Send a one-page statement showing all open invoices and their 0/30/60/90+ day buckets.",
    audience: "sme",
    readTime: "2 min read",
    intro:
      "Customer statements are the polite-but-firm tool for chasing payment. BukuCloud generates them on demand or on a schedule.",
    sections: [
      {
        heading: "Send one statement",
        steps: [
          "Open Customers → pick a customer.",
          "Click Statement.",
          "Pick the as-of date (defaults to today).",
          "Preview the PDF, then Email or Download.",
        ],
        body: [],
      },
      {
        heading: "Schedule statements",
        body: [
          "Customers → Statements → Schedule lets you mail-merge statements to all customers with overdue balances every month-end.",
          "You can exclude customers below a threshold (e.g. < RM 50 outstanding) or with no overdue items.",
        ],
      },
      {
        heading: "Aging buckets",
        body: [
          "Statements show Current, 1-30, 31-60, 61-90 and 90+ buckets.",
          "Buckets are computed from each invoice's due date — not the issue date.",
        ],
      },
    ],
  },
];

const CUSTOMERS: Article[] = [
  {
    slug: "add-customer-tin-address",
    topicSlug: "customers",
    title: "Add a customer with TIN and address",
    summary:
      "Capture the legal name, TIN, billing address and default terms — once, then reuse on every invoice.",
    audience: "sme",
    readTime: "2 min read",
    intro:
      "A solid customer record saves you typing and keeps your invoices consistent. The TIN field is what MyInvois will use later.",
    sections: [
      {
        heading: "Create the record",
        steps: [
          "Open Customers → New.",
          "Enter the legal company name (the one on SSM, not the brand name).",
          "Enter the TIN — leave blank if they do not have one yet.",
          "Set the default payment term (e.g. Net 30).",
          "Add the billing address; shipping address is optional and can differ.",
          "Save.",
        ],
        body: [],
      },
      {
        heading: "Add a contact person",
        body: [
          "Click Add contact to attach a finance contact (name + email + phone).",
          "Future emailed invoices default to that contact's address.",
        ],
      },
    ],
  },
  {
    slug: "send-customer-statement",
    topicSlug: "customers",
    title: "Send a customer statement",
    summary:
      "Generate a tidy one-page summary of every open invoice for a customer.",
    audience: "sme",
    readTime: "1 min read",
    intro: "Customer statements are the polite chase tool — and the data is already there.",
    sections: [
      {
        heading: "From the customer page",
        steps: [
          "Open Customers → pick the customer.",
          "Click Statement.",
          "Pick the as-of date.",
          "Hit Email or Download.",
        ],
        body: [],
      },
      {
        heading: "Tip — bulk statements",
        body: [
          "Customers → Statements lets you email statements to all customers with overdue balances at once. Great for the last working day of the month.",
        ],
      },
    ],
  },
  {
    slug: "track-customer-credits",
    topicSlug: "customers",
    title: "Track customer credits",
    summary:
      "Manage prepayments and credit notes that have not been applied yet.",
    audience: "sme",
    readTime: "2 min read",
    intro:
      "Customer credits are amounts you owe back: a prepayment, an over-payment, or an unapplied credit note.",
    sections: [
      {
        heading: "Where credits come from",
        body: [
          "An over-payment on an invoice (customer paid more than the balance).",
          "A standalone prepayment recorded against a customer.",
          "A posted credit note that has not been applied to another invoice.",
        ],
      },
      {
        heading: "Apply a credit to an invoice",
        steps: [
          "Open the customer's ledger.",
          "Find the credit row, click Apply.",
          "Pick one or more open invoices to consume the credit against.",
          "Save — the journal posts and the customer balance refreshes.",
        ],
        body: [],
      },
      {
        heading: "Refund a credit",
        body: [
          "If the customer would rather get the money back, click Refund. BukuCloud books the bank payment and clears the credit.",
        ],
      },
    ],
  },
  {
    slug: "aged-receivables-report",
    topicSlug: "customers",
    title: "Read the Aged Receivables report",
    summary:
      "See who owes you money, by age bucket, with one-click drill-down to the invoices.",
    audience: "sme",
    readTime: "2 min read",
    intro:
      "Aged Receivables is the most-used cashflow report in any SME. Use it to prioritise calls, statements and credit-control decisions.",
    sections: [
      {
        heading: "Run the report",
        steps: [
          "Open Reports → Aged Receivables.",
          "Pick the as-of date (defaults to today).",
          "Pick the bucket size (default 30 days).",
        ],
        body: [],
      },
      {
        heading: "Read the buckets",
        body: [
          "Current — invoices not yet due.",
          "1-30 days — overdue, polite reminder territory.",
          "31-60 days — call them.",
          "61-90 / 90+ — escalate; consider statement of account or stop credit.",
        ],
      },
      {
        heading: "Drill in",
        body: [
          "Click any customer row to see the underlying invoices.",
          "Send a statement, email a reminder, or post a payment, all from the drill-down.",
        ],
      },
    ],
  },
];

const BILLS: Article[] = [
  {
    slug: "add-supplier",
    topicSlug: "bills",
    title: "Add a supplier",
    summary:
      "Set up vendors with their TIN, default expense account, and payment term.",
    audience: "sme",
    readTime: "2 min read",
    intro:
      "A supplier record is what every bill posts against. Set the default expense account once and bills almost code themselves.",
    sections: [
      {
        heading: "Create a supplier",
        steps: [
          "Open Suppliers → New.",
          "Enter the legal name and TIN (if available).",
          "Pick the default expense account (e.g. Marketing, Rent, Utilities).",
          "Set the payment term (defaults to Net 30).",
          "Save.",
        ],
        body: [],
      },
      {
        heading: "Why a default expense account matters",
        body: [
          "When you capture a new bill, the lines auto-suggest the supplier's default expense account, so you barely type. You can override per-line if needed.",
        ],
      },
    ],
  },
  {
    slug: "capture-bill-manual-or-ocr",
    topicSlug: "bills",
    title: "Capture a bill (manual or OCR)",
    summary:
      "Type the bill in or drop a PDF/photo and let OCR extract supplier, total and SST.",
    audience: "sme",
    readTime: "3 min read",
    intro:
      "Bills can be captured manually or by uploading a PDF/photo. The OCR pipeline reads supplier, date, total and SST and pre-fills the form.",
    sections: [
      {
        heading: "Drop and let OCR work",
        steps: [
          "Open Bills → New.",
          "Drag a PDF or photo into the upload zone (or take a snap on mobile).",
          "Wait a moment — OCR extracts the supplier, invoice number, total and SST.",
          "Review the extracted fields. Fix anything OCR got wrong.",
          "Click Post.",
        ],
        body: [],
      },
      {
        heading: "Capture manually",
        body: [
          "Open Bills → New, skip the upload, and fill the form line-by-line.",
          "The supplier's default expense account auto-suggests on each line.",
          "Add SST 6% per line if applicable; the input tax appears in the SST report.",
        ],
      },
      {
        heading: "Attachments",
        body: [
          "Every bill keeps the original file attached, in case your auditor asks for it later.",
        ],
      },
    ],
  },
  {
    slug: "schedule-payment",
    topicSlug: "bills",
    title: "Schedule a payment",
    summary:
      "Plan when to pay supplier bills and keep your cash forecast honest.",
    audience: "sme",
    readTime: "2 min read",
    intro:
      "Scheduling a payment marks a bill as Pay-by-X-date so you can run a forecasted Cash Flow without paying yet.",
    sections: [
      {
        heading: "Schedule a single payment",
        steps: [
          "Open the bill.",
          "Click Schedule payment.",
          "Pick the bank account and a planned pay date.",
          "Save. The bill stays Posted but is now flagged Scheduled.",
        ],
        body: [],
      },
      {
        heading: "Run a payment batch",
        body: [
          "Bills → Pay run lets you pick all due bills and schedule them in one go.",
          "Export the batch to your bank as a payment file (DuitNow / IBG) or copy the list as a paste-into-bank checklist.",
        ],
      },
      {
        heading: "Mark as paid",
        body: [
          "When the bank actually pays, mark the scheduled payment Done — BukuCloud writes the bank ledger entry and clears the bill.",
        ],
      },
    ],
  },
  {
    slug: "accounts-payable-report",
    topicSlug: "bills",
    title: "Read Accounts Payable",
    summary:
      "See who you owe, when, and how much — across the whole supplier book.",
    audience: "sme",
    readTime: "2 min read",
    intro:
      "Accounts Payable is the supplier-side mirror of Aged Receivables.",
    sections: [
      {
        heading: "Run the report",
        steps: [
          "Open Reports → Accounts Payable.",
          "Pick the as-of date.",
          "Pick the bucket size (30 days default).",
        ],
        body: [],
      },
      {
        heading: "Drill into a supplier",
        body: [
          "Click a row to see the open bills.",
          "From the drill-down, you can schedule a payment or attach a credit memo against the supplier.",
        ],
      },
    ],
  },
  {
    slug: "purchases-by-vendor",
    topicSlug: "bills",
    title: "Purchases by Vendor report",
    summary: "Identify your top suppliers and where the money is going.",
    audience: "sme",
    readTime: "1 min read",
    intro:
      "Purchases by Vendor rolls up every posted bill and credit memo per supplier for the period.",
    sections: [
      {
        heading: "Run the report",
        steps: [
          "Open Reports → Purchases by Vendor.",
          "Pick the period.",
          "Sort descending to see the largest spend.",
        ],
        body: [],
      },
      {
        heading: "Tips",
        body: [
          "Use the report at year-end to negotiate volume discounts or revisit supplier terms.",
          "Combine with the Profit & Loss to validate that expense categories ladder up correctly.",
        ],
      },
    ],
  },
];

const SST_MYINVOIS: Article[] = [
  {
    slug: "apply-sst-on-invoice-lines",
    topicSlug: "sst-myinvois",
    title: "Apply SST 6% on invoice lines",
    summary:
      "Toggle SST per-line so mixed taxable/exempt invoices come out clean.",
    audience: "both",
    readTime: "2 min read",
    popular: true,
    intro:
      "BukuCloud applies SST 6% per invoice line, not at the invoice level. That means a single invoice can mix taxable and exempt items and the SST report still adds up correctly.",
    sections: [
      {
        heading: "Apply SST on a line",
        steps: [
          "Open or create an invoice.",
          "On each line, tick SST if the item is taxable.",
          "BukuCloud calculates 6% of the net per line and adds it to the totals.",
          "The invoice PDF shows Net, SST 6% and Total.",
        ],
        body: [],
      },
      {
        heading: "Default SST flag per item",
        body: [
          "In Settings → Items, set whether a sales item is taxable by default.",
          "New invoice lines for that item will pre-tick SST so you do not have to remember.",
        ],
      },
      {
        heading: "Not registered? No SST line",
        body: [
          "If your company profile has no SST registration number, the SST tick is hidden and invoices show no SST line. Cross the registration threshold? Add the number to Settings → Company and the toggle appears for new invoices.",
        ],
      },
    ],
  },
  {
    slug: "run-sales-tax-report",
    topicSlug: "sst-myinvois",
    title: "Run the Sales Tax (SST) report",
    summary:
      "Generate the bi-monthly SST report you submit to Customs — output and input tax, with drill-down.",
    audience: "both",
    readTime: "3 min read",
    intro:
      "The Sales Tax report rolls up output SST (from invoices and credit notes) and input SST (from bills) for the period you pick.",
    sections: [
      {
        heading: "Run it",
        steps: [
          "Open Reports → Sales Tax (SST).",
          "Pick the period (the standard SST cycle is bi-monthly).",
          "Hit Run.",
        ],
        body: [],
      },
      {
        heading: "Read the report",
        body: [
          "Output tax — SST you collected on invoices.",
          "Input tax — SST on bills (only relevant if you reclaim).",
          "Net payable — what you remit to Customs for the period.",
          "Each row drills down to the underlying invoice or bill.",
        ],
      },
      {
        heading: "Lock the period",
        body: [
          "Once submitted, lock the period from Settings → Periods. Backdated edits are blocked from that date so future reports never drift.",
        ],
      },
    ],
  },
  {
    slug: "prepare-tin-for-myinvois",
    topicSlug: "sst-myinvois",
    title: "Prepare your TIN for MyInvois",
    summary:
      "Set your TIN now so the day MyInvois flips on, your invoices ship straight to LHDN.",
    audience: "both",
    readTime: "2 min read",
    intro:
      "MyInvois is LHDN's e-Invoice platform. To submit through it, every issuer needs a Tax Identification Number (TIN). Add yours now, and your customer's, so you are not scrambling later.",
    sections: [
      {
        heading: "Your own TIN",
        steps: [
          "Open Settings → Company → Tax & compliance.",
          "Paste in your TIN and save.",
        ],
        body: [],
      },
      {
        heading: "Customer TINs",
        body: [
          "Open each customer record and add their TIN — required for B2B MyInvois submissions.",
          "Bulk-import from CSV via Customers → Import if you have many.",
        ],
      },
      {
        heading: "Validation",
        body: [
          "BukuCloud validates TIN format on save. If LHDN later expands the format, we'll loosen validation in lockstep.",
        ],
      },
    ],
  },
  {
    slug: "myinvois-status",
    topicSlug: "sst-myinvois",
    title: "MyInvois e-Invoicing — what's coming",
    summary:
      "Where MyInvois is in the BukuCloud roadmap and what you can do today.",
    audience: "both",
    readTime: "2 min read",
    popular: true,
    intro:
      "We will not ship a half-baked LHDN integration. Here is the honest status — what is wired, what is pending, and what you can do today.",
    sections: [
      {
        heading: "What is wired today",
        body: [
          "The myinvois.submit permission exists and is gated on Corporate and Enterprise plans.",
          "Company TIN, customer TIN and per-line tax codes are captured in a MyInvois-ready shape.",
          "An audit-log channel is reserved for submission events.",
        ],
      },
      {
        heading: "What is pending",
        body: [
          "Direct LHDN API submission flow.",
          "QR-coded invoice PDFs that mirror MyInvois.",
          "Auto-archival of validated invoices for the 7-year retention rule.",
        ],
      },
      {
        heading: "What you can do today",
        body: [
          "Set your TIN and SST registration in Settings → Company.",
          "Make sure your customer records carry TIN where applicable.",
          "Watch /e-invoice — we publish the rollout calendar there as LHDN finalises Phase 2 dates.",
        ],
      },
    ],
    next: { label: "See the e-Invoice roadmap", href: "/e-invoice" },
  },
];

const REPORTS: Article[] = [
  {
    slug: "profit-and-loss",
    topicSlug: "reports",
    title: "Run a Profit & Loss report",
    summary:
      "Revenue minus expenses for a period — with drill-down to the source journals.",
    audience: "both",
    readTime: "2 min read",
    intro:
      "P&L is the report owners check to feel the heartbeat of the business. BukuCloud generates it on demand for any date range.",
    sections: [
      {
        heading: "Run the report",
        steps: [
          "Open Reports → Profit & Loss.",
          "Pick a period (preset: This month, Last month, Quarter to date, This year).",
          "Hit Run.",
        ],
        body: [],
      },
      {
        heading: "Drill in",
        body: [
          "Click any line to see the contributing journals.",
          "Compare to last period: tick the Compare box and pick a comparison range — variance % shows in a side column.",
        ],
      },
      {
        heading: "Export",
        body: [
          "Export PDF for the bank or your investor pack.",
          "Export Excel if you want to add notes or merge with a budget.",
        ],
      },
    ],
  },
  {
    slug: "balance-sheet",
    topicSlug: "reports",
    title: "Read the Balance Sheet",
    summary:
      "Snapshot of assets, liabilities and equity, on any date.",
    audience: "both",
    readTime: "2 min read",
    intro:
      "The Balance Sheet is your company's snapshot at a moment in time. In BukuCloud it is generated on demand from the journal — there is no period close required first.",
    sections: [
      {
        heading: "Run it",
        steps: [
          "Open Reports → Balance Sheet.",
          "Pick the as-of date.",
          "Run.",
        ],
        body: [],
      },
      {
        heading: "Read it",
        body: [
          "Assets = Liabilities + Equity. If it does not balance, you have an opening balance issue (rare). Contact support and we'll help you trace it.",
          "Click any account to drill into the underlying journals.",
        ],
      },
    ],
  },
  {
    slug: "cash-flow-summary",
    topicSlug: "reports",
    title: "Cash Flow summary",
    summary:
      "What actually moved through your bank — operating, investing, financing.",
    audience: "both",
    readTime: "2 min read",
    intro:
      "Cash Flow shows real money in and out. It is calculated from the bank-tagged journals so it always reconciles to your bank ledger.",
    sections: [
      {
        heading: "Run the report",
        steps: [
          "Open Reports → Cash Flow.",
          "Pick the period.",
          "Run.",
        ],
        body: [],
      },
      {
        heading: "Read it",
        body: [
          "Operating — money from/to running the business.",
          "Investing — buying or selling fixed assets.",
          "Financing — owner draws / capital injection / loans.",
        ],
      },
    ],
  },
  {
    slug: "trial-balance",
    topicSlug: "reports",
    title: "Trial Balance basics",
    summary:
      "All accounts at a point in time, debits = credits.",
    audience: "both",
    readTime: "2 min read",
    intro:
      "Trial Balance is the accountant's first stop in a review. Use it to spot misposted journals quickly.",
    sections: [
      {
        heading: "Run the report",
        steps: [
          "Open Reports → Trial Balance.",
          "Pick the as-of date.",
          "Run.",
        ],
        body: [],
      },
      {
        heading: "Spot anomalies",
        body: [
          "Look at debit / credit sub-totals — they should match exactly.",
          "Drill any account that looks suspicious to see the underlying journals and their source documents.",
        ],
      },
    ],
  },
  {
    slug: "income-by-customer",
    topicSlug: "reports",
    title: "Income by Customer",
    summary:
      "See your top customers and where revenue concentrates.",
    audience: "sme",
    readTime: "1 min read",
    intro:
      "Income by Customer rolls up posted invoices and credit notes per customer for the period.",
    sections: [
      {
        heading: "Use it",
        steps: [
          "Open Reports → Income by Customer.",
          "Pick the period and run.",
          "Sort descending — the top of the list is your concentration risk.",
        ],
        body: [],
      },
    ],
  },
  {
    slug: "year-end-pack",
    topicSlug: "reports",
    title: "Year-end pack: which reports to export",
    summary:
      "A one-click bundle of the reports your accountant or auditor wants at year-end.",
    audience: "both",
    readTime: "2 min read",
    intro:
      "Year-end is no fun if you are exporting reports one by one. The Year-end pack bundles them.",
    sections: [
      {
        heading: "Run it",
        steps: [
          "Open Reports → Year-end pack.",
          "Pick the financial year.",
          "Click Export ZIP.",
        ],
        body: [],
      },
      {
        heading: "What is inside",
        body: [
          "P&L, Balance Sheet, Cash Flow.",
          "Trial Balance and General Ledger by account.",
          "Aged Receivables and Aged Payables snapshot.",
          "Sales Tax (SST) report for the year.",
          "Customer and supplier statements ZIP.",
        ],
      },
    ],
  },
];

const PRACTICE: Article[] = [
  {
    slug: "add-first-client",
    topicSlug: "practice",
    title: "Add your first client to the Practice console",
    summary:
      "Create a new tenant for a client right from the Practice console — no second sign-up.",
    audience: "firm",
    readTime: "2 min read",
    popular: true,
    intro:
      "The Practice console is the firm-level cockpit. From here you onboard, switch into and report across every client tenant.",
    prereqs: [
      `A Practice account — register at ${REGISTER_PRACTICE_URL} if you do not have one.`,
    ],
    sections: [
      {
        heading: "Add a client",
        steps: [
          "Open the Practice console (your default landing page).",
          "Click Add client.",
          "Enter the client's company name, SSM number and main contact email.",
          "Pick a plan: Free / Solo / Growth / Corporate. Or invite the client to pay themselves.",
          "Submit. The new tenant database is provisioned in seconds.",
        ],
        body: [],
      },
      {
        heading: "What is set up automatically",
        body: [
          "An isolated tenant database (Stancl Tenancy multi-tenant model).",
          "The default Malaysia chart of accounts.",
          "An owner role assigned to the contact email — they get an invite link.",
          "Your Practice account is added as Accountant.",
        ],
      },
    ],
  },
  {
    slug: "switch-into-client",
    topicSlug: "practice",
    title: "Switch into a client's books in one click",
    summary:
      "Move from the firm console into any client's tenant without a second login.",
    audience: "firm",
    readTime: "1 min read",
    popular: true,
    intro:
      "Switching into a client tenant is a single click. There is no second login, no different password, no impersonation hack — your firm session is recognised.",
    sections: [
      {
        heading: "Switch in",
        steps: [
          "Open the Practice console.",
          "Find the client (use search if you have many).",
          "Click Open. You are now inside their books with your accountant role.",
        ],
        body: [],
      },
      {
        heading: "Switch back",
        body: [
          "Click Back to firm in the top bar at any time. The session stays active for both contexts.",
        ],
      },
      {
        heading: "Audit log",
        body: [
          "Every switch-in is recorded in the per-tenant audit log with your firm user, timestamp and IP. Clients can review it at any time — that is intentional, it is what builds trust.",
        ],
      },
    ],
  },
  {
    slug: "cross-client-ar-aging",
    topicSlug: "practice",
    title: "Cross-client AR aging (Practice Growth+)",
    summary:
      "Run AR aging across every client at once and pick the worst offenders to chase first.",
    audience: "firm",
    readTime: "2 min read",
    intro:
      "Cross-client reports let you act on portfolio-level signals — e.g. all clients with > 90-day overdue invoices. Available on Practice Growth and above.",
    sections: [
      {
        heading: "Run cross-client AR aging",
        steps: [
          "Open the Practice console.",
          "Go to Reports → Cross-client AR aging.",
          "Pick the as-of date and bucket size (default 30 days).",
        ],
        body: [],
      },
      {
        heading: "Drill into a client",
        body: [
          "Click a client row to see the underlying invoices.",
          "Use the bulk-action toolbar to send statements across many clients at once.",
        ],
      },
    ],
  },
  {
    slug: "bulk-action-toolbar",
    topicSlug: "practice",
    title: "Bulk-action toolbar across clients",
    summary:
      "Run the same action across many clients in a few clicks — statements, reminders, locks.",
    audience: "firm",
    readTime: "2 min read",
    intro:
      "The bulk-action toolbar in the Practice console is built for end-of-month and year-end runs.",
    sections: [
      {
        heading: "What you can do",
        body: [
          "Send statements to all customers with > 30-day overdue across selected clients.",
          "Lock periods after submission, in bulk.",
          "Re-run the year-end pack across the firm in a single click.",
        ],
      },
      {
        heading: "How it runs",
        steps: [
          "Pick the clients (Select all or filter by tag).",
          "Pick the action.",
          "Confirm. BukuCloud queues the work in the background and you get a single status email when it's done.",
        ],
        body: [],
      },
    ],
  },
  {
    slug: "practice-audit-log",
    topicSlug: "practice",
    title: "Practice-wide audit log",
    summary:
      "Every action your firm takes across every client — searchable in one place.",
    audience: "firm",
    readTime: "2 min read",
    intro:
      "The Practice audit log unifies the per-tenant audit logs you already see when switched into a client. Filter by user, action, client or date — perfect for incident reviews.",
    sections: [
      {
        heading: "Where to find it",
        body: [
          "Practice console → Audit log.",
        ],
      },
      {
        heading: "Filter and export",
        body: [
          "Filter by client, user, action type and date range.",
          "Export to CSV for compliance reviews.",
        ],
      },
    ],
  },
];

const TEAM_SECURITY: Article[] = [
  {
    slug: "invite-teammate",
    topicSlug: "team-security",
    title: "Invite a teammate and assign a role",
    summary:
      "Add Owners, Admins, Accountants, Bookkeepers and Viewers — all with role-based access.",
    audience: "both",
    readTime: "2 min read",
    popular: true,
    intro:
      "BukuCloud uses Spatie role-based permissions under the hood. Each role bundles the right capabilities so you do not have to wire individual permissions per user.",
    sections: [
      {
        heading: "Invite",
        steps: [
          "Settings → Team → Invite.",
          "Type the email and pick a role.",
          "They get a single-use link valid for 72 hours.",
        ],
        body: [],
      },
      {
        heading: "Roles",
        body: [
          "Owner — full control, billing, can delete tenant.",
          "Admin — all settings + user management. No billing or tenant deletion.",
          "Accountant — read + post journals, all reports, no user management.",
          "Bookkeeper — invoices, bills, customers, suppliers. No journals or reports.",
          "Viewer — read-only.",
        ],
      },
      {
        heading: "Add my accountant",
        body: [
          "Use Settings → Team → Invite firm. Their email gets a link they can accept from their Practice console.",
        ],
      },
    ],
  },
  {
    slug: "two-factor-auth",
    topicSlug: "team-security",
    title: "Turn on two-factor authentication",
    summary:
      "Add a TOTP code on every login — recommended for Owner / Admin / Accountant roles.",
    audience: "both",
    readTime: "2 min read",
    intro:
      "Two-factor authentication (2FA) uses a Time-based One-Time Password (TOTP) — Google Authenticator, 1Password and Authy all work.",
    sections: [
      {
        heading: "Turn it on for yourself",
        steps: [
          "Open Profile → Security.",
          "Click Enable 2FA.",
          "Scan the QR code with your authenticator app.",
          "Enter the 6-digit code to confirm.",
          "Save your one-time recovery codes somewhere safe (1Password / a sealed envelope).",
        ],
        body: [],
      },
      {
        heading: "Enforce for the whole tenant",
        body: [
          "Owner can flip Settings → Security → Require 2FA for all users.",
          "Anyone without 2FA gets prompted to set it up next login.",
        ],
      },
    ],
  },
  {
    slug: "review-audit-log",
    topicSlug: "team-security",
    title: "Review the audit log",
    summary:
      "Trace who did what — with who, when, where, what changed.",
    audience: "both",
    readTime: "2 min read",
    intro:
      "Every state-changing action in BukuCloud is recorded: invoice posted, journal edited, role changed, settings updated. The audit log is your forensic trail.",
    sections: [
      {
        heading: "Where to find it",
        body: [
          "Settings → Audit log.",
          "Practice firms also see a cross-tenant view from the Practice console.",
        ],
      },
      {
        heading: "Filter",
        body: [
          "Filter by user, action type, IP and date range.",
          "Click a row to see the before/after diff for record changes.",
        ],
      },
      {
        heading: "Retention",
        body: [
          "Audit log entries are retained for the lifetime of the tenant. Year-end exports include the period audit log automatically.",
        ],
      },
    ],
  },
  {
    slug: "export-tenant-data",
    topicSlug: "team-security",
    title: "Export your tenant data (PDPA right of access)",
    summary:
      "Download a full archive of your tenant data — invoices, customers, journals, attachments.",
    audience: "both",
    readTime: "2 min read",
    popular: true,
    intro:
      "Your Personal Data Protection Act 2010 right of access lets you download a full export at any time. Owner / Admin can run it.",
    sections: [
      {
        heading: "Run an export",
        steps: [
          "Open Settings → Data → Export.",
          "Pick which records: All, or limit by date / module.",
          "Click Generate. The export runs in the background.",
          "Owner gets an email when the ZIP is ready, with a signed download link valid for 7 days.",
        ],
        body: [],
      },
      {
        heading: "What is in the ZIP",
        body: [
          "CSVs for every record type (customers, suppliers, invoices, bills, journals, contacts, items).",
          "All attachments, organised by module and ID.",
          "A README with a data dictionary and the schema version.",
        ],
      },
    ],
  },
  {
    slug: "right-to-be-forgotten",
    topicSlug: "team-security",
    title: "Erase your account (right to be forgotten)",
    summary:
      "Permanently delete your tenant — what we keep, for how long, and why.",
    audience: "both",
    readTime: "3 min read",
    intro:
      "Under PDPA you can request full erasure of personal data. BukuCloud honours this, with a small carve-out for legal-retention obligations.",
    sections: [
      {
        heading: "Request erasure",
        steps: [
          "Owner: open Settings → Data → Erase tenant.",
          "Confirm with your password and 2FA.",
          "We send a confirmation email with a 14-day cooling-off period.",
          "After 14 days, the tenant database is dropped. Attachments are purged from object storage.",
        ],
        body: [],
      },
      {
        heading: "What we retain",
        body: [
          "Aggregate, non-identifying billing records — required by Malaysian tax law for 7 years.",
          "Audit-log evidence of the erasure itself, so we can prove it happened to a regulator if asked.",
          "Nothing else.",
        ],
        callout: {
          tone: "info",
          title: "Need it sooner?",
          body: "Email privacy@bukucloud.com from the registered owner address and we'll handle it inside 30 days, the PDPA window.",
        },
      },
    ],
  },
];

const BILLING: Article[] = [
  {
    slug: "switch-solo-to-growth",
    topicSlug: "billing",
    title: "Switch from Solo to Growth",
    summary:
      "Upgrade your plan instantly — paying the prorated difference through Toyyibpay.",
    audience: "sme",
    readTime: "1 min read",
    popular: true,
    intro:
      "Plan upgrades are instant. The prorated difference for the rest of the period is charged via Toyyibpay; no email tickets, no waiting.",
    sections: [
      {
        heading: "Upgrade",
        steps: [
          "Open Settings → Plan.",
          "Pick Growth.",
          "Confirm. Toyyibpay handles the prorated charge.",
          "New limits and features unlock immediately.",
        ],
        body: [],
      },
      {
        heading: "What changes",
        body: [
          "Higher invoice / bill caps.",
          "More users included.",
          "Recurring invoices, OCR for bills, and customer statements unlocked.",
        ],
      },
    ],
  },
  {
    slug: "upgrade-to-corporate-annual",
    topicSlug: "billing",
    title: "Upgrade to Corporate (annual)",
    summary:
      "Pay yearly, save ~17%, and unlock multi-currency, advanced reporting and the MyInvois gate.",
    audience: "sme",
    readTime: "2 min read",
    intro:
      "Corporate is for SMEs that want the full feature set. Annual billing saves ~17% over monthly.",
    sections: [
      {
        heading: "Upgrade",
        steps: [
          "Settings → Plan → Pick Corporate.",
          "Choose Yearly billing.",
          "Confirm via Toyyibpay.",
        ],
        body: [],
      },
      {
        heading: "What unlocks on Corporate",
        body: [
          "Multi-currency invoices and bills.",
          "Advanced reporting and segment dimensions.",
          "myinvois.submit gated permission (active when MyInvois ships).",
          "Higher user count and tenant-wide 2FA enforcement.",
        ],
      },
    ],
  },
  {
    slug: "cancel-plan-data",
    topicSlug: "billing",
    title: "Cancel your plan and what happens to your data",
    summary:
      "How cancellation works, the read-only grace period, and how to export everything before you go.",
    audience: "both",
    readTime: "3 min read",
    popular: true,
    intro:
      "You can cancel any plan from inside the app. We follow it up with a clear, predictable data-handling sequence.",
    sections: [
      {
        heading: "Cancel from the app",
        steps: [
          "Settings → Plan → Cancel.",
          "Tell us why (optional but appreciated — it really shapes the roadmap).",
          "Confirm with your password and 2FA.",
        ],
        body: [],
      },
      {
        heading: "What happens next",
        body: [
          "Billing stops at the end of the current period — you keep paid features until then.",
          "After that, the tenant goes read-only for 30 days. You can still log in, view, and export everything.",
          "After 30 days, posting is blocked but data stays read-only for another 60 days.",
          "After 90 days total, you can request full erasure (right to be forgotten) or we mark the tenant for archival.",
        ],
      },
      {
        heading: "Export before you cancel",
        body: [
          "Run Settings → Data → Export and Reports → Year-end pack first. That gives you a clean offline copy of everything.",
        ],
      },
    ],
  },
  {
    slug: "toyyibpay-invoices-receipts",
    topicSlug: "billing",
    title: "Toyyibpay invoices and receipts",
    summary:
      "Where to find your BukuCloud subscription invoices and how to download the receipts.",
    audience: "both",
    readTime: "1 min read",
    intro:
      "BukuCloud uses Toyyibpay for plan billing. Every charge has a downloadable invoice and a receipt.",
    sections: [
      {
        heading: "View your billing history",
        steps: [
          "Settings → Plan → Invoices.",
          "Click any row to download the PDF invoice or receipt.",
        ],
        body: [],
      },
      {
        heading: "Update your billing email",
        body: [
          "Settings → Plan → Billing email lets you point invoices at your finance team's address (separate from your login email).",
        ],
      },
    ],
  },
  {
    slug: "practice-plan-upgrades",
    topicSlug: "billing",
    title: "Practice plan upgrades (Starter → Growth → Firm)",
    summary:
      "How to scale your Practice plan as the firm grows — clients, seats and feature unlocks.",
    audience: "firm",
    readTime: "2 min read",
    intro:
      "Practice plans scale with your firm. Upgrades are instant; downgrades take effect at the end of the current period.",
    sections: [
      {
        heading: "Upgrade your Practice plan",
        steps: [
          "Open the Practice console.",
          "Settings → Plan.",
          "Pick the next tier and confirm via Toyyibpay.",
        ],
        body: [],
      },
      {
        heading: "What unlocks at each tier",
        body: [
          "Practice Starter — up to 10 clients, basic firm console.",
          "Practice Growth — cross-client AR aging, bulk-action toolbar, 25 clients.",
          "Practice Firm — unlimited clients, white-label, advanced security.",
          "Practice Self-hosted — same code, your VM, license-gated.",
        ],
      },
    ],
  },
];

export const ARTICLES: Article[] = [
  ...GETTING_STARTED,
  ...INVOICING,
  ...CUSTOMERS,
  ...BILLS,
  ...SST_MYINVOIS,
  ...REPORTS,
  ...PRACTICE,
  ...TEAM_SECURITY,
  ...BILLING,
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getArticle(
  topicSlug: string,
  articleSlug: string,
): Article | undefined {
  return ARTICLES.find(
    (a) => a.topicSlug === topicSlug && a.slug === articleSlug,
  );
}

export function articlesForTopic(topicSlug: string): Article[] {
  return ARTICLES.filter((a) => a.topicSlug === topicSlug);
}

export function popularArticles(): Article[] {
  return ARTICLES.filter((a) => a.popular);
}

export function relatedArticles(
  article: Article,
  limit = 3,
): Article[] {
  const sameTopic = ARTICLES.filter(
    (a) => a.topicSlug === article.topicSlug && a.slug !== article.slug,
  );
  return sameTopic.slice(0, limit);
}

