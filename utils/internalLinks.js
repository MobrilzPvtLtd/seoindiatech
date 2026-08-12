/**
 * Central internal linking catalog and helpers.
 * Use for nav-adjacent sections, related links, and contextual cross-linking.
 */
import { BLOG_CATALOG } from './blog/premium/blogCatalog.js'
import { buildCatalogEntries } from './industries/catalog.js'
import { SERVICE_CATALOG } from './services/premium/serviceCatalog.js'
import {
  getExcelMatrixLinks,
  getPageLinkLimit,
  getSolutionSeedPaths,
  HOMEPAGE_HUB_PATHS,
  inferPageType,
} from './seo/excelLinkMatrix.js'

export const LOCATION_CITIES = [
  { name: 'Delhi', slug: 'seo-services-in-delhi' },
  { name: 'Mumbai', slug: 'seo-services-in-mumbai' },
  { name: 'Bangalore', slug: 'seo-services-in-bangalore' },
  { name: 'Chennai', slug: 'seo-services-in-chennai' },
  { name: 'Hyderabad', slug: 'seo-services-in-hyderabad' },
  { name: 'Pune', slug: 'seo-services-in-pune' },
  { name: 'Noida', slug: 'seo-services-in-noida' },
  { name: 'Gurgaon', slug: 'seo-services-in-gurgaon' },
  { name: 'Chandigarh', slug: 'seo-services-in-chandigarh' },
  { name: 'Jaipur', slug: 'seo-services-in-jaipur' },
  { name: 'Kolkata', slug: 'seo-services-in-kolkata' },
]

export const INTERNAL_LINK_CATALOG = [
  {
    href: '/services/seo',
    title: 'SEO Services',
    description: 'Technical SEO, content, and link building for sustainable organic growth.',
  },
  {
    href: '/services/local-seo-service',
    title: 'Local SEO Services',
    description: 'Map pack visibility, city pages, and citation management for service businesses.',
  },
  {
    href: '/services/ai-seo',
    title: 'AI SEO Services',
    description: 'Visibility in Google AI Overviews, ChatGPT, and generative search results.',
  },
  {
    href: '/services/gbp-optimization',
    title: 'Google Business Profile Optimization',
    description: 'Categories, reviews, posts, and conversion tracking for GBP.',
  },
  {
    href: '/services/generative-engine-optimization',
    title: 'Generative Engine Optimization',
    description: 'Entity signals and answer blocks for AI citation discovery.',
  },
  {
    href: '/services/content-marketing',
    title: 'Content Marketing',
    description: 'SEO content strategy, blogs, and topic clusters that attract qualified leads.',
  },
  {
    href: '/services/e-commerce-seo',
    title: 'E-Commerce SEO',
    description: 'Product and category page optimization for WooCommerce and online stores.',
  },
  {
    href: '/services/technical-seo',
    title: 'Technical SEO Services',
    description: 'Crawlability, Core Web Vitals, indexation, and structured data for reliable rankings.',
  },
  {
    href: '/services/international-seo',
    title: 'International SEO',
    description: 'Global SEO for Indian businesses targeting USA, UK, Europe, and export markets.',
  },
  {
    href: '/services/ppc-advertising',
    title: 'PPC Advertising',
    description: 'High-intent paid campaigns aligned with organic landing pages.',
  },
  {
    href: '/services/online-reputation-management',
    title: 'Online Reputation Management',
    description: 'Review monitoring, brand sentiment, and reputation repair for local and national brands.',
  },
  {
    href: '/services/app-store-optimization',
    title: 'App Store Optimization',
    description: 'ASO for iOS and Android — metadata, ratings, and conversion optimization.',
  },
  {
    href: '/services/answer-engine-optimization',
    title: 'Answer Engine Optimization',
    description: 'Structured answers for AI search, featured snippets, and voice assistants.',
  },
  {
    href: '/industries',
    title: 'Industry SEO Programs',
    description: 'Tailored SEO for 41 business verticals worldwide.',
  },
  {
    href: '/blog',
    title: 'SEO Insights Blog',
    description: 'Practical guides on SEO, local search, AI visibility, and digital marketing.',
  },
  {
    href: '/seo-packages',
    title: 'SEO Packages',
    description: 'Transparent monthly packages with clear deliverables.',
  },
  {
    href: '/contact-us',
    title: 'Free SEO Audit',
    description: 'Get a customized roadmap with timelines and KPIs.',
  },
]

