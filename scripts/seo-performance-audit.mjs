#!/usr/bin/env node
/**
 * SEO performance audit — static on-page + sitemap analysis per URL.
 * Does NOT access GSC/GA4 APIs. Run: npm run seo:performance-audit
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs'
import { join, dirname, relative } from 'path'
import { fileURLToPath } from 'url'
import { getSitemapPathsForScripts } from './sitemap-paths.mjs'
import { normalizeExcelPath } from '../utils/seo/excelLinkMatrix.js'
import { getPageSeo } from '../utils/pageSeoRegistry.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const docsDir = join(root, 'docs', 'seo-master-plan')
const reportDir = join(docsDir, 'audit-reports')
mkdirSync(reportDir, { recursive: true })

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(entry.name)) continue
      walk(full, files)
    } else if (/\.(js|jsx)$/.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

function inferPageType(path) {
  if (path === '/') return 'homepage'
  if (path.startsWith('/services/')) return 'service'
  if (path.startsWith('/blog/')) return path === '/blog' ? 'blog' : 'blog'
  if (path.startsWith('/industries/')) return 'industry'
  if (path.startsWith('/seo-services/')) return 'city'
  if (path.startsWith('/solution/')) return 'solution'
  return 'core'
}

function getPrimaryTopic(path, pageType) {
  if (pageType === 'service') return path.replace('/services/', '')
  if (pageType === 'blog' && path !== '/blog') return path.replace('/blog/', '')
  if (pageType === 'industry' && path !== '/industries') return path.replace('/industries/', '')
  if (pageType === 'city') return path.replace('/seo-services/', '').replace('seo-services-in-', '')
  if (pageType === 'solution') return path.replace('/solution/', '')
  return path === '/' ? 'homepage' : path.replace(/^\//, '')
}

const livePaths = getSitemapPathsForScripts().map(normalizeExcelPath).sort()
const sourceFiles = walk(join(root, 'pages')).concat(walk(join(root, 'component')))

const rows = livePaths.map((path) => {
  const pageType = inferPageType(path)
  const seo = getPageSeo(path)
  const inSitemap = true
  const hasTitle = Boolean(seo?.title)
  const hasDescription = Boolean(seo?.description)

  return {
    url: path,
    page_type: pageType,
    primary_topic: getPrimaryTopic(path, pageType),
    title: seo?.title || 'SOURCE REQUIRED',
    meta_description: hasDescription ? 'yes' : 'missing',
    sitemap: inSitemap ? 'yes' : 'no',
    indexability: path === '/new' || path === '/old' ? 'noindex' : 'index',
    clicks: 'GSC_REQUIRED',
    impressions: 'GSC_REQUIRED',
    ctr: 'GSC_REQUIRED',
    avg_position: 'GSC_REQUIRED',
    organic_sessions: 'GA4_REQUIRED',
    conversions: 'GA4_REQUIRED',
  }
})

const byType = {}
for (const r of rows) {
  byType[r.page_type] = (byType[r.page_type] || 0) + 1
}

const md = `# SEO Performance Audit — Landing Page Report Structure

**Generated:** ${new Date().toISOString().slice(0, 10)}  
**URLs audited:** ${rows.length}  
**Data source:** Static codebase + sitemap (no live GSC/GA4)

## Summary by Page Type

| Page Type | Count |
|-----------|-------|
${Object.entries(byType).sort().map(([k, v]) => `| ${k} | ${v} |`).join('\n')}

## Metrics Legend

| Column | Source |
|--------|--------|
| clicks, impressions, CTR, avg_position | Google Search Console — **GSC_REQUIRED** |
| organic_sessions, conversions | GA4 via GTM — **GA4_REQUIRED** |

## Landing Pages

| URL | Page Type | Primary Topic | Title | Meta | Sitemap | Index |
|-----|-----------|---------------|-------|------|---------|-------|
${rows.map((r) => `| ${r.url} | ${r.page_type} | ${r.primary_topic} | ${r.title.length > 40 ? r.title.slice(0, 37) + '...' : r.title} | ${r.meta_description} | ${r.sitemap} | ${r.indexability} |`).join('\n')}

## Notes

- Populate GSC/GA4 columns from external dashboards — do not invent values.
- Pages without registry title use dynamic SEO from page components.
- Run \`npm run seo:audit-technical\` for crawl/schema/canonical issues.
`

writeFileSync(join(docsDir, 'seo-performance-audit.md'), md)
writeFileSync(join(reportDir, 'seo-performance-audit-latest.json'), JSON.stringify({ generated: new Date().toISOString(), count: rows.length, byType, rows }, null, 2))

console.log(`SEO performance audit: ${rows.length} URLs`)
console.log('Wrote seo-performance-audit.md')
