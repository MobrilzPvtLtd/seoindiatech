import React from 'react'
import Socialmediamarketing from '@/component/social-media-marketing/Socialmediamarketing'
import Head from 'next/head'

export default function Index() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id':
          'https://www.seoindiatech.com/services/social-media-marketing#service',
        serviceType: 'Social Media Marketing Services',
        name: 'Social Media Marketing Services',
        provider: {
          '@type': 'Organization',
          name: 'SEO India Tech',
          url: 'https://www.seoindiatech.com/',
        },
        url: 'https://www.seoindiatech.com/services/social-media-marketing',
        description:
          'SEOIndiatech offers expert social media marketing services in India to grow your brand, engage audiences, and boost online visibility effectively.',
        areaServed: 'Worldwide',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://www.seoindiatech.com/services/social-media-marketing#breadcrumbs',
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
            name: 'Social Media Marketing',
            item:
              'https://www.seoindiatech.com/services/social-media-marketing',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id':
          'https://www.seoindiatech.com/services/social-media-marketing#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What services do you offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                "We offer a comprehensive range of digital services to help businesses grow and succeed online. Our core services include custom website development, mobile app development for both Android and iOS platforms, and digital marketing solutions such as SEO, PPC, and social media marketing. Whether you're a startup looking to establish an online presence or an enterprise seeking advanced digital solutions, we provide tailored strategies that align with your business goals. Our team of experienced developers, designers, and marketers work together to deliver performance-driven results, ensuring your business stays ahead of the competition.",
            },
          },
          {
            '@type': 'Question',
            name: 'What is the cost of building a website or app?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'The cost of building a website or app varies based on your project scope, features, design complexity, and required integrations. We offer flexible pricing models to suit startups, SMEs, and large enterprises. After a quick consultation, we provide a transparent quote with no hidden charges.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to complete a website project?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'The timeline for completing a website project can vary depending on its size, complexity, and specific features required. However, for a standard business website with common functionalities and a clean design, it typically takes 3 to 8 weeks from start to finish. This includes phases like discovery, planning, design, development, testing, and launch. Larger or more complex websites—such as e-commerce stores or custom portals—may take longer. We also accommodate urgent timelines where possible, without compromising on quality. Regular updates and approvals are shared throughout the process to keep you involved every step of the way.',
            },
          },

          {
            '@type': 'Question',
            name: 'Do you provide ongoing support after project delivery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, we absolutely do. Once your website or mobile app is launched, we offer ongoing support and maintenance services to ensure it continues to perform at its best. This includes fixing bugs, updating content, improving speed, adding new features, and implementing security updates. Our team stays available to handle technical issues and routine updates so your platform remains up-to-date, secure, and optimized. You can opt for monthly maintenance packages or pay-as-you-go support, depending on your needs. Our goal is to give you peace of mind while you focus on growing your business.',
            },
          },

          {
            '@type': 'Question',
            name: 'Is SEO included in the website development package?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, we include basic SEO as part of every website development package. This typically covers meta tags, keyword-friendly URLs, image optimization, mobile responsiveness, and proper HTML structure. These elements help ensure your website is search-engine friendly from day one. For businesses looking to drive more organic traffic and improve rankings on Google, we also offer advanced SEO services as an add-on. These include keyword research, backlink building, local SEO, content strategy, and technical SEO audits. Based on your marketing goals, we can create a customized SEO plan to help you generate more leads and visibility online.',
            },
          },

          {
            '@type': 'Question',
            name: 'How can you help my business grow online?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'We help your business grow online by combining technical excellence with creative strategy. We build responsive websites, user-friendly mobile apps, and run result-driven marketing campaigns. By focusing on user experience, keyword optimization, and performance analytics, we ensure your brand gets maximum visibility and lead conversions. Our services are tailored to each client, so you get a solution that fits your exact business needs.',
            },
          },

          {
            '@type': 'Question',
            name: 'Can you manage the website or app after launch?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Absolutely. We offer ongoing maintenance and support services for websites and mobile apps. From updates and bug fixes to performance optimization and security monitoring, our team ensures your digital assets run smoothly post-launch. You can also opt for monthly support packages for peace of mind.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Social Media Marketing Services India – SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers expert social media marketing services in India to grow your brand, engage audiences, and boost online visibility effectively."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/social-media-marketing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SERVICE PAGE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <Socialmediamarketing />
    </>
  )
}
