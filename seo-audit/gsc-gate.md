# GSC Gate — Hold Wave Activation

**Do not set `SITEMAP_PUBLISH_MODE=indexed_waves` until this gate passes.**

## Baseline (Phase 13 monitoring)

- Impressions: 28.3K
- Clicks: 67
- CTR: 0.2%
- Average position: 43.7

Compare 14–30 days after any sitemap wave change against this baseline.

## Required exports

Upload to `seo-audit/gsc-exports/`:

1. **Coverage** — Pages with *Crawled – currently not indexed* or *Discovered – currently not indexed*
2. **Queries + Pages** — Last 28 days export

Name files with date prefix, e.g. `2026-08-13-coverage.csv`.

## Gate criteria

Before Hold wave (`indexed_waves`):

1. Coverage export shows specific Hold URLs as crawled-not-indexed **or** 30-day monitoring window completed since Phase 13 baseline
2. No Hold URL has meaningful clicks/impressions worth protecting (review Queries+Pages export)
3. Wave 1 URLs inspected in GSC URL Inspection (sample, not bulk)
4. Single sitemap URL submitted: `https://www.seoindiatech.com/sitemap.xml`

## Activation steps

1. Set Netlify env: `SITEMAP_PUBLISH_MODE=indexed_waves`
2. Redeploy (postbuild regenerates sitemap + llms.txt)
3. Verify Hold pages return `noindex, follow`
4. Verify sitemap count drops to ~58 (no Hold URLs; non-wave blogs also excluded)
5. Monitor indexed count and baseline metrics for 30 days

## Document crawled-not-indexed Hold URLs

When exports are uploaded, list Hold URLs with coverage issues here:

| URL | GSC status | Notes |
|-----|------------|-------|
| _pending export_ | | |
