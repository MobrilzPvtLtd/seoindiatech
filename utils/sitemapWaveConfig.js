/**
 * Index wave configuration for sitemap, llms.txt, and optional wave filtering.
 * **Production policy:** full indexation — all 115 URLs in sitemap, no content noindex.
 * Wave lists remain for planning/QA only unless SITEMAP_PUBLISH_MODE=indexed_waves is set explicitly.
 */

export const SITEMAP_PUBLISH_MODES = ['all', 'indexed_waves']

/** Locked on full indexation unless SITEMAP_PUBLISH_MODE=indexed_waves is set in deploy env. */
export function getSitemapPublishMode() {
  const mode = process.env.SITEMAP_PUBLISH_MODE || 'all'
  return mode === 'indexed_waves' ? 'indexed_waves' : 'all'
}

/** Content URLs are never noindex under full-indexation policy (default). */
export function shouldNoindexPath(_path) {
  if (getSitemapPublishMode() !== 'indexed_waves') return false
  return isHoldPath(_path)
}

/** Wave 1 — always index (~28 URLs) */
export const WAVE_1_CORE = [
  '/',
  '/who-we-are',
  '/contact-us',
  '/seo-packages',
  '/blog',
  '/industries',
  '/privacy-policy',
  '/terms',
]

export const WAVE_1_SERVICES = [
  '/services/seo',
  '/services/technical-seo',
  '/services/local-seo-service',
  '/services/e-commerce-seo',
  '/services/international-seo',
  '/services/gbp-optimization',
  '/services/ai-seo',
  '/services/generative-engine-optimization',
  '/services/answer-engine-optimization',
  '/services/content-marketing',
  '/services/ppc-advertising',
  '/services/digital-marketing',
]

export const WAVE_1_BLOGS = [
  '/blog/geo-generative-engine-optimization-guide',
  '/blog/chatgpt-seo-ai-search-organic-traffic',
  '/blog/google-ai-overviews-changing-business-seo',
  '/blog/complete-eeat-guide-business-websites',
  '/blog/technical-seo-checklist-enterprise-websites',
  '/blog/google-business-profile-optimization-guide',
  '/blog/seo-law-firms-complete-guide',
  '/blog/local-seo-guide-indian-businesses-2026',
]

/** Wave 1 leftover — index after Wave 1 core is clean in GSC */
export const WAVE_1_LEFTOVER_SERVICES = [
  '/services/paid-advertising',
  '/services/design-and-development',
  '/services/app-store-optimization',
  '/services/digital-branding',
  '/services/online-reputation-management',
  '/services/small-business-seo',
  '/services/social-media-marketing',
  '/services/social-media-optimization',
  '/services/ui-ux-design',
]

export const WAVE_1_LEFTOVER_SOLUTIONS = [
  '/solution/automation',
  '/solution/crm-and-tools',
  '/solution/market-research',
  '/solution/promotion-and-ads',
  '/solution/website-creation',
  '/solution/workflow',
]

/** Wave 2 — industries (after uniqueness test) */
export const WAVE_2_INDUSTRY_SLUGS = [
  'dentist-seo',
  'plastic-surgery-seo',
  'orthodontist-seo',
  'personal-injury-seo',
  'hvac-seo',
  'plumber-seo',
  'realtor-seo',
  'property-management-seo',
  'cpa-firm-seo',
  'roofers-seo',
]

/** Wave 2 — cities (local proof) */
export const WAVE_2_CITY_SLUGS = [
  'seo-services-in-noida',
  'seo-services-in-delhi',
  'seo-services-in-gurgaon',
  'seo-services-in-mumbai',
  'seo-services-in-bangalore',
]

/** Hold — noindex + exclude from sitemap when indexed_waves mode active */
export const HOLD_INDUSTRY_SLUGS = [
  'fertility-clinic-seo',
  'optometrist-seo',
  'doctor-physician-seo',
  'physiotherapy-seo',
  'garage-door-seo',
  'well-drilling-company-seo',
  'fence-installer-seo',
  'deck-builder-seo',
  'cabinet-manufacturer-seo',
  'architect-seo',
  'painter-seo',
  'automotive-seo',
  'locksmith-service-seo',
  'interior-designer-seo',
  'flooring-company-seo',
  'home-builder-and-remodeler-seo',
  'catering-seo',
  'breweries-seo',
  'wineries-seo',
  'herbal-product-seo',
  'chiropractor-seo',
  'movers-and-moving-company-seo',
  'pest-control-service-seo',
  'wildlife-removal-company-seo',
  'sign-company-seo',
  'waste-management-seo',
  'dry-cleaner-seo',
  'tree-care-seo',
  'accountants-seo',
  'pet-service-seo',
  'janitorial-service-seo',
]

export const HOLD_CITY_SLUGS = [
  'seo-services-in-chandigarh',
  'seo-services-in-hyderabad',
  'seo-services-in-jaipur',
  'seo-services-in-pune',
  'seo-services-in-chennai',
  'seo-services-in-kolkata',
]

const HOLD_INDUSTRY_SET = new Set(HOLD_INDUSTRY_SLUGS)
const HOLD_CITY_SET = new Set(HOLD_CITY_SLUGS)
const WAVE_2_INDUSTRY_SET = new Set(WAVE_2_INDUSTRY_SLUGS)
const WAVE_2_CITY_SET = new Set(WAVE_2_CITY_SLUGS)

const INDEXED_WAVES_PATH_SET = new Set([
  ...WAVE_1_CORE,
  ...WAVE_1_SERVICES,
  ...WAVE_1_BLOGS,
  ...WAVE_1_LEFTOVER_SERVICES,
  ...WAVE_1_LEFTOVER_SOLUTIONS,
  ...WAVE_2_INDUSTRY_SLUGS.map((s) => `/industries/${s}`),
  ...WAVE_2_CITY_SLUGS.map((s) => `/seo-services/${s}`),
])

export function getIndexWaveForPath(path) {
  if (WAVE_1_CORE.includes(path) || WAVE_1_SERVICES.includes(path) || WAVE_1_BLOGS.includes(path)) {
    return 'wave1'
  }
  if (WAVE_1_LEFTOVER_SERVICES.includes(path) || WAVE_1_LEFTOVER_SOLUTIONS.includes(path)) {
    return 'wave1_leftover'
  }
  const industryMatch = path.match(/^\/industries\/(.+)$/)
  if (industryMatch) {
    if (HOLD_INDUSTRY_SET.has(industryMatch[1])) return 'hold'
    if (WAVE_2_INDUSTRY_SET.has(industryMatch[1])) return 'wave2'
    return 'industry_other'
  }
  const cityMatch = path.match(/^\/seo-services\/(.+)$/)
  if (cityMatch) {
    if (HOLD_CITY_SET.has(cityMatch[1])) return 'hold'
    if (WAVE_2_CITY_SET.has(cityMatch[1])) return 'wave2'
    return 'city_other'
  }
  if (path.startsWith('/blog/')) return 'blog_other'
  return 'other'
}

export function isHoldPath(path) {
  return getIndexWaveForPath(path) === 'hold'
}

export function filterPathsForSitemap(allPaths, mode = getSitemapPublishMode()) {
  if (mode === 'all') return allPaths
  return allPaths.filter((path) => INDEXED_WAVES_PATH_SET.has(path))
}

export function getHoldIndustrySlugs() {
  return [...HOLD_INDUSTRY_SLUGS]
}

export function getHoldCitySlugs() {
  return [...HOLD_CITY_SLUGS]
}
