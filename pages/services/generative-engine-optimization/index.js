import React from 'react'
import Head from 'next/head'
import GenerativeEngine from '@/component/services/generative-engine-optimization/GenerativeEngine'

export default function index() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.seoindiatech.com/services/ai-seo',
        url: 'https://www.seoindiatech.com/services/ai-seo',
        name: 'AI SEO Services',
        description:
          'AI SEO company providing AI SEO services, answer engine optimization services, and generative engine optimization agency support for better visibility in search and AI answers.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.seoindiatech.com/',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://www.seoindiatech.com/services/ai-seo#service',
        name: 'AI SEO Services',
        serviceType:
          'AI SEO, Answer Engine Optimization Services, Generative Engine Optimization',
        provider: {
          '@type': 'Organization',
          name: 'SEO India Tech',
          url: 'https://www.seoindiatech.com/',
        },
        areaServed: 'IN',
        url: 'https://www.seoindiatech.com/services/ai-seo',
        description:
          'AI SEO services from an ai SEO company and AI SEO agency, including ai SEO strategy, content upgrades, technical fixes, and answer engine optimization services.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/services/ai-seo#faqs',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What does an ai SEO company do?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'An ai SEO company improves your site for standard search results and for AI answer surfaces by focusing on clear content, structure, and technical health.',
            },
          },
          {
            '@type': 'Question',
            name: 'How are AI SEO services different from regular SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'AI SEO services include standard SEO work plus focus on question intent, answer formatting, and signals that help AI tools cite your pages.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are answer engine optimization services?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Answer engine optimization services help your pages appear as direct answers in AI tools and search features through clear sections, short answers, and strong topic coverage.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is a generative engine optimization agency?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'A generative engine optimization agency builds content and structure that increases the chance your brand is referenced in AI generated answers across search and AI tools.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does AI SEO take to show results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Many sites see early movement in 4 to 8 weeks, while stronger results often take 3 to 6 months. Timing depends on competition, site health, and content needs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can a digital marketing company support AI SEO too?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes. A digital marketing company can align ai SEO strategy with landing pages and conversion tracking so traffic turns into leads.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        {/* Title */}
        <title>AI SEO Services | SEO India Tech</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="AI SEO company for AI SEO services, AEO, and GEO. Improve visibility in search and AI answers with clear content, technical fixes, and strategy."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="AI SEO Services That Help You Show Up in AI Answers"
        />
        <meta
          property="og:description"
          content="Work with an ai SEO company for AI SEO services, answer engine optimization services, and GEO support. Clear content. Trackable growth."
        />
        <meta
          property="og:url"
          content="https://www.seoindiatech.com/services/ai-seo"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.seoindiatech.com/assets/images/ai-seo.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI SEO Services for Search and AI Results"
        />
        <meta
          name="twitter:description"
          content="Choose an ai SEO company for AI SEO strategy, AEO support, and GEO ready content that AI tools can cite."
        />
        <meta
          name="twitter:image"
          content="https://www.seoindiatech.com/assets/images/ai-seo.jpg"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div>
        <GenerativeEngine />
      </div>
    </>
  )
}
