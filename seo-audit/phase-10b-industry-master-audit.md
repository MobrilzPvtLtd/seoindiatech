# Industry Pages Master Audit — 41 URLs

**Scope:** All `/industries/*` URLs in `public/sitemap.xml` (41 pages)  
**Audit date:** 2026-08-12  
**Phase:** 10B — AUDIT ONLY (no code, content, metadata, or schema changes)  
**Locked rule:** Do not optimize an industry page simply because it exists — optimize when there is clear search intent, commercial value, existing demand, or defensible content opportunity.

**Master matrix (machine-readable):** `seo-audit/phase-10b-industry-master-matrix.json`  
**Audit script:** `scripts/audit-industries-master.mjs`

---

## Executive Summary

All **41 industry pages** returned **HTTP 200**, are **indexable**, and share a single premium template pipeline (`utils/industries/premium/buildPremiumContent.js` + per-slug profiles). Pages are **long-form** (~3,900–5,500 words estimated) with **20 FAQs** (visible = schema) on 40 pages; **plumber-seo** has 19 visible FAQs (schema still 20 — minor parity gap to verify in Phase 12).

**Classification snapshot (automated + manual interpretation)**

| Grade | Count | Meaning in this audit |
|-------|-------|-------------------------|
| **A** | 5 | Handwritten premium override present |
| **B** | 36 | Profile-driven template pages — moderate shared H2 shell |
| **C** | 0 | No pages hit exact-match ≥75% template H2 threshold |
| **D** | 0 | No fetch errors or thin pages |

| Priority | Count | Meaning |
|----------|-------|---------|
| **P0** | 0 | No HTTP failures; no service-style duplicate quick-answer H2 pair detected |
| **P1** | 5 | Override pages (existing bespoke work) |
| **P2** | 36 | Template batch — defer individual optimization until Phase 12 template fix |
| **P3** | 0 | — |

**Critical template finding (Phase 12 driver):** The **“replace the industry name” test is structurally positive** for 36 template pages even though the automated exact-match ratio is only **5/21 H2s (~24%)**. Headings like *Why {Industry} Businesses Invest in SEO Now* and *Complete {Industry} SEO Strategy* are identical across verticals once industry labels are swapped. This is **mass templated SEO footprint risk**, not 41 unique content programs.

**Critical category bleed (P0 for Phase 12 template):** The `popular-markets` category applies **medical defaults** to non-medical verticals:

- `CLIENT_TERMS['popular-markets']` → **patients** (used in H1 for property management, realtor, HVAC, plumber — wrong)
- Default meta description includes **“Procedure pages”** on **37/41** pages (including property management, HVAC, etc.)
- `industryTestimonials` for `popular-markets` uses **healthcareTestimonials**

Override pages (plastic surgery, optometrist, doctor, wineries, accountants) mostly escape the worst bleed via custom meta/H1.

**GSC:** All impression/click fields are `null` (`GSC_REQUIRED`). **Top 5 P1 for commercial batching cannot be finalized until GSC export is imported** — current P1 list reflects override presence only, not demand.

**Verdict for Phase 12:** **Template-level fix first** (category client terms, default meta, testimonial mapping, technical SEO sibling links, FAQ depth policy) before individual page batches. Individual page work only for verticals with GSC demand + defensible intent after template fix.

---

## Locked Decision Framework (this audit feeds)

```text
41 Industry Pages
        ↓
Template analysis          ← 10B completed
        ↓
A / B / C / D classification
        ↓
GSC visibility + commercial value   ← GSC_REQUIRED
        ↓
P0 / P1 / P2 / P3
        ↓
Top 5 P1
        ↓
Template fix (Phase 12)
        ↓
Individual batches
```

---

## Template Architecture (codebase)

| Layer | Path | Role |
|-------|------|------|
| Catalog (41 slugs, 4 categories) | `utils/industries/catalog.js` | Slug + category assignment |
| Profiles | `utils/industries/profiles/*.js` | Vertical-specific copy, FAQs base |
| Builder | `utils/industries/premium/buildPremiumContent.js` | Shared template: hero, whySeoMatters, pillars, FAQ expansion |
| Overrides | `utils/industries/premium/index.js`, `plasticSurgery.js`, `keywordIndustryOverrides.js` | 5 override slugs |
| UI | `component/industry-premium/PremiumIndustryPage.js` | Renders all sections |
| Internal links | `utils/internalLinks.js` → `getIndustryInternalLinks()` | Per-industry link bands |

