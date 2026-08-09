# Local SEO Dashboard — SEO India Tech

**Last updated:** Phase 8 (2026-07-30)

Track local and industry organic performance — **not rankings alone**.

---

## Primary KPIs (Monthly)

| Metric | Source | Segments |
|--------|--------|----------|
| Organic clicks | Google Search Console | All / city pages / industry pages |
| Impressions | GSC | Local query filters |
| CTR | GSC | — |
| Average position | GSC | Directional only |
| Local queries | GSC filter: "near me", city names, "Noida", "local SEO" | — |

---

## City Page Performance

| URL | City | GSC clicks (MTD) | Impressions | Notes |
|-----|------|------------------|-------------|-------|
| /seo-services/seo-services-in-noida | Noida | — | — | HQ city — highest local intent |
| /seo-services/seo-services-in-delhi | Delhi | — | — | |
| /seo-services/seo-services-in-mumbai | Mumbai | — | — | |
| /seo-services/seo-services-in-bangalore | Bangalore | — | — | Template — monitor uniqueness |
| *…remaining 7 cities* | | — | — | Populate from GSC |

**Export:** GSC → Pages → filter `/seo-services/`

---

## Industry Page Performance

| Segment | URLs | GSC clicks (MTD) | Top landing pages |
|---------|------|------------------|-------------------|
| Healthcare | dentist, doctor, plastic surgery, etc. | — | — |
| Legal | personal injury, CPA | — | — |
| Home services | HVAC, plumber, locksmith | — | — |
| Real estate | realtor, property management | — | — |

**Export:** GSC → Pages → filter `/industries/`

---

## GBP Metrics — **EXTERNAL ACTION REQUIRED**

| Metric | Source | Status |
|--------|--------|--------|
| Profile views | GBP Insights | Needs access |
| Search queries (Maps) | GBP Insights | Needs access |
| Calls from GBP | GBP Insights | Needs access |
| Direction requests | GBP Insights | Needs access |
| Website clicks from GBP | GBP Insights + UTM | Needs access |
| Review count/rating | GBP | Needs access — do not put in schema without verification |

---

## Conversion KPIs

| Metric | Source | Target |
|--------|--------|--------|
| Contact form submissions | GA4 / CRM | Track `contact-us` |
| Phone clicks | GA4 events | `tel:+91-8076676731` |
| WhatsApp clicks | GA4 / footer | Track |
| SEO packages page visits from city pages | GA4 path flow | — |
| Qualified leads (sales-defined) | CRM | Primary business KPI |

---

## Local Content Cluster Health

| Cluster layer | Key URLs | Internal link status |
|---------------|----------|---------------------|
| Local SEO pillar | /services/local-seo-service | Hub |
| GBP | /services/gbp-optimization | Linked from cities |
| City pages | 11 `/seo-services/*` | Footer + CityLinksBand + breadcrumbs |
| Industry pages | 41 `/industries/*` | Linked from cities |
| Local blogs | GBP guide, local SEO guide, India local guide | **Linked from city pages (Phase 8)** |
| Conversion | /contact-us, /seo-packages | CTAs on all city pages |

---

## Technical Health (from Phase 7)

| Check | Status |
|-------|--------|
| City pages in sitemap | 11/11 |
| City schema areaServed | Fixed — single city |
| Breadcrumbs | Added Phase 8 |
| NAP in schema | Consistent with siteConfig |
| Mobile UX | Responsive |

---

## Review Cadence

| Frequency | Activity |
|-----------|----------|
| Weekly | GSC clicks on top 5 city + industry pages |
| Monthly | Full city/industry page report |
| Quarterly | City uniqueness review (template cities) |
| Quarterly | Citation NAP audit |
| After GBP access | Add GBP metrics section |

---

## Alerts

| Condition | Action |
|-----------|--------|
| City page impressions drop >30% MoM | Check indexing, canonical, content |
| New 404 on `/seo-services/*` | Fix routes |
| NAP mismatch found in citation | Update listing |
| GBP suspended | EXTERNAL — resolve with Google |

---

## Related Documents

- [`local-seo-audit.md`](./local-seo-audit.md)
- [`gbp-action-plan.md`](./gbp-action-plan.md)
- [`city-content-uniqueness.md`](./city-content-uniqueness.md)
- [`technical-seo-dashboard.md`](./technical-seo-dashboard.md)
