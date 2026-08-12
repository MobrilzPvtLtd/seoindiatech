# Phase 4 — Sitemap lastmod Fix Report

**Date:** 2026-08-12  
**Scope:** Sitemap `lastmod` handling only — no routes, canonical, content, or metadata changes.

---

## Changed

| File | Change |
|------|--------|
| `utils/sitemapBuilder.js` | Replaced `datePublished` / legacy invented dates with `dateModified`-only lastmod logic |

**Not modified:** `blogCatalog.js` (including all `datePublished` values), `sitemap-paths.mjs`, `generate-sitemap.mjs`, `validate-sitemap.mjs`, pages, robots, schema, internal links, city/industry content.

---

## Before

1. `BLOG_LASTMOD` mapped every premium blog slug → `blogCatalog.datePublished`.
2. `LEGACY_BLOG_LASTMOD` supplied hard-coded dates for 8 legacy slugs (invented stable dates).
3. `getLastmodForPath()` returned those values for `/blog/*` paths.
4. Non-blog URLs: no `lastmod` (unchanged).
5. Result: **28 blog URLs** had `<lastmod>` in sitemap, including **7 future dates** after 2026-08-12.

---

## After

1. `resolveBlogLastmod(entry)` reads **only** `entry.dateModified` from `BLOG_CATALOG`.
2. Validates ISO `YYYY-MM-DD` format.
3. **Omits** lastmod if `dateModified` is missing, invalid, or **after today** (local calendar date).
4. **Never** uses `datePublished`, build date, or invented legacy dates.
5. Removed `LEGACY_BLOG_LASTMOD` entirely (no speculative dates).
6. Non-blog URLs: still no `lastmod` (unchanged).

**Current catalog state:** No `dateModified` fields in `blogCatalog.js` → all blog URLs omit `<lastmod>` until real `dateModified` is added on content edits.

**Website publishing metadata:** `buildPremiumBlogPost.js` still sets `datePublished` and `dateModified: entry.datePublished` for on-page/schema display — **not changed**.

---

## Future dates removed

These 7 URLs previously had **future** `<lastmod>` (now omitted — no `<lastmod>` tag):

| URL path | Previous lastmod |
|----------|------------------|
| `/blog/chatgpt-seo-ai-search-organic-traffic` | 2026-08-13 |
| `/blog/seo-roi-calculator-measure-success` | 2026-08-15 |
| `/blog/technical-seo-checklist-enterprise-websites` | 2026-08-17 |
| `/blog/core-web-vitals-optimization-guide` | 2026-08-19 |
| `/blog/content-marketing-strategy-qualified-leads` | 2026-08-21 |
| `/blog/link-building-guide-2026` | 2026-08-23 |
| `/blog/seo-checklist-small-businesses-europe` | 2026-08-25 |

**Also removed (past but non-modification dates):** All other blog `<lastmod>` tags that were derived from `datePublished` or legacy hard-coded map (21 additional blog URLs). This aligns with audit rule: omit when no reliable `dateModified`.

---

## URLs

| Metric | Before | After |
|--------|--------|-------|
| Sitemap URL count | 115 | 115 |
| URLs added | — | 0 |
| URLs removed | — | 0 |
| `<lastmod>` tags in sitemap | 28 | **0** |

---

## QA

| Check | Result |
|-------|--------|
| URL count | **115** (`validate-sitemap.mjs` + postbuild) |
| HTTP 200 (live production) | **115/115** |
| Redirects in sitemap URLs | **0** |
| Noindex in sitemap URLs | **0** |
| Canonical mismatches | **0** |
| Future `<lastmod>` values | **0** |
| Any `<lastmod>` in `public/sitemap.xml` | **0** (none emitted) |
| XML validity | **Pass** (`validate-sitemap.mjs`) |
| `npm run build` + postbuild sitemap | **Pass** |

**Commands run:**

```text
node scripts/generate-sitemap.mjs
node scripts/validate-sitemap.mjs
npm run build
node scripts/generate-sitemap-url-audit.mjs
```

---

## Operational note for future edits

When a blog post is **actually modified**, add or update `dateModified` in `utils/blog/premium/blogCatalog.js` for that slug (keep `datePublished` as publishing metadata). Next build will emit `<lastmod>` only for that entry, and only if the date is not in the future.

---

## Phase 4 sign-off

```text
115 URLs
0 redirects
0 noindex
0 canonical mismatch
0 future lastmod
XML valid
Build successful
```

**Ready for Phase 5:** Homepage SEO — audit current title, meta, H1, headings, copy, links, and schema before targeted optimisation (homepage ~675 GSC impressions — preserve and improve, not rewrite blindly).
