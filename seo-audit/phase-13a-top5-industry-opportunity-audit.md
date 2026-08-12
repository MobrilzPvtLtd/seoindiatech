# Phase 13A — Top Industry Opportunity Audit

**Date:** 2026-08-12  
**Phase:** 13A — AUDIT ONLY (no code, content, metadata, or schema changes)  
**GSC source:** User workbook — Web search, last 3 months, page-level export (75 pages; 37/41 industry URLs with rows)  
**Live snapshot:** `seo-audit/phase-13a-top5-industry-live-snapshot.json`  
**Audit script:** `scripts/audit-phase-13a-top5-industries.mjs`

---

## Executive Summary

GSC confirms **real search visibility** on five industry URLs, but positions sit mostly **67–80** — deep SERP, not page-1 contention yet. **Zero clicks on wineries (287 impressions)** is the clearest CTR / intent-mismatch signal in the batch. **Optometrist (1 click)** and **Accountants backup (1 click, 2.94% CTR)** prove some queries already convert.

**Critical limitation:** Export is **page-level only** — we cannot map exact queries to each industry URL without a **Queries + Page** GSC export. Phase 13B should not assume impression drivers; request query-level export before heavy title/meta changes.

**Verdict:** Proceed with **Phase 13B on these five** (Wineries, HVAC, Optometrist, Plumber, Automotive) as GSC-prioritized candidates — **tighten, don’t reposition**. Keep **Accountants** as first swap-in if query export shows weak intent fit on any Tier-1 page.

**Do not** revert to provisional override Top 5 (Plastic Surgery, Doctor, etc.) — GSC visibility does not support them in this window.

---

## GSC Context (site-level)

| URL | Impressions | Avg. Position | Notes |
|-----|-------------|---------------|-------|
| Homepage | 3,108 | 47.19 | Core brand hub — do not reposition |
| `/services/seo` | 3,468 | 60.10 | SEO services hub — stable architecture |

Strategy validated: **structural cleanup complete** → focus on **pages that already earn impressions**.

---

## Opportunity Framework (A–E)

| Class | Definition | Top-5 batch |
|-------|------------|-------------|
| **A** | High impressions + position 8–20 | None in this export |
| **B** | High impressions + low CTR | **Wineries**, **HVAC** (strongest) |
| **C** | Position 1–7 — protect | None |
| **D** | Impressions but weak relevance | **Possible for Wineries** until queries confirmed |
| **E** | Almost no impressions | Not primary for this batch |

All five candidates sit in **~67–80** — ranking-depth opportunity (move toward page 1), not “already winning” protection.

---

## Composite Priority Matrix

Scores: **GSC visibility** (impressions), **ranking gap** (lower position = better), **CTR/click signal**, **page quality** (override vs template), **commercial value** (qualitative).

| Rank | Slug | Impr. | Pos. | Clicks | CTR | Override | Opportunity class | 13B readiness |
|------|------|-------|------|--------|-----|----------|-------------------|---------------|
| 1 | wineries-seo | 287 | 80.42 | 0 | 0% | Yes | B + D (query check) | Audit queries first; page quality high |
| 2 | hvac-seo | 135 | 67.91 | 0 | 0% | No | B | Profile-strong; template title/meta |
| 3 | optometrist-seo | 85 | 75.16 | 1 | 1.18% | Yes | B + click proof | Best validated relevance |
| 4 | plumber-seo | 53 | 79.40 | 0 | 0% | No | B | Rich profile; template shell |
| 5 | automotive-seo | 40 | 69.75 | 0 | 0% | No | B | Best position in batch |
| **6** | accountants-seo | 34 | 67.26 | 1 | 2.94% | Yes | B + click proof | **First backup** — best CTR efficiency |

---

## Per-Page Audits

### 1. Wineries SEO (`/industries/wineries-seo`)

**GSC:** 287 impressions · 0 clicks · 0% CTR · position **80.42**

