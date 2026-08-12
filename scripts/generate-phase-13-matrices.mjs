#!/usr/bin/env node
/**
 * Generate Phase 13 GSC matrices from documented export summary (page-level).
 * Query-level cells marked GSC_QUERY_DATA_UNAVAILABLE where applicable.
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sitemap = readFileSync(join(root, 'public', 'sitemap.xml'), 'utf8')
const industrySlugs = [...sitemap.matchAll(/\/industries\/([^<]+)</g)].map((m) => m[1])

const GSC_INDUSTRY = {
  'wineries-seo': { clicks: 0, impressions: 287, ctr: 0, position: 80.42 },
  'hvac-seo': { clicks: 0, impressions: 135, ctr: 0, position: 67.91 },
  'optometrist-seo': { clicks: 1, impressions: 85, ctr: 1.18, position: 75.16 },
  'plumber-seo': { clicks: 0, impressions: 53, ctr: 0, position: 79.4 },
  'automotive-seo': { clicks: 0, impressions: 40, ctr: 0, position: 69.75 },
  'movers-and-moving-company-seo': { clicks: 0, impressions: 34, ctr: 0, position: 54.09 },
  'accountants-seo': { clicks: 1, impressions: 34, ctr: 2.94, position: 67.26 },
  'plastic-surgery-seo': { clicks: 0, impressions: 33, ctr: 0, position: 67.97 },
  'flooring-company-seo': { clicks: 0, impressions: 32, ctr: 0, position: 63.5 },
  'garage-door-seo': { clicks: 0, impressions: 30, ctr: 0, position: 80.5 },
}

const MISSING_EXPORT = ['realtor-seo', 'breweries-seo', 'sign-company-seo', 'tree-care-seo']

const SITE_PAGES = [
  { url: 'https://www.seoindiatech.com/', type: 'Homepage', intent: 'SEO Company in India', clicks: null, impressions: 3108, ctr: null, position: 47.19 },
  { url: 'https://www.seoindiatech.com/services/seo', type: 'Service', intent: 'SEO Services in India', clicks: null, impressions: 3468, ctr: null, position: 60.1 },
]

function bucket(position, impressions) {
  if (position >= 1 && position <= 20 && impressions >= 20) return 'P1'
  if (position >= 21 && position <= 50 && impressions >= 20) return 'P2'
  if (position > 50 || impressions < 20) return 'P3'
  return 'P3'
}

function ctrOpp(impressions, ctr, position) {
  if (impressions >= 50 && ctr < 1 && position > 30) return 'High'
  if (impressions >= 20 && ctr < 0.5) return 'Medium'
  return 'Low'
}

function esc(s) {
  const v = String(s ?? '')
  return v.includes(',') || v.includes('"') ? `"${v.replace(/"/g, '""')}"` : v
}

function row(cols) {
  return cols.map(esc).join(',')
}

// Industry priority matrix
const industryRows = [['Slug', 'URL', 'Clicks', 'Impressions', 'CTR', 'Avg Position', 'GSC In Export', 'Opportunity Score', 'Top 5 Selected', 'Notes']]

const scored = industrySlugs.map((slug) => {
  const g = GSC_INDUSTRY[slug]
  const inExport = !MISSING_EXPORT.includes(slug)
  const impressions = g?.impressions ?? 0
  const position = g?.position ?? null
  const clicks = g?.clicks ?? 0
  const ctr = g?.ctr ?? 0
  let score = 0
  if (g) {
    score += Math.min(impressions / 10, 40)
    score += clicks * 15
    score += ctr * 5
    if (position) score += Math.max(0, 100 - position) / 5
  }
  return { slug, g, inExport, score, impressions, position, clicks, ctr }
})

scored.sort((a, b) => b.score - a.score)
const top5 = new Set(['wineries-seo', 'hvac-seo', 'optometrist-seo', 'plumber-seo', 'automotive-seo'])

for (const { slug, g, inExport, score } of scored) {
  const note = MISSING_EXPORT.includes(slug) ? 'No row in Pages export — not assumed zero' : g ? '' : 'In export summary but metrics not in top-10 handoff'
  industryRows.push([
    slug,
    `https://www.seoindiatech.com/industries/${slug}`,
    g?.clicks ?? (inExport ? '' : 'N/A'),
    g?.impressions ?? (inExport ? '' : 'N/A'),
    g ? `${g.ctr}%` : '',
    g?.position ?? '',
    inExport ? 'Yes' : 'No row',
    g || MISSING_EXPORT.includes(slug) ? score.toFixed(1) : '',
    top5.has(slug) ? 'YES' : '',
    note,
  ])
}

writeFileSync(join(root, 'seo-audit', 'phase-13-industry-priority-matrix.csv'), industryRows.map(row).join('\n'))

// Master opportunity matrix
const oppHeader = [
  'URL',
  'Page Type',
  'Primary Intent',
  'Top Query',
  'Clicks',
  'Impressions',
  'CTR',
  'Average Position',
  'Ranking Bucket',
  'CTR Opportunity',
  'Commercial Value',
  'Cannibalisation Risk',
  'Recommended Action',
  'Priority',
]
const oppRows = [oppHeader]

for (const p of SITE_PAGES) {
  oppRows.push([
    p.url,
    p.type,
    p.intent,
    'GSC_QUERY_DATA_UNAVAILABLE',
    p.clicks ?? '',
    p.impressions,
    p.ctr ?? '',
    p.position,
    bucket(p.position, p.impressions),
    ctrOpp(p.impressions, p.ctr ?? 0, p.position),
    'High',
    'Low — primary URL for intent',
    'PROTECT — strengthen internal links only; no title/H1 changes without query export',
    'Monitor',
  ])
}

const lockedServices = [
  { path: '/services/technical-seo', intent: 'Technical SEO Services' },
  { path: '/services/local-seo-service', intent: 'Local SEO Services' },
  { path: '/services/e-commerce-seo', intent: 'E-commerce SEO Services' },
  { path: '/services/international-seo', intent: 'International SEO' },
  { path: '/services/gbp-optimization', intent: 'GBP Optimization' },
]

for (const s of lockedServices) {
  oppRows.push([
    `https://www.seoindiatech.com${s.path}`,
    'Service',
    s.intent,
    'GSC_QUERY_DATA_UNAVAILABLE',
    '',
    '',
    '',
    '',
    '',
    '',
    'High',
    'Low if intent locked',
    'PROTECT — no speculative metadata changes',
    'Monitor',
  ])
}

for (const slug of top5) {
  const g = GSC_INDUSTRY[slug]
  const url = `https://www.seoindiatech.com/industries/${slug}`
  const intentMap = {
    'wineries-seo': 'Winery SEO / SEO for Wineries',
    'hvac-seo': 'HVAC SEO Services',
    'optometrist-seo': 'SEO for Optometrists',
    'plumber-seo': 'Plumber SEO Services',
    'automotive-seo': 'Automotive SEO Services',
  }
  let action = 'Phase 13B: CTR title/meta tighten + contextual internal/blog links'
  if (slug === 'wineries-seo') action = 'Phase 13B: internal/blog links; title unchanged until query export'
  if (slug === 'optometrist-seo') action = 'Phase 13B: protect override; GBP blog link only'
  oppRows.push([
    url,
    'Industry',
    intentMap[slug],
    'GSC_QUERY_DATA_UNAVAILABLE',
    g.clicks,
    g.impressions,
    `${g.ctr}%`,
    g.position,
    bucket(g.position, g.impressions),
    ctrOpp(g.impressions, g.ctr, g.position),
    'Medium-High',
    'Low vs service hubs',
    action,
    'P1 batch',
  ])
}

writeFileSync(join(root, 'seo-audit', 'phase-13-gsc-opportunity-matrix.csv'), oppRows.map(row).join('\n'))
console.log('Wrote phase-13-industry-priority-matrix.csv and phase-13-gsc-opportunity-matrix.csv')
