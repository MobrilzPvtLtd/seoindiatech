# Technical SEO Audit — Phase 7

Generated: 2026-08-12

**Live URLs audited:** 115  
**Sitemap URLs:** 115  
**Open issues:** 1  
**Fixed in Phase 7:** 5

## Severity Summary (Open Issues)

| Severity | Count |
|----------|-------|
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 0 |
| LOW | 1 |

## Indexation Control

| Check | Status |
|-------|--------|
| Important pages in sitemap | 115 URLs |
| /new, /old not in sitemap | PASS |
| /api/ blocked in robots | PASS |
| Missing blog (Excel only) not in sitemap | PASS |
| hreflang | Not applicable — single language |
| Unexpected noindex on indexable pages | None detected in templates |

## Sitemap

| Check | Status |
|-------|--------|
| HTTPS + www hostname | PASS |
| No duplicates | PASS |
| Validation errors | 0 |
| lastmod on blogs only | FIXED — no fake daily timestamps on all URLs |
| Dynamic generation | PASS (pages/sitemap.xml.js) |

## Robots.txt

| Crawler | Status |
|---------|--------|
| Googlebot (*) | Allow / |
| Bingbot | Allow / |
| OAI-SearchBot | Allow / |
| GPTBot | Allow / |
| /api/ | Disallow |
| /new, /old | Disallow |
| Sitemap URL | Present |

## Canonicalization

| Check | Status |
|-------|--------|
| Preferred host | www.seoindiatech.com |
| Apex → www redirect | FIXED (netlify.toml) |
| SeoHead canonical on pages | PASS (check-seo.js) |
| pay-per-click → ppc-advertising 301 | PASS |

## Redirects

| Source | Destination | Type |
|--------|-------------|------|
| /new | / | 301 |
| /old | / | 301 |
| /contactus | /contact-us | 301 |
| /contact-us/ | /contact-us | 301 |
| /services/pay-per-click | /services/ppc-advertising | 301 |

## Crawl Depth (simulated)

| Depth | Page count |
|-------|------------|
| 0 | 1 |
| 1 | 49 |
| 2 | 65 |
| 3 | 0 |
| 4+ | 0 |
| Unreachable | 0 |

## Orphan / Low-Inbound Pages

Pages with ≤1 detected inbound link (code scan heuristic):

