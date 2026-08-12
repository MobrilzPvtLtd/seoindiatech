# Local SEO Page Audit

**URL:** https://www.seoindiatech.com/services/local-seo-service  
**Audit date:** 2026-08-12  
**Phase:** 8A — AUDIT ONLY (no code, content, metadata, or schema changes)  
**Architecture context:** Homepage → SEO Company India | `/services/seo` → SEO Services India | `/services/local-seo-service` → Local SEO Services | `/services/gbp-optimization` → GBP Optimization (sibling/child candidate)

**Live snapshot:** `seo-audit/phase-8a-local-seo-live-snapshot.json`  
**Audit script:** `scripts/audit-local-seo-live.mjs`

---

## Executive Summary

`/services/local-seo-service` is a **live, indexable premium service page** with strong **Local SEO Services** commercial positioning in title, meta, and H1. Hero override copy is genuinely local-specific (map pack, GBP, citations, suburb pages, reviews). The page is **distinct from homepage and SEO Services hub** at the primary intent level.

**Strengths**

- Clear H1: *Local SEO Services That Put You in the Map Pack*
- Title and meta emphasize local SEO services, map pack, GBP, citations, geo pages
- Dedicated `LOCAL_SEO_FAQS` (8 local-specific questions) — better than generic-only pages
- Dedicated `SERVICE_ANSWERS['local-seo-service']` for answer-first block
- Strong `keyTakeaways` and **local-specific case study** override (multi-location home services)
- Parent/sibling service links present: `/services/seo`, technical, e-commerce, international, **GBP**
- Two relevant blog links in internal-links band: local SEO checklist + GBP guide
- Industry links: plumber, HVAC, dentist, realtor
- Schema stack complete: WebSite, Organization, BreadcrumbList, WebPage, Service, FAQPage, HowTo
- FAQ visible count matches FAQ schema count (16/16 — synchronized but bloated)
- No LocalBusiness schema (appropriate — page sells services, not a storefront listing)

**Top issues**

| Priority | Issue |
|----------|--------|
| **P0** | Duplicate quick-answer H2 pair: *What is local SEO?* vs *What is Local SEO and who needs it?* (same pattern as pre–Phase 7B technical page) |
| **P1** | **16 FAQs** — `LOCAL_SEO_FAQS` (8) merged with generic templates; near-duplicate questions (*What is local SEO service?* vs *What is Local SEO?*) |
| **P1** | **GBP overlap** — hero/meta heavily feature GBP; Related Services grid omits GBP (link only via matrix/internal band); sibling intent boundary unclear to users/crawlers |
| **P1** | No `PAGE_FAQS.localSeo` single source — FAQs from `serviceFaqMap` + `getServiceFaqs()` merge pattern |
| **P2** | Title includes **Local SEO Services in India** — mild upstream overlap with SEO Services hub phrasing (not primary cannibalisation) |
| **P2** | Generic **editorial/pillar template** dilutes local focus (technical foundation, AI/GEO, international blocks on local URL) |
| **P2** | **City pages** — all 11 city URLs appear in page HTML via global footer; only Delhi in contextual internal-links band; city relationship under-defined |
| **P2** | Missing explicit scannable coverage for some local topics (local link building, competitor analysis, local schema markup) |
| **P3** | Related Services shows Technical SEO, AI SEO, etc. — not GBP despite parent→child hierarchy candidate |
| **P3** | `semanticTopics` includes generic `local seo company india` template noise |

**Verdict:** Page is a valid **Local SEO Services** URL and should be **optimized, not repositioned**. Phase 8B should mirror Phase 6B/7B: consolidate duplicate H2, tighten FAQ to 8 dedicated items, strengthen GBP child-link in Related Services or contextual body, preserve title/H1 unless a bug is found — without targeting SEO Company India or SEO Services India as primary.

---

## Current Metadata

