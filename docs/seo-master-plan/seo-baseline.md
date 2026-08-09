# SEO Baseline

**Date:** 2026-07-30  
**Status:** BASELINE DATA REQUIRED

---

## Purpose

Record starting metrics before measuring Phase 9+ progress. **Do not invent values.**

---

## Baseline Metrics

| Metric | Value | Date Captured | Source | Status |
|--------|-------|---------------|--------|--------|
| Organic clicks (28d) | — | — | GSC | BASELINE DATA REQUIRED |
| Impressions (28d) | — | — | GSC | BASELINE DATA REQUIRED |
| CTR (28d) | — | — | GSC | BASELINE DATA REQUIRED |
| Average position (28d) | — | — | GSC | BASELINE DATA REQUIRED |
| Organic sessions (28d) | — | — | GA4 | BASELINE DATA REQUIRED |
| Leads — form_submit (28d) | — | — | GA4 | BASELINE DATA REQUIRED |
| Leads — phone_click (28d) | — | — | GA4 | BASELINE DATA REQUIRED |
| Leads — whatsapp_click (28d) | — | — | GA4 | BASELINE DATA REQUIRED |
| Conversion rate | — | — | GA4 | BASELINE DATA REQUIRED |
| Indexed pages | — | — | GSC | BASELINE DATA REQUIRED |
| Referring domains | — | — | Ahrefs/Moz | BASELINE DATA REQUIRED |
| AI referral sessions (28d) | — | — | GA4 | BASELINE DATA REQUIRED |

---

## Site Inventory Baseline (Static — Captured Phase 9)

| Item | Value | Source |
|------|-------|--------|
| Sitemap URLs | 113 | validate-sitemap.mjs |
| City pages | 11 | sitemap |
| Industry pages | 41 | sitemap |
| Service pages | 17 | sitemap |
| Blog posts | 29 | sitemap |
| Solution pages | 5 | sitemap |
| GTM container | GTM-5TS8QJRM | codebase |
| GSC verification | Present | _app.js |
| Bing verification | Not present | codebase |

---

## How to Capture Baseline

### Google Search Console
1. Performance → Last 28 days → Export
2. Record clicks, impressions, CTR, position
3. Indexing → Pages → count "Indexed"

### GA4 (after GTM events confirmed)
1. Reports → Acquisition → Traffic acquisition → Organic Search
2. Events → form_submit, phone_click, whatsapp_click (28d counts)
3. Explore → AI referrers if identifiable

### Authority
1. Export referring domains from Ahrefs/Semrush (Phase 6)
2. Record count and top 10 domains

---

## Baseline Capture Checklist

- [ ] GSC property access confirmed
- [ ] GA4 property linked to GSC
- [ ] GTM events firing in Preview mode
- [ ] 28-day export saved (secure storage)
- [ ] This document updated with real numbers
- [ ] Baseline date recorded

---

## Post-Baseline

Compare monthly reports against this document. Update only with verified exports.

**Do not estimate or fabricate baseline metrics.**
