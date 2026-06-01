# BukuCloud Landing Site — Design Spec

**Date:** 2026-06-01
**Owner:** Asyraf
**Status:** Awaiting review → Pencil execution
**Deliverable:** Pencil `.pen` file with all 12 page layouts in `designs/bukucloud.pen`
**Out of scope (this phase):** Implementation in code (Next.js / HTML / etc.)

---

## 1. Product context

BukuCloud is a Malaysia-focused multi-tenant cloud accounting SaaS (built on Laravel 12 + Inertia + React, lives in the sibling `accounting-saas/` repo). The product itself runs at **app.bukucloud.com**. This spec covers the marketing site at **bukucloud.com** — the landing site whose only job is to convert Malaysian SMEs into paid customers of the accounting app.

**Current product plans (source: `accounting-saas/database/seeders/PlanSeeder.php`):**

| Plan | Price (RM/mo) | Price (RM/yr) | Users |
|---|---|---|---|
| Startup | Free | Free | 1 |
| SME | 79 | 853 | 1 |
| Corporate | 199 | 2,149 | 3 (extra RM15/user) |

These exact figures must appear on the Pricing page and the Home pricing teaser — single source of truth.

---

## 2. Strategic positioning

### 2.1 Primary audience (homepage hero speaks to this audience first)

**Growing Malaysian SMEs**, 10–50 staff, one (often overworked) accounts person, currently surviving on a mix of Excel + paper receipts + maybe a legacy desktop tool like SQL Account or AutoCount.

### 2.2 Secondary audiences (each gets its own page, NOT the homepage hero)

- **Accountants & bookkeeping firms** serving multiple SME clients (`/for-accountants`)
- **Micro-SMEs / sole props** finding their way via /pricing → free tier (no dedicated page, served by Startup plan messaging)

### 2.3 The single biggest hook: **MyInvois (LHDN e-invoicing)**

LHDN's MyInvois e-invoicing mandate is the #1 reason Malaysian SMEs are actively shopping for new accounting software in 2025–26. Every page (especially Home and the dedicated `/e-invoice` page) treats this as a top-of-funnel driver. Western SaaS templates won't have this — instant differentiation.

### 2.4 Competitor landscape (and the gap we own)

| Type | Examples | Their weakness | Our opening |
|---|---|---|---|
| Local legacy | SQL Account, AutoCount | Looks like Windows 98, install-based, intimidating | Cloud, modern, warm, made-for-mobile-business-owners |
| International SaaS | Xero, QuickBooks | Cold generic SaaS look, WeWork stock photos, no local context | Distinctly Malaysian look + MyInvois-first messaging |
| Other Malaysian cloud SaaS | Various | Mostly look like Stripe knockoffs (purple gradients) | Editorial warmth — defensible position no one currently owns |

---

## 3. Visual identity (locked)

### 3.1 Style direction

**Warm Malaysian + editorial typography.** The brand name is already Malay ("Buku" = book). The visuals finish what the name started. Editorial typography adds the seriousness an accounting product needs.

### 3.2 Color palette

| Role | Token | Hex | Use |
|---|---|---|---|
| Background | `bg-cream` | `#FAF7F2` | Page background (not white, not gray) |
| Surface | `surface` | `#FFFFFF` | Cards, raised surfaces |
| Surface alt | `surface-alt` | `#F2EDE3` | Alternating section backgrounds |
| Ink (primary text) | `ink` | `#1A1A1A` | Headlines, body |
| Ink muted | `ink-muted` | `#5A554C` | Sub-text, captions |
| Border | `border` | `#E5DFD2` | Hairlines, dividers |
| Accent — Terracotta | `accent` | `#C0492E` | Primary CTA, key highlights, MyInvois banner |
| Accent — Forest | `forest` | `#0F4C3A` | Trust/finance signals, secondary CTA |
| Accent — Mustard | `mustard` | `#D4A537` | "Premium" tier markers, final CTA tint |
| Accent dark | `accent-dark` | `#8E3522` | Hover state for terracotta |
| Forest dark | `forest-dark` | `#0A3528` | Hover state for forest |

