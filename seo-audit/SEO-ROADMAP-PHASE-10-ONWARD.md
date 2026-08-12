# SEO Implementation Roadmap — Phase 10 Onward

**Site:** https://www.seoindiatech.com  
**Sitemap:** 115 URLs (`public/sitemap.xml`) — 41 industry, 11 city, services, blogs, hubs  
**Last updated:** 2026-08-12  
**Basis:** Phases 4–9B audits + production-validated service pillar tightening

---

## Locked architecture (do not break)

```text
Homepage → SEO Company in India
/services/seo → SEO Services in India
/services/technical-seo → Technical SEO Services
/services/local-seo-service → Local SEO Services → /services/gbp-optimization
/services/e-commerce-seo → E-commerce SEO Services (agency framing preserved)
```

**Completed and production-validated:** Homepage (5B), SEO hub (6B), Technical SEO (7B), Local SEO (8B), E-commerce SEO (9B).

**Rule for all future phases:** Optimize, don’t reposition — unless audit proves positioning is wrong.

---

## Strategy principle

Do **not** try to rank 115 URLs independently.

Build authority in layers:

```text
Homepage → Service pillars → Specialized services → Industry pages → Supporting blogs → Internal links → GSC cycle → Off-page (last)
```

For **41 industry pages:** master audit + template fix **before** batch individual rewrites.

---

## Phase 10 — International + Industry master audit (NOW)

### 10A — International SEO audit (audit only)

**URL:** `/services/international-seo`

Audit:

- Search intent, title/meta/H1, H2/H3
- International topical coverage (hreflang, multiregional, country targeting, canonicalization)
- Internal links, FAQ, schema
- Cannibalisation vs SEO hub
- Supporting blog links

**Output:** `seo-audit/phase-10a-international-seo-audit.md` + live snapshot JSON  
**No code changes.**

### 10B — 41 industry pages master audit (audit only)

Audit **all** `/industries/*` URLs (41 in sitemap).

Per page collect:

| Metric | Audit |
|--------|-------|
| URL, HTTP, indexability, canonical | ✅ |
| Title, meta, H1, H2/H3 | ✅ |
| Content depth, industry specificity | ✅ |
| FAQ, schema, internal links | ✅ |
| GSC impressions/clicks (if available) | ✅ |
| Cannibalisation, template similarity | ✅ |
| Priority | P0–P3 |

**Classification per page:**

| Grade | Meaning |
|-------|---------|
| **A — Strong** | Keep + targeted optimization |
| **B — Moderate** | Strengthen industry-specific content |
| **C — Generic template** | Fix template/content architecture |
| **D — Thin** | Strategic review before optimization |

**Template test:** If swapping the industry name leaves most copy valid → template specificity problem.

**Output:** Master spreadsheet-style report + summary markdown  
**No code changes.**

---

## Phase 11 — International SEO implementation

Only after **10A** approval.

Workflow (mirror 6B–9B):

```text
International SEO → P0/P1 fixes → FAQ single source → Internal links → Schema → Production QA
```

Preserve title/H1 unless audit finds a bug.

---

## Phase 12 — Industry template audit → fix (very high)

**Before editing 41 pages individually**, audit the shared industry template:

```text
Industry template → 41 industry pages
```

If template has duplicate H2s, generic FAQ, weak metadata, weak internal links → **fix template first**.

| Sub-phase | Work |
|-----------|------|
| **12A** | Fix common template problems |
| **12B** | Production QA |
| **12C** | Re-audit all 41 pages |

---

## Phase 13 — Top 5 industry pages (very high)

After master audit + template direction. Select **Top 5 P1** by:

1. GSC impressions  
2. Rankings  
3. Commercial value  
4. Specificity opportunity  
5. Content quality  
6. Intent clarity  
7. Internal-link opportunity  

Per page: title, meta, H1, H2/H3, industry copy, FAQ, schema, service/blog links, CTA — **one clear industry intent per URL**.

---

## Phase 14 — Remaining P1 industry pages

```text
Top 5 → Measure → Template learnings → Next P1 batch (5–10 pages)
```

Do not optimize all 41 simultaneously.

---

## Phase 15 — P2 industry pages

