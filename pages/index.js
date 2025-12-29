import Image from 'next/image'
import { Geist, Geist_Mono } from 'next/font/google'
import HomePage from '@/component/home/HomePage'
import SEO from '@/component/SEO/SEO'
import Head from 'next/head'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function Home() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.seoindiatech.com/#organization',
        name: 'SEO India Tech',
        url: 'https://www.seoindiatech.com/',
        logo:
          'https://www.seoindiatech.com/wp-content/uploads/2024/01/logo.png',
        description:
          'SEOIndiatech offers expert SEO & digital marketing services in India, boosting your website traffic, rankings, and online visibility for measurable results.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-XXXXXXXXXX',
          contactType: 'Customer Service',
          areaServed: 'Worldwide',
        },
        sameAs: [
          'https://www.facebook.com/people/SEOIndiatech/',
          'https://www.instagram.com/seoindiatech/',
          'https://x.com/seoindiatech411',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.seoindiatech.com/#breadcrumbs',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.seoindiatech.com/',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What services does SEO India Tech provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'SEO India Tech offers SEO services, digital marketing, content creation, website development, branding, and performance marketing solutions for businesses of all sizes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why should I choose SEO India Tech?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'SEO India Tech provides performance based  strategies, transparent reporting, affordable pricing, and expert support to help businesses grow online.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you work with international clients?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, SEO India Tech works with clients worldwide across various industries, delivering tailored solutions for effective online visibility.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Expert SEO & Digital Marketing Services - SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers expert SEO & digital marketing services in India, boosting your website traffic, rankings, and online visibility for measurable results."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
        <link rel="canonical" href="https://www.seoindiatech.com" />

        {/* SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>
      <HomePage />
    </>
  )
}
