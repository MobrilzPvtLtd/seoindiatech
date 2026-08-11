/**
 * Primary keyword → canonical URL mapping.
 * One ranking URL per cluster. Do not duplicate targets across pages.
 */

export const KEYWORD_CANONICAL_MAP = [
  {
    canonicalUrl: '/services/seo',
    pageType: 'service-hub',
    primaryKeywords: [
      'seo india',
      'seo in india',
      'india seo',
      'seo india services',
      'india seo services',
      'indian seo services',
      'seo agency in india',
      'indian seo agency',
      'seo firm india',
      'best seo firm in india',
      'top seo agency in india',
      'professional seo india',
      'seo agency india',
      'seo services india',
      'professional seo services india',
      'seo marketing india',
      'seo marketing in india',
      'expert seo services india',
      'seo consultancy india',
      'seo consulting services india',
      'search engine optimisation india',
      'search engine optimization services in india',
      'india seo service',
      'seo services agency in india',
      'indian seo company',
      'seo india company',
      'the seo company india',
      'india seo firm',
    ],
    notes: 'Primary commercial SEO hub. Homepage and contact page link here; they do not target these terms as primary.',
  },
  {
    canonicalUrl: '/services/local-seo-service',
    pageType: 'service',
    primaryKeywords: [
      'local seo india',
      'local seo services',
      'local seo services in india',
      'local seo company india',
      'local seo agency india',
    ],
  },
  {
    canonicalUrl: '/services/social-media-marketing',
    pageType: 'service',
    primaryKeywords: ['social media marketing in india', 'social media marketing service in india'],
  },
  {
    canonicalUrl: '/services/technical-seo',
    pageType: 'service',
    primaryKeywords: [
      'technical seo services india',
      'technical seo company india',
      'technical seo agency india',
      'technical seo consultant india',
      'technical seo services',
    ],
  },
  {
    canonicalUrl: '/services/content-marketing',
    pageType: 'service',
    primaryKeywords: ['content marketing services india', 'content marketing services in india'],
  },
  {
    canonicalUrl: '/services/e-commerce-seo',
    pageType: 'service',
    primaryKeywords: ['woocommerce seo agency in india'],
    aliasRedirects: ['/services/woocommerce-seo'],
  },
  {
    canonicalUrl: '/services/international-seo',
    pageType: 'service',
    primaryKeywords: ['international seo agency india', 'international seo services india', 'seo firm india for global businesses'],
  },
  {
    canonicalUrl: '/services/ui-ux-design',
    pageType: 'service',
    primaryKeywords: ['seo website design company in india', 'web design seo company india'],
    aliasRedirects: ['/services/seo-web-design'],
  },
  {
    canonicalUrl: '/solution/crm-and-tools',
    pageType: 'solution',
    primaryKeywords: ['india crm', 'seo crm system'],
  },
  {
    canonicalUrl: '/industries/optometrist-seo',
    pageType: 'industry',
    primaryKeywords: ['seo for optometrists', 'optometrist seo', 'eye care seo'],
  },
  {
    canonicalUrl: '/industries/wineries-seo',
    pageType: 'industry',
    primaryKeywords: ['seo for wineries', 'winery seo', 'seo wineries', 'search engine optimization for wineries'],
  },
  {
    canonicalUrl: '/seo-services/seo-services-in-noida',
    pageType: 'city',
    primaryKeywords: ['seo company noida sector 63', 'seo company in noida sector 63'],
    aliasRedirects: ['/locations/noida'],
  },
  {
    canonicalUrl: '/seo-services/seo-services-in-delhi',
    pageType: 'city',
    primaryKeywords: ['indian seo company in delhi', 'search engine optimization services delhi'],
    aliasRedirects: ['/locations/delhi'],
  },
]

export function getCanonicalUrlForPath(path) {
  const normalized = path?.split('?')[0].replace(/\/+$/, '') || '/'
  const row = KEYWORD_CANONICAL_MAP.find((r) => r.canonicalUrl === normalized)
  return row || null
}

export function getAllAliasRedirects() {
  const redirects = []
  for (const row of KEYWORD_CANONICAL_MAP) {
    for (const alias of row.aliasRedirects || []) {
      redirects.push({ source: alias, destination: row.canonicalUrl })
    }
  }
  return redirects
}