### Shared H2 shell (swap-industry-name test)

Every template page follows the same section order with industry label interpolated:

1. Why {Industry} Businesses Invest in SEO Now
2. What is {Industry} SEO and why does it matter? (`whySeoMatters.geoAnswer`)
3. Why {Industry} Brands Choose SEO India Tech (or variant)
4. Full-Stack {Industry} SEO Services
5. Problems {Industry} Businesses Face Online
6. What {Industry} Businesses Should Know About SEO
7. Complete {Industry} SEO Strategy
8. {Industry} SEO for Every Business Type

**Unlike service pages**, industry pages do **not** render a separate top `answerFirst` block — so the service-style duplicate *What is X?* + *who needs it?* pair was **not detected** (`quickAnswerDuplicateCount: 0`). Semantic overlap still exists between `geoAnswer` and `semanticTopics.definition` (H3-level).

### Template H2 signature (exact match across ≥75% of pages)

Only **5 H2s** appear on 31+ pages with identical text:

- Enterprise Tools. Proven Credentials.
- Related SEO India Tech Services
- Why Businesses Choose SEO India Tech
- We Also Serve These Verticals
- What Our Clients Say

Industry-specific H2s prevent the automated swap test from flagging `C` grade — but **structural duplication remains**.

---

## Cross-Page Signals (all 41)

| Signal | Result |
|--------|--------|
| HTTP 200 | 41/41 |
| Indexable | 41/41 |
| Canonical self | 41/41 |
| Word count (est.) | 3,913 – 5,499 |
| FAQ visible | 19–20 |
| FAQ schema synced | 40/41 exact match; plumber 19 visible / 20 schema |
| Quick-answer duplicate H2 (service pattern) | 0/41 |
| Link to `/services/seo` | 41/41 |
| Link to `/services/local-seo-service` | 41/41 |
| Link to `/services/technical-seo` | **4/41** (optometrist, doctor, wineries, accountants overrides only) |
| `MedicalBusiness` schema | 8/41 (healthcare slugs — appropriate) |
| Default meta with “Procedure pages” | **37/41** |

### Override slugs (Grade A / P1 — pre-existing bespoke work)

| Slug | Override | Technical SEO link | Notes |
|------|----------|-------------------|-------|
| plastic-surgery-seo | Yes | No | Custom meta/H1; procedure pages intentional |
| optometrist-seo | Yes | Yes | Custom hero/meta |
| doctor-physician-seo | Yes | Yes | Custom hero/meta |
| wineries-seo | Yes | Yes | Thinnest page (3,913 words); custom hero |
| accountants-seo | Yes | Yes | Custom hero/meta |

**Provisional Top 5 P1 (override-only — GSC pending):** plastic-surgery-seo, optometrist-seo, doctor-physician-seo, wineries-seo, accountants-seo

---

## Category-Level Template Issues (Phase 12 targets)

### `popular-markets` (12 slugs) — highest bleed risk

Category context in catalog describes **medical/professional practices** but includes **Property Management**, **Realtor**, **HVAC**, **Plumber**.

| Issue | Affected examples | Source |
|-------|-------------------|--------|
| H1 “Qualified **Patients**” | property-management, realtor, HVAC, plumber | `CLIENT_TERMS` + hero H1 template |
| Meta “**Procedure pages**” | 10/12 (all except overrides) | Default `seo.description` in builder |
| Healthcare testimonials | All 12 | `industryTestimonials` mapping |

### `automobile-home` (12 slugs)

| Issue | Notes |
|-------|-------|
| Meta “Procedure pages” | 12/12 — clearly wrong for garage door, deck builder, etc. |
| H1 “Qualified Customers” | Correct client term |
| Template structure | Pure swap-industry-name |

### `food-health` (5 slugs)

| Issue | Notes |
|-------|-------|
| Meta “Procedure pages” | 5/5 except wineries override |
| Wineries override | Grade A — already differentiated |

### `service-sector` (12 slugs)

| Issue | Notes |
|-------|-------|
| Meta “Procedure pages” | 11/12 except accountants override |
| H1 “Qualified Clients” | Correct client term |
| CPA vs accountants | Both exist — potential keyword overlap to assess with GSC |

