#!/usr/bin/env node
/**
 * Validate llms.txt against current sitemap/catalog inventory.
 * Run: node scripts/validate-llms-txt.mjs
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { buildSitemapUrls } from '../utils/sitemapBuilder.js'
import { extractUrlsFromLlmsTxt } from '../utils/llmsTxtBuilder.js'
import { getSitemapPublishMode } from '../utils/sitemapWaveConfig.js'
import { getSitemapPathsForScripts } from './sitemap-paths.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const llmsPath = join(root, 'public', 'llms.txt')
const llmsContent = readFileSync(llmsPath, 'utf8')
const llmsUrls = extractUrlsFromLlmsTxt(llmsContent)

const publishMode = getSitemapPublishMode()
const sitemapPaths = getSitemapPathsForScripts()
const sitemapUrls = buildSitemapUrls(sitemapPaths)
const sitemapSet = new Set(sitemapUrls)

const MACHINE_RESOURCES = new Set([
  'https://www.seoindiatech.com/sitemap.xml',
  'https://www.seoindiatech.com/agent-instructions.md',
  'https://www.seoindiatech.com/agents.json',
])

const duplicates = []
const seen = new Set()
for (const url of llmsUrls) {
  if (seen.has(url)) duplicates.push(url)
  seen.add(url)
}

const invalidUrls = []
for (const url of llmsUrls) {
  if (!url.startsWith('https://www.seoindiatech.com')) invalidUrls.push(url)
  if (url.includes('?') || url.includes('#')) invalidUrls.push(url)
  try {
    const u = new URL(url)
    if (u.protocol !== 'https:') invalidUrls.push(url)
  } catch {
    invalidUrls.push(url)
  }
}

const pageUrls = llmsUrls.filter((u) => !MACHINE_RESOURCES.has(u))
const missingFromLlms = sitemapUrls.filter((u) => !llmsUrls.includes(u))
const extraNotInSitemap = pageUrls.filter((u) => !sitemapSet.has(u))

const report = {
  publishMode,
  LLMS_TXT_URL_COUNT: llmsUrls.length,
  SITEMAP_URL_COUNT: sitemapUrls.length,
  PAGE_URL_COUNT_IN_LLMS: pageUrls.length,
  MISSING_FROM_LLMS: missingFromLlms,
  EXTRA_NOT_IN_SITEMAP: extraNotInSitemap,
  DUPLICATES: [...new Set(duplicates)],
  INVALID_URLS: [...new Set(invalidUrls)],
  NON_200_URLS: [],
  categories: {
    core: sitemapPaths.filter((p) => !p.startsWith('/services/') && !p.startsWith('/blog/') && !p.startsWith('/industries/') && !p.startsWith('/seo-services/') && !p.startsWith('/solution/')).length,
    services: sitemapPaths.filter((p) => p.startsWith('/services/')).length,
    solutions: sitemapPaths.filter((p) => p.startsWith('/solution/')).length,
    industries: sitemapPaths.filter((p) => p.startsWith('/industries/')).length,
    cities: sitemapPaths.filter((p) => p.startsWith('/seo-services/')).length,
    blogs: sitemapPaths.filter((p) => p.startsWith('/blog/')).length,
  },
}

let fetchFailures = 0
const FETCH = process.env.LLMS_VALIDATE_FETCH !== '0'

if (FETCH) {
  for (const url of llmsUrls) {
    try {
      const res = await fetch(url, {
        redirect: 'manual',
        headers: { 'User-Agent': 'SIT-Validate-Llms-Txt/1.0' },
      })
      if (res.status !== 200) {
        report.NON_200_URLS.push({ url, status: res.status })
        fetchFailures += 1
      }
    } catch (e) {
      report.NON_200_URLS.push({ url, status: 'ERR', error: e.message })
      fetchFailures += 1
    }
  }
}

const structuralFail =
  missingFromLlms.length > 0 ||
  duplicates.length > 0 ||
  invalidUrls.length > 0 ||
  extraNotInSitemap.length > 0

const fetchFail = FETCH && fetchFailures > 0
report.FINAL_STATUS = structuralFail || fetchFail ? 'FAIL' : 'PASS'

const md = [
  '# llms.txt Validation Report',
  '',
  `**Generated:** ${new Date().toISOString()}`,
  `**Final status:** ${report.FINAL_STATUS}`,
  '',
  '## Counts',
  '',
  `| Metric | Value |`,
  `|--------|-------|`,
  `| Sitemap URLs | ${report.SITEMAP_URL_COUNT} |`,
  `| llms.txt URLs (all links) | ${report.LLMS_TXT_URL_COUNT} |`,
  `| Page URLs in llms.txt | ${report.PAGE_URL_COUNT_IN_LLMS} |`,
  '',
  '## Categories (sitemap)',
  '',
  `| Category | Count |`,
  `|----------|-------|`,
  `| Core + hubs | ${report.categories.core} |`,
  `| Services | ${report.categories.services} |`,
  `| Solutions | ${report.categories.solutions} |`,
  `| Industries | ${report.categories.industries} |`,
  `| City SEO | ${report.categories.cities} |`,
  `| Blogs | ${report.categories.blogs} |`,
  '',
]

if (missingFromLlms.length) {
  md.push('## Missing from llms.txt', '', missingFromLlms.map((u) => `- ${u}`).join('\n'), '')
}
if (duplicates.length) {
  md.push('## Duplicates', '', duplicates.map((u) => `- ${u}`).join('\n'), '')
}
if (invalidUrls.length) {
  md.push('## Invalid URLs', '', invalidUrls.map((u) => `- ${u}`).join('\n'), '')
}
if (extraNotInSitemap.length) {
  md.push('## Extra URLs (not in sitemap)', '', extraNotInSitemap.map((u) => `- ${u}`).join('\n'), '')
}
if (report.NON_200_URLS.length) {
  md.push('## Non-200 URLs', '', report.NON_200_URLS.map((r) => `- ${r.url}: ${r.status}`).join('\n'), '')
}

writeFileSync(join(root, 'seo-audit', 'llms-txt-validation.md'), md.join('\n'))
writeFileSync(join(root, 'seo-audit', 'llms-txt-validation.json'), JSON.stringify(report, null, 2))

console.log('LLMS_TXT_URL_COUNT', report.LLMS_TXT_URL_COUNT)
console.log('SITEMAP_URL_COUNT', report.SITEMAP_URL_COUNT)
console.log('MISSING_FROM_LLMS', report.MISSING_FROM_LLMS.length)
console.log('DUPLICATES', report.DUPLICATES.length)
console.log('INVALID_URLS', report.INVALID_URLS.length)
console.log('NON_200_URLS', report.NON_200_URLS.length)
console.log('FINAL_STATUS', report.FINAL_STATUS)

if (report.FINAL_STATUS === 'FAIL') process.exit(1)