| Signal | Live value |
|--------|------------|
| HTTP status | 200 |
| URL | `/services/local-seo-service` |
| Canonical | `https://www.seoindiatech.com/services/local-seo-service` |
| Robots | `index, follow, max-image-preview:large, max-snippet:-1` |
| **Title** | `Local SEO India \| Local SEO Services in India \| SEO India Tech` |
| **Meta description** | `Local SEO services in India for map pack visibility, Google Business Profile optimization, citations, and geo pages. Work with a local SEO agency in India. Free audit.` |
| OG / Twitter | Aligned via `SeoHead` |
| `html lang` | `en` |
| Viewport | Present |
| Sitemap | Included (`public/sitemap.xml`) |

### Source files

| Layer | Path |
|-------|------|
| Route | `pages/services/local-seo-service/index.js` → `createPremiumServicePage('local-seo-service')` |
| Content builder | `utils/services/premium/buildPremiumServiceContent.js` |
| Override | `utils/services/premium/serviceOverrides.js` → `localSeoPremium` |
| Catalog features | `utils/serviceCategories.js` — Local Citation Building, Location Keywords, Google Maps, Local Landing Pages |
| FAQs | `utils/services/premium/serviceFaqMap.js` → `LOCAL_SEO_FAQS` + `getServiceFaqs()` generic merge |
| Answer-first | `utils/seo/answerFirstContent.js` → `SERVICE_ANSWERS['local-seo-service']` |
| Internal links | `utils/internalLinks.js` → `SERVICE_BLOG_SLUGS`, `SERVICE_INDUSTRY_LINKS`, excel matrix |
| Schema | `component/service-premium/PremiumServiceSchema.js` |
| UI | `component/industry-premium/PremiumIndustryPage.js` |

---

## Current H1/H2/H3 Structure

### H1 (1)

| H1 |
|----|
| Local SEO Services That Put You in the Map Pack |

### H2 (live — 22)

| # | H2 | Likely source |
|---|-----|---------------|
| 1 | What is local SEO? | `answerFirst` / GeoQuickAnswer |
| 2 | Why Local SEO Is Essential for Growth | `whySeoMatters` |
| 3 | **What is Local SEO and who needs it?** | `whySeoMatters.geoAnswer` (**duplicate intent**) |
| 4 | Why SEO India Tech for Local SEO | `whyChoose` |
| 5 | Local SEO Deliverables | `services` |
| 6 | Problems Local SEO Solves | `painPoints` |
| 7 | What Businesses Should Know About Local SEO | `keyTakeaways` override |
| 8 | Local SEO Delivered End-to-End | `pillars` |
| 9 | Local SEO for Every Business Stage | `audiences` |
| 10 | How We Deliver Local SEO | `process` |
| 11 | Local SEO Outcomes We Deliver | `results` |
| 12 | Why Businesses Choose SEO India Tech | `comparison` |
| 13 | Case Study: Multi-Location Home Services Brand | `caseStudy` override |
| 14 | The Complete Guide to Local SEO | `editorial` |
| 15 | Enterprise Tools. Proven Credentials. | `toolsTrust` |
| 16 | Explore Related Services | `relatedIndustries` |
| 17 | Local SEO Keywords & Topics | `semanticTopics` |
| 18 | Continue Your Research | `internalLinks` |
| 19 | What Our Clients Say | `testimonials` |
| 20 | Frequently Asked Questions About Local SEO | `faq` |
| 21 | Ready to Start Local SEO? | `contact` |
| 22 | Ready to Grow with Local SEO? | `finalCta` |

### Notable H3 clusters

- **Deliverables:** Local Citation Building, Location-Based Keyword Targeting, Google Maps Ranking Optimization, Local Landing Page Optimization
- **Pillars (generic template):** Strategy, Implementation, Local Visibility & Maps, Content, AI & GEO, Reporting
- **Editorial:** Why matters, What's included, Local/multi-market, Technical foundation/CWV, AI/GEO, E-E-A-T, ROI measurement
- **Related services (H3):** Technical SEO, AI SEO, Small Business SEO, E-Commerce SEO, International SEO, ASO — **GBP not in this grid**
- **Internal links band:** Local SEO Checklist (Europe), Google Business Profile Optimization Guide
- **Industries:** Plumber, HVAC, Dentist, Realtor SEO

