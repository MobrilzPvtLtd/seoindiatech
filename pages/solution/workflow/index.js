import WorkFlow from '@/component/solution/workflow/WorkFlow'
import SeoHead from '@/component/common/SeoHead'
import VisibleFaq from '@/component/common/VisibleFaq'
import { PAGE_FAQS } from '@/utils/pageFaqs'
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
      <SeoHead
        title="Workflow Process Services India | SEO India Tech"
        description="Optimize business operations with workflow process services. Streamline tasks, improve team productivity, and scale efficiently with SEO India Tech."
        path="/solution/workflow"
        schema={schemaData}
      />
      <WorkFlow />
      <VisibleFaq faqs={PAGE_FAQS.workflow} minCount={8} />
    </>
  )
}
