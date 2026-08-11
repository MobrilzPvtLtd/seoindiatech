#!/usr/bin/env node
/**
 * Keyword architecture audit — validates one canonical URL per keyword cluster.
 * Run: npm run seo:keyword-architecture
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { KEYWORD_CANONICAL_MAP } from '../utils/seo/keywordArchitecture.js'
import { getPageSeo } from '../utils/pageSeoRegistry.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const reportDir = join(root, 'docs', 'seo-master-plan', 'audit-reports')
mkdirSync(reportDir, { recursive: true })

const issues = []

function addIssue(url, issue, severity, recommendation) {
  issues.push({ url, issue, severity, recommendation })
}

function normalizeTitle(title) {
  return (title || '').toLowerCase().replace(/\s+/g, ' ').trim()
}

function readText(relPath) {
  return readFileSync(join(root, relPath), 'utf8')
}

function parseExportBlockTitle(exportName, fileText) {
  const blockRe = new RegExp(`export const ${exportName}[\\s\\S]*?seo:\\s*\\{[\\s\\S]*?title:\\s*['"]([^'"]+)['"]`)
  const match = fileText.match(blockRe)
  return match?.[1] || null
}

function buildTitleMap() {
  const map = {}

  const hubOverrides = readText('utils/services/premium/hubOverrides.js')
  map['/services/seo'] =
    parseExportBlockTitle('seoHubPremium', hubOverrides) ||
    parseExportBlockTitle('seoHubExpandedContent', readText('utils/services/premium/seoHubExpandedContent.js'))

  const serviceOverrides = readText('utils/services/premium/serviceOverrides.js')
  const overrideKeys = [...serviceOverrides.matchAll(/'([a-z0-9-]+)':\s*\w+Premium/g)].map((m) => m[1])
  for (const slug of overrideKeys) {
    const exportMatch = serviceOverrides.match(new RegExp(`'${slug}':\\s*(\\w+)`))
    if (!exportMatch) continue
    const exportName = exportMatch[1]
    const title = parseExportBlockTitle(exportName, serviceOverrides)
    if (title) map[`/services/${slug}`] = title
  }

  const industryOverrides = readText('utils/industries/premium/keywordIndustryOverrides.js')
  for (const slug of ['optometrist-seo', 'wineries-seo']) {
    const exportName = slug === 'optometrist-seo' ? 'optometristSeoPremium' : 'wineriesSeoPremium'
    const title = parseExportBlockTitle(exportName, industryOverrides)
    if (title) map[`/industries/${slug}`] = title
  }

  const locationsText = readText('utils/locations.js')
  for (const match of locationsText.matchAll(/slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"/g)) {
    map[`/seo-services/${match[1]}`] = match[2]
  }

  map['/solution/crm-and-tools'] = 'India CRM & SEO CRM System | CRM & Tools | SEO India Tech'

  return map
}

const TITLE_MAP = buildTitleMap()

function getTitleForPath(path) {
  const pageSeo = getPageSeo(path)
  if (pageSeo?.title) return pageSeo.title
  return TITLE_MAP[path] || null
}

// --- Validate mapping completeness ---
for (const row of KEYWORD_CANONICAL_MAP) {
  if (!row.primaryKeywords?.length) {
    addIssue(row.canonicalUrl, 'Missing primaryKeywords in KEYWORD_CANONICAL_MAP', 'HIGH', 'Add keyword cluster for this URL.')
  }
}

// --- Contact page must not target generic India SEO ---
const contactSeo = getPageSeo('/contact-us')
const contactTitle = normalizeTitle(contactSeo?.title)
const contactCannibalPatterns = [
  /\bseo agency in india\b/,
  /\bindian seo company\b/,
  /\bseo services india\b/,
  /\bbest seo\b.*\bin india\b/,
  /\bseo firm india\b/,
]
for (const pattern of contactCannibalPatterns) {
  if (pattern.test(contactTitle)) {
    addIssue('/contact-us', `Contact title may cannibalize commercial SEO terms (${pattern})`, 'HIGH', 'Keep contact meta enquiry-focused; primary SEO terms belong on /services/seo.')
  }
}

// --- Duplicate keyword assignment ---
const keywordOwners = new Map()
for (const row of KEYWORD_CANONICAL_MAP) {
  for (const kw of row.primaryKeywords || []) {
    const key = kw.toLowerCase()
    if (keywordOwners.has(key)) {
      addIssue(
        row.canonicalUrl,
        `Keyword "${kw}" also assigned to ${keywordOwners.get(key)}`,
        'CRITICAL',
        'Assign each keyword to exactly one canonical URL.'
      )
    } else {
      keywordOwners.set(key, row.canonicalUrl)
    }
  }
}

// --- Canonical URLs should have resolvable titles ---
for (const row of KEYWORD_CANONICAL_MAP) {
  const title = getTitleForPath(row.canonicalUrl)
  if (!title) {
    addIssue(row.canonicalUrl, 'Could not resolve page title for canonical URL', 'MEDIUM', 'Ensure SeoHead or premium content provides title.')
  }
}

// --- Alias redirects should not match canonical ---
for (const row of KEYWORD_CANONICAL_MAP) {
  for (const alias of row.aliasRedirects || []) {
    if (alias === row.canonicalUrl) {
      addIssue(alias, 'Alias redirect equals canonical URL', 'CRITICAL', 'Remove redundant redirect.')
    }
  }
}

const critical = issues.filter((i) => i.severity === 'CRITICAL').length
const high = issues.filter((i) => i.severity === 'HIGH').length
const medium = issues.filter((i) => i.severity === 'MEDIUM').length

const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    clusters: KEYWORD_CANONICAL_MAP.length,
    totalKeywords: [...keywordOwners.keys()].length,
    issues: issues.length,
    critical,
    high,
    medium,
  },
  keywordToUrlMapping: KEYWORD_CANONICAL_MAP.map((row) => ({
    canonicalUrl: row.canonicalUrl,
    pageType: row.pageType,
    primaryKeywords: row.primaryKeywords,
    aliasRedirects: row.aliasRedirects || [],
    resolvedTitle: getTitleForPath(row.canonicalUrl),
  })),
  issues,
}

const outPath = join(reportDir, 'keyword-architecture-audit.json')
writeFileSync(outPath, JSON.stringify(report, null, 2))

console.log(`Keyword architecture audit: ${issues.length} issues (CRITICAL ${critical}, HIGH ${high}, MEDIUM ${medium})`)
console.log(`Report: ${outPath}`)

if (critical > 0) process.exit(1)