**No gradients.** A single flat fill is more editorial. The only gradient permitted is in the logo mark.

### 3.3 Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display (H1–H2) | **Fraunces** (serif) | 500–600 | Tight tracking, slight optical-size adjustments. This is the brand voice. |
| Sub-display / H3–H4 | **Fraunces** | 400–500 | Italic permitted for emphasis |
| Body | **Inter** (sans) | 400–500 | 16–17px base, 1.6 line-height |
| UI / nav / labels | **Inter** | 500–600 | All caps tracking +0.05em for eyebrow labels |
| Numbers (prices, stats) | **JetBrains Mono** | 500 | "RM 79" must read like a real ledger entry |

**Why these:** Fraunces is the most editorial-leaning serif with broad weight/optical-size range — it can feel both warm and authoritative depending on size. Inter is the de-facto SaaS body font (familiar, ultra-readable). JetBrains Mono for figures is the secret weapon — generic SaaS sites use Inter for prices; we use a mono-spaced font that physically resembles an accountant's ledger.

### 3.4 Spacing & rhythm

- **Base unit:** 4px
- **Section vertical padding (desktop):** 120px top/bottom on hero sections, 96px on standard sections, 64px on dense sections
- **Container max-width:** 1280px (with 64px horizontal padding desktop, 24px mobile)
- **Grid:** 12-column with 32px gutters (desktop), 4-column with 16px gutters (mobile)

### 3.5 Imagery & illustration

| Type | Rule |
|---|---|
| Photos | **Real Malaysian businesses only.** Kopitiam owner, kedai runcit, salon, F&B chain, IT services SME. Warm natural light. No stock. (For .pen mockups: use neutral photo placeholders with notes — final photography is a Phase 2 commission.) |
| Illustrations | Custom **single-weight line drawings** in `ink` color: receipts, ledgers, calculators, coffee cups, traditional shophouse facades. **Never** isometric / floating / 3D-rendered / colorful SaaS illustrations. |
| Product screenshots | Use **real screenshots** of the actual app in `accounting-saas/` (Phase 2 captures). For .pen mockups: stylized representative wireframes with note "replace with real screenshot." |
| Icons | **Lucide** icon set, 1.5px stroke, `ink` color. Consistent throughout. No filled icons. |

### 3.6 Signature motif

A **subtle batik-inspired horizontal line motif** (single weight, `border` color, 24px tall) used **once per long page** as a section divider — never as background pattern. This is the visual "we are Malaysian" signature, used sparingly enough that it stays elegant rather than becoming kitsch.

Specific motif: a repeating wave pattern derived from the curved peak of a traditional Malay woven pattern — abstracted to 2 sine-like curves stacked with one shifted half a period.

### 3.7 Components (design system, built first in Pencil)

The following reusable components must be defined as components in the .pen file before any page uses them:

1. **Button — Primary** (terracotta fill, white text, 12px radius, no shadow)
2. **Button — Secondary** (transparent, 1.5px ink border, ink text)
3. **Button — Ghost** (text only with arrow → for tertiary CTAs)
4. **Nav bar** (top, with EN/BM toggle pill, log-in link, primary CTA)
5. **Eyebrow label** (small caps, +0.05em tracking, `ink-muted`, often paired with a 24px horizontal line)
6. **Section heading** (Fraunces 48–72px, max 14 words, often paired with eyebrow above)
7. **Card — Feature** (cream background, 1px border, 32px padding, icon top-left, heading, body)
8. **Card — Pricing** (white surface, 1px border, badge for "Popular", price in mono, feature list)
9. **Card — Testimonial** (cream, photo top-left, quote in Fraunces italic, attribution below)
10. **Stat block** (large mono number + small sans label)
11. **FAQ row** (border-bottom, plus/minus toggle, smooth expand)
12. **Footer** (4 columns, language toggle, PDPA notice)
13. **Inline badge** (small, used for "Baharu", "MyInvois Ready", "PDPA Compliant")
14. **Section divider** (the batik motif from §3.6)

