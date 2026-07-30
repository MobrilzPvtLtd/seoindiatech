import { ORGANIZATION, SITE_NAME, SITE_URL } from './siteConfig'

export function buildOrganizationNode() {
  return {
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
