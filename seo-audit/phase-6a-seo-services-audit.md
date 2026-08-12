# SEO Services Page Audit

**URL:** https://www.seoindiatech.com/services/seo  
**Audit date:** 2026-08-12  
**Phase:** 6A — AUDIT ONLY (no code, content, metadata, or schema changes made)  
**Context:** Homepage Phase 5b now passes primary CTA and contextual authority to `/services/seo`. This page should own **SEO Services India** intent while homepage owns **SEO Company India**.

**Live snapshot:** `seo-audit/phase-6a-live-snapshot.json`  
**Audit script:** `scripts/audit-seo-services-live.mjs`

---

## Executive Summary

`/services/seo` is already live with **SEO-first positioning** that is meaningfully differentiated from the **pre-deploy homepage** (live homepage still shows AI-agency title/H1; Phase 5b is not yet deployed). The services page title, meta, and H1 correctly target **SEO Services in India**, and all four priority child-service URLs are present as crawlable links.

**Strengths**

- Clear primary H1: `SEO Services in India` (single H1)
- Title and meta aligned to SEO services commercial intent
- Substantial content depth: 20+ sections (services grid, pillars, process, results, case study, editorial, FAQ, CTAs)
- Service schema + WebPage + Organization + BreadcrumbList + HowTo present
- Internal links to Technical, Local, E-commerce, and International SEO confirmed on live HTML
- FAQ visible count matches FAQ schema count (6/6 — synchronized, though thin)

**Top issues**

| Priority | Issue |
|----------|--------|
| **P0** | Near-duplicate H2 quick-answer blocks (`provide` vs `offer`) — redundant semantic signals |
| **P1** | Pillar section describes child services but **does not link** to them (missed internal-link opportunity) |
| **P1** | FAQ coverage thin (6 questions) vs `PAGE_FAQS.seoHub` (8) — override bypasses richer hub FAQ bank |
| **P1** | Residual **SEO company / agency India** phrasing in body copy risks mild cannibalisation once homepage Phase 5b deploys |
| **P2** | Section titled **“All SEO Services”** lists child *services*, not industries — misleading label |
| **P2** | Priority industry URLs (wineries, optometrist, accountants, doctor-physician) not in page body internal-links band |
| **P2** | Trust/award claims (4.9 rating, Clutch awards) need substantiation audit before scaling |
| **P3** | 22 H2s — long page with some template repetition; focus could tighten around services deliverables |

**Verdict:** Page is a strong foundation for **SEO Services India** and should **not** become a homepage clone. Phase 6B should refine intent separation, strengthen child-service and industry links in body content, fix duplicate answer blocks, and expand FAQ parity — not rebuild the page.

---

## Current Metadata

### Live production (fetched 2026-08-12)

| Signal | Value |
|--------|--------|
| HTTP status | 200 |
| Canonical | `https://www.seoindiatech.com/services/seo` |
| Robots | `index, follow, max-image-preview:large, max-snippet:-1` |
| **Title** | `SEO Services in India \| SEO India Tech` |
| **Meta description** | `SEO services in India for businesses that want sustainable organic growth. Technical SEO, local SEO, content, and AI-ready strategy from an Indian SEO agency. Free audit.` |
| OG / Twitter | Aligned with title/description (via `SeoHead`) |
| `html lang` | `en` |
| Sitemap | Included (`/services/seo` in `public/sitemap.xml`) |

### Source (`utils/services/premium/seoHubExpandedContent.js`)

Title and meta match live — content is deployed from `HUB_OVERRIDES.seo` merged via `buildPremiumHubContent.js`.

**Note:** Meta includes *“Indian SEO agency”* — acceptable secondary phrasing but should stay secondary once homepage owns *SEO company in India*.

---

## Current Heading Structure

### H1 (live — 1)

| H1 |
|----|
| SEO Services in India |

### H2 structure (live — 22)

