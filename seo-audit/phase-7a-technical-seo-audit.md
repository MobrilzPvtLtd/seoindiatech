# Technical SEO Page Audit

**URL:** https://www.seoindiatech.com/services/technical-seo  
**Audit date:** 2026-08-12  
**Phase:** 7A — AUDIT ONLY (no code, content, metadata, or schema changes)  
**Architecture context:** Homepage → SEO Company India | `/services/seo` → SEO Services India | `/services/technical-seo` → Technical SEO Services

**Live snapshot:** `seo-audit/phase-7a-technical-seo-live-snapshot.json`  
**Audit script:** `scripts/audit-technical-seo-live.mjs`

---

## Executive Summary

`/services/technical-seo` is a **live, indexable premium service page** with strong technical SEO commercial signals in title, meta, and H1. It is **distinct from homepage and SEO Services hub intent** at the primary level, though generic template sections introduce mild upstream overlap and off-topic dilution (local SEO, AI/GEO boilerplate).

**Strengths**

- Clear H1 focused on technical outcomes: *Technical SEO Services That Fix What Blocks Rankings*
- Title and meta emphasize technical SEO services, audits, crawlability, CWV, indexation, structured data
- Substantial page depth (20+ sections) using premium service architecture
- Parent/sibling service links present: `/services/seo`, local, e-commerce, international
- Schema stack complete: WebSite, Organization, BreadcrumbList, WebPage, Service, FAQPage, HowTo
- FAQ visible count matches FAQ schema (8/8 — synchronized)
- Hero override copy is technical-specific and credible
- `keyTakeaways` override adds genuine technical SEO concepts (canonicals, CWV, schema)

**Top issues**

| Priority | Issue |
|----------|--------|
| **P0** | Duplicate quick-answer H2 pair: *What is Technical SEO?* vs *What is Technical SEO and who needs it?* |
| **P1** | FAQs use **generic service templates** (`getServiceFaqs`) — not a dedicated technical FAQ source; thin commercial specificity |
| **P1** | No dedicated `SERVICE_ANSWERS['technical-seo']` — answerFirst falls back to generic *What is technical seo?* |
| **P1** | Generic **editorial/pillar template** dilutes technical focus (local visibility, AI/GEO, reputation blocks on a technical URL) |
| **P2** | Missing contextual link to **technical SEO blog** (`/blog/technical-seo-checklist-enterprise-websites`) |
| **P2** | Title includes **Technical SEO Company** — secondary company signal; not homepage-level cannibalisation but worth tightening |
| **P2** | Several technical topics only implied, not scannable (robots.txt, redirects, JS SEO, log analysis) |
| **P3** | Composite case study metrics (+186%, etc.) — same template as other services; verify substantiation |

**Verdict:** Page is a valid **Technical SEO Services** URL and should be **optimized, not repositioned**. Phase 7B should mirror Phase 6B pattern: fix duplicate H2, strengthen parent/sibling links where contextual, sync FAQs to a dedicated source, and trim generic template noise — without changing primary title/H1 intent.

---

## Current Metadata

| Signal | Live value |
|--------|------------|
| HTTP status | 200 |
| URL | `/services/technical-seo` |
| Canonical | `https://www.seoindiatech.com/services/technical-seo` |
| Robots | `index, follow, max-image-preview:large, max-snippet:-1` |
| **Title** | `Technical SEO Services in India \| Technical SEO Company \| SEO India Tech` |
| **Meta description** | `Technical SEO services in India: audits, crawlability, Core Web Vitals, indexation, and structured data from a technical SEO agency focused on measurable fixes. Free audit.` |
| OG / Twitter | Aligned via `SeoHead` |
| `html lang` | `en` |
| Viewport | Present |
| Sitemap | Included (`public/sitemap.xml`) |

### Source files

