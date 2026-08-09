# Authority Audit — SEO India Tech

**Phase:** 6 — Off-Page SEO & Authority Building  
**Date:** 2026-07-30  
**Domain:** `https://www.seoindiatech.com`

---

## Executive Summary

SEO India Tech has invested heavily in **on-site authority** (premium service/industry content, topic clusters, `llms.txt`, `agents.json`, internal linking). **Off-page authority appears early-stage** based on public visibility: branded web search returns primarily owned properties (website + social profiles), with no clearly indexed third-party editorial citations found in open research.

**This audit does not replace a full backlink export.** Connect Google Search Console and at least one third-party index (Ahrefs, Semrush, or Moz) before making disavow or outreach decisions.

| Signal | Status | Notes |
|--------|--------|-------|
| Third-party editorial links | **Low / unverified** | No major publications found citing brand in open search |
| Brand-owned profiles | **Present** | Facebook, Instagram, X, LinkedIn (in `siteConfig.js`) |
| Linkable on-site assets | **Strong** | 28 blogs, checklists, European/AI guides, `llms.txt` |
| Entity documentation | **Good** | `llms.txt`, `agents.json`, Organization schema |
| Toxic link review | **Pending data** | No auto-disavow — export required |

---

## Data Sources Required

Complete the audit with these exports (monthly baseline):

| Source | What to export | Priority |
|--------|----------------|----------|
| **Google Search Console** | Links → Top linking sites, Top linking text, Internal links | Critical |
| **Ahrefs / Semrush / Moz** | Referring domains, anchors, lost links, broken backlinks | Critical |
| **Bing Webmaster Tools** | Inbound links report | High |
| **Brand monitoring** | Google Alerts, Mention, or Brand24 for "SEO India Tech" | High |
| **Analytics** | Referral traffic by domain | Medium |

**Export template columns:** `source_url`, `target_url`, `anchor_text`, `link_type` (dofollow/nofollow/sponsored/ugc), `first_seen`, `last_seen`, `domain`, `topical_relevance_score`, `spam_flag`

---

## 1. Existing Backlinks

### Observable (without paid tools)

| Type | Finding |
|------|---------|
| Owned social profiles | LinkedIn company page, Facebook, Instagram, X — likely nofollow profile links |
| Self-references | Internal cross-links across 113 sitemap URLs |
| AI discovery files | `llms.txt`, `agents.json`, `agent-instructions.md` — citation aids, not traditional backlinks |
| Third-party citations | **None confirmed** in open branded search (Aug 2026) |

### Expected profile (to validate with GSC)

For a growing Noida-based agency with global positioning, typical early-stage patterns may include:

- Client websites (footer/agency credit links) — **verify which clients permit this**
- Local business directories (India/Noida) — quality varies widely
- Social/profile links — low SEO weight, normal
- Possible low-quality directory submissions — **review before any disavow**

**Action:** Export GSC "Links" report and classify each referring domain (see Section 17 in `link-prospect-scoring.md` inverted for inbound links).

---

## 2. Referring Domains

| Metric | Current value | Target (90 days) |
|--------|---------------|------------------|
| Total referring domains | **DATA REQUIRED** (GSC/Ahrefs) | Baseline + 5–15 *relevant* editorial domains |
| Relevant referring domains (SEO/marketing/business) | **DATA REQUIRED** | Majority of new acquisitions |
| High-DR editorial domains (DR/DA 50+) | **DATA REQUIRED** | 1–3 quality placements/quarter |
| Local/regional domains (.in, Noida/Delhi NCR) | **DATA REQUIRED** | 2–5 legitimate local associations |

**Do not optimize for raw referring domain count.**

---

## 3. Linking-Domain Relevance

### Relevant domain categories for SEO India Tech

| Category | Examples | Relevance |
|----------|----------|-----------|
| SEO / digital marketing publications | Search Engine Journal, Moz Blog, Ahrefs Blog, Search Engine Land | HIGH |
| Marketing / martech | HubSpot, Semrush blog, Marketing Week | HIGH |
| Business / SMB | Entrepreneur, Inc., local business journals | MEDIUM–HIGH |
| European business/marketing | EU-focused marketing sites, country business press | HIGH (for Europe cluster) |
| Industry verticals served | Healthcare, legal, real estate trade publications | MEDIUM (editorial only) |
| Local Noida / UP / India business | Chamber of commerce, startup ecosystems | MEDIUM |
| Educational (.edu) | University marketing/entrepreneurship resources | MEDIUM (if genuinely useful resource) |