| # | H2 | Section / source |
|---|-----|------------------|
| 1 | What seo services does SEO India Tech provide? | `answerFirst` / GeoQuickAnswer |
| 2 | Why SEO Drives Growth in 2026 | `whySeoMatters` |
| 3 | What seo services does SEO India Tech offer? | `whySeoMatters.geoAnswer` (duplicate intent) |
| 4 | Why SEO India Tech for SEO | `whyChoose` |
| 5 | Explore Our SEO Services | `services` grid |
| 6 | Problems Our SEO Programs Solve | `painPoints` |
| 7 | SEO: What to Remember | `keyTakeaways` |
| 8 | Core SEO Programs | `pillars` |
| 9 | SEO for Every Business Stage | `audiences` |
| 10 | How We Deliver SEO | `process` (9 steps) |
| 11 | SEO Outcomes We Deliver | `results` |
| 12 | Why Businesses Choose SEO India Tech | `comparison` |
| 13 | Case Study: Integrated SEO Growth | `caseStudy` |
| 14 | SEO Services We Offer | `editorial` (override) |
| 15 | Enterprise Tools. Proven Credentials. | `toolsTrust` |
| 16 | All SEO Services | `relatedIndustries` (mislabelled — lists services) |
| 17 | Professional SEO Services in India | `semanticTopics` (override) |
| 18 | Continue Your Research | `internalLinks` |
| 19 | What Our Clients Say | `testimonials` |
| 20 | Frequently Asked Questions About SEO Services in India | `faq` |
| 21 | Ready to Start SEO? | `contact` |
| 22 | Ready to Grow with SEO? | `finalCta` |

### Representative H3 clusters

- **Child services (linked in grid):** Local SEO, Technical SEO, AI SEO, Small Business SEO, E-Commerce SEO, International SEO, App Store Optimization, GBP Optimization, GEO, AEO
- **Editorial blocks:** Technical SEO, On-page SEO, Local SEO, Ecommerce SEO, International SEO, Content SEO, Link building
- **Pillars (not linked):** Technical SEO, Local SEO, Ecommerce SEO, International SEO, Content SEO, AI SEO
- **Process:** Discovery → Scale (9 steps)
- **Semantic topics:** SEO strategy for Indian businesses, SEO for global businesses, SEO marketing in India

**Heading issues:** Two near-identical quick-answer H2s; high H2 count from generic hub template; some H3 service names repeat across sections (Local SEO appears 4+ times).

---

## Keyword Intent

### What the page currently targets (evidence-based)

| Layer | Signals |
|-------|---------|
| **Primary (strong)** | SEO Services in India / SEO services in India — title, H1, FAQ title, multiple H2s |
| **Secondary (present)** | SEO services, professional SEO services in India, SEO marketing in India, Indian SEO agency (meta), SEO company (hero paragraph) |
| **Tertiary (diluting)** | AI SEO, GEO, AEO, generic “digital growth”, comparison/agency template language |

### Recommended primary keyword (audit conclusion)

**SEO Services India** (and close variants: *SEO services in India*, *SEO services India*)

This matches current live title/H1 and should remain the page’s commercial anchor.

### Secondary keyword cluster (recommended)

- SEO services
- search engine optimization services
- professional SEO services India
- SEO agency services (supporting, not primary)
- SEO packages / SEO audit India (CTA-adjacent)
- Child intents via internal links: technical SEO services, local SEO services, ecommerce SEO services, international SEO

**Do not target as primary on this URL:** SEO Company India, SEO Agency India (homepage territory post–Phase 5b).

---

## Homepage Cannibalisation

### Comparison matrix

| Element | Homepage (Phase 5b — local, not yet live) | `/services/seo` (live) | Cannibalisation risk |
|---------|---------------------------------------------|--------------------------|----------------------|
| Title intent | SEO **Company** in India | SEO **Services** in India | **Low** — distinct modifiers |
| H1 intent | SEO Company in India… | SEO Services in India | **Low** — distinct |
| Meta “company/agency” | SEO company in India | Indian SEO **agency** | **Medium** — watch overlap |
| Hero body | SEO strategies, 14+ years | Indian SEO **company** helping businesses | **Medium** |
| Service grid | SEO service links (homepage) | Full SEO services hub | **Low** — complementary |
| FAQ focus | General SEO company FAQs (13) | SEO services FAQs (6) | **Low** |
| Process / results | Homepage sections | Full 9-step + case study | **Medium** — similar proof patterns |

### Assessment

The URL architecture is **directionally correct**: homepage = company/entity authority; services hub = services commercial intent. Cannibalisation is **not critical today** because live homepage still uses different primary signals.

**After Phase 5b deploy**, mild overlap may emerge from:

