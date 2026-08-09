# Technical SEO Dashboard — SEO India Tech

**Last updated:** Phase 7 (2026-07-30)  
**Regenerate audit:** `npm run seo:audit-technical`

---

## Health Overview

| Area | Status | Last check | Notes |
|------|--------|------------|-------|
| Indexability | **Good** | Phase 7 | 113 indexable URLs; no unexpected noindex |
| Sitemap health | **Good** | Phase 7 | Dynamic XML; blog-only lastmod |
| Canonical health | **Improved** | Phase 7 | Apex → www redirects added |
| Robots.txt | **Good** | Phase 4/7 | AI crawlers + sitemap |
| Broken links (internal) | **Monitor** | Phase 2 | `npm run seo:audit-links` |
| Orphan pages | **Review** | Phase 7 | Many city/industry pages low inbound |
| Crawl depth | **Acceptable** | Phase 7 | Hub/nav reaches core templates |
| Core Web Vitals | **Field verify** | Phase 7 | Code fixes applied; need CrUX/GSC |
| JS rendering | **Good** | Phase 7 | SSG primary templates |
| Schema | **Good** | Phase 7 | Invalid SearchAction removed |
| Mobile | **Good** | Phase 7 | Responsive + viewport |
| Image performance | **Good** | Phase 7 | next/image AVIF/WebP |
| Redirects | **Good** | Phase 7 | 5 rules; no chains detected |

---

## KPIs to Track (Monthly)

| Metric | Source | Target |
|--------|--------|--------|
| Indexed pages (GSC) | Google Search Console | ≈ 113 canonical URLs |
| Crawl errors | GSC Coverage | 0 critical |
| Sitemap submitted URLs | GSC Sitemaps | 113 |
| 404 spike | GSC / server logs | No unexplained increase |
| CWV — LCP | GSC Core Web Vitals | Good URL ≥ 75% |
| CWV — INP | GSC Core Web Vitals | Good URL ≥ 75% |
| CWV — CLS | GSC Core Web Vitals | Good URL ≥ 75% |
| Orphan count | `seo:audit-technical` | Decrease over time |
| Schema errors | Rich Results Test / GSC | 0 invalid |
| Canonical mismatch | GSC Page indexing | 0 |

---

## Automated Checks (CI / Pre-deploy)

| Command | Purpose |
|---------|---------|
| `npm run build` | Build + postbuild sitemap validation |
| `npm run check-seo` | Title, description, canonical, SeoHead |
| `npm run check-sitemap` | URL allowlist + HTTPS |
| `npm run check-headings` | Heading hierarchy scan |
| `npm run seo:audit-technical` | Full technical audit doc |
| `npm run seo:audit-links` | Internal link matrix |
| `npm run seo:validate-llm` | robots, llms.txt, agents.json |

---

## Open Items (Phase 7)

| Priority | Item | Owner |
|----------|------|-------|
| MEDIUM | Orphan city/industry pages — add matrix links | SEO / content |
| MEDIUM | CLS field verification on hero templates | Dev |
| LOW | Optional `Disallow: /_next/` in robots | Dev |
| LOW | Remove redundant `/services/pay-per-click` page file | Dev (needs approval) |
| FIELD | CrUX / PageSpeed on homepage, service, blog | Marketing |

---

## Before / After (Phase 7 Fixes)

| Change | Before | After | Impact |
|--------|--------|-------|--------|
| Sitemap lastmod | Same build date on all 113 URLs | Blog posts only, real dates | Avoid misleading crawl signals |
| Apex canonical | Hosting-dependent | 301 to www in netlify.toml | Consolidate signals |
| SearchAction schema | Pointed to non-existent `/blog?q=` | Removed | Valid JSON-LD |
| LCP preload | Mobile excluded via media query | All viewports | Better mobile LCP |
| 404 page | Default Next.js | Custom noindex + recovery links | UX + indexation |

---

## Related Documents

- [`technical-seo-audit.md`](./technical-seo-audit.md) — full URL/issue log
- [`url-normalization.md`](./url-normalization.md) — URL rules
- [`audit-reports/technical-seo-audit-latest.json`](./audit-reports/technical-seo-audit-latest.json) — machine-readable
