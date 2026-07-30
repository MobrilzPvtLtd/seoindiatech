import Promotion from '@/component/solution/promotion/Promotion'
import SeoHead from '@/component/common/SeoHead'
import React from 'react'

export default function index() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id':
          'https://www.seoindiatech.com/solution/promotion-and-ads/#webpage',
        url: 'https://www.seoindiatech.com/solution/promotion-and-ads',
        name: 'Promotion and Ads Solutions',
        description:
          'SEOIndiatech provides promotion and ads services in India to boost brand visibility, attract target audiences, and drive higher engagement and conversions.',
        isPartOf: {
          '@id': 'https://www.seoindiatech.com/#organization',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://www.seoindiatech.com/solution/promotion-and-ads/#breadcrumbs',
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
            name: 'Promotion and Ads',
            item: 'https://www.seoindiatech.com/solution/promotion-and-ads',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/solution/promotion-and-ads/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are Promotion and Ads Solutions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Promotion and Ads Solutions include strategic advertising, brand promotions, and digital campaigns designed to boost brand visibility and conversions.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can SEO India Tech improve my business promotion?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'SEO India Tech creates customized promotional strategies with targeted ads, analytics, and optimized messaging to increase audience engagement and ROI.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you manage advertising on multiple platforms?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, we manage ads across Google, Meta, YouTube, LinkedIn, and other platforms to maximize reach and performance.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <SeoHead
        title="Promotion & Ads Services India | SEO India Tech"
        description="Boost brand visibility with integrated promotion and advertising services. Drive engagement, leads, and conversions across digital channels."
        path="/solution/promotion-and-ads"
        schema={schemaData}
      />
      <Promotion />
    </>
  )
}
