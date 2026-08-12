# Phase 12A — Industry Template Implementation

**Date:** 2026-08-12  
**Scope:** Template/data architecture only — no individual page rewrites, no URL/canonical changes  
**QA script:** `scripts/qa-phase-12b-industries.mjs`

---

## Changes

| Fix | Implementation |
|-----|----------------|
| `popular-markets` medical bleed | `getClientTerm(entry)` per slug — patients only on medical slugs; customers for HVAC/plumber; clients for property/realtor/legal |
| Default “Procedure pages” meta | `buildDefaultMetaDescription()` — procedure language only on medical patient slugs (excludes chiropractor) |
| `healthcareTestimonials` reuse | `getTestimonialsForIndustry(categoryId, slug)` — healthcare only on patient slugs; home trades → `HOME_SERVICE_TESTIMONIALS`; property/realtor → `SERVICE_SECTOR_TESTIMONIALS` |
| Missing Technical SEO link | `/services/technical-seo` added to all `CATEGORY_SERVICE_LINKS` + default `seo.internalLinks` in builder |
| Plumber FAQ parity | `expandFaqs()` dedupes by normalized question + pads to 20 with additional generic FAQ |

**Files modified**

- `utils/industries/premium/buildPremiumContent.js`
- `utils/industries/premium/industryTestimonials.js`
- `utils/industries/catalog.js`
- `utils/internalLinks.js`

**Preserved**

- All 41 URLs, sitemap (115 URLs)
- A-grade overrides (plastic surgery, optometrist, doctor, wineries, accountants) — custom H1/meta untouched
- Completed service pages — not modified

---

## Local QA (post-build, `next start` port 3458)

| Criterion | Result |
|-----------|--------|
| 41/41 HTTP 200 | ✅ |
| 0 incorrect “Procedure pages” on non-medical | ✅ |
| 0 “Qualified Patients” on property/realtor/HVAC/plumber | ✅ |
| 41/41 Technical SEO link present | ✅ |
| FAQ visible = schema (all pages) | ✅ |
| Plumber FAQ count | 20 visible / 20 schema ✅ |
| Build | PASS |
| Sitemap validation | PASS (115 URLs) |

**Production QA:** Deploy required to validate live URLs on www.seoindiatech.com.

---

## Next

1. **12B** — Production QA after deploy  
2. **Phase 11** — International SEO implementation  
3. **GSC export** — Gate for Phase 13 Top 5 industry selection
