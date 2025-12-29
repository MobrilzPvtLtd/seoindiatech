import CRMTools from '@/component/solution/CRM&Tool/CRMTool'
import Head from 'next/head'
import React from 'react'

export default function index() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': 'https://www.seoindiatech.com/solution/crm-and-tools/#product',
        name: 'CRM and Automation Tools',
        url: 'https://www.seoindiatech.com/solution/crm-and-tools',
        description:
          'SEOIndiatech offers CRM & tools services in India, helping businesses streamline operations, enhance customer management, and boost overall productivity.',
        brand: {
          '@type': 'Organization',
          name: 'SEO India Tech',
          url: 'https://www.seoindiatech.com/',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          price: '0',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://www.seoindiatech.com/solution/crm-and-tools/#breadcrumbs',
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
            name: 'CRM and Tools',
            item: 'https://www.seoindiatech.com/solution/crm-and-tools',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/solution/crm-and-tools/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are CRM and automation tools?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'CRM and automation tools help businesses manage customer relationships, automate workflows, improve sales performance, and streamline internal processes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why choose SEO India Tech’s CRM solutions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'We provide customizable CRM tools that boost engagement, efficiency, and data-driven decision-making, helping businesses scale faster.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can CRM tools integrate with our existing systems?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, our CRM and automation solutions can seamlessly integrate with various business software and third-party tools for smooth operations.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        <title>CRM & Tools Services India– SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers CRM & tools services in India, helping businesses streamline operations, enhance customer management, and boost overall productivity."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/solution/crm-and-tools"
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
      <CRMTools />
    </>
  )
}