const CATEGORY_SERVICE_LINKS = {
  'popular-markets': [
    '/services/local-seo-service',
    '/services/gbp-optimization',
    '/services/content-marketing',
    '/services/online-reputation-management',
    '/services/ai-seo',
  ],
  'automobile-home': [
    '/services/local-seo-service',
    '/services/gbp-optimization',
    '/services/ppc-advertising',
    '/services/small-business-seo',
    '/services/content-marketing',
  ],
  'food-health': [
    '/services/local-seo-service',
    '/services/content-marketing',
    '/services/social-media-marketing',
    '/services/online-reputation-management',
    '/services/seo',
  ],
  'service-sector': [
    '/services/local-seo-service',
    '/services/seo',
    '/services/ppc-advertising',
    '/services/content-marketing',
    '/services/small-business-seo',
  ],
}

const SERVICE_INDUSTRY_LINKS = {
  'local-seo-service': ['plumber-seo', 'hvac-seo', 'dentist-seo', 'realtor-seo', 'locksmith-service-seo'],
  'ai-seo': ['plastic-surgery-seo', 'doctor-physician-seo', 'personal-injury-seo', 'realtor-seo'],
  'gbp-optimization': ['dentist-seo', 'hvac-seo', 'plumber-seo', 'catering-seo'],
  'generative-engine-optimization': ['plastic-surgery-seo', 'doctor-physician-seo', 'realtor-seo'],
  'answer-engine-optimization': ['dentist-seo', 'personal-injury-seo', 'cpa-firm-seo'],
  'content-marketing': ['realtor-seo', 'dentist-seo', 'personal-injury-seo', 'architect-seo'],
  'ppc-advertising': ['realtor-seo', 'hvac-seo', 'personal-injury-seo', 'e-commerce-seo'],
  'small-business-seo': ['plumber-seo', 'dentist-seo', 'accountants-seo', 'dry-cleaner-seo'],
  'e-commerce-seo': ['herbal-product-seo', 'cabinet-manufacturer-seo'],
  seo: ['realtor-seo', 'dentist-seo', 'hvac-seo', 'plastic-surgery-seo'],
  'digital-marketing': ['realtor-seo', 'dentist-seo', 'breweries-seo'],
  'online-reputation-management': ['dentist-seo', 'plastic-surgery-seo', 'doctor-physician-seo'],
}

const SERVICE_BLOG_SLUGS = {
  'local-seo-service': ['local-seo-checklist-multi-location-europe', 'google-business-profile-optimization-guide', 'seo-checklist-small-businesses-europe'],
  'ai-seo': ['ai-seo-vs-traditional-seo-2026', 'google-ai-overviews-changing-business-seo', 'geo-generative-engine-optimization-guide'],
  'generative-engine-optimization': ['geo-generative-engine-optimization-guide', 'chatgpt-seo-ai-search-organic-traffic'],
  'gbp-optimization': ['google-business-profile-optimization-guide', 'local-seo-checklist-multi-location-europe'],
  seo: ['seo-trends-european-businesses-2026', '100-seo-mistakes-costing-business-leads', 'link-building-guide-2026'],
  'content-marketing': ['content-marketing-strategy-qualified-leads', 'complete-eeat-guide-business-websites'],
  'ppc-advertising': ['seo-roi-calculator-measure-success', 'local-vs-national-vs-international-seo'],
  'app-store-optimization': ['ecommerce-seo-checklist-india', 'seo-trends-european-businesses-2026'],
  'online-reputation-management': ['google-business-profile-optimization-guide', 'complete-eeat-guide-business-websites'],
  'technical-seo': ['technical-seo-checklist-enterprise-websites', 'seo-trends-european-businesses-2026'],
}

const catalogByHref = new Map(INTERNAL_LINK_CATALOG.map((item) => [item.href, item]))
const industryEntries = buildCatalogEntries()
const industryBySlug = new Map(industryEntries.map((e) => [e.slug, e]))
const serviceBySlug = new Map(SERVICE_CATALOG.map((s) => [s.slug, s]))
const blogBySlug = new Map(BLOG_CATALOG.map((b) => [b.slug, b]))