**Heading issues:** P0 duplicate quick-answer H2s; H2 #7 (*What Businesses Should Know About Local SEO*) is key takeaways — not a duplicate quick-answer but regex-similar; deliverable H3s repeat twice; high template-driven H2 count.

---

## Search Intent

### Evidence-based intent mapping

| Layer | Current targeting | Strength |
|-------|-------------------|----------|
| **Primary** | Local SEO Services / Local SEO services in India | **Strong** — title, H1, meta, deliverables |
| **Secondary** | Local SEO India, map pack, Google Maps, citations, geo pages | **Strong** — meta, hero override |
| **Secondary** | Google Business Profile optimization | **Strong** — meta, hero, FAQs — risks GBP page overlap |
| **Secondary** | Local SEO agency in India | **Present** — meta |
| **Weak / diluting** | Generic SEO services, technical SEO depth, AI/GEO boilerplate | Template sections |

### Search intent type

**Commercial service intent** — businesses seeking local SEO providers for map visibility, calls, and location-based leads.

### Recommended primary keyword (audit conclusion)

**Local SEO Services**  
(natural variants: *local SEO services in India*, *local SEO services India*, *local SEO agency India*)

### Recommended secondary cluster

- Local SEO
- Local SEO India
- Google Maps SEO / map pack visibility
- Google Business Profile optimization (supporting — link to GBP child page)
- local citations / NAP consistency
- multi-location local SEO
- local landing pages / geo pages
- local SEO agency India (supporting, not primary)

**Do not target as primary on this URL:** SEO Company India, SEO Services India (assigned upstream).

---

## Homepage Cannibalisation

| Element | Homepage (`/`) | Local SEO page | Risk |
|---------|----------------|----------------|------|
| Primary title intent | SEO Company in India | Local SEO Services in India | **Low** |
| H1 | SEO Company in India | Local SEO Services (map pack) | **Low** |
| Local topics | Offerings mention local SEO | Core page topic | **Low** — expected child |
| Company/agency phrasing | SEO company in India | Local SEO **agency** in meta | **Low** |
| Body "SEO Company in India" | Primary | Not present | **Low** |
| Body "SEO services in India" | Secondary hub phrasing | Present once in template | **Low–medium** |

**Assessment:** Homepage and local page are **not competing for the same primary query**. Normal parent/child co-occurrence of "SEO" and "India."

---

## SEO Services Cannibalisation

| Element | `/services/seo` | `/services/local-seo-service` | Risk |
|---------|-----------------|-------------------------------|------|
| Primary intent | SEO Services in India | Local SEO Services | **Low** — distinct modifiers |
| Local SEO coverage | Pillar link + editorial summary (post–Phase 6B) | Full local depth | **Medium** — expected parent summarizes child |
| Title phrasing | SEO Services in India | Local SEO **Services in India** | **Low–medium** — shared "Services in India" pattern |
| H1 overlap | SEO Services in India | None | **Low** |
| Generic template | Partially trimmed on hub | Full template on local page | **Medium** dilution |

### Sections causing overlap

1. **SEO hub** — local SEO pillar/editorial (parent summarizes; child should be deeper)
2. **Local page editorial** — "Local and multi-market visibility" overlaps hub local summary
3. **Local page pillars** — generic six-pillar template not fully local-specific
4. **semanticTopics** — `local seo company india` generic cluster

**Assessment:** Manageable cannibalisation. Local page should deepen **map pack, citations, NAP, reviews, geo pages, multi-location** while parent keeps summary + link. Phase 8B should **not** repeat SEO Services India as H1/title primary.

---

## Technical SEO Relationship

| Signal | Assessment |
|--------|------------|
| Link to `/services/technical-seo` | ✅ Present (internal links / matrix) |
| Technical topics on local page | Editorial H3 "Technical foundation and Core Web Vitals" — generic template |
| Intent competition | **Low** — technical page targets crawl/indexation; local page mentions CWV as supporting |
| Recommended relationship | Sibling under SEO hub; contextual link when discussing site health for local pages |

