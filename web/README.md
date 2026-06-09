# BukuCloud Landing — Next.js

Vercel-ready Next.js 16 (App Router) + Tailwind 4 + TypeScript implementation of the BukuCloud marketing site.

Source design lives in `../designs/bukucloud.pen` (Pencil format).

## Pages

- `/` — Home
- `/features` — Features (5 jobs + comparison)
- `/pricing` — Pricing (Business + Practice toggles, monthly / yearly billing, comparison table)
- `/e-invoice` — MyInvois e-Invoice
- `/accountants` — For Accountants (Practice Console + Practice plans)
- `/stories` — Customer Stories
- `/about` — About + team
- `/contact` — Contact + walkthrough form
- `/help` — Help Center
- `/privacy` — Privacy Policy

## Develop

```bash
npm install
npm run dev   # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

All pages are statically generated (`○ Static`).

## Environment

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | URL of the BukuCloud SaaS app. Drives `/register` and `/register/practice` CTAs. | `http://127.0.0.1:8000` |

Set in Vercel Project → Settings → Environment Variables. Example values:

```
Local dev:   http://127.0.0.1:8000
Staging:     https://staging-app.bukucloud.com
Production:  https://app.bukucloud.com
```

## Deploy to Vercel

1. Push the `bukucloud-landing` repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo.
3. **Root directory:** `web`.
4. Add the `NEXT_PUBLIC_APP_URL` env var.
5. Deploy.

Region is pinned to `sin1` (Singapore) for low latency to Malaysian users.

## Architecture

- `src/app/` — App Router pages (one folder per route).
- `src/components/` — Shared UI (Nav, Footer, PricingCard, PricingGrid, Faq, mockups).
- `src/lib/site.ts` — Site-wide config + register URLs.
- `src/lib/plans.ts` — Source-of-truth pricing data for both `business` and `accountant` plan tiers.
- `src/app/globals.css` — Tailwind 4 theme + design tokens (cream / accent / forest / mustard, Inter / Fraunces / JetBrains Mono).

## Design tokens

Mapped 1:1 from the `.pen` design system:

| Token | Value |
|---|---|
| `bg-cream` | `#FAF7F2` |
| `surface` | `#FFFFFF` |
| `surface-alt` | `#F2EDE3` |
| `ink` | `#1A1A1A` |
| `ink-muted` | `#5A554C` |
| `accent` (terracotta) | `#C0492E` |
| `forest` | `#0F4C3A` |
| `mustard` | `#D4A537` |
| `border` | `#E5DFD2` |
| `font-display` | Fraunces |
| `font-body` | Inter |
| `font-mono` | JetBrains Mono |
| `radius-sm` / `radius-md` / `radius-lg` | 8 / 12 / 16 |