---

## Master Matrix (41 pages)

| Slug | Grade | Priority | Override | Words | FAQ | QA Dup | Tech Link | Swap Test | T-H2 | H1 (truncated) |
|------|-------|----------|----------|-------|-----|--------|-----------|-----------|------|----------------|
| plastic-surgery-seo | A | P1 | Yes | 5412 | 20 | No | No | Neg | 2/21 | Plastic Surgery SEO Services Built for Patient Con |
| property-management-seo | B | P2 | No | 5484 | 20 | No | No | Neg | 5/21 | Property Management SEO Services Built for Qualifi |
| realtor-seo | B | P2 | No | 5289 | 20 | No | No | Neg | 5/21 | Realtor SEO Services Built for Qualified Patients |
| fertility-clinic-seo | B | P2 | No | 5499 | 20 | No | No | Neg | 5/21 | Fertility Clinic SEO Services Built for Qualified  |
| optometrist-seo | A | P1 | Yes | 5017 | 20 | No | Yes | Neg | 3/21 | SEO for Optometrists That Brings Patients to Your  |
| orthodontist-seo | B | P2 | No | 5139 | 20 | No | No | Neg | 5/21 | Orthodontist SEO Services Built for Qualified Pati |
| doctor-physician-seo | A | P1 | Yes | 4971 | 20 | No | Yes | Neg | 3/21 | SEO for Doctors and Physicians Who Need Patient Di |
| physiotherapy-seo | B | P2 | No | 5135 | 20 | No | No | Neg | 5/21 | Physiotherapy SEO Services Built for Qualified Pat |
| personal-injury-seo | B | P2 | No | 5337 | 20 | No | No | Neg | 5/21 | Personal Injury SEO Services Built for Qualified P |
| dentist-seo | B | P2 | No | 5294 | 20 | No | No | Neg | 5/21 | Dentist SEO Services Built for Qualified Patients |
| hvac-seo | B | P2 | No | 5264 | 20 | No | No | Neg | 5/21 | HVAC SEO Services Built for Qualified Patients |
| plumber-seo | B | P2 | No | 5222 | 19 | No | No | Neg | 5/21 | Plumber SEO Services Built for Qualified Patients |
| garage-door-seo | B | P2 | No | 4719 | 20 | No | No | Neg | 5/21 | Garage Door SEO Services Built for Qualified Custo |
| well-drilling-company-seo | B | P2 | No | 4709 | 20 | No | No | Neg | 5/21 | Well Drilling Company SEO Services Built for Quali |
| fence-installer-seo | B | P2 | No | 4634 | 20 | No | No | Neg | 5/21 | Fence Installer SEO Services Built for Qualified C |
| deck-builder-seo | B | P2 | No | 4611 | 20 | No | No | Neg | 5/21 | Deck Builder SEO Services Built for Qualified Cust |
| cabinet-manufacturer-seo | B | P2 | No | 4581 | 20 | No | No | Neg | 5/21 | Cabinet Manufacturer SEO Services Built for Qualif |
| architect-seo | B | P2 | No | 4418 | 20 | No | No | Neg | 5/21 | Architect SEO Services Built for Qualified Custome |
| painter-seo | B | P2 | No | 4429 | 20 | No | No | Neg | 5/21 | Painter SEO Services Built for Qualified Customers |
| automotive-seo | B | P2 | No | 4493 | 20 | No | No | Neg | 5/21 | Automotive SEO Services Built for Qualified Custom |
| locksmith-service-seo | B | P2 | No | 4605 | 20 | No | No | Neg | 5/21 | Locksmith Service SEO Services Built for Qualified |
| interior-designer-seo | B | P2 | No | 4559 | 20 | No | No | Neg | 5/21 | Interior Designer SEO Services Built for Qualified |
| flooring-company-seo | B | P2 | No | 4586 | 20 | No | No | Neg | 5/21 | Flooring Company SEO Services Built for Qualified  |
| home-builder-and-remodeler-seo | B | P2 | No | 4807 | 20 | No | No | Neg | 5/21 | Home Builder & Remodeler SEO Services Built fo |
| catering-seo | B | P2 | No | 4349 | 20 | No | No | Neg | 5/21 | Catering SEO Services Built for Qualified Customer |
| breweries-seo | B | P2 | No | 4375 | 20 | No | No | Neg | 5/21 | Breweries SEO Services Built for Qualified Custome |
| wineries-seo | A | P1 | Yes | 3913 | 20 | No | Yes | Neg | 3/21 | SEO for Wineries |
| herbal-product-seo | B | P2 | No | 4513 | 20 | No | No | Neg | 5/21 | Herbal Product SEO Services Built for Qualified Cu |
| chiropractor-seo | B | P2 | No | 4367 | 20 | No | No | Neg | 5/21 | Chiropractor SEO Services Built for Qualified Cust |
| movers-and-moving-company-seo | B | P2 | No | 4809 | 20 | No | No | Neg | 5/21 | Movers & Moving Company SEO Services Built for |
| pest-control-service-seo | B | P2 | No | 4674 | 20 | No | No | Neg | 5/21 | Pest Control Service SEO Services Built for Qualif |
| cpa-firm-seo | B | P2 | No | 4586 | 20 | No | No | Neg | 5/21 | CPA Firm SEO Services Built for Qualified Clients |
| wildlife-removal-company-seo | B | P2 | No | 4687 | 20 | No | No | Neg | 5/21 | Wildlife Removal Company SEO Services Built for Qu |
| sign-company-seo | B | P2 | No | 4576 | 20 | No | No | Neg | 5/21 | Sign Company SEO Services Built for Qualified Clie |
| waste-management-seo | B | P2 | No | 4578 | 20 | No | No | Neg | 5/21 | Waste Management SEO Services Built for Qualified  |
| dry-cleaner-seo | B | P2 | No | 4567 | 20 | No | No | Neg | 5/21 | Dry Cleaner SEO Services Built for Qualified Clien |
| tree-care-seo | B | P2 | No | 4580 | 20 | No | No | Neg | 5/21 | Tree Care SEO Services Built for Qualified Clients |
| roofers-seo | B | P2 | No | 4405 | 20 | No | No | Neg | 5/21 | Roofers SEO Services Built for Qualified Clients |
| accountants-seo | A | P1 | Yes | 4157 | 20 | No | Yes | Neg | 3/21 | SEO for Accountants That Brings Qualified Client E |
| pet-service-seo | B | P2 | No | 4574 | 20 | No | No | Neg | 5/21 | Pet Service SEO Services Built for Qualified Clien |
| janitorial-service-seo | B | P2 | No | 4552 | 20 | No | No | Neg | 5/21 | Janitorial Service SEO Services Built for Qualifie |