| Layer | Path |
|-------|------|
| Route | `pages/services/technical-seo/index.js` → `createPremiumServicePage('technical-seo')` |
| Content builder | `utils/services/premium/buildPremiumServiceContent.js` |
| Override | `utils/services/premium/serviceOverrides.js` → `technicalSeoPremium` |
| Catalog | `utils/serviceCategories.js` (features: audits, CWV, crawl/indexation, schema) |
| FAQs | `utils/services/premium/serviceFaqMap.js` → `getServiceFaqs()` generic templates |
| Answer-first | `utils/seo/answerFirstContent.js` → generic fallback (no `technical-seo` key) |
| Schema | `component/service-premium/PremiumServiceSchema.js` |
| UI | `component/industry-premium/PremiumIndustryPage.js` |

---

## Current H1/H2/H3 Structure

### H1 (1)

| H1 |
|----|
| Technical SEO Services That Fix What Blocks Rankings |

### H2 (live — 22)

| # | H2 | Likely source |
|---|-----|---------------|
| 1 | What is Technical SEO? | `answerFirst` / GeoQuickAnswer |
| 2 | Why Technical SEO Is Essential for Growth | `whySeoMatters` |
| 3 | **What is Technical SEO and who needs it?** | `whySeoMatters.geoAnswer` (**duplicate intent**) |
| 4 | Why SEO India Tech for Technical SEO | `whyChoose` |
| 5 | Technical SEO Deliverables | `services` |
| 6 | Problems Technical SEO Solves | `painPoints` |
| 7 | What Businesses Should Know About Technical SEO | `keyTakeaways` override |
| 8 | Technical SEO Delivered End-to-End | `pillars` |
| 9 | Technical SEO for Every Business Stage | `audiences` |
| 10 | How We Deliver Technical SEO | `process` |
| 11 | Technical SEO Outcomes We Deliver | `results` |
| 12 | Why Businesses Choose SEO India Tech | `comparison` |
| 13 | Case Study: Technical SEO Growth | `caseStudy` |
| 14 | The Complete Guide to Technical SEO | `editorial` |
| 15 | Enterprise Tools. Proven Credentials. | `toolsTrust` |
| 16 | Explore Related Services | `relatedIndustries` |
| 17 | Technical SEO Keywords & Topics | `semanticTopics` |
| 18 | Continue Your Research | `internalLinks` |
| 19 | What Our Clients Say | `testimonials` |
| 20 | Frequently Asked Questions About Technical SEO | `faq` |
| 21 | Ready to Start Technical SEO? | `contact` |
| 22 | Ready to Grow with Technical SEO? | `finalCta` |

### Notable H3 clusters

- **Deliverables (linked):** Technical SEO Audits, Core Web Vitals, Crawl & Indexation Fixes, Schema & Structured Data
- **Pillars (generic template):** Strategy, Implementation, Local Visibility & Maps, Content, AI & GEO, Reporting
- **Editorial:** Why matters, What's included, Local/multi-market, CWV foundation, AI/GEO, E-E-A-T, ROI measurement
- **Related services:** Local SEO, AI SEO, Small Business SEO, E-Commerce SEO, International SEO, ASO

**Heading issues:** Duplicate quick-answer H2s (P0); high H2 count from shared template; some H3s repeat (Technical SEO Audits appears twice); generic pillar H3 *Local Visibility & Maps* off-topic for technical URL.

---

## Search Intent

### Evidence-based intent mapping

| Layer | Current targeting | Strength |
|-------|-------------------|----------|
| **Primary** | Technical SEO Services / Technical SEO services in India | **Strong** — title, H1, meta, deliverables |
| **Secondary** | Technical SEO audit, crawlability, Core Web Vitals, indexation, structured data | **Strong** — meta, features, keyTakeaways |
| **Secondary** | Technical SEO agency / Technical SEO company | **Present** — meta "agency", title "Company" |
| **Weak / diluting** | Generic SEO services, local SEO, AI SEO, digital marketing | Template sections |

### Search intent type

**Commercial service intent** — buyers evaluating technical SEO providers, audits, and site-health fixes. Not informational-only (though quick-answer blocks support informational SERP features).

### Recommended primary keyword (audit conclusion)

