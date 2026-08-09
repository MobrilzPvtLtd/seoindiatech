# Google Business Profile Action Plan — SEO India Tech

**Date:** 2026-07-30  
**Important:** This plan audits the **website's relationship** to GBP. It does **not** claim GBP optimization is complete without GBP access.

---

## Current Website ↔ GBP Relationship

| Check | Status |
|-------|--------|
| GBP profile link on website | **Not found** — add after verification |
| Google Maps link | **Not found** |
| LocalBusiness schema on city pages | **Not used** (correct — cities are service areas) |
| Organization schema with Noida address | **Present** — matches siteConfig |
| NAP on contact page | **Present** — minor address string variance |
| GBP optimization service page | `/services/gbp-optimization` — commercial page for clients |
| Local SEO service page | `/services/local-seo-service` |

---

## GBP Action Checklist

### Profile completeness — **EXTERNAL ACTION REQUIRED**

| Task | Status | Notes |
|------|--------|-------|
| Claim/verify GBP listing | EXTERNAL | Search "SEO India Tech" + Noida on Google |
| Primary business name | EXTERNAL | Must match website: "SEO India Tech" |
| Primary category | EXTERNAL | e.g. Marketing agency, SEO service — choose best fit |
| Secondary categories | EXTERNAL | Digital marketing, Advertising agency (if accurate) |
| Address | EXTERNAL | Align with verified address in `local-information-needed.md` |
| Service area | EXTERNAL | Noida + national/international if accurate for service business |
| Phone | EXTERNAL | +91-8076676731 — must match website |
| Website URL | EXTERNAL | https://www.seoindiatech.com |
| Hours | EXTERNAL | Confirm before publishing (hidden on contact page) |

### Services

| Task | Status |
|------|--------|
| Add service list (SEO, Local SEO, AI SEO, PPC, etc.) | EXTERNAL |
| Match services to `/services/*` pages | Recommended |
| No fake services | Required |

### Business description

| Task | Status |
|------|--------|
| Write 750-char description from factual site copy | EXTERNAL |
| Mention Noida HQ + global client service (if true) | EXTERNAL |
| Link to `/who-we-are` for full story | Optional on website after GBP |

### Photos

| Task | Status |
|------|--------|
| Logo | EXTERNAL |
| Office/workspace (if applicable) | EXTERNAL — real photos only |
| Team photos | EXTERNAL — with permission |
| No stock-only profile | Required |

### Posts

| Task | Status |
|------|--------|
| Monthly GBP post cadence | EXTERNAL |
| Link to new blogs (local SEO, GBP guides) | Recommended |
| No fake offers | Required |

### Reviews

| Task | Status |
|------|--------|
| Review acquisition process (ethical) | EXTERNAL |
| Review response SOP | EXTERNAL |
| **No fake reviews** | Required |
| **No review schema** without real GBP data | Required |

### Website integration (after GBP verified)

| Task | Status |
|------|--------|
| Add GBP/Google Maps link to contact page | Pending verification |
| Add `sameAs` GBP URL to Organization schema | Pending URL |
| UTM on GBP website link: `?utm_source=google&utm_medium=organic&utm_campaign=gbp` | Optional |

### Local landing page

| Page | Purpose |
|------|---------|
| `/contact-us` | Primary conversion from GBP |
| `/services/local-seo-service` | Service depth |
| `/services/gbp-optimization` | GBP service offering |
| `/seo-services/seo-services-in-noida` | City page (service area — not second office) |

### Citation consistency

When GBP is live, sync NAP to citations per `local-citation-plan.md`.

---

## UTM Tracking (GBP → Website)

Recommended parameters for GBP website button:

```
https://www.seoindiatech.com/contact-us?utm_source=google&utm_medium=organic&utm_campaign=gbp_profile
```

Track in GA4 as `session_source=google` + `session_campaign=gbp_profile`.

---

## What SEO India Tech Sells (GBP for Clients)

The `/services/gbp-optimization` page describes GBP services **for clients** — do not confuse with own GBP status.

---

## Status Summary

| Area | Website ready? | GBP access needed? |
|------|----------------|-------------------|
| NAP foundation | Mostly yes | Verify address |
| Service pages | Yes | — |
| Schema | Yes (Organization) | Add GBP URL when known |
| GBP profile optimization | N/A | **Yes — all profile tasks** |