---

## 4. Sitemap & page priorities

| # | Page | Path | Priority | Primary goal |
|---|---|---|---|---|
| 1 | Home | `/` | P0 | Convert cold traffic to free signup |
| 2 | Features | `/features` | P0 | Convert evaluators ("does it do X?") |
| 3 | Pricing | `/pricing` | P0 | Convert ready-to-buy → plan selection |
| 4 | E-Invoice (MyInvois) | `/e-invoice` | P0 | Capture LHDN-driven intent traffic |
| 5 | For Accountants | `/for-accountants` | P1 | Acquire accountant partners → multi-client deals |
| 6 | Customer Stories | `/stories` | P1 | Validate via real local proof |
| 7 | Security & Data | `/security` | P1 | Remove "is my data safe?" objection |
| 8 | About | `/about` | P1 | Build trust via founder story |
| 9 | Resources / Blog | `/resources` | P2 | SEO content hub |
| 10 | Contact / Demo | `/contact` | P0 | Capture qualified leads (esp. Corporate tier) |
| 11 | Help Center | `/help` | P2 | Link out to docs/knowledge base |
| 12 | Legal | `/privacy`, `/terms`, `/refund` | P0 | Required for SaaS + PDPA compliance |

---

## 5. Voice & copy guidelines

### 5.1 Tone

- **Direct, not clever.** Malaysians appreciate plain talk over marketing fluff.
- **Confident, not arrogant.** "BukuCloud handles your SST" — not "Revolutionary AI-powered SST automation."
- **Local without being kampung.** Comfortable using "PKS" (Perusahaan Kecil dan Sederhana) as a synonym for SME, comfortable saying "kopitiam" as a real customer type, but never forced.
- **Honest about being small.** Don't fake enterprise scale.

### 5.2 Language strategy (locked)

**Default English** with a prominent **EN / BM toggle** in nav and footer. When BM is selected, every page swaps to Bahasa Malaysia translations. (Translation copy is out of scope for the .pen designs — placeholder BM text used; final translation is Phase 2 by a native speaker.)

**Even on the English version**, certain trust-building phrases stay in BM as cultural signals:

- Trust strip: "Dipercayai oleh 1,200+ PKS di Malaysia"
- Final CTA on Home: "Mula hari ini. Percuma untuk Startup."
- Primary nav login link: "Log Masuk"
- Primary nav signup CTA: "Mula Percuma →"

This is intentional — bilingual moments on a default-English page subliminally communicate "we're really Malaysian, not pretending to be."

### 5.3 Banned words/phrases (auto-fail)

These are AI-template tells. Do not appear in any copy:

- "Empower / empowering"
- "Streamline / streamlined"
- "Cutting-edge"
- "Best-in-class"
- "Revolutionary"
- "Seamless / seamlessly"
- "Unleash"
- "Game-changing"
- "Next-generation"
- "Synergy"

If a sentence sounds like it could be on any other SaaS landing page, rewrite it.

---

## 6. Page-by-page section structure

### 6.1 Home (`/`) — **detailed sections** (12)