**Technical SEO Services**  
(natural variants: *technical SEO services in India*, *technical SEO services India*, *website technical SEO*)

### Recommended secondary cluster

- Technical SEO
- Technical SEO audit / technical SEO audits
- Technical SEO agency (supporting, not primary)
- Core Web Vitals SEO
- crawlability and indexation
- structured data / schema markup
- website technical SEO
- technical SEO services India

**Do not target as primary on this URL:** SEO Company India, SEO Services India (assigned upstream).

---

## Homepage Cannibalisation

| Element | Homepage (`/`) | Technical SEO page | Risk |
|---------|----------------|-------------------|------|
| Primary title intent | SEO Company in India | Technical SEO Services in India | **Low** |
| H1 | SEO Company… | Technical SEO Services… | **Low** |
| Technical topics | Mentioned in services sections | Core page topic | **Low** — expected child coverage |
| Company/agency phrasing | SEO company in India | Technical SEO **company** in title | **Low–medium** secondary overlap |
| FAQ overlap | General SEO company FAQs | Generic technical SEO FAQs | **Low** |

**Assessment:** Homepage and technical page are **not competing for the same primary query**. Homepage may share broad "SEO" co-occurrence — normal for a service hierarchy.

---

## SEO Services Cannibalisation

| Element | `/services/seo` | `/services/technical-seo` | Risk |
|---------|-----------------|---------------------------|------|
| Primary intent | SEO Services in India | Technical SEO Services | **Low** — distinct modifiers |
| Technical SEO editorial block | Yes (dedicated H3 + pillar link post–Phase 6B) | Full page depth | **Medium** — parent summarizes child |
| Crawlability / CWV / schema | Covered on SEO hub editorial | Core technical page | **Medium** — topical overlap expected |
| H1 "SEO Services" | SEO Services in India | None on technical page | **Low** |
| Generic template sections | Trimmed on SEO hub (partial) | Full generic template still present | **Medium** dilution on technical URL |

### Sections causing overlap (not necessarily wrong, but redundant)

1. **SEO hub editorial** — Technical SEO, On-page, Local, etc. (parent summarizes; child should be deeper)
2. **Technical page editorial** — "Technical foundation and Core Web Vitals" duplicates hub + override hero
3. **Technical page pillars** — Generic six-pillar template includes Local, Content, AI — not technical-specific
4. **semanticTopics** — includes `technical seo company india` alongside service terms

**Assessment:** Cannibalisation is **manageable** if technical page deepens **audit, crawl, indexation, CWV, schema, redirects, architecture** while parent keeps **summary + link**. Phase 7B should **not** repeat SEO Services India phrasing.

---

## Technical Topic Coverage

| Topic | Covered? | Where / quality |
|-------|----------|-----------------|
| Technical SEO audits | ✅ | Features, deliverables, pillars, meta |
| Crawlability | ✅ | Meta, hero, features |
| Indexability / indexation | ✅ | Meta, features ("Crawl & Indexation Fixes") |
| Site architecture | ⚠️ | Implied in audits; not dedicated H3 |
| Internal linking | ⚠️ | Generic editorial; not technical-deep |
| XML sitemap | ❌ | Not explicit |
| robots.txt | ❌ | Not explicit |
| Canonicalization | ✅ | `keyTakeaways` override |
| Redirects | ❌ | Not explicit |
| 404 errors | ❌ | Not explicit |
| Duplicate content | ✅ | `keyTakeaways` (canonicals, parameters) |
| Structured data / schema | ✅ | Features, deliverables, meta |
| Core Web Vitals | ✅ | Strong — meta, features, editorial block |
| Page speed | ⚠️ | CWV / UX friction in pain points |
| Mobile SEO | ⚠️ | UX friction; not dedicated |
| JavaScript SEO | ❌ | Not explicit |
| HTTPS / security | ❌ | Not explicit |
| International / hreflang | ⚠️ | Generic editorial "multi-market" |
| Log-file analysis | ❌ | Not mentioned |
| Monitoring / reporting | ✅ | Process, tools (GSC, GA4), FAQ KPIs |
| Search Console validation | ⚠️ | Implied in pillar process text |