**Assessment:** No meaningful cannibalisation with Technical SEO. Optional Phase 8B: keep sibling link; do not expand technical depth on local URL.

---

## GBP Relationship

This is the **highest-priority sibling relationship** on this audit.

### Side-by-side comparison (live)

| Signal | Local SEO (`/services/local-seo-service`) | GBP (`/services/gbp-optimization`) |
|--------|-------------------------------------------|-------------------------------------|
| **Title** | Local SEO India \| Local SEO Services in India \| SEO India Tech | Google Business Profile Optimization \| GBP SEO Experts \| SEO India Tech |
| **H1** | Local SEO Services That Put You in the Map Pack | Google Business Profile Optimization That Drives Calls and Visits |
| **Primary intent** | Local SEO Services (broad local program) | GBP Optimization (profile-specific) |
| **Duplicate H2 pattern** | ✅ P0 — two quick-answer H2s | ✅ Same P0 pattern on GBP page |
| **GBP mentions (local page body)** | Google Business Profile: 14; GBP: 18; Google Maps: 12; map pack: 13 | Core topic |
| **Meta GBP mention** | Yes — "Google Business Profile optimization" | Yes — entire meta is GBP |
| **Catalog relationship** | Both under `seo` hub in `serviceCategories.js` | Sibling service, not nested route |
| **FAQ cross-reference** | FAQ: "How does local SEO work with GBP optimization?" | FAQ: "How is GBP different from local SEO?" |
| **Blog overlap** | Links to GBP guide + local checklist | Links to GBP guide + local checklist |
| **Cross-links** | ✅ `/services/gbp-optimization` on page (excel matrix) | ✅ Links back to local SEO (excel matrix) |
| **Related Services grid** | Technical SEO, AI SEO, SMB, E-commerce, International, ASO — **no GBP card** | (not audited in depth) |

### Intent analysis

| Question | Audit finding |
|----------|---------------|
| Is GBP a component of Local SEO? | **Yes, commercially and in copy** — hero, meta, FAQs, case study all treat GBP as core deliverable |
| Does GBP page have distinct intent? | **Yes** — title/H1 focus on *Google Business Profile Optimization* / profile management, not full local program |
| Are two pages competing for "Local SEO Services"? | **Partial risk** — Local page is correctly primary for *Local SEO Services*; GBP page title does not use "Local SEO Services" but uses "GBP SEO Experts" and map/calls framing |
| Overlap driver | Local page meta and hero lead with GBP; GBP page covers profile-only scope — **content boundary exists but linking hierarchy is weak visually** |

### Recommended internal-link relationship (audit only — do not implement)

```text
/services/seo
        ↓
/services/local-seo-service   (Local SEO Services — map pack, citations, geo pages, reviews)
        ↓
/services/gbp-optimization  (GBP Optimization — profile-specific deep service)
```

**Rationale:** Existing content supports parent→child hierarchy. Local SEO page already explains GBP as foundation; GBP page narrows to profile optimization. Phase 8B should **surface GBP in Related Services or a dedicated "Google Business Profile" subsection link** with descriptive anchor (not "click here"), without duplicating full GBP page content on local URL.

**Do not merge pages** — distinct URLs and intents are justified.

---

## City Page Relationship

### City URLs detected on local SEO page HTML

All 11 `LOCATION_CITIES` appear via **global footer** (`component/layout/footer/Footer.js`):

- Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Noida, Gurgaon, Chandigarh, Jaipur, Kolkata

### Contextual page-level city links

| Source | City links |
|--------|------------|
| `getServiceInternalLinks('local-seo-service')` | `/seo-services/seo-services-in-delhi` only (one city) |
| Internal links band | No additional city pages |
| Footer | All 11 cities (site-wide, not local-page-specific) |

### City page intent (`/seo-services/seo-services-in-{city}`)

City pages target **geo-modified SEO services** (e.g. SEO services in Delhi) — related but **not identical** to Local SEO Services intent. They are **supporting geo landing pages**, not a replacement for the Local SEO service page.

### Audit recommendation (no implementation)

