/**
 * Writes public/sitemap.xml from all indexable routes.
 * Run: npm run generate-sitemap
 */
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { generateSitemapXml } from '../utils/sitemapBuilder.js'
import { getSitemapPathsForScripts } from './sitemap-paths.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const paths = getSitemapPathsForScripts()
const xml = generateSitemapXml(paths)
const outPath = join(root, 'public', 'sitemap.xml')

writeFileSync(outPath, xml, 'utf8')

console.log(`Sitemap generated: ${outPath} (${paths.length} URLs)`)
