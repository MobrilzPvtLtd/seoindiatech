# E-commerce SEO Page Audit

**URL:** https://www.seoindiatech.com/services/e-commerce-seo  
**Audit date:** 2026-08-12  
**Phase:** 9A — AUDIT ONLY (no code, content, metadata, or schema changes)  
**Architecture context:** Homepage → SEO Company India | `/services/seo` → SEO Services India | sibling services (technical, local, international) | `/services/e-commerce-seo` → E-commerce SEO (candidate: **E-commerce SEO Services**)

**Live snapshot:** `seo-audit/phase-9a-ecommerce-seo-live-snapshot.json`  
**Audit script:** `scripts/audit-ecommerce-seo-live.mjs`

---

## Executive Summary

`/services/e-commerce-seo` is a **live, indexable premium service page** with credible **e-commerce commercial intent** in title, meta, hero override, and deliverables. Hero copy explicitly mentions product pages, category pages, faceted navigation, indexation, and schema — stronger e-commerce specificity than generic service templates alone.

The page is **not competing with homepage or SEO Services hub** on primary intent. It is **partially overlapping** with Technical SEO on technical/catalog topics (expected sibling relationship). Local SEO overlap is **low** (generic template mentions only).

**Strengths**

- Hero override is e-commerce-specific (catalog scale, faceted navigation, indexation bloat, product discovery)
- Title/meta target ecommerce + WooCommerce + product/category optimization
- Dedicated `SERVICE_ANSWERS['e-commerce-seo']` for answer-first block
- Catalog deliverables map to product, category/collection, product schema, site speed
- Parent/sibling links: `/services/seo`, technical, local, international
- Industry links: herbal-product-seo, cabinet-manufacturer-seo (e-commerce-adjacent)
- Schema stack complete: WebSite, Organization, BreadcrumbList, WebPage, Service, FAQPage, HowTo
- FAQ visible = schema (8/8 — synchronized)
- No inappropriate Product schema on agency service page

**Top issues**

| Priority | Issue |
|----------|--------|
| **P0** | Duplicate quick-answer H2 pair: *What is e-commerce SEO?* vs *What is E-Commerce SEO and who needs it?* (same pattern as pre–7B/8B pages) |
| **P1** | FAQs are **100% generic service templates** — no e-commerce-specific questions (product SEO, faceted nav, Shopify/WooCommerce, etc.) |
| **P1** | No `PAGE_FAQS.ecommerceSeo` or dedicated FAQ source in `serviceFaqMap` |
| **P1** | **Missing contextual link** to `/blog/ecommerce-seo-checklist-india` (exists in sitemap; linked from ASO page, not e-commerce service page) |
| **P2** | Title/H1 emphasize **Ecommerce SEO Agency** — user target cluster is **E-commerce SEO Services**; positioning is close but agency-first, not services-first |
| **P2** | `keywordArchitecture` primary keyword is **woocommerce seo agency in india** — narrower than full ecommerce SEO services intent |
| **P2** | Generic template dilution: local visibility pillar, generic case study, editorial blocks not catalog-deep |
| **P2** | **Shopify** not mentioned on live page; WooCommerce in title/meta/hero only |
| **P2** | Genuine topic gaps: pagination, product variants, crawl budget, XML sitemaps, Google Shopping (not scannable) |
| **P3** | No dedicated Shopify or WooCommerce service URLs (woocommerce-seo aliases to this page) |
| **P3** | Legacy `EcommerceSEOFAQ.js` has richer ecommerce FAQs — not used on premium page |

**Verdict:** Page deserves **E-commerce SEO Services** as primary intent with current URL and content foundation. **Optimize, do not reposition.** Phase 9B should mirror 7B/8B: consolidate duplicate H2, add `PAGE_FAQS.ecommerceSeo` (8 items), add checklist blog link, preserve title/H1 unless user approves agency→services tighten. Do not target SEO Company India, SEO Services India, Technical SEO Services, or Local SEO Services as primary.

---

## Current Metadata