| Option | Assessment |
|--------|------------|
| Link to selected city pages from local page body | **Optional P2** — 2–4 flagship cities (Delhi, Mumbai, Bangalore, Noida) with anchors like "SEO services in Delhi" — avoid footer-style mass linking |
| Link to city hub | No dedicated city hub exists; `/seo-services` index may apply |
| Remain separate | **Acceptable** — current state relies on footer + one Delhi link |
| Doorway risk | **Low today** — no mass city block on local page body; footer links are site-wide pattern |

---

## Local SEO Topic Coverage

| Topic | Covered? | Where / quality |
|-------|----------|-----------------|
| Local SEO strategy | ✅ | Pillars, process, editorial |
| Google Business Profile | ✅✅ | Hero, meta, FAQs, case study — **heavy** |
| Google Maps / map pack | ✅✅ | H1, meta, features, hero |
| Local keyword research | ⚠️ | Location-Based Keyword Targeting deliverable; not deep editorial |
| Local citations | ✅ | Feature, hero, case study, keyTakeaways (NAP) |
| NAP consistency | ✅ | keyTakeaways, case study, FAQ multi-location |
| Local landing pages | ✅ | Feature, hero (suburb pages), audiences |
| Reviews / reputation | ✅ | Hero, case study, keyTakeaways; ORM not linked |
| Local link building | ❌ | Not explicit |
| On-page local SEO | ⚠️ | Local Landing Page Optimization feature; thin |
| Schema / local business markup | ⚠️ | keyTakeaways (FAQ schema); no LocalBusiness schema; local schema not scannable |
| Multi-location SEO | ✅ | Audiences, case study, FAQ, blog checklist link |
| Local technical SEO | ⚠️ | Generic editorial CWV block — not local-specific |
| Local reporting | ✅ | Process, tools (GSC, GA4), FAQ KPIs |
| Local competitor analysis | ❌ | Not explicit |
| White-label local SEO | ✅ | FAQ dedicated question |

**Genuine gaps (not filler):** local link building, competitor analysis, explicit local schema markup — only add in Phase 8B if woven into existing sections without word-count bloat.

---

## Commercial Intent

| Commercial element | Present? | Quality |
|--------------------|----------|---------|
| What Local SEO services are | ✅ | answerFirst + hero override |
| Who needs Local SEO | ⚠️ | Generic geoAnswer duplicate; override hero is better |
| What is included | ✅ | Deliverables (4 features) + editorial H3 |
| Google Business Profile work | ✅✅ | Throughout — consider linking to GBP child |
| Local keyword strategy | ⚠️ | Feature-level only |
| Citation / listing work | ✅ | Features, hero, case study |
| Review strategy | ✅ | Hero, case study, keyTakeaways |
| Local landing pages | ✅ | Hero, features, audiences |
| Local SEO process | ✅ | 9-step HowTo + process section |
| Deliverables | ✅ | 4 catalog features mapped to service items |
| Reporting | ✅ | Process, tools, FAQ KPIs |
| Expected outcomes | ✅ | Results section + case study metrics |
| Why SEO India Tech | ✅ | whyChoose, comparison, toolsTrust |
| CTA | ✅ | Contact + final CTA + hero CTAs |

**Weak areas:** Generic geoAnswer undermines "who needs it"; deliverables count is thin (4 items vs breadth of hero promises); GBP child service not in Related Services grid.

---

## Internal Linking

### Required service links (live)

| Target | Present? | Notes |
|--------|----------|-------|
| `/services/seo` | ✅ | Parent hub — excel matrix + breadcrumbs |
| `/services/technical-seo` | ✅ | Internal links H3 |
| `/services/e-commerce-seo` | ✅ | Related services |
| `/services/international-seo` | ✅ | Related services |
| `/services/gbp-optimization` | ✅ | Excel matrix — anchor "gbp optimization" |

### Blog / resource links (live)

| URL | Anchor context |
|-----|----------------|
| `/blog/local-seo-checklist-multi-location-europe` | Internal links band H3 |
| `/blog/google-business-profile-optimization-guide` | Internal links band H3 |

### Industry links (live)

Plumber SEO, HVAC SEO, Dentist SEO, Realtor SEO — appropriate for local service verticals.

