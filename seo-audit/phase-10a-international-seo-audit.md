# International SEO Page Audit

**URL:** https://www.seoindiatech.com/services/international-seo  
**Audit date:** 2026-08-12  
**Phase:** 10A — AUDIT ONLY (no code, content, metadata, or schema changes)  
**Architecture context:** Homepage → SEO Company India | `/services/seo` → SEO Services India | sibling services (technical, local, e-commerce) | `/services/international-seo` → International SEO (locked framing: **International SEO Agency India / Global SEO Services**)

**Live snapshot:** `seo-audit/phase-10a-international-seo-live-snapshot.json`  
**Audit script:** `scripts/audit-international-seo-live.mjs`

---

## Executive Summary

`/services/international-seo` is a **live, indexable premium service page** with credible **international / export-market intent** in title, meta, hero override, key takeaways, and deliverables (hreflang, multi-country keyword research, market-specific landing pages). Topic coverage on the live page includes hreflang, multiregional strategy, country targeting, canonicalization, and per-country reporting.

The page is **not competing with homepage or SEO Services hub** on primary intent. Overlap with Technical SEO is **expected and moderate** (shared technical/crawl/indexation language). Overlap with Local SEO is **low** (generic template mentions only).

**Strengths**

- Hero override is international-specific (hreflang-ready structures, country keyword plans, anti-doorway positioning)
- Title/meta target India agency + global markets (USA, UK, Europe, export)
- Dedicated `keyTakeaways` override with hreflang, market backlinks, per-country reporting
- Catalog deliverables map to hreflang, international site structure, market landing pages, global technical audits
- Parent/sibling links: `/services/seo`, technical, e-commerce, local — all present on live page
- Schema stack complete: WebSite, Organization, BreadcrumbList, WebPage, Service, FAQPage, HowTo (9 steps)
- FAQ visible = schema (8/8 — synchronized)
- No inappropriate Product schema on agency service page

**Top issues**

| Priority | Issue |
|----------|--------|
| **P0** | Duplicate quick-answer H2 pair: *What is International SEO?* vs *What is International SEO and who needs it?* (same pre–7B/8B/9B pattern) |
| **P1** | FAQs are **100% generic service templates** — no international-specific questions (hreflang, ccTLD vs subfolder, market entry, translation vs localization, etc.) |
| **P1** | No `PAGE_FAQS.internationalSeo` or entry in `SERVICE_FAQ_MAP` |
| **P1** | No dedicated `SERVICE_ANSWERS['international-seo']` — falls back to generic answer-first block |
| **P1** | **Missing contextual blog links** to `/blog/international-seo-guide-european-companies` and `/blog/local-vs-national-vs-international-seo` (only default `seo-trends-european-businesses-2026` in research band) |
| **P2** | `internationalSeoPremium` has hero + keyTakeaways + seo — **no** `answerFirst` / `suppressGeoAnswer` (unlike completed 8B/9B overrides) |
| **P2** | Hero reuses e-commerce hero image (`e-commerce-seo.svg`) — visual inconsistency, not intent conflict |
| **P2** | Topic gap on live page: **multilingual** / language-variant wording not scannable (multiregional present) |
| **P2** | Generic template dilution: local visibility pillar, generic case study, editorial blocks not market-entry-deep |
| **P3** | `keywordArchitecture` entry exists with canonical `/services/international-seo` — no repositioning needed |

**Verdict:** Page deserves **International SEO Agency India / Global SEO Services** as primary intent with current URL and content foundation. **Optimize, do not reposition.** Phase 11 should mirror 7B/8B/9B: consolidate duplicate H2 (`suppressGeoAnswer` or equivalent), add `PAGE_FAQS.internationalSeo` (8 items), add `SERVICE_ANSWERS['international-seo']`, add `SERVICE_BLOG_SLUGS` for international guides, **preserve title/H1/meta** unless GSC proves a problem. Do not target SEO Company India, SEO Services India, Technical SEO Services, or Local SEO Services as primary.

---

## Current Metadata

