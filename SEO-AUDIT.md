# SEO India Tech — Full Website SEO Audit (Phase 1 + Implementation)

**Site:** https://www.seoindiatech.com  
**Audit date:** 2026-08-11  
**Implementation completed:** 2026-08-11  
**Auditor scope:** Static codebase analysis + existing audit scripts (`check-seo`, `check-headings`, `seo:audit-technical`, `seo:audit-links`, `seo:keyword-architecture`)  
**GSC performance export:** Not found in repository — keyword opportunities below are taken from the project brief and existing query-classification docs. **Import a GSC 28-day export to validate impressions, CTR, and positions before prioritizing fixes.**

**Implementation status:** Phases A–G completed per [IMPLEMENTATION-PLAN.md](docs/seo-master-plan/IMPLEMENTATION-PLAN.md). See [SEO-IMPLEMENTATION-REPORT.md](docs/seo-master-plan/SEO-IMPLEMENTATION-REPORT.md).

**Planning artifacts:**

- [KEYWORD-URL-MAPPING.md](KEYWORD-URL-MAPPING.md) — keyword → canonical URL table  
- [IMPLEMENTATION-PLAN.md](docs/seo-master-plan/IMPLEMENTATION-PLAN.md) — phases A–G (implemented)  


## 1. Technical stack summary

| Area | Finding |
|------|---------|
| **Framework** | Next.js 16.1.x (Pages Router) |
| **Hosting** | Netlify (`netlify.toml`, `@netlify/plugin-nextjs`) |
| **Styling** | Tailwind CSS v4, `@tailwindcss/typography` |
| **Rendering** | **Hybrid SSG + static prerender + selective CSR** — service hubs, industries, cities, blogs use `getStaticPaths` / `getStaticProps`; homepage uses `dynamic()` for below-fold sections; sitemap uses `getServerSideProps` |
| **Routing** | File-based `pages/` — no App Router |
| **SEO head** | `component/common/SeoHead.js` → `SEO.js` (title, description, canonical, robots, OG, Twitter) + optional `JsonLd` |
| **Metadata registries** | `utils/pageSeoRegistry.js` (core pages), premium builders for services/industries/blogs |
| **Canonical host** | `https://www.seoindiatech.com` (`utils/siteConfig.js`) |
| **Sitemap** | Dynamic `pages/sitemap.xml.js` — **115 URLs** from `utils/seoRoutes.js` |
| **robots.txt** | `public/robots.txt` — allows crawlers; disallows `/api/`, `/new`, `/old` |
| **Redirects** | `next.config.mjs` + `netlify.toml` (apex/http → www HTTPS) |
| **Schema** | `utils/schemaBuilders.js`, `PremiumServiceSchema`, location/blog builders |
| **Internal linking** | `utils/internalLinks.js`, Excel link matrix (`utils/seo/excelLinkMatrix.js`) |
| **Analytics** | Deferred GTM (`GTM-5TS8QJRM`) + deferred GA4 gtag (`G-VMZHW0JYVN`) |
| **Live URL count** | **115** indexable routes in sitemap (build output: 120 page files including 404, noindex stubs) |

---

## 2. Severity summary (post-implementation)

| Severity | Open | Resolved in implementation |
|----------|------|----------------------------|
| **CRITICAL** | 0 | — |
| **HIGH** | 0 | Technical SEO page created; `/services/seo` hub expanded; contact de-cannibalization |
| **MEDIUM** | 5 | 14 broken matrix links removed; matrix synced for technical + international SEO |
| **LOW** | 6 | Optional robots rule, legacy routes, consent, field-data CWV, duplicate matrix pairs |

**Open MEDIUM items:** 64 matrix orphan pages (mostly industries/blogs — contextual links only where appropriate); 2 blog related-reading matrix links not yet in source HTML; GSC baseline not in repo; Europe-focused blog corpus vs India commercial focus; Core Web Vitals field data not validated.

---

## 3. Site-wide issues

