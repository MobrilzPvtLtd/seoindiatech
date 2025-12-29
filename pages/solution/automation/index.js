import SEO from '@/component/SEO/SEO'
import Automation from '@/component/solution/automation/Automation'
import Head from 'next/head'
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
      <Head>
        <title>Digital Automation Services India– SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers digital automation services in India to streamline processes, boost efficiency, and enhance business productivity effectively."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/solution/automation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO SERVICE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>
      <Automation />
    </>
  )
}
