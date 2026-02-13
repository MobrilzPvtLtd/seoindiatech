import Head from 'next/head'
import ECommerceSEO from '@/component/services/e-commerce-seo/ECommerceSEO'
import React from 'react'

export default function index() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.seoindiatech.com/services/e-commerce-seo/#service',
        name: 'Ecommerce SEO Services India',
        url: 'https://www.seoindiatech.com/services/e-commerce-seo',
        description:
          'Grow online sales with focused ecommerce SEO services in India. We help stores rank, attract local buyers, and increase revenue.',
        provider: {
          '@type': 'Organization',
          name: 'SEO India Tech',
          url: 'https://www.seoindiatech.com/',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        serviceType: 'Ecommerce SEO Services',
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://www.seoindiatech.com/services/e-commerce-seo/#breadcrumbs',
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
            name: 'Ecommerce SEO Services',
            item: 'https://www.seoindiatech.com/services/e-commerce-seo',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/services/e-commerce-seo/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is ecommerce SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Ecommerce SEO improves your online store so it appears more often in search results when buyers look for products like yours.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long until I see results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Most ecommerce stores see noticeable increases in rankings and traffic within 3 to 6 months.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you work with small businesses?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes. We provide ecommerce SEO services for small and growing businesses and tailor strategies to fit your budget and goals.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can SEO help local sales?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes. Our ecommerce SEO strategies help your store appear in local searches and Google Maps results to attract nearby buyers.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is included in your reports?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'We provide monthly reports detailing keyword rankings, traffic growth, technical improvements, and completed SEO work.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Ecommerce SEO Services India | SEO India Tech</title>

        <meta
          name="description"
          content="Grow online sales with focused ecommerce SEO services in India. We help stores rank, attract local buyers, and increase revenue."
        />

        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/e-commerce-seo"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ecommerce SEO Services in India That Grow Sales"
        />
        <meta
          property="og:description"
          content="Rank higher on search engines. Drive more clicks and more revenue with proven ecommerce SEO services from a trusted SEO company."
        />
        <meta
          property="og:url"
          content="https://www.seoindiatech.com/services/e-commerce-seo"
        />
        <meta property="og:site_name" content="SEO India Tech" />
        <meta
          property="og:image"
          content="https://www.seoindiatech.com/images/ecommerce-seo-banner.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ecommerce SEO Services in India That Grow Sales"
        />
        <meta
          name="twitter:description"
          content="See real traffic and more sales for your online store with ecommerce SEO services built for India and local stores."
        />
        <meta
          name="twitter:image"
          content="https://www.seoindiatech.com/images/ecommerce-seo-banner.jpg"
        />
        {/* SCHEMA TAG */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <ECommerceSEO />
    </>
  )
}