**Gap summary:** Core commercial technical topics (audit, CWV, crawl, schema) are covered. **Enterprise-technical depth** (robots, sitemaps, redirects, JS SEO, log files) is thin or absent — add only if Phase 7B introduces scannable subsections without bloating.

---

## Commercial Intent

| Commercial element | Present? | Notes |
|--------------------|----------|-------|
| What technical SEO is | ✅ | answerFirst + geoAnswer (duplicate) |
| Who needs it | ⚠️ | geoAnswer generic; audiences section template |
| Audit includes | ⚠️ | Features list; no audit deliverables table |
| Problems fixed | ✅ | painPoints + hero |
| Process | ✅ | 9-step HowTo + schema |
| Deliverables | ✅ | services grid (4 feature-linked items) |
| Business benefits | ✅ | results, case study, outcomes |
| Reporting | ✅ | process, tools, FAQ KPIs |
| Ongoing technical SEO | ⚠️ | Implied in process/optimization steps |
| Why SEO India Tech | ✅ | whyChoose, comparison, toolsTrust |
| CTA | ✅ | Multiple — audit, consultation, sticky mobile |

**Weak spots:** Audit deliverables not enumerated; ongoing maintenance light; generic testimonials not technical-specific.

---

## Internal Linking

### Parent / sibling links (live — confirmed)

| Destination | In page body? |
|-------------|---------------|
| `/services/seo` | ✅ |
| `/services/local-seo-service` | ✅ |
| `/services/e-commerce-seo` | ✅ |
| `/services/international-seo` | ✅ |

### Industry links (default template)

- `/industries/realtor-seo`, `dentist-seo`, `hvac-seo` (via `getServiceInternalLinks` defaults)
- No wineries/optometrist/accountants on technical page (appropriate)

### Blog / resource links

| Resource | Status |
|----------|--------|
| `/blog/seo-trends-european-businesses-2026` | ✅ Linked |
| `/blog/technical-seo-checklist-enterprise-websites` | ❌ **Missing** (high relevance) |
| `/seo-packages` | ✅ |
| `/seo-services/seo-services-in-delhi` | ✅ |

### Anchor text quality

- Service deliverables use descriptive titles (Technical SEO Audits, etc.)
- Internal links band uses matrix/catalog titles — generally good
- No excessive "click here" patterns observed

### Recommended for Phase 7B (not implemented)

- Prominent contextual link **up** to `/services/seo` (SEO Services hub) in hero or early body if not already above fold
- Link to **technical SEO checklist blog**
- Keep sibling links (local, e-commerce, international) — already present

---

## FAQ

| Item | Value |
|------|--------|
| **Visible FAQ count** | 8 |
| **FAQ schema count** | 8 |
| **FAQPage blocks** | 1 |
| **Source** | `getServiceFaqs(entry)` → `GENERIC_SERVICE_FAQ_TEMPLATES` merged to 8 items |
| **PAGE_FAQS entry** | **None** dedicated for technical SEO |
| **Visible/schema sync** | ✅ Same `content.faq.items` array |
| **Hidden FAQ** | None detected |
| **Duplicate FAQPage** | None (`PremiumFaq` `showSchema={false}`) |

### Live FAQ questions (generic)

1. What is Technical SEO?
2. How long does technical seo take to show results?
3. How much does technical seo cost?
4. Do you offer technical seo for international clients?
5. How is SEO India Tech different for technical seo?
6. Can technical seo work with our existing marketing team?
7. What KPIs should we track for technical seo?
8. How do we start technical seo with SEO India Tech?

**Issue:** Synced but **commercial-generic** — missing technical-specific questions (audit scope, CWV, indexation, schema, fix timelines). Phase 7B should introduce `PAGE_FAQS.technicalSeo` or equivalent single source (8+ technical questions) without breaking sync pattern established on homepage/SEO hub.

---

