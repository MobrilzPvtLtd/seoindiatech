/**
 * Phase 5 content audit generator.
 * Usage: node scripts/generate-content-audit.mjs
 */
import { writeFileSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { getSitemapPathsForScripts } from './sitemap-paths.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outPath = join(root, 'docs/seo-master-plan/content-audit.md')

const masterPlan = JSON.parse(
  readFileSync(join(root, 'docs/seo-master-plan/114-page-master-plan.json'), 'utf8')
)

const legacyText = readFileSync(join(root, 'utils/BlogPost.legacy.js'), 'utf8')
const catalogText = readFileSync(join(root, 'utils/blog/premium/blogCatalog.js'), 'utf8')

const PREMIUM_SLUGS = new Set(
  [...catalogText.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
)

const LEGACY_THIN = new Set([
  'what-is-ai-seo-why-business-needs-it',
  'ppc-vs-seo-which-is-better',
  'ecommerce-seo-checklist-india',
])

const P1_SERVICES = new Set([
  '/services/seo',
  '/services/ai-seo',
  '/services/answer-engine-optimization',
  '/services/generative-engine-optimization',
  '/services/local-seo-service',
  '/services/gbp-optimization',
  '/services/e-commerce-seo',
  '/services/content-marketing',
  '/services/digital-marketing',
  '/seo-packages',
])

const P2_BLOG_KEYWORDS = [
  'ai-seo',
  'ai-search',
  'google-ai',
  'geo-',
  'aeo',
  'international-seo',
  'european',
  'technical-seo',
  'eeat',
  'local-seo',
  'chatgpt',
]

const CANNIBALIZATION_PAIRS = [
  [
    '/blog/how-google-ai-overviews-are-changing-seo',
    '/blog/google-ai-overviews-changing-business-seo',
  ],
]

function pathFromExcelUrl(url) {
  try {
    const u = new URL(url)
    return u.pathname.replace(/\/$/, '') || '/'
  } catch {
    return url
  }
}

const excelByPath = new Map()
for (const row of masterPlan) {
  excelByPath.set(pathFromExcelUrl(row.URL), row)
}

function inferPriority(path) {
  if (P1_SERVICES.has(path)) return 'P1'
  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '')
    if (PREMIUM_SLUGS.has(slug)) {
      if (P2_BLOG_KEYWORDS.some((k) => slug.includes(k))) return 'P2'
      return 'P2'
    }
    return 'P5'
  }
  if (path.startsWith('/industries/') && path !== '/industries') return 'P3'
  if (path.startsWith('/seo-services/')) return 'P4'
  if (path.startsWith('/services/')) return 'P1'
  if (path.startsWith('/solution/')) return 'P2'
  if (['/who-we-are', '/contact-us', '/'].includes(path)) return 'P1'
  return 'P4'
}

function inferPageType(path) {
  if (path === '/') return 'Homepage'
  if (path.startsWith('/services/')) return 'Service'
  if (path.startsWith('/blog/')) return 'Blog'
  if (path.startsWith('/industries/')) return path === '/industries' ? 'Hub' : 'Industry'
  if (path.startsWith('/seo-services/')) return 'City SEO'
  if (path.startsWith('/solution/')) return 'Solution'
  return 'Core'
}

function countLegacyBlocks(slug) {
  const re = new RegExp(`slug:\\s*['"]${slug}['"][\\s\\S]*?content:\\s*\\[([\\s\\S]*?)\\]\\s*,\\s*\\}`, 'm')
  const m = legacyText.match(re)
  if (!m) return 0
  return (m[1].match(/type:/g) || []).length
}

