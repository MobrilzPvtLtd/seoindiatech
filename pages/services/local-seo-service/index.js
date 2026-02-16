import React from 'react'
import Head from 'next/head'
import LocalSeo from '@/component/services/local-seo-service/LocalSeo'

export default function index() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SEO India Tech',
    url: 'https://www.seoindiatech.com/services/local-seo-service',
    description:
      'Local SEO services to help businesses grow local visibility, traffic, and leads. Expert local SEO marketing services in India.',
    serviceType: 'Local SEO Services',
    provider: {
      '@type': 'Organization',
      name: 'SEO India Tech',
      url: 'https://www.seoindiatech.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Local SEO Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local SEO Service',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'White Label Local SEO Services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Small Business Local SEO Services',
          },
        },
      ],
    },
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is local SEO service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Local SEO service is a set of techniques focused on boosting your online visibility in local search results and map listings.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long before local SEO results appear?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Local SEO results can take weeks to months depending on competition, current presence, and search terms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer local SEO marketing services for small businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. We tailor local SEO services for small business needs and budgets.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in white label local SEO services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'White label local SEO services include listing management, on-page optimization, reporting, and support under your brand.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can local SEO help my shop appear in Google Maps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. Local SEO services include optimizing your map listing so it ranks higher for nearby searches.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        {/* Title */}
        <title>Local SEO Service Company in India | SEO India Tech</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Top local SEO service company in India. Get local SEO services that grow small business visibility, traffic, and leads. Contact us today."
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/local-seo-service"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Local SEO Service Company | Local SEO Services by SEO India Tech"
        />
        <meta
          property="og:description"
          content="Boost your local search visibility with local SEO services from a trusted local SEO services agency in India."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.seoindiatech.com/services/local-seo-service"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Local SEO Service Company | SEO India Tech"
        />
        <meta
          name="twitter:description"
          content="Grow local traffic and leads with expert local SEO services. Get results now."
        />
        <meta
          name="twitter:url"
          content="https://www.seoindiatech.com/services/local-seo-service"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <LocalSeo />
    </>
  )
}
