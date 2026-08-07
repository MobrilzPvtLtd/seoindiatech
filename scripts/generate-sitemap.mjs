/**
 * Writes public/sitemap.xml from all indexable routes.
 * Run: npm run generate-sitemap
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE_URL = 'https://www.seoindiatech.com'

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

  const allSlugs = [...new Set([...directSlugs, ...extraSuffixes])]
  return allSlugs.map((slug) => `/seo-services/${slug}`)
}

function getAllSitemapPaths() {
  return [
    ...STATIC_ROUTES,
    ...extractBlogPaths(),
    ...extractIndustryPaths(),
    ...extractLocationPaths(),
  ]
}

function generateSitemapXml(paths) {
  const lastmod = new Date().toISOString().split('T')[0]

  const urls = paths
    .map((path) => {
      const loc = path === '/' ? SITE_URL : `${SITE_URL}${path}`
      const priority = path === '/' ? '1.0' : path.startsWith('/blog') ? '0.7' : '0.8'
      const changefreq =
        path === '/' ? 'weekly' : path.startsWith('/blog') ? 'monthly' : 'weekly'

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

const paths = getAllSitemapPaths()
const xml = generateSitemapXml(paths)
const outPath = join(root, 'public', 'sitemap.xml')

writeFileSync(outPath, xml, 'utf8')
console.log(`Sitemap generated: ${outPath} (${paths.length} URLs)`)
