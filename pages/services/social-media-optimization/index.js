import React from 'react'
import Head from 'next/head'
import SocialMediaOptimization from '@/component/services/social-media-optimization/SocialMediaOptimization'

export default function SocialMediaOptimizationPage() {
  return (
    <>
      <Head>
        {/* Primary Meta */}
        <title>
          Social Media Optimization Services in India | SEO India Tech
        </title>
        <meta
          name="description"
          content="Get social media optimization services that improve reach, engagement, and leads. SMO support plus GBP optimization and branding for India businesses."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/social-media-optimization"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Social Media Optimization Services in India"
        />
        <meta
          property="og:description"
          content="Grow followers, reach, and leads with social media optimization services, branding support, and Google Business Profile GBP optimization."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.seoindiatech.com/services/social-media-optimization"
        />
        <meta property="og:site_name" content="SEO India Tech" />
        <meta property="og:image" content="Replace with your OG image URL" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Social Media Optimization Services in India"
        />
        <meta
          name="twitter:description"
          content="Social media optimization services for steady growth. Better profiles, better content, better engagement. Includes GBP optimization."
        />
        <meta
          name="twitter:image"
          content="Replace with your Twitter image URL"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                '@id':
                  'https://www.seoindiatech.com/services/social-media-optimization#webpage',
                url:
                  'https://www.seoindiatech.com/services/social-media-optimization',
                name: 'Social Media Optimization',
                description:
                  'Social media optimization services in India to improve profile quality, content consistency, engagement, and leads. Includes support for digital branding services and Google Business Profile GBP optimization.',
                isPartOf: {
                  '@type': 'WebSite',
                  '@id': 'https://www.seoindiatech.com/#website',
                  name: 'SEO India Tech',
                  url: 'https://www.seoindiatech.com/',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                '@id':
                  'https://www.seoindiatech.com/services/social-media-optimization#service',
                name: 'Social Media Optimization Services',
                serviceType: 'Social Media Optimization',
                provider: {
                  '@type': 'Organization',
                  name: 'SEO India Tech',
                  url: 'https://www.seoindiatech.com/',
                },
                areaServed: {
                  '@type': 'Country',
                  name: 'India',
                },
                description:
                  'Social media optimization services that improve social profiles, content planning, engagement routines, and reporting. Optional support includes digital branding services and Google Business Profile GBP optimization.',
              },
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                '@id':
                  'https://www.seoindiatech.com/services/social-media-optimization#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What are social media optimization services?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Social media optimization services improve your social profiles, content plan, and engagement so you get better reach, stronger trust, and more leads from social platforms.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name:
                      'How is an SMO agency different from a social media marketing team?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'A social media optimization agency focuses on profile structure, content system, discoverability, and ongoing improvement. Marketing may also include paid campaigns and broader promotion.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name:
                      'How long does it take to see results from social media optimization services India?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Most brands see early improvements in profile visits and engagement in 4 to 6 weeks. Strong lead growth usually takes 2 to 3 months of consistent work.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name:
                      'Do you support Google Business Profile GBP optimization with SMO?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Yes. We can align social activity with Google Business Profile GBP optimization so your brand looks consistent across Maps and social platforms.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name:
                      'Which platforms do you work on for social media optimization services?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'We support Instagram, Facebook, LinkedIn, X, YouTube, and Pinterest. Platform choice depends on your audience and goals.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name:
                      'Can a digital marketing company in India manage SMO and branding together?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Yes. One team can manage SMO, digital branding services, and other channels with one plan and shared reporting.',
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </Head>

      <SocialMediaOptimization />
    </>
  )
}