| # | Section | Content notes |
|---|---|---|
| 1 | Nav bar | Logo · Features · Pricing · E-Invoice · For Accountants · Stories · EN/BM toggle · Log Masuk · **Mula Percuma →** |
| 2 | Hero | Eyebrow: "BUKUCLOUD — UNTUK PKS MALAYSIA". Headline (Fraunces 72px): *"Akaun anda. Cloud kami."* + EN subline: "Cloud accounting built for Malaysian SMEs — invoicing, SST, and MyInvois e-invoicing, ready out of the box." 2 CTAs: primary "Mula percuma" + secondary "Tengok demo (2 min)". Right column: stylized product screenshot of dashboard, slightly tilted, casting a hard shadow (no soft drop-shadow). |
| 3 | Trust strip | Centered: "Dipercayai oleh 1,200+ PKS di Malaysia" + row of 6 customer logos (placeholder) + small "★★★★★ 4.8 from 200+ reviews" |
| 4 | The problem | Eyebrow: "MASALAH LAMA". Heading: "Excel takut. Akauntan mahal. MyInvois dah dekat." Body: 3-column with hand-drawn line illustrations: (i) Spreadsheet that broke, (ii) Receipts in a shoebox, (iii) Countdown calendar |
| 5 | How BukuCloud helps | Eyebrow: "KERJA YANG KAMI BANTU". Heading: "Empat kerja besar. Satu cloud." 2x2 grid of feature blocks: **Invoicing & SST**, **MyInvois e-invoicing**, **Bills & supplier payments**, **Reports that make sense**. Each: icon + heading + 2-line description + "Lihat →" |
| 6 | MyInvois banner | **Full-width terracotta strip.** Heading (white, Fraunces): "MyInvois LHDN dah ready. Anda?" Sub: short BM line + EN line about phase 2/3 deadlines. CTA button (cream): "Lihat MyInvois →" Right side: countdown timer mockup |
| 7 | Product tour | Eyebrow: "DALAM APP". Heading: "Setiap skrin, dibina khas untuk PKS Malaysia." 3 horizontal cards with real-looking app screenshots: Dashboard, Invoice editor, P&L report. Each has 1-line caption. |
| 8 | Customer stories | Eyebrow: "CERITA SEBENAR". Heading: "PKS Malaysia yang tukar ke BukuCloud." 3 testimonial cards: kopitiam owner, IT services SME founder, F&B chain accounts manager. Each: photo + Fraunces italic quote + name/business + 1 quantified result ("Save 8 hours a month"). |
| 9 | Pricing teaser | Eyebrow: "HARGA". Heading: "Mula percuma. Naik bila bersedia." 3 cards (Startup / SME / Corporate) with real prices from §1. Middle (SME) has "Popular" mustard badge. CTA below: "Lihat pelan penuh →" |
| 10 | FAQ | 6 questions, switcher-focused: (i) Boleh import dari Excel?, (ii) Macam mana dengan SST?, (iii) MyInvois — kena buat apa?, (iv) Data saya selamat di mana?, (v) Boleh tukar dari SQL Account?, (vi) Free trial ada had? |
| 11 | Final CTA band | Mustard `#D4A537` background tint (subtle, 8% opacity over cream). Centered Fraunces heading: "Mula hari ini. Percuma untuk Startup." Sub: "No card. No setup. 5 minit." Primary CTA: "Daftar percuma →" |
| 12 | Footer | 4 columns: Product · Solutions · Company · Legal. Bottom row: EN/BM toggle, Malaysian registered address, "PDPA compliant" badge, copyright. |

### 6.2 Features (`/features`)

Organized by **job-to-be-done**, not by feature list. Sections:

1. Compact hero: "Everything your SME's books need."
2. Job 1 — **Get paid faster** (Invoicing, SST tax, payment tracking, credit notes, email invoices)
3. Job 2 — **Pay suppliers without chaos** (Bills, suppliers, AP)
4. Job 3 — **Stay compliant** (MyInvois, SST returns, PDPA, audit trail)
5. Job 4 — **Know your numbers** (Dashboard, P&L, balance sheet, GL, chart of accounts)
6. Job 5 — **Work with your accountant** (Multi-user, role permissions, accountant access)
7. Comparison table: BukuCloud vs Excel vs SQL Account (honest, conservative)
8. CTA band

### 6.3 Pricing (`/pricing`)

