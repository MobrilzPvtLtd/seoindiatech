/**
 * Validates sitemap URLs — only seoindiatech.com domains allowed.
 * Run: npm run check-sitemap
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import {
  buildSitemapUrls,
  validateSitemapUrls,
  getLastmodForPath,
} from '../utils/sitemapBuilder.js'
import { absoluteUrl } from '../utils/siteConfig.js'
import { getSitemapPublishMode } from '../utils/sitemapWaveConfig.js'
import { getSitemapPathsForScripts } from './sitemap-paths.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const mode = getSitemapPublishMode()
const paths = getSitemapPathsForScripts()
const urls = buildSitemapUrls(paths)
const errors = validateSitemapUrls(urls)

const locMismatches = []
let withLastmod = 0
for (const path of paths) {
  const expected = absoluteUrl(path)
  const actual = path === '/' ? 'https://www.seoindiatech.com' : `https://www.seoindiatech.com${path}`
  if (expected !== actual) locMismatches.push({ path, expected, actual })
  if (getLastmodForPath(path)) withLastmod += 1
}

const xmlNoise = []
const sitemapPath = join(root, 'public', 'sitemap.xml')
try {
  const xml = readFileSync(sitemapPath, 'utf8')
  if (xml.includes('<changefreq>') || xml.includes('<priority>')) {
    xmlNoise.push('sitemap.xml contains changefreq or priority tags')
  }
} catch {
  // generated in postbuild
}

if (errors.length || locMismatches.length || xmlNoise.length) {
  console.error('Sitemap validation FAILED:')
  errors.forEach((e) => console.error(`  - ${e}`))
  locMismatches.forEach((m) =>
    console.error(`  - Loc mismatch for ${m.path}: expected ${m.expected}, got ${m.actual}`)
  )
  xmlNoise.forEach((e) => console.error(`  - ${e}`))
  process.exit(1)
}

const lastmodPct = paths.length ? ((withLastmod / paths.length) * 100).toFixed(1) : '0.0'

const report = {
  generatedAt: new Date().toISOString(),
  publishMode: mode,
  urlCount: urls.length,
  lastmodCount: withLastmod,
  lastmodCoveragePct: Number(lastmodPct),
  changefreqPriorityRemoved: true,
  locAlignment: 'PASS',
  status: 'PASS',
}

writeFileSync(join(root, 'seo-audit', 'sitemap-validation.json'), JSON.stringify(report, null, 2))

console.log(`Sitemap validation passed: ${urls.length} URLs (mode=${mode})`)
console.log(`Lastmod coverage: ${withLastmod}/${paths.length} (${lastmodPct}%)`)
