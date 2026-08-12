# Phase 13 — Top 5 Industry Audit & Implementation Record

**Date:** 2026-08-12  
**Pre-audit:** `seo-audit/phase-13a-top5-industry-opportunity-audit.md`  
**GSC:** Page-level export — queries marked `GSC_QUERY_DATA_UNAVAILABLE`

---

## Data-Driven Top 5 Selection

| Rank | Slug | Impressions | Clicks | CTR | Position | Selection reason |
|------|------|-------------|--------|-----|----------|------------------|
| 1 | wineries-seo | 287 | 0 | 0% | 80.42 | Highest industry visibility; CTR gap |
| 2 | hvac-seo | 135 | 0 | 0% | 67.91 | High impressions; template title/meta |
| 3 | optometrist-seo | 85 | 1 | 1.18% | 75.16 | Proven click; A-grade override |
| 4 | plumber-seo | 53 | 0 | 0% | 79.40 | Rich profile; template shell |
| 5 | automotive-seo | 40 | 0 | 0% | 69.75 | Best position in batch |

**Backup:** accountants-seo (34 impr, 1 click, 2.94% CTR) — swap only if query export disproves intent on a Tier-1 page.

**Not selected (provisional list rejected):** plastic-surgery-seo, doctor-physician-seo — lower composite priority in this GSC window.

---

## Per-Page Audit Summary

### Wineries (`/industries/wineries-seo`)

| Element | Status |
|---------|--------|
| Title / H1 / meta | A-grade override — **unchanged in Phase 13** |
| Content depth | ~3,913 words; industry-specific override |
| FAQ / schema | 20 / 20 parity |
| Service links | seo, local, e-commerce, technical ✅ |
| Gap | No contextual blog link; 0 CTR at 287 impressions |

**Phase 13 action:** Add GBP guide internal link (override + `INDUSTRY_BLOG_SLUGS`). **No title/meta change** until Queries+Page export confirms intent.

---

### HVAC (`/industries/hvac-seo`)

| Element | Before | After (Phase 13) |
|---------|--------|------------------|
| Title | HVAC SEO Services \| Local, AI & GEO SEO Experts \| SEO India Tech | **HVAC SEO Services \| HVAC Contractor Marketing & Map Pack SEO** |
| Meta | Generic template default | **HVAC contractor-focused meta** (emergency AC, install, seasonal, Maps) |
| Override | No — profile-driven | `seoTitle` + `metaDescription` in profile |
| Content | Strong emergency/install signals | Unchanged body |

**Phase 13 action:** CTR title/meta + GBP blog link via `INDUSTRY_BLOG_SLUGS`.

---

### Optometrist (`/industries/optometrist-seo`)

| Element | Status |
|---------|--------|
| Title / meta / H1 | A-grade override — **unchanged** |
| Clicks | 1 (only converting page in batch) |
| FAQ / schema | 20 / 20 |

**Phase 13 action:** GBP blog link only (`INDUSTRY_BLOG_SLUGS`). Protect existing metadata.

---

### Plumber (`/industries/plumber-seo`)

| Element | Before | After (Phase 13) |
|---------|--------|------------------|
| Title | Plumber SEO Services \| Local, AI & GEO SEO Experts \| SEO India Tech | **Plumber SEO Services \| Plumbing Contractor Marketing** |
| Meta | Generic template | **Emergency plumbing, suburbs, GBP, reviews** |
| Content | Rich profile | Unchanged body |

**Phase 13 action:** CTR title/meta + GBP blog link.

---

### Automotive (`/industries/automotive-seo`)

| Element | Before | After (Phase 13) |
|---------|--------|------------------|
| Title | Automotive SEO Services \| Local, AI & GEO SEO Experts \| SEO India Tech | **Automotive SEO Services \| Auto Repair Shop Marketing** |
| Meta | Generic template | **Service-menu, map visibility, fleet, trust content** |
| Content | Strong auto-repair profile | Unchanged body |

**Phase 13 action:** CTR title/meta + GBP blog link + `seo-trends` / GBP guide `industryLinks`.

---

## Cannibalisation Check

| Intent | Primary URL | Top 5 risk |
|--------|-------------|------------|
| SEO Company India | `/` | None |
| SEO Services India | `/services/seo` | None |
| Local SEO | `/services/local-seo-service` | Low — industry pages support, not replace |
| Winery SEO | `/industries/wineries-seo` | Low vs service hubs |
| HVAC / Plumber / Auto SEO | respective `/industries/*` | Low |

---

## Schema / Architecture

- No schema changes in Phase 13
- URLs, canonicals, robots, H1s unchanged (except metadata on 3 template pages)
- `profile.seoTitle` support added in `buildPremiumContent.js` (infrastructure only)

---

## Files Modified

- `utils/industries/premium/buildPremiumContent.js` — `profile.seoTitle` override
- `utils/industries/profiles/popularMarkets.js` — hvac-seo, plumber-seo title/meta
- `utils/industries/profiles/automobileHome.js` — automotive-seo title/meta
- `utils/industries/premium/keywordIndustryOverrides.js` — wineries GBP blog link
- `utils/internalLinks.js` — `INDUSTRY_BLOG_SLUGS` for Top 5
- `utils/blog/premium/blogCatalog.js` — wineries + automotive on relevant posts