| URL / Scope | Issue | Severity | SEO impact | Recommended solution |
|-------------|-------|----------|------------|-------------------|
| **Site-wide** | No `/services/technical-seo` landing page | **HIGH** | Queries such as *technical seo services india*, *technical seo company india*, *technical seo agency india* lack a dedicated commercial URL; intent may land on blog checklist or generic `/services/seo`, weakening relevance and CTR | Create or designate ONE technical SEO service page at `/services/technical-seo` (preferred) with unique metadata and internal links; do not duplicate on multiple URLs |
| **Site-wide** | GSC keyword clusters *seo marketing india* / *seo marketing in india* not mapped to a single URL | **HIGH** | Commercial modifiers may split between homepage (`AI-Powered SEO & Digital Marketing`) and `/services/seo`; dilutes authority for page-2/page-3 queries | Map to `/services/seo` as supporting section; reduce homepage commercial SEO targeting; add contextual links with varied anchors |
| **Site-wide** | `/contact-us` (and legacy `/contactus`) competing for generic SEO queries in GSC | **HIGH** | Contact page captures impressions for *seo india*, *seo agency india*, etc. instead of `/services/seo` — classic cannibalization | Keep contact indexable but contact-focused title/meta/H1; prominent link to `/services/seo`; verify in GSC after deploy |
| **Site-wide** | `/services/seo` commercial depth below Phase 5 target (~2,500–3,500 words, structured H2/H3) | **HIGH** | Primary money page may under-rank vs competitors for core India SEO terms despite metadata updates | Expand hub content per approved outline (services offered, process, industries, FAQs) without filler or keyword stuffing |
| **Site-wide** | 65 pages flagged as link-matrix orphans (mostly industries + 4 blogs) | **MEDIUM** | Weak internal paths reduce crawl priority and topical authority flow to commercial pages | Add hub/nav/contextual links from `/industries`, `/services/seo`, and related blogs — prioritize optometrist, wineries, priority industries |
| **Site-wide** | 14 invalid internal links in Excel matrix → unpublished blog | **MEDIUM** | Planned links point to `/blog/google-core-update-may-2026-seo-content-strategy-agentic-ai` (not live) | Remove matrix links or publish article; fix blog `relatedBlogSlugs` references |
| **Site-wide** | Excel link matrix out of sync with live site (`/services/international-seo` live but not in matrix) | **MEDIUM** | New commercial page under-linked in documented matrix | Regenerate matrix / add international-seo hub links |
| **Site-wide** | 41 duplicate matrix link pairs | **LOW** | Redundant crawl paths; minor efficiency loss | Deduplicate matrix rows in `excelLinkMatrix` data |
| **Site-wide** | Europe-focused blog corpus vs India commercial focus | **MEDIUM** | Many top blogs target *Europe* intents; may attract irrelevant impressions and waste crawl equity | Classify GSC queries (Category E irrelevant); strengthen India commercial internal links from India-relevant posts only |
| **Site-wide** | GSC / GA4 baseline metrics not in repo | **MEDIUM** | Cannot verify striking-distance keywords (pos 20–50) without export | Export GSC 28-day Performance + Pages; populate `docs/seo-master-plan/seo-baseline.md` |
| **Site-wide** | No cookie/consent / Consent Mode v2 | **LOW** | EU traffic may have compliance risk; does not block indexing | Configure in GTM if EU is a target market |
| **Site-wide** | GA4 direct gtag + GTM both load | **LOW** | Risk of duplicate pageviews if GA4 Configuration tag also exists in GTM UI | Disable duplicate GA4 tag in GTM or document single source of truth |
| **Site-wide** | Core Web Vitals not validated with field data | **MEDIUM** | LCP/INP/CLS targets (2.5s / 200ms / 0.1) unconfirmed in CrUX | Run PageSpeed/CrUX on homepage, `/services/seo`, `/contact-us`; address hero images, third-party scripts |
| **Site-wide** | `lenis` smooth scroll + `framer-motion` sitewide | **LOW** | Potential INP regression on interaction-heavy pages | Defer Lenis; audit motion on mobile; verify INP in field data |
| **robots.txt** | `_next/static` not disallowed | **LOW** | Minimal — Google handles static assets | Optional `Disallow: /_next/` if crawl budget concern |
| **Sitemap** | 114 URLs; blogs have `lastmod`, other URLs omit it | **LOW** | Acceptable — avoids fake freshness signals | Add `lastmod` only when content materially changes |

