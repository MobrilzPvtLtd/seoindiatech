# SEO Implementation Plan (Pre-Approval)

**Date:** 2026-08-11  
**Implementation status:** Complete (2026-08-11)  
**Constraint:** Do not deviate from approved URL architecture in [KEYWORD-URL-MAPPING.md](../../KEYWORD-URL-MAPPING.md)

**Audit:** [SEO-AUDIT.md](../../SEO-AUDIT.md)

---

## 1. URLs to CREATE

| URL | Purpose | Keyword cluster |
|-----|---------|-----------------|
| `/services/technical-seo` | New premium commercial service page | technical seo services india, technical seo company india, technical seo agency india, technical seo consultant india, technical seo services |

**Sitemap impact:** +1 URL (115 total after implementation).

---

## 2. URLs to CHANGE (path stays the same — content/metadata/links only)

| URL | Change type | Summary |
|-----|-------------|---------|
| `/services/seo` | **Major** | Expand commercial content (~2,500–3,500 useful words), H1/H2/H3 structure, title toward *SEO Services in India*, internal links to child services |
| `/contact-us` | **Medium** | Contact-focused title/meta/H1; link to `/services/seo`; no generic SEO keyword targeting |
| `/services/technical-seo` | **New** | Full premium page (created in §1) |
| `/services/local-seo-service` | **Minor** | Verify metadata; hub links |
| `/services/content-marketing` | **Minor** | Verify metadata |
| `/services/social-media-marketing` | **Minor** | Verify metadata |
| `/services/e-commerce-seo` | **Minor** | WooCommerce mention in copy/metadata |
| `/services/international-seo` | **Minor** | Matrix + hub internal links |
| `/services/ui-ux-design` | **Minor** | SEO web design metadata/copy |
| `/industries/wineries-seo` | **Medium** | Phase 14 topical sections (local, content, ecommerce, tourism, FAQs) |
| `/industries/optometrist-seo` | **Medium** | Phase 14 sections (local, GBP, patient content, FAQs) |
| `/seo-services/seo-services-in-noida` | **Minor** | Sector 63 uniqueness (already has meta updates) |
| `/seo-services/seo-services-in-delhi` | **Minor** | Delhi commercial meta alignment |
| `/` | **Minor** | Commercial SEO emphasis → link to `/services/seo` (homepage band / offerings) |
| `/blog/*` (subset) | **Minor** | Remove links to unpublished post; add bridges to service URLs where relevant |

**URLs explicitly NOT changing path:**

- `/services/woocommerce-seo` — remains 301 alias only  
- `/services/seo-web-design` — remains 301 alias only  
- `/locations/noida`, `/locations/delhi` — remain 301 aliases only  
- No new city pages  
- No new industry duplicates for winery/optometrist  

---

## 3. Redirects — EXISTING (already in codebase)

These are **already configured** in `next.config.mjs`. **No change planned** unless audit finds errors.

| Source | Destination | Type | File |
|--------|-------------|------|------|
| `/new` | `/` | 301 | `next.config.mjs` |
| `/old` | `/` | 301 | `next.config.mjs` |
| `/contactus` | `/contact-us` | 301 | `next.config.mjs` |
| `/contact-us/` | `/contact-us` | 301 | `next.config.mjs` |
| `/services/pay-per-click` | `/services/ppc-advertising` | 301 | `next.config.mjs` |
| `/locations/noida` | `/seo-services/seo-services-in-noida` | 301 | `next.config.mjs` |
| `/locations/delhi` | `/seo-services/seo-services-in-delhi` | 301 | `next.config.mjs` |
| `/services/woocommerce-seo` | `/services/e-commerce-seo` | 301 | `next.config.mjs` |
| `/services/seo-web-design` | `/services/ui-ux-design` | 301 | `next.config.mjs` |
| `http://seoindiatech.com/*` | `https://www.seoindiatech.com/:splat` | 301 | `netlify.toml` |
| `https://seoindiatech.com/*` | `https://www.seoindiatech.com/:splat` | 301 | `netlify.toml` |
| `http://www.seoindiatech.com/*` | `https://www.seoindiatech.com/:splat` | 301 | `netlify.toml` |

---

## 4. Redirects — PLANNED TO ADD

| Source | Destination | Type | Reason |
|--------|-------------|------|--------|
| **None** | — | — | Architecture uses canonical URLs + existing aliases above. `/services/technical-seo` is a **new live URL**, not a redirect target from another path. |

**Not planned:** Redirecting `/services/seo` or `/contact-us` to other URLs.

---

## 5. Files planned to MODIFY

### 5.1 New files (create)

