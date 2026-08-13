import { SITE_URL, ORGANIZATION } from '@/utils/siteConfig'

export default function SeoSchema({ location, url }) {
  const siteUrl = SITE_URL
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: 'SEO India Tech',
        inLanguage: 'en-IN',
      },

      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'SEO India Tech',
        url: `${siteUrl}/`,
        logo: {
          '@type': 'ImageObject',
          url: ORGANIZATION.logo,
        },
        email: 'sales@seoindiatech.com',
        telephone: '+91-8076676731',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'E 160, E Block, Sector 63',
          addressLocality: 'Noida',
          addressRegion: 'Uttar Pradesh',
          postalCode: '201301',
          addressCountry: 'IN',
        },
      },

      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `SEO Services in ${location.city}`,
            item: url,
          },
        ],
      },

      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url: url,
        name: location.title,
        description: location.description,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#organization`,
        },
        inLanguage: 'en-IN',
      },

      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `SEO Services in ${location.city}`,
        description: location.description,
        serviceType: 'SEO services',
        provider: {
          '@id': `${siteUrl}/#organization`,
        },
        areaServed: {
          '@type': 'City',
          name: location.city,
          containedInPlace: {
            '@type': 'Country',
            name: 'India',
          },
        },
      },

      ...(location.faqs?.length
        ? [
            {
              '@type': 'FAQPage',
              '@id': `${url}#faq`,
              isPartOf: {
                '@id': `${url}#webpage`,
              },
              mainEntity: location.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