---

## 4. URL-level issues (priority commercial & architecture)

| URL | Issue | Severity | SEO impact | Recommended solution |
|-----|-------|----------|------------|-------------------|
| `/services/seo` | H1 is *SEO Services in India for Sustainable Organic Growth* — good but page needs deeper commercial sections per Phase 5 outline | **HIGH** | Core cluster (*seo india*, *indian seo company*, *seo agency in india*) depends on this URL | Implement H2/H3 structure: services offered, India strategy, process, industries, case studies (verified only), FAQs |
| `/services/seo` | Title uses *SEO Agency in India* vs brief example *SEO Services in India* | **MEDIUM** | Minor SERP mismatch vs highest-impression query *seo india* / *seo services india* | A/B test title toward *SEO Services in India \| SEO India Tech* while keeping description natural |
| `/services/technical-seo` | **Page does not exist** | **HIGH** | Technical SEO commercial cluster has no primary URL | Add premium service page; map from blog technical checklist via internal links |
| `/services/local-seo-service` | Metadata aligned; verify *local seo services* (generic) vs India modifiers | **MEDIUM** | Generic *local seo services* may compete with city pages | Keep India modifiers primary; link to city pages with varied anchors |
| `/services/e-commerce-seo` | Canonical for WooCommerce cluster; `/services/woocommerce-seo` is 301 alias | **LOW** | Acceptable consolidation | Keep 301; ensure on-page mentions WooCommerce naturally |
| `/services/ui-ux-design` | Canonical for web-design SEO; `/services/seo-web-design` is 301 alias | **LOW** | Same as above | Keep 301; strengthen SEO+design copy |
| `/services/international-seo` | New page — thin matrix coverage | **MEDIUM** | Under-linked vs `/services/seo` hub | Add to hub child services, homepage band, matrix |
| `/contact-us` | GSC impressions for generic SEO terms | **HIGH** | Cannibalization with `/services/seo` | Contact-focused metadata; link to SEO hub (partial fix in codebase — verify live) |
| `/contactus` | Legacy URL still in GSC | **MEDIUM** | 301 to `/contact-us` exists — correct | Monitor GSC redirect recognition; no content on legacy URL |
| `/` | Homepage title targets broad *AI-Powered SEO & Digital Marketing* | **MEDIUM** | May compete with `/services/seo` for commercial queries | Homepage = brand + overview; push commercial India terms to `/services/seo` |
| `/seo-packages` | Commercial adjacent page | **LOW** | Possible overlap with service pricing intent | Clear differentiation: packages vs services hub |
| `/industries/wineries-seo` | Needs Phase 14 topical sections (tourism, ecommerce, local) | **MEDIUM** | *winery seo* / *seo for wineries* — improve depth not duplicates | Expand premium override sections; link to local + content marketing |
| `/industries/optometrist-seo` | Needs Phase 14 healthcare/local sections | **MEDIUM** | *optometrist seo* / *eye care seo* | Expand GBP, local, patient content sections |
| `/seo-services/seo-services-in-noida` | Sector 63 metadata updated; body still template-heavy | **MEDIUM** | Doorway risk if cities are near-duplicates | Keep Noida Sector 63 facts (real address); unique local proof |
| `/seo-services/seo-services-in-delhi` | Same template pattern across 11 cities | **MEDIUM** | Medium duplicate risk across city pages | Audit GSC per city; retain only cities with business value |
| `/blog/technical-seo-checklist-enterprise-websites` | Informational URL for technical SEO cluster | **MEDIUM** | May cannibalize future `/services/technical-seo` | After technical page exists, link blog → service; differentiate intent |
| `/blog/how-to-choose-best-seo-agency-india` | Marked EXPAND in content audit | **MEDIUM** | Striking-distance informational → commercial bridge | Expand and link to `/services/seo` |
| `/blog/google-core-update-may-2026-*` | In matrix but **not published** | **MEDIUM** | 14 broken internal link targets | Publish or remove all references |
| `/new`, `/old` | Routes exist with `noindex`; also redirected | **LOW** | Crawl noise | Acceptable; robots disallow + redirect |
| `/404` | Custom 404 with `noindex` + recovery links | **LOW** | Correct | No change |

