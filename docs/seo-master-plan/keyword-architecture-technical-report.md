# Keyword Architecture — Technical SEO Implementation Report

**Date:** 2026-07-30  
**Site:** https://www.seoindiatech.com  
**Framework:** Next.js 16 (Pages Router)

## Executive summary

Implemented a single canonical URL per keyword cluster architecture. `/services/seo` is the primary commercial landing page for India-wide SEO terms. Contact page meta and on-page copy were de-cannibalized. One new service page (`/services/international-seo`) was added. Alias URLs redirect to canonical paths via one-hop 301s. No doorway pages, fake statistics, or unnecessary URL migrations were introduced.

---

## Files changed

| File | Change |
|------|--------|
| `utils/seo/keywordArchitecture.js` | **New** — keyword → canonical URL registry |
| `utils/services/premium/hubOverrides.js` | **New** — `/services/seo` hub SEO override |
| `utils/services/premium/buildPremiumHubContent.js` | Hub override merge |
| `utils/services/premium/serviceOverrides.js` | Metadata + international SEO override |
| `utils/industries/premium/keywordIndustryOverrides.js` | **New** — optometrist & winery overrides |
| `utils/industries/premium/index.js` | Register industry overrides |
| `utils/serviceCategories.js` | International SEO catalog entry |
| `utils/services/premium/serviceCatalog.js` | International SEO image mapping |
| `utils/services/premium/buildPremiumServiceContent.js` | Hero image for international SEO |
| `pages/services/international-seo/index.js` | **New** service page |
| `utils/internalLinks.js` | SEO hub links + international SEO catalog |
| `utils/locations.js` | Noida Sector 63 & Delhi metadata |
| `utils/pageSeoRegistry.js` | Contact page de-cannibalized meta |
| `component/contactus/ContactSeoContent.js` | Contact-focused H2 + link to `/services/seo` |
| `pages/solution/crm-and-tools/index.js` | India CRM / SEO CRM metadata |
| `utils/seoRoutes.js` | Sitemap route for international SEO |
| `scripts/sitemap-paths.mjs` | Sitemap path for international SEO |
| `next.config.mjs` | Alias URL 301 redirects |
| `scripts/keyword-architecture-audit.mjs` | **New** audit script |
| `package.json` | `seo:keyword-architecture` npm script |

---

## URLs changed

| Action | URL | Notes |
|--------|-----|-------|
| **New** | `/services/international-seo` | International SEO service landing page |
| **Primary hub** | `/services/seo` | India SEO keyword cluster (metadata + H1 updated) |
| **Enhanced meta** | `/services/local-seo-service`, `/services/content-marketing`, `/services/social-media-marketing`, `/services/e-commerce-seo`, `/services/ui-ux-design` | Cluster-aligned titles/descriptions |
| **Enhanced meta** | `/seo-services/seo-services-in-noida`, `/seo-services/seo-services-in-delhi` | Sector 63 / Delhi clusters |
| **Enhanced meta** | `/industries/optometrist-seo`, `/industries/wineries-seo` | Industry clusters |
| **Enhanced meta** | `/solution/crm-and-tools` | India CRM / SEO CRM cluster |
| **De-cannibalized** | `/contact-us` | Contact-focused meta; links to SEO hub |

**Not created (canonical alternatives used):**

| Requested URL | Canonical URL |
|---------------|---------------|
| `/locations/noida` | `/seo-services/seo-services-in-noida` |
| `/locations/delhi` | `/seo-services/seo-services-in-delhi` |
| `/services/woocommerce-seo` | `/services/e-commerce-seo` |
| `/services/seo-web-design` | `/services/ui-ux-design` |

---

## Redirects added (one-hop 301)

Configured in `next.config.mjs`:

| Source | Destination |
|--------|-------------|
| `/locations/noida` | `/seo-services/seo-services-in-noida` |
| `/locations/delhi` | `/seo-services/seo-services-in-delhi` |
| `/services/woocommerce-seo` | `/services/e-commerce-seo` |
| `/services/seo-web-design` | `/services/ui-ux-design` |

**Production note:** These are permanent redirects in Next.js config. Deploy will apply at edge/server. No existing indexed URLs were removed.

---

## Metadata changed

Primary title/description updates align each URL with its keyword cluster without stuffing. Key examples:

- **/services/seo:** SEO Agency in India | Indian SEO Company & Consultancy
- **/services/local-seo-service:** Local SEO India | Local SEO Services in India
- **/services/international-seo:** International SEO Agency India | Global SEO Firm
- **/services/e-commerce-seo:** WooCommerce SEO Agency in India
- **/services/ui-ux-design:** SEO Website Design Company in India
- **/contact-us:** Contact-focused (no generic India SEO terms in title)

---

## Schema added / preserved

Existing schema stack retained (`SeoHead`, `JsonLd`, `PremiumServiceSchema`, location `SeoSchema`, solution BreadcrumbList on CRM page). No fake LocalBusiness locations were added. Organization/WebSite/WebPage patterns remain via existing builders.

---

## Internal linking

- **SEO hub** (`getHubInternalLinks('seo')`): local SEO, international SEO, e-commerce SEO, AI SEO, Delhi, Noida, industries
- **Contact page:** explicit link to `/services/seo` as primary SEO destination
- **INTERNAL_LINK_CATALOG:** international SEO + e-commerce SEO entries

---

## Technical issues fixed

- Keyword cannibalization: contact page no longer targets generic India SEO in title/H2
- Missing service page for international SEO cluster
- Alias URL consolidation via 301 redirects
- Sitemap includes new canonical URL

---

## Remaining issues / risks

| Risk | Severity | Notes |
|------|----------|-------|
| Rankings not guaranteed | — | Architecture improves clarity; Google indexing/ranking takes time |
| City pages still use `/seo-services/*` not `/locations/*` | Low | Redirects cover alias; no mass URL migration |
| WooCommerce/web-design clusters on e-commerce & UI/UX URLs | Low | Intentional; aliases redirect |
| Core Web Vitals | Medium | Not re-audited in this pass; run `npm run seo:performance-audit` |
| GTM consent warning | Low | From prior analytics health check |

---

## Keyword-to-URL mapping

See `utils/seo/keywordArchitecture.js` and `docs/seo-master-plan/audit-reports/keyword-architecture-audit.json` after running `npm run seo:keyword-architecture`.

| Canonical URL | Primary intent |
|---------------|----------------|
| `/services/seo` | India-wide commercial SEO (agency, company, firm, consultancy) |
| `/services/local-seo-service` | Local SEO India |
| `/services/social-media-marketing` | Social media marketing India |
| `/services/content-marketing` | Content marketing services India |
| `/services/e-commerce-seo` | WooCommerce / e-commerce SEO India |
| `/services/international-seo` | International SEO for global businesses |
| `/services/ui-ux-design` | SEO-friendly web design India |
| `/solution/crm-and-tools` | India CRM / SEO CRM system |
| `/industries/optometrist-seo` | SEO for optometrists / eye care |
| `/industries/wineries-seo` | Winery SEO |
| `/seo-services/seo-services-in-noida` | SEO company Noida Sector 63 |
| `/seo-services/seo-services-in-delhi` | Indian SEO company Delhi |

---

## Verification commands

```bash
npm run build
npm run check-seo
npm run seo:audit-technical
npm run seo:validate-llm
npm run seo:keyword-architecture
```

---

## Production-sensitive configuration

**`next.config.mjs` redirects** were added for alias URL consolidation. Review before deploy if any marketing campaigns use `/locations/*` or `/services/woocommerce-seo` as landing URLs (they will redirect to canonical paths).
