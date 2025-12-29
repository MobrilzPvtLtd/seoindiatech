import SEO from '@/component/common/SEO'
import PPC from '@/component/ppc-advertising/Ppc'
import Ppc from '@/component/ppc-advertising/Ppc'
import Head from 'next/head'
import React from 'react'

export default function index() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.seoindiatech.com/services/ppc-advertising/#service',
        serviceType: 'PPC Advertising Services',
        provider: {
          '@type': 'Organization',
          name: 'SEO India Tech',
          url: 'https://www.seoindiatech.com',
        },
        url: 'https://www.seoindiatech.com/services/ppc-advertising',
        description:
          'Boost your online presence and generate high-quality leads with expert PPC advertising services. SEO India Tech delivers data-driven campaigns for maximum ROI.',
        areaServed: 'Worldwide',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: 'Custom',
            description:
              'Pricing depends on advertising budget and campaign goals.',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://www.seoindiatech.com/services/ppc-advertising/#breadcrumbs',
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
            name: 'PPC Advertising',
            item: 'https://www.seoindiatech.com/services/ppc-advertising',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/services/ppc-advertising/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is PPC Advertising?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'PPC advertising is a paid marketing method where businesses pay only when users click their ads. It helps drive targeted traffic instantly.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does SEO India Tech manage PPC campaigns?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'We handle everything from keyword research, ad creation, budget optimization, conversion tracking to continuous campaign improvement for better ROI.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which platforms do you run PPC ads on?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'We manage PPC campaigns on Google Ads, Bing Ads, Facebook Ads, Instagram, LinkedIn, YouTube and other major digital platforms.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        <title> PPC Advertising Services India – SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech provides PPC advertising services in India to drive targeted traffic, increase leads, and maximize ROI with effective paid marketing strategies."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/ppc-advertising"
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
      <PPC />
    </>
  )
}
