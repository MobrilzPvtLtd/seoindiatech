# Sitemap Index Wave Plan

**Status:** Reference lists in `utils/sitemapWaveConfig.js`  
**Live policy:** **Full indexation** — see `full-indexation-policy.md` (default `all`, 115 URLs, no content noindex)  
**Optional mode:** `indexed_waves` only if `SITEMAP_PUBLISH_MODE=indexed_waves` is set in deploy env

## Wave lists

### Wave 1 (~28 URLs) — index first

**Core (8):** `/`, `/who-we-are`, `/contact-us`, `/seo-packages`, `/blog`, `/industries`, `/privacy-policy`, `/terms`

**Services (12):** seo, technical-seo, local-seo-service, e-commerce-seo, international-seo, gbp-optimization, ai-seo, generative-engine-optimization, answer-engine-optimization, content-marketing, ppc-advertising, digital-marketing

**Blogs (8):** geo-generative-engine-optimization-guide, chatgpt-seo-ai-search-organic-traffic, google-ai-overviews-changing-business-seo, complete-eeat-guide-business-websites, technical-seo-checklist-enterprise-websites, google-business-profile-optimization-guide, seo-law-firms-complete-guide, local-seo-guide-indian-businesses-2026

### Wave 1 leftover — index when Wave 1 is clean in GSC

**Services (9):** paid-advertising, design-and-development, app-store-optimization, digital-branding, online-reputation-management, small-business-seo, social-media-marketing, social-media-optimization, ui-ux-design

**Solutions (6):** automation, crm-and-tools, market-research, promotion-and-ads, website-creation, workflow

### Wave 2 — index after uniqueness test

**Industries (10):** dentist-seo, plastic-surgery-seo, orthodontist-seo, personal-injury-seo, hvac-seo, plumber-seo, realtor-seo, property-management-seo, cpa-firm-seo, roofers-seo

**Cities (5):** Noida, Delhi, Gurgaon, Mumbai, Bangalore

### Hold (37) — noindex + out of sitemap when `indexed_waves` active

**Industries (31):** fertility-clinic-seo, optometrist-seo, doctor-physician-seo, physiotherapy-seo, garage-door-seo, well-drilling-company-seo, fence-installer-seo, deck-builder-seo, cabinet-manufacturer-seo, architect-seo, painter-seo, automotive-seo, locksmith-service-seo, interior-designer-seo, flooring-company-seo, home-builder-and-remodeler-seo, catering-seo, breweries-seo, wineries-seo, herbal-product-seo, chiropractor-seo, movers-and-moving-company-seo, pest-control-service-seo, wildlife-removal-company-seo, sign-company-seo, waste-management-seo, dry-cleaner-seo, tree-care-seo, accountants-seo, pet-service-seo, janitorial-service-seo

**Cities (6):** Chandigarh, Hyderabad, Jaipur, Pune, Chennai, Kolkata

## Activation

| Mode | Env | Sitemap | Hold pages |
|------|-----|---------|------------|
| `all` | default | 115 URLs | index, follow |
| `indexed_waves` | `SITEMAP_PUBLISH_MODE=indexed_waves` | ~58 URLs | noindex, follow; removed from sitemap + llms.txt |

See `seo-audit/gsc-gate.md` before enabling `indexed_waves`.

## QA

```bash
node scripts/qa-sitemap-waves.mjs
node scripts/validate-sitemap.mjs
node scripts/validate-llms-txt.mjs
```
