# Technical SEO Audit — SEO India Tech (Phase 1)

**Site:** https://www.seoindiatech.com  
**Audit date:** 2026-08-12  
**Scope:** Full codebase inspection — **no code changes in this phase**  
**GSC baseline (provided):** ~28.3K impressions · 67 clicks · 0.2% CTR · avg. position 43.7

**Related outputs:** [url-inventory.csv](./url-inventory.csv) · [keyword-url-map.md](./keyword-url-map.md)

---

## 1. Framework / CMS

| Item | Finding |
|------|---------|
| Framework | **Next.js 16.1.x** (Pages Router) |
| Language | JavaScript (React 19) |
| Styling | Tailwind CSS v4, `@tailwindcss/typography` |
| Hosting | **Netlify** (`netlify.toml`, `@netlify/plugin-nextjs`) |
| Rendering | **Hybrid SSG + selective CSR** — blogs, industries, cities, service hubs use `getStaticPaths`/`getStaticProps`; homepage below-fold sections use `dynamic()` |
| Analytics | Deferred GTM + GA4 (`G-VMZHW0JYVN`) via `component/tracking/DeferredGtm.js` |
| Canonical host | `https://www.seoindiatech.com` (`utils/siteConfig.js`) |

---

## 2. Routing structure

**Router:** File-based `pages/` (no App Router).

| Route pattern | Example | Rendering |
|-------------|---------|-----------|
| Static pages | `/`, `/contact-us`, `/blog` | Static |
| Service leaf | `/services/technical-seo` | Static (premium template) |
| Service hub | `/services/seo`, `/services/digital-marketing` | SSG `[slug].js` |
| Industry | `/industries/[slug]` | SSG (41 industries) |
| City | `/seo-services/[slug]` | SSG (11 cities) |
| Blog | `/blog/[slug]` | SSG (28 published posts) |
| Solution | `/solution/*` | Static |
| API | `/api/*` | Server — blocked in robots |
| Legacy stubs | `/new`, `/old` | noindex + 301 to `/` |

**Indexable URL count (sitemap):** **115**

---

## 3. All existing URLs (summary)

See **[url-inventory.csv](./url-inventory.csv)** for the full list with metadata.

| Category | Count |
|----------|-------|
| Core / legal / about | 7 |
| Service pages + hubs | 24 |
| Industry pages + hub | 42 |
| City pages | 11 |
| Blog posts + hub | 29 |
| Solution pages | 5 |
| **Total in sitemap** | **115** |

**Not in sitemap (intentional):** `/404`, `/new`, `/old`, `/api/*`, unpublished draft blog slug (filtered in `utils/blog/index.js`).

---

## 4. Metadata implementation

| Layer | Location | Usage |
|-------|----------|-------|
| Static registry | `utils/pageSeoRegistry.js` | Homepage, contact, blog hub, industries hub, legal |
| Premium service | `utils/services/premium/serviceOverrides.js` | Per-service title, description, H1 |
| SEO hub | `utils/services/premium/seoHubExpandedContent.js` | `/services/seo` override |
| Premium industry | `utils/industries/premium/buildPremiumContent.js` + profiles + `keywordIndustryOverrides.js` |
| City pages | `utils/locations.js` | Per-city title, description, heading |
| Component | `component/common/SeoHead.js` → `SEO.js` | Canonical, robots, OG, Twitter, preload |

---

## 5. Title tags (priority pages)

| URL | Current title (codebase) |
|-----|--------------------------|
| `/` | AI-Powered SEO & Digital Marketing Agency \| SEO India Tech |
| `/services/seo` | SEO Services in India \| SEO India Tech |
| `/services/technical-seo` | Technical SEO Services in India \| Technical SEO Company \| SEO India Tech |
| `/services/local-seo-service` | Local SEO India \| Local SEO Services in India \| SEO India Tech |
| `/services/e-commerce-seo` | WooCommerce SEO Agency in India \| E-Commerce SEO \| SEO India Tech |
| `/industries/wineries-seo` | SEO for Wineries \| Wine Industry Search Optimization \| SEO India Tech |
| `/industries/optometrist-seo` | SEO for Optometrists & Eye Care Practices \| SEO India Tech |
| `/industries/accountants-seo` | Premium template (built from catalog — no keyword override file) |
| `/industries/doctor-physician-seo` | Premium template (profile-driven content) |
| `/contact-us` | Contact SEO India Tech \| Free Consultation & Project Enquiry |

---

## 6. Meta descriptions (priority pages)

Documented in [url-inventory.csv](./url-inventory.csv). Priority commercial pages have unique descriptions in overrides/registry. Homepage description emphasizes global AI/digital marketing, not *SEO Company India* cluster.

---

## 7. H1 / H2 / H3 structure

