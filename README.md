# BukuCloud — Marketing Site

The public marketing site for **bukucloud.com** — a cloud accounting product for Malaysian SMEs and accounting firms. Built with **Next.js 16** (App Router, React 19) and **Tailwind CSS 4**.

The actual SaaS app (Laravel + React) lives in the sibling repo and runs at `app.bukucloud.com`. This repo is the marketing site only.

## Repository layout

This is a "monorepo-style" repo where the deployable Next.js app lives in a `web/` subfolder, alongside design and documentation assets that should travel with the project but are not part of the deployed bundle.

```
bukucloud-landing/
├── web/                    # The Next.js app — this is what Vercel deploys
│   ├── src/                # App Router pages, components, i18n, lib
│   ├── public/             # Static assets (logo, icon, OG image)
│   ├── vercel.json         # Vercel headers + region config
│   ├── .env.example        # Required env vars (copy to .env.local for dev)
│   └── package.json
├── designs/
│   └── bukucloud.pen       # Pencil design file — design system + page layouts
├── docs/                   # Design spec + project notes
├── assets/                 # PNG exports of key screens
└── README.md               # You are here
```

## Pages

Home · Features · Pricing · E-Invoice (MyInvois) · Accountants · About · Contact · Help (with topic + article detail pages) · Legal (Privacy / Terms / DPA / Cookies / Hub).

Includes:

- **i18n EN/BM** via React Context + `localStorage` persistence
- Full **SEO metadata**, `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, OG image
- **JSON-LD**: Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList
- **PDPA-aligned** legal pages

## Local development

```bash
cd web
npm install
cp .env.example .env.local   # then edit values as needed
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
cd web
npm run build
npm start                    # serve the production build locally
```

## Deploying to Vercel

This repo uses Vercel's **monorepo Root Directory** pattern. The Next.js app lives in `web/`, so Vercel needs to be told that the deployable unit is `web/`, not the repo root.

### One-time project setup

1. Go to <https://vercel.com/new> and import `Fasttrade-Ventures/Buku-Cloud-Website`.
2. **Set "Root Directory" to `web`** in the import dialog (this is the critical step — without it Vercel will look for `package.json` at the repo root and fail).
3. Framework Preset will auto-detect as **Next.js**. Leave Build Command, Output Directory and Install Command on their defaults — `web/vercel.json` provides headers and pins the region to Singapore (`sin1`).
4. Add the environment variables below (Settings → Environment Variables).
5. Click **Deploy**. Subsequent pushes to `main` will auto-deploy production; pushes to other branches get preview deployments.

### Environment variables

All vars are public (`NEXT_PUBLIC_*`) and used at build time for SEO + CTA URLs. Set each in Vercel for the **Production**, **Preview**, and **Development** environments as appropriate. The full list lives in [`web/.env.example`](web/.env.example).

| Variable | Required | Example | Notes |
|---|---|---|---|
| `NEXT_PUBLIC_APP_URL` | Yes | `https://app.bukucloud.com` | Base URL of the BukuCloud SaaS app. Used to build the `/register` and `/register/practice` CTAs. Use `https://staging-app.bukucloud.com` for Preview, `http://127.0.0.1:8000` for local dev. |
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://bukucloud.com` | Canonical base URL of this marketing site. Used for `sitemap.xml`, `robots.txt`, Open Graph image URLs and canonical `<link>` tags. Use the Vercel preview URL for Preview. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | `abc123…` | Google Search Console verification token. Leave empty until the property is claimed. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional | `abc123…` | Bing Webmaster Tools verification token. Leave empty until the property is claimed. |

### Custom domain

1. In Vercel → Project → Settings → **Domains**, add `bukucloud.com` and `www.bukucloud.com`.
2. Vercel will show the DNS records to add at your domain registrar:
   - **Apex** `bukucloud.com` → `A` record to `76.76.21.21` (or follow Vercel's current instructions).
   - **www** `www.bukucloud.com` → `CNAME` to `cname.vercel-dns.com`.
3. Pick one as the canonical (usually the apex) and set the other to redirect. Vercel issues and renews TLS certificates automatically.
4. After DNS propagates, update `NEXT_PUBLIC_SITE_URL` to `https://bukucloud.com` in Production env vars and redeploy.

### Why `web/` is the Root Directory (not a root `vercel.json`)

Vercel officially supports per-project root directories for monorepos and this approach is more reliable than wrapping the build in a `cd web && …` command at the repo root. It also lets `web/vercel.json` (regional pin + security headers) be picked up correctly, and preserves Vercel's smart Next.js detection (ISR, image optimization, edge runtime, build caching).

If you ever switch to the wrapper approach instead, create `vercel.json` at the repo root with a `buildCommand` like `cd web && npm install && npm run build` and clear the Root Directory setting in the Vercel project.

## Designs

The Pencil design file lives at `designs/bukucloud.pen` and is the source of truth for the design system (color tokens, fonts, spacing, 14 reusable components) and 13 page layouts. Open it with the Pencil extension in Cursor — see `docs/` for the spec.

## License

Proprietary — © Fasttrade Ventures. All rights reserved.
