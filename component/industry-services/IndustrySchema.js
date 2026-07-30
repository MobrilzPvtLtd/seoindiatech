export default function IndustrySchema({ industry, url }) {
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
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: industry.title,
        description: industry.description,
        isPartOf: { '@id': 'https://www.seoindiatech.com/#website' },
        about: { '@id': 'https://www.seoindiatech.com/#organization' },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: industry.heading,
        description: industry.description,
        serviceType: industry.title,
        provider: { '@id': 'https://www.seoindiatech.com/#organization' },
        areaServed: ['India', 'United States', 'United Kingdom', 'Australia', 'UAE'],
      },
      ...(industry.faqs?.length
        ? [
            {
              '@type': 'FAQPage',
              '@id': `${url}#faq`,
              isPartOf: { '@id': `${url}#webpage` },
              mainEntity: industry.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