Moderate pages, lower GSC visibility, FAQ/schema cleanup, metadata duplication — **no blind rewriting**.

---

## Phase 16 — City SEO audit (separate from industries)

**11 city URLs** (`/seo-services/seo-services-in-*`):

Chandigarh, Hyderabad, Jaipur, Mumbai, Pune, Noida, Delhi, Bangalore, Chennai, Kolkata, Gurgaon

Do **not** mix with industry batch work.

Audit: doorway risk, template duplication, unique local info, intent, local SEO relationship, `/services/seo` cannibalisation, proof, links, metadata, schema, GSC.

Decide: keep + improve / consolidate / restructure — **no delete/noindex without evidence**.

---

## Phase 17 — Blog → money page internal linking

After service + industry architecture stable.

```text
Technical SEO Checklist → Technical SEO Services
E-commerce Checklist → E-commerce SEO Services
GBP Guide → Local SEO → GBP Optimization
International guide → International SEO
```

Goal: **Blog → Service → Industry → Conversion** (not random links).

---

## Phase 18 — Content cluster expansion

Only after existing URLs optimized. New content **only for genuine gaps**. No mass AI blog publishing.

Prioritize: commercial support, comparisons, checklists, industry/international/technical depth.

---

## Phase 19 — GSC optimization cycle (continuous)

After sufficient post-implementation time:

| Signal | Action |
|--------|--------|
| High impressions + low CTR | Title/meta/intent review |
| Position 8–20 | Content + internal links |
| Position 1–7 | Avoid unnecessary major changes |
| No impressions | Indexing/intent investigation before rewrite |

---

## Phase 20 — Technical + CWV final QA

After major content architecture: CWV (LCP, INP, CLS), JS, images, mobile, crawl/index, canonical, sitemap, robots, broken links, structured data.

---

## Phase 21 — Authority / off-page SEO

**Only after onsite architecture is stable.**

Relevant backlinks, digital PR, industry publications, linkable assets — **no random bulk links**.

---

## Target end architecture

```text
                         HOMEPAGE
                  SEO Company in India
                          │
                          ▼
                    SEO SERVICES
                  SEO Services India
                          │
       ┌──────────────────┼──────────────────┐
       ▼                  ▼                  ▼
 Technical SEO       Local SEO          E-commerce SEO
       │                  │                  │
       │                  ▼                  │
       │             GBP Optimization        │
       │                                     │
       └──────────────┬──────────────────────┘
                      ▼
              International SEO

                    INDUSTRIES (41)
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
   Healthcare      Professional      Home Services
       ...             ...               ...

                     BLOG
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   Technical        Local         E-commerce
        └──────────────┼──────────────┘
                       ▼
                 MONEY PAGES
```

---

## Priority summary

| Phase | Work | Priority |
|-------|------|----------|
| **10A** | International SEO audit | **NOW** |
| **10B** | 41 industry master audit | **NOW** |
| 11 | International implementation | High |
| 12 | Industry template fix | **Very high** |
| 13 | Top 5 industry pages | **Very high** |
| 14 | Remaining P1 industries | High |
| 15 | P2 industries | Medium |
| 16 | 11 city pages | High (separate track) |
| 17 | Blog → money links | High |
| 18 | Content gaps | Medium |
| 19 | GSC cycle | Continuous |
| 20 | Technical/CWV QA | High |
| 21 | Off-page | After onsite |

---

## Completed phases (reference)

| Phase | Scope | Status |
|-------|--------|--------|
| 4 | Sitemap lastmod | ✅ |
| 5A/5B | Homepage audit + implementation | ✅ Production |
| 6A/6B | SEO Services audit + implementation | ✅ Production |
| 7A/7B | Technical SEO audit + implementation | ✅ Production |
| 8A/8B | Local SEO audit + implementation | ✅ Production |
| 9A/9B | E-commerce SEO audit + implementation | ✅ Production |

---

## Next action

1. **Phase 10A** — International SEO audit (`/services/international-seo`) — audit only  
2. **Phase 10B** — 41 industry master audit — audit only  
3. User review → **Phase 11** International implementation prompt (locked scope, like 8B/9B)

**Do not** start industry implementation or city work until 10B + Phase 12 template analysis.
