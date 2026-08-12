# Homepage SEO Audit

**URL:** https://www.seoindiatech.com/  
**Audit date:** 2026-08-12  
**Phase:** AUDIT ONLY — no code, content, metadata, or schema changes made.  
**GSC context:** Homepage receives ~675 impressions — preserve existing signals; optimise targeted, not wholesale rewrite.

---

## Executive Summary

The homepage is technically sound (HTTP 200, indexable, valid canonical, in sitemap) and carries substantial commercial content across 15+ sections. However, **what Google currently indexes (live production) does not match the local codebase** for core SEO signals: live title/H1 still target *AI-powered digital marketing agency* positioning, while the codebase already contains *SEO Company in India* title/H1/meta (not deployed).

| Dimension | Live production (GSC baseline) | Local codebase (not deployed) |
|-----------|-------------------------------|-------------------------------|
| Title | AI-Powered SEO & Digital Marketing Agency | SEO Company in India \| SEO Agency & SEO Services |
| H1 | Search & Performance Marketing Agency | SEO Company in India — That Drives Sustainable Growth |
| Primary CTA | Explore AI-Powered Services → `/services/ai-seo` | Explore SEO Services in India → `/services/seo` |
| SeoHub band | 4 hub cards | 8 hub cards (technical, local, ecommerce, wineries added) |
| Offerings quick links | None | SEO / Technical / Local text links |

**Top findings:**

1. **P0 — Intent misalignment on live site:** Homepage does not clearly target primary keyword *SEO Company India* in title or H1 (GSC impressions exist on current URL — change carefully, not abruptly).
2. **P1 — FAQ schema mismatch:** JSON-LD FAQPage has 7 questions; visible FAQ section renders 12 from `PAGE_FAQS.home` (8+ shown via `minCount={8}`).
3. **P1 — Internal linking:** Live homepage body lacks direct links to `/services/technical-seo`; ecommerce and priority industries depend on footer/nav/city band, not hero/hub.
4. **P2 — Heading semantics:** Several sections use marketing/AI framing in H2s while keyword map assigns commercial India SEO to homepage.
5. **P2 — OG image:** Default logo (`sit-transparent.png`), not hero visual — weak social preview for commercial queries.
6. **P3 — Performance:** Client-side Hero, framer-motion across sections, many dynamic imports — monitor LCP/INP (fonts use `display: swap`; hero image has `priority` + preload).

**Recommendation arc:** Deploy codebase SEO positioning in a controlled implementation phase with before/after monitoring in GSC — not a blind rewrite.

---

## Current SEO Signals

### Live production (fetched 2026-08-12)

| Signal | Value |
|--------|--------|
| HTTP status | 200 |
| Canonical | `https://www.seoindiatech.com` (no trailing slash) |
| Robots | `index, follow, max-image-preview:large, max-snippet:-1` |
| Title | AI-Powered SEO & Digital Marketing Agency \| SEO India Tech |
| Meta description | Global digital growth partner for AI-powered SEO, performance marketing, and technology. 14+ years serving businesses in USA, UK, Australia, and worldwide. |
| H1 (visible) | Search & Performance Marketing Agency |
| `html lang` | `en` |
| Viewport | `width=device-width, initial-scale=1` |
| OG title / description | Same as meta title / description |
| OG URL | `https://www.seoindiatech.com` |
| OG image | `https://www.seoindiatech.com/sit-transparent.png` |
| Twitter card | `summary_large_image` |
| Favicon | `/favicon.ico` |
| Sitemap | Included (`/` in `public/sitemap.xml`) |
| JSON-LD types | WebSite, Organization, BreadcrumbList, FAQPage |

### Local codebase (`pages/index.js`, `pageSeoRegistry.js`, `Hero.js`)

