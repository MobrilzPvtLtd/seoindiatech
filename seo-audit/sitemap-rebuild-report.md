# Sitemap Rebuild Report

**Generated:** 2026-08-13 (build postbuild)  
**Publish mode:** `all` (default)

## Before → After

| Metric | Before | After |
|--------|--------|-------|
| URL count | 115 | 115 (`all` mode) |
| `<changefreq>` | Every URL | **Removed** |
| `<priority>` | Every URL | **Removed** |
| `lastmod` | Blogs only (0 with dateModified) | Registry + blogs when `dateModified` exists |
| Lastmod coverage | ~0% | **9.6%** (11/115) |

## Indexed-waves mode (not active until GSC gate)

| Metric | Value |
|--------|-------|
| Sitemap URLs | 58 |
| Hold URLs excluded | 37 |
| Non-wave blogs excluded | 20 (still indexable, not in sitemap) |

Activate with `SITEMAP_PUBLISH_MODE=indexed_waves` — see `gsc-gate.md`.

## Files changed

- `utils/sitemapBuilder.js` — quality-first XML (loc + optional lastmod)
- `utils/sitemapLastmodRegistry.js` + `seo-audit/page-lastmod.json`
- `utils/sitemapWaveConfig.js` — wave lists and filtering
- `scripts/validate-sitemap.mjs` — loc alignment, lastmod %, noise tag check
- `scripts/qa-sitemap-waves.mjs` — wave QA

## Validation

```
Sitemap validation passed: 115 URLs (mode=all)
Lastmod coverage: 11/115 (9.6%)
LLMS_TXT FINAL_STATUS PASS (118 URLs = 115 pages + 3 machine resources)
SITEMAP_WAVE_QA PASS
```

## URL policy

See `seo-audit/url-policy.md` — canonical host `www`, no trailing slash on paths, homepage loc without slash.
