# Migration + Technical SEO QA

**Date:** 2026-08-13  
**Phase:** 1 — Migration & technical validation (before priority page optimization)  
**Verdict:** **PASS** (with documented 301 alias fix deployed in `netlify.toml`)

---

## Checklist

| Item | Status | Notes |
|------|--------|-------|
| Old → new URL mapping | ✅ | `next.config.mjs` + `netlify.toml` aliases documented |
| 301 redirects | ✅ | Netlify explicit 301 for 5 aliases (was 308 via Next plugin) |
| 404 errors | ✅ | No critical 404s on sitemap URLs |
| Redirect chains | ✅ | Single-hop aliases; apex→www separate |
| Redirect loops | ✅ | None detected |
| Canonical URLs | ✅ | Self-canonical on industry/service pages |
| Internal links to old URLs | ✅ | No `/contactus`, `/locations/*`, alias service paths in source hrefs |
| XML sitemap | ✅ | 115 URLs, www only |
| robots.txt | ✅ | `LLMs-Txt:` removed; Sitemap directive kept |
| /llms.txt | ✅ | Live, sections valid (`validate-llm-layer.mjs`) |
| Indexability | ✅ | Priority pages HTTP 200, index, follow |
| HTTP status codes | ✅ | Sitemap URLs return 200 |
| Broken links | ✅ | Technical audit: 0 CRITICAL, 0 HIGH |
| Duplicate URLs | ✅ | Sitemap validation passed |
| HTTPS / www | ✅ | Apex/http → https://www via Netlify |
| Final URL consistency | ✅ | Canonical matches www final URLs |

---

## Redirect map (aliases)

| Old URL | New URL |
|---------|---------|
| `/contactus` | `/contact-us` |
| `/services/woocommerce-seo` | `/services/e-commerce-seo` |
| `/services/seo-web-design` | `/services/ui-ux-design` |
| `/locations/noida` | `/seo-services/seo-services-in-noida` |
| `/locations/delhi` | `/seo-services/seo-services-in-delhi` |
| `/new`, `/old` | `/` |

---

## robots.txt change

- Removed unsupported `LLMs-Txt:` directive
- Preserved User-agent rules, Allow/Disallow, Sitemap
- `/llms.txt` remains available and linked from site HTML

---

## Scripts run

- `node scripts/post-deploy-live-validation.mjs`
- `node scripts/validate-llm-layer.mjs`
- `node scripts/validate-sitemap.mjs`
- `node scripts/seo-technical-audit.mjs`

---

## Gate for Phase 2

Technical validation **complete**. Priority industry page optimization may proceed per `priority-pages-gsc-optimization.md`.

**Note:** Queries+Page GSC export still not in repository — query-level optimization deferred; page-level GSC used only where documented.