### Irrelevant (reject for outreach)

Casino, pharma spam, adult, unrelated foreign blogs, PBN footprints, mass guest-post farms, link-selling pages.

---

## 4. Anchor Text Distribution

**Current distribution: DATA REQUIRED** (GSC "Top linking text" export)

### Review checklist

- [ ] Brand anchors ("SEO India Tech", "seoindiatech.com") — should be healthy share
- [ ] Naked URL anchors — normal
- [ ] Partial-match descriptive ("AI SEO guide", "local SEO checklist") — good when editorial
- [ ] Exact-match commercial ("best SEO company India", "SEO services Noida") — flag if over 15–20% of *new* links (no fixed rule — context matters)
- [ ] Generic ("click here", "read more") — fine in editorial context

### Preferred anchor mix (for *new* acquisitions)

| Type | Guidance |
|------|----------|
| Brand | "SEO India Tech", "SEO India Tech's guide" |
| Branded + topic | "SEO India Tech's AI SEO checklist" |
| Natural phrase | "this technical SEO checklist from SEO India Tech" |
| Partial match | "generative engine optimization guide" |
| URL | `seoindiatech.com/blog/...` |
| Generic | Only where natural in editorial copy |

**Avoid:** Repeated exact-match money keywords across multiple domains.

---

## 5. Link Attributes (Follow / Nofollow / Sponsored / UGC)

Audit each inbound link for:

| Attribute | Typical source | SEO value |
|-----------|----------------|-----------|
| `dofollow` | Editorial articles, resource pages | Highest |
| `nofollow` | Social profiles, many news sites, Wikipedia | Brand/referral value |
| `sponsored` | Paid placements (must be disclosed) | Use sparingly, disclosed |
| `ugc` | Forums, comments | Usually low; watch spam |

**Action:** Tag sponsored/UGC links in CRM; do not pursue undisclosed paid links.

---

## 6. Lost Backlinks

**DATA REQUIRED** — Ahrefs/Semrush "Lost backlinks" report.

### Reclamation candidates (check monthly)

| Scenario | Recovery action |
|----------|-----------------|
| URL changed during site rebuild | 301 redirect to correct URL |
| Page removed | Restore content or redirect to closest match |
| Link removed from source | Polite reclamation email if relationship exists |
| Source page deleted | Broken-link replacement outreach (see Phase 6 broken-link doc) |

Known site URLs to protect (high link value potential):

- `/blog/link-building-guide-2026`
- `/blog/complete-eeat-guide-business-websites`
- `/blog/geo-generative-engine-optimization-guide`
- `/blog/international-seo-guide-european-companies`
- `/services/ai-seo`

---

## 7. Broken Backlinks (Inbound)

**DATA REQUIRED** — Ahrefs "Broken backlinks" report.

Process:

1. Export broken target URLs on seoindiatech.com
2. Map to current live URL (113 sitemap paths)
3. Implement 301 only when content genuinely moved — not for manipulation
4. Notify linking webmasters after fix

---

## 8. High-Authority Referring Domains

**None confirmed in public research.**

### Aspirational reference domains (for gap analysis, not claims of existing links)

| Domain type | Why it matters |
|-------------|----------------|
| `searchengineland.com`, `searchenginejournal.com` | SEO industry authority |
| `moz.com`, `ahrefs.com/blog` | Practitioner audience |
| `hubspot.com` | Marketing/business crossover |
| European marketing press | Supports international cluster |
| NASSCOM / local startup media | India tech/business credibility |

---

## 9. Relevant Industry Domains

SEO India Tech serves 41 industries — **links should only come from genuinely relevant industry publications**, not manufactured industry directories.

| Vertical | Legitimate link sources (examples) |
|----------|-----------------------------------|
| Healthcare / dental | Healthcare marketing blogs, practice management publications |
| Legal | Legal marketing associations, bar-adjacent marketing resources |
| Real estate | Realtor associations, property tech blogs |
| Home services | Trade association resource pages |
| E-commerce | E-commerce platform partner blogs, merchant education hubs |

**Do not:** Submit to 41 unrelated industry directories.

---

## 10. Relevant Local Domains

**Business address (verified in schema):** E-160, Sector 63, Noida, UP 201301, India

### Legitimate local authority opportunities

| Opportunity type | Examples | Status |
|------------------|----------|--------|
| Noida / NCR business directories | Quality local chambers, startup directories | PROSPECT |
| India startup ecosystems | YourStory, Inc42 (editorial/PR only) | PROSPECT |
| Google Business Profile | Maps presence | Verify listing ownership |
| Local event sponsorships | Noida tech/marketing meetups | PROSPECT — no fake events |

