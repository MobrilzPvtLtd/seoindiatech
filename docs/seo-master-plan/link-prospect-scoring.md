# Link Prospect Scoring Model — SEO India Tech

**Date:** 2026-07-30  
**Purpose:** Qualify outreach targets before any contact — reject spam, prioritize editorial value.

---

## Final Score

Each prospect receives one rating:

| Score | Meaning | Action |
|-------|---------|--------|
| **HIGH** | Strong editorial fit, real audience, low spam risk | Prioritize customized outreach |
| **MEDIUM** | Acceptable fit; may need relationship building | Secondary queue |
| **LOW** | Marginal fit or weak signals | Deprioritize |
| **REJECT** | Spam risk or irrelevant | Do not contact |

---

## Scoring Criteria (1–5 each)

| Criterion | Weight | 5 (best) | 1 (worst) |
|-----------|--------|----------|-----------|
| **Topical relevance** | 25% | SEO/marketing/business core topic | Unrelated niche |
| **Audience relevance** | 20% | SEO managers, marketers, SMB owners | Irrelevant audience |
| **Editorial quality** | 20% | Original articles, named authors, dates | Thin/AI spam content |
| **Authority** | 15% | Recognized brand, DR 50+ or equivalent traffic | Unknown/low quality |
| **Organic traffic signals** | 10% | Consistent traffic (Ahrefs/Semrush) | Near zero |
| **Link placement quality** | 5% | In-content editorial | Footer/sidebar link farm |
| **Brand value** | 5% | Builds trust, right audience | Damages brand association |
| **Spam risk (inverse)** | — | Clean profile | PBN/spam indicators |

**Weighted average → map to HIGH/MEDIUM/LOW/REJECT**

### Quick decision rules

- Any **spam risk = 1** → automatic **REJECT**
- Topical relevance **≤ 2** → maximum score **LOW**
- Authority **≥ 4** AND topical **≥ 4** → candidate **HIGH**

---

## Spam Risk Indicators (REJECT if any)

| Indicator | REJECT reason code |
|-----------|-------------------|
| "Write for us" + 50+ outbound links in sidebar | `LINK_FARM` |
| Guest post price in INR/USD | `LINK_SELLING` |
| Casino, adult, pharma main content | `TOXIC_CATEGORY` |
| Same article template across domains | `PBN` |
| No author, no date, generic AI content | `LOW_EDITORIAL` |
| Domain listed on spam blacklists | `BLACKLIST` |
| Excessive exact-match anchors in outbound profile | `ANCHOR_SPAM` |
| Malware/phishing warnings | `SECURITY` |

---

## Sample Scored Prospects

*Illustrative — verify live before outreach.*

### HIGH prospects

| Prospect | Type | Topical | Audience | Editorial | Authority | Score | Notes |
|----------|------|---------|----------|-----------|-----------|-------|-------|
| Moz Blog resource section | Resource page | 5 | 5 | 5 | 5 | **HIGH** | Pitch E-E-A-T guide |
| Search Engine Journal | Publication | 5 | 5 | 5 | 5 | **HIGH** | Expert quote / contributor |
| Ahrefs Blog | Publication | 5 | 5 | 5 | 5 | **HIGH** | Data study only with real data |
| HubSpot Marketing Blog | Publication | 4 | 5 | 5 | 5 | **HIGH** | Content marketing angle |
| Smashing Magazine | Publication | 4 | 4 | 5 | 5 | **HIGH** | CWV technical angle |
| EU digital marketing blog (curated list) | Resource | 5 | 4 | 4 | 3 | **HIGH** | European SEO guide |

### MEDIUM prospects

| Prospect | Type | Score | Notes |
|----------|------|-------|-------|
| YourStory (India startup media) | PR | **MEDIUM** | Factual milestone stories only |
| Inc42 | PR | **MEDIUM** | Same |
| Noida chamber of commerce directory | Local | **MEDIUM** | Legitimate membership only |
| Marketing podcast (niche, 1k+ listeners) | Podcast | **MEDIUM** | Show notes link |
| University marketing resource page | .edu resource | **MEDIUM** | Must be genuinely educational |
| "Best SEO tools/resources" mid-tier blog | Listicle | **MEDIUM** | Verify not paid farm |

### LOW prospects

| Prospect | Score | Notes |
|----------|-------|-------|
| Generic "top 10 SEO companies" new blog | **LOW** | Thin content |
| Low-traffic personal SEO blog | **LOW** | Limited value |
| Foreign general business directory | **LOW** | Irrelevant geo |

### REJECT examples

| Prospect | REJECT code |
|----------|-------------|
| "Guest post DA 50 ₹5000" site | `LINK_SELLING` |
| Casino guest post site | `TOXIC_CATEGORY` |
| Mass India directory network | `LINK_FARM` |
| AI-generated content farm | `LOW_EDITORIAL` |
| Irrelevant pharma blog | `TOXIC_CATEGORY` |

---

## Inbound Link Quality Scoring (Audit Use)

Apply same criteria to **existing** backlinks when reviewing GSC export:

| Inbound domain score | Action |
|---------------------|--------|
| HIGH | Maintain relationship; replicate strategy |
| MEDIUM | Monitor |
| LOW | No action unless pattern emerges |
| REJECT | Flag for disavow **review** (not auto-disavow) |

---

## Prospect Record Template

```
prospect_id: PR-2026-001
domain: example.com
url: https://example.com/seo-resources
type: resource_page | guest_post | podcast | pr | local
contact: editor@example.com (verified)
scores:
  topical: 5
  audience: 4
  editorial: 5
  authority: 4
  traffic: 4
  placement: 5
  brand: 5
  spam_risk: 5
weighted_score: 4.6
rating: HIGH
target_page: /blog/link-building-guide-2026
anchor_preference: descriptive partial match
pitch_angle: "2026 white-hat link building guide for practitioners"
status: PROSPECT
reject_reason: null
owner: [name]
date_added: 2026-07-30
```

---

## Integration

| Workflow step | Tool/doc |
|---------------|----------|
| Find prospects | `competitor-link-gap.md`, Ahrefs gap |
| Score | This document |
| Pitch | `digital-pr-strategy.md` outreach table |
| Track | CRM / spreadsheet |
| Measure | `authority-audit.md` KPI framework |

---

## Review Cadence

- Score all new prospects before outreach
- Re-score quarterly (sites degrade)
- Monthly: count HIGH placements vs. REJECTED pitches (quality ratio)
