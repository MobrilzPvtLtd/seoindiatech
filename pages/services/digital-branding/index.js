import SEO from '@/component/common/SEO'
import Digitalbranding from '@/component/digital-branding/Digitalbranding'
import Head from 'next/head'
import React from 'react'

export default function index() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id':
          'https://www.seoindiatech.com/services/digital-branding/#service',
        serviceType: 'Digital Branding Services',
        name: 'Digital Branding Services',
        url: 'https://www.seoindiatech.com/services/digital-branding',
        description:
          'SEOIndiatech offers digital branding services in India to enhance your brand identity, online presence, and audience engagement effectively.',
        provider: {
          '@type': 'Organization',
          name: 'SEO India Tech',
          url: 'https://www.seoindiatech.com/',
        },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Branding Solutions',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Brand Identity Creation',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Social Media Branding',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Online Reputation Management',
              },
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://www.seoindiatech.com/services/digital-branding/#breadcrumbs',
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
            name: 'Digital Branding',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/services/digital-branding/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is digital branding?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Digital branding is the process of creating a strong brand presence through online platforms, including websites, social media, and digital content.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why is digital branding important for my business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Digital branding helps build visibility, trust, and customer engagement, leading to improved business growth and competitive advantage in the online market.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide customized digital branding strategies?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, SEO India Tech creates tailored branding strategies based on your business goals, target audience, and industry to achieve maximum results.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        <title> Digital Branding Services India – SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers digital branding services in India to enhance your brand identity, online presence, and audience engagement effectively."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/digital-branding"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SCHEMA INJECTION */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>
      <Digitalbranding />
    </>
  )
}