**Column notes**

- **Swap Test:** Automated exact-match threshold (Neg = did not hit ≥75% identical H2s). Manual structural swap test = **positive for 36 B pages**.
- **T-H2:** Count of H2s matching the 5-signature exact-match set (of ~21 total H2s per page).
- **GSC columns:** Omitted — all null until export imported.

---

## Phase 12 Template Fix Preview (NOT STARTED)

When approved, expected **template-level** scope before individual batches:

1. **Category-aware client terms** — map `popular-markets` per slug or split category; stop “patients” on realtor/HVAC/property management
2. **Category-aware default meta** — remove “Procedure pages” from non-medical verticals
3. **Testimonial mapping** — non-medical `popular-markets` slugs should not use `healthcareTestimonials`
4. **Technical SEO sibling link** — add `/services/technical-seo` to default industry internal link band (37 pages missing)
5. **FAQ policy** — consider 8 synced FAQs (service pattern) vs 20 expanded generics; fix plumber visible/schema gap
6. **Do not mass-rewrite** 41 pages — template fix + GSC-led batches only

**Out of scope unless user unlocks:** noindex, deletions, new industry URLs, title/H1 mass changes without GSC evidence.

---

## Audit Verdict

| Dimension | Grade | Notes |
|-----------|-------|-------|
| Indexability | ✅ Pass | 41/41 live |
| Template uniqueness | **D** | Structural duplication across 36 pages |
| Category accuracy | **F** | Medical bleed on non-medical verticals |
| Schema hygiene | **B** | Appropriate MedicalBusiness on 8; FAQ synced on most |
| Internal linking | **C** | Missing technical SEO on 37 pages |
| Commercial prioritization | **Pending** | GSC_REQUIRED |

**Overall:** Phase 12 should be **template-level fix**, not 41 individual rewrites. No implementation performed in Phase 10B.
