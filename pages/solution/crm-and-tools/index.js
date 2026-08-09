import CRMTools from '@/component/solution/CRM&Tool/CRMTool'
import SeoHead from '@/component/common/SeoHead'
import VisibleFaq from '@/component/common/VisibleFaq'
import SolutionInternalLinks from '@/component/solution/SolutionInternalLinks'
import { PAGE_FAQS } from '@/utils/pageFaqs'
import { getSolutionInternalLinks } from '@/utils/internalLinks'
import React from 'react'

export default function index() {
  const solutionLinks = getSolutionInternalLinks('crm-and-tools')
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
            name: 'Why choose SEO India Tech\'s CRM solutions?',
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
      <SeoHead
        title="CRM & Tools Services India | SEO India Tech"
        description="Streamline customer management and operations with CRM and automation tools. Boost productivity and sales pipeline visibility with SEO India Tech."
        path="/solution/crm-and-tools"
        schema={schemaData}
      />
      <CRMTools />
      <SolutionInternalLinks links={solutionLinks} title="Related SEO & Marketing Resources" />
      <VisibleFaq faqs={PAGE_FAQS.crmAndTools} minCount={8} />
    </>
  )
}
