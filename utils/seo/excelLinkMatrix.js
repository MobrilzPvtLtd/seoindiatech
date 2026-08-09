/**
 * Excel internal-linking matrix (parsed from SEO master plan).
 * Strategic reference only — page context and link limits govern actual implementation.
 */
import { matrixRows, pageMasterRows } from './excelLinkMatrixData.js'

const SITE_ORIGIN = 'https://www.seoindiatech.com'

export const PAGE_LINK_LIMITS = {
  homepage: 8,
  service: 8,
  hub: 8,
  blog: 8,
  industry: 7,
  city: 7,
  solution: 7,
  core: 7,
}

const PLACEMENT_ORDER = {
  'Contextual body': 0,
  'Related resources': 1,
  'Service hub': 2,
  'Industry hub': 3,
  'Local hub': 4,
  'Conversion': 5,
  CTA: 6,
}

/** @param {string} url */
export function normalizeExcelPath(url) {
  if (!url) return ''
  try {
    const pathname = url.startsWith('http') ? new URL(url).pathname : url
    if (!pathname) return '/'
    const trimmed = pathname.replace(/\/+$/, '')
    return trimmed || '/'
  } catch {
    return String(url).replace(/\/+$/, '') || '/'
  }
}

export function toAbsoluteExcelUrl(path) {
  const normalized = normalizeExcelPath(path)
  return normalized === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${normalized}`
}

function normalizeMatrixRow(row) {
  const sourcePath = normalizeExcelPath(row['Source URL'])
  const destinationPath = normalizeExcelPath(row['Destination URL'])

  return {
    sourcePath,
    destinationPath,
    sourceUrl: row['Source URL'],
    destinationUrl: row['Destination URL'],
    anchorText: String(row['Anchor Text'] || '').trim(),
    why: String(row['Why This Link'] || '').trim(),
    placement: String(row['Recommended Placement'] || '').trim(),
    anchorRule: String(row['Anchor Rule'] || '').trim(),
  }
}

/** @type {ReturnType<typeof normalizeMatrixRow>[]} */
export const EXCEL_LINK_MATRIX = matrixRows.map(normalizeMatrixRow)

/** @type {Map<string, ReturnType<typeof normalizeMatrixRow>[]>} */
const matrixBySource = new Map()

for (const row of EXCEL_LINK_MATRIX) {
  if (!row.sourcePath || !row.destinationPath) continue
  const bucket = matrixBySource.get(row.sourcePath) || []
  bucket.push(row)
  matrixBySource.set(row.sourcePath, bucket)
}

for (const [source, rows] of matrixBySource.entries()) {
  rows.sort((a, b) => {
    const pa = PLACEMENT_ORDER[a.placement] ?? 99
    const pb = PLACEMENT_ORDER[b.placement] ?? 99
    return pa - pb
  })
  matrixBySource.set(source, rows)
}

export const EXCEL_MASTER_PATHS = pageMasterRows
  .map((row) => normalizeExcelPath(row.URL))
  .filter(Boolean)

export const EXCEL_MASTER_PATH_SET = new Set(EXCEL_MASTER_PATHS)

export const MATRIX_STATS = {
  totalRows: EXCEL_LINK_MATRIX.length,
  uniqueSources: matrixBySource.size,
  duplicatePairs: countDuplicatePairs(),
}

function countDuplicatePairs() {
  const seen = new Set()
  let dupes = 0
  for (const row of EXCEL_LINK_MATRIX) {
    const key = `${row.sourcePath}->${row.destinationPath}`
    if (seen.has(key)) dupes += 1
    seen.add(key)
  }
  return dupes
}

/**
 * @param {string} sourcePath
 * @param {{ limit?: number, validDestinations?: Set<string> }} [options]
 */
export function getExcelMatrixLinks(sourcePath, options = {}) {
  const normalized = normalizeExcelPath(sourcePath)
  const limit = options.limit ?? PAGE_LINK_LIMITS.service
  const validDestinations = options.validDestinations
  const rows = matrixBySource.get(normalized) || []

  const links = []
  const seenDest = new Set()

  for (const row of rows) {
    if (!row.destinationPath || seenDest.has(row.destinationPath)) continue
    if (row.destinationPath === normalized) continue
    if (validDestinations && !validDestinations.has(row.destinationPath)) continue

    seenDest.add(row.destinationPath)
    links.push({
      href: row.destinationPath,
      anchorText: row.anchorText,
      placement: row.placement,
      why: row.why,
      source: 'excel-matrix',
    })

    if (links.length >= limit) break
  }

  return links
}

export function getExcelMatrixLinksForSource(sourcePath) {
  return matrixBySource.get(normalizeExcelPath(sourcePath)) || []
}

export function getAllMatrixSources() {
  return [...matrixBySource.keys()]
}

/**
 * @param {string[]} livePaths
 */
export function getUrlAlignmentReport(livePaths) {
  const liveSet = new Set(livePaths.map(normalizeExcelPath))
  const excelSet = EXCEL_MASTER_PATH_SET

  const liveAndInExcel = [...liveSet].filter((p) => excelSet.has(p)).sort()
  const liveNotInExcel = [...liveSet].filter((p) => !excelSet.has(p)).sort()
  const inExcelNotLive = [...excelSet].filter((p) => !liveSet.has(p)).sort()

  return {
    liveCount: liveSet.size,
    excelCount: excelSet.size,
    liveAndInExcel,
    liveNotInExcel,
    inExcelNotLive,
    alignmentPercent: Math.round((liveAndInExcel.length / excelSet.size) * 100),
  }
}

/**
 * @param {Set<string>} livePathSet
 */
export function getInvalidMatrixDestinations(livePathSet) {
  const invalid = new Set()
  for (const row of EXCEL_LINK_MATRIX) {
    if (!livePathSet.has(row.destinationPath)) {
      invalid.add(row.destinationPath)
    }
  }
  return [...invalid].sort()
}

/**
 * @param {Set<string>} livePathSet
 */
export function getOrphanPaths(livePathSet) {
  const inbound = new Map()
  for (const path of livePathSet) inbound.set(path, 0)

  for (const row of EXCEL_LINK_MATRIX) {
    if (!livePathSet.has(row.sourcePath) || !livePathSet.has(row.destinationPath)) continue
    inbound.set(row.destinationPath, (inbound.get(row.destinationPath) || 0) + 1)
  }

  return [...livePathSet]
    .filter((path) => path !== '/' && (inbound.get(path) || 0) === 0)
    .sort()
}

export function inferPageType(path) {
  const normalized = normalizeExcelPath(path)
  if (normalized === '/') return 'homepage'
  if (normalized.startsWith('/services/')) {
    const hubSlugs = ['seo', 'digital-marketing', 'paid-advertising', 'design-and-development']
    const slug = normalized.replace('/services/', '')
    return hubSlugs.includes(slug) ? 'hub' : 'service'
  }
  if (normalized.startsWith('/blog/')) return 'blog'
  if (normalized.startsWith('/industries/')) return normalized === '/industries' ? 'core' : 'industry'
  if (normalized.startsWith('/seo-services/')) return 'city'
  if (normalized.startsWith('/solution/')) return 'solution'
  return 'core'
}

export function getPageLinkLimit(path) {
  return PAGE_LINK_LIMITS[inferPageType(path)] ?? PAGE_LINK_LIMITS.core
}

/** Homepage hub destinations from Excel matrix */
export const HOMEPAGE_HUB_PATHS = [
  { href: '/services/seo', title: 'SEO Services', anchorText: 'SEO services' },
  { href: '/blog', title: 'SEO Insights & Guides', anchorText: 'SEO insights' },
  { href: '/industries', title: 'SEO Services by Industry', anchorText: 'SEO by industry' },
  { href: '/seo-packages', title: 'SEO Packages', anchorText: 'SEO packages' },
]

const SOLUTION_DEFAULT_PATHS = {
  automation: ['/services/digital-marketing', '/services/seo', '/services/ppc-advertising', '/blog', '/contact-us'],
  workflow: ['/services/digital-marketing', '/services/seo', '/services/content-marketing', '/blog', '/contact-us'],
  'promotion-and-ads': ['/services/ppc-advertising', '/services/seo', '/services/digital-marketing', '/blog', '/contact-us'],
  'crm-and-tools': ['/services/digital-marketing', '/services/seo', '/solution/automation', '/blog', '/contact-us'],
  'market-research': ['/services/digital-marketing', '/services/seo', '/services/content-marketing', '/blog', '/contact-us'],
  'website-creation': ['/services/design-and-development', '/services/seo', '/services/ui-ux-design', '/blog', '/contact-us'],
}

export function getSolutionSeedPaths(solutionSlug) {
  return SOLUTION_DEFAULT_PATHS[solutionSlug] || SOLUTION_DEFAULT_PATHS.automation
}
