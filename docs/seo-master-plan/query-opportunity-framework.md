# Query Opportunity Framework

**Date:** 2026-07-30

---

## Purpose

Identify SEO opportunities from Search Console data. **Recommendations only** — no automatic page changes.

---

## Opportunity Types

### 1. High Impressions + Low CTR

| Signal | Threshold (starting point) | Action |
|--------|---------------------------|--------|
| Impressions > 500/month | CTR < 2% (non-brand) | Review title tag + meta description |
| Position 1-5 | CTR below expected curve | Test SERP title; check rich results |

**Output:** Title/meta opportunity list for human review.

### 2. Position 4–20 (Striking Distance)

| Signal | Threshold | Action |
|--------|-----------|--------|
| Avg position 4-20 | Impressions > 100 | Content expansion, internal links, FAQ |
| Position improving | +3 positions in 28d | Continue optimization; don't over-change |

### 3. High Impressions + Low Clicks

Same as #1 but page-level in GSC Pages report.

### 4. Rising Queries

| Signal | Threshold | Action |
|--------|-----------|--------|
| New query in top 100 | — | Classify; assess landing page fit |
| Impressions +50% MoM | — | Monitor; consider content support |

### 5. Declining Queries

| Signal | Threshold | Action |
|--------|-----------|--------|
| Clicks -30% MoM | Position stable | Check CTR/title; competitor SERP changes |
| Position dropped >5 | — | Content refresh audit; not auto-rewrite |

### 6. New Queries

Export GSC comparison (new queries not in prior period). Classify and map to existing pages or flag content gap.

### 7. Unexpected Queries

Queries landing on wrong page type (e.g., "dentist seo" → homepage). Fix internal linking and on-page relevance.

### 8. Query Cannibalization

Multiple URLs ranking for same query cluster.

| Check | Tool |
|-------|------|
| Same query → 2+ URLs in GSC | GSC page+query export |
| Overlapping title keywords | seo-performance-audit |

**Action:** Consolidate internal links; differentiate intent — do not merge URLs without approval.

### 9. Commercial Queries Without Conversions

| Signal | Threshold | Action |
|--------|-----------|--------|
| COMMERCIAL query | Clicks > 20, 0 form_submit | Review CTA, page speed, trust signals |
| High traffic service page | Low conversion rate | A/B test CTA placement (not auto) |

### 10. Informational → Commercial Bridge

INFORMATIONAL blog posts with commercial query overlap.

**Action:** Add contextual internal links to service pages — manual editorial review.

---

## Weekly Opportunity Scan

1. Export GSC queries (28d vs prior 28d)
2. Flag position 4-20 with impressions > 100
3. Flag CTR outliers (impressions > 500, CTR < 2%)
4. Cross-reference with GA4 conversions by landing page
5. Add to weekly report "Recommended Actions" — max 10 items

---

## Do Not Auto-Act On

- Single-day ranking fluctuations
- Seasonal dips without 28-day trend
- Brand query CTR changes during site deploy
- Queries with <10 impressions

---

## Output Template

| Query | Category | Page | Position | Impressions | CTR | Opportunity Type | Recommendation | Priority |
|-------|----------|------|----------|-------------|-----|------------------|----------------|----------|
| *example* | COMMERCIAL | /services/seo | 8 | 1200 | 1.2% | Low CTR | Rewrite meta description | MEDIUM |

**Populate from real GSC exports only.**

---

## Data Status

**BASELINE DATA REQUIRED** — framework ready; no fabricated opportunity rows.
