import SEO from '@/component/common/SEO'
import Contentmarketing from '@/component/content-marketing/Contentmarketing'
import Head from 'next/head'
import React from 'react'

export default function index() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id':
          'https://www.seoindiatech.com/services/content-marketing/#service',
        name: 'Content Marketing Services',
        url: 'https://www.seoindiatech.com/services/content-marketing',
        description:
          'SEOIndiatech provides content marketing services in India to boost engagement, drive traffic, and enhance your brand’s online presence effectively.',
        provider: {
          '@type': 'Organization',
          name: 'SEO India Tech',
          url: 'https://www.seoindiatech.com/',
        },
        areaServed: 'Worldwide',
        serviceType: 'Content Marketing',
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://www.seoindiatech.com/services/content-marketing/#breadcrumbs',
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
            name: 'Content Marketing Services',
            item: 'https://www.seoindiatech.com/services/content-marketing',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/services/content-marketing/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is content marketing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Content marketing is a strategy focused on creating and distributing valuable, relevant content to attract and engage a target audience, ultimately driving profitable customer action.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can content marketing improve my business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Effective content marketing enhances brand awareness, improves search engine rankings, builds customer trust, and increases website traffic and conversions.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide SEO-optimized content?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, SEO India Tech creates high-quality, SEO-optimized content tailored to your target audience and business goals for maximum reach and engagement.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        <title> Content Marketing Services India – SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech provides content marketing services in India to boost engagement, drive traffic, and enhance your brand’s online presence effectively."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/content-marketing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SCHEMA TAG */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>
      <Contentmarketing />
    </>
  )
}
