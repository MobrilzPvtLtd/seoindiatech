import posts from './BlogPost'
import { locations } from './locations'
import { getAllIndustrySlugs } from './industries'

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

/** All indexable paths for sitemap generation. Excludes /new, /old, /api. */
export function getAllSitemapPaths() {
  const blogPaths = posts.map((post) => `/blog/${post.slug}`)
  const industryPaths = getAllIndustrySlugs().map((slug) => `/industries/${slug}`)
  const locationPaths = locations.map((loc) => `/seo-services/${loc.slug}`)

  return [
    ...STATIC_ROUTES,
    ...blogPaths,
    ...industryPaths,
    ...locationPaths,
  ]
}