| Signal | Live value |
|--------|------------|
| HTTP status | 200 |
| URL | `/services/e-commerce-seo` |
| Canonical | `https://www.seoindiatech.com/services/e-commerce-seo` |
| Robots | `index, follow, max-image-preview:large, max-snippet:-1` |
| **Title** | `Ecommerce SEO Agency in India \| WooCommerce & Store SEO \| SEO India Tech` |
| **Meta description** | `Ecommerce SEO agency in India for WooCommerce and online stores: product pages, category optimization, technical fixes, and schema. Grow organic revenue. Free audit.` |
| OG / Twitter | Aligned via `SeoHead` |
| `html lang` | `en` |
| Viewport | Present |
| Sitemap | Included (`public/sitemap.xml`) |

### Source files

| Layer | Path |
|-------|------|
| Route | `pages/services/e-commerce-seo/index.js` → `createPremiumServicePage('e-commerce-seo')` |
| Content builder | `utils/services/premium/buildPremiumServiceContent.js` |
| Override | `utils/services/premium/serviceOverrides.js` → `ecommerceSeoPremium` (hero + seo only) |
| Catalog features | `utils/serviceCategories.js` — Product Page, Category & Collection, Product Schema, Site Speed |
| FAQs | **None in `SERVICE_FAQ_MAP`** → `getServiceFaqs()` generic templates only |
| Answer-first | `utils/seo/answerFirstContent.js` → `SERVICE_ANSWERS['e-commerce-seo']` |
| Internal links | `utils/internalLinks.js` — industries only; **no `SERVICE_BLOG_SLUGS` entry** |
| Keyword map | `utils/seo/keywordArchitecture.js` — primary: `woocommerce seo agency in india`; alias `/services/woocommerce-seo` |
| Schema | `component/service-premium/PremiumServiceSchema.js` |
| UI | `component/industry-premium/PremiumIndustryPage.js` |
| Legacy (unused on premium page) | `component/services/e-commerce-seo/EcommerceSEOFAQ.js` |

---

## Current H1/H2/H3 Structure

### H1 (1)

| H1 |
|----|
| Ecommerce SEO Agency for Product Visibility and Revenue Growth |

### H2 (live — 22)

| # | H2 | Likely source |
|---|-----|---------------|
| 1 | What is e-commerce SEO? | `answerFirst` / GeoQuickAnswer |
| 2 | Why E-Commerce SEO Is Essential for Growth | `whySeoMatters` |
| 3 | **What is E-Commerce SEO and who needs it?** | `whySeoMatters.geoAnswer` (**duplicate intent**) |
| 4 | Why SEO India Tech for E-Commerce SEO | `whyChoose` |
| 5 | E-Commerce SEO Deliverables | `services` |
| 6 | Problems E-Commerce SEO Solves | `painPoints` |
| 7 | E-Commerce SEO: What to Remember | `keyTakeaways` (generic — no override) |
| 8 | E-Commerce SEO Delivered End-to-End | `pillars` |
| 9 | E-Commerce SEO for Every Business Stage | `audiences` |
| 10 | How We Deliver E-Commerce SEO | `process` |
| 11 | E-Commerce SEO Outcomes We Deliver | `results` |
| 12 | Why Businesses Choose SEO India Tech | `comparison` |
| 13 | Case Study: E-Commerce SEO Growth | `caseStudy` (generic template) |
| 14 | The Complete Guide to E-Commerce SEO | `editorial` |
| 15 | Enterprise Tools. Proven Credentials. | `toolsTrust` |
| 16 | Explore Related Services | `relatedIndustries` |
| 17 | E-Commerce SEO Keywords & Topics | `semanticTopics` |
| 18 | Continue Your Research | `internalLinks` |
| 19 | What Our Clients Say | `testimonials` |
| 20 | Frequently Asked Questions About E-Commerce SEO | `faq` |
| 21 | Ready to Start E-Commerce SEO? | `contact` |
| 22 | Ready to Grow with E-Commerce SEO? | `finalCta` |

### Notable H3 clusters

