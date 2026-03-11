export default function SeoSchema({ location, url }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.seoindiatech.com/#website',
        url: 'https://www.seoindiatech.com/',
        name: 'SEO India Tech',
        inLanguage: 'en-IN',
      },

      {
        '@type': 'Organization',
        '@id': 'https://www.seoindiatech.com/#organization',
        name: 'SEO India Tech',
        url: 'https://www.seoindiatech.com/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.seoindiatech.com/sit.png',
        },
        email: 'sales@seoindiatech.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'E 160, E Block, Sector 63, Noida',
          addressLocality: 'Noida',
          addressRegion: 'Uttar Pradesh',
          postalCode: '201301',
          addressCountry: 'IN',
        },
      },

      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url: url,
        name: location.title,
        description: location.description,
        isPartOf: {
          '@id': 'https://www.seoindiatech.com/#website',
        },
        about: {
          '@id': 'https://www.seoindiatech.com/#organization',
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
          '@id': 'https://www.seoindiatech.com/#organization',
        },
        areaServed: [
          {
            '@type': 'City',
            name: location.city,
          },
          {
            '@type': 'City',
            name: 'Noida',
          },
          {
            '@type': 'City',
            name: 'Pune',
          },
        ],
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
