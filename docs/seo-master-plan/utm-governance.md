# UTM Governance

**Date:** 2026-07-30

---

## Standard Parameters

| Parameter | Required | Format | Example |
|-----------|----------|--------|---------|
| utm_source | Yes | lowercase, no spaces | `google`, `linkedin`, `newsletter` |
| utm_medium | Yes | lowercase | `organic`, `cpc`, `email`, `social` |
| utm_campaign | Yes | lowercase-hyphenated | `gbp_profile`, `q1-brand-awareness` |
| utm_content | Optional | lowercase-hyphenated | `hero-cta`, `footer-link` |
| utm_term | Optional (paid only) | lowercase | `seo-agency-india` |

---

## Rules

1. **All lowercase** — no `Google` or `Email`
2. **Hyphens not underscores** for multi-word values (consistency)
3. **No spaces** — use hyphens
4. **No internal UTM links** — do not add UTM params to internal site navigation
5. **Document every campaign** in this file or a campaign registry spreadsheet
6. **Consistent source names** — use same `utm_source` for same platform always

---

## Approved Source Values

| Platform | utm_source | utm_medium |
|----------|------------|------------|
| Google Business Profile | `google` | `organic` |
| Google Ads | `google` | `cpc` |
| Facebook / Meta | `facebook` | `social` or `cpc` |
| LinkedIn organic | `linkedin` | `social` |
| LinkedIn Ads | `linkedin` | `cpc` |
| Email newsletter | `newsletter` | `email` |
| Guest blog / PR | `[publication-name]` | `referral` |
| Bing Ads | `bing` | `cpc` |

---

## Campaign Naming Convention

```
[channel]-[objective]-[period]
```

Examples:
- `gbp_profile` — permanent GBP website link
- `linkedin-leads-2026q2`
- `pr-forbes-mention-july2026`

---

## GBP Website Link (When Verified)

```
https://www.seoindiatech.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp_profile
```

Optional content for Posts:
```
utm_content=gbp_post_[YYYY-MM-DD]
```

---

## Attribution on Website

Phase 9 captures UTMs via `utils/analytics/attribution.js`:
- **Session attribution:** sessionStorage (current visit)
- **First touch:** localStorage (persistent)

Attached to all dataLayer events. Optional: include in CRM email notifications.

---

## Prohibited

| Practice | Reason |
|----------|--------|
| UTM on internal links | Skews attribution |
| Changing campaign names mid-flight | Breaks trend analysis |
| Personal data in UTM params | Privacy violation |
| Auto-generated random campaign IDs | Unreadable reporting |

---

## Review Cadence

- Quarterly: audit active campaigns
- On new channel launch: add to approved sources table
- On GBP verification: add GBP UTM to profile
