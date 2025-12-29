import SEO from '@/component/SEO/SEO'
import WorkFlow from '@/component/solution/workflow/WorkFlow'
import Head from 'next/head'
import React from 'react'

export default function index() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.seoindiatech.com/solution/workflow/#webpage',
        url: 'https://www.seoindiatech.com/solution/workflow',
        name: 'Workflow Automation Solutions',
        description:
          'SEOIndiatech offers workflow process services in India to optimize operations, improve efficiency, and streamline business tasks for better productivity.',
        isPartOf: {
          '@id': 'https://www.seoindiatech.com/#website',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.seoindiatech.com/solution/workflow/#breadcrumbs',
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
            name: 'Workflow Automation',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/solution/workflow/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are Workflow Automation Solutions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Workflow Automation Solutions help businesses optimize processes by reducing manual work, improving accuracy, and speeding up task execution through digital automation.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can workflow automation help my business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Automation improves productivity, minimizes errors, lowers operational costs, and ensures smoother collaboration across departments.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does SEO India Tech provide customized automation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, SEO India Tech offers tailored workflow automation solutions designed to fit your business operations and long-term goals.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Workflow Process Services India– SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers workflow process services in India to optimize operations, improve efficiency, and streamline business tasks for better productivity."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/solution/workflow"
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
      <WorkFlow />
    </>
  )
}