| File | Purpose |
|------|---------|
| `pages/services/technical-seo/index.js` | Technical SEO service route |
| `utils/industries/premium/keywordIndustryOverrides.js` | *(exists)* — expand if needed |
| `docs/seo-master-plan/SEO-IMPLEMENTATION-REPORT.md` | Post-implementation report |
| `docs/seo-master-plan/audit-reports/` | Updated audit JSON outputs |

### 5.2 Service / SEO architecture

| File | Planned change |
|------|----------------|
| `utils/seo/keywordArchitecture.js` | Add `technical-seo` cluster + seo marketing keywords on hub |
| `utils/services/premium/hubOverrides.js` | Expand `/services/seo` hub content sections + title |
| `utils/services/premium/buildPremiumHubContent.js` | Hub editorial sections if needed for SEO hub depth |
| `utils/services/premium/serviceOverrides.js` | Add `technicalSeoPremium` override |
| `utils/services/premium/serviceCatalog.js` | Technical SEO catalog entry + hero image |
| `utils/services/premium/buildPremiumServiceContent.js` | Hero image map for technical-seo |
| `utils/serviceCategories.js` | Technical SEO under SEO hub services list |
| `utils/seoRoutes.js` | Add `/services/technical-seo` to sitemap routes |
| `scripts/sitemap-paths.mjs` | Add `/services/technical-seo` |

### 5.3 Internal linking & matrix

| File | Planned change |
|------|----------------|
| `utils/internalLinks.js` | SEO hub → technical, local, intl, ecommerce, cities, industries |
| `utils/seo/excelLinkMatrix.js` or `excelLinkMatrixData.js` | Remove invalid blog links; add technical-seo + international-seo |
| `utils/blog/premium/blogCatalog.js` | Remove/fix `google-core-update-may-2026` related slugs |
| `utils/blog/legacyBlogMeta.js` | Same |
| `component/new-home/SeoHubBand.js` | Link to `/services/seo` and key children |
| `component/new-home/OfferingsSection.js` | Contextual service links if missing |

### 5.4 Contact cannibalization

| File | Planned change |
|------|----------------|
| `utils/pageSeoRegistry.js` | Contact-focused meta (verify) |
| `component/contactus/ContactSeoContent.js` | Contact H2/copy; link to `/services/seo` |
| `pages/contact-us.js` | Verify SeoHead path/schema |

### 5.5 Industry pages

| File | Planned change |
|------|----------------|
| `utils/industries/premium/keywordIndustryOverrides.js` | Wineries + optometrist topical expansions |
| `utils/industries/premium/index.js` | Register overrides |

### 5.6 Location pages

| File | Planned change |
|------|----------------|
| `utils/locations.js` | Noida/Delhi factual local enhancements only (no URL change) |

### 5.7 Blog broken links

| File | Planned change |
|------|----------------|
| Any blog catalog/build files referencing `/blog/google-core-update-may-2026-seo-content-strategy-agentic-ai` | Remove or replace links |

### 5.8 Schema & audits

| File | Planned change |
|------|----------------|
| `scripts/keyword-architecture-audit.mjs` | Include technical-seo cluster |
| `scripts/seo-technical-audit.mjs` | Regenerate reports post-change |

### 5.9 NOT planned to modify

| File / area | Reason |
|-------------|--------|
| `netlify.toml` host redirects | Already correct |
| `next.config.mjs` redirects | Aliases already present; no new redirects |
| `public/robots.txt` | Crawlable; no change unless audit requires |
| `.env` / production secrets | Document only |
| Mass industry/city page creation | Against audit rules |
| Europe-focused blog rewrites | Unless GSC validates India intent |

---

## 6. Implementation phases (after approval)

| Phase | Scope |
|-------|--------|
| A | Create `/services/technical-seo` + sitemap/matrix |
| B | Expand `/services/seo` hub content + metadata |
| C | Contact de-cannibalization |
| D | Internal linking + fix broken blog matrix links |
| E | Industry expansions (wineries, optometrist) |
| F | Location meta/local uniqueness (Noida, Delhi) |
| G | Validation: `build`, `check-seo`, audits, reports |

---

## 7. Approval checklist

All items approved and implemented:

- [x] URL architecture in KEYWORD-URL-MAPPING.md approved  
- [x] `/services/technical-seo` creation approved  
- [x] No new redirects required (aliases only) approved  
- [x] File list above approved  
- [ ] GSC export uploaded (optional but recommended for P0 validation)  

---

*Implementation completed 2026-08-11. Report: [SEO-IMPLEMENTATION-REPORT.md](./SEO-IMPLEMENTATION-REPORT.md)*