| URL | H1 (rendered / configured) | Notes |
|-----|----------------------------|-------|
| `/` | **Search & Performance Marketing Agency** (`Hero.js`) | Does not match Phase 4 target *SEO Company in India* |
| `/services/seo` | SEO Services in India | Aligns with hub override |
| `/services/technical-seo` | Technical SEO Services That Fix What Blocks Rankings | Single H1 |
| `/services/local-seo-service` | Local SEO Services That Put You in the Map Pack | Single H1 |
| `/services/e-commerce-seo` | (WooCommerce/ecommerce hero in override) | Premium template sections |
| `/industries/wineries-seo` | Search Engine Optimization for Wineries and Wine Brands | Override; could simplify to *SEO for Wineries* |
| `/contact-us` | Let's Start a Conversation | Enquiry-focused — appropriate |

**Premium templates** use consistent section H2s: Why It Matters, Programs, Process, FAQ, CTA. Heading hierarchy generally logical; `npm run check-headings` passes.

---

## 8. Canonicals

| Check | Status |
|-------|--------|
| Implementation | `SEO.js` — `canonical` prop or `absoluteUrl(path)` |
| Host | `https://www.seoindiatech.com` |
| Trailing slash | Stripped on paths (homepage = bare domain) |
| Homepage | `https://www.seoindiatech.com` (no trailing slash — minor vs path URLs) |
| Conflicts detected | None in automated audit |

---

## 9. Robots directives

| Source | Rule |
|--------|------|
| `public/robots.txt` | `Allow: /` for `*` and explicit `Googlebot` |
| Disallow | `/api/`, `/new`, `/old` |
| Page-level | `index, follow, max-image-preview:large` default in `SEO.js` |
| noindex pages | `/404`, `/new`, `/old`, not-found stubs, missing blog slug |

---

## 10. Sitemap implementation

| Item | Finding |
|------|---------|
| File | **Static** `public/sitemap.xml` (generated at build via `scripts/generate-sitemap.mjs`) |
| Postbuild | `generate-sitemap.mjs` + `validate-sitemap.mjs` |
| URL count | **115** |
| Host | www HTTPS only |
| lastmod | Blog URLs only (no fake sitewide timestamps) |
| Draft blog | Excluded from sitemap |
| Historical note | Dynamic `pages/sitemap.xml.js` removed to avoid intermittent 500 errors |

---

## 11. robots.txt

- Crawlable root, sitemap declared: `https://www.seoindiatech.com/sitemap.xml`
- AI crawlers explicitly allowed (GPTBot, Google-Extended, etc.)
- `/api/` blocked — correct
- Optional LOW: `_next/static` not disallowed (generally fine)

---

## 12. Schema markup

| Type | Where |
|------|-------|
| Organization | Sitewide graph, homepage, contact |
| WebSite | Homepage, layout builders |
| WebPage | Premium pages |
| Service | Service + industry premium templates |
| BreadcrumbList | Premium templates, homepage |
| FAQPage | Homepage, service/industry pages with FAQ blocks |
| HowTo | Some service pages |
| Article | Blog posts |
| ContactPage | Contact |
| City | Location pages |

**Rules compliance:** No fake `aggregateRating` in schema helpers. FAQ schema matches visible FAQ sections on templates.

**Helpers:** `utils/schemaBuilders.js`, `PremiumServiceSchema`, blog/location builders.

---

## 13. Internal links

| System | Path |
|--------|------|
| Navigation | Header mega-menu, footer (`component/layout/`) |
| Excel matrix | `utils/seo/excelLinkMatrixData.js` (747 rows) |
| Catalog | `utils/internalLinks.js` |
| Homepage bands | `SeoHubBand`, `Industries`, `CityLinksBand` |

**Audit (`npm run seo:audit-links`):**
- 0 invalid matrix destinations
- 64 matrix orphan pages (mostly industries + some blogs)
- 2 blog cross-links in matrix not present in source HTML

---

## 14. Broken links

| Issue | Severity |
|-------|----------|
| Matrix → unpublished May 2026 blog | **FIXED** (removed from matrix) |
| 2 planned blog cross-links missing in HTML | LOW |
| No widespread broken internal links in priority templates | — |

---

## 15. Images and ALT attributes

| Area | Finding |
|------|---------|
| Delivery | `next/image` with AVIF/WebP (`next.config.mjs`) |
| Heroes | Mix of SVG (`/images/services/heroes/`) and photos |
| ALT | Blog heroes use descriptive alt; some decorative SVG heroes use template alt text |
| Lazy loading | Default Next image behavior; LCP images use `priority` / preload where configured |
| Risk | Keyword-stuffed ALT not observed; some generic service illustration alts |

---

## 16. 404 handling

| Item | Status |
|------|--------|
| Custom `/404` | `pages/404.js` |
| noindex | Yes |
| Recovery links | Homepage, `/services/seo`, `/contact-us` |
| Soft 404 risk | Low on valid routes |

---

## 17. Redirects

**`next.config.mjs` (301):**

