import React from 'react'
import Head from 'next/head'
import AEO from '@/component/services/answer-engine-optimization/AEO'

export default function Index() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Answer Engine Optimization Agency | SEO India Tech</title>
        <meta
          name="description"
          content="Get AEO answer engine optimization services to rank for questions, AI overviews, and snippets. Improve visibility, leads, and trust with SEO India Tech."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/answer-engine-optimization"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Answer Engine Optimization Agency | SEO India Tech"
        />
        <meta
          property="og:description"
          content="Win AI overviews and featured snippets with AEO answer engine optimization services. Get content, schema, and on page fixes that drive leads."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.seoindiatech.com/services/answer-engine-optimization"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Answer Engine Optimization Agency | SEO India Tech"
        />
        <meta
          name="twitter:description"
          content="AEO answer engine optimization services that help your pages become the chosen answer in AI tools and search. Content plus schema, done right."
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Answer Engine Optimization Agency',
              url:
                'https://www.seoindiatech.com/services/answer-engine-optimization',
              description:
                'AEO answer engine optimization services to improve visibility in AI overviews, featured snippets, and voice search with content structure and schema.',
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'AEO Answer Engine Optimization Services',
              serviceType: 'Answer Engine Optimization',
              provider: {
                '@type': 'Organization',
                name: 'SEO India Tech',
                url: 'https://www.seoindiatech.com/',
              },
              areaServed: 'IN',
              url:
                'https://www.seoindiatech.com/services/answer-engine-optimization',
              description:
                'Answer engine optimization services focused on question mapping, content formatting, schema markup, and on page SEO for AI and search visibility.',
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What are AEO answer engine optimization services',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'AEO answer engine optimization services help your content become the best direct answer for user questions in search engines and AI tools.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How is answer engine optimization different from SEO',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'SEO focuses on ranking pages. Answer engine optimization focuses on making content easy to extract and cite as a direct answer, with structure and schema.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long does AEO take to show results',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Some sites see early snippet visibility within weeks, but steady results usually build over 2 to 3 months based on competition and site health.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do I need schema for AEO',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Schema helps systems understand your page and can improve eligibility for rich results, FAQs, and service listings.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can AEO help local businesses in India',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Yes. AEO supports local SEO services India by matching location based questions and improving trust signals that lead to calls and visits.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you offer answer engine optimization consulting',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Yes. We offer consulting for audits, content templates, schema plans, and step by step guidance for in house teams.',
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <div>
        <AEO />
      </div>
    </>
  )
}
