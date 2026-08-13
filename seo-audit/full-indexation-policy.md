# Full Indexation Policy

**Effective:** 2026-08-13  
**Decision:** All live content URLs remain **index, follow** with no mass noindex.

## What is indexed

| Scope | Count | Sitemap | robots |
|-------|-------|---------|--------|
| Core, services, solutions, industries, cities, blogs | **115** | Yes | `index, follow` |
| `/new`, `/old` | 2 | No | `noindex` + redirect to `/` |
| `/api/*` | — | No | `Disallow` in robots.txt |
| `/404` | — | No | `noindex` (correct) |

## Technical controls (no indexation harm)

- **Sitemap:** 115 URLs, no `<changefreq>` / `<priority>` noise; optional `lastmod` only when content was edited
- **Canonical:** `https://www.seoindiatech.com` + path (no trailing slash on paths; homepage without trailing slash)
- **Hold wave:** Not active — do **not** set `SITEMAP_PUBLISH_MODE=indexed_waves` unless you intentionally reduce the sitemap
- **llms.txt:** Same 115 URLs + machine resources (118 links total)

## Verify after deploy

```bash
npm run build
node scripts/post-deploy-live-validation.mjs
node scripts/validate-sitemap.mjs
```

## GSC

- Submit only: `https://www.seoindiatech.com/sitemap.xml`
- Indexing speed depends on quality and crawl budget; technical setup does not block indexing