function linkFromHref(href) {
  if (catalogByHref.has(href)) return catalogByHref.get(href)
  if (href.startsWith('/industries/')) {
    const slug = href.replace('/industries/', '')
    const entry = industryBySlug.get(slug)
    if (entry) {
      return {
        href,
        title: entry.title,
        description: `Specialized SEO for ${entry.label.toLowerCase()} businesses.`,
      }
    }
  }
  if (href.startsWith('/services/')) {
    const slug = href.replace('/services/', '')
    const entry = serviceBySlug.get(slug)
    if (entry) {
      return {
        href,
        title: entry.name,
        description: entry.shortDescription || `Learn more about ${entry.name}.`,
      }
    }
  }
  if (href.startsWith('/blog/')) {
    const slug = href.replace('/blog/', '')
    const entry = blogBySlug.get(slug)
    if (entry) {
      return {
        href,
        title: entry.title,
        description: entry.metaTitle || entry.title,
      }
    }
  }
  if (href.startsWith('/seo-services/')) {
    const city = href.replace('/seo-services/seo-services-in-', '').replace(/-/g, ' ')
    const name = city.replace(/\b\w/g, (c) => c.toUpperCase())
    return {
      href,
      title: `SEO Services in ${name}`,
      description: `Local SEO and digital marketing support for businesses in ${name}.`,
    }
  }
  return null
}

function dedupeLinks(links) {
  const seen = new Set()
  return links.filter((item) => {
    if (!item?.href || seen.has(item.href)) return false
    seen.add(item.href)
    return true
  })
}

function titleFromAnchor(anchorText, fallback) {
  if (!anchorText) return fallback
  const cleaned = anchorText.trim()
  if (!cleaned) return fallback
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
}

function mergeWithExcel(existing, sourcePath, limit) {
  const existingHrefs = new Set(existing.map((item) => item.href))
  const excelLinks = getExcelMatrixLinks(sourcePath, { limit: limit * 2 })
    .filter((item) => !existingHrefs.has(item.href))
    .map((item) => {
      const base = linkFromHref(item.href)
      if (!base) return null
      return {
        ...base,
        title: titleFromAnchor(item.anchorText, base.title),
        matrixAnchor: item.anchorText,
        placement: item.placement,
        source: item.source,
      }
    })
    .filter(Boolean)

  return dedupeLinks([...existing, ...excelLinks]).slice(0, limit)
}

function resolveHrefs(hrefs) {
  return dedupeLinks(hrefs.map((href) => linkFromHref(href)).filter(Boolean))
}

export function getIndustryInternalLinks(entry) {
  const sourcePath = `/industries/${entry.slug}`
  const limit = getPageLinkLimit(sourcePath)
  const categoryHrefs = CATEGORY_SERVICE_LINKS[entry.categoryId] || [
    '/services/local-seo-service',
    '/services/seo',
    '/services/ai-seo',
  ]

  const peerSlugs = industryEntries
    .filter((e) => e.categoryId === entry.categoryId && e.slug !== entry.slug)
    .slice(0, 3)
    .map((e) => `/industries/${e.slug}`)

  const locationHref = '/seo-services/seo-services-in-noida'

  const base = dedupeLinks([
    ...resolveHrefs(categoryHrefs.slice(0, 5)),
    ...resolveHrefs(peerSlugs),
    linkFromHref('/industries'),
    linkFromHref('/blog'),
    linkFromHref(locationHref),
    linkFromHref('/seo-packages'),
    linkFromHref('/contact-us'),
  ])

  return mergeWithExcel(base, sourcePath, limit)
}

