# SEO Dashboard Specification

**Date:** 2026-07-30  
**Platform:** Looker Studio / GA4 Explorations / GSC (recommended stack)

---

## Data Sources

| Source | Connection | Status |
|--------|------------|--------|
| Google Search Console | Looker Studio connector | EXTERNAL ACCESS REQUIRED |
| GA4 | Looker Studio / GA4 UI | EXTERNAL ACCESS REQUIRED |
| Bing Webmaster | Manual export / API | BING_ACCESS_REQUIRED |
| Site audits | `seo-performance-audit.md`, JSON reports | IMPLEMENTED |
| CRM leads | Email/CRM | CRM_REQUIRED |

---

## TAB 1 — Executive Overview

| Widget | Metric | Source |
|--------|--------|--------|
| Organic clicks trend | 28-day line chart | GSC |
| Organic sessions | 28-day line chart | GA4 |
| Leads | form_submit + phone + whatsapp | GA4 |
| Conversion rate | Leads / organic sessions | GA4 |
| Indexed pages | Count | GSC |
| Top 5 landing pages | Table | GSC |
| Alerts | Manual action, sitemap error, traffic cliff | GSC + audit |

---

## TAB 2 — Organic Search

- Clicks, impressions, CTR, position (28d / 90d)
- Device split (mobile/desktop)
- Country split (India, USA, UK, Australia focus)

---

## TAB 3 — Search Console

- Indexing status breakdown
- Sitemap health
- Core Web Vitals summary
- Coverage issues table

---

## TAB 4 — Queries

- Top 100 queries with classification column
- Category pie chart (BRAND, COMMERCIAL, LOCAL, etc.)
- Rising / declining queries
- CTR opportunity table

---

## TAB 5 — Landing Pages

Columns per `seo-performance-audit.md`:

| URL | Page Type | Primary Topic | Clicks | Impressions | CTR | Position | Sessions | Conversions | Conv Rate |

Filter by page_type.

---

## TAB 6 — Services

Filter: `page_type = service`

| Service slug | Clicks | Sessions | cta_click | form_submit | Conv % |

All 17 service URLs from sitemap.

---

## TAB 7 — Blogs

Filter: `page_type = blog`

| Blog slug | Clicks | Sessions | Engagement | Service CTA clicks | Conversions |

Flags: high traffic/low conv, declining traffic.

---

## TAB 8 — Industries

Filter: `page_type = industry`

41 industry pages — clicks, sessions, leads.

---

## TAB 9 — Cities

Filter: `page_type = city`

11 city pages — local queries, phone clicks, form submissions.

---

## TAB 10 — Conversions

Funnel visualization:
```
Organic Session → Landing Page → CTA → Lead
```

Event breakdown: form_submit, phone_click, whatsapp_click, email_click, cta_click

By page_type, form_name, cta_location.

---

## TAB 11 — Technical SEO

- Automated audit summary (weekly JSON from `seo-technical-audit`)
- 404 count (GSC)
- Canonical issues
- Orphan pages (from link audit)
- Analytics health check status

---

## TAB 12 — AI/LLM

| Metric | Status |
|--------|--------|
| Referrals from chat.openai.com, perplexity, etc. | OBSERVED when in GA4 |
| AI/LLM blog traffic | GA4 page filter |
| Bing AI cited URLs | BING_ACCESS_REQUIRED |
| GEO/AEO service page performance | GA4 |

Mark each metric OBSERVED / ESTIMATED / NOT AVAILABLE.

---

## TAB 13 — Authority

- Referring domains (Ahrefs/Moz — external)
- New backlinks
- PR placements (Phase 6 calendar)
- Citation count

---

## TAB 14 — Recommendations

Auto-populated from:
- Query opportunity framework
- Technical audit OPEN issues
- Content cannibalization flags (Phase 5)

**Human review required** — not auto-implemented.

---

## GA4 Custom Dimensions (GTM Setup)

| Dimension | Event Parameter |
|-----------|-----------------|
| page_type | page_type |
| page_topic | page_topic |
| form_name | form_name |
| cta_location | cta_location |
| utm_campaign | utm_campaign |
| first_touch_source | first_touch_source |

Register in GA4 admin after GTM events confirmed.

---

## Refresh Schedule

| Tab | Refresh |
|-----|---------|
| GSC data | Daily (Looker) |
| GA4 data | Daily |
| Technical audit | Weekly (CI/manual) |
| Recommendations | Weekly manual |