| Signal | Value |
|--------|--------|
| Title | SEO Company in India \| SEO Agency & SEO Services \| SEO India Tech |
| Meta description | SEO company in India helping businesses grow with SEO services, technical SEO, local SEO, and e-commerce SEO. Indian SEO agency with 14+ years experience. Free audit. |
| H1 | SEO Company in India / That Drives Sustainable Growth |
| Hero subline | SEO agency and SEO services for businesses in India and worldwide |
| Primary CTA | Explore SEO Services in India → `/services/seo` |
| Organization schema description | SEO company in India offering SEO services, technical SEO, local SEO… |

---

## Title Tag

### CURRENT (live — GSC baseline)

`AI-Powered SEO & Digital Marketing Agency | SEO India Tech`  
(~58 characters)

### PROBLEM

- Primary intent targets **AI/digital marketing agency**, not **SEO Company India** (approved homepage primary).
- Competes with generic “digital marketing agency” queries rather than commercial India SEO company terms.
- Secondary keywords *SEO Agency India* / *SEO Services India* absent from title.
- Live title likely drives current ~675 impressions on mixed AI/agency queries — not aligned with keyword map priority.

### RECOMMENDATION

Shift primary slot to *SEO Company in India* while retaining brand and one secondary modifier (*SEO Services* or *SEO Agency*). Avoid stacking more than two keyword phrases. Keep length ≤ ~60 characters.

### PROPOSED TITLE (recommendation only — do not implement in this phase)

`SEO Company in India | SEO Agency & Services | SEO India Tech`  
(~54 characters)

*Alternative if codebase deploy is preferred:* keep codebase title  
`SEO Company in India | SEO Agency & SEO Services | SEO India Tech` (~57 chars).

---

## Meta Description

### CURRENT (live)

`Global digital growth partner for AI-powered SEO, performance marketing, and technology. 14+ years serving businesses in USA, UK, Australia, and worldwide.`

(~155 characters)

### PROBLEM

- Leads with “global digital growth partner” — broad, not *SEO company India*.
- Emphasises AI/performance/technology over core SEO services (technical, local, ecommerce).
- No soft CTA (audit, consultation).
- “Worldwide” emphasis may dilute India commercial intent for primary cluster.

### RECOMMENDATION

Lead with SEO company + India, name 2–3 service lines, one trust signal (14+ years), one CTA. Stay ≤ 160 characters.

### PROPOSED META DESCRIPTION (recommendation only)

`SEO company in India for SEO services, technical SEO, local SEO & e-commerce SEO. Indian SEO agency, 14+ years experience. Free audit — SEO India Tech.`  
(~148 characters)

*Codebase version is already close to this — validate CTR after deploy.*

---

## H1

### CURRENT H1 (live)

`Search & Performance Marketing Agency`  
(Single `<h1>`; “Marketing” rendered via styled span inside H1.)

### ISSUE

- Does not state **SEO company** or **India** — weak match for *SEO Company India* cluster.
- “Performance marketing agency” overlaps paid-media intent, not organic SEO hire intent.
- Subline on live: “Result-Oriented, AI-Powered Digital Marketing Agency” — reinforces non-SEO-company framing.

### RECOMMENDATION

One clear H1 stating SEO company + India (or Indian SEO company) with a natural growth/outcome line — avoid stuffing *SEO Agency India* and *SEO Services India* into the H1 itself; use subline and body.

### PROPOSED H1 (recommendation only)

`SEO Company in India That Drives Sustainable Growth`  
*(matches codebase; secondary line can carry “SEO agency and SEO services…”)**

---

## Heading Structure

### Live production hierarchy (rendered HTML)

**H1 (1)**  
1. Search & Performance Marketing Agency

**H2 (13)**  
1. Our Offerings for AI Driven Marketing Wins!  
2. About SEO INDIA TECH - New-Age AI Powered Digital Marketing Company  
3. 3 Reasons Why SEO INDIA TECH Is Your Best Bet!  
4. Lead the Way with AI Powered Digital Marketing Solutions!  
5. Projects that moved real numbers  
6. Become A Part Of The AI Revolution!!  
7. Industries We Have Served With AI-Powered Services!  
8. How We Create A Difference!  
9. A proven process for measurable growth  
10. Our Client Success Stories!  
11. Enterprise-grade delivery. Startup agility.  
12. SEO Resources & Services  
13. Our Latest Blogs  