| Signal | Live value |
|--------|------------|
| HTTP status | 200 |
| URL | `/services/international-seo` |
| Canonical | `https://www.seoindiatech.com/services/international-seo` |
| Robots | `index, follow, max-image-preview:large, max-snippet:-1` |
| **Title** | `International SEO Agency India \| Global SEO Services \| SEO India Tech` |
| **Meta description** | `International SEO agency in India for businesses targeting USA, UK, Europe, and export markets. Hreflang, market strategy, and technical SEO for global growth.` |
| OG / Twitter | Aligned via `SeoHead` |
| `html lang` | `en` |
| Viewport | Present |
| Sitemap | Included (`public/sitemap.xml`) |

### Source files

| Layer | Path |
|-------|------|
| Route | `pages/services/international-seo/index.js` → `createPremiumServicePage('international-seo')` |
| Content builder | `utils/services/premium/buildPremiumServiceContent.js` |
| Override | `utils/services/premium/serviceOverrides.js` → `internationalSeoPremium` (hero, keyTakeaways, seo) |
| FAQs | **None in `SERVICE_FAQ_MAP`** → `getServiceFaqs()` generic templates only |
| Answer-first | **No `SERVICE_ANSWERS` key** → `getServiceAnswerFirst()` generic fallback |
| Internal links | `utils/internalLinks.js` — **no `SERVICE_BLOG_SLUGS` entry** (defaults to european trends blog) |
| Keyword map | `utils/seo/keywordArchitecture.js` — canonical `/services/international-seo` |
| Schema | `component/service-premium/PremiumServiceSchema.js` |
| UI | `component/industry-premium/PremiumIndustryPage.js` |

---

## Current H1/H2 Structure

### H1 (1)

| H1 |
|----|
| International SEO for Indian Businesses Going Global |

### H2 (live — 22)

| # | H2 | Likely source |
|---|-----|---------------|
| 1 | What is International SEO? | `answerFirst` (generic fallback) |
| 2 | Why International SEO Is Essential for Growth | `whySeoMatters` |
| 3 | **What is International SEO and who needs it?** | `whySeoMatters.geoAnswer` (**duplicate intent**) |
| 4 | Why SEO India Tech for International SEO | `whyChoose` |
| 5 | International SEO Deliverables | `services` |
| 6 | Problems International SEO Solves | `painPoints` |
| 7 | What Businesses Should Know About International SEO | `keyTakeaways` (override) |
| 8 | International SEO Delivered End-to-End | `pillars` |
| 9 | International SEO for Every Business Stage | `audiences` |
| 10 | How We Deliver International SEO | `process` |
| 11 | International SEO Outcomes We Deliver | `results` |
| 12 | Why Businesses Choose SEO India Tech | `comparison` |
| 13 | Case Study: International SEO Growth | `caseStudy` (generic template) |
| 14 | The Complete Guide to International SEO | `editorial` |
| 15 | Enterprise Tools. Proven Credentials. | `toolsTrust` |
| 16 | Explore Related Services | `relatedIndustries` |
| 17 | International SEO Keywords & Topics | `semanticTopics` |
| 18 | Continue Your Research | `internalLinks` |
| 19 | What Our Clients Say | `testimonials` |
| 20 | Frequently Asked Questions About International SEO | `faq` |
| 21 | Ready to Start International SEO? | `contact` |
| 22 | Ready to Grow with International SEO? | `finalCta` |

### Quick-answer duplicate diagnosis

| Signal | Value |
|--------|--------|
| `quickAnswerDuplicate` | **true** |
| Quick-answer H2s detected | What is International SEO? · What is International SEO and who needs it? · What Businesses Should Know About International SEO (third is keyTakeaways override — distinct intent) |
| Root cause | Generic `answerFirst` + `whySeoMatters.geoAnswer` both render as top-of-page H2 answer blocks (same fix pattern as Phases 7B–9B) |

---

## FAQ Audit

| Signal | Value |
|--------|--------|
| Visible FAQ buttons | 8 |
| FAQPage schema entities | 8 |
| Parity | ✅ Synced |
| FAQ schema blocks | 1 |

**Live FAQ questions (all generic templates):**

1. What is International SEO?
2. How long does international seo take to show results?
3. How much does international seo cost?
4. Do you offer international seo for international clients?
5. How is SEO India Tech different for international seo?
6. Can international seo work with our existing marketing team?
7. What KPIs should we track for international seo?
8. How do we start international seo with SEO India Tech?

**Gap:** No hreflang, market URL structure, translation vs localization, export compliance, or multi-country reporting FAQs.

---