- **Deliverables:** Product Page Optimization, Category & Collection SEO, Product Schema Markup, Site Speed & Technical Fixes
- **Pillars (generic):** Strategy, Implementation, **Local Visibility & Maps** (off-topic for ecommerce URL), Content, AI & GEO, Reporting
- **Editorial:** Why matters, What's included, Local/multi-market, Technical foundation/CWV, AI/GEO, E-E-A-T, ROI
- **Related services:** Local SEO, Technical SEO, AI SEO, Small Business SEO, International SEO, ASO
- **Internal links band:** SEO trends blog, industries hub, Delhi city page — **no ecommerce checklist blog**
- **Industries (contextual):** Herbal Product SEO, Cabinet Manufacturer SEO

**Heading issues:** P0 duplicate quick-answer H2s; deliverable H3s repeat twice; generic case study title; local pillar H3 on ecommerce page.

---

## Search Intent

### Evidence-based intent mapping

| Layer | Current targeting | Strength |
|-------|-------------------|----------|
| **Primary** | Ecommerce SEO Agency / ecommerce SEO agency in India | **Strong** — title, H1, meta |
| **Primary (candidate)** | E-commerce SEO Services | **Moderate** — implied in deliverables, not in title/H1 |
| **Secondary** | WooCommerce SEO, product SEO, category SEO, online store SEO | **Strong** — meta, hero, features |
| **Secondary** | Shopify SEO | **Weak** — not on live page body |
| **Keyword map** | woocommerce seo agency in india | **Narrow** — may under-target broader ecommerce SEO services |
| **Weak / diluting** | Generic SEO services, local SEO, AI/GEO boilerplate | Template sections |

### Search intent type

**Commercial service intent** — online stores seeking ecommerce SEO providers for product/category visibility and revenue.

### Recommended primary keyword (audit conclusion)

**E-commerce SEO Services**  
(natural variants: *ecommerce SEO services*, *ecommerce SEO services India*, *online store SEO*)

Current **Ecommerce SEO Agency** positioning is acceptable sibling intent — Phase 9B can preserve title/H1 unless user opts to align wording to “Services.”

**Do not target as primary:** SEO Company India, SEO Services India, Technical SEO Services, Local SEO Services.

---

## Homepage Cannibalisation

| Element | Homepage (`/`) | E-commerce SEO page | Risk |
|---------|----------------|---------------------|------|
| Primary title intent | SEO Company in India | Ecommerce SEO Agency in India | **Low** |
| H1 | SEO Company in India | Ecommerce SEO Agency… | **Low** |
| E-commerce topics | Offerings mention | Core page topic | **Low** — expected |
| Body "SEO Company in India" | Primary | Not present | **Low** |
| Body "SEO services in India" | Secondary | Not present | **Low** |

**Assessment:** No primary-query competition with homepage.

---

## SEO Services Cannibalisation

| Element | `/services/seo` | `/services/e-commerce-seo` | Risk |
|---------|-----------------|------------------------------|------|
| Primary intent | SEO Services in India | Ecommerce SEO Agency / Services | **Low** |
| E-commerce coverage | Pillar + editorial summary (post–6B) | Full page depth | **Medium** — expected parent summarizes child |
| Product/category SEO | Hub editorial mentions ecommerce | Core deliverables + hero | **Medium** — topical overlap expected |
| H1 "SEO Services in India" | On hub | Not on ecommerce page | **Low** |

### Sections causing overlap

1. SEO hub ecommerce pillar and editorial block (parent summarizes; child should be deeper)
2. Ecommerce page editorial “Technical foundation and Core Web Vitals” duplicates technical sibling
3. Generic pillars not catalog-specific

**Assessment:** Manageable. Ecommerce page should own **product/category architecture, faceted nav, product schema, catalog indexation** while hub keeps summary + link.

---

## Technical SEO Relationship