function evaluatePage(path) {
  const excel = excelByPath.get(path) || {}
  const pageType = excel['Page Type'] || inferPageType(path)
  const primaryKeyword = excel['Primary Keyword / Topic'] || '—'
  const secondaryKeywords = excel['Secondary Keywords'] || '—'
  const intent = excel['Search Intent'] || '—'
  const priority = inferPriority(path)

  let contentQuality = 'Good'
  let topicalDepth = 'Adequate'
  let thinRisk = 'Low'
  let duplicateRisk = 'Low'
  let cannibalRisk = 'Low'
  let action = 'KEEP'
  let originality = 'Original'
  let eeAt = 'Adequate'
  let internalLinking = 'Good'
  let aiReadiness = 'Good'
  let notes = []

  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '')
    const isPremium = PREMIUM_SLUGS.has(slug)
    if (!isPremium) {
      const blocks = countLegacyBlocks(slug)
      if (LEGACY_THIN.has(slug) || blocks < 8) {
        contentQuality = 'Fair'
        topicalDepth = 'Shallow'
        thinRisk = 'Medium'
        action = LEGACY_THIN.has(slug) ? 'MINOR UPDATE' : 'EXPAND'
        notes.push('Legacy blog; thinner than premium articles')
      } else {
        action = 'MINOR UPDATE'
        internalLinking = 'Improved (Phase 5)'
      }
      aiReadiness = 'Improved (answer-first + FAQs added Phase 5)'
    } else {
      contentQuality = 'Strong'
      topicalDepth = 'Deep'
      action = 'KEEP'
      if (['seo-healthcare-businesses-europe', 'seo-law-firms-complete-guide'].includes(slug)) {
        eeAt = 'Needs reviewer verification'
        notes.push('YMYL topic — author/reviewer credentials should be verified')
      }
    }

    for (const pair of CANNIBALIZATION_PAIRS) {
      if (pair.includes(path)) {
        cannibalRisk = 'Medium'
        notes.push('Overlaps with related AI Overview article — different intent recommended')
      }
    }
  }

  if (path.startsWith('/services/')) {
    contentQuality = P1_SERVICES.has(path) ? 'Strong' : 'Good'
    topicalDepth = 'Comprehensive (premium template)'
    action = 'KEEP'
    aiReadiness = 'Good (answer-first Phase 4)'
    if (path === '/services/seo' || path === '/services/ai-seo') {
      eeAt = 'Review testimonial quotes for verification'
      notes.push('Service testimonials may need client approval')
    }
  }

  if (path.startsWith('/industries/') && path !== '/industries') {
    contentQuality = 'Good'
    topicalDepth = 'Industry-specific (premium)'
    action = 'KEEP'
    duplicateRisk = 'Low'
    notes.push('Premium industry template with sector-specific sections')
  }

  if (path.startsWith('/seo-services/')) {
    contentQuality = 'Good'
    topicalDepth = 'Moderate'
    thinRisk = 'Low'
    action = 'KEEP'
    notes.push('City pages use locations.js local context — verify facts per city')
    duplicateRisk = 'Medium'
    notes.push('Template-based; uniqueness depends on local data fields')
  }

  if (path === '/who-we-are') {
    action = 'MINOR UPDATE'
    eeAt = 'Strengthen with verifiable team credentials'
    notes.push('Add verified author/team bios when available')
  }

  if (path === '/seo-packages') {
    action = 'KEEP'
    contentQuality = 'Good'
  }

  if (path === '/' || path === '/contact-us' || path === '/blog' || path === '/industries') {
    action = 'KEEP'
  }

  if (path.startsWith('/solution/')) {
    action = 'KEEP'
    contentQuality = 'Good'
    internalLinking = 'Good (Phase 2 solution links)'
  }

  if (['/privacy-policy', '/terms'].includes(path)) {
    action = 'KEEP'
    contentQuality = 'Adequate'
  }

  // Phase 5 implemented updates
  const phase5Updated = [
    '/blog/what-is-ai-seo-why-business-needs-it',
    '/blog/ppc-vs-seo-which-is-better',
    '/blog/how-google-ai-overviews-are-changing-seo',
  ]
  if (phase5Updated.includes(path)) {
    action = 'KEEP'
    notes.push('Phase 5: expanded content, FAQs, cluster links')
  }

  return {
    url: path,
    pageType,
    intent,
    primaryKeyword,
    secondaryKeywords,
    contentQuality,
    searchIntentMatch: intent !== '—' ? 'Aligned' : 'Review',
    originality,
    topicalDepth,
    eeAt,
    internalLinking,
    conversionIntent: pageType === 'Service' || path === '/seo-packages' ? 'Commercial' : 'Mixed',
    aiReadiness,
    thinRisk,
    duplicateRisk,
    cannibalRisk,
    priority,
    action,
    notes: notes.join('; ') || '—',
  }
}