| URL | Type | Inbound | Depth | Matrix orphan |
|-----|------|---------|-------|---------------|
| /blog/100-seo-mistakes-costing-business-leads | Blog | 1 | 2 | no |
| /blog/ai-seo-vs-traditional-seo-2026 | Blog | 1 | 2 | no |
| /blog/chatgpt-seo-ai-search-organic-traffic | Blog | 1 | 2 | yes |
| /blog/choose-best-seo-agency-europe | Blog | 1 | 2 | no |
| /blog/content-marketing-strategy-qualified-leads | Blog | 1 | 2 | yes |
| /blog/core-web-vitals-optimization-guide | Blog | 1 | 2 | no |
| /blog/ecommerce-seo-checklist-india | Blog | 1 | 2 | no |
| /blog/geo-generative-engine-optimization-guide | Blog | 1 | 2 | no |
| /blog/google-ai-overviews-changing-business-seo | Blog | 1 | 2 | no |
| /blog/how-google-ai-overviews-are-changing-seo | Blog | 1 | 2 | no |
| /blog/international-seo-guide-european-companies | Blog | 1 | 2 | no |
| /blog/link-building-guide-2026 | Blog | 1 | 2 | yes |
| /blog/local-seo-checklist-multi-location-europe | Blog | 1 | 2 | no |
| /blog/local-seo-guide-indian-businesses-2026 | Blog | 1 | 2 | no |
| /blog/local-vs-national-vs-international-seo | Blog | 1 | 2 | no |
| /blog/ppc-vs-seo-which-is-better | Blog | 1 | 2 | no |
| /blog/seo-checklist-small-businesses-europe | Blog | 1 | 2 | no |
| /blog/seo-for-restaurants-local-diners | Blog | 1 | 2 | no |
| /blog/seo-law-firms-complete-guide | Blog | 1 | 2 | no |
| /blog/seo-roi-calculator-measure-success | Blog | 1 | 2 | yes |
| /blog/seo-trends-european-businesses-2026 | Blog | 1 | 2 | no |
| /blog/technical-seo-checklist-enterprise-websites | Blog | 1 | 2 | no |
| /blog/what-is-ai-seo-why-business-needs-it | Blog | 1 | 2 | no |
| /blog/youtube-business-marketing-2026 | Blog | 1 | 2 | no |
| /industries/accountants-seo | Industry | 1 | 2 | yes |
| /industries/architect-seo | Industry | 1 | 2 | yes |
| /industries/automotive-seo | Industry | 1 | 2 | yes |
| /industries/breweries-seo | Industry | 1 | 2 | yes |
| /industries/cabinet-manufacturer-seo | Industry | 1 | 2 | yes |
| /industries/catering-seo | Industry | 1 | 2 | yes |
| /industries/chiropractor-seo | Industry | 1 | 2 | yes |
| /industries/cpa-firm-seo | Industry | 1 | 2 | yes |
| /industries/deck-builder-seo | Industry | 1 | 2 | yes |
| /industries/dentist-seo | Industry | 1 | 2 | yes |
| /industries/doctor-physician-seo | Industry | 1 | 2 | yes |
| /industries/dry-cleaner-seo | Industry | 1 | 2 | yes |
| /industries/fence-installer-seo | Industry | 1 | 2 | yes |
| /industries/fertility-clinic-seo | Industry | 1 | 2 | yes |
| /industries/flooring-company-seo | Industry | 1 | 2 | yes |
| /industries/garage-door-seo | Industry | 1 | 2 | yes |

*…and 40 more — see JSON report*


## Core Web Vitals (Code Review)

| Area | Finding | Severity |
|------|---------|----------|
| LCP | next/image priority on blog heroes; lcpImage preload fixed | FIXED |
| INP | GTM deferred; framer-motion initial={false} | LOW — verify in CrUX |
| CLS | next/image width/height on blog; verify hero templates | MEDIUM — field test |
| Fonts | next/font swap, 2 families, limited weights | PASS |

## JavaScript SEO

| Check | Status |
|-------|--------|
| SSG for blogs, services, industries, cities | PASS |
| SeoHead in initial HTML | PASS |
| Client-only content risk on premium sections | LOW — some dynamic() below fold |

## Structured Data

| Check | Status |
|-------|--------|
| Organization schema | PASS |
| No fake aggregateRating | PASS |
| SearchAction removed (no blog search) | FIXED |
| Breadcrumbs on premium templates | PASS |

## Mobile SEO

| Check | Status |
|-------|--------|
| viewport meta in SEO.js | PASS |
| Responsive Tailwind layout | PASS |
| Sticky mobile CTA on industry pages | PASS |

## Full Issue Log

| URL | Issue | Severity | Recommendation | Status |
|-----|-------|----------|----------------|--------|
| sitemap.xml | Non-blog URLs omit lastmod (correct — no fake build timestamps) | LOW | Add lastmod only when content materially changes | FIXED |
| robots.txt | _next not explicitly disallowed | LOW | Optional — Google generally handles static assets | OPEN |
| /404 | Custom 404 with noindex and recovery links | LOW | Correct | FIXED |
| schema | Invalid SearchAction removed from WebSite schema | LOW | No blog search endpoint exists | FIXED |
| LCP | lcpImage preload applies to all viewports | LOW | Correct for mobile LCP | FIXED |
| canonical | Apex → www 301 redirects in netlify.toml | HIGH | Deploy and verify single-hop | FIXED |

---

*Regenerate: `npm run seo:audit-technical`*
