# Content Information Needed — E-E-A-T Gaps

Pages or topics where stronger trust signals require **verified information from the business**. Do not invent credentials, clients, awards, or results.

---

## About / Company

| Page | Missing | Status |
|------|---------|--------|
| `/who-we-are` | Named leadership bios with verifiable experience, certifications, years in business | Client/company information required |
| `/who-we-are` | Case studies or client logos with written permission | Client approval required |

## Service Pages

| Page | Missing | Status |
|------|---------|--------|
| `/services/seo` | Testimonial quotes — verify real clients and consent | Client approval required |
| `/services/ai-seo` | Testimonial quotes — verify real clients and consent | Client approval required |
| Multiple services | `toolsTrust.certifications` and `toolsTrust.awards` arrays | Verify or remove unverifiable entries |
| `/seo-packages` | Specific pricing tiers if shown publicly | Business decision required |

## Blog — YMYL Topics

| Page | Missing | Status |
|------|---------|--------|
| `/blog/seo-healthcare-businesses-europe` | Qualified medical/healthcare reviewer name and credentials | Expert reviewer required |
| `/blog/seo-law-firms-complete-guide` | Legal industry reviewer or practicing attorney byline | Expert reviewer required |

## Blog — Author

| Page | Missing | Status |
|------|---------|--------|
| All blogs | Author `Rahul Sharma` — confirm title, experience, LinkedIn/profile URL | Company verification required |
| Legacy home `BlogSection.js` | Placeholder "John Doe" author on old home component | Replace with verified author or remove |

## European Market Content

| Page | Missing | Status |
|------|---------|--------|
| `/blog/seo-trends-european-businesses-2026` | Country-specific regulatory claims (GDPR marketing, healthcare advertising) | Source verification required before adding |
| `/blog/international-seo-guide-european-companies` | Market size or search volume statistics | Source verification required |
| `/blog/local-seo-checklist-multi-location-europe` | Country-specific citation sources | Source verification optional |

## Industry Pages

| Page | Missing | Status |
|------|---------|--------|
| Healthcare industries (`/industries/dentist-seo`, etc.) | Industry-specific compliance disclaimers if required | Legal review recommended |
| All industry pages | Real client examples in sector | Client approval required |

## City Pages

| Page | Missing | Status |
|------|---------|--------|
| `/seo-services/*` | Hyper-local facts (landmarks, neighborhoods) where not in `locations.js` | Research per city or flag for review |
| City pages without unique `localContext` fields | Meaningful local differentiation | Content review required |

---

## How to Resolve

1. Provide verified bios, credentials, and client permissions to the content team
2. Remove or soften unverifiable trust badges until confirmed
3. Add `reviewedBy` metadata to YMYL blogs once reviewer is confirmed
4. Do not publish missing blog (`google-core-update-may-2026`) until sources are gathered
