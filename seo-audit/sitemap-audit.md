# Sitemap + URL Architecture SEO Audit

**Site:** https://www.seoindiatech.com
**Audit date:** 2026-08-12
**Phase:** AUDIT ONLY — no URLs deleted, no noindex, no redirects, no URL structure changes.

---

## 1. Sitemap implementation

| Question | Finding |
|----------|---------|
| Static or dynamic? | **Hybrid static output.** Routes collected programmatically (scripts/sitemap-paths.mjs), then scripts/generate-sitemap.mjs writes public/sitemap.xml on postbuild. No live pages/sitemap.xml.js route. |
| Regeneration trigger | Every npm run build (postbuild hook). |
| Source of truth | STATIC_ROUTES + blog + industry + location slugs from source files. |
| Manual maintenance risk | Low for URL inclusion. **High for lastmod accuracy** (blog datePublished used as lastmod). |

### Live validation summary (115 sitemap URLs)

| Check | Result |
|-------|--------|
| HTTP 200 | 115/115 |
| Redirects in sitemap | 0 |
| Non-indexable in sitemap | 0 |
| Canonical mismatches (live vs expected) | 0 |
| Duplicate URLs in sitemap | 0 (validator enforces) |
| Non-www / foreign domains | 0 (validator enforces) |
| Draft blog in sitemap | 0 (google-core-update draft excluded) |

**No redirect responses** on sitemap URLs at fetch time.

**Canonical:** All checked URLs self-canonical or match expected path (homepage apex without trailing slash — sitewide pattern).

---

## 2. lastmod audit — CRITICAL

**Rule:** lastmod must reflect actual content modification, never future publishing schedules.

**Audit date:** 2026-08-12

### Future lastmod dates found: 0

| Path | lastmod in sitemap | Issue |
|------|-------------------|-------|

**Root cause:** utils/sitemapBuilder.js maps blog slugs to BLOG_CATALOG.datePublished. Staggered future dates are editorial calendar, not modification timestamps.

**Pages without lastmod:** All non-blog URLs — no lastmod tag. Acceptable; omitting is better than false dates.

### Recommended lastmod implementation (document only)

1. Remove future datePublished from sitemap — use dateModified on real edits, or omit lastmod.
2. Never set lastmod on sitemap regeneration alone.
3. Blog: lastmod only if datePublished <= today or dateModified is set.
4. Premium pages: optional content version metadata when override files change.
5. Keep build-time static sitemap; improve metadata accuracy rather than dynamic route.

---

## 3. changefreq / priority

Current: homepage priority 1.0; blog monthly/0.7; all else weekly/0.8.

**Finding:** ~86 non-blog URLs share weekly + 0.8.

**Recommendation:** Do not tune changefreq/priority for ranking. Optionally remove or simplify. Focus on correct URLs, canonical, indexability, honest lastmod.

---

## 4. URL inventory by category

| Category | Count |
|----------|-------|
| A. Core | 12 |
| B. Service | 21 |
| C. Industry | 41 |
| D. City/Location | 11 |
| E. Blog | 28 |
| F. Legal | 2 |
| **Total** | **115** |

Full inventory: seo-audit/url-inventory.csv

---

## 5. City page audit

**Do not delete or noindex** — recommendations only.

| City | Slug | Content type | Thin risk | Recommendation |
|------|------|--------------|-----------|----------------|
| Chandigarh | seo-services-in-chandigarh | Custom block | LOW | UNIQUE long-form — lower thin risk; still audit cannibalisation vs /services/seo |
| Hyderabad | seo-services-in-hyderabad | Custom block | LOW | UNIQUE long-form — lower thin risk; still audit cannibalisation vs /services/seo |
| Jaipur | seo-services-in-jaipur | Custom block | LOW | UNIQUE long-form — lower thin risk; still audit cannibalisation vs /services/seo |
| Mumbai | seo-services-in-mumbai | Custom block | LOW | UNIQUE long-form — lower thin risk; still audit cannibalisation vs /services/seo |
| Pune | seo-services-in-pune | Custom block | LOW | UNIQUE long-form — lower thin risk; still audit cannibalisation vs /services/seo |
| Noida | seo-services-in-noida | Custom block | LOW | UNIQUE long-form — lower thin risk; still audit cannibalisation vs /services/seo |
| Delhi | seo-services-in-delhi | Custom block | LOW | UNIQUE long-form — lower thin risk; still audit cannibalisation vs /services/seo |

### City cross-findings

- Bangalore, Chennai, Kolkata, Gurgaon: identical buildCityPage() template — doorway/thin risk.
- Chandigarh, Hyderabad, Jaipur, Mumbai, Pune, Noida, Delhi: longer custom content — lower thin risk.
- No unique local case studies in codebase for any city.
- Cannibalisation risk MEDIUM vs /services/seo and /services/local-seo-service.
- Delhi/Noida have stronger title differentiation.

---

## 6. Industry page audit

**Total:** 41 industry URLs

**Priority (GSC):** wineries-seo, optometrist-seo, accountants-seo, doctor-physician-seo — custom keywordIndustryOverrides.

**Remaining ~37 pages:** premium template — optimize only where GSC shows demand; do not create new industry URLs without mapping gap.

---

## 7. Service page groups

**PRIMARY SEO:** /services/seo, technical-seo, local-seo-service, e-commerce-seo, international-seo, small-business-seo
**SECONDARY DIGITAL:** digital-marketing, content-marketing, social-media-marketing, ORM, digital-branding
**AI/SEARCH:** ai-seo, generative-engine-optimization, answer-engine-optimization, gbp-optimization
**PAID:** paid-advertising, ppc-advertising
**DESIGN:** design-and-development hub, ui-ux-design

**Authority flow:** Homepage → /services/seo → cluster services → priority industries → blogs.

---

## 8. Blog audit

Map existing blogs to parent services. Do not create new blogs. India-focused legacy posts have MEDIUM cannibalisation risk vs homepage/services hub.

---

## 9. Recommended sitemap architecture

1. Fix **7 future lastmod dates** before next deploy (see Section 2 table).
2. Keep build-time static sitemap (avoids Netlify dynamic 500s).
3. Improve lastmod honesty; optionally drop changefreq/priority.
4. City template content is a content audit item, not a sitemap removal item.

---

## 10. Revised implementation sequence

1. Sitemap + URL Audit (this document)
2. Technical SEO Audit
3. Keyword → URL Mapping
4. Fix sitemap lastmod + canonical + indexability
5. Homepage through Final GSC QA

**Industry:** audit + optimize existing pages first. New pages only on genuine keyword gap.

---

*Generated by scripts/generate-sitemap-url-audit.mjs — audit only, no site modifications.*