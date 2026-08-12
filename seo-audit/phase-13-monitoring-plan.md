# Phase 13 — 30 / 60 / 90 Day Monitoring Plan

**Baseline:** 28.3K impressions · 67 clicks · 0.2% CTR · avg. position 43.7 (3 months)  
**Phase 13 scope:** Top 5 industry URLs + internal/blog links (no locked service page repositioning)

---

## Cadence

- **Weekly (light):** GSC Performance → Pages — Top 5 URLs + homepage + `/services/seo`
- **Bi-weekly:** Query export (Pages + Queries) — upload to `seo-audit/gsc-exports/` when available
- **Monthly:** Full opportunity matrix refresh vs baseline
- **Do not** make major title/H1/architecture changes more than once per 30-day window per URL

---

## 30 Days

| Check | What to watch |
|-------|----------------|
| Indexation | Top 5 industry URLs remain indexed; HTTP 200; canonical self |
| Impressions | Movement on wineries, hvac, optometrist, plumber, automotive |
| CTR | Especially wineries (287 impr / 0 clicks) and hvac (135 / 0) |
| Position | Any shift from 67–80 band toward 50 → 40 |
| Query changes | New Queries+Page export: confirm triggering queries per URL |
| Cannibalisation | Same query on multiple URLs — reinforce keyword-to-URL map |

**Success signals:** CTR > 0 on previously zero-CTR industry pages; position improvement ≥ 5 points on any Top 5 URL with stable impressions.

---

## 60 Days

| Check | What to watch |
|-------|----------------|
| Page 1 movement | Queries entering positions 4–20 with meaningful impressions |
| Clicks | Site-level click growth vs 67 baseline |
| CTR | Industry pages vs 0.2% site average |
| Industry performance | Compare Top 5 vs backup (accountants-seo) |
| Cannibalisation | Service hub vs industry URL for same query |
| Internal links | Crawl paths: blog → industry → service |

**Decision point:** If query export shows wineries title mismatch, approve **one** title/meta experiment with before/after tracking.

---

## 90 Days

| Check | What to watch |
|-------|----------------|
| Commercial keyword growth | SEO services, local, technical, e-commerce, international hubs |
| Page 1 count | Number of queries in positions 1–10 with impressions ≥ 10 |
| Traffic growth | Organic sessions / engaged sessions (GA4) |
| Conversion landing pages | Form starts / contact from industry + service URLs |
| Authority | Progress on `phase-13-authority-targets.md` (editorial links, not bulk) |

**Next batch:** Select **next 3–5 industry URLs** from `phase-13-industry-priority-matrix.csv` using **fresh GSC data** — not provisional override list.

---

## Red Flags (investigate, do not panic-rewrite)

- Sudden impression drop > 50% on a modified URL → check indexation, canonical, robots
- CTR collapse after title change → revert title only; document in monitoring log
- New irrelevant queries on contact or utility pages → internal link to correct money page first

---

## Recommended GSC Export (upload to repo)

1. **Pages** — last 3 months, Web
2. **Queries** — last 3 months, Web
3. **Pages + Queries** — last 3 months, Web (critical for wineries CTR work)

Filename pattern: `seo-audit/gsc-exports/YYYY-MM-pages-queries.csv`
