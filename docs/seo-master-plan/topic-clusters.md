# Topic Clusters — Phase 5

Last updated: 2026-07-30

## AI Search Cluster

| Field | Value |
|-------|-------|
| **Cluster** | AI Search |
| **Pillar** | `/services/ai-seo` |
| **Supporting Pages** | `/blog/ai-seo-vs-traditional-seo-2026`, `/blog/google-ai-overviews-changing-business-seo`, `/blog/how-google-ai-overviews-are-changing-seo`, `/blog/chatgpt-seo-ai-search-organic-traffic`, `/blog/geo-generative-engine-optimization-guide`, `/blog/what-is-ai-seo-why-business-needs-it`, `/services/answer-engine-optimization`, `/services/generative-engine-optimization` |
| **Commercial Destination** | AI SEO, AEO, GEO, SEO |
| **Missing Content** | `/blog/google-core-update-may-2026-seo-content-strategy-agentic-ai` (brief only — not published) |
| **Internal Linking Status** | **Improved** — `relatedBlogSlugs` expanded in `blogCatalog.js`; legacy posts enriched via `legacyBlogMeta.js`; cross-link from beginner AI Overview article to business guide |

## Local SEO Cluster

| Field | Value |
|-------|-------|
| **Cluster** | Local SEO |
| **Pillar** | `/services/local-seo-service` |
| **Supporting Pages** | `/blog/google-business-profile-optimization-guide`, `/blog/local-seo-checklist-multi-location-europe`, `/blog/local-vs-national-vs-international-seo`, `/blog/seo-checklist-small-businesses-europe`, `/blog/local-seo-guide-indian-businesses-2026`, `/blog/seo-for-restaurants-local-diners`, `/services/gbp-optimization`, `/services/small-business-seo` |
| **Commercial Destination** | Local SEO, GBP Optimization, Small Business SEO |
| **Missing Content** | Dedicated multi-location enterprise case study (requires verified client data) |
| **Internal Linking Status** | **Good** — GBP and local checklist blogs link to services; restaurant and India local guides link to GBP/local services |

## Technical SEO Cluster

| Field | Value |
|-------|-------|
| **Cluster** | Technical SEO |
| **Pillar** | `/services/seo` |
| **Supporting Pages** | `/blog/technical-seo-checklist-enterprise-websites`, `/blog/core-web-vitals-optimization-guide`, `/blog/100-seo-mistakes-costing-business-leads`, `/blog/complete-eeat-guide-business-websites`, `/blog/link-building-guide-2026`, `/services/ui-ux-design` (CWV/design) |
| **Commercial Destination** | SEO, Design & Development (`/services/ui-ux-design`) |
| **Missing Content** | Enterprise SEO dedicated service page (currently covered under main SEO) |
| **Internal Linking Status** | **Good** — technical blogs link to SEO and content marketing services |

## Content Marketing Cluster

| Field | Value |
|-------|-------|
| **Cluster** | Content Marketing |
| **Pillar** | `/services/content-marketing` |
| **Supporting Pages** | `/blog/content-marketing-strategy-qualified-leads`, `/blog/complete-eeat-guide-business-websites`, `/blog/link-building-guide-2026`, `/blog/ppc-vs-seo-which-is-better` |
| **Commercial Destination** | Content Marketing, SEO |
| **Missing Content** | None critical |
| **Internal Linking Status** | **Improved** — E-E-A-T, link building, and content strategy posts cross-link |

## International / European SEO Cluster

| Field | Value |
|-------|-------|
| **Cluster** | International SEO (Europe focus) |
| **Pillar** | `/blog/international-seo-guide-european-companies` |
| **Supporting Pages** | `/blog/seo-trends-european-businesses-2026`, `/blog/local-seo-checklist-multi-location-europe`, `/blog/local-vs-national-vs-international-seo`, `/blog/choose-best-seo-agency-europe`, `/blog/seo-checklist-small-businesses-europe`, `/blog/how-to-choose-best-seo-agency-india` |
| **Commercial Destination** | SEO, Local SEO (where relevant) |
| **Missing Content** | Market-specific regulatory pages (flag for source verification — do not invent) |
| **Internal Linking Status** | **Improved** — European trend, international guide, and local checklist cross-linked |

## E-Commerce Cluster

| Field | Value |
|-------|-------|
| **Cluster** | E-Commerce SEO |
| **Pillar** | `/services/e-commerce-seo` |
| **Supporting Pages** | `/blog/ecommerce-seo-checklist-india`, `/blog/technical-seo-checklist-enterprise-websites` |
| **Commercial Destination** | E-Commerce SEO |
| **Missing Content** | Dedicated product SEO and category SEO articles (optional future) |
| **Internal Linking Status** | **Adequate** — checklist links to e-commerce SEO service |

## Linking Principles Applied

1. Pillar service pages receive contextual links from supporting blogs (via `serviceLinks` / `relatedBlogSlugs`)
2. Supporting blogs link back to pillar services and related articles in the same cluster
3. No circular excessive linking — typically 3–5 related articles per post
4. Legacy blogs enriched in Phase 5 to participate in clusters without rewriting premium content
