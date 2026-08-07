import { ORGANIZATION, SITE_NAME, SITE_URL, absoluteUrl } from './siteConfig'
import { buildFaqEntities, buildSpeakableSpecification, enrichOrganizationNode } from './aiSeo'

export function buildOrganizationNode() {
  return enrichOrganizationNode({
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    logo: {
      '@type': 'ImageObject',
      url: ORGANIZATION.logo,
    },
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORGANIZATION.address.streetAddress,
      addressLocality: ORGANIZATION.address.addressLocality,
      addressRegion: ORGANIZATION.address.addressRegion,
      postalCode: ORGANIZATION.address.postalCode,
      addressCountry: ORGANIZATION.address.addressCountry,
    },
    sameAs: ORGANIZATION.sameAs,
  })
}

export function buildFaqPageSchema(faqs, pageUrl) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: buildFaqEntities(faqs),
  }
}

export function buildWebSiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildBreadcrumbList(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildWebPageSchema({ url, name, description, speakable = true }) {
  const page = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  }
  if (speakable) {
    page.speakable = buildSpeakableSpecification()
  }
  return page
}

export function buildContactPageSchema() {
  const url = `${SITE_URL}/contact-us`
  return buildPageGraph({
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Contact Us', url },
    ],
    extra: [
      buildWebPageSchema({
        url,
        name: 'Contact SEO India Tech',
        description: 'Contact SEO India Tech for SEO, digital marketing, and web development services.',
      }),
      {
        '@type': 'ContactPage',
        '@id': `${url}#contactpage`,
        url,
        name: 'Contact Us',
        mainEntity: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  })
}

export function buildBlogListingSchema() {
  const url = `${SITE_URL}/blog`
  return buildPageGraph({
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Blog', url },
    ],
    extra: [
      buildWebPageSchema({
        url,
        name: 'SEO India Tech Blog',
        description: 'Expert insights on SEO, AI search, local SEO, and digital marketing.',
      }),
      {
        '@type': 'Blog',
        '@id': `${url}#blog`,
        url,
        name: 'SEO India Tech Blog',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-IN',
      },
    ],
  })
}

export function buildSolutionServiceSchema({ path, name, description, serviceType }) {
  const url = absoluteUrl(path)
  return buildPageGraph({
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Solutions', url: `${SITE_URL}/solution/automation` },
      { name, url },
    ],
    extra: [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name,
        url,
        description,
        provider: { '@id': `${SITE_URL}/#organization` },
        serviceType,
        areaServed: 'Worldwide',
      },
      buildWebPageSchema({ url, name, description }),
    ],
  })
}

export function buildAboutPageSchema({ faqs }) {
  const url = absoluteUrl('/who-we-are')
  return buildPageGraph({
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Who We Are', url },
    ],
    extra: [
      buildWebPageSchema({
        url,
        name: 'About SEO India Tech',
        description:
          'Learn about SEO India Tech: 14+ years of AI-powered SEO, digital marketing, and technology solutions for businesses worldwide.',
      }),
      {
        '@type': 'AboutPage',
        '@id': `${url}#aboutpage`,
        url,
        name: 'Who We Are',
        mainEntity: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      buildFaqPageSchema(faqs, url),
    ],
  })
}

export function buildIndustriesHubSchema({ faqs, industryCount = 41 }) {
  const url = absoluteUrl('/industries')
  return buildPageGraph({
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Industries', url },
    ],
    extra: [
      buildWebPageSchema({
        url,
        name: 'Industry SEO Services',
        description:
          'Specialized SEO, AI Overview, GBP, PPC, and SMO programs for 41 industries worldwide.',
      }),
      {
        '@type': 'CollectionPage',
        '@id': `${url}#collection`,
        url,
        name: 'Industry SEO Services',
        description: 'Browse SEO programs tailored to your business vertical.',
        numberOfItems: industryCount,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      buildFaqPageSchema(faqs, url),
    ],
  })
}

export function buildSeoPackagesSchema({ faqs }) {
  const url = absoluteUrl('/seo-packages')
  const offers = [
    { name: 'Starter SEO Package', price: '249', keywords: 'Up to 20' },
    { name: 'Growth SEO Package', price: '399', keywords: 'Up to 50' },
    { name: 'Platinum SEO Package', price: '699', keywords: 'Up to 100' },
    { name: 'Dedicated SEO Package', price: '1199', keywords: 'Up to 250' },
  ].map((pkg, index) => ({
    '@type': 'Offer',
    '@id': `${url}#offer-${index + 1}`,
    name: pkg.name,
    description: `${pkg.keywords} keywords targeted with transparent monthly SEO reporting.`,
    price: pkg.price,
    priceCurrency: 'USD',
    url,
    seller: { '@id': `${SITE_URL}/#organization` },
    availability: 'https://schema.org/InStock',
  }))

  return buildPageGraph({
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'SEO Packages', url },
    ],
    extra: [
      buildWebPageSchema({
        url,
        name: 'SEO Packages and Pricing',
        description:
          'Flexible SEO packages for every business stage: Starter, Growth, Platinum, and Dedicated plans with transparent reporting.',
      }),
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: 'SEO Packages',
        url,
        description: 'Monthly SEO service packages with keyword targeting, content, and reporting.',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: 'Worldwide',
        offers,
      },
      buildFaqPageSchema(faqs, url),
    ],
  })
}

export function buildPageGraph({ breadcrumbs, extra = [] }) {
  const graph = [buildOrganizationNode(), buildWebSiteNode()]
  if (breadcrumbs?.length) {
    graph.push(buildBreadcrumbList(breadcrumbs))
  }
  return {
    '@context': 'https://schema.org',
    '@graph': [...graph, ...extra],
  }
}
