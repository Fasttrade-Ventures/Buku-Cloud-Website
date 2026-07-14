# BukuCloud — Marketing Site

The public marketing site for **bukucloud.com** — a cloud accounting product for Malaysian SMEs and accounting firms. Built with **Next.js 16** (App Router, React 19) and **Tailwind CSS 4**.

The SaaS app (Laravel + React) lives in a sibling repo and runs at `app.bukucloud.com`. This repo is the marketing site only.

## Pages

Home · Features · Pricing · E-Invoice (MyInvois) · Accountants · About · Contact · Help (with topic + article detail pages) · Guides · Legal (Privacy / Terms / DPA / Cookies / Hub).

Includes:

- **i18n EN/BM** via React Context + `localStorage` persistence
- Full **SEO metadata**, `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, OG image
- **JSON-LD**: Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList
- **PDPA-aligned** legal pages

## Local development

```bash
npm install
cp .env.example .env.local   # then edit values as needed
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm start                    # serve the production build locally
```

## Deploying to Vercel

1. Import `Fasttrade-Ventures/Buku-Cloud-Website` in [Vercel](https://vercel.com/new).
2. Framework Preset: **Next.js** (auto-detected). Leave Root Directory empty (repo root).
3. Add the environment variables below (Settings → Environment Variables).
4. Deploy. Pushes to `main` auto-deploy production; other branches get preview deployments.

`vercel.json` pins the region to Singapore (`sin1`) and sets security headers.

### Environment variables

All vars are public (`NEXT_PUBLIC_*`) and used at build time for SEO + CTA URLs. See [`.env.example`](.env.example).

| Variable | Required | Example | Notes |
|---|---|---|---|
| `NEXT_PUBLIC_APP_URL` | Yes | `https://app.bukucloud.com` | Base URL of the BukuCloud SaaS app for `/register` CTAs. |
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://www.bukucloud.com` | Canonical site URL for sitemap, robots, OG, and canonical tags. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | — | Google Search Console token. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional | — | Bing Webmaster Tools token. |

### Custom domain

1. In Vercel → Project → Settings → **Domains**, add `bukucloud.com` and `www.bukucloud.com`.
2. Point DNS as Vercel instructs (apex `A` / `www` `CNAME`).
3. Prefer `www` as canonical to match production redirects; set `NEXT_PUBLIC_SITE_URL` accordingly.

## Architecture

- `src/app/` — App Router pages
- `src/components/` — Shared UI
- `src/lib/` — Site config, plans, i18n, SEO helpers
- `public/` — Static assets

## License

Proprietary — © Fasttrade Ventures. All rights reserved.
