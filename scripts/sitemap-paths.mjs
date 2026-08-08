/**
 * Node-safe sitemap path extraction (no Next.js blog imports).
 * Used by validate/generate scripts. Next.js pages use utils/seoRoutes.js.
 */
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const STATIC_ROUTES = [
  '/',
  '/who-we-are',
  '/contact-us',
  '/seo-packages',
  '/blog',
  '/industries',
  '/privacy-policy',
  '/terms',
  '/services/seo',
  '/services/digital-marketing',
  '/services/paid-advertising',
  '/services/design-and-development',
  '/services/ai-seo',
  '/services/answer-engine-optimization',
  '/services/app-store-optimization',
  '/services/content-marketing',
  '/services/digital-branding',
  '/services/e-commerce-seo',
  '/services/gbp-optimization',
  '/services/generative-engine-optimization',
  '/services/local-seo-service',
  '/services/online-reputation-management',
  '/services/ppc-advertising',
  '/services/small-business-seo',
  '/services/social-media-marketing',
  '/services/social-media-optimization',
  '/services/ui-ux-design',
  '/solution/automation',
  '/solution/crm-and-tools',
  '/solution/market-research',
  '/solution/promotion-and-ads',
  '/solution/website-creation',
  '/solution/workflow',
]

function readSource(relPath) {
  return readFileSync(join(root, relPath), 'utf8')
}

function extractBlogPaths() {
  const legacyText = readSource('utils/BlogPost.legacy.js')
  const catalogText = readSource('utils/blog/premium/blogCatalog.js')
  const legacySlugs = [...legacyText.matchAll(/^\s*slug:\s*['"]([^'"]+)['"]/gm)].map((m) => m[1])
  const premiumSlugs = [...catalogText.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
  return [...new Set([...premiumSlugs, ...legacySlugs])].map((slug) => `/blog/${slug}`)
}

function extractIndustryPaths() {
  const text = readSource('utils/industries/industryMedia.js')
  const block = text.match(/INDUSTRY_HERO_SLUGS\s*=\s*\[([\s\S]*?)\]/)
  if (!block) return []
  const slugs = [...block[1].matchAll(/'([^']+)'/g)].map((m) => m[1])
  return slugs.map((slug) => `/industries/${slug}`)
}

function extractLocationPaths() {
  const locationsText = readSource('utils/locations.js')
  const extraText = readSource('utils/extraLocations.js')
  const directSlugs = [...locationsText.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
  const extraSuffixes = [...extraText.matchAll(/buildCityPage\(\s*[^,]+,\s*'([^']+)'/g)].map(
    (m) => `seo-services-in-${m[1]}`
  )
  return [...new Set([...directSlugs, ...extraSuffixes])].map((slug) => `/seo-services/${slug}`)
}

export function getSitemapPathsForScripts() {
  return [
    ...STATIC_ROUTES,
    ...extractBlogPaths(),
    ...extractIndustryPaths(),
    ...extractLocationPaths(),
  ]
}
