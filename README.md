# BukuCloud Landing Site — Designs

Pencil design files for the **bukucloud.com** marketing site.

The actual SaaS app (Laravel + React) lives in the sibling folder `../accounting-saas/` and runs at `app.bukucloud.com`. This folder is **designs only** — no application code.

## Folder layout

```
bukucloud-landing/
├── designs/
│   └── bukucloud.pen        # Pencil file — design system + 13 page layouts
├── docs/
│   └── 2026-06-01-bukucloud-landing-design.md   # design spec (source of truth)
├── assets/
│   └── exports/             # PNG exports of key screens (for review / sharing)
└── README.md
```

## How to open the designs

The `.pen` files are encrypted Pencil-editor files. Open them with the **Pencil** extension in Cursor:

1. Install the Pencil app and the Pencil MCP server (see `~/.cursor/mcp.json`)
2. Open `designs/bukucloud.pen` in the Pencil editor
3. The file contains the design system at the top of the canvas, with all 13 page layouts arranged below

## What's in `bukucloud.pen`

### Design system (top of canvas, all `reusable: true`)

14 reusable components, exactly per §3.7 of the spec:

1. **Button / Primary** — terracotta fill, white text, 12px radius, no shadow
2. **Button / Secondary** — transparent, 1.5px ink border, ink text
3. **Button / Ghost** — text only with arrow → for tertiary CTAs
4. **Nav Bar** — logo · 5 nav links · EN/BM toggle pill (EN active) · Log in · Start free →
5. **Eyebrow Label** — small caps, +tracking, ink-muted, with 24px line
6. **Section Heading** — Fraunces eyebrow + display heading
7. **Card / Feature** — cream bg, 1px border, icon top-left, heading, body, link
8. **Card / Pricing** — white surface, Popular badge, mono price, feature list
9. **Card / Testimonial** — cream, Fraunces italic quote, attribution + stat
10. **Stat Block** — large mono number + small sans label
11. **FAQ Row** — border-bottom, plus toggle, smooth expand
12. **Footer** — 4 columns + brand col + lang toggle + PDPA notice
13. **Inline Badge** — small pill with dot, used for "MyInvois Ready" etc.
14. **Section Divider** — batik-inspired wave motif (path geometry, single weight)

### Variables (color tokens, fonts, spacing)

All design tokens from §3.2–§3.4 are defined as Pencil variables — referenced as `$bg-cream`, `$accent`, `$font-display`, `$space-8`, etc. Single source of truth: change one value, the whole document updates.

### Page layouts (13 frames at the document root)

| # | Page | Frame name | Width |
|---|---|---|---|
| 1 | Home | `Page / Home` | 1440 |
| 2 | Features | `Page / Features` | 1440 |
| 3 | Pricing | `Page / Pricing` | 1440 |
| 4 | E-Invoice (MyInvois) | `Page / E-Invoice` | 1440 |
| 5 | For Accountants | `Page / For Accountants` | 1440 |
| 6 | Customer Stories | `Page / Stories` | 1440 |
| 7 | Security & Data | `Page / Security` | 1440 |
| 8 | About | `Page / About` | 1440 |
| 9 | Resources / Blog | `Page / Resources` | 1440 |
| 10 | Contact / Demo | `Page / Contact` | 1440 |
| 11 | Help Center | `Page / Help Center` | 1440 |
| 12 | Legal Template (Privacy as exemplar) | `Page / Legal Template (Privacy)` | 1440 |
| 13 | Home (Mobile variant) | `Page / Home (Mobile)` | 390 |

Every page uses the reusable Nav Bar and Footer components. Edits to those components propagate to every page.

## Design direction (short summary)

**Warm Malaysian + editorial typography.** Cream `#FAF7F2` background, terracotta `#C0492E` + forest `#0F4C3A` + mustard `#D4A537` accents, Fraunces serif headlines, JetBrains Mono for prices ("RM 79" reads like a ledger entry).

Distinctive choices vs generic AI SaaS templates (per §7 of spec):

- Asymmetric hero with hard shadow (no soft drop-shadow)
- Flat warm cream background, no gradients
- Single-weight line drawings, no isometric SaaS illustrations
- Editorial 2x2 grid with eyebrow + serif heading
- EN/BM language toggle in the nav (currently English-only — BM translation handled in a later pass)

See `docs/2026-06-01-bukucloud-landing-design.md` for the full spec, rationale, and section-by-section breakdown.

## Status

- [x] Design spec written
- [x] Spec reviewed and approved by Asyraf
- [x] Variables / design tokens defined
- [x] 14 reusable components built
- [x] All 12 desktop page layouts created
- [x] Mobile variant of Home created
- [x] Brand assets integrated (favicon + "buku" + "cloud" wordmark)
- [x] All copy converted to English (BM translation deferred to a later phase)
- [ ] PNG exports to `assets/exports/` (pending — re-run after Pencil file is saved to disk)
- [ ] Pencil designs reviewed by Asyraf
- [ ] BM translation pass

## Re-running exports

If the `assets/exports/` folder is empty, exports can be re-run from inside the Pencil app, or via MCP one page at a time:

```
export_nodes(filePath: "designs/bukucloud.pen", nodeIds: ["<frame-id>"], outputDir: "<absolute path>", format: "png", scale: 1.5)
```

Frame IDs for the 13 pages can be found via `batch_get` (search for nodes with name pattern `^Page /`).

## Next phase (out of scope here)

Once designs are approved:

1. Real customer photography + quotes (replace placeholder grey blocks)
2. Real product screenshots from `../accounting-saas/` (replace stylized mockups)
3. Native-speaker BM translation pass (designs are now English-only; BM strings to be added per §5.2 of the spec)
4. Implementation in code (framework TBD — Next.js most likely)