| Signal | Live value |
|--------|------------|
| Title | SEO for Wineries \| Winery SEO Services \| SEO India Tech |
| Meta | Tasting room, DTC, wine tourism — India, USA, Europe |
| H1 | SEO for Wineries |
| Canonical / robots | Self · index, follow |
| Word count (est.) | ~3,913 (thinnest in batch) |
| FAQ | 20 visible / 20 schema |
| Override | **Yes** — `wineriesSeoPremium` |
| Service links | seo, local, technical ✅ |
| Contextual blog links | **None** in internal-links band |

**Strengths**

- Only page in batch with **custom editorial** (winery tourism, DTC, ecommerce, regional SEO)
- Title/H1/meta are **winery-specific**, not generic template
- Highest GSC impression volume by far

**Why position ~80 with high impressions?**

- Likely appearing for **broad or tail queries** far below page 1 (agency “winery SEO services” vs consumer “wineries near me” — **unknown without query export**)
- **Zero CTR** suggests snippet/title mismatch with actual queries shown, or deep position users never scroll to
- Thinner word count vs template pages may limit topical depth for competitive terms

**Cannibalisation risk:** Low vs homepage/SEO hub on primary intent; page targets **winery SEO services** (agency), not wine tourism consumer queries.

**Phase 13B direction (after query export):** CTR/snippet test only if queries are service-intent; if impressions are irrelevant queries, **do not** chase with consumer tourism copy — agency framing preserved.

---

### 2. HVAC SEO (`/industries/hvac-seo`)

**GSC:** 135 impressions · 0 clicks · position **67.91**

| Signal | Live value |
|--------|------------|
| Title | HVAC SEO Services \| Local, AI & GEO SEO Experts \| SEO India Tech |
| Meta | Service pages, local SEO, GBP… (post-12A template) |
| H1 | HVAC SEO Services Built for Qualified Customers |
| Override | No — profile-driven template |
| Word count (est.) | ~4,532 |
| FAQ | 20/20 |

**Strengths**

- **Strong profile** in `popularMarkets.js` — emergency HVAC, seasonal campaigns, commercial/residential split
- Best **non-click impression volume** after wineries
- Position **67.91** — closer to mid-SERP than wineries/plumber

**Gaps**

- **Generic title suffix** (“Local, AI & GEO SEO Experts”) — same as 30+ industry pages; weak SERP differentiation
- Template H2 shell (swap-industry-name structure)
- No contextual industry blog links

**Phase 13B direction:** Title/meta **tighten** toward HVAC commercial intent (emergency repair, AC install, maintenance plans) — **preserve URL and H1 client term (Customers)**. Expand service-specific FAQ subset? Profile FAQs already HVAC-rich — consider 8 synced FAQs pattern from service pages only if query export supports.

---

### 3. Optometrist SEO (`/industries/optometrist-seo`)

**GSC:** 85 impressions · **1 click** · 1.18% CTR · position **75.16**

| Signal | Live value |
|--------|------------|
| Title | SEO for Optometrists & Eye Care Practices \| SEO India Tech |
| Meta | Eye care SEO, local visibility, patient-focused |
| H1 | SEO for Optometrists That Brings Patients to Your Practice |
| Override | **Yes** — `optometristSeoPremium` |
| Word count (est.) | ~5,017 |
| Blog link | `/blog/google-business-profile-optimization-guide` |

**Strengths**

- **Proven click** — strongest evidence that at least one query matches page intent
- Custom title, H1, semantic topics, healthcare-adjacent internal links
- MedicalBusiness schema appropriate

**Gaps**

- Position still **75** — visibility without volume at page 1
- Only one contextual blog link; no eye-care-specific article in sitemap band

**Phase 13B direction:** Optimize for **map pack + eye exam** service queries (per profile); avoid generic healthcare dilution. **Do not** change locked healthcare positioning without query proof.

---

### 4. Plumber SEO (`/industries/plumber-seo`)

**GSC:** 53 impressions · 0 clicks · position **79.40**