---

## 5. Technical SEO checklist (Phase 1 status)

| Check | Status | Notes |
|-------|--------|-------|
| Canonical tags on indexable pages | **PASS** | `SeoHead` / `SEO.js`; `check-seo` passes 37 page entry files |
| XML sitemap | **PASS** | 114 URLs, www HTTPS, validates post-build |
| robots.txt | **PASS** | Important paths crawlable; API blocked |
| HTTP → HTTPS | **PASS** | HSTS + Netlify redirects |
| www consistency | **PASS** | Apex → www 301 in `netlify.toml` |
| Trailing slash | **PASS** | `/contact-us/` → `/contact-us` 301; canonicals without trailing slash |
| Redirect chains | **PASS** | Single-hop 301s configured |
| Redirect loops | **PASS** | None detected |
| Broken internal links (code) | **MEDIUM** | 14 matrix links to unpublished blog |
| 404 handling | **PASS** | Custom `/404` |
| Duplicate URLs | **LOW** | Alias redirects consolidate WooCommerce/web-design/locations |
| Parameter URLs | **PASS** | No indexed query-param routes in sitemap |
| Orphan pages | **MEDIUM** | 65 matrix orphans; blogs/industries low inbound |
| Accidental noindex | **PASS** | Only 404, /new, /old, not-found stubs |
| Canonical conflicts | **PASS** | None detected in technical audit |
| Sitemap accuracy | **PASS** | Matches live routes including `international-seo` |
| Schema JSON-LD | **PASS** | Organization, WebSite, WebPage, Service, Breadcrumb, FAQ where implemented |
| Fake aggregateRating | **PASS** | Not present in schema helpers |
| Mobile viewport | **PASS** | `viewport` in `SEO.js` |
| Image formats | **PASS** | AVIF/WebP via `next/image` config |
| Font loading | **PASS** | `next/font` with `display: swap` (Plus Jakarta Sans, Inter) |

---

## 6. Keyword architecture gaps (vs Phase 2–3 brief)

| Keyword cluster | Intended primary URL | Current state | Gap |
|-----------------|-------------------|---------------|-----|
| India commercial SEO (23+ terms) | `/services/seo` | Mapped in `keywordArchitecture.js`; metadata updated | **Content depth + internal links** still needed |
| Technical SEO India | `/services/technical-seo` | **Missing page** | **HIGH** — create page |
| Local SEO India | `/services/local-seo-service` | Exists | Minor metadata/linking |
| Content marketing India | `/services/content-marketing` | Exists | OK |
| Social media India | `/services/social-media-marketing` | Exists | OK |
| WooCommerce SEO India | `/services/woocommerce-seo` → `/services/e-commerce-seo` | 301 alias | OK if canonical clear |
| International SEO India | `/services/international-seo` | Exists (new) | Matrix + linking |
| SEO web design India | `/services/seo-web-design` → `/services/ui-ux-design` | 301 alias | OK |
| Winery SEO | `/industries/wineries-seo` | Exists | Expand topical sections |
| Optometrist SEO | `/industries/optometrist-seo` | Exists | Expand topical sections |
| SEO marketing India | Not explicitly mapped | Homepage + `/services/seo` overlap | **Assign to `/services/seo`** |
| Noida Sector 63 / Delhi | City URLs under `/seo-services/*` | Exists | Strengthen unique local content |

---

## 7. GSC-driven priorities (requires export validation)