1. Compact hero: "Harga yang jelas. Tiada surprise."
2. Toggle: Monthly / Yearly (yearly shows savings badge)
3. 3 plan cards with real numbers (Startup / SME / Corporate) — full feature list per plan from `PlanSeeder.php`
4. Feature comparison table (long, every feature × plan checkmark grid)
5. "Need more than 50 users?" → Enterprise contact card
6. Pricing FAQ (8 questions, billing-focused)
7. CTA band

### 6.4 E-Invoice / MyInvois (`/e-invoice`) — **the trojan horse**

1. Hero: "MyInvois LHDN. Tanpa stress." + sub explaining BukuCloud handles compliance automatically
2. **"Am I affected?" wizard mockup** — 3-question flow showing user when their phase kicks in (a real conversion mechanic, even just as visual mockup)
3. What MyInvois actually is (3-paragraph plain-English explainer)
4. What BukuCloud does for you (visual checklist of automated handling)
5. Live demo embed placeholder ("See a real e-invoice submission")
6. FAQ — MyInvois-specific (10 questions)
7. CTA: "Be MyInvois-ready in 5 minutes →"

### 6.5 For Accountants (`/for-accountants`)

1. Hero speaking directly to bookkeepers: "Uruskan 30 klien. Bukan 30 spreadsheet."
2. Multi-client dashboard mockup (showing the accountant view)
3. Partner program teaser (revenue share)
4. 3 testimonials from accountants/bookkeeping firms
5. Pricing for partners (TBD — placeholder card "Contact us for partner pricing")
6. CTA: "Book a 20-min partner call →"

### 6.6 Customer Stories (`/stories`)

1. Compact hero: "PKS Malaysia. Cerita sebenar."
2. Filter pills: All / F&B / Retail / Services / Manufacturing
3. Grid of 6 story cards (placeholder for now — real customers post-launch)
4. CTA at bottom: "Want your story here? →"

### 6.7 Security & Data (`/security`)

1. Hero: "Data anda. Selamat. Di Malaysia."
2. 6 trust pillars in grid: PDPA compliant · Encrypted at rest & in transit · Daily backups · Hosted in Malaysia · Role-based access · Audit logs
3. Detailed sections for each (one section per pillar)
4. Sub-processors list table
5. Compliance certifications row (placeholder badges — ISO/SOC if/when applicable)
6. Security contact: `security@bukucloud.com`

### 6.8 About (`/about`)

1. Hero: "Buat untuk orang yang macam kami pernah jadi."
2. Founder story (long-form, single-column, max 65ch line length, Fraunces drop-cap on first paragraph — editorial signature)
3. Mission statement (1 sentence, huge type)
4. Team photo (real, not stock) + named team members
5. Press / mentions strip (placeholder)
6. CTA

### 6.9 Resources / Blog (`/resources`)

1. Hero: "Panduan praktikal untuk PKS."
2. Featured post (large card)
3. Category filter pills: SST · MyInvois · Cash flow · Bookkeeping · Tax
4. Article grid (9 cards initially)
5. Newsletter signup band (cream, single email field + button)

### 6.10 Contact / Demo (`/contact`)

1. Hero: "Cakap dengan kami."
2. Two-column: Left = book a demo form (name, company, employees, message). Right = direct contacts (sales@, support@, security@, phone, address with embedded map)
3. Office hours line
4. FAQ — contact-specific (3 questions)

### 6.11 Help Center (`/help`)

1. Hero with large search bar: "Cari jawapan..."
2. Popular topics grid (8 topic cards)
3. "Can't find it?" → Contact CTA
4. (Page mostly links out to a hosted knowledge base; this is the index)

### 6.12 Legal pages (`/privacy`, `/terms`, `/refund`)

Standardized layout:
1. Compact text hero with last-updated date
2. Sticky table of contents (left, desktop only)
3. Long-form legal text in right column (Fraunces drop-cap on first paragraph for editorial signature)
4. Contact for legal queries at bottom

