import SEO from '@/component/SEO/SEO'
import Head from 'next/head'
import React from 'react'

const index = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.seoindiatech.com/services/seo/#service',
        serviceType: 'SEO Services',
        name: 'Professional SEO Services',
        url: 'https://www.seoindiatech.com/services/seo',
        provider: {
          '@type': 'Organization',
          name: 'SEO India Tech',
          url: 'https://www.seoindiatech.com/',
        },
        description:
          'SEOIndiatech offers expert SEO services in India to improve website rankings, increase organic traffic, & boost online visibility for sustainable business growth.',
        areaServed: 'Worldwide',
        audience: {
          '@type': 'Audience',
          audienceType: 'Businesses, Startups, Entrepreneurs',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.seoindiatech.com/services/seo/#breadcrumbs',
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
            name: 'Services',
            item: 'https://www.seoindiatech.com/services/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'SEO',
            item: 'https://www.seoindiatech.com/services/seo',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/services/seo/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is included in your SEO services?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Our SEO services include on-page optimization, technical SEO, link building, keyword strategy, website audit, and continuous performance tracking to improve search rankings.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to see SEO results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'SEO results typically begin to show within 3–6 months depending on website condition, competition, and strategy implementation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide custom SEO plans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, we create customized SEO strategies based on your business goals, target audience, and industry competition to deliver maximum results.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        <title> Expert SEO Services in India – SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers expert SEO services in India to improve website rankings, increase organic traffic, & boost online visibility for sustainable business growth."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/seo"
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
      <SEO />
    </>
  )
}

export default index
