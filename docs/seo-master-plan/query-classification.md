# Search Query Classification Rules

**Date:** 2026-07-30

---

## Categories

| Category | Description |
|----------|-------------|
| BRAND | Queries containing brand name or domain |
| COMMERCIAL | Buy/hire/agency/service intent |
| INFORMATIONAL | How-to, what-is, guide intent |
| LOCAL | City, near me, local modifiers |
| INDUSTRY | Vertical-specific (dental, legal, etc.) |
| AI/LLM | AI SEO, ChatGPT, generative, GEO, AEO |
| TECHNICAL | Technical SEO, crawl, schema, Core Web Vitals |
| INTERNATIONAL | Country/region modifiers (UK, Europe, USA, Australia) |
| ECOMMERCE | E-commerce, product, Shopify, marketplace |

---

## Classification Rules (Priority Order)

Apply first matching rule. A query may be tagged with **primary** + **secondary** category.

### 1. BRAND (highest priority)

```
seo india tech
seoindiatech
seo india tech noida
site:seoindiatech.com
```

**Rule:** Contains `seo india tech`, `seoindiatech`, or exact brand variants.

### 2. LOCAL

```
seo services in [city]
seo agency mumbai
seo company near me
local seo noida
```

**Rule:** Contains Indian city names (11 service cities) OR `near me` OR `local seo` + geo modifier.

**Cities:** chandigarh, hyderabad, jaipur, mumbai, pune, noida, delhi, bangalore, chennai, kolkata, gurgaon

### 3. INDUSTRY

```
dentist seo
healthcare seo
plumber seo
real estate seo
```

**Rule:** Matches industry page slug keywords OR known vertical terms from `/industries/` URLs.

### 4. AI/LLM

```
ai seo
chatgpt seo
generative engine optimization
answer engine optimization
geo seo
ai overviews
```

**Rule:** Contains AI/search-engine-evolution terms.

### 5. ECOMMERCE

```
ecommerce seo
shopify seo
product page seo
amazon seo
```

### 6. TECHNICAL

```
technical seo audit
core web vitals
schema markup
canonical
crawl budget
```

### 7. INTERNATIONAL

```
seo europe
seo uk
seo usa
seo australia
international seo
```

**Rule:** Country/region names where site targets those markets (not fabricated local facts).

### 8. COMMERCIAL

```
seo agency
seo company
seo services
hire seo
seo packages
seo consultant
digital marketing agency
best seo company
```

**Rule:** Transactional/agency-discovery modifiers without fitting above categories.

### 9. INFORMATIONAL (default)

```
how to improve seo
what is seo
seo guide
seo tips
seo trends
```

**Rule:** Question words, guides, educational intent — default when no commercial signal.

---

## Anti-Patterns (Avoid Misclassification)

| Bad Rule | Why |
|----------|-----|
| Single keyword `seo` → COMMERCIAL | Too broad; use INFORMATIONAL or context |
| Any query with city → LOCAL only | May also be BRAND or INDUSTRY |
| `marketing` alone → COMMERCIAL | Too generic |

---

## Implementation

**Manual:** Export GSC queries → add column `category` in spreadsheet using rules above.

**Semi-automated (future):** Script with regex rules — human review required for edge cases.

---

## Reporting Splits

| Dashboard Tab | Primary Categories |
|---------------|-------------------|
| Brand health | BRAND |
| Lead generation | COMMERCIAL, LOCAL |
| Content strategy | INFORMATIONAL, AI/LLM |
| Industry verticals | INDUSTRY |
| International | INTERNATIONAL |

---

## Data Status

**NO DATA AVAILABLE** until GSC query export connected.

Do not invent query volumes or classifications without real data.