| Signal | Assessment |
|--------|------------|
| Link to `/services/technical-seo` | ✅ Present (Related Services + matrix) |
| Technical topics on page | Site Speed deliverable; editorial CWV block; hero “indexation bloat” |
| Body “technical SEO services” | Present (sibling link context) |
| Intent competition | **Low–medium** — technical page owns crawl/indexation depth; ecommerce page should emphasize **catalog/product URL patterns** not full technical SEO program |

**Assessment:** Sibling relationship is correct. Phase 9B should preserve technical link; optional contextual link when discussing catalog technical SEO — do not expand into full technical SEO page depth.

---

## Local SEO Relationship

| Signal | Assessment |
|--------|------------|
| Link to `/services/local-seo-service` | ✅ Present (Related Services) |
| Body “local SEO services” | Present (related services link) |
| Generic pillar H3 | Local Visibility & Maps on ecommerce URL | **P2 dilution** |
| Editorial | “Local and multi-market visibility” | Mild off-topic for pure ecommerce stores |

**Assessment:** **Low cannibalisation risk** with Local SEO Services intent. Trim generic local blocks only if low-effort in 9B — not required for intent separation.

---

## E-commerce Topic Coverage

| Topic | Covered? | Where / quality |
|-------|----------|-----------------|
| Product page SEO | ✅ | Hero, meta, features, deliverables, answerFirst |
| Category / collection page SEO | ✅ | Hero, meta, features, deliverables |
| E-commerce keyword research | ⚠️ | Process “Research” step; not scannable H3 |
| Search intent (commercial) | ✅ | Hero, meta, commercial framing |
| Internal linking | ✅ | Hero, answerFirst; not faceted-nav-specific |
| Product/category architecture | ⚠️ | Hero mentions scale; not dedicated section |
| Faceted navigation | ✅ | Hero override only — **not in deliverables H3** |
| Filters | ✅ | answerFirst mentions filters |
| Pagination | ❌ | Not explicit |
| Product variants | ❌ | Not explicit |
| Duplicate URLs / duplicate content | ✅ | answerFirst takeaways; hero indexation bloat |
| Canonicalization | ✅ | Body mention (topic scan) |
| Crawl budget | ❌ | Not explicit |
| Indexation control | ✅ | Hero indexation bloat |
| XML sitemap | ❌ | Not explicit on page |
| Product structured data | ✅ | Product Schema Markup deliverable + meta |
| Breadcrumb structured data | ❌ | Not explicit |
| Image / product image SEO | ❌ | Not explicit |
| Mobile commerce SEO | ⚠️ | UX friction in pain points only |
| Page speed / Core Web Vitals | ✅ | Site Speed deliverable + editorial CWV |
| Shopify SEO | ❌ | Not on live page |
| WooCommerce SEO | ✅ | Title, meta, keyword map alias |
| Google Shopping / search visibility | ❌ | Not mentioned (acceptable unless service supports it) |

**Genuine gaps (commercially relevant):** pagination, variants, crawl budget at catalog scale, Shopify parity with WooCommerce claims, ecommerce checklist blog link, scannable faceted-navigation section.

---

## Platform Coverage

| Platform | On live page? | Assessment |
|----------|---------------|------------|
| **WooCommerce** | ✅ Title, meta, hero integration | Supported in copy; `woocommerce-seo` aliases to this URL |
| **Shopify** | ❌ Live body | Legacy `EcommerceSEOFAQ.js` claims Shopify — **not on premium page** |
| **Magento** | ❌ | Legacy FAQ only |
| **Custom storefronts** | ⚠️ | Hero “online stores” generically |

### Dedicated platform URLs

| URL | Status |
|-----|--------|
| `/services/shopify-seo` | **Does not exist** |
| `/services/woocommerce-seo` | **Alias redirect** → `/services/e-commerce-seo` (`keywordArchitecture.js`) |

**Assessment:** WooCommerce is genuinely referenced. Shopify expertise is **unsupported on the live premium page** — do not add Shopify claims in 9B without copy basis. Optional mention only if aligned with actual delivery.

---

## Product/Category Architecture