Based on the brief’s highest-priority opportunities (positions ~20–50, strong impressions):

| Priority | Query theme | Target URL | Action |
|----------|-------------|------------|--------|
| P0 | seo india, seo in india, india seo | `/services/seo` | Expand content, title CTR test, internal links from homepage/contact |
| P0 | seo agency india, indian seo agency, seo agency in india | `/services/seo` | Same |
| P0 | seo services india, indian seo company, seo india company | `/services/seo` | Same |
| P1 | technical seo services india, technical seo company india | `/services/technical-seo` | **Create page** |
| P1 | seo marketing india, seo marketing in india | `/services/seo` | Dedicated section + de-emphasize homepage |
| P1 | professional seo india, india seo firm | `/services/seo` | Natural copy in hub |
| P2 | local seo services in india | `/services/local-seo-service` | Link from SEO hub |
| P2 | content / social / international / WooCommerce clusters | Respective service URLs | Maintain one URL per cluster |

**Note:** Upload GSC Performance CSV to validate clicks, impressions, CTR, and average position before implementation.

---

## 8. Planned changes (Phase 2+ — not implemented in Phase 1)

Execution order after audit approval:

1. **Technical fixes** — remove broken matrix links; sync sitemap/matrix for `international-seo`
2. **Create `/services/technical-seo`** — premium service page with unique metadata
3. **Upgrade `/services/seo`** — Phase 5 content structure without filler
4. **De-cannibalize `/contact-us`** — verify live metadata and on-page focus
5. **Internal linking** — homepage → SEO hub → technical/local/international/ecommerce/industries/cities
6. **Industry pages** — wineries + optometrist topical expansion (Phase 14)
7. **Location audit** — Noida Sector 63 / Delhi uniqueness; avoid new city pages
8. **Schema** — Service + Breadcrumb on new technical page; FAQ where compliant
9. **CWV** — field measurement then image/script optimization
10. **Reports** — `SEO-IMPLEMENTATION-REPORT.md`, `KEYWORD-URL-MAPPING.md` after implementation

---

## 9. Validation commands (baseline)

```bash
npm run build
npm run check-seo
npm run check-headings
npm run seo:audit-technical
npm run seo:audit-links
npm run seo:keyword-architecture
npm run seo:analytics-health
```

## 10. Risks and constraints

- Rankings cannot be guaranteed; improvements target crawlability, intent alignment, and authority.
- Do not create doorway city pages or fake reviews/statistics.
- Do not mass-rewrite Europe-focused blogs unless GSC shows India opportunity.
- URL changes only with 301 + canonical + sitemap updates.
- Production redirects (`netlify.toml`, `next.config.mjs`) require deploy verification.

---

**Last known results (2026-08-11 post-implementation):** `npm run build` pass (115 sitemap URLs); `check-seo` pass (38 pages); technical audit 0 CRITICAL / 0 HIGH / 0 MEDIUM open; keyword architecture **0 issues**; link matrix **0 invalid destinations**, **100% URL alignment** (115/115); 64 orphan pages remain (by design — no artificial nav); 2 matrix blog cross-links not yet in source HTML.

---

## 11. Implementation summary (2026-08-11)

| Item | Status |
|------|--------|
| `/services/technical-seo` created | Done |
| `/services/seo` hub expanded (editorial, pillars, FAQs, internal links) | Done |
| `/contact-us` de-cannibalized | Done |
| 14 invalid blog matrix links removed | Done |
| Unpublished May 2026 blog excluded from routes/sitemap | Done |
| `/services/international-seo` + `/services/technical-seo` in matrix | Done |
| Wineries + optometrist industry expansions | Done |
| Noida + Delhi contextual internal links | Done |
| New redirects | None added (existing 301 aliases preserved) |
| Full report | [SEO-IMPLEMENTATION-REPORT.md](docs/seo-master-plan/SEO-IMPLEMENTATION-REPORT.md) |

---

*Phase 1 audit complete. Implementation phases A–G complete.*