**H3 (selected — homepage body)**  
- Offerings: AI Powered Digital Solutions; Impressive Digital Footprint; Expert-Led Consultancy  
- Why Us: Unprecedented Results; Data-Driven Approach; Customized Strategies  
- Solutions: AI SEO & LLM Optimization; Search Engine Optimization (SEO); Performance Marketing; Branding & Digital Growth  
- Problems: Not Getting Results…; Getting Traffic, But Not Leads…; No Clear Digital Strategy… *(duplicate titles appear in mobile/desktop layouts)*  
- Benefits: Data-Driven Campaigns; Smart and Strategic use of AI; Success Stories…; Unmatched Assistance 24×7  
- Process: Audit & Discovery; Strategy & Roadmap; Execute & Optimize; Report & Refine; Scale & Grow  
- SeoHub: SEO Services; SEO Insights & Guides; SEO Services by Industry; SEO Packages *(live — 4 cards)*  
- Blog cards: 4 recent post titles  
- Footer nav: Services; Solutions; Company  

**H4 (1)**  
- Quick Contact (footer)

### Codebase differences (not on live)

- H1 and hero subcopy target SEO Company India.  
- SeoHubBand: 8 H3 cards (adds Technical SEO, Local SEO, Ecommerce SEO, SEO for Wineries).  
- OfferingsSection: text links to `/services/seo`, `/services/technical-seo`, `/services/local-seo-service`.  
- Industries featured pills: wineries, optometrist, accountants, doctor-physician (live may still show prior featured set in body — industry URLs appear in HTML via nav/footer).

### Heading issues (do not fix in this phase)

| Issue | Severity |
|-------|----------|
| Most H2s emphasise AI/digital marketing, not SEO company India | P1 |
| Duplicate H3 problem titles (ProblemsSection mobile/desktop) | P2 |
| “SEO INDIA TECH” inconsistent casing vs “SEO India Tech” brand | P3 |
| SeoHub H2 generic (“SEO Resources & Services”) — could name India SEO services | P2 |
| No H2 explicitly “SEO Services in India” — commercial depth delegated to `/services/seo` | P2 |

---

## Content Section Audit

