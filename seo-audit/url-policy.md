# URL Policy — SEO India Tech

**Locked:** 2026-08-13  
**Canonical host:** `https://www.seoindiatech.com`

## Rules

| Rule | Value |
|------|-------|
| Protocol | HTTPS only |
| Host | `www.seoindiatech.com` (apex → www 301) |
| Path trailing slash | **No** trailing slash on paths |
| Homepage sitemap `<loc>` | `https://www.seoindiatech.com` (no trailing slash) |
| Homepage canonical | `https://www.seoindiatech.com` via `absoluteUrl('/')` |
| Internal paths | `/services/seo` not `/services/seo/` |

## Redirects (301 permanent)

- `http://` → `https://`
- `seoindiatech.com` → `www.seoindiatech.com`
- URL aliases: `/contactus`, `/locations/*`, legacy service paths (see `next.config.mjs`, `netlify.toml`)
- Trailing slash on paths: `/:path/` → `/:path` (Next.js + Netlify)

## Sitemap alignment

Every sitemap `<loc>` must equal `absoluteUrl(path)` for that path.

## Noindex (not in sitemap)

- `/new`, `/old` (redirect to `/`, noindex on legacy routes)
- Hold industry/city pages when `SITEMAP_PUBLISH_MODE=indexed_waves` (see `sitemap-wave-plan.md`)

## Do not cite non-existent URLs

Example removed: `/industries/law-firm-seo` — use `/blog/seo-law-firms-complete-guide` for law firm SEO content.