1. Hero paragraph calling SEO India Tech an “Indian SEO company”
2. Meta secondary phrase “Indian SEO agency”
3. H2 “Professional SEO Services in India” + semantic topic blocks overlapping homepage service sections
4. Duplicate quick-answer H2 pair competing for the same SERP feature

**Recommendation:** Keep company/agency language as **one mention max** in intro; lead with *services, deliverables, and programs* language throughout.

---

## Content Audit

### Coverage checklist

| Topic | Present? | Quality |
|-------|----------|---------|
| What SEO services are | ✅ | Strong (`answerFirst`, editorial intro) |
| What is included | ✅ | Strong (services grid + pillars + editorial) |
| SEO process | ✅ | Strong (9-step timeline + HowTo schema) |
| Technical SEO | ✅ | Editorial + pillar + grid link |
| On-page SEO | ✅ | Editorial block |
| Local SEO | ✅ | Editorial + pillar + grid link |
| E-commerce SEO | ✅ | Editorial + pillar + grid link |
| International SEO | ✅ | Editorial + pillar + grid link |
| Keyword research | ⚠️ | Mentioned in process “Research” step only |
| Content strategy | ✅ | Content SEO pillar + content marketing link |
| Link building | ✅ | Editorial block |
| SEO reporting | ⚠️ | Process + tools; no dedicated reporting section |
| Measurement / KPIs | ✅ | Results metrics, case study, FAQ |
| Business outcomes | ✅ | Results, case study, outcomes in pillars |
| Who the service is for | ✅ | Audience cards (6 segments) |
| Why SEO India Tech | ✅ | Why choose, comparison, tools/trust |
| CTA | ✅ | Hero, services sidebar, contact band, final CTA, sticky mobile |

### Depth assessment

- **Word count / section count:** High — premium hub template + `seoHubExpandedContent` override. Not thin.
- **Problem:** Depth is high but **focus is spread** across AI SEO, ASO, GBP, GEO, AEO, and generic agency comparison — slightly wider than a pure “SEO services India” commercial page needs.
- **Editorial override (`SEO Services We Offer`)** is the best-focused block — technical, on-page, local, ecommerce, international, content, link building. This should be the **semantic core** of Phase 6B refinements.

### Duplicate / cannibalising sections on-page

1. **Dual quick answers** — `provide` vs `offer` (P0)
2. **Services grid vs pillars vs editorial** — three ways to explain similar child services (P2)
3. **“All SEO Services” vs “Explore Our SEO Services”** — redundant listing (P2)

---

## Internal Linking

### Existing body links (live — confirmed)

| Destination | In page body? | How |
|-------------|---------------|-----|
| `/services/technical-seo` | ✅ | Services grid + internal links band |
| `/services/local-seo-service` | ✅ | Services grid + internal links band |
| `/services/e-commerce-seo` | ✅ | Services grid + internal links band |
| `/services/international-seo` | ✅ | Services grid + internal links band |
| `/services/ai-seo` | ✅ | Services grid |
| `/services/content-marketing` | ✅ | Internal links band |
| `/industries` | ✅ | Internal links band |
| `/seo-services/seo-services-in-delhi` | ✅ | Internal links band |
| `/seo-services/seo-services-in-noida` | ✅ | Internal links band |
| `/blog/how-to-choose-best-seo-agency-india` | ✅ | Internal links band |

### Missing from dedicated internal-links / editorial context (recommended for Phase 6B)

| Destination | Status |
|-------------|--------|
| `/industries/wineries-seo` | Footer/nav only — not in body internal-links override |
| `/industries/optometrist-seo` | Footer/nav only |
| `/industries/accountants-seo` | Footer/nav only |
| `/industries/doctor-physician-seo` | Footer/nav only |
| `/seo-packages` | Hero secondary CTA only |
| Pillar → child service URLs | **Not linked** — text only in pillar section |

### Footer / nav

Live HTML includes 40+ `/industries/*` paths via global footer — good sitewide discovery but weak **contextual** relevance on this URL.

---

## Schema

### Live JSON-LD `@graph` types

| Type | Purpose | Status |
|------|---------|--------|
| WebSite | Site entity | ✅ Valid |
| Organization | Provider | ✅ Valid (`buildOrganizationNode`) |
| BreadcrumbList | Home → Services → SEO Services | ✅ |
| WebPage | Page metadata | ✅ |
| **Service** | `name: SEO Services in India`, `serviceType: SEO` | ✅ Appropriate for this URL |
| FAQPage | 6 questions | ✅ Synced with visible FAQ |
| HowTo | 9-step process | ✅ |

