/**
 * Build complete llms.txt from the same path inventory as the sitemap.
 */
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { SITE_URL } from './sitemapBuilder.js'
import { BLOG_CATALOG } from './blog/premium/blogCatalog.js'

const root = dirname(fileURLToPath(import.meta.url))

function parseServicesFromSource() {
  const text = readFileSync(join(root, 'serviceCategories.js'), 'utf8')
  const map = new Map()
  const parts = text.split(/slug:\s*'(\/services\/[^']+)'/g)
  for (let i = 1; i < parts.length; i += 2) {
    const path = parts[i]
    const before = parts[i - 1]
    const after = parts[i + 1] || ''
    const titleMatches = [...before.matchAll(/title:\s*'([^']+)'/g)]
    const title = titleMatches.length ? titleMatches[titleMatches.length - 1][1] : path
    const descMatch = after.match(/description:\s*'((?:\\'|[^'])*)'/)
    if (descMatch) {
      map.set(path, {
        name: title,
        description: descMatch[1].replace(/\\'/g, "'"),
      })
    }
  }
  map.set('/services/social-media-marketing', {
    name: 'Social Media Marketing',
    description:
      'Full-funnel social media marketing that builds brand awareness, engagement, and conversions across Instagram, Facebook, LinkedIn, and YouTube.',
  })
  return map
}

function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function parseIndustriesFromSource() {
  const text = readFileSync(join(root, 'industries', 'catalog.js'), 'utf8')
  const map = new Map()
  const categoryBlocks = [...text.matchAll(/id:\s*'([^']+)'[\s\S]*?items:\s*\[([\s\S]*?)\]/g)]
  const contextMatch = text.match(/const CATEGORY_CONTEXT = ({[\s\S]*?})\n\nexport function toSlug/)
  const contexts = {}
  if (contextMatch) {
    const ctxRe = /'([^']+)':\s*\{[\s\S]*?localFocus:\s*'((?:\\'|[^'])*)'/g
    let cm
    while ((cm = ctxRe.exec(contextMatch[1])) !== null) {
      contexts[cm[1]] = cm[2].replace(/\\'/g, "'")
    }
  }
  for (const block of categoryBlocks) {
    const categoryId = block[1]
    const items = [...block[2].matchAll(/'([^']+)'/g)].map((m) => m[1])
    const localFocus = contexts[categoryId] || 'local and organic search visibility'
    for (const title of items) {
      const slug = toSlug(title)
      const label = title.replace(/\s+SEO$/i, '').trim()
      map.set(slug, { title, label, localFocus })
    }
  }
  return map
}