### City links

- Contextual: Delhi only (`getServiceInternalLinks`)
- Footer: all 11 cities (global)

### Gaps / weaknesses (recommendations only)

| Gap | Priority |
|-----|----------|
| GBP not in Explore Related Services grid | P1 |
| No link to `/services/online-reputation-management` despite review focus | P2 |
| City pages — only one contextual link | P2 |
| `seo-checklist-small-businesses-europe` in `SERVICE_BLOG_SLUGS` but not in live top blog links (limit 2) | P3 |

### Excessive links?

97 unique internal paths — mostly footer/nav. Body contextual links are reasonable. No spam pattern.

---

## FAQ

| Signal | Value |
|--------|-------|
| Visible FAQ count | **16** |
| FAQ schema count | **16** |
| FAQPage blocks | **1** |
| Visible/schema parity | ✅ Synchronized |
| Hidden FAQ content | None detected |

### FAQ source architecture

```text
LOCAL_SEO_FAQS (serviceFaqMap.js) — 8 local-specific items
        ↓
getServiceFaqs() merges GENERIC_SERVICE_FAQ_TEMPLATES until 20 cap
        ↓
buildPremiumServiceContent → content.faq.items (16 items)
        ↓
PremiumFaq (visible) + PremiumServiceSchema (FAQPage)
```

**No `PAGE_FAQS.localSeo`** — unlike post–Phase 7B technical page pattern.

### FAQ quality issues

| Issue | Detail |
|-------|--------|
| Near-duplicate questions | #1 "What is local SEO service?" vs #9 "What is Local SEO?" |
| Generic tail | Items 9–16 are generic templates (cost, international, KPIs, start) — partially redundant with local-specific set |
| Count | 16 exceeds Phase 6B/7B target of 8 focused FAQs |

### Sample questions (all 16)

1. What is local SEO service?
2. How long before local SEO results appear?
3. Do you offer local SEO for small businesses?
4. What is included in white label local SEO services?
5. Can local SEO help my business appear in Google Maps?
6. How does local SEO work with GBP optimization?
7. Can local SEO work for multi-location businesses?
8. Do you optimize for voice and AI local search?
9. What is Local SEO? *(generic merge duplicate)*
10. How long does local seo take to show results? *(generic)*
11. How much does local seo cost?
12. Do you offer local seo for international clients?
13. How is SEO India Tech different for local seo?
14. Can local seo work with our existing marketing team?
15. What KPIs should we track for local seo?
16. How do we start local seo with SEO India Tech?

---

## Schema

| Type | Present | Notes |
|------|---------|-------|
| WebSite | ✅ | `@id` website node |
| Organization | ✅ | `buildOrganizationNode()` |
| BreadcrumbList | ✅ | Home → SEO Services → Local SEO |
| WebPage | ✅ | Title, description, speakable |
| Service | ✅ | `serviceType: Local SEO`, name = H1 |
| FAQPage | ✅ | 16 entities — synced with visible |
| HowTo | ✅ | 9 process steps |
| LocalBusiness | ❌ | Not present — **correct** for agency service page |

### Service schema accuracy

- `name`: Local SEO Services That Put You in the Map Pack ✅
- `serviceType`: Local SEO ✅
- `description`: Matches meta ✅
- `areaServed`: India, US, UK, Australia, UAE, Canada ✅

### Schema issues

| Issue | Priority |
|-------|----------|
| FAQPage has 16 items including generic duplicates | P1 |
| No duplicate FAQPage blocks | ✅ |
| LocalBusiness on agency page would be inaccurate | Do not add |

---

## Image SEO

| Signal | Value |
|--------|-------|
| Images with alt | 11 |
| Images missing alt | 0 |
| Sample alts | Local SEO services by SEO India Tech; growth/challenges/strategy/workflow/map/content/AI/reporting illustrations |

**Assessment:** Alts are descriptive and service-specific. No image SEO P0 issues.

---

## Performance