**Do not:** Create duplicate GBP listings, fake addresses, or mass local citations.

---

## 11. Brand Mentions Without Links

### Open-web scan (Aug 2026)

| Query | Result |
|-------|--------|
| `"SEO India Tech" -site:seoindiatech.com` | **No clear third-party mentions indexed** |
| `seoindiatech.com` backlinks | Requires Ahrefs/GSC — not available in this audit |

### Owned mentions (linked)

- LinkedIn: `linkedin.com/company/seo-india-tech/`
- X: `x.com/seoindiatech411`
- Facebook, Instagram (per `siteConfig.js`)

### Monitoring process

See `unlinked-mentions.md` for ongoing discovery workflow.

---

## 12. Competitor Backlink Opportunities

See `competitor-link-gap.md` for full analysis.

**Summary:** Competitors with stronger off-page signals (seoindia.co, opositive.io, cyberelite.in, growzai.com, repindia.com) likely benefit from longer market presence, client portfolios, and published thought leadership. SEO India Tech should close gaps via **original assets + digital PR**, not bulk link building.

---

## 13. Toxic / Spam Patterns (Review Only — No Auto-Disavow)

Flag for human review if found in GSC/Ahrefs export:

| Pattern | Risk | Action |
|---------|------|--------|
| 100+ links from same low-quality domain | High | Review; disavow only if clearly manipulative |
| Casino/adult/pharma referring domains | High | Disavow candidate after verification |
| Exact-match anchor from irrelevant foreign sites | High | Review |
| Sudden spike of 50+ domains in 1 week | High | Investigate source; reject future similar |
| Mass directory network (same IP/footer) | High | Reject / disavow candidate |
| PBN footprint (thin content, excessive outbound links) | High | Reject |

**Do not disavow** without:

1. Confirming link exists in GSC
2. Confirming it is genuinely toxic (not a false positive)
3. Documenting in a disavow log with date and reason

---

## 14. Link Velocity Patterns

**DATA REQUIRED** — plot new referring domains per month.

### Healthy pattern for SEO India Tech (early authority phase)

| Period | Expectation |
|--------|-------------|
| Month 1 | Baseline measurement only; minimal new links |
| Month 2 | 2–5 quality editorial links from asset launch + PR |
| Month 3 | 3–8 quality links from follow-up PR + resource pages |
| Ongoing | Steady, relevance-first growth — no spikes |

**Red flag:** 50+ new domains/month without PR campaign explanation.

---

## 15. On-Site Authority Strengths (Foundation for Off-Page)

These support link acquisition but are not backlinks:

| Asset | URL | Link attraction potential |
|-------|-----|---------------------------|
| Link building guide 2026 | `/blog/link-building-guide-2026` | HIGH |
| 100 SEO mistakes | `/blog/100-seo-mistakes-costing-business-leads` | HIGH |
| GEO guide | `/blog/geo-generative-engine-optimization-guide` | HIGH |
| E-E-A-T guide | `/blog/complete-eeat-guide-business-websites` | HIGH |
| European SEO cluster | `/blog/international-seo-guide-european-companies` + related | HIGH |
| Technical checklist | `/blog/technical-seo-checklist-enterprise-websites` | HIGH |
| AI llms.txt | `/llms.txt` | MEDIUM (unique agency asset) |
| Core Web Vitals guide | `/blog/core-web-vitals-optimization-guide` | MEDIUM |

---

## 16. Immediate Actions (No Outreach Yet)

1. **Export GSC Links report** — establish baseline referring domains and anchors
2. **Run Ahrefs/Semrush trial** — competitor gap vs. seoindia.co, opositive.io, cyberelite.in
3. **Set Google Alerts** — "SEO India Tech", "seoindiatech"
4. **Audit client contracts** — which clients allow portfolio/credit links?
5. **Verify GBP listing** — consistency with NAP in schema
6. **Launch one linkable asset** (see `pr-content-calendar.md` Month 2)

---

## Audit Status

| Section | Complete? |
|---------|-----------|
| Framework & methodology | Yes |
| Quantitative backlink data | **Pending GSC/Ahrefs export** |
| Toxic pattern identification | Framework only |
| Disavow recommendations | **None** (insufficient data) |
| Competitor gap | See `competitor-link-gap.md` |

**Next update:** After first GSC + Ahrefs baseline export is added to this folder as `authority-baseline-export.csv` (optional).