| Section | Purpose | Intent served | SEO value | Commercial value | Weakness | Recommendation |
|---------|---------|---------------|-----------|------------------|----------|----------------|
| **Hero** | First impression + primary CTA | Live: agency/performance; Code: SEO company India | High — title/H1 zone | High | Live misaligned with keyword map | Targeted title/H1/CTA to `/services/seo` (codebase ready) |
| **TrustedBy** | Social proof logos | Trust | Low keyword | Medium | Logo alts generic | Keep; ensure alt = client name |
| **Offerings** | 3 value pillars | Broad marketing | Low | Medium | Live: no service deep links | Codebase quick links good; keep section, soften AI-only H2 |
| **AboutBand** | Company story | Brand + experience | Medium (14+ years) | Medium | H2 “AI Powered Digital Marketing Company” | Refine H2 to mention SEO company without dropping AI |
| **WhyUsSection** | 3 reasons | Trust | Low | Medium | Generic reasons | Keep structure; one bullet on SEO delivery |
| **SolutionsShowcase** | 4 solution pillars + links | Commercial services | High — links to seo, ai-seo, ppc, digital-marketing | High | SEO pillar H3 good; AI SEO listed first | Keep SEO block; ensure CTA “Start SEO Growth” prominent |
| **ResultsSection** | Case-style metrics | Proof | Medium | High | Links go to `/contact-us`, not `/services/seo` | P2: optional link to SEO hub |
| **ProblemsSection** | Pain points | Problem-aware | Medium | Medium | Duplicate H3s; AI revolution H2 | Keep; dedupe mobile/desktop headings in implementation |
| **Industries** | Industry pills | Industry commercial | High for GSC industries | High | H2 AI-heavy; live featured set may differ from GSC priorities | Keep wineries/optometrist/accountants/doctor featured (codebase) |
| **BenefitsSection** | 4 benefit cards | Trust + capability | Medium | Medium | Strong images/alts | Keep |
| **ProcessSection** | 5-step process | Educational | Medium | Medium | Good semantic structure | Keep; optional mention of SEO audit step |
| **Testimonials** | Client quotes | Trust | Low | Medium | CTA to ai-seo + contact | P2: add `/services/seo` secondary CTA |
| **AuthorityBand** | Enterprise positioning | Trust | Low | Medium | Contact-only CTA | Keep |
| **SeoHubBand** | Internal hub links | Commercial SEO navigation | **High** | High | Live only 4 hubs — missing technical/local/ecommerce/wineries | Deploy 8-hub config (codebase) |
| **Blog** | Recent posts | Informational | Medium (topical) | Low | Europe-heavy recent posts | Keep; links to blog hub only |
| **CityLinksBand** | 11 city links | Local SEO geo | Medium | Medium | No link to `/services/local-seo-service` in band | P2: add local SEO service link in band intro |
| **FAQAndContact** | FAQs + form | Long-tail + conversion | High if schema aligned | High | Schema/visible FAQ count mismatch | Align FAQPage JSON-LD with visible FAQs |
| **Footer** (layout) | Nav + cities + social | Site-wide IA | High | High | No technical-seo or ecommerce in footer service list | P2: add in implementation if not in hub |

---

## Keyword Intent

### Approved mapping

| Role | Keywords |
|------|------------|
| **Primary** | SEO Company India |
| **Secondary** | SEO Agency India, SEO Services India, SEO Company, SEO Agency |

### Live homepage alignment

| Keyword cluster | Alignment | Notes |
|-----------------|-------------|-------|
| SEO Company India | **Poor** | Not in live title/H1 |
| SEO Agency India | **Poor** | Absent from primary signals |
| SEO Services India | **Weak** | Body mentions SEO; primary CTA goes to `/services/ai-seo` on live |
| SEO Company (generic) | **Weak** | Brand name only |
| SEO Agency (generic) | **Weak** | “Agency” in H1 but performance marketing, not SEO |

### Codebase alignment (pending deploy)

| Keyword cluster | Alignment | Notes |
|-----------------|-------------|-------|
| SEO Company India | **Strong** | Title + H1 |
| SEO Agency India | **Good** | Title + body |
| SEO Services India | **Good** | Title, CTA, body |
| Cannibalisation vs `/services/seo` | **Medium risk** | Homepage and hub both target India SEO — acceptable if homepage = company brand, hub = services depth |

**Do not force all secondary keywords into homepage.** Subline + one FAQ + internal links suffice.

---

## Internal Linking

Audit of **homepage body + layout footer** (header mega-menu also injects many URLs into HTML).

| Destination | Live body | Codebase body | Current anchor (live) | Recommended anchor |
|-------------|-----------|---------------|----------------------|-------------------|
| `/services/seo` | Hero CTA → **ai-seo** on live; footer “SEO Services” | Hero + Offerings + Benefits + Solutions | “Explore AI-Powered Services” (live) | “SEO services in India” |
| `/services/technical-seo` | **Not in body** | Offerings text link + SeoHub card | — | “Technical SEO services” |
| `/services/local-seo-service` | Footer “Local SEO”; CityLinksBand | Offerings + SeoHub + footer | “Local SEO” | “Local SEO services” |
| `/services/e-commerce-seo` | Not in body/footer list | SeoHub card | — | “Ecommerce SEO” |
| `/industries/wineries-seo` | In HTML (nav/industry paths) | Industries pill + SeoHub | Industry name pill | “SEO for wineries” |
| `/industries/optometrist-seo` | In HTML | Featured pill | Optometrist | “SEO for optometrists” |
| `/industries/accountants-seo` | In HTML | Featured pill | Accountants | “SEO for accountants” |
| `/industries/doctor-physician-seo` | In HTML | Featured pill | Doctor/Physician | “SEO for doctors” |

