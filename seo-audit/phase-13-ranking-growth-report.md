# Phase 13 — Organic Ranking Growth Report

**Site:** https://www.seoindiatech.com  
**Date:** 2026-08-12  
**Phase:** 13 — Ranking growth & CTR optimization (GSC-driven)  
**Status:** Implementation complete · Build PASS · Production QA pending deploy

---

## 1. GSC Baseline

See `seo-audit/phase-13-baseline.md`.

| Metric | Value |
|--------|-------|
| Impressions | 28.3K |
| Clicks | 67 |
| CTR | 0.2% |
| Average position | 43.7 |

---

## 2. Page Opportunity Matrix

**File:** `seo-audit/phase-13-gsc-opportunity-matrix.csv`

Covers locked service hubs (PROTECT), homepage, and data-driven Top 5 industry URLs. Top Query column = `GSC_QUERY_DATA_UNAVAILABLE` (no Queries+Page export in repo).

**Priority batch:** wineries, hvac, optometrist, plumber, automotive — P3 ranking bucket (pos 67–80) with meaningful impressions → depth + CTR opportunity.

---

## 3. Industry Opportunity Matrix

**File:** `seo-audit/phase-13-industry-priority-matrix.csv`

All 41 industry slugs ranked. Top 5 selected by composite GSC score — **not** provisional Plastic Surgery / Doctor override list.

**Missing from Pages export (not assumed zero):** realtor-seo, breweries-seo, sign-company-seo, tree-care-seo.

---

## 4. Keyword-to-URL Mapping

**Preserved:** `seo-audit/keyword-url-map.md` (Phase 2)

| Commercial intent | Primary URL |
|-------------------|-------------|
| SEO Company India | `/` |
| SEO Services India | `/services/seo` |
| Technical SEO Services | `/services/technical-seo` |
| Local SEO Services | `/services/local-seo-service` |
| GBP Optimization | `/services/gbp-optimization` |
| E-commerce SEO Services | `/services/e-commerce-seo` |
| International SEO | `/services/international-seo` |
| Industry-specific SEO | `/industries/{slug}` |

No cannibalisation changes in Phase 13.

---

## 5. Top 5 Selected Pages

1. `/industries/wineries-seo`
2. `/industries/hvac-seo`
3. `/industries/optometrist-seo`
4. `/industries/plumber-seo`
5. `/industries/automotive-seo`

**Reason:** Highest industry impressions + CTR gaps in available GSC page export. See `seo-audit/phase-13-top5-industry-audit.md`.

---

## 6. Changes Implemented

### Metadata (GSC-supported CTR)

| URL | Change |
|-----|--------|
| hvac-seo | Custom `seoTitle` + `metaDescription` (contractor / map pack intent) |
| plumber-seo | Custom `seoTitle` + `metaDescription` (emergency / GBP intent) |
| automotive-seo | Custom `seoTitle` + `metaDescription` (auto repair shop intent) |
| wineries-seo | **No title/meta change** (query export required) |
| optometrist-seo | **No change** (proven click + A-grade override) |

### Infrastructure

- `buildPremiumContent.js`: optional `profile.seoTitle` (preserves override titles when set)

### Content body

- **No mass rewrites** — profile/override body copy unchanged

### Schema

- **No changes**

---

## 7. Internal-Link Changes

### Industry override (wineries)

- Added contextual link to `/blog/google-business-profile-optimization-guide` in `wineriesSeoPremium.internalLinks`

### `INDUSTRY_BLOG_SLUGS` (`internalLinks.js`)

Top 5 slugs → GBP optimization guide (one contextual blog link per industry internal-links band):

- hvac-seo, plumber-seo, automotive-seo, wineries-seo, optometrist-seo

### Blog → industry money pages (`blogCatalog.js`)

Added `/industries/wineries-seo` and `/industries/automotive-seo` to:

- `seo-trends-european-businesses-2026`
- `local-seo-checklist-multi-location-europe` (wineries + automotive)
- `google-business-profile-optimization-guide` (automotive + wineries)

---

## 8. Locked Pages — Confirmed Unchanged

No edits to:

- `/` (homepage SEO)
- `/services/seo`
- `/services/technical-seo`
- `/services/local-seo-service`
- `/services/gbp-optimization`
- `/services/e-commerce-seo`
- `/services/international-seo`

---

## 9. Build Result

```
npm run build — PASS
Sitemap: 115 URLs validated (www.seoindiatech.com)
```

---

## 10. Production QA Checklist

Run after Netlify deploy:

| Check | Top 5 industry | Locked services |
|-------|----------------|-----------------|
| HTTP 200 | ☐ | ☐ |
| Indexable | ☐ | ☐ |
| Canonical self | ☐ | ☐ |
| Title matches Phase 13 spec | ☐ hvac/plumber/auto | ☐ unchanged |
| Meta matches Phase 13 spec | ☐ | ☐ |
| One H1 | ☐ | ☐ |
| FAQ visible/schema parity | ☐ 20/20 | ☐ |
| GBP blog link present | ☐ Top 5 | — |
| No broken links | ☐ | ☐ |
| No visual regression | ☐ | ☐ |

**Script:** `node scripts/audit-phase-13a-top5-industries.mjs` (re-run post-deploy for live title verification)

---

## 11. Authority Targets

See `seo-audit/phase-13-authority-targets.md` — Tier 1 service hubs + Tier 2 Top 5 industries. No bulk backlink work started.

---

## 12. 30 / 60 / 90 Monitoring

See `seo-audit/phase-13-monitoring-plan.md`.

**Critical:** Upload **Queries + Page** GSC export before wineries title experiments.

---

## 13. Remaining Opportunities

| Opportunity | Priority | Notes |
|-------------|----------|-------|
| Wineries title/meta | High | After query export |
| Homepage + `/services/seo` depth | Medium | Pos ~47–60; PROTECT metadata |
| accountants-seo | Medium | Backup — best CTR in industry set |
| movers-and-moving-company-seo | Medium | Pos ~54 — earlier band |
| Next 3–5 industry batch | 60–90 days | From refreshed matrix |
| Service hub CTR | Low until query data | No speculative title changes |

---

## 14. Hard Stop — Phase 13 Complete

**Did not:**

- Rewrite all 41 industries
- Modify locked service pages
- Create new URLs / city pages
- Change sitemap logic
- Noindex low-traffic pages
- Mass AI content or fake schema

**STOP** — Monitor per 30/60/90 plan before Phase 14 batch selection.

---

## Artifact Index

| File | Purpose |
|------|---------|
| `phase-13-baseline.md` | GSC baseline |
| `phase-13-gsc-opportunity-matrix.csv` | URL opportunity matrix |
| `phase-13-industry-priority-matrix.csv` | 41-industry ranking |
| `phase-13-top5-industry-audit.md` | Audit + implementation record |
| `phase-13a-top5-industry-opportunity-audit.md` | Pre-implementation audit |
| `phase-13-monitoring-plan.md` | 30/60/90 monitoring |
| `phase-13-authority-targets.md` | Offsite priorities |
| `keyword-url-map.md` | Keyword architecture |
| `scripts/generate-phase-13-matrices.mjs` | Matrix generator |
