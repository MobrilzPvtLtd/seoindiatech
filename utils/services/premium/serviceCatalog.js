/**
 * Canonical catalog for premium service landing pages.
 */
import { serviceCategories } from '../../serviceCategories'

const HUB_SLUG_ALIASES = {
  'paid-advertising': 'pay-per-click',
}

const SERVICE_IMAGES = {
  'local-seo-service': '/images/services/heroes/local-seo-service.svg',
  'ai-seo': '/images/services/heroes/ai-seo.svg',
  'small-business-seo': '/images/services/heroes/small-business-seo.svg',
  'e-commerce-seo': '/images/services/heroes/e-commerce-seo.svg',
  'app-store-optimization': '/images/services/heroes/app-store-optimization.svg',
  'gbp-optimization': '/images/services/heroes/gbp-optimization.svg',
  'generative-engine-optimization': '/images/services/heroes/generative-engine-optimization.svg',
  'answer-engine-optimization': '/images/services/heroes/answer-engine-optimization.svg',
  'digital-branding': '/images/services/heroes/digital-branding.svg',
  'content-marketing': '/images/services/heroes/content-marketing.svg',
  'online-reputation-management': '/images/services/heroes/online-reputation-management.svg',
  'social-media-optimization': '/images/services/heroes/social-media-optimization.svg',
  'ppc-advertising': '/images/services/heroes/ppc-advertising.svg',
  'pay-per-click': '/images/services/heroes/pay-per-click.svg',
  'ui-ux-design': '/images/services/heroes/ui-ux-design.svg',
  'social-media-marketing': '/images/services/heroes/social-media-marketing.svg',
}

function slugFromPath(path) {
  return path.replace(/^\/services\//, '').replace(/\/$/, '')
}

function buildEntries() {
  const entries = []
  const seen = new Set()

  Object.entries(serviceCategories).forEach(([hubSlug, hub]) => {
    hub.services.forEach((service) => {
      const slug = slugFromPath(service.slug)
      if (seen.has(slug)) return
      seen.add(slug)

      entries.push({
        slug,
        path: service.slug.startsWith('/') ? service.slug : `/services/${slug}`,
        name: service.title,
        hubSlug: HUB_SLUG_ALIASES[hubSlug] || hubSlug,
        hubTitle: hub.title,
        hubPath: `/services/${HUB_SLUG_ALIASES[hubSlug] || hubSlug}`,
        shortDescription: service.description,
        features: service.features || [],
        heroImage: SERVICE_IMAGES[slug] || '/images/seo-banner.jpg',
      })
    })
  })

  if (!seen.has('social-media-marketing')) {
    entries.push({
      slug: 'social-media-marketing',
      path: '/services/social-media-marketing',
      name: 'Social Media Marketing',
      hubSlug: 'digital-marketing',
      hubTitle: 'Digital Marketing Services',
      hubPath: '/services/digital-marketing',
      shortDescription:
        'Full-funnel social media marketing that builds brand awareness, engagement, and conversions across Instagram, Facebook, LinkedIn, and YouTube.',
      features: [
        'Platform-native content strategy',
        'Paid social campaign management',
        'Community management',
        'Influencer collaboration support',
      ],
      heroImage: SERVICE_IMAGES['social-media-marketing'],
    })
  }

  return entries
}

export const SERVICE_CATALOG = buildEntries()

export function getServiceEntry(slug) {
  return SERVICE_CATALOG.find((e) => e.slug === slug) || null
}

export function getRelatedServices(slug, limit = 6) {
  const entry = getServiceEntry(slug)
  if (!entry) return []
  return SERVICE_CATALOG.filter((e) => e.hubSlug === entry.hubSlug && e.slug !== slug).slice(0, limit)
}

export const SERVICE_HUB_SLUGS = [...new Set(SERVICE_CATALOG.map((e) => e.hubSlug))]

export const PREMIUM_SERVICE_SLUGS = SERVICE_CATALOG.map((e) => e.slug)