function parseCityPagesFromSource() {
  const map = new Map()
  const parseFile = (rel) => {
    const text = readFileSync(join(root, rel), 'utf8')
    const blockRe =
      /slug:\s*'(seo-services-in-[^']+)'[\s\S]*?city:\s*'([^']+)'[\s\S]*?description:\s*'((?:\\'|[^'])*)'/g
    let match
    while ((match = blockRe.exec(text)) !== null) {
      const path = `/seo-services/${match[1]}`
      map.set(path, {
        city: match[2],
        description: match[3].replace(/\\'/g, "'"),
      })
    }
  }
  parseFile('locations.js')
  parseFile('extraLocations.js')
  return map
}

const serviceByPath = parseServicesFromSource()
const industryBySlug = parseIndustriesFromSource()
const cityBySlug = parseCityPagesFromSource()
const blogBySlug = new Map(BLOG_CATALOG.map((e) => [e.slug, e]))

const LEGACY_BLOG_META = {
  'how-google-ai-overviews-are-changing-seo': {
    title: 'How Google AI Overviews Are Changing SEO',
    description:
      'Explains how Google AI Overviews affect rankings, content strategy, and organic traffic, with practical adaptation guidance.',
  },
  'seo-for-restaurants-local-diners': {
    title: 'SEO for Restaurants: Get More Local Diners Through Google',
    description:
      'Local SEO guidance for restaurants covering Google Maps, menus, reviews, and diner-focused search visibility.',
  },
  'youtube-business-marketing-2026': {
    title: 'YouTube for Business Marketing in 2026',
    description:
      'Practical guide to using YouTube for business discovery, content strategy, and marketing performance.',
  },
  'local-seo-guide-indian-businesses-2026': {
    title: 'Local SEO Guide for Indian Businesses',
    description:
      'Local SEO guide for Indian businesses covering Google Maps rankings, GBP, citations, and local landing pages.',
  },
  'what-is-ai-seo-why-business-needs-it': {
    title: 'What Is AI SEO and Why Your Business Needs It',
    description:
      'Overview of AI SEO, generative search visibility, and why businesses should align SEO with AI-driven discovery.',
  },
  'ppc-vs-seo-which-is-better': {
    title: 'PPC vs SEO: Which Channel Is Better for Your Business?',
    description:
      'Comparison of PPC and SEO for lead generation, cost efficiency, and long-term organic growth.',
  },
  'ecommerce-seo-checklist-india': {
    title: 'E-Commerce SEO Checklist for India',
    description:
      'E-commerce SEO checklist covering product pages, category architecture, technical SEO, and store visibility in India.',
  },
  'how-to-choose-best-seo-agency-india': {
    title: 'How to Choose the Best SEO Agency in India',
    description:
      'Guide to evaluating SEO agencies in India: deliverables, reporting, ethics, and fit for your business goals.',
  },
}

const HUB_PAGES = {
  '/services/seo': {
    name: 'SEO Services in India',
    description:
      'Core SEO services hub covering search strategy, technical SEO, local SEO, content, and measurable organic growth for businesses in India and worldwide.',
  },
  '/services/digital-marketing': {
    name: 'Digital Marketing Services',
    description:
      'Digital marketing services hub spanning SEO, content, social media, branding, and performance channels.',
  },
  '/services/paid-advertising': {
    name: 'Paid Advertising Services',
    description:
      'Paid advertising hub for PPC, paid social, and conversion-focused ad programs aligned with search strategy.',
  },
  '/services/design-and-development': {
    name: 'Design and Development Services',
    description:
      'Design and development hub covering UI/UX, web experience, and app store optimization support.',
  },
}

const CORE_PAGES = {
  '/': {
    name: 'Home',
    description:
      'SEO company in India offering SEO services, technical SEO, local SEO, e-commerce SEO, AI SEO, and digital marketing.',
  },
  '/who-we-are': {
    name: 'About Us',
    description: 'Company background, expertise, and team credentials for SEO India Tech.',
  },
  '/contact-us': {
    name: 'Contact',
    description: 'Free consultation, project enquiries, and contact details for SEO India Tech.',
  },
  '/seo-packages': {
    name: 'SEO Packages',
    description: 'SEO package options and pricing tiers for businesses at different growth stages.',
  },
  '/blog': {
    name: 'Blog',
    description: 'Digital marketing and SEO articles, guides, and resources from SEO India Tech.',
  },
  '/industries': {
    name: 'Industries Hub',
    description: 'Hub for specialized industry SEO programs across healthcare, home services, food, and B2B sectors.',
  },
  '/privacy-policy': {
    name: 'Privacy Policy',
    description: 'Privacy policy for website visitors and clients.',
  },
  '/terms': {
    name: 'Terms of Service',
    description: 'Terms of service for SEO India Tech website and services.',
  },
}

const SOLUTION_PAGES = {
  '/solution/automation': {
    name: 'Automation',
    description: 'Marketing and workflow automation solutions for scaling digital operations.',
  },
  '/solution/crm-and-tools': {
    name: 'CRM and Tools',
    description: 'CRM integration and marketing tooling for lead tracking and client management.',
  },
  '/solution/market-research': {
    name: 'Market Research',
    description: 'Market research services to support SEO, content, and campaign strategy.',
  },
  '/solution/promotion-and-ads': {
    name: 'Promotion and Ads',
    description: 'Promotion and advertising solutions aligned with organic and paid growth goals.',
  },
  '/solution/website-creation': {
    name: 'Website Creation',
    description: 'Website creation and launch support for search-ready business sites.',
  },
  '/solution/workflow': {
    name: 'Workflow',
    description: 'Workflow optimization for marketing, SEO delivery, and reporting processes.',
  },
}

const SERVICE_GROUPS = [
  {
    heading: '### SEO and Search Visibility',
    slugs: [
      'seo',
      'technical-seo',
      'local-seo-service',
      'e-commerce-seo',
      'international-seo',
      'gbp-optimization',
      'small-business-seo',
    ],
  },
  {
    heading: '### AI Search',
    slugs: ['ai-seo', 'generative-engine-optimization', 'answer-engine-optimization'],
  },
  {
    heading: '### Marketing',
    slugs: [
      'content-marketing',
      'digital-marketing',
      'ppc-advertising',
      'pay-per-click',
      'social-media-marketing',
      'social-media-optimization',
      'online-reputation-management',
      'digital-branding',
    ],
  },
  {
    heading: '### Design and Development',
    slugs: ['ui-ux-design', 'app-store-optimization', 'design-and-development'],
  },
]

function urlFor(path) {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`
}

function linkLine(name, path, description) {
  const desc = (description || '').replace(/\s+/g, ' ').trim()
  return `- [${name}](${urlFor(path)}): ${desc}`
}

function serviceLine(path) {
  if (HUB_PAGES[path]) {
    const h = HUB_PAGES[path]
    return linkLine(h.name, path, h.description)
  }
  const entry = serviceByPath.get(path)
  if (entry) {
    return linkLine(entry.name, path, entry.description)
  }
  const slug = path.replace('/services/', '')
  return linkLine(
    slug.replace(/-/g, ' '),
    path,
    `SEO India Tech service page for ${slug.replace(/-/g, ' ')}.`
  )
}

function industryLine(path) {
  const slug = path.replace('/industries/', '')
  const entry = industryBySlug.get(slug)
  if (!entry) {
    return linkLine(slug.replace(/-/g, ' '), path, `Industry SEO programs for ${slug.replace(/-/g, ' ')} businesses.`)
  }
  return linkLine(
    entry.title,
    path,
    `SEO programs for ${entry.label} businesses focused on ${entry.localFocus}.`
  )
}

function blogLine(path) {
  const slug = path.replace('/blog/', '')
  const premium = blogBySlug.get(slug)
  if (premium) {
    const cluster = premium.cluster || premium.category || 'SEO'
    const intent = premium.intent || 'Informational'
    return linkLine(
      premium.title,
      path,
      `${intent} article on ${cluster} from SEO India Tech.`
    )
  }
  const legacy = LEGACY_BLOG_META[slug]
  if (legacy) {
    return linkLine(legacy.title, path, legacy.description)
  }
  return linkLine(slug.replace(/-/g, ' '), path, `SEO and digital marketing article from SEO India Tech.`)
}

function cityLine(path) {
  const loc = cityBySlug.get(path)
  if (loc) {
    return linkLine(
      `SEO Services in ${loc.city}`,
      path,
      loc.description || `SEO services for businesses targeting customers and search visibility in ${loc.city}.`
    )
  }
  const city = path.replace('/seo-services/seo-services-in-', '').replace(/-/g, ' ')
  return linkLine(
    `SEO Services in ${city}`,
    path,
    `SEO services for businesses targeting search visibility in ${city}.`
  )
}

function categorizePaths(paths) {
  const buckets = {
    core: [],
    services: new Set(),
    solutions: [],
    industries: [],
    cities: [],
    blogs: [],
    policies: [],
  }

  for (const path of paths) {
    if (CORE_PAGES[path]) {
      if (path === '/privacy-policy' || path === '/terms') buckets.policies.push(path)
      else buckets.core.push(path)
      continue
    }
    if (path.startsWith('/services/')) {
      buckets.services.add(path)
      continue
    }
    if (path.startsWith('/solution/')) {
      buckets.solutions.push(path)
      continue
    }
    if (path.startsWith('/industries/')) {
      buckets.industries.push(path)
      continue
    }
    if (path.startsWith('/seo-services/')) {
      buckets.cities.push(path)
      continue
    }
    if (path.startsWith('/blog/')) {
      buckets.blogs.push(path)
      continue
    }
  }

  buckets.core.sort((a, b) => {
    const order = ['/', '/who-we-are', '/contact-us', '/seo-packages', '/industries', '/blog']
    return order.indexOf(a) - order.indexOf(b)
  })
  buckets.solutions.sort()
  buckets.industries.sort((a, b) => {
    const ia = industryBySlug.get(a.replace('/industries/', ''))
    const ib = industryBySlug.get(b.replace('/industries/', ''))
    return (ia?.title || a).localeCompare(ib?.title || b)
  })
  buckets.cities.sort((a, b) => {
    const ca = cityBySlug.get(a)?.city || a
    const cb = cityBySlug.get(b)?.city || b
    return ca.localeCompare(cb)
  })
  buckets.blogs.sort((a, b) => {
    const sa = a.replace('/blog/', '')
    const sb = b.replace('/blog/', '')
    const ta = blogBySlug.get(sa)?.title || LEGACY_BLOG_META[sa]?.title || sa
    const tb = blogBySlug.get(sb)?.title || LEGACY_BLOG_META[sb]?.title || sb
    return ta.localeCompare(tb)
  })
  buckets.policies.sort()

  return buckets
}

/**
 * @param {string[]} paths — canonical sitemap paths (same source as sitemap.xml)
 */
export function generateLlmsTxt(paths) {
  const buckets = categorizePaths(paths)
  const lines = []

  lines.push('# SEO India Tech')
  lines.push('')
  lines.push(
    '> SEO India Tech is an SEO company in India and a global digital growth partner delivering SEO, AI-powered SEO, Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), performance marketing, and technology solutions. With 14+ years of experience and 500+ clients, we serve businesses across the USA, UK, Australia, Europe, UAE, Canada, and worldwide.'
  )
  lines.push('')
  lines.push('## About')
  lines.push('')
  for (const path of buckets.core) {
    const p = CORE_PAGES[path]
    lines.push(linkLine(p.name, path, p.description))
  }
  lines.push('')
  lines.push(
    'Contact: +91-8076676731 | sales@seoindiatech.com | E-160, Sector 63, Noida, UP 201301, India'
  )
  lines.push('')
  lines.push('Experience: 14+ years | Clients: 500+')
  lines.push('')
  lines.push(
    'Service geography: USA, UK, Australia, Europe, UAE, Canada, Worldwide'
  )
  lines.push('')
  lines.push('Entity expertise: SEO Company in India, SEO Services, Search Engine Optimization, Technical SEO, Local SEO, E-commerce SEO, International SEO, Google Business Profile, AI SEO, Generative Engine Optimization, Answer Engine Optimization, Google AI Overviews, E-E-A-T, Content Marketing, PPC, Core Web Vitals')
  lines.push('')
  lines.push('## Core SEO Services')
  lines.push('')

  const servicePaths = buckets.services
  const groupedPaths = new Set()

  for (const group of SERVICE_GROUPS) {
    lines.push(group.heading)
    lines.push('')
    for (const slug of group.slugs) {
      const path = `/services/${slug}`
      if (!servicePaths.has(path)) continue
      lines.push(serviceLine(path))
      groupedPaths.add(path)
    }
    lines.push('')
  }

  const ungroupedServices = [...servicePaths].filter((p) => !groupedPaths.has(p)).sort()
  if (ungroupedServices.length) {
    lines.push('### Additional Services')
    lines.push('')
    for (const path of ungroupedServices) {
      lines.push(serviceLine(path))
    }
    lines.push('')
  }

  lines.push('## Solutions')
  lines.push('')
  for (const path of buckets.solutions) {
    const p = SOLUTION_PAGES[path]
    lines.push(linkLine(p.name, path, p.description))
  }
  lines.push('')
  lines.push('## Industries')
  lines.push('')
  lines.push('### Industry SEO Programs')
  lines.push('')
  for (const path of buckets.industries) {
    lines.push(industryLine(path))
  }
  lines.push('')
  lines.push('## India City SEO Pages')
  lines.push('')
  for (const path of buckets.cities) {
    lines.push(cityLine(path))
  }
  lines.push('')
  lines.push('## Resources')
  lines.push('')
  for (const path of buckets.blogs) {
    lines.push(blogLine(path))
  }
  lines.push('')
  lines.push('## Contact')
  lines.push('')
  lines.push('- Phone: +91-8076676731')
  lines.push('- Email: sales@seoindiatech.com')
  lines.push('- Contact page: see About section above.')
  lines.push('')
  lines.push('## Policies')
  lines.push('')
  for (const path of buckets.policies) {
    const p = CORE_PAGES[path]
    lines.push(linkLine(p.name, path, p.description))
  }
  lines.push('')
  lines.push('## Machine-Readable Resources')
  lines.push('')
  lines.push(`- [Sitemap](${SITE_URL}/sitemap.xml): XML sitemap of indexable site URLs.`)
  lines.push(
    `- [Agent Instructions](${SITE_URL}/agent-instructions.md): Agent and crawler guidance for SEO India Tech.`
  )
  lines.push(`- [Agents Manifest](${SITE_URL}/agents.json): JSON manifest for agent discovery.`)
  lines.push('')
  lines.push(
    'Note: Allowing AI crawlers supports discoverability; it does not guarantee citations, rankings, or placement in AI-generated answers.'
  )
  lines.push('')

  return lines.join('\n')
}

export function extractUrlsFromLlmsTxt(content) {
  const urls = [
    ...content.matchAll(/\]\((https:\/\/www\.seoindiatech\.com(?:\/[^)\s]*)?)\)/g),
  ].map((m) => m[1].replace(/\/$/, '') === 'https://www.seoindiatech.com' ? 'https://www.seoindiatech.com' : m[1])
  return urls
}