## Schema

### Live `@graph` types

| Type | Status | Notes |
|------|--------|-------|
| WebSite | ✅ | |
| Organization | ✅ | `buildOrganizationNode()` |
| BreadcrumbList | ✅ | Home → Services → Technical SEO |
| WebPage | ✅ | Title/description from content.seo |
| **Service** | ✅ | `name`: H1 text; `serviceType`: Technical SEO |
| FAQPage | ✅ | 8 questions |
| HowTo | ✅ | 9 process steps |

### Service node (live)

- `name`: Technical SEO Services That Fix What Blocks Rankings (matches H1 — good)
- `description`: Matches meta description prefix
- `provider`: Organization reference
- `areaServed`: India, USA, UK, Australia, UAE, Canada

### Schema issues (audit only)

- No fake AggregateRating in JSON-LD (UI trust bar has 4.9 — not in schema — good)
- Awards in UI only — verify before schema expansion
- FAQ generic content in schema — accurate to visible but not optimal for technical intent

---

## Image SEO

| Aspect | Finding |
|--------|---------|
| Hero | SVG `technical-seo-checklist-enterprise-websites-hero.svg` — lightweight |
| Alt coverage | 11 images with alt; 0 missing alt (live) |
| Sample alts | Descriptive ("Technical SEO services by SEO India Tech", pillar illustrations) |
| Format | SVG `object-contain` — good performance |
| LCP | Hero background preloaded via `SeoHead` `lcpImage` |

**P3:** No photographic proof images — optional for trust, not required for technical intent.

---

## Performance

| Factor | Assessment |
|--------|------------|
| Static SSG page | ✅ Pre-rendered |
| Image weight | Low (SVG-heavy) |
| Section count | High (20+ sections) — long page, many dynamic imports |
| Mobile | Responsive premium template + sticky CTA |
| Core Web Vitals (page itself) | Not measured in this audit — recommend field check post-deploy |

---

## Content Gaps