export function getServiceInternalLinks(serviceSlug) {
  const sourcePath = `/services/${serviceSlug}`
  const limit = getPageLinkLimit(sourcePath)
  const industrySlugs = SERVICE_INDUSTRY_LINKS[serviceSlug] || ['realtor-seo', 'dentist-seo', 'hvac-seo']
  const industryHrefs = industrySlugs.slice(0, 4).map((s) => `/industries/${s}`)

  const blogSlugs = SERVICE_BLOG_SLUGS[serviceSlug] || ['seo-trends-european-businesses-2026']
  const blogHrefs = blogSlugs.slice(0, 2).map((s) => `/blog/${s}`)

  const relatedServices = SERVICE_CATALOG.filter((s) => s.slug !== serviceSlug)
    .slice(0, 2)
    .map((s) => s.path || `/services/${s.slug}`)

  const base = dedupeLinks([
    ...resolveHrefs(relatedServices),
    ...resolveHrefs(industryHrefs),
    ...resolveHrefs(blogHrefs),
    linkFromHref('/industries'),
    linkFromHref('/seo-services/seo-services-in-delhi'),
    linkFromHref('/seo-packages'),
    linkFromHref('/blog'),
    linkFromHref('/contact-us'),
  ])

  return mergeWithExcel(base, sourcePath, limit)
}

export function getHubInternalLinks(hubSlug) {
  const sourcePath = `/services/${hubSlug}`
  const limit = getPageLinkLimit(sourcePath)
  const seoHubExtras =
    hubSlug === 'seo'
      ? resolveHrefs([
          '/services/technical-seo',
          '/services/local-seo-service',
          '/services/international-seo',
          '/services/e-commerce-seo',
          '/services/content-marketing',
          '/services/ai-seo',
          '/seo-services/seo-services-in-delhi',
          '/seo-services/seo-services-in-noida',
          '/industries',
          '/industries/wineries-seo',
          '/industries/optometrist-seo',
          '/industries/accountants-seo',
          '/industries/doctor-physician-seo',
        ])
      : []
  const base = dedupeLinks([
    ...seoHubExtras,
    ...resolveHrefs(['/services/seo', '/services/digital-marketing', '/services/local-seo-service', '/services/ai-seo']),
    linkFromHref('/industries'),
    linkFromHref('/blog'),
    linkFromHref(`/services/${hubSlug}`),
    linkFromHref('/seo-packages'),
    linkFromHref('/contact-us'),
  ])

  return mergeWithExcel(base, sourcePath, limit)
}

export function getHomepageHubLinks() {
  return HOMEPAGE_HUB_PATHS.map((item) => {
    const base = linkFromHref(item.href)
    return {
      ...base,
      title: item.title,
      description: base?.description || `Explore ${item.title.toLowerCase()} from SEO India Tech.`,
      matrixAnchor: item.anchorText,
    }
  }).filter(Boolean)
}

export function getSolutionInternalLinks(solutionSlug) {
  const sourcePath = `/solution/${solutionSlug}`
  const limit = getPageLinkLimit(sourcePath)
  const seedPaths = getSolutionSeedPaths(solutionSlug)

  const base = dedupeLinks([
    ...resolveHrefs(seedPaths),
    linkFromHref('/seo-packages'),
    linkFromHref('/industries'),
  ])

  return mergeWithExcel(base, sourcePath, limit)
}

export function getLocationInternalLinks(currentSlug) {
  const sourcePath = `/seo-services/${currentSlug}`
  const limit = getPageLinkLimit(sourcePath)
  const otherCities = LOCATION_CITIES.filter((c) => c.slug !== currentSlug)
    .slice(0, 5)
    .map((c) => `/seo-services/${c.slug}`)

  const services = mergeWithExcel(
    resolveHrefs([
      '/services/local-seo-service',
      '/services/seo',
      '/services/gbp-optimization',
      '/services/small-business-seo',
    ]),
    sourcePath,
    Math.min(6, limit)
  )

  const industries = mergeWithExcel(
    resolveHrefs([
      '/industries/dentist-seo',
      '/industries/realtor-seo',
      '/industries/hvac-seo',
      '/industries/plumber-seo',
    ]),
    sourcePath,
    4
  )

  const resources = mergeWithExcel(
    resolveHrefs([
      '/seo-packages',
      '/blog/google-business-profile-optimization-guide',
      '/blog/local-seo-guide-indian-businesses-2026',
      '/contact-us',
    ]),
    sourcePath,
    4
  )

  return {
    services: services.slice(0, 6),
    industries: industries.slice(0, 4),
    cities: resolveHrefs(otherCities).slice(0, 5),
    resources: resources.slice(0, 4),
  }
}