| Signal | Live value |
|--------|------------|
| Title | Plumber SEO Services \| Local, AI & GEO SEO Experts \| SEO India Tech |
| H1 | Plumber SEO Services Built for Qualified Customers |
| Override | No — **rich profile** (emergency, commercial, suburb pages) |
| FAQ | 20/20 (post-12A dedupe) |
| Word count (est.) | ~4,498 |

**Strengths**

- Profile copy is **emergency-plumbing-specific** (best in batch for trade vertical)
- Post-12A: correct Customers H1, service-pages meta, technical SEO link

**Gaps**

- Generic title pattern shared across industries
- Zero clicks despite profile depth — **intent/snippet or query depth** issue
- Template testimonials (home service) — appropriate post-12A

**Phase 13B direction:** Title tighten for **plumber SEO services** (agency) vs conflating with “emergency plumber near me” (local business intent in GSC may be wrong audience for this URL).

---

### 5. Automotive SEO (`/industries/automotive-seo`)

**GSC:** 40 impressions · 0 clicks · position **69.75**

| Signal | Live value |
|--------|------------|
| Title | Automotive SEO Services \| Local, AI & GEO SEO Experts \| SEO India Tech |
| H1 | Automotive SEO Services Built for Qualified Customers |
| Override | No — profile covers repair, fleet, service-menu SEO |
| Word count (est.) | ~4,494 |

**Strengths**

- **Best average position** in the Tier-1 five (69.75)
- Profile addresses service-menu architecture, ASE/trust, fleet B2B

**Gaps**

- Lowest impression count in Tier-1 (still ahead of most of the other 36 industry pages)
- Generic title/meta template

**Phase 13B direction:** Incremental title/meta alignment to **automotive SEO services** + service-page architecture themes from profile.

---

## Backup: Accountants SEO

**GSC:** 34 impressions · **1 click** · **2.94% CTR** · position **67.26**

- **Override yes** — custom title/H1, professional services framing
- **Best CTR in industry set** — more efficient than raw impressions suggest
- Swap into Phase 13B if query export shows a Tier-1 page is ranking for irrelevant queries

---

## Cross-Batch Findings (Phase 13B template)

| Issue | Wineries | HVAC | Optometrist | Plumber | Automotive |
|-------|----------|------|-------------|---------|------------|
| Generic title suffix | No | Yes | No | Yes | Yes |
| A-grade override | Yes | No | Yes | No | No |
| Contextual blog links | No | No | GBP guide | No | No |
| Technical SEO link | Yes | Yes | Yes | Yes | Yes |
| Click validation | No | No | **Yes** | No | No |

**Shared 13B pattern (template pages):** Differentiate **title/meta** for SERP without changing URL/H1 architecture; add **one** contextual blog link where catalog supports; **do not** mass-rewrite 4,500-word template bodies.

**Wineries / Optometrist:** Page quality already high — **query export gates** CTR/title experiments.

---

## Missing from GSC Pages Export (not in workbook)

Realtor · Breweries · Sign Company · Tree Care — **no row in export** (not assumed zero). Re-evaluate when full export or Queries report available.

---

## Recommended Phase 13B Scope (when approved)

1. **Request Queries + Page export** for last 3 months (gate for title/meta changes on Wineries)
2. Implement **per-page tightening** on five URLs only:
   - Title/meta refinement (template three: HVAC, Plumber, Automotive)
   - Wineries/Optometrist: CTR/snippet only if queries confirm service intent
   - Optional: 8 industry-specific FAQs (service-page pattern) — only where audit proves generic FAQ dilution
   - One contextual blog link per page where relevant asset exists
3. **No** new industry URLs · **no** homepage/service hub edits · **no** full page rewrites

---

## Phase 13A Verdict

| Item | Status |
|------|--------|
| GSC-driven Top 5 confirmed | ✅ Wineries, HVAC, Optometrist, Plumber, Automotive |
| Provisional override Top 5 retired | ✅ |
| Accountants as backup | ✅ |
| Ready for Phase 13B planning | ✅ **after optional Queries export** |
| Code changes in 13A | ✅ None |

**STOP** — Phase 13B implementation awaits your approval and (recommended) Queries-level GSC export.
