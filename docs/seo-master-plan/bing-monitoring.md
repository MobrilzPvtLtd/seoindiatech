# Bing Webmaster Tools Monitoring Plan

**Date:** 2026-07-30  
**Bing Access:** BING_ACCESS_REQUIRED

---

## Current Website Status

| Item | Status |
|------|--------|
| Bing verification meta | **NOT IMPLEMENTED** |
| Sitemap submission | Pending account |
| robots.txt | Allows Bingbot (Phase 7 audit) |
| Canonical / HTTPS | PASS |

---

## Setup Procedure (EXTERNAL ACTION REQUIRED)

1. Create/login at [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add property: `https://www.seoindiatech.com`
3. Verify via HTML meta tag — add to `pages/_document.js` Head
4. Submit sitemap: `https://www.seoindiatech.com/sitemap.xml`
5. Enable URL Inspection for key templates

---

## Monitoring Metrics

| Metric | Cadence | Notes |
|--------|---------|-------|
| Clicks | Weekly | Compare with GSC |
| Impressions | Weekly | |
| CTR | Weekly | Title/meta opportunities |
| Average position | Weekly | |
| Queries | Weekly | Classify per query-classification.md |
| Pages | Weekly | Landing page performance |
| Index coverage | Weekly | Crawl/index issues |
| Crawl issues | Weekly | Fix 4xx/5xx |
| Sitemap | Weekly | Match 113 URLs |
| Backlinks | Monthly | Cross-ref Phase 6 authority audit |
| AI Performance | Monthly | **Bing-specific** |

---

## Bing AI Performance

Track where Bing provides data (do not fabricate):

| Metric | Description | Status |
|--------|-------------|--------|
| Cited URLs | Pages referenced in Bing Copilot answers | **NOT AVAILABLE** until account connected |
| Grounding queries | Queries triggering AI citations | **NOT AVAILABLE** |
| AI visibility | Impression/click data for AI surfaces | **NOT AVAILABLE** |

Mark observations as:
- **OBSERVED** — from Bing dashboard export
- **ESTIMATED** — modeled from referral traffic only
- **NOT AVAILABLE** — no data source

---

## AI Referral Tracking (Website-Side)

In GA4 (via GTM), segment referrals from:
- `bing.com` (organic)
- Copilot / AI surfaces (when referrer is identifiable)

**Do not invent AI citation counts** — use Bing AI Performance when available.

---

## Comparison with Google

| Area | Google | Bing |
|------|--------|------|
| Verification | Implemented | Required |
| Sitemap | Live | Submit after verify |
| AI visibility | GSC limited | Bing AI Performance tab |
| Market share India | Primary | Secondary — still worth monitoring |

---

## Monthly Bing Checklist

- [ ] Export search performance (28 days)
- [ ] Review index coverage errors
- [ ] Check AI Performance tab (if available)
- [ ] Compare top 20 queries vs GSC
- [ ] Verify sitemap URL count matches site (113)