| Signal | Assessment |
|--------|------------|
| Framework | Next.js SSR/SSG (premium service page) |
| Viewport | Present |
| Mobile hero | `backgroundImageMobile` configured in override |
| Lighthouse | **Not run in this audit** — recommend optional Phase 8B post-deploy check |
| External scripts | Standard site footer/social — 9 external URLs (social, wa.me, llms.txt) |

No critical performance red flags from HTML inspection. Hero uses SVG (`local-seo-service.svg`) — generally lightweight.

---

## Content Gaps

Structured map of existing page:

| Section | Exists? | Local-specific? |
|---------|---------|-----------------|
| Hero | ✅ | ✅ Strong override |
| Quick answer | ✅ | ⚠️ Duplicate H2 problem |
| Why it matters | ✅ | ⚠️ Generic trends + duplicate geoAnswer |
| Why choose us | ✅ | Template |
| Deliverables | ✅ | ✅ Catalog features |
| Pain points | ✅ | ✅ Includes weak local presence |
| Key takeaways | ✅ | ✅ Override |
| Pillars | ✅ | ⚠️ Generic template |
| Audiences | ✅ | ✅ Multi-location item |
| Process / HowTo | ✅ | Template |
| Results | ✅ | Template metrics |
| Comparison | ✅ | Template |
| Case study | ✅ | ✅ Strong local override |
| Editorial guide | ✅ | ⚠️ Mixed local + generic blocks |
| Tools / trust | ✅ | Template |
| Related services | ✅ | ⚠️ Missing GBP card |
| Semantic topics | ✅ | ⚠️ Generic |
| Internal links | ✅ | ✅ 2 local blogs |
| Testimonials | ✅ | Template |
| FAQ | ✅ | ⚠️ 16 merged FAQs |
| Contact / CTA | ✅ | ✅ |

**Missing / weak (genuine gaps only):** explicit GBP child prominence, local link building, competitor analysis, optional flagship city contextual links, dedicated `PAGE_FAQS.localSeo` source.

---

## Priority Recommendations

### P0 — Critical

| ID | Finding | Recommended Phase 8B action |
|----|---------|----------------------------|
| P0-1 | Duplicate quick-answer H2s: *What is local SEO?* + *What is Local SEO and who needs it?* | Consolidate to one H2 (e.g. *What Is Local SEO and Who Needs It?*); `suppressGeoAnswer: true` on `localSeoPremium` — same pattern as Phase 6B/7B |

### P1 — High

| ID | Finding | Recommended Phase 8B action |
|----|---------|----------------------------|
| P1-1 | 16 FAQs with generic merge duplicates | Introduce `PAGE_FAQS.localSeo` (8 items) OR stop generic merge for this slug; target 8 visible = 8 schema |
| P1-2 | GBP sibling under-linked in Related Services | Add `/services/gbp-optimization` to related grid or prominent contextual link with anchor like "Google Business Profile optimization" |
| P1-3 | GBP content overlap on local page | Preserve GBP mentions in hero/meta (accurate) but avoid expanding GBP depth on local URL — link to child page |
| P1-4 | No dedicated FAQ single source | Route visible + JSON-LD from one array (`PAGE_FAQS.localSeo`) |

### P2 — Medium

| ID | Finding | Recommended Phase 8B action |
|----|---------|----------------------------|
| P2-1 | Title shares "Services in India" pattern with SEO hub | **Preserve** unless user opts to tighten — current title is strong for Local SEO; optional drop "Local SEO India" redundancy |
| P2-2 | Generic editorial blocks (technical CWV, AI/GEO) | Do not broad rewrite — optional suppress or shorten off-topic H3s only if low effort |
| P2-3 | City page relationship weak | Optional 2–4 flagship city contextual links; no doorway blocks |
| P2-4 | Local link building / competitor analysis not scannable | Only add if integrated into existing deliverables/editorial without bloat |
| P2-5 | ORM overlap (reviews) | Optional contextual link to `/services/online-reputation-management` |

### P3 — Low

| ID | Finding | Recommended Phase 8B action |
|----|---------|----------------------------|
| P3-1 | `semanticTopics` generic "company india" | Optional trim in override |
| P3-2 | Third blog slug in catalog not linked | Optional third link only if natural |
| P3-3 | Template case study metrics | Verify substantiation separately |