| Source | Destination |
|--------|-------------|
| `/new`, `/old` | `/` |
| `/contactus` | `/contact-us` |
| `/contact-us/` | `/contact-us` |
| `/services/pay-per-click` | `/services/ppc-advertising` |
| `/locations/noida` | `/seo-services/seo-services-in-noida` |
| `/locations/delhi` | `/seo-services/seo-services-in-delhi` |
| `/services/woocommerce-seo` | `/services/e-commerce-seo` |
| `/services/seo-web-design` | `/services/ui-ux-design` |

**`netlify.toml`:** apex/http → `https://www.seoindiatech.com` (301/force).

**Live note:** Netlify may return **308** for some app redirects (functionally OK; not a loop).

---

## 18. Duplicate URLs

| Variant | Handling |
|---------|----------|
| www vs apex | 301 to www |
| HTTP vs HTTPS | 301 to HTTPS |
| Trailing slash | `/contact-us/` → `/contact-us` |
| WooCommerce / web-design aliases | 301 to canonical service URLs |
| Duplicate sitemap entries | None (validation passes) |

---

## 19. Indexability problems

| Issue | Severity | Notes |
|-------|----------|-------|
| Accidental sitewide noindex | None found | — |
| New URLs not yet in Google index | Expected | Discovery lag after deploy |
| Contact page commercial impressions | MEDIUM | Do **not** noindex — de-cannibalize via intent separation |
| Homepage vs `/services/seo` overlap | MEDIUM | Both visible for India SEO terms |
| 64 low-inbound industry/blog URLs | LOW | Not an index block — crawl priority |

---

## 20. Open Graph / Twitter

Implemented in `SEO.js`: `og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`, `og:locale`, Twitter `summary_large_image`. Article OG tags on blog posts.

---

## 21. Breadcrumb implementation

- Visible breadcrumbs on premium service/industry templates
- JSON-LD `BreadcrumbList` via schema builders
- Homepage includes minimal breadcrumb schema (single Home item)

---

## 22. Performance problems (code review)

| Area | Finding | Severity |
|------|---------|----------|
| LCP | Hero images, `lcpImage` preload on key pages | Verify in field data |
| INP | GTM deferred; framer-motion; Lenis smooth scroll sitewide | MEDIUM — test mobile INP |
| CLS | `next/image` dimensions on blogs; hero sections need field check | MEDIUM |
| Fonts | `next/font` with `display: swap` | PASS |
| Third-party | GTM/GA4 deferred | LOW |
| Below-fold `dynamic()` | Homepage many sections client-loaded | LOW SEO risk (content in initial HTML for hero) |

**Automated audit:** `npm run seo:audit-technical` — 0 CRITICAL, 0 HIGH, 0 MEDIUM open; 1 LOW.

---

## 23. Mobile issues

| Check | Status |
|-------|--------|
| viewport meta | PASS (`SEO.js`) |
| Responsive layout | Tailwind breakpoints |
| Sticky mobile CTA | Industry premium templates |
| Mobile hero | Separate mobile hero image on some service pages |

---

## 24. JavaScript rendering / SEO

| Check | Status |
|-------|--------|
| Critical content in SSG HTML | PASS for services, industries, blogs |
| SeoHead in initial response | PASS |
| Homepage hero | SSR (`Hero` not dynamic) — H1 in HTML |
| Below-fold homepage | `dynamic()` — acceptable for supplementary sections |
| Client-only risk | LOW on money pages |

---

## 25. Crawlability problems

| Check | Status |
|-------|--------|
| robots.txt blocks Googlebot | **No** |
| Sitemap reachable | **Yes** (static `public/sitemap.xml`) |
| Important URLs return 200 | Verified on priority set (live + codebase) |
| Orphan commercial pages | `/services/technical-seo` now in sitemap + matrix |
| GSC "URL unknown" on new URLs | **Discovery delay** — not a robots block |

---

## Priority findings for later phases

| # | Finding | Severity | Phase |
|---|---------|----------|-------|
| 1 | Homepage title/H1 target *AI/digital marketing* not *SEO Company India* | HIGH | Phase 4 |
| 2 | Homepage vs `/services/seo` keyword overlap | HIGH | Phase 4 + mapping |
| 3 | Contact page has GSC impressions — keep indexable, enquiry-focused | HIGH | Maintain |
| 4 | Wineries page has impressions — preserve URL, improve content | HIGH | Phase 6 |
| 5 | Accountants/doctor-physician lack dedicated metadata overrides | MEDIUM | Phase 7 |
| 6 | 64 matrix orphan pages (industries/blogs) | MEDIUM | Phase 8 |
| 7 | Homepage canonical without trailing slash | LOW | Phase 3 optional |
| 8 | Field CWV not validated | MEDIUM | Phase 11 |

---

## Validation commands used

```bash
npm run seo:audit-technical
npm run seo:audit-links
npm run check-seo
npm run check-headings
node scripts/generate-seo-audit-inventory.mjs
```

---

*Phase 1 complete. No website code modified. Proceed to Phase 2 mapping, then phased implementation per specification.*