**Live SeoHub anchors (4):** SEO Services → `/services/seo`; SEO Insights → `/blog`; SEO by Industry → `/industries`; SEO Packages → `/seo-packages`.

**Codebase SeoHub (8):** adds technical-seo, local-seo-service, e-commerce-seo, wineries-seo with matrix anchor text.

**Do not add links in this phase.**

---

## Schema

### Types present (live + codebase)

Single `@graph` in `pages/index.js`:

| Type | ID | Notes |
|------|-----|-------|
| WebSite | `#website` | From `buildWebSiteNode()` |
| Organization | `#organization` | Inline node on homepage (not full `buildOrganizationNode()`) |
| BreadcrumbList | `#breadcrumbs` | Single “Home” item |
| FAQPage | `#faq` | **7 questions** in JSON-LD |

### Visible FAQ (`FAQAndContact` + `PAGE_FAQS.home`)

- **12 questions** in `PAGE_FAQS.home`; component shows **minCount 8** (typically 8–12 visible).
- First visible FAQ on codebase: “Is SEO India Tech a good SEO company in India…” — **matches intent** but **not all visible FAQs are in JSON-LD**.

### Issues

| Issue | Severity |
|-------|----------|
| FAQPage schema ⊂ visible FAQs (7 vs 12) | P1 |
| No `WebPage` / `ProfessionalService` for homepage entity | P3 |
| Organization on homepage is simplified vs enriched org in `schemaBuilders` | P2 |
| No fake ratings/reviews in schema | Good |
| FAQ first question on codebase aligns with SEO company India | Good (when deployed) |
| BreadcrumbList with only Home is minimal but valid | OK |

**Do not implement schema changes in this phase.**

---

## Image SEO

| Asset / location | File | ALT | Loading | Notes |
|------------------|------|-----|---------|-------|
| Hero visual (desktop) | `/images/hero-home.webp` | “Google AI Overviews - AI-powered search visibility…” | `priority`, `fetchPriority=high`, preload via `lcpImage` | Good LCP focus; alt is AI-overview-centric not SEO company |
| Hero process cards | JPG/PNG services images | Step label (GMB, SEO Rankings, AI & GEO) | `lazy` (desktop only) | Hidden on mobile — OK |
| SolutionsShowcase | score.png, AI_SEO.png, etc. | `sol.title` | Default next/image | Reasonable |
| AboutBand | about.png, seo-banner.jpg, herobg.jpg | Descriptive alts | Lazy | Good |
| BenefitsSection | dashboard.png, geo.png, etc. | `imageAlt` per card | Lazy | Good |
| Blog thumbnails | SVG heroes | `post.title` | Lazy | OK |
| TrustedBy logos | various | `logo.alt` | — | Verify partner names |
| OG/Twitter image | `sit-transparent.png` | — | — | **P2:** logo not hero — weak share preview |

**CLS risks:** Low for hero (aspect ratio set); framer-motion transforms on cards — monitor INP.

**Oversized assets:** Hero webp + multiple PNG service images — consider continued webp migration (P3).

---

## Technical SEO