export function getBlogRelatedResources(post, allPosts = []) {
  const sourcePath = `/blog/${post.slug}`
  const limit = getPageLinkLimit(sourcePath)
  const postBySlug = new Map(allPosts.map((p) => [p.slug, p]))

  const services = resolveHrefs(post.serviceLinks || [])
  const industries = resolveHrefs((post.industryLinks || []).map((href) => href))

  const related = (post.relatedSlugs || post.relatedBlogSlugs || [])
    .map((slug) => postBySlug.get(slug))
    .filter(Boolean)
    .slice(0, 4)
    .map((p) => ({
      href: `/blog/${p.slug}`,
      title: p.title,
      description: p.metaDesc || p.desc || p.title,
    }))

  if (related.length < 3) {
    const fillers = BLOG_CATALOG.filter((b) => b.slug !== post.slug && !related.some((r) => r.href === `/blog/${b.slug}`))
      .slice(0, 4 - related.length)
      .map((b) => ({
        href: `/blog/${b.slug}`,
        title: b.title,
        description: b.metaTitle,
      }))
    related.push(...fillers)
  }

  const explore = mergeWithExcel(
    resolveHrefs(['/services/seo', '/industries', '/seo-packages', '/contact-us']),
    sourcePath,
    4
  )

  const excelServiceRows = getExcelMatrixLinks(sourcePath, { limit: 6 }).filter((item) =>
    item.href.startsWith('/services/')
  )

  const excelServices = excelServiceRows
    .map((item) => {
      const base = linkFromHref(item.href)
      if (!base) return null
      return {
        ...base,
        title: titleFromAnchor(item.anchorText, base.title),
        matrixAnchor: item.anchorText,
      }
    })
    .filter(Boolean)

  const mergedServices = dedupeLinks([...services, ...excelServices]).slice(0, 4)

  return {
    services: mergedServices,
    industries: industries.slice(0, 3),
    related: dedupeLinks(related).slice(0, 4),
    explore: explore.slice(0, 4),
    matrixLimit: limit,
  }
}

/** Programmatic link output for audit tooling */
export function getProgrammaticLinksForPath(path) {
  const normalized = path.replace(/\/+$/, '') || '/'

  if (normalized === '/') {
    return getHomepageHubLinks()
  }

  if (normalized.startsWith('/services/')) {
    const slug = normalized.replace('/services/', '')
    const hubSlugs = ['seo', 'digital-marketing', 'paid-advertising', 'design-and-development']
    if (hubSlugs.includes(slug)) return getHubInternalLinks(slug)
    return getServiceInternalLinks(slug)
  }

  if (normalized.startsWith('/solution/')) {
    return getSolutionInternalLinks(normalized.replace('/solution/', ''))
  }

  if (normalized.startsWith('/industries/') && normalized !== '/industries') {
    const slug = normalized.replace('/industries/', '')
    const entry = industryBySlug.get(slug)
    if (entry) return getIndustryInternalLinks(entry)
  }

  if (normalized.startsWith('/seo-services/')) {
    const slug = normalized.replace('/seo-services/', '')
    const data = getLocationInternalLinks(slug)
    return dedupeLinks([
      ...(data.services || []),
      ...(data.industries || []),
      ...(data.cities || []),
      ...(data.resources || []),
    ])
  }

  if (normalized.startsWith('/blog/')) {
    const slug = normalized.replace('/blog/', '')
    const catalogEntry = blogBySlug.get(slug)
    if (catalogEntry) {
      const mockPost = {
        slug,
        serviceLinks: catalogEntry.serviceLinks,
        industryLinks: catalogEntry.industryLinks,
        relatedBlogSlugs: catalogEntry.relatedBlogSlugs,
      }
      const data = getBlogRelatedResources(mockPost, [])
      return dedupeLinks([...data.services, ...data.industries, ...data.related, ...data.explore])
    }
  }

  if (inferPageType(normalized) === 'core') {
    return mergeWithExcel(resolveHrefs(['/services/seo', '/blog', '/industries', '/seo-packages', '/contact-us']), normalized, getPageLinkLimit(normalized))
  }

  return []
}