| Question | Audit finding |
|----------|---------------|
| Product vs category vs content explained? | **Partial** — hero and deliverables distinguish product vs category; supporting content only via generic “Content That Converts” pillar |
| Indexation addressed? | ✅ Hero “indexation bloat” |
| Duplicate URLs? | ✅ answerFirst duplicate content takeaway |
| Faceted navigation? | ✅ Hero only — weak scannability |
| Variants? | ❌ Not addressed |
| Internal linking between catalog levels? | ⚠️ Mentioned generically, not architecture-deep |

**Assessment:** Enough for commercial overview; **not** a deep catalog-architecture guide (appropriate for service page). Phase 9B should not bloat — consolidate H2/FAQ and add checklist link rather than full architecture rewrite.

---

## Commercial Intent

| Element | Present? | Quality |
|---------|----------|---------|
| What E-commerce SEO is | ✅ | answerFirst + hero |
| Who needs it | ⚠️ | Generic geoAnswer duplicate (weak) |
| What is included | ✅ | 4 deliverables + editorial H3 |
| Product SEO | ✅ | Strong |
| Category/collection SEO | ✅ | Strong |
| Technical e-commerce SEO | ⚠️ | Site speed + generic CWV editorial |
| E-commerce keyword strategy | ⚠️ | Process only |
| Content strategy | ⚠️ | Generic pillar |
| Internal linking | ⚠️ | Generic mentions |
| Process / HowTo | ✅ | 9 steps |
| Deliverables | ✅ | 4 catalog-mapped items |
| Reporting | ✅ | Process, tools, FAQ KPIs (generic) |
| Outcomes | ✅ | Results + generic case study |
| Why SEO India Tech | ✅ | whyChoose, comparison |
| CTA | ✅ | Contact + final CTA |

**Weak areas:** Who-needs-it duplicate block; generic FAQs; no ecommerce case study override (unlike local SEO multi-location case study).

---

## Internal Linking

### Required service links (live)

| Target | Present? |
|--------|----------|
| `/services/seo` | ✅ |
| `/services/technical-seo` | ✅ |
| `/services/local-seo-service` | ✅ |
| `/services/international-seo` | ✅ |

### Blog / resource links

| URL | Status |
|-----|--------|
| `/blog/ecommerce-seo-checklist-india` | ❌ **Missing** from page (in sitemap; on ASO `SERVICE_BLOG_SLUGS` only) |
| `/blog/seo-trends-european-businesses-2026` | ✅ Internal links band |

### Industry links (contextual)

| URL | Status |
|-----|--------|
| `/industries/herbal-product-seo` | ✅ |
| `/industries/cabinet-manufacturer-seo` | ✅ |

### Gaps (recommendations only)

| Gap | Priority |
|-----|----------|
| Ecommerce SEO checklist blog | **P1** |
| Link to technical SEO in catalog/indexation context | P2 (already in Related Services) |
| Content marketing link | ✅ Excel matrix |

### Excessive links?

96 unique internal paths — mostly footer/nav. Body contextual links reasonable.

---

## FAQ

| Signal | Value |
|--------|-------|
| Visible FAQ count | **8** |
| FAQ schema count | **8** |
| FAQPage blocks | **1** |
| Visible/schema parity | ✅ |
| Hidden FAQ content | None detected |

### FAQ source architecture

```text
No SERVICE_FAQ_MAP entry for e-commerce-seo
        ↓
getServiceFaqs() → GENERIC_SERVICE_FAQ_TEMPLATES only
        ↓
buildPremiumServiceContent → content.faq.items (8 generic items)
        ↓
PremiumFaq + PremiumServiceSchema FAQPage
```

**No `PAGE_FAQS.ecommerceSeo`** — unlike post–7B/8B pages.

### All 8 questions (generic)

1. What is E-Commerce SEO?
2. How long does e-commerce seo take to show results?
3. How much does e-commerce seo cost?
4. Do you offer e-commerce seo for international clients?
5. How is SEO India Tech different for e-commerce seo?
6. Can e-commerce seo work with our existing marketing team?
7. What KPIs should we track for e-commerce seo?
8. How do we start e-commerce seo with SEO India Tech?

