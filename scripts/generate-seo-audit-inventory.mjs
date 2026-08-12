#!/usr/bin/env node
/**
 * Phase 1 audit helper — generates seo-audit/url-inventory.csv (no site code changes).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { getSitemapPathsForScripts } from './sitemap-paths.mjs'
import { PAGE_SEO } from '../utils/pageSeoRegistry.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'seo-audit')
mkdirSync(outDir, { recursive: true })

const locationsText = readFileSync(join(root, 'utils/locations.js'), 'utf8')
const locationMeta = {}
for (const m of locationsText.matchAll(/slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?description:\s*\n?\s*"([^"]+)"/g)) {
  locationMeta[m[1]] = { title: m[2], description: m[3] }
}
for (const m of locationsText.matchAll(/heading:\s*"([^"]+)"/g)) {
  // heading paired with preceding slug in file order — use simpler approach below
}
// heading by slug blocks
for (const block of locationsText.split(/\n\s*\{/)) {
  const slug = block.match(/slug:\s*"([^"]+)"/)?.[1]
  const heading = block.match(/heading:\s*"([^"]+)"/)?.[1]
  if (slug && heading && locationMeta[slug]) locationMeta[slug].heading = heading
}

const PRIORITY_PATHS = new Set([
  '/',
  '/services/seo',
  '/services/technical-seo',
  '/services/local-seo-service',
  '/services/e-commerce-seo',
  '/industries/wineries-seo',
  '/industries/optometrist-seo',
  '/industries/accountants-seo',
  '/industries/doctor-physician-seo',
  '/contact-us',
])

const serviceOverrides = readFileSync(join(root, 'utils/services/premium/serviceOverrides.js'), 'utf8')
const hubContent = readFileSync(join(root, 'utils/services/premium/seoHubExpandedContent.js'), 'utf8')
const industryOverrides = readFileSync(join(root, 'utils/industries/premium/keywordIndustryOverrides.js'), 'utf8')

function parseBlockTitle(fileText, exportName) {
  const re = new RegExp(`export const ${exportName}[\\s\\S]*?seo:\\s*\\{[\\s\\S]*?title:\\s*['"]([^'"]+)['"]`)
  const m = fileText.match(re)
  return m?.[1] || ''
}

function parseBlockDesc(fileText, exportName) {
  const re = new RegExp(`export const ${exportName}[\\s\\S]*?description:\\s*\\n?\\s*['"]([^'"]+)['"]`)
  const m = fileText.match(re)
  return m?.[1] || ''
}

function parseBlockH1(fileText, exportName) {
  const re = new RegExp(`export const ${exportName}[\\s\\S]*?hero:\\s*\\{[\\s\\S]*?h1:\\s*['"]([^'"]+)['"]`)
  const m = fileText.match(re)
  return m?.[1] || ''
}

const SERVICE_EXPORT_MAP = {
  'local-seo-service': 'localSeoPremium',
  'e-commerce-seo': 'ecommerceSeoPremium',
  'technical-seo': 'technicalSeoPremium',
  'international-seo': 'internationalSeoPremium',
  'content-marketing': 'contentMarketingPremium',
  'social-media-marketing': 'socialMediaMarketingPremium',
  'ui-ux-design': 'uiUxDesignPremium',
  'ai-seo': 'aiSeoPremium',
  'ppc-advertising': 'ppcAdvertisingPremium',
}

const INDUSTRY_EXPORT_MAP = {
  'wineries-seo': 'wineriesSeoPremium',
  'optometrist-seo': 'optometristSeoPremium',
}

function csvEscape(val) {
  const s = String(val ?? '').replace(/"/g, '""').replace(/\n/g, ' ')
  return s.includes(',') || s.includes('"') ? `"${s}"` : s
}

function getPageMeta(path) {
  const registry = PAGE_SEO[path]
  if (registry) {
    return { title: registry.title, description: registry.description, h1: null, schema: 'Registry + page JSON-LD' }
  }
  if (path === '/services/seo') {
    const title = hubContent.match(/seo:\s*\{[\s\S]*?title:\s*'([^']+)'/)?.[1]
    const desc = hubContent.match(/description:\s*\n\s*'([^']+)'/)?.[1]
    const h1 = hubContent.match(/hero:\s*\{[\s\S]*?h1:\s*'([^']+)'/)?.[1]
    return { title, description: desc, h1, schema: 'Service, FAQ, Breadcrumb, HowTo' }
  }
  const serviceMatch = path.match(/^\/services\/([^/]+)$/)
  if (serviceMatch) {
    const slug = serviceMatch[1]
    const exportName = SERVICE_EXPORT_MAP[slug]
    if (exportName) {
      return {
        title: parseBlockTitle(serviceOverrides, exportName),
        description: parseBlockDesc(serviceOverrides, exportName),
        h1: parseBlockH1(serviceOverrides, exportName),
        schema: 'Service, FAQ, Breadcrumb, HowTo',
      }
    }
    return { title: 'Premium hub/service template', description: '', h1: '', schema: 'Service, FAQ' }
  }
  const industryMatch = path.match(/^\/industries\/([^/]+)$/)
  if (industryMatch) {
    const slug = industryMatch[1]
    const exportName = INDUSTRY_EXPORT_MAP[slug]
    if (exportName) {
      return {
        title: parseBlockTitle(industryOverrides, exportName),
        description: parseBlockDesc(industryOverrides, exportName),
        h1: parseBlockH1(industryOverrides, exportName),
        schema: 'Service, FAQ, Breadcrumb',
      }
    }
    return { title: 'Premium industry template', description: '', h1: '', schema: 'Service, FAQ, Breadcrumb' }
  }
  const cityMatch = path.match(/^\/seo-services\/([^/]+)$/)
  if (cityMatch) {
    const loc = locationMeta[cityMatch[1]]
    if (loc) return { title: loc.title, description: loc.description, h1: loc.heading || loc.title, schema: 'Service, FAQ, City' }
  }
  if (path.startsWith('/blog/')) {
    return { title: 'Blog metaTitle', description: 'Blog metaDesc', h1: 'Article H1', schema: 'Article, Breadcrumb' }
  }
  return { title: '', description: '', h1: '', schema: 'WebPage' }
}

function pageType(path) {
  if (path === '/') return 'Homepage'
  if (path === '/contact-us') return 'Contact'
  if (path.startsWith('/services/')) return 'Service'
  if (path.startsWith('/industries/')) return 'Industry'
  if (path.startsWith('/seo-services/')) return 'City'
  if (path.startsWith('/blog/')) return 'Blog'
  if (path === '/blog') return 'Blog hub'
  if (path === '/industries') return 'Industry hub'
  if (path.startsWith('/solution/')) return 'Solution'
  if (['/terms', '/privacy-policy'].includes(path)) return 'Legal'
  if (path === '/who-we-are') return 'About'
  if (path === '/seo-packages') return 'Commercial'
  return 'Other'
}

const paths = getSitemapPathsForScripts()
const rows = [
  'URL,Page Type,Status,Indexable,Canonical,Title,Meta Description,H1,Word Count,Internal Links,Images,Schema,Priority,Recommended Action',
]

for (const path of paths) {
  const meta = getPageMeta(path)
  const priority = PRIORITY_PATHS.has(path) ? 'P0' : path.startsWith('/blog') ? 'P2' : path.startsWith('/industries') ? 'P1' : 'P2'
  let action = 'Monitor'
  if (path === '/') action = 'Optimize for SEO Company India (Phase 4)'
  if (path === '/services/seo') action = 'Primary India commercial hub — maintain'
  if (path === '/services/technical-seo') action = 'Technical SEO cluster page'
  if (path === '/services/local-seo-service') action = 'Local SEO cluster page'
  if (path === '/services/e-commerce-seo') action = 'Ecommerce SEO cluster page'
  if (path === '/industries/wineries-seo') action = 'Preserve and improve — has GSC visibility'
  if (path === '/industries/optometrist-seo') action = 'Industry depth + internal links'
  if (path === '/industries/accountants-seo') action = 'Industry depth + internal links'
  if (path === '/industries/doctor-physician-seo') action = 'Industry depth + internal links'
  if (path === '/contact-us') action = 'Keep enquiry-focused; do not noindex'

  rows.push(
    [
      `https://www.seoindiatech.com${path === '/' ? '' : path}`,
      pageType(path),
      'In sitemap (codebase)',
      'Yes',
      `https://www.seoindiatech.com${path === '/' ? '' : path}`,
      meta.title,
      meta.description,
      meta.h1 || '(rendered in template)',
      'Premium template — variable',
      'Nav + matrix + contextual',
      'next/image + SVG',
      meta.schema,
      priority,
      action,
    ].map(csvEscape).join(',')
  )
}

writeFileSync(join(outDir, 'url-inventory.csv'), rows.join('\n') + '\n', 'utf8')
console.log(`Wrote ${paths.length} URLs to seo-audit/url-inventory.csv`)
