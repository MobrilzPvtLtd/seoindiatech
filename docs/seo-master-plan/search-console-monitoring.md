# Google Search Console Monitoring Plan

**Date:** 2026-07-30  
**GSC Access:** EXTERNAL ACCESS REQUIRED (no API in codebase)

---

## Website Readiness (Implemented)

| Requirement | Status |
|-------------|--------|
| Valid sitemap (`/sitemap.xml`) | PASS — 113 URLs |
| Canonical URLs (www HTTPS) | PASS — Phase 7 |
| robots.txt | PASS |
| Indexable commercial pages | PASS |
| HTTPS + consistent hostname | PASS — `www.seoindiatech.com` |
| Structured data | PASS — Organization, Service, FAQ, Breadcrumb |
| Clean URL architecture | PASS |
| GSC verification meta | PASS — `_app.js` |

---

## Monitoring Cadence

| Metric | Frequency | Action Threshold |
|--------|-----------|------------------|
| Total clicks | Weekly | >15% WoW decline → investigate |
| Total impressions | Weekly | >20% decline → check indexing |
| CTR | Weekly | Page with >500 impressions & CTR <1% → title/meta review |
| Average position | Weekly | Track branded vs non-branded separately |
| Search queries | Weekly | Export top 100; classify (see query-classification.md) |
| Landing pages | Weekly | Map to page_type; flag orphan traffic |
| Countries | Monthly | Align with service area strategy |
| Devices | Monthly | Mobile vs desktop CTR gaps |
| Search appearance | Monthly | Rich results, FAQ, sitelinks |
| Indexing | Weekly | New exclusions, crawl anomalies |
| Sitemap status | Weekly | Errors = CRITICAL |
| Core Web Vitals | Monthly | URL-level poor ratings |
| Manual actions | Weekly | Any = CRITICAL |
| Security issues | Weekly | Any = CRITICAL |

---

## Weekly GSC Workflow

1. **Performance → Search results** — export 28-day comparison
2. **Pages** — top 50 landing pages; join with `seo-performance-audit.md` page types
3. **Queries** — classify using `query-classification.md`
4. **Indexing → Pages** — review "Not indexed" reasons
5. **Experience → Core Web Vitals** — field data for key templates
6. **Sitemaps** — confirm 113 URLs discovered, 0 errors

---

## Indexation Monitoring

| Status | Action |
|--------|--------|
| Indexed | Monitor performance |
| Crawled — currently not indexed | Review content quality, internal links |
| Discovered — currently not indexed | Check crawl budget, sitemap |
| Duplicate without user-selected canonical | Fix canonical tags |
| Alternate page with proper canonical | Expected for redirects |
| Excluded by noindex | Verify intentional (`/new`, `/old`, 404) |
| 404 | Fix or redirect |
| Server error (5xx) | CRITICAL — fix immediately |

---

## Segment Reports

| Segment | GSC Filter / Export |
|---------|---------------------|
| Services | Page URL contains `/services/` |
| Blogs | Page URL contains `/blog/` |
| Industries | Page URL contains `/industries/` |
| Cities | Page URL contains `/seo-services/` |
| Solutions | Page URL contains `/solution/` |
| Core | Homepage, contact, packages, who-we-are |

---

## Integration with GA4

| GSC Metric | GA4 Equivalent | Join Key |
|------------|----------------|----------|
| Clicks | Sessions (organic) | Landing page URL |
| Impressions | — | GSC only |
| CTR | — | GSC only |
| Position | — | GSC only |

Link GSC property to GA4 in Google admin for Search Console reports inside GA4.

---

## Alerts (Manual or Looker Studio)

| Alert | Condition |
|-------|-----------|
| Traffic cliff | Organic clicks -25% WoW |
| Index drop | Indexed pages -10% |
| Sitemap error | Any error in sitemap report |
| Manual action | Any notification |
| CWV regression | Key template moves to "Poor" |

**Do not alert on daily noise** — use 7-day rolling averages.

---

## Data Availability

| Data | Status |
|------|--------|
| Live GSC metrics | **GSC_ACCESS_REQUIRED** |
| API automation | **NOT IMPLEMENTED** |
| Baseline metrics | **BASELINE DATA REQUIRED** — see `seo-baseline.md`