**None** address product pages, category SEO, faceted navigation, WooCommerce/Shopify, schema, or duplicate product URLs.

### Legacy richer FAQs (not used)

`component/services/e-commerce-seo/EcommerceSEOFAQ.js` includes product/category optimization, platforms (Shopify, WooCommerce, Magento) — **not wired to premium page**.

---

## Schema

| Type | Present | Notes |
|------|---------|-------|
| WebSite | ✅ | |
| Organization | ✅ | |
| BreadcrumbList | ✅ | Home → SEO Services → E-Commerce SEO |
| WebPage | ✅ | |
| Service | ✅ | `serviceType: E-Commerce SEO`, name = H1 |
| FAQPage | ✅ | 8 generic entities — synced |
| HowTo | ✅ | 9 steps |
| Product | ❌ | Correct — no product entities on agency page |

### Service schema accuracy

- `name`: Matches H1 ✅
- `serviceType`: E-Commerce SEO ✅
- `description`: Matches meta ✅

### Schema issues

| Issue | Priority |
|-------|----------|
| FAQPage content is generic, not ecommerce-specific | P1 |
| No duplicate FAQPage blocks | ✅ |
| Do not add Product schema without real products | — |

---

## Image SEO

| Signal | Value |
|--------|-------|
| Images with alt | 11 |
| Images missing alt | 0 |
| Sample alts | E-Commerce SEO services by SEO India Tech; growth/challenges/strategy/workflow illustrations |

**Assessment:** No image SEO P0 issues.

---

## Performance

| Signal | Assessment |
|--------|------------|
| Framework | Next.js SSG premium service page |
| Viewport | Present |
| Mobile hero | Default premium (no `backgroundImageMobile` in ecommerce override) |
| Lighthouse | Not run in this audit |

No critical red flags from HTML inspection. Hero SVG (`e-commerce-seo.svg`).

---

## Content Gaps

| Section | Exists? | E-commerce-specific? |
|---------|---------|---------------------|
| Hero | ✅ | ✅ Strong override |
| Quick answer | ✅ | ⚠️ Duplicate H2 |
| Why it matters | ✅ | ⚠️ Generic trends |
| Deliverables | ✅ | ✅ Catalog features |
| Pain points | ✅ | ⚠️ Generic + UX friction |
| Key takeaways | ✅ | ⚠️ Generic template title |
| Pillars | ✅ | ⚠️ Local/AI generic |
| Process / HowTo | ✅ | Template |
| Case study | ✅ | ❌ Generic template |
| Editorial | ✅ | ⚠️ Mixed |
| Related services | ✅ | Includes technical, local |
| Internal links | ✅ | ⚠️ Missing ecommerce blog |
| FAQ | ✅ | ❌ Generic only |
| CTA | ✅ | ✅ |

---

## Priority Recommendations

### P0 — Critical

| ID | Finding | Recommended Phase 9B action |
|----|---------|----------------------------|
| P0-1 | Duplicate quick-answer H2s | Consolidate to *What Is E-commerce SEO and Who Needs It?*; `suppressGeoAnswer: true` on `ecommerceSeoPremium` |

### P1 — High

| ID | Finding | Recommended Phase 9B action |
|----|---------|----------------------------|
| P1-1 | Generic FAQs only | Create `PAGE_FAQS.ecommerceSeo` (8 ecommerce-specific FAQs); route visible + JSON-LD |
| P1-2 | Missing checklist blog link | Add `/blog/ecommerce-seo-checklist-india` with anchor like *ecommerce SEO checklist* |
| P1-3 | No dedicated FAQ source | Map `e-commerce-seo` in `buildPremiumServiceContent` + `serviceFaqMap` |

### P2 — Medium

| ID | Finding | Recommended Phase 9B action |
|----|---------|----------------------------|
| P2-1 | Title/H1 agency-first vs Services cluster | **Preserve** unless user approves tighten to E-commerce SEO Services |
| P2-2 | Generic case study / key takeaways | Optional ecommerce case study override — only if low effort |
| P2-3 | Faceted nav only in hero | Optional one-line in deliverables or FAQ — no word-count bloat |
| P2-4 | Shopify not on page | Do not invent; optional single FAQ if accurate |
| P2-5 | Pagination, variants, crawl budget | Only address in FAQ if supported — not full new sections |
| P2-6 | Generic local pillar on ecommerce URL | Optional suppress — low priority |

### P3 — Low

| ID | Finding | Recommended Phase 9B action |
| P3-1 | `semanticTopics` generic noise | Optional trim |
| P3-2 | `keywordArchitecture` narrow WooCommerce primary | Document; optional map expansion later |
| P3-3 | Legacy EcommerceSEOFAQ unused | Do not resurrect without premium integration plan |

---

## Recommended Primary Keyword

**E-commerce SEO Services**

Supported by URL, deliverables, hero, meta product/category focus. Current “Agency” framing is adjacent — not wrong, but secondary to Services cluster for Phase 9B unless user locks agency-first.

---

## Recommended Secondary Keyword Cluster

- E-commerce SEO / ecommerce SEO
- E-commerce SEO services India
- Ecommerce SEO agency India *(current title alignment)*
- Online store SEO
- WooCommerce SEO
- Product page SEO
- Category page SEO / collection SEO
- Product schema markup
- Faceted navigation SEO *(supporting, hero already)*
- Organic ecommerce traffic / ecommerce revenue

---

## Proposed Title

**Preserve current** unless aligning to Services cluster:

`E-commerce SEO Services in India | WooCommerce & Online Store SEO | SEO India Tech`

Current title is acceptable for agency intent:

`Ecommerce SEO Agency in India | WooCommerce & Store SEO | SEO India Tech`

---

## Proposed Meta Description

**Preserve current** — strong product/category + WooCommerce alignment:

`Ecommerce SEO agency in India for WooCommerce and online stores: product pages, category optimization, technical fixes, and schema. Grow organic revenue. Free audit.`

---

## Proposed H1

**Preserve current** unless Services alignment desired:

`E-commerce SEO Services for Product Visibility and Revenue Growth`

Current:

`Ecommerce SEO Agency for Product Visibility and Revenue Growth`

---

## Proposed H2/H3 Structure

Phase 9B tightening target:

```text
H1: Ecommerce SEO Agency for Product Visibility and Revenue Growth (preserve)

H2: What Is E-commerce SEO and Who Needs It?     ← single quick answer
H2: Why E-Commerce SEO Is Essential for Growth
H2: E-Commerce SEO Deliverables
… (preserve existing structure)
H2: Continue Your Research                     ← add ecommerce checklist blog
H2: Frequently Asked Questions About E-Commerce SEO  ← 8 ecommerce FAQs
```

Remove duplicate quick-answer pair only — no full restructure.

---

## Recommended Internal Links

| Target | Anchor | Priority |
|--------|--------|----------|
| `/services/seo` | SEO services | Preserve |
| `/services/technical-seo` | Technical SEO services | Preserve |
| `/services/local-seo-service` | Local SEO services | Preserve |
| `/services/international-seo` | International SEO | Preserve |
| `/blog/ecommerce-seo-checklist-india` | Ecommerce SEO checklist | **P1 add** |
| `/industries/herbal-product-seo` | (existing) | Preserve |
| `/industries/cabinet-manufacturer-seo` | (existing) | Preserve |

No dedicated Shopify/WooCommerce child URLs to link — single canonical ecommerce service page.

---

## Recommended Schema Changes

| Change | Priority |
|--------|----------|
| FAQPage from `PAGE_FAQS.ecommerceSeo` (8 synced) | P1 |
| Preserve Service, WebPage, BreadcrumbList, HowTo | — |
| Do **not** add Product schema | — |
| Single FAQPage block | Already ✅ |

---

**Phase 9A complete. No website code modified. Stopped before Phase 9B implementation.**
