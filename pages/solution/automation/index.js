import Automation from '@/component/solution/automation/Automation'
import SeoHead from '@/component/common/SeoHead'
import React from 'react'

export default function index() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.seoindiatech.com/solution/automation/#service',
        name: 'Digital Automation Solutions',
        url: 'https://www.seoindiatech.com/solution/automation/',
        description:
          'SEOIndiatech offers digital automation services in India to streamline processes, boost efficiency, and enhance business productivity effectively.',
        provider: {
          '@type': 'Organization',
          name: 'SEO India Tech',
          url: 'https://www.seoindiatech.com/',
        },
        serviceType: 'Business Process Automation',
        areaServed: 'Worldwide',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.seoindiatech.com/solution/automation/#breadcrumbs',
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
            name: 'Solutions',
            item: 'https://www.seoindiatech.com/solution/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Digital Automation Solutions',
            item: 'https://www.seoindiatech.com/solution/automation/',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/solution/automation/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are Digital Automation Solutions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Digital Automation Solutions optimize repetitive business processes using technology to improve efficiency, reduce manual work, and eliminate errors.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can automation help my business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Automation enhances productivity, improves workflow accuracy, speeds up operations, and enables teams to focus on high-value tasks for better business growth.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer customized automation solutions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, we provide tailored automation solutions based on unique business needs, ensuring seamless integration and optimum results.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <SeoHead
        title="Digital Automation Services India | SEO India Tech"
        description="Streamline business processes with digital automation solutions. Reduce manual work, improve accuracy, and scale operations with SEO India Tech."
        path="/solution/automation"
        schema={schemaData}
      />
      <Automation />
    </>
  )
}