| Check | Status | Notes |
|-------|--------|-------|
| HTTP 200 | Pass | Live verified |
| Canonical | Pass | `https://www.seoindiatech.com` (consistent sitewide, no trailing slash) |
| Indexable | Pass | `index, follow` |
| Sitemap | Pass | `/` included (115 URLs total) |
| Mobile | Pass | Responsive; sticky mobile CTA in Hero |
| `lang` | `en` | Consider `en-IN` for India focus (P3) |
| OG / Twitter | Present | Mirror title/description; image = logo |
| Breadcrumb (visible) | None on homepage body | JSON-LD breadcrumb only |
| JS rendering | Next.js SSR/SSG for shell; Hero is client component | H1 in initial HTML — OK |
| Third-party JS | Deferred GTM (`DeferredGtm`) | Good |
| Fonts | Google fonts, `display: swap` | Good |
| Core Web Vitals risks | framer-motion widespread; many `dynamic()` sections; large hero on desktop | Field test recommended post-deploy |
| Broken links | None detected in live fetch of sitemap URLs | — |
| Redirects | None on homepage | — |

---

## Content Gaps

Genuine gaps for **commercial SEO company intent** (not word-count padding):

| Gap | Severity | Recommendation |
|-----|----------|----------------|
| Live primary signals don’t say “SEO company India” | P0 | Implement title/H1/meta from mapping (codebase largely ready) |
| No above-fold explicit link to technical SEO | P1 | SeoHub + Offerings (codebase) |
| FAQ schema doesn’t cover visible FAQs | P1 | Sync JSON-LD with `PAGE_FAQS.home` or top 8–10 |
| Results/case studies don’t link to SEO service page | P2 | Optional “See SEO services” on ResultsSection |
| Footer services omit technical SEO & ecommerce | P2 | Add when implementing IA pass |
| OG image not representative of SEO offering | P2 | Custom OG (1200×630) with brand + SEO message |
| “Best SEO company India” query partially uncovered | P2 | FAQ already asks “good SEO company” on codebase — ensure in schema |

**Not gaps:** Word count, new city pages, new industry pages, duplicate winery content.

---

## Priority Fixes

| ID | Priority | Item |
|----|----------|------|
| F1 | **P0** | Deploy aligned title + meta + H1 for *SEO Company India* (monitor GSC 2–4 weeks) |
| F2 | **P0** | Primary hero CTA → `/services/seo` with commercial anchor (codebase ready) |
| F3 | **P1** | Deploy expanded SeoHubBand (8 links: technical, local, ecommerce, wineries) |
| F4 | **P1** | Align FAQPage JSON-LD with visible homepage FAQs (12 or curated 8) |
| F5 | **P1** | Deploy Offerings quick links to seo / technical / local |
| F6 | **P1** | Featured industries: wineries, optometrist, accountants, doctor-physician (codebase) |
| F7 | **P2** | Refine H2s — reduce pure “AI digital marketing” dominance in About/Industries/Offerings |
| F8 | **P2** | Add technical SEO + ecommerce to footer service list |
| F9 | **P2** | Custom OG image for homepage sharing |
| F10 | **P2** | ResultsSection secondary link to `/services/seo` |
| F11 | **P2** | Deduplicate ProblemsSection H3 titles (mobile/desktop) |
| F12 | **P3** | Consider `lang="en-IN"` |
| F13 | **P3** | Hero image alt — balance AI overview with SEO company message |
| F14 | **P3** | Field CWV test after deploy (LCP hero, INP motion) |

---

## Recommended Implementation Order

1. **Title, meta description, H1, hero CTA** — deploy codebase SEO Company positioning; GSC monitoring plan.  
2. **SeoHubBand + Offerings internal links** — technical, local, ecommerce, wineries without changing URL architecture.  
3. **FAQ schema sync** — match visible FAQs; keep first question SEO-company-focused.  
4. **Industry featured pills** — GSC priority verticals on homepage body.  
5. **Secondary polish** — H2 tone, footer services, OG image, ResultsSection link, ProblemsSection dedupe, CWV field test.

---

## Audit artifacts

| File | Purpose |
|------|---------|
| `seo-audit/phase-5-live-snapshot.json` | Live HTML snapshot (2026-08-12) |
| `scripts/audit-homepage-live.mjs` | Re-runnable live fetch (audit tooling) |

---

*Phase 5 complete. No website code modified. Await stakeholder implementation prompt before Phase 5b (homepage implementation).*
