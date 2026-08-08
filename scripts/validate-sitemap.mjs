/**
 * Validates sitemap URLs — only seoindiatech.com domains allowed.
 * Run: npm run check-sitemap
 */
import { buildSitemapUrls, validateSitemapUrls } from '../utils/sitemapBuilder.js'
import { getSitemapPathsForScripts } from './sitemap-paths.mjs'

const paths = getSitemapPathsForScripts()
const urls = buildSitemapUrls(paths)
const errors = validateSitemapUrls(urls)

if (errors.length) {
  console.error('Sitemap validation FAILED:')
  errors.forEach((e) => console.error(`  - ${e}`))
  process.exit(1)
}

console.log(`Sitemap validation passed: ${urls.length} URLs on www.seoindiatech.com only`)