### FAQ schema parity

| Source | Count |
|--------|-------|
| Visible FAQ (`PremiumFaq` → `VisibleFaq`, `showSchema={false}`) | 6 |
| JSON-LD FAQPage (`PremiumServiceSchema` → `content.faq.items`) | 6 |
| `PAGE_FAQS.seoHub` (unused hub bank) | 8 |
| Override `seoHubExpandedContent.faq` | 6 |

**Synced but thin.** Schema is generated from the same `content.faq.items` array as visible FAQ — correct architecture. Override replaces expanded hub FAQs with a smaller custom set.

### Schema notes

- **No duplicate FAQPage** on page (VisibleFaq schema disabled — good)
- **Service schema appropriate** — keep; refine `description` to match visible intro in Phase 6B
- **HowTo** aligns with visible 9-step process
- **No fake AggregateRating** in Service node (rating appears in UI trust bar, not schema — good)
- **Awards in toolsTrust** (Clutch, GoodFirms) are UI-only — verify before adding to schema

---

## CTA

| Location | Label | Destination |
|----------|-------|-------------|
| Hero primary | Get a Free Audit | `/contact-us` |
| Hero secondary | View SEO Packages | `/seo-packages` |
| Services sidebar | Get Your Custom Roadmap | `/contact-us` |
| Case study | Get Similar Results | `/contact-us` |
| Contact band | Book Free Consultation | `/contact-us` |
| Final CTA primary | Book Free Consultation | `/contact-us` |
| Final CTA secondary | Call +91-8076676731 | `tel:` |
| Sticky mobile | Get a Free Quote | `/contact-us` |

**Assessment:** CTAs are **strong and repeated** — commercial intent supported. Phase 6B could add one mid-page contextual CTA after editorial/pillars linking to audit with *“Get your SEO services roadmap”* phrasing (optional P3).

---

## Image SEO

| Aspect | Finding |
|--------|---------|
| Hero | SVG `/images/services/heroes/hub-seo.svg` — lightweight, good LCP |
| Pillars / editorial | SVG heroes with descriptive `alt` (e.g. “Technical SEO services illustration”) |
| Format | Mostly SVG `object-contain` — good performance, limited photographic trust |
| Decorative stats | Hero stats (+186%, etc.) — composite metrics, same pattern as other premium pages |
| Missing | No `width`/`height` on some dynamic images beyond Next/Image fill pattern |

**P2:** Consider one credible photographic or client-context image with optimised `alt` for trust — not mandatory for SEO services intent.

---

## Technical SEO

| Check | Result |
|-------|--------|
| HTTP 200 | ✅ |
| Indexable | ✅ |
| Canonical self-referencing | ✅ |
| In sitemap | ✅ |
| Single H1 | ✅ |
| Mobile | Premium template responsive (`StickyMobileCta`, section nav) |
| Structured data valid types | ✅ No conflicting duplicate entities |
| Internal link crawlability | ✅ Key service URLs in static HTML |

---

## Content Gaps

1. **Keyword research** — no dedicated explainers (what, how, deliverables)
2. **SEO reporting** — mentioned but not a scannable deliverables subsection
3. **Link building** — editorial paragraph only; no process/outcomes detail
4. **Industry proof on-page** — generic testimonials; no industry-specific case snippets for priority verticals
5. **Pricing/packages context** — secondary CTA to packages but no on-page packages summary
6. **Pillar → service URL links** — content exists without crawl paths
7. **Priority industry contextual links** — missing from body (wineries, optometrist, accountants, doctor-physician)
8. **FAQ depth** — 6 vs 8+ hub FAQs; missing cost, timeline, agency-selection overlap with homepage

---

## Priority Recommendations

### P0 — Critical

| # | Recommendation |
|---|----------------|
| P0-1 | **Remove or merge duplicate quick-answer H2s** — keep one answer block (`provide` OR `offer`); avoid two GeoQuickAnswer-style H2s on same page |
| P0-2 | **Maintain strict intent split after homepage deploy** — reduce “SEO company/agency India” repetition in hero/meta once homepage Phase 5b is live |

### P1 — High