## Schema Audit

| Type | Present |
|------|---------|
| WebSite | ✅ |
| Organization | ✅ |
| BreadcrumbList | ✅ |
| WebPage | ✅ |
| Service | ✅ |
| FAQPage | ✅ (8 Q) |
| HowTo | ✅ (9 steps) |
| Product | ❌ (correct — agency page) |
| LocalBusiness | ❌ (not applicable) |

**Service node:** name aligns with H1; serviceType `International SEO`; description matches meta.

---

## Internal Linking

| Target | Live page |
|--------|-----------|
| `/services/seo` | ✅ |
| `/services/technical-seo` | ✅ |
| `/services/e-commerce-seo` | ✅ |
| `/services/local-seo-service` | ✅ |
| `/blog/international-seo-guide-european-companies` | ❌ |
| `/blog/local-vs-national-vs-international-seo` | ❌ |
| `/blog/seo-trends-european-businesses-2026` | ✅ |

**Note:** `ppc-advertising` service page links to `local-vs-national-vs-international-seo`; international service page does not.

Estimated internal link count on page: **95** unique path references in HTML.

---

## Topic Coverage (live scan)

| Topic | Mentioned on live page |
|-------|------------------------|
| hreflang | ✅ |
| multiregional / multi-market | ✅ |
| country targeting / export markets | ✅ |
| canonicalization | ✅ |
| technical SEO / crawl / indexation | ✅ |
| local backlinks / market-specific | ✅ |
| reporting by country | ✅ |
| multilingual / language variants | ❌ |

---

## Cannibalisation Risk

| Page | Risk | Notes |
|------|------|-------|
| Homepage (SEO Company India) | **Low** | Different primary intent; no title/H1 collision |
| `/services/seo` (SEO Services India) | **Low–medium** | Sibling hub; shared “SEO services” language expected |
| `/services/technical-seo` | **Medium (sibling)** | Shared technical/crawl/indexation topics — acceptable cross-link relationship |
| `/services/local-seo-service` | **Low** | Template local mentions only |
| `/services/e-commerce-seo` | **Low** | Cross-linked; export stores adjacent but distinct |
| City pages | **Low** | No geo-primary conflict |

---

## Comparison to Completed Service Pattern (7B–9B)

| Element | Technical / Local / E-commerce (post-implementation) | International SEO (current) |
|---------|----------------------------------------------------------|-----------------------------|
| Duplicate quick-answer H2 | Fixed via `suppressGeoAnswer` / consolidation | **Not fixed — P0** |
| `PAGE_FAQS.*` dedicated FAQs | ✅ | ❌ |
| `SERVICE_ANSWERS` entry | ✅ (e-commerce, local, etc.) | ❌ |
| Contextual blog slugs in `SERVICE_BLOG_SLUGS` | ✅ | ❌ |
| Hero override | ✅ | ✅ |
| Title/H1 locked | ✅ | ✅ (locked agency framing) |

---

## Phase 11 Implementation Preview (NOT STARTED — for planning only)

When approved, expected scope mirroring 8B/9B:

1. **P0:** Add `suppressGeoAnswer: true` to override (or consolidate answer-first) — remove duplicate H2 pair
2. **P1:** `PAGE_FAQS.internationalSeo` (8 international-specific FAQs) + `SERVICE_FAQ_MAP` entry
3. **P1:** `SERVICE_ANSWERS['international-seo']` in `answerFirstContent.js`
4. **P1:** `SERVICE_BLOG_SLUGS['international-seo']` → international guide + local vs national vs international blog
5. **Preserve:** title, H1, meta description (locked unless GSC contradicts)

**Out of scope unless user unlocks:** title/H1 repositioning, new URLs, noindex, content pillar rewrites.

---

## Audit Verdict

| Dimension | Grade | Notes |
|-----------|-------|-------|
| Indexability | ✅ Pass | 200, canonical self, indexable |
| Intent alignment | **A** | Strong international/export positioning |
| Template hygiene | **C** | P0 duplicate H2; generic FAQs |
| Schema | **A** | Full stack, FAQ synced |
| Internal links | **B** | Siblings good; international blogs missing |
| Cannibalisation | **B+** | Low risk vs core pillars |

**Overall:** Ready for **Phase 11 implementation** after user review. No implementation performed in Phase 10A.
