import React from 'react'
import Uiux from '@/component/UIUX/Uiux'
import SEO from '@/component/common/SEO'
import Head from 'next/head'

function page() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.seoindiatech.com/services/ui-ux-design/#service',
        name: 'UI/UX Design Services',
        url: 'https://www.seoindiatech.com/services/ui-ux-design',
        description:
          'SEOIndiatech provides professional UI/UX design services in India, creating intuitive, engaging, and user-friendly digital experiences that drive results.',
        provider: {
          '@type': 'Organization',
          name: 'SEO India Tech',
          url: 'https://www.seoindiatech.com/',
        },
        areaServed: 'Worldwide',
        serviceType: 'UI/UX Design',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://www.seoindiatech.com/services/ui-ux-design/#breadcrumbs',
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
            name: 'UI/UX Design',
            item: 'https://www.seoindiatech.com/services/ui-ux-design',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/services/ui-ux-design/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why is UI/UX design important for my business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'UI/UX design improves user satisfaction, increases engagement, and helps convert more leads into customers by enhancing the overall user experience.',
            },
          },
          {
            '@type': 'Question',
            name: 'What UI/UX services do you provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'We offer user interface design, user experience research, wireframing, prototyping, interaction design, and complete redesign services tailored to your business needs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide UI/UX design for mobile apps?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, we design intuitive and high-performing user interfaces for both iOS and Android applications with a focus on seamless usability.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        <title>UI/UX Design Services India– SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech provides professional UI/UX design services in India, creating intuitive, engaging, and user-friendly digital experiences that drive results."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/ui-ux-design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* UI/UX SERVICE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <Uiux />
    </>
  )
}

export default page
