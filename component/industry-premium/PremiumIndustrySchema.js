export default function PremiumIndustrySchema({ content, url }) {
  const faqEntities = content.faq.items.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  }))

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
          url: 'https://www.seoindiatech.com/sit-transparent.png',
        },
        email: 'sales@seoindiatech.com',
        telephone: '+91-8076676731',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'E-160, Sector 63',
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
            item: 'https://www.seoindiatech.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Industries',
            item: 'https://www.seoindiatech.com/industries',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: content.name,
            item: url,
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: content.seo.title,
        description: content.seo.description,
        isPartOf: { '@id': 'https://www.seoindiatech.com/#website' },
        about: { '@id': 'https://www.seoindiatech.com/#organization' },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: content.hero.h1,
        description: content.seo.description,
        serviceType: `${content.name} SEO`,
        provider: { '@id': 'https://www.seoindiatech.com/#organization' },
        areaServed: ['India', 'United States', 'United Kingdom', 'Australia', 'UAE', 'Canada'],
      },
      {
        '@type': 'MedicalBusiness',
        '@id': `${url}#medicalbusiness`,
        name: `SEO India Tech | ${content.name} SEO Services`,
        description: content.seo.description,
        url,
        medicalSpecialty: 'PlasticSurgery',
        provider: { '@id': 'https://www.seoindiatech.com/#organization' },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        isPartOf: { '@id': `${url}#webpage` },
        mainEntity: faqEntities,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