| # | Recommendation |
|---|----------------|
| P1-1 | **Add crawlable links in pillar section** to `/services/technical-seo`, `/services/local-seo-service`, `/services/e-commerce-seo`, `/services/international-seo` |
| P1-2 | **Expand FAQ** to 8–12 questions — merge `seoHubExpandedContent.faq` with high-value items from `PAGE_FAQS.seoHub`; keep single source for visible + schema |
| P1-3 | **Rename “All SEO Services” section** to “Related SEO Programs” or split into true industry links |
| P1-4 | **Add 2–4 contextual industry links** in internal-links band: wineries, optometrist, accountants, doctor-physician |

### P2 — Medium

| # | Recommendation |
|---|----------------|
| P2-1 | Tighten H2 map — collapse redundant services listings; elevate `SEO Services We Offer` editorial as primary mid-page H2 |
| P2-2 | Add short **keyword research + reporting** deliverables bullets (not long new sections) |
| P2-3 | Audit trust claims (4.9 rating, Clutch awards) — substantiate or soften |
| P2-4 | Reduce AI/ASO/GEO/AEO prominence in above-fold grid if page focus is core SEO services India |

### P3 — Low

| # | Recommendation |
|---|----------------|
| P3-1 | Sticky section nav — ensure “Services” and “FAQ” labels match updated H2s |
| P3-2 | Optional OG image specific to SEO services (not default logo) |
| P3-3 | Consolidate case study metrics with homepage results language for brand consistency |

---

## Proposed Primary Keyword

**SEO Services India**  
(Use naturally as: *SEO services in India*, *SEO services India*, *professional SEO services in India*)

---

## Proposed Secondary Keyword Cluster

- SEO services
- search engine optimization services
- SEO audit India
- technical SEO services (→ child URL)
- local SEO services India (→ child URL)
- ecommerce SEO services (→ child URL)
- international SEO services (→ child URL)
- SEO packages India
- SEO marketing India (supporting)

---

## Proposed Title

`SEO Services in India | Search Engine Optimization | SEO India Tech`  
(~55 chars — services-first; avoids “company/agency” in title)

*Alternative if brand cluster needed:* `SEO Services India | Professional SEO Programs | SEO India Tech`

---

## Proposed Meta Description

`Professional SEO services in India: technical SEO, local SEO, ecommerce SEO, content, and link building. 14+ years experience. Free SEO audit and custom roadmap.`

*(Services/deliverables-first; one secondary “agency” mention optional, not required)*

---

## Proposed H1

`SEO Services in India`  
(Keep — already correct; optional supporting line below H1, not a second H1)

---

## Proposed H2/H3 Structure

```text
H1: SEO Services in India

H2: What Our SEO Services Include          (single quick answer — remove duplicate)
H2: SEO Services We Offer                  (editorial — core deliverables)
  H3: Technical SEO
  H3: On-Page SEO
  H3: Local SEO
  H3: E-Commerce SEO
  H3: International SEO
  H3: Content SEO
  H3: Link Building

H2: Explore Our SEO Programs               (services grid with links)
  H3: [each child service — linked]

H2: Core SEO Programs                      (pillars — each linked to child URL)
  H3: Technical SEO → /services/technical-seo
  H3: Local SEO → /services/local-seo-service
  …

H2: Our SEO Process
  H3: Audit & Discovery … Scale & Grow

H2: SEO Results & Case Studies

H2: SEO Services for Indian & Global Businesses  (semantic topics — not “company”)

H2: Industries We Serve with SEO           (true industry links)
  H3: SEO for Wineries, Optometrist SEO, etc.

H2: Frequently Asked Questions About SEO Services in India

H2: Start Your SEO Growth                   (contact + final CTA)
```

---

## Pre-Phase-6 Deploy Checklist (Homepage)

Phase 5b local build is complete but **live production still shows old homepage** (verified 2026-08-12):

| Check | Live status |
|-------|-------------|
| Homepage title (Phase 5b) | ❌ Still AI-Powered SEO & Digital Marketing Agency |
| Homepage H1 (Phase 5b) | ❌ Still Search & Performance Marketing Agency |
| `/services/seo` ready as CTA target | ✅ Already live with correct SEO services positioning |

**Action:** Deploy Phase 5b before Phase 6B implementation so homepage → services hub intent chain is live in production.

---

**Phase 6A complete. No website modifications made. Implementation prompt (Phase 6B) should follow user review of this audit.**
