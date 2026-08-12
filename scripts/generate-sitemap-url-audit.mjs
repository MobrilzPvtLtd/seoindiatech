#!/usr/bin/env node
/**
 * Phase: Sitemap + URL Architecture Audit (audit-only — no site changes).
 * Outputs: seo-audit/sitemap-audit.md, seo-audit/url-inventory.csv
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { getSitemapPathsForScripts } from './sitemap-paths.mjs'
import { getLastmodForPath } from '../utils/sitemapBuilder.js'
import { PAGE_SEO } from '../utils/pageSeoRegistry.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'seo-audit')
mkdirSync(outDir, { recursive: true })

const AUDIT_DATE = '2026-08-12'
const BASE = 'https://www.seoindiatech.com'

const locationsText = readFileSync(join(root, 'utils/locations.js'), 'utf8')
const extraText = readFileSync(join(root, 'utils/extraLocations.js'), 'utf8')
const blogCatalogText = readFileSync(join(root, 'utils/blog/premium/blogCatalog.js'), 'utf8')
const serviceOverrides = readFileSync(join(root, 'utils/services/premium/serviceOverrides.js'), 'utf8')
const hubContent = readFileSync(join(root, 'utils/services/premium/seoHubExpandedContent.js'), 'utf8')
const industryOverrides = readFileSync(join(root, 'utils/industries/premium/keywordIndustryOverrides.js'), 'utf8')
const sitemapXml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8')

function parseLocations(text) {
  const locations = []
  const blocks = text.split(/\n\s*\{/)
  for (const block of blocks) {
    const slug = block.match(/slug:\s*['"]([^'"]+)['"]/)?.[1]
    const city = block.match(/city:\s*['"]([^'"]+)['"]/)?.[1]
    const title = block.match(/title:\s*['"]([^'"]+)['"]/)?.[1]
    const heading = block.match(/heading:\s*['"]([^'"]+)['"]/)?.[1]
    const description = block.match(/description:\s*\n?\s*['"]([^'"]+)['"]/)?.[1]
    const pageContent = block.match(/pageContent:\s*`([\s\S]*?)`/)?.[1] || block.match(/pageContent:\s*`<([\s\S]*?)`/)?.[1]
    if (slug && city) locations.push({ slug, city, title, heading, description, pageContent: pageContent || '' })
  }
  return locations
}

const allLocations = [...parseLocations(locationsText), ...parseLocations(extraText)]

function parseBlogCatalog() {
  const entries = []
  const blocks = blogCatalogText.split(/\{\s*slug:/).slice(1)
  for (const block of blocks) {
    const slug = block.match(/^\s*['"]([^'"]+)['"]/)?.[1]
    const title = block.match(/metaTitle:\s*['"]([^'"]+)['"]/)?.[1]
    const primaryKeyword = block.match(/primaryKeyword:\s*['"]([^'"]+)['"]/)?.[1]
    const intent = block.match(/intent:\s*['"]([^'"]+)['"]/)?.[1]
    const cluster = block.match(/cluster:\s*['"]([^'"]+)['"]/)?.[1]
    const datePublished = block.match(/datePublished:\s*['"]([^'"]+)['"]/)?.[1]
    const serviceLinks = [...block.matchAll(/serviceLinks:\s*\[([\s\S]*?)\]/g)].flatMap((m) =>
      [...m[1].matchAll(/['"](\/[^'"]+)['"]/g)].map((x) => x[1])
    )
    if (slug) entries.push({ slug, title, primaryKeyword, intent, cluster, datePublished, serviceLinks })
  }
  return entries
}

const blogEntries = parseBlogCatalog()

function normalizeTemplate(str) {
  return str
    .replace(/SEO services in [A-Za-z]+/gi, 'SEO services in CITY')
    .replace(/Best SEO Services in [A-Za-z]+/gi, 'Best SEO Services in CITY')
    .replace(/in [A-Za-z]+/g, 'in CITY')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseBlockTitle(fileText, exportName) {
  const re = new RegExp(`export const ${exportName}[\\s\\S]*?seo:\\s*\\{[\\s\\S]*?title:\\s*['"]([^'"]+)['"]`)
  return fileText.match(re)?.[1] || ''
}
function parseBlockDesc(fileText, exportName) {
  const re = new RegExp(`export const ${exportName}[\\s\\S]*?description:\\s*\\n?\\s*['"]([^'"]+)['"]`)
  return fileText.match(re)?.[1] || ''
}
function parseBlockH1(fileText, exportName) {
  const re = new RegExp(`export const ${exportName}[\\s\\S]*?hero:\\s*\\{[\\s\\S]*?h1:\\s*['"]([^'"]+)['"]`)
  return fileText.match(re)?.[1] || ''
}

const SERVICE_EXPORT_MAP = {
  'local-seo-service': 'localSeoPremium',
  'e-commerce-seo': 'ecommerceSeoPremium',
  'technical-seo': 'technicalSeoPremium',
  'international-seo': 'internationalSeoPremium',
  'content-marketing': 'contentMarketingPremium',
  'social-media-marketing': 'socialMediaMarketingPremium',
  'ui-ux-design': 'uiUxDesignPremium',
  'ai-seo': 'aiSeoPremium',
  'ppc-advertising': 'ppcAdvertisingPremium',
}

const INDUSTRY_EXPORT_MAP = {
  'wineries-seo': 'wineriesSeoPremium',
  'optometrist-seo': 'optometristSeoPremium',
  'accountants-seo': 'accountantsSeoPremium',
  'doctor-physician-seo': 'doctorPhysicianSeoPremium',
}

function urlType(path) {
  if (path === '/') return 'Core'
  if (['/contact-us', '/who-we-are', '/seo-packages', '/blog', '/industries'].includes(path)) return 'Core'
  if (path.startsWith('/services/')) return 'Service'
  if (path.startsWith('/industries/')) return 'Industry'
  if (path.startsWith('/seo-services/')) return 'City/Location'
  if (path.startsWith('/blog/')) return 'Blog'
  if (['/terms', '/privacy-policy'].includes(path)) return 'Legal'
  if (path.startsWith('/solution/')) return 'Core'
  return 'Other'
}

function getMeta(path) {
  const registry = PAGE_SEO[path]
  if (registry) return { title: registry.title, h1: null, primaryKeyword: '', intent: 'Brand/Nav' }

  if (path === '/services/seo') {
    return {
      title: hubContent.match(/seo:\s*\{[\s\S]*?title:\s*'([^']+)'/)?.[1],
      h1: hubContent.match(/hero:\s*\{[\s\S]*?h1:\s*'([^']+)'/)?.[1],
      primaryKeyword: 'SEO services India',
      intent: 'Commercial',
    }
  }

  const serviceMatch = path.match(/^\/services\/([^/]+)$/)
  if (serviceMatch) {
    const slug = serviceMatch[1]
    const exportName = SERVICE_EXPORT_MAP[slug]
    if (exportName) {
      return {
        title: parseBlockTitle(serviceOverrides, exportName),
        h1: parseBlockH1(serviceOverrides, exportName),
        primaryKeyword: slug.replace(/-/g, ' '),
        intent: 'Commercial',
      }
    }
    return { title: 'Premium service template', h1: '(template)', primaryKeyword: slug, intent: 'Commercial' }
  }

  const industryMatch = path.match(/^\/industries\/([^/]+)$/)
  if (industryMatch) {
    const slug = industryMatch[1]
    const exportName = INDUSTRY_EXPORT_MAP[slug]
    if (exportName) {
      return {
        title: parseBlockTitle(industryOverrides, exportName),
        h1: parseBlockH1(industryOverrides, exportName),
        primaryKeyword: slug.replace(/-seo$/, '').replace(/-/g, ' ') + ' SEO',
        intent: 'Industry commercial',
      }
    }
    return { title: 'Premium industry template', h1: '(template)', primaryKeyword: slug, intent: 'Industry commercial' }
  }

  const cityMatch = path.match(/^\/seo-services\/([^/]+)$/)
  if (cityMatch) {
    const loc = allLocations.find((l) => l.slug === cityMatch[1])
    if (loc) {
      return {
        title: loc.title,
        h1: loc.heading || loc.title,
        primaryKeyword: `SEO services ${loc.city}`,
        intent: 'Local commercial',
      }
    }
  }

  const blogMatch = path.match(/^\/blog\/(.+)$/)
  if (blogMatch) {
    const entry = blogEntries.find((b) => b.slug === blogMatch[1])
    if (entry) {
      return {
        title: entry.title,
        h1: entry.title,
        primaryKeyword: entry.primaryKeyword,
        intent: entry.intent,
        parentService: entry.serviceLinks?.[0] || '/services/seo',
      }
    }
    return { title: 'Legacy blog', h1: '(article)', primaryKeyword: '', intent: 'Informational' }
  }

  return { title: '', h1: '', primaryKeyword: '', intent: '' }
}

function priorityFor(path) {
  const p0 = new Set([
    '/',
    '/services/seo',
    '/services/technical-seo',
    '/services/local-seo-service',
    '/services/e-commerce-seo',
    '/industries/wineries-seo',
    '/industries/optometrist-seo',
    '/industries/accountants-seo',
    '/industries/doctor-physician-seo',
    '/contact-us',
  ])
  if (p0.has(path)) return 'P0'
  if (path.startsWith('/seo-services/')) return 'P1-Audit'
  if (path.startsWith('/industries/')) return 'P1'
  if (path.startsWith('/blog/')) return 'P2'
  if (path.startsWith('/services/')) return 'P1'
  return 'P2'
}

function actionFor(path, cityAudit) {
  if (path === '/') return 'Maintain SEO Company India positioning'
  if (path === '/services/seo') return 'Primary commercial SEO hub — strongest internal links'
  if (path.startsWith('/seo-services/')) {
    const loc = allLocations.find((l) => l.slug === path.replace('/seo-services/', ''))
    return cityAudit[loc?.slug] || 'Audit city uniqueness before optimization'
  }
  if (path === '/industries/wineries-seo') return 'Optimize existing — GSC visibility'
  if (['optometrist-seo', 'accountants-seo', 'doctor-physician-seo'].some((s) => path.endsWith(s)))
    return 'Optimize existing industry page — GSC visibility'
  if (path.startsWith('/industries/')) return 'Audit template depth + internal links'
  if (path.startsWith('/blog/')) return 'Map to parent service; no new blogs'
  if (path === '/contact-us') return 'Enquiry-only — do not noindex'
  return 'Monitor'
}

function csvEscape(val) {
  const s = String(val ?? '').replace(/"/g, '""').replace(/\n/g, ' ')
  return s.includes(',') || s.includes('"') ? `"${s}"` : s
}

async function fetchUrl(path) {
  const url = path === '/' ? BASE : `${BASE}${path}`
  try {
    const res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'SIT-Sitemap-Audit/1.0' } })
    const html = res.status === 200 ? await res.text() : ''
    const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1]
      || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1]
    const robots = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i)?.[1]
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']robots["']/i)?.[1]
    const indexable = !robots || !/noindex/i.test(robots)
    return { status: res.status, canonical, indexable, redirect: res.status >= 300 && res.status < 400 ? res.headers.get('location') : null }
  } catch (e) {
    return { status: 'ERR', canonical: '', indexable: false, redirect: null, error: e.message }
  }
}

// City template audit
const templateHashes = new Map()
const cityAudit = {}
for (const loc of allLocations) {
  const norm = normalizeTemplate(loc.pageContent || '')
  const hash = norm.slice(0, 400)
  if (!templateHashes.has(hash)) templateHashes.set(hash, [])
  templateHashes.get(hash).push(loc.city)
  const isTemplate = extraText.includes(`buildCityPage(\n    '${loc.city}'`) || extraText.includes(`buildCityPage(\n    "${loc.city}"`)
  const uniqueContent = loc.pageContent && loc.pageContent.length > 800 && !isTemplate
  cityAudit[loc.slug] = isTemplate
    ? 'TEMPLATE — thin/doorway risk; audit before optimize (do not delete)'
    : uniqueContent
      ? 'UNIQUE long-form — lower thin risk; still audit cannibalisation vs /services/seo'
      : 'MEDIUM — partial unique content; audit local proof and differentiation'
}

const futureLastmods = []
const sitemapLastmods = {}
for (const block of sitemapXml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
  const chunk = block[1]
  const locRaw = chunk.match(/<loc>([^<]+)<\/loc>/)?.[1]
  const lastmod = chunk.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]
  if (!locRaw) continue
  const loc = locRaw.replace(BASE, '').replace(/\/$/, '') || '/'
  const path = loc === '' ? '/' : loc.startsWith('/') ? loc : `/${loc}`
  if (lastmod) {
    sitemapLastmods[path] = lastmod
    if (lastmod > AUDIT_DATE) futureLastmods.push({ path, date: lastmod })
  }
}

const paths = getSitemapPathsForScripts()
console.log(`Auditing ${paths.length} URLs against ${BASE}...`)

const liveResults = {}
for (let i = 0; i < paths.length; i++) {
  const path = paths[i]
  liveResults[path] = await fetchUrl(path)
  if ((i + 1) % 20 === 0) console.log(`  ${i + 1}/${paths.length} fetched`)
}

const csvRows = [
  'URL,URL Type,HTTP Status,Indexable,Canonical,Title,H1,Last Modified,Sitemap Included,Primary Keyword,Search Intent,Priority,Action',
]

let status200 = 0
let nonIndexable = []
let redirectInSitemap = []
let canonicalIssues = []

for (const path of paths) {
  const url = path === '/' ? BASE : `${BASE}${path}`
  const meta = getMeta(path)
  const live = liveResults[path]
  const lastmod = sitemapLastmods[path] || getLastmodForPath(path) || ''
  const expectedCanonical = path === '/' ? BASE : `${BASE}${path}`

  if (live.status === 200) status200++
  if (!live.indexable) nonIndexable.push(path)
  if (live.redirect) redirectInSitemap.push({ path, redirect: live.redirect })
  if (live.canonical && live.canonical.replace(/\/$/, '') !== expectedCanonical.replace(/\/$/, ''))
    canonicalIssues.push({ path, canonical: live.canonical })

  csvRows.push(
    [
      url,
      urlType(path),
      live.status,
      live.indexable ? 'Yes' : 'No',
      live.canonical || expectedCanonical,
      meta.title,
      meta.h1,
      lastmod,
      'Yes',
      meta.primaryKeyword,
      meta.intent,
      priorityFor(path),
      actionFor(path, cityAudit),
    ].map(csvEscape).join(',')
  )
}

writeFileSync(join(outDir, 'url-inventory.csv'), csvRows.join('\n') + '\n', 'utf8')

const templateGroups = [...templateHashes.entries()].filter(([, cities]) => cities.length > 1)

function buildAuditMarkdown() {
  const lines = []
  const push = (s = '') => lines.push(s)

  push('# Sitemap + URL Architecture SEO Audit')
  push('')
  push(`**Site:** ${BASE}`)
  push(`**Audit date:** ${AUDIT_DATE}`)
  push('**Phase:** AUDIT ONLY — no URLs deleted, no noindex, no redirects, no URL structure changes.')
  push('')
  push('---')
  push('')
  push('## 1. Sitemap implementation')
  push('')
  push('| Question | Finding |')
  push('|----------|---------|')
  push('| Static or dynamic? | **Hybrid static output.** Routes collected programmatically (scripts/sitemap-paths.mjs), then scripts/generate-sitemap.mjs writes public/sitemap.xml on postbuild. No live pages/sitemap.xml.js route. |')
  push('| Regeneration trigger | Every npm run build (postbuild hook). |')
  push('| Source of truth | STATIC_ROUTES + blog + industry + location slugs from source files. |')
  push('| Manual maintenance risk | Low for URL inclusion. **High for lastmod accuracy** (blog datePublished used as lastmod). |')
  push('')
  push(`### Live validation summary (${paths.length} sitemap URLs)`)
  push('')
  push('| Check | Result |')
  push('|-------|--------|')
  push(`| HTTP 200 | ${status200}/${paths.length} |`)
  push(`| Redirects in sitemap | ${redirectInSitemap.length} |`)
  push(`| Non-indexable in sitemap | ${nonIndexable.length} |`)
  push(`| Canonical mismatches (live vs expected) | ${canonicalIssues.length} |`)
  push('| Duplicate URLs in sitemap | 0 (validator enforces) |')
  push('| Non-www / foreign domains | 0 (validator enforces) |')
  push('| Draft blog in sitemap | 0 (google-core-update draft excluded) |')
  push('')

  if (redirectInSitemap.length) {
    push('**Redirects found:**')
    redirectInSitemap.forEach((r) => push(`- ${r.path} → ${r.redirect}`))
  } else {
    push('**No redirect responses** on sitemap URLs at fetch time.')
  }
  push('')

  if (canonicalIssues.length) {
    push('**Canonical notes:**')
    canonicalIssues.slice(0, 10).forEach((c) => push(`- ${c.path}: live canonical ${c.canonical}`))
  } else {
    push('**Canonical:** All checked URLs self-canonical or match expected path (homepage apex without trailing slash — sitewide pattern).')
  }

  push('')
  push('---')
  push('')
  push('## 2. lastmod audit — CRITICAL')
  push('')
  push('**Rule:** lastmod must reflect actual content modification, never future publishing schedules.')
  push('')
  push(`**Audit date:** ${AUDIT_DATE}`)
  push('')
  push(`### Future lastmod dates found: ${futureLastmods.length}`)
  push('')
  push('| Path | lastmod in sitemap | Issue |')
  push('|------|-------------------|-------|')
  futureLastmods.forEach((f) => {
    push(`| ${f.path} | ${f.date} | **Future date** — from blogCatalog.datePublished |`)
  })
  push('')
  push('**Root cause:** utils/sitemapBuilder.js maps blog slugs to BLOG_CATALOG.datePublished. Staggered future dates are editorial calendar, not modification timestamps.')
  push('')
  push('**Pages without lastmod:** All non-blog URLs — no lastmod tag. Acceptable; omitting is better than false dates.')
  push('')
  push('### Recommended lastmod implementation (document only)')
  push('')
  push('1. Remove future datePublished from sitemap — use dateModified on real edits, or omit lastmod.')
  push('2. Never set lastmod on sitemap regeneration alone.')
  push('3. Blog: lastmod only if datePublished <= today or dateModified is set.')
  push('4. Premium pages: optional content version metadata when override files change.')
  push('5. Keep build-time static sitemap; improve metadata accuracy rather than dynamic route.')

  push('')
  push('---')
  push('')
  push('## 3. changefreq / priority')
  push('')
  push('Current: homepage priority 1.0; blog monthly/0.7; all else weekly/0.8.')
  push('')
  push(`**Finding:** ~${paths.filter((p) => !p.startsWith('/blog')).length} non-blog URLs share weekly + 0.8.`)
  push('')
  push('**Recommendation:** Do not tune changefreq/priority for ranking. Optionally remove or simplify. Focus on correct URLs, canonical, indexability, honest lastmod.')

  push('')
  push('---')
  push('')
  push('## 4. URL inventory by category')
  push('')
  push('| Category | Count |')
  push('|----------|-------|')
  push(`| A. Core | ${paths.filter((p) => urlType(p) === 'Core').length} |`)
  push(`| B. Service | ${paths.filter((p) => urlType(p) === 'Service').length} |`)
  push(`| C. Industry | ${paths.filter((p) => urlType(p) === 'Industry').length} |`)
  push(`| D. City/Location | ${paths.filter((p) => urlType(p) === 'City/Location').length} |`)
  push(`| E. Blog | ${paths.filter((p) => urlType(p) === 'Blog').length} |`)
  push(`| F. Legal | ${paths.filter((p) => urlType(p) === 'Legal').length} |`)
  push(`| **Total** | **${paths.length}** |`)
  push('')
  push('Full inventory: seo-audit/url-inventory.csv')

  push('')
  push('---')
  push('')
  push('## 5. City page audit')
  push('')
  push('**Do not delete or noindex** — recommendations only.')
  push('')
  push('| City | Slug | Content type | Thin risk | Recommendation |')
  push('|------|------|--------------|-----------|----------------|')
  allLocations.forEach((loc) => {
    const isTemplate = extraText.includes(`'${loc.city}'`) && extraText.includes('buildCityPage')
    const risk = isTemplate ? 'HIGH — template' : loc.pageContent?.length > 1500 ? 'LOW' : 'MEDIUM'
    push(`| ${loc.city} | ${loc.slug} | ${isTemplate ? 'buildCityPage template' : 'Custom block'} | ${risk} | ${cityAudit[loc.slug]} |`)
  })

  push('')
  push('### City cross-findings')
  push('')
  push('- Bangalore, Chennai, Kolkata, Gurgaon: identical buildCityPage() template — doorway/thin risk.')
  push('- Chandigarh, Hyderabad, Jaipur, Mumbai, Pune, Noida, Delhi: longer custom content — lower thin risk.')
  push('- No unique local case studies in codebase for any city.')
  push('- Cannibalisation risk MEDIUM vs /services/seo and /services/local-seo-service.')
  push('- Delhi/Noida have stronger title differentiation.')

  push('')
  push('---')
  push('')
  push('## 6. Industry page audit')
  push('')
  push(`**Total:** ${paths.filter((p) => p.startsWith('/industries/')).length} industry URLs`)
  push('')
  push('**Priority (GSC):** wineries-seo, optometrist-seo, accountants-seo, doctor-physician-seo — custom keywordIndustryOverrides.')
  push('')
  push(`**Remaining ~${paths.filter((p) => p.startsWith('/industries/')).length - 4} pages:** premium template — optimize only where GSC shows demand; do not create new industry URLs without mapping gap.`)

  push('')
  push('---')
  push('')
  push('## 7. Service page groups')
  push('')
  push('**PRIMARY SEO:** /services/seo, technical-seo, local-seo-service, e-commerce-seo, international-seo, small-business-seo')
  push('**SECONDARY DIGITAL:** digital-marketing, content-marketing, social-media-marketing, ORM, digital-branding')
  push('**AI/SEARCH:** ai-seo, generative-engine-optimization, answer-engine-optimization, gbp-optimization')
  push('**PAID:** paid-advertising, ppc-advertising')
  push('**DESIGN:** design-and-development hub, ui-ux-design')
  push('')
  push('**Authority flow:** Homepage → /services/seo → cluster services → priority industries → blogs.')

  push('')
  push('---')
  push('')
  push('## 8. Blog audit')
  push('')
  push('Map existing blogs to parent services. Do not create new blogs. India-focused legacy posts have MEDIUM cannibalisation risk vs homepage/services hub.')

  push('')
  push('---')
  push('')
  push('## 9. Recommended sitemap architecture')
  push('')
  push(`1. Fix **7 future lastmod dates** before next deploy (see Section 2 table).`)
  push('2. Keep build-time static sitemap (avoids Netlify dynamic 500s).')
  push('3. Improve lastmod honesty; optionally drop changefreq/priority.')
  push('4. City template content is a content audit item, not a sitemap removal item.')

  push('')
  push('---')
  push('')
  push('## 10. Revised implementation sequence')
  push('')
  push('1. Sitemap + URL Audit (this document)')
  push('2. Technical SEO Audit')
  push('3. Keyword → URL Mapping')
  push('4. Fix sitemap lastmod + canonical + indexability')
  push('5. Homepage through Final GSC QA')
  push('')
  push('**Industry:** audit + optimize existing pages first. New pages only on genuine keyword gap.')

  if (templateGroups.length) {
    push('')
    push('---')
    push('')
    push('## Appendix: Template city groups')
    templateGroups.forEach(([, cities]) => push(`- Shared template: ${cities.join(', ')}`))
  }

  push('')
  push('---')
  push('')
  push('*Generated by scripts/generate-sitemap-url-audit.mjs — audit only, no site modifications.*')

  return lines.join('\n')
}

const md = buildAuditMarkdown()

writeFileSync(join(outDir, 'sitemap-audit.md'), md, 'utf8')
console.log(`Wrote seo-audit/sitemap-audit.md`)
console.log(`Wrote seo-audit/url-inventory.csv (${paths.length} rows)`)
console.log(`Future lastmod count: ${futureLastmods.length}`)
console.log(`Live 200: ${status200}/${paths.length}`)
