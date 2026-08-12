/**
 * Helpers for internal-link audit scripts (Node-only usage).
 */
import { readFileSync, readdirSync, statSync } from 'fs'
import { join, dirname, relative } from 'path'
import { fileURLToPath } from 'url'
import {
  EXCEL_LINK_MATRIX,
  getExcelMatrixLinksForSource,
  getPageLinkLimit,
  normalizeExcelPath,
} from './excelLinkMatrix.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')

const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'docs'])

function walkFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) walkFiles(full, files)
    else if (/\.(js|jsx|ts|tsx|mdx)$/.test(entry)) files.push(full)
  }
  return files
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function resolveHintFiles(hints) {
  const files = []
  for (const hint of hints) {
    const full = join(root, hint)
    try {
      const stat = statSync(full)
      if (stat.isDirectory()) walkFiles(full, files)
      else files.push(full)
    } catch {
      // ignore unreadable paths
    }
  }
  return files
}

/**
 * Scan project source for href references to destination from pages related to source.
 * @param {string} sourcePath
 * @param {string} destinationPath
 */
export function scanSourceForLink(sourcePath, destinationPath) {
  const dest = normalizeExcelPath(destinationPath)
  const destPattern = new RegExp(`href=["'\`{]\\s*${escapeRegExp(dest)}`, 'i')
  const loosePattern = new RegExp(escapeRegExp(dest), 'i')

  const hints = getSourceFileHints(sourcePath)
  const files = hints.length
    ? resolveHintFiles(hints)
    : walkFiles(join(root, 'pages')).concat(walkFiles(join(root, 'component')))

  const matches = []
  for (const file of files) {
    try {
      const text = readFileSync(file, 'utf8')
      if (destPattern.test(text) || loosePattern.test(text)) {
        matches.push(relative(root, file))
      }
    } catch {
      // ignore unreadable paths
    }
  }

  return [...new Set(matches)]
}

function getSourceFileHints(sourcePath) {
  const normalized = normalizeExcelPath(sourcePath)
  if (normalized === '/') {
    return ['pages/index.js', 'component/new-home', 'component/layout/footer']
  }
  if (normalized.startsWith('/services/')) {
    return ['utils/services/premium', 'utils/internalLinks.js', `pages/services/${normalized.split('/').pop()}.js`]
  }
  if (normalized.startsWith('/blog/')) {
    return ['utils/blog', 'utils/BlogPost.legacy.js', 'component/blog']
  }
  if (normalized.startsWith('/industries/')) {
    return ['utils/industries/premium', 'component/industry-premium', 'pages/industries']
  }
  if (normalized.startsWith('/seo-services/')) {
    return ['pages/seo-services', 'component/location-services', 'utils/internalLinks.js']
  }
  if (normalized.startsWith('/solution/')) {
    return ['pages/solution', 'component/solution', 'utils/internalLinks.js']
  }
  return [`pages${normalized === '/' ? '/index' : normalized}.js`, 'utils/internalLinks.js']
}

/**
 * @param {string} sourcePath
 * @param {Array<{ href: string, anchorText?: string, title?: string, matrixAnchor?: string }>} programmaticLinks
 * @param {string} destinationPath
 */
export function findExistingLink(programmaticLinks, sourcePath, destinationPath) {
  const dest = normalizeExcelPath(destinationPath)
  const programmatic = programmaticLinks.find((link) => normalizeExcelPath(link.href) === dest)
  if (programmatic) {
    return {
      exists: true,
      anchorText: programmatic.matrixAnchor || programmatic.anchorText || programmatic.title || '',
      via: 'programmatic',
      files: [],
    }
  }

  const files = scanSourceForLink(sourcePath, dest)
  if (files.length) {
    return { exists: true, anchorText: '', via: 'source-scan', files }
  }

  return { exists: false, anchorText: '', via: null, files: [] }
}

/**
 * @param {string} sourcePath
 * @param {(path: string) => Array<{ href: string, title?: string, anchorText?: string, matrixAnchor?: string }>} getProgrammaticLinks
 */
export function auditSourceLinks(sourcePath, getProgrammaticLinks, livePathSet) {
  const normalized = normalizeExcelPath(sourcePath)
  const matrixRows = getExcelMatrixLinksForSource(normalized)
  const programmaticLinks = getProgrammaticLinks(normalized) || []

  return matrixRows.map((row) => {
    const sourceExists = livePathSet.has(row.sourcePath)
    const destinationExists = livePathSet.has(row.destinationPath)
    const existing = findExistingLink(programmaticLinks, row.sourcePath, row.destinationPath)

    let status = 'missing'
    if (!sourceExists || !destinationExists) status = 'invalid'
    else if (existing.exists) status = 'present'

    return {
      sourcePath: row.sourcePath,
      destinationPath: row.destinationPath,
      recommendedAnchor: row.anchorText,
      sourceExists,
      destinationExists,
      linkExists: existing.exists,
      existingAnchor: existing.anchorText,
      existingVia: existing.via,
      matchedFiles: existing.files,
      placement: row.placement,
      why: row.why,
      status,
    }
  })
}

export function summarizeAudit(rows) {
  const total = rows.length
  const present = rows.filter((r) => r.status === 'present').length
  const missing = rows.filter((r) => r.status === 'missing').length
  const invalid = rows.filter((r) => r.status === 'invalid').length
  const invalidDestinations = [...new Set(rows.filter((r) => !r.destinationExists).map((r) => r.destinationPath))].sort()
  const duplicateMatrixPairs = findDuplicateMatrixPairs()

  return {
    total,
    present,
    missing,
    invalid,
    coveragePercent: total ? Math.round((present / total) * 100) : 0,
    invalidDestinations,
    duplicateMatrixPairs: duplicateMatrixPairs.length,
    duplicateMatrixPairExamples: duplicateMatrixPairs.slice(0, 10),
  }
}

function findDuplicateMatrixPairs() {
  const seen = new Map()
  const dupes = []
  for (const row of EXCEL_LINK_MATRIX) {
    const key = `${row.sourcePath}->${row.destinationPath}`
    if (seen.has(key)) dupes.push(key)
    seen.set(key, true)
  }
  return dupes
}

export function getAuditLimitForSource(sourcePath) {
  return getPageLinkLimit(sourcePath)
}
