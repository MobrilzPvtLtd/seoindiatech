# City Content Uniqueness — Phase 8

Generated: 2026-08-09

## Methodology

- **HIGH:** Custom `pageContent` with city-specific areas, industries, and FAQs (7 cities)
- **LOW:** `buildCityPage()` template from `extraLocations.js` — only `localContext` paragraph differs (4 cities)
- **MEDIUM:** Partial custom content

## Scores

| City | URL | Score | Content type | Approx. content size | Recommendation |
|------|-----|-------|--------------|---------------------|----------------|
| Chandigarh | /seo-services/seo-services-in-chandigarh | **HIGH** | custom | 6429 chars | KEEP — unique local content |
| Hyderabad | /seo-services/seo-services-in-hyderabad | **HIGH** | custom | 6544 chars | KEEP — unique local content |
| Jaipur | /seo-services/seo-services-in-jaipur | **HIGH** | custom | 6358 chars | KEEP — unique local content |
| Mumbai | /seo-services/seo-services-in-mumbai | **HIGH** | custom | 6725 chars | KEEP — unique local content |
| Pune | /seo-services/seo-services-in-pune | **HIGH** | custom | 6205 chars | KEEP — unique local content |
| Noida | /seo-services/seo-services-in-noida | **HIGH** | custom | 5835 chars | KEEP — unique local content |
| Delhi | /seo-services/seo-services-in-delhi | **HIGH** | custom | 6192 chars | KEEP — unique local content |
| Bangalore | /seo-services/seo-services-in-bangalore | **LOW** | template | 0 chars | REVIEW — expand with verified local context |
| Chennai | /seo-services/seo-services-in-chennai | **LOW** | template | 0 chars | REVIEW — expand with verified local context |
| Kolkata | /seo-services/seo-services-in-kolkata | **LOW** | template | 0 chars | REVIEW — expand with verified local context |
| Gurgaon | /seo-services/seo-services-in-gurgaon | **LOW** | template | 0 chars | REVIEW — expand with verified local context |

## Duplicate Pattern Detection

### Template group (LOW)

Bangalore, Chennai, Kolkata, Gurgaon share identical H2/H3 structure:

- "Why SEO services in [City] matter for local growth"
- "What you get with our SEO services in [City]"
- Keyword mapping / on-page / technical / local SEO / why choose us list

**Only the `localContext` sentence and city name substitution differ.**

**Action:** REVIEW — do not auto-rewrite. Expand with **SOURCE REQUIRED** local facts when available.

### Custom group (HIGH)

Chandigarh, Hyderabad, Jaipur, Mumbai, Pune, Noida, Delhi have unique:

- Local area references (e.g. Sector 17 Chandigarh, Baner Pune, Hinjewadi)
- Industry examples
- Multi-city cross-links
- Custom FAQ sets

## Cross-City Duplicate Phrases

Phrases repeated across multiple custom pages (acceptable if natural):

- "SEO India Tech" brand mentions
- "Google Business Profile" / local SEO process language
- "3-6 months" timeline language

**Not doorway risk** if each page has substantive unique local sections — template cities need the most attention.

## Do NOT

- Auto-merge city pages
- Auto-noindex template cities
- Create industry × city combinations
