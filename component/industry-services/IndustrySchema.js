import { SITE_URL, ORGANIZATION } from '@/utils/siteConfig'

export default function IndustrySchema({ industry, url }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: 'SEO India Tech',
        inLanguage: 'en-IN',
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'SEO India Tech',
        url: `${SITE_URL}/`,
        logo: {
          '@type': 'ImageObject',
          url: ORGANIZATION.logo,
        },
        email: 'sales@seoindiatech.com',
        telephone: '+91-8076676731',
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: industry.title,
        description: industry.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
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
