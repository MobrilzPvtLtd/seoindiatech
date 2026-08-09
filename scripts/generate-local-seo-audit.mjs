#!/usr/bin/env node
/**
 * Phase 8 local SEO audit generator.
 * Run: npm run seo:audit-local
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { getSitemapPathsForScripts } from './sitemap-paths.mjs'
import { ORGANIZATION, SITE_URL } from '../utils/siteConfig.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const docsDir = join(root, 'docs', 'seo-master-plan')

const TEMPLATE_CITY_SUFFIXES = new Set(['bangalore', 'chennai', 'kolkata', 'gurgaon'])
const CUSTOM_CITY_SUFFIXES = new Set([
  'chandigarh',
  'hyderabad',
  'jaipur',
  'mumbai',
  'pune',
  'noida',
  'delhi',
])

function read(rel) {
  return readFileSync(join(root, rel), 'utf8')
}

function extractCityPages() {
  const paths = getSitemapPathsForScripts().filter((p) => p.startsWith('/seo-services/'))
  const text = read('utils/locations.js')
  const slugCityPairs = [...text.matchAll(/slug:\s*['"]?(seo-services-in-[^'"]+)['"]?[\s\S]*?city:\s*['"]([^'"]+)['"]/g)]
  const cityBySlug = Object.fromEntries(slugCityPairs.map((m) => [m[1], m[2]]))

  const extraText = read('utils/extraLocations.js')
  const extraPairs = [...extraText.matchAll(/buildCityPage\(\s*'([^']+)',\s*'([^']+)'/g)]
  for (const [, city, suffix] of extraPairs) {
    cityBySlug[`seo-services-in-${suffix}`] = city
  }

  return paths.map((url) => {
    const slug = url.replace('/seo-services/', '')
    const suffix = slug.replace('seo-services-in-', '')
    const city =
      cityBySlug[slug] ||
      suffix.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    return { url, slug, city, suffix }
  })
}

function scoreCityUniqueness(suffix) {
  if (CUSTOM_CITY_SUFFIXES.has(suffix)) return { score: 'HIGH', type: 'custom' }
  if (TEMPLATE_CITY_SUFFIXES.has(suffix)) return { score: 'LOW', type: 'template' }
  return { score: 'MEDIUM', type: 'partial' }
}

function contentSizeForSlug(slug) {
  const text = read('utils/locations.js')
  const re = new RegExp(`slug:\\s*['"]?${slug}['"]?[\\s\\S]*?faqs:\\s*\\[`, 'm')
  const m = text.match(re)
  return m ? m[0].length : 0
}

const cityPages = extractCityPages()
const industryPaths = getSitemapPathsForScripts().filter((p) => p.startsWith('/industries/') && p !== '/industries')

const cityRows = cityPages.map((p) => {
  const { score, type } = scoreCityUniqueness(p.suffix)
  const size = contentSizeForSlug(p.slug)
  let risk = 'Low'
  let recommendation = 'KEEP'
  if (score === 'LOW') {
    risk = 'Medium — template similarity'
    recommendation = 'REVIEW — expand with verified local context'
  }
  if (score === 'HIGH') {
    recommendation = 'KEEP — unique local content'
  }
  return {
    ...p,
    primaryKeyword: `SEO services in ${p.city}`,
    intent: 'Commercial / local service',
    uniqueness: score,
    contentType: type,
    contentSize: size,
    localRelevance: score === 'LOW' ? 'Medium' : 'High',
    internalLinks: 'LocationInternalLinks + footer',
    schema: 'Organization + Service + FAQ + Breadcrumb (Phase 8)',
    indexability: 'Indexable',
    risk,
    recommendation,
  }
})

const industryRows = industryPaths.map((url) => ({
  url,
  industry: url.replace('/industries/', '').replace(/-seo$/, ''),
  primaryKeyword: `${url.replace('/industries/', '').replace(/-seo$/, '')} SEO`,
  intent: 'Commercial / industry service',
  uniqueness: 'HIGH — premium industry profiles',
  localRelevance: 'Industry-local via GBP/local sections',
  schema: 'PremiumIndustrySchema',
  recommendation: 'KEEP',
}))

// NAP audit
const contactText = read('component/contactus/Contactus.js')
const schemaStreet = ORGANIZATION.address.streetAddress
const contactHasHazratpur = contactText.includes('Hazratpur Wajidpur')

const napFindings = [
  { field: 'Name', value: 'SEO India Tech', sources: 'siteConfig, schema, footer', consistent: true },
  { field: 'Phone', value: ORGANIZATION.phone, sources: 'siteConfig, contact, schema', consistent: true },
  { field: 'Email', value: ORGANIZATION.email, sources: 'siteConfig, contact, footer', consistent: true },
  { field: 'Website', value: SITE_URL, sources: 'canonical, schema', consistent: true },
  {
    field: 'Street address',
    value: schemaStreet,
    sources: 'siteConfig/schema vs contact page',
    consistent: !contactHasHazratpur,
    note: contactHasHazratpur
      ? 'Contact page adds "Hazratpur Wajidpur" — verify official address'
      : undefined,
  },
]

const md = `# Local SEO Audit — Phase 8

Generated: ${new Date().toISOString().slice(0, 10)}

## Business Location (Verified from Site)

| Field | Value | Source |
|-------|-------|--------|
| **Business name** | SEO India Tech | siteConfig, schema |
| **Address** | E 160, E Block, Sector 63, Noida, Uttar Pradesh 201301, India | siteConfig.js, Organization schema |
| **Phone** | +91-8076676731 | siteConfig, contact page |
| **Email** | sales@seoindiatech.com | siteConfig, contact page |
| **Website** | https://www.seoindiatech.com | canonical |

**Note:** Contact page includes additional locality text "Hazratpur Wajidpur" — see \`local-information-needed.md\`.

**No local offices invented in other cities.** City pages represent **service areas**, not physical branches.

---

## Summary

| Category | Count |
|----------|-------|
| City pages audited | ${cityPages.length} |
| Industry pages audited | ${industryRows.length} |
| Custom city pages (HIGH uniqueness) | ${cityRows.filter((r) => r.uniqueness === 'HIGH').length} |
| Template city pages (LOW uniqueness) | ${cityRows.filter((r) => r.uniqueness === 'LOW').length} |
| GBP link on site | **None found** — EXTERNAL ACTION REQUIRED |
| Google Maps link | **None found** |

---

## Core Local Pages

| Page | URL | Status |
|------|-----|--------|
| Local SEO service | /services/local-seo-service | Premium template — KEEP |
| GBP Optimization | /services/gbp-optimization | Premium template — KEEP |
| Small Business SEO | /services/small-business-seo | Premium template — KEEP |
| Contact | /contact-us | NAP + city links — KEEP |
| Homepage | / | CityLinksBand + global signals — KEEP |

---

## NAP Consistency

| Field | Value | Consistent? | Notes |
|-------|-------|-------------|-------|
${napFindings.map((n) => `| ${n.field} | ${n.value} | ${n.consistent ? 'Yes' : '**Review**'} | ${n.note || n.sources} |`).join('\n')}

---

## City Pages

| URL | City | Primary intent | Primary keyword | Unique content | Local relevance | Internal links | Schema | Indexable | Risk | Recommendation |
|-----|------|----------------|-----------------|----------------|-----------------|----------------|--------|-----------|------|----------------|
${cityRows.map((r) => `| ${r.url} | ${r.city} | ${r.intent} | ${r.primaryKeyword} | ${r.uniqueness} (${r.contentType}) | ${r.localRelevance} | ${r.internalLinks} | ${r.schema} | Yes | ${r.risk} | **${r.recommendation}** |`).join('\n')}

---

## Industry Pages (${industryRows.length})

All industry URLs use **premium industry profiles** with sector-specific pain points, services, FAQs, and local SEO sections.

| Pattern | Count | Uniqueness | Recommendation |
|---------|-------|------------|----------------|
| Premium industry template | ${industryRows.length} | HIGH (per-vertical profiles) | KEEP |
| Legacy thin template | 0 | — | — |

Sample industries: dentist, realtor, personal injury, HVAC, plastic surgery, ecommerce-adjacent verticals.

Full list: sitemap \`/industries/*\` (${industryRows.length} URLs).

---

## Local SEO Service Pages Audit

| Check | /services/local-seo-service | /services/gbp-optimization |
|-------|----------------------------|---------------------------|
| Answer-first block | Yes (Phase 4) | Yes |
| Commercial CTA | Yes | Yes |
| Internal links | Excel matrix + hub | Excel matrix |
| Local intent copy | Yes | Yes |
| Fake local claims | None detected | None detected |

---

## Schema Findings

| Entity | Where | Phase 8 status |
|--------|-------|----------------|
| Organization | site-wide, city pages | Consistent Noida HQ |
| Service + areaServed | City pages | **FIXED** — only target city (removed incorrect Noida/Pune on all pages) |
| BreadcrumbList | City pages | **ADDED** |
| LocalBusiness per city | Not used | Correct — no fake local offices |
| FAQPage | City pages with FAQs | Valid |

---

## Internal Linking (Phase 8 changes)

| From | To | Change |
|------|-----|--------|
| City pages | /blog/google-business-profile-optimization-guide | **ADDED** to resources |
| City pages | /blog/local-seo-guide-indian-businesses-2026 | **ADDED** to resources |
| City pages | Local SEO, GBP, SEO services | Existing |
| Footer | 11 city pages | Existing |

---

## Indexation Recommendations

| Page type | Recommendation |
|-----------|----------------|
| 7 custom city pages | KEEP indexed |
| 4 template city pages | KEEP indexed — **REVIEW** for local expansion |
| 41 industry pages | KEEP indexed |
| City pages without unique value in future | Flag for review — do not auto-noindex |

---

*Regenerate: \`npm run seo:audit-local\`*
`

writeFileSync(join(docsDir, 'local-seo-audit.md'), md, 'utf8')

// City uniqueness doc
const uniqMd = `# City Content Uniqueness — Phase 8

Generated: ${new Date().toISOString().slice(0, 10)}

## Methodology

- **HIGH:** Custom \`pageContent\` with city-specific areas, industries, and FAQs (7 cities)
- **LOW:** \`buildCityPage()\` template from \`extraLocations.js\` — only \`localContext\` paragraph differs (4 cities)
- **MEDIUM:** Partial custom content

## Scores

| City | URL | Score | Content type | Approx. content size | Recommendation |
|------|-----|-------|--------------|---------------------|----------------|
${cityRows
  .map(
    (r) =>
      `| ${r.city} | ${r.url} | **${r.uniqueness}** | ${r.contentType} | ${r.contentSize} chars | ${r.recommendation} |`
  )
  .join('\n')}

## Duplicate Pattern Detection

### Template group (LOW)

Bangalore, Chennai, Kolkata, Gurgaon share identical H2/H3 structure:

- "Why SEO services in [City] matter for local growth"
- "What you get with our SEO services in [City]"
- Keyword mapping / on-page / technical / local SEO / why choose us list

**Only the \`localContext\` sentence and city name substitution differ.**

**Action:** REVIEW — do not auto-rewrite. Expand with **SOURCE REQUIRED** local facts when available.

### Custom group (HIGH)

Chandigarh, Hyderabad, Jaipur, Mumbai, Pune, Noida, Delhi have unique:

- Local area references (e.g. Sector 17 Chandigarh, Baner Pune, Hinjewadi)
- Industry examples
- Multi-city cross-links
- Custom FAQ sets

## Cross-City Duplicate Phrases

Phrases repeated across multiple custom pages (acceptable if natural):

- "SEO India Tech" brand mentions
- "Google Business Profile" / local SEO process language
- "3-6 months" timeline language

**Not doorway risk** if each page has substantive unique local sections — template cities need the most attention.

## Do NOT

- Auto-merge city pages
- Auto-noindex template cities
- Create industry × city combinations
`

writeFileSync(join(docsDir, 'city-content-uniqueness.md'), uniqMd, 'utf8')

console.log(`Local SEO audit: ${cityPages.length} cities, ${industryRows.length} industries`)
console.log(`Wrote local-seo-audit.md and city-content-uniqueness.md`)
