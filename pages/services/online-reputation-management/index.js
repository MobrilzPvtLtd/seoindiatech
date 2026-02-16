import React from 'react'
import Head from 'next/head'
import OnlineReputation from '@/component/services/online-reputation-management/OnlineReputation'

export default function Index() {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Online Reputation Management Services | SEO India Tech</title>
        <meta
          name="description"
          content="Result-driven online reputation management services for brands. Review support, branded search improvements, and google business profile gbp optimization."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Result-Driven Online Reputation Management Services"
        />
        <meta
          property="og:description"
          content="Protect trust, improve branded search results, manage reviews, and strengthen listings with online reputation management for business growth."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.seoindiatech.com/services/online-reputation-management"
        />
        <meta
          property="og:image"
          content="https://www.seoindiatech.com/assets/images/orm-cover.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Online Reputation Management That Builds Trust"
        />
        <meta
          name="twitter:description"
          content="Online reputation management services that help you handle reviews, fix listings, and improve what customers see first."
        />
        <meta
          name="twitter:image"
          content="https://www.seoindiatech.com/assets/images/orm-cover.jpg"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Online Reputation Management Services",
              "url": "https://www.seoindiatech.com/services/online-reputation-management",
              "description": "Result-driven online reputation management services that help brands manage reviews, improve branded search results, and strengthen local listings.",
              "isPartOf": {
                "@type": "WebSite",
                "name": "SEO India Tech",
                "url": "https://www.seoindiatech.com/"
              }
            }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Online Reputation Management Services",
              "serviceType": "Online Reputation Management",
              "provider": {
                "@type": "Organization",
                "name": "SEO India Tech",
                "url": "https://www.seoindiatech.com/"
              },
              "areaServed": "IN",
              "url": "https://www.seoindiatech.com/services/online-reputation-management",
              "description": "Online reputation management services to monitor reviews, improve branded search results, support Google Business Profile, and protect brand trust."
            }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are online reputation management services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Online reputation management services help you monitor reviews, fix listings, respond to complaints, and improve what shows in search results for your brand."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does online reputation management for business help sales?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It builds trust when people search your brand. Better reviews and accurate listings often lead to more calls, visits, and form submissions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is online reputation management in digital marketing different from SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It works with SEO, but focuses on branded search results, reviews, and public sentiment. SEO supports discovery, while reputation work supports trust and decisions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer online reputation management services for small business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We focus on high impact actions first, such as review handling, listing cleanup, and Google Business Profile updates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does online reputation management take to show results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Some changes show in days, like listing fixes and faster review replies. Search result improvements usually take weeks, depending on competition and current brand signals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is included in google business profile gbp optimization?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It includes listing accuracy, categories, services, photos, review workflows, and updates that improve calls, direction requests, and customer confidence."
                  }
                }
              ]
            }
            `,
          }}
        />
      </Head>

      {/* Main Component */}
      <div>
        <OnlineReputation />
      </div>
    </>
  )
}
