import PPC from '@/component/services/pay-per-click/PPC'
import React from 'react'
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      {/* Meta, OG, Twitter & Schema */}
      <Head>
        {/* Title and Meta Description */}
        <title>Pay Per Click Advertising Services | SEO India Tech</title>
        <meta
          name="description"
          content="Run a high-performing pay per click campaign with SEO India Tech. Better targeting, tracking, and reporting to drive leads and sales."
        />

        {/* Open Graph (OG) Tags */}
        <meta
          property="og:title"
          content="Pay Per Click Advertising That Brings Leads Fast"
        />
        <meta
          property="og:description"
          content="Get a pay per click campaign built for calls, forms, and sales. Clear tracking, smart spend control, and simple reporting."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.seoindiatech.com/services/pay-per-click"
        />
        <meta property="og:site_name" content="SEO India Tech" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pay Per Click Advertising That Gets Real Leads"
        />
        <meta
          name="twitter:description"
          content="We build each pay per click campaign with clean structure, strong ads, and full tracking so you can see results clearly."
        />
        <meta name="twitter:site" content="@seoindiatech" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id':
                    'https://www.seoindiatech.com/services/pay-per-click#webpage',
                  url: 'https://www.seoindiatech.com/services/pay-per-click',
                  name: 'Pay Per Click Advertising',
                  description:
                    'Run a high-performing pay per click campaign with SEO India Tech. Better targeting, tracking, and reporting to drive leads and sales.',
                  isPartOf: {
                    '@type': 'WebSite',
                    '@id': 'https://www.seoindiatech.com/#website',
                    url: 'https://www.seoindiatech.com/',
                    name: 'SEO India Tech',
                  },
                  about: {
                    '@type': 'Service',
                    '@id':
                      'https://www.seoindiatech.com/services/pay-per-click#service',
                  },
                },
                {
                  '@type': 'Service',
                  '@id':
                    'https://www.seoindiatech.com/services/pay-per-click#service',
                  name: 'Pay Per Click Advertising',
                  serviceType: 'Pay Per Click Services',
                  provider: {
                    '@type': 'Organization',
                    name: 'SEO India Tech',
                    url: 'https://www.seoindiatech.com/',
                  },
                  areaServed: 'IN',
                  description:
                    'Pay per click advertising services including pay per click campaign planning, Google Ads setup, ad copy, landing page feedback, remarketing, and reporting.',
                },
                {
                  '@type': 'FAQPage',
                  '@id':
                    'https://www.seoindiatech.com/services/pay-per-click#faq',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is a pay per click campaign?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text:
                          'A pay per click campaign is a paid ads setup where you pay when someone clicks your ad. It is commonly run on Google Ads to drive calls, leads, or sales.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name:
                        'How fast can a pay per click campaign start bringing leads?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text:
                          'In many cases, leads can start within days after launch. Results depend on your budget, competition, offer, and landing page quality.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name:
                        'How do you track results from pay per click advertising?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text:
                          'We set up conversion tracking for calls, forms, purchases, and key actions. Then we report what each action costs and which keywords drive it.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can PPC work for local businesses?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text:
                          'Yes. A pay per click campaign can target specific locations, service areas, and near me intent. It works well alongside local SEO.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name:
                        'What makes your pay per click advertising agency different?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text:
                          'We focus on clean structure, accurate tracking, and practical improvements. You get clear reporting and decisions based on performance, not guesses.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you also support other marketing services?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text:
                          'Yes. As a digital marketing services company, we can align PPC with SEO, content, and local SEO work for stronger long-term growth.',
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </Head>

      {/* Your PPC Component */}
      <PPC />
    </div>
  )
}