1. **Duplicate quick-answer H2s** — same pattern fixed on SEO hub in Phase 6B
2. **No dedicated technical FAQ bank** — generic templates only
3. **Generic editorial blocks** — local, AI/GEO, reputation on technical URL
4. **Generic pillar stack** — Local Visibility & Maps not core to technical SEO page
5. **Missing blog link** — enterprise technical checklist article
6. **Thin explicit coverage** — robots.txt, XML sitemaps, redirects, 404s, JS SEO, log analysis
7. **Audit deliverables** — not scannable (what's in a technical SEO audit report)
8. **Parent hub contextual link** — present in link band but could be stronger in hero/journey
9. **Title "Technical SEO Company"** — secondary company signal; optional tighten in 7B

---

## Priority Recommendations

### P0 — Critical

| # | Recommendation |
|---|----------------|
| P0-1 | **Consolidate duplicate quick-answer H2s** — keep one block (*What is Technical SEO?* or merged question); suppress `whySeoMatters.geoAnswer` for this slug (same pattern as Phase 6B SEO hub) |

### P1 — High

| # | Recommendation |
|---|----------------|
| P1-1 | Create **`PAGE_FAQS.technicalSeo`** (or `technicalSeoHub`) — 8 technical-specific Q&As; single source for visible FAQ + JSON-LD |
| P1-2 | Add **`SERVICE_ANSWERS['technical-seo']`** in `answerFirstContent.js` — technical-specific quick answer (audit, crawl, CWV, schema) |
| P1-3 | **Replace or trim generic editorial blocks** on technical page — de-emphasize local/AI/ORM sections; elevate audit, crawl, indexation, CWV, schema, redirects |
| P1-4 | **Technical-specific pillars** — replace generic Local/Content/AI pillars with crawl audit, CWV, indexation, schema, architecture (or link to siblings) |

### P2 — Medium

| # | Recommendation |
|---|----------------|
| P2-1 | Add contextual link to `/blog/technical-seo-checklist-enterprise-websites` |
| P2-2 | Strengthen **up-link** to `/services/seo` in hero or intro ("part of our SEO Services programs") |
| P2-3 | Add scannable **audit deliverables** subsection (sitemap, robots, redirects, canonicals — bullet level, not long-form) |
| P2-4 | Review title secondary **"Technical SEO Company"** — consider "Agency" or remove to reduce company-cluster overlap |
| P2-5 | Customize **case study / results** for technical metrics (indexation %, CWV, crawl errors) if data supports |

### P3 — Low

| # | Recommendation |
|---|----------------|
| P3-1 | Industry links — consider technical-relevant industries (e-commerce, SaaS) vs default realtor/dentist/hvac |
| P3-2 | Verify trust claims (4.9 rating, Clutch awards) before any schema expansion |
| P3-3 | Section nav labels — align with technical-specific H2s after consolidation |

---

## Recommended Primary Keyword

**Technical SEO Services**

---

## Recommended Secondary Keyword Cluster

- Technical SEO
- Technical SEO audit
- Technical SEO services India
- website technical SEO
- Core Web Vitals optimization
- crawlability and indexation
- structured data / schema markup
- technical SEO agency (supporting)

---

## Proposed Title

`Technical SEO Services India | Audits, Crawl & Site Health | SEO India Tech`  
(~58 chars — services-first; reduces "company" overlap)

*Alternative if current title performs in GSC:* keep primary clause, swap trailing segment only.

---

## Proposed Meta Description

`Technical SEO services in India: site audits, crawlability, indexation fixes, Core Web Vitals, and structured data. Measurable technical SEO from SEO India Tech. Free audit.`

---

## Proposed H1

**Keep current:** `Technical SEO Services That Fix What Blocks Rankings`  
(Already strong commercial + outcome framing; optional supporting line below H1, not a second H1)

---

## Proposed H2/H3 Structure

```text
H1: Technical SEO Services That Fix What Blocks Rankings

H2: What Is Technical SEO?                    (single quick answer — no duplicate)
H2: Why Technical SEO Matters for Rankings
H2: Technical SEO Audit & Deliverables
  H3: Site audits & crawl analysis
  H3: Indexation & canonical fixes
  H3: Core Web Vitals & page speed
  H3: Structured data & schema
H2: Core Technical SEO Programs                 (pillars — technical-specific)
  H3: Technical SEO Audits → /services/technical-seo
  H3: Crawl & Indexation
  H3: Core Web Vitals
  H3: Schema & Structured Data
H2: Our Technical SEO Process
H2: Technical SEO Results & Case Studies
H2: Technical SEO for Indian & Global Sites
H2: Related SEO Services
  H3: SEO Services → /services/seo
  H3: Local SEO → /services/local-seo-service
  H3: E-commerce SEO → /services/e-commerce-seo
  H3: International SEO → /services/international-seo
H2: Frequently Asked Questions About Technical SEO
H2: Start Your Technical SEO Audit             (CTA)
```

---

## Recommended Internal Links

| Link | Priority | Placement |
|------|----------|-----------|
| `/services/seo` | High | Hero intro or early body (parent hub) |
| `/services/local-seo-service` | Medium | Related services / sibling band |
| `/services/e-commerce-seo` | Medium | Related services (technical + catalog) |
| `/services/international-seo` | Medium | Related services (hreflang/technical global) |
| `/blog/technical-seo-checklist-enterprise-websites` | High | Editorial / internal links band |
| `/contact-us` | High | CTAs (existing) |
| `/seo-packages` | Low | Secondary CTA (existing) |

---

## Recommended Schema Changes (Phase 7B — recommendations only)

1. Keep full schema stack — do not strip HowTo or Service
2. After FAQ source fix — FAQPage should reflect **technical-specific** 8 questions from single array
3. Service `description` — align with updated meta after any meta tweak
4. Do **not** add AggregateRating without verified review data
5. Consider `Service` `category` or expanded `serviceType` only if supported by visible page content

---

**Phase 7A complete. No website modifications made. Await Phase 7B implementation prompt after user review.**