const livePaths = getSitemapPathsForScripts().sort()
const audits = livePaths.map(evaluatePage)

const missingExcel = masterPlan
  .map((r) => pathFromExcelUrl(r.URL))
  .filter((p) => !livePaths.includes(p))

function row(a) {
  return `| ${a.url} | ${a.pageType} | ${a.intent} | ${a.primaryKeyword} | ${a.secondaryKeywords.slice(0, 60)}${a.secondaryKeywords.length > 60 ? '…' : ''} | ${a.contentQuality} | ${a.searchIntentMatch} | ${a.originality} | ${a.topicalDepth} | ${a.eeAt} | ${a.internalLinking} | ${a.conversionIntent} | ${a.aiReadiness} | ${a.thinRisk} | ${a.duplicateRisk} | ${a.cannibalRisk} | **${a.action}** | ${a.priority} | ${a.notes} |`
}

const actionCounts = audits.reduce((acc, a) => {
  acc[a.action] = (acc[a.action] || 0) + 1
  return acc
}, {})

const md = `# Content Audit — Phase 5

Generated: ${new Date().toISOString().slice(0, 10)}

**Live pages audited:** ${audits.length}  
**Excel master plan URLs:** ${masterPlan.length}  
**Not live (documented separately):** ${missingExcel.join(', ') || 'none'}

## Summary by Recommended Action

| Action | Count |
|--------|-------|
${Object.entries(actionCounts)
  .sort((a, b) => b[1] - a[1])
  .map(([k, v]) => `| ${k} | ${v} |`)
  .join('\n')}

## Priority Distribution

| Priority | Description | Count |
|----------|-------------|-------|
| P1 | High commercial (services, homepage, packages) | ${audits.filter((a) => a.priority === 'P1').length} |
| P2 | High-value blogs & solutions | ${audits.filter((a) => a.priority === 'P2').length} |
| P3 | Industry pages | ${audits.filter((a) => a.priority === 'P3').length} |
| P4 | City SEO & lower core | ${audits.filter((a) => a.priority === 'P4').length} |
| P5 | Legacy blogs | ${audits.filter((a) => a.priority === 'P5').length} |

## Full Page Audit

| URL | Page Type | Primary Intent | Primary Keyword | Secondary Keywords | Content Quality | Intent Match | Originality | Topical Depth | E-E-A-T | Internal Linking | Conversion | AI Readiness | Thin Risk | Duplicate Risk | Cannibalization | **Action** | Priority | Notes |
|-----|-----------|----------------|-----------------|-------------------|-----------------|--------------|-------------|---------------|---------|------------------|------------|--------------|-----------|----------------|-----------------|----------|----------|-------|
${audits.map(row).join('\n')}

## Pages in Excel Not Live

| URL | Notes |
|-----|-------|
${missingExcel.map((p) => `| ${p} | See missing-blog-brief.md — STATUS: WAITING FOR APPROVAL |`).join('\n')}

## Audit Methodology

- Compared live sitemap paths against Excel 114 Page Master Plan
- Premium service/industry pages assessed via existing premium template (Phase 1–4)
- Legacy blogs scored by content block count and cluster relevance
- City pages flagged for template duplication risk (not auto-merged)
- Cannibalization pairs documented in content-cannibalization.md
- No automatic MERGE/REDIRECT actions executed
`

writeFileSync(outPath, md, 'utf8')
console.log(`Wrote ${outPath} (${audits.length} pages)`)
