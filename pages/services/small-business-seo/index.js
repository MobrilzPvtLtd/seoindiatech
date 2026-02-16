import React from 'react'
import Head from 'next/head'
import SmallBusiness from '@/component/services/small-business-seo/SmallBusiness'

export default function SmallBusinessSEOPage() {
  return (
    <>
      <Head>
        {/* Primary Meta */}
        <title>Small Business SEO Services | SEO India Tech</title>
        <meta
          name="description"
          content="Get small business SEO services that lift local rankings, calls, and leads. SEO India Tech runs focused SEO services for small businesses."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/small-business-seo"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Small Business SEO Services That Bring Leads"
        />
        <meta
          property="og:description"
          content="Grow local visibility with small business SEO services. Get stronger rankings, more calls, and steady leads with SEO India Tech."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.seoindiatech.com/services/small-business-seo"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Small Business SEO Services That Grow Local Leads"
        />
        <meta
          name="twitter:description"
          content="Need more calls and local traffic. Choose small business SEO services from SEO India Tech for clear, measurable growth."
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: 'Small business SEO',
                url: 'https://www.seoindiatech.com/services/small-business-seo',
                description:
                  'Small business SEO services by SEO India Tech to improve local rankings, website traffic, and lead generation for small businesses.',
                inLanguage: 'en',
                isPartOf: {
                  '@type': 'WebSite',
                  name: 'SEO India Tech',
                  url: 'https://www.seoindiatech.com/',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Small Business SEO Services',
                serviceType: 'Small business SEO services',
                url: 'https://www.seoindiatech.com/services/small-business-seo',
                provider: {
                  '@type': 'Organization',
                  name: 'SEO India Tech',
                  url: 'https://www.seoindiatech.com/',
                  description:
                    'SEO India Tech is a top digital marketing company providing small business SEO services, local SEO services for small business, and ecommerce SEO services.',
                },
                areaServed: [
                  {
                    '@type': 'Country',
                    name: 'India',
                  },
                ],
                audience: {
                  '@type': 'BusinessAudience',
                  name: 'Small Businesses',
                },
                description:
                  'SEO services for small businesses including local SEO for small business, technical improvements, content creation, and ecommerce SEO services.',
              },
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What are small business SEO services',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Small business SEO services are website and local improvements that help your business rank higher on search engines and earn more leads from organic search.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name:
                      'How long do SEO services for small businesses take to show results',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Many sites see early movement in 4 to 8 weeks, while stronger results often take 3 to 6 months, depending on competition and site condition.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name:
                      'What is included in local SEO services for small business',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Local SEO services for small business often include Google Business Profile updates, citation cleanup, local page work, review support, and map ranking improvements.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name:
                      'Do I need local SEO for small business if I already run ads',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Yes. Ads stop when the budget stops. Local SEO for small business builds long term visibility that can keep bringing leads.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name:
                      'Can an SEO company for small business help ecommerce stores',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Yes. Ecommerce SEO services help category pages and product pages rank, improve site structure, and increase search traffic that converts.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do I choose a small business SEO agency',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Choose a small business SEO agency that shares a clear plan, explains tasks, provides reporting, and focuses on rankings, traffic, and leads.',
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </Head>

      <SmallBusiness />
    </>
  )
}
