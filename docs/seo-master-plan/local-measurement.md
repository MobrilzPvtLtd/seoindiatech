# Local SEO Measurement Plan

**Date:** 2026-07-30

---

## Scope

Measure local SEO performance across **11 city pages**, Local SEO service page, and GBP optimization page — without inventing GBP data.

---

## City Pages (11)

| City | URL | page_type |
|------|-----|-----------|
| Chandigarh | /seo-services/seo-services-in-chandigarh | city |
| Hyderabad | /seo-services/seo-services-in-hyderabad | city |
| Jaipur | /seo-services/seo-services-in-jaipur | city |
| Mumbai | /seo-services/seo-services-in-mumbai | city |
| Pune | /seo-services/seo-services-in-pune | city |
| Noida | /seo-services/seo-services-in-noida | city |
| Delhi | /seo-services/seo-services-in-delhi | city |
| Bangalore | /seo-services/seo-services-in-bangalore | city |
| Chennai | /seo-services/seo-services-in-chennai | city |
| Kolkata | /seo-services/seo-services-in-kolkata | city |
| Gurgaon | /seo-services/seo-services-in-gurgaon | city |

---

## Metrics per City

| Metric | Source | Status |
|--------|--------|--------|
| Organic clicks | GSC (page filter) | GSC_REQUIRED |
| Impressions | GSC | GSC_REQUIRED |
| Local queries | GSC query filter `[city]` | GSC_REQUIRED |
| Landing-page sessions | GA4 | GA4_REQUIRED |
| Phone clicks | GA4 `phone_click` where page_type=city | GA4_REQUIRED |
| Form submissions | GA4 `form_submit` where city param set | GA4_REQUIRED |
| CTA clicks | GA4 `cta_click` | GA4_REQUIRED |
| Conversions | GA4 | GA4_REQUIRED |

---

## Local Service Pages

| Page | URL |
|------|-----|
| Local SEO Service | /services/local-seo-service |
| GBP Optimization | /services/gbp-optimization |

Track cross-traffic: city page → local SEO service → contact.

---

## GBP Metrics (External)

**Do not claim GA4 provides complete GBP data.**

| GBP Metric | Source | Status |
|------------|--------|--------|
| Profile views | Google Business Profile | EXTERNAL ACTION REQUIRED |
| Search queries (direct) | GBP Insights | EXTERNAL ACTION REQUIRED |
| Calls from GBP | GBP | EXTERNAL ACTION REQUIRED |
| Direction requests | GBP | EXTERNAL ACTION REQUIRED |
| Reviews | GBP | EXTERNAL ACTION REQUIRED |

UTM for GBP website link: `utm_source=google&utm_medium=organic&utm_campaign=gbp_profile`

---

## GA4 Exploration Setup

**Dimension filters:**
- `page_type` = `city`
- Event parameter `city` = `[city name]`

**Funnel:**
1. Session start (organic)
2. City landing page
3. `cta_click` OR `phone_click` OR `form_submit`

---

## Local Query Monitoring (GSC)

Filter queries containing city names:
- noida, delhi, mumbai, pune, bangalore, chennai, kolkata, hyderabad, jaipur, chandigarh, gurgaon

Classify as **LOCAL** in query-classification.md.

---

## Reporting Cadence

| Report | Frequency |
|--------|-----------|
| City page GSC performance | Monthly |
| City conversion rates | Monthly |
| GBP actions | Monthly (when connected) |
| Local vs national query mix | Quarterly |

---

## Baseline

**BASELINE DATA REQUIRED** — populate after GSC/GA4 access.

See `local-seo-dashboard.md` (Phase 8) for KPI framework.
