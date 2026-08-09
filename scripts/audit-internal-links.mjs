#!/usr/bin/env node
/**
 * Audits Excel internal-linking matrix against live routes and programmatic link output.
 * Run: npm run seo:audit-links
 */
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { getSitemapPathsForScripts } from './sitemap-paths.mjs'
import {
  EXCEL_LINK_MATRIX,
  EXCEL_MASTER_PATHS,
  MATRIX_STATS,
  getAllMatrixSources,
  getInvalidMatrixDestinations,
  getOrphanPaths,
  getUrlAlignmentReport,
  normalizeExcelPath,
} from '../utils/seo/excelLinkMatrix.js'
import { auditSourceLinks, summarizeAudit } from '../utils/seo/linkAudit.js'
import {
  getExcelMatrixLinks,
  getPageLinkLimit,
  HOMEPAGE_HUB_PATHS,
} from '../utils/seo/excelLinkMatrix.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const reportDir = join(root, 'docs', 'seo-master-plan', 'audit-reports')
mkdirSync(reportDir, { recursive: true })

const livePaths = getSitemapPathsForScripts().map(normalizeExcelPath)
const livePathSet = new Set(livePaths)

function getProgrammaticLinksForAudit(sourcePath) {
  const normalized = normalizeExcelPath(sourcePath)
  const limit = getPageLinkLimit(normalized)

  if (normalized === '/') {
    return HOMEPAGE_HUB_PATHS.map((item) => ({
      href: item.href,
      title: item.title,
      matrixAnchor: item.anchorText,
    }))
  }

  return getExcelMatrixLinks(normalized, { limit, validDestinations: livePathSet }).map((item) => ({
    href: item.href,
    title: item.anchorText,
    matrixAnchor: item.anchorText,
  }))
}

const urlAlignment = getUrlAlignmentReport(livePaths)
const invalidDestinations = getInvalidMatrixDestinations(livePathSet)
const orphanPaths = getOrphanPaths(livePathSet)

const sources = [...new Set([...getAllMatrixSources(), ...livePaths])].sort()

const rows = []
for (const sourcePath of sources) {
  const sourceRows = auditSourceLinks(sourcePath, getProgrammaticLinksForAudit, livePathSet)
  rows.push(...sourceRows)
}

const summary = summarizeAudit(rows)

const missingLinks = rows.filter((row) => row.status === 'missing')
const presentLinks = rows.filter((row) => row.status === 'present')
const invalidLinks = rows.filter((row) => row.status === 'invalid')

const report = {
  generatedAt: new Date().toISOString(),
  matrixStats: MATRIX_STATS,
  urlAlignment,
  summary,
  invalidDestinations,
  orphanPaths,
  missingLinksCount: missingLinks.length,
  presentLinksCount: presentLinks.length,
  invalidLinksCount: invalidLinks.length,
  missingLinks: missingLinks.slice(0, 200),
  presentLinksSample: presentLinks.slice(0, 50),
  invalidLinksSample: invalidLinks.slice(0, 50),
  rows,
}

const stamp = new Date().toISOString().replace(/[:.]/g, '-')
const reportPath = join(reportDir, `internal-links-audit-${stamp}.json`)
const latestPath = join(reportDir, 'internal-links-audit-latest.json')

writeFileSync(reportPath, JSON.stringify(report, null, 2))
writeFileSync(latestPath, JSON.stringify(report, null, 2))

console.log('SEO Internal Links Audit')
console.log('========================')
console.log(`Matrix rows: ${MATRIX_STATS.totalRows}`)
console.log(`Matrix unique sources: ${MATRIX_STATS.uniqueSources}`)
console.log(`Live URLs: ${urlAlignment.liveCount}`)
console.log(`Excel master URLs: ${urlAlignment.excelCount}`)
console.log(`URL alignment: ${urlAlignment.alignmentPercent}% (${urlAlignment.liveAndInExcel.length}/${urlAlignment.excelCount})`)
console.log('')
console.log('URL alignment breakdown')
console.log(`  LIVE + IN EXCEL: ${urlAlignment.liveAndInExcel.length}`)
console.log(`  LIVE + NOT IN EXCEL: ${urlAlignment.liveNotInExcel.length}`)
if (urlAlignment.liveNotInExcel.length) console.log(`    ${urlAlignment.liveNotInExcel.join(', ')}`)
console.log(`  IN EXCEL + NOT LIVE: ${urlAlignment.inExcelNotLive.length}`)
if (urlAlignment.inExcelNotLive.length) console.log(`    ${urlAlignment.inExcelNotLive.join(', ')}`)
console.log('')
console.log('Link matrix coverage (programmatic + source scan)')
console.log(`  Present: ${summary.present} (${summary.coveragePercent}%)`)
console.log(`  Missing: ${summary.missing}`)
console.log(`  Invalid: ${summary.invalid}`)
console.log(`  Invalid destinations in matrix: ${invalidDestinations.length}`)
console.log(`  Orphan pages (no inbound matrix links): ${orphanPaths.length}`)
console.log(`  Duplicate matrix pairs: ${summary.duplicateMatrixPairs}`)
console.log('')
console.log(`Report written: ${latestPath}`)

if (urlAlignment.inExcelNotLive.some((p) => p.includes('google-core-update'))) {
  console.log('')
  console.log('Note: Missing planned blog is intentionally not implemented in this phase.')
}

process.exit(0)