---

## Recommended Primary Keyword

**Local SEO Services**

Supported by live title, H1, meta, Service schema, and hero copy. Do not reposition to SEO Services India or SEO Company India.

---

## Recommended Secondary Keyword Cluster

- Local SEO
- Local SEO India
- Local SEO services in India
- Local SEO agency India *(supporting)*
- Google Maps SEO / map pack visibility
- Google Business Profile optimization *(supporting — child page deepens)*
- local citations / NAP consistency
- multi-location local SEO
- local landing pages / geo pages
- near me SEO *(natural in hero copy)*

---

## Proposed Title

**Preserve current** unless tightening redundancy:

`Local SEO Services in India | Local SEO Agency | SEO India Tech`

*(Optional: remove leading "Local SEO India |" to reduce title length — current title is acceptable.)*

**Do not change to:** SEO Services in India | SEO Company India

---

## Proposed Meta Description

**Preserve current** — strong alignment:

`Local SEO services in India for map pack visibility, Google Business Profile optimization, citations, and geo pages. Work with a local SEO agency in India. Free audit.`

Optional minor tweak: add "multi-location" if case study emphasis desired — not required.

---

## Proposed H1

**Preserve current:**

`Local SEO Services That Put You in the Map Pack`

Clear commercial intent, distinct from SEO hub H1 and GBP H1.

---

## Proposed H2/H3 Structure

Phase 8B tightening target (not repositioning):

```text
H1: Local SEO Services That Put You in the Map Pack

H2: What Is Local SEO and Who Needs It?          ← single consolidated quick answer
H2: Why Local SEO Is Essential for Growth
H2: Why SEO India Tech for Local SEO
H2: Local SEO Deliverables
H2: Problems Local SEO Solves
H2: What Businesses Should Know About Local SEO
H2: Local SEO Delivered End-to-End
H2: Local SEO for Every Business Stage
H2: How We Deliver Local SEO
H2: Local SEO Outcomes We Deliver
H2: Case Study: Multi-Location Home Services Brand
H2: The Complete Guide to Local SEO
H2: Explore Related Services                      ← include GBP Optimization card
H2: Continue Your Research                       ← checklist + GBP guide blogs
H2: Frequently Asked Questions About Local SEO   ← 8 FAQs
H2: Ready to Start / Grow with Local SEO?
```

Remove duplicate quick-answer H2 pair only — do not restructure entire page.

---

## Recommended Internal Links

| Target | Anchor (descriptive) | Placement |
|--------|----------------------|-----------|
| `/services/seo` | SEO services | Preserve — parent hub |
| `/services/gbp-optimization` | Google Business Profile optimization | **Elevate** — Related Services or post-deliverables context |
| `/services/technical-seo` | Technical SEO services | Preserve — sibling |
| `/services/e-commerce-seo` | E-Commerce SEO | Preserve |
| `/services/international-seo` | International SEO | Preserve |
| `/blog/local-seo-checklist-multi-location-europe` | Local SEO checklist | Preserve |
| `/blog/google-business-profile-optimization-guide` | Google Business Profile optimization guide | Preserve |
| `/seo-services/seo-services-in-delhi` (+ optional Mumbai, Noida, Bangalore) | SEO services in [city] | Optional P2 — 1–3 additional flagship cities |
| `/services/online-reputation-management` | Online reputation management | Optional P2 — reviews context |

**Architecture target:**

```text
/services/seo → /services/local-seo-service → /services/gbp-optimization
```

---

## Recommended Schema Changes

| Change | Priority |
|--------|----------|
| Reduce FAQPage to 8 synced local-specific FAQs | P1 |
| Preserve Service, WebPage, BreadcrumbList, HowTo, Organization | — |
| Do **not** add LocalBusiness schema to agency service page | — |
| Do **not** add fake reviews/ratings | — |
| Single FAQPage block only | Already ✅ |

---

**Phase 8A complete. No code changes made. Stopped before Phase 8B implementation.**