Three near-identical pages, one master layout in Pencil.

---

## 7. Distinctive choices vs generic AI SaaS templates

Explicit anti-patterns we are rejecting:

| Generic AI SaaS does | We do instead |
|---|---|
| Centered hero with phone mockup floating with soft shadow | **Asymmetric hero**, screenshot to the right, **hard shadow** offset 8px |
| Gradient backgrounds (purple→blue→pink) | **Flat warm cream** background, single accent strip per page max |
| Smiling stock photos in WeWork offices | **Real Malaysian small-business owners** — kopitiam, salon, kedai |
| Isometric SaaS illustrations | **Single-weight line drawings** in ink color |
| 3-column feature grid with same-size icon circles | **Editorial 2x2 grid** with asymmetric proportions, eyebrow + serif heading |
| Sans-serif everything (Inter all the way) | **Fraunces serif** for display, **JetBrains Mono** for prices |
| "Empower your business with seamless AI-powered automation" | **"Akaun anda. Cloud kami."** — short, BM, no buzzwords |
| Generic 5-star testimonials | **Real local businesses** with quantified results |
| Live chat bubble bottom-right | None on launch — feels desperate; use Contact page instead |
| Cookie banner in your face | Minimal PDPA notice in footer (until needed) |

---

## 8. Pencil execution plan

1. **Create `bukucloud.pen` file in Pencil editor** (user must do this in the editor since Pencil is real-time)
2. **Page 1 — Design System:** define all 14 components, color tokens, type scale, motif. Built FIRST so every other page reuses them.
3. **Pages 2–13:** one Pencil page per landing page (Home, Features, Pricing, E-Invoice, For Accountants, Stories, Security, About, Resources, Contact, Help, Legal-template). Each desktop layout at 1440px wide. Mobile variant only for Home in this phase (others use stack-by-default responsive rules in notes).
4. **Export key screenshots** to `assets/exports/` for offline review.
5. **Handoff:** updated README + this spec referenced.

**What the user (Asyraf) needs to do before Pencil work starts:**

1. Open the Pencil extension in Cursor.
2. Create a new `.pen` file at `bukucloud-landing/designs/bukucloud.pen` and have it open as the active editor.
3. Tell me when ready, then I'll call `get_editor_state` and start.

---

## 9. Open questions / deferred decisions

| # | Question | Defer to |
|---|---|---|
| Q1 | Real customer photos & quotes | Phase 2 — post-customer-research |
| Q2 | Real product screenshots (vs stylized) | Phase 2 — capture from `accounting-saas/` |
| Q3 | Final BM translation copy | Phase 2 — native-speaker pass |
| Q4 | Partner / accountant program pricing | Business decision, not design |
| Q5 | Newsletter / blog tooling | Implementation phase (not designs) |
| Q6 | Live chat / support widget | Deliberately omitted in v1 |
| Q7 | Real customer count for trust strip | **Placeholder in designs is "1,200+ PKS"** — replace with real number before launch. If real count is much lower, change copy to "Built by Malaysian SMEs, for Malaysian SMEs" (qualitative trust signal that doesn't depend on count). |
| Q8 | Real average review rating | **Placeholder is "★★★★★ 4.8 from 200+ reviews"** — replace with real numbers from G2/Capterra/in-app reviews. If none yet, remove the rating until earned. |

---

## 10. Non-goals (what this spec does NOT cover)

- Implementation in any framework (Next.js, plain HTML, Astro, etc.) — separate phase
- Dark mode — deliberately omitted; warm cream is the brand
- Localization beyond EN/BM — Chinese/Tamil deferred
- Real photography commission — deferred
- Animation / motion specs — basic notes only; full motion spec deferred to implementation phase
- SEO meta / schema markup — implementation phase
- Email templates, transactional pages, post-signup flows — those live in `accounting-saas/`, not the marketing site
