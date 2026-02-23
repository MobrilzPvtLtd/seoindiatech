import React from 'react'
import Head from 'next/head'
import AppStoreOptimization from '@/component/services/app-store-optimization/AppStoreOptimization'

export default function AppStoreOptimizationPage() {
  return (
    <>
      <Head>
        {/* Primary Meta */}
        <title>App Store Optimization India | SEO India Tech</title>
        <meta
          name="description"
          content="Get more installs with app store optimization services. SEO India Tech improves rankings, conversion, and retention with clean, tested ASO strategies."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/app-store-optimization"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="App Store Optimization India That Brings More Installs"
        />
        <meta
          property="og:description"
          content="Want higher rankings and better install rates. Get app store optimization services built on keyword research, testing, and clear reporting."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.seoindiatech.com/services/app-store-optimization"
        />
        <meta
          property="og:image"
          content="https://www.seoindiatech.com/wp-content/uploads/aso-service.jpg"
        />
        <meta property="og:site_name" content="SEO India Tech" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="App Store Optimization India | More Installs, Better Rankings"
        />
        <meta
          name="twitter:description"
          content="App store optimization services that improve visibility and conversion. Keyword mapping, creatives, testing, and reporting."
        />
        <meta
          name="twitter:image"
          content="https://www.seoindiatech.com/wp-content/uploads/aso-service.jpg"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.seoindiatech.com/services/app-store-optimization#webpage",
                  "url": "https://www.seoindiatech.com/services/app-store-optimization",
                  "name": "App Store Optimization India | SEO India Tech",
                  "description": "App store optimization services to improve rankings, conversion, and installs on Google Play and the Apple App Store.",
                  "inLanguage": "en-IN",
                  "isPartOf": {
                    "@id": "https://www.seoindiatech.com/#website"
                  }
                },
                {
                  "@type": "Service",
                  "@id": "https://www.seoindiatech.com/services/app-store-optimization#service",
                  "name": "App Store Optimization Services",
                  "serviceType": "App Store Optimization",
                  "provider": {
                    "@type": "Organization",
                    "name": "SEO India Tech",
                    "url": "https://www.seoindiatech.com/"
                  },
                  "areaServed": [
                    {
                      "@type": "Country",
                      "name": "India"
                    }
                  ],
                  "url": "https://www.seoindiatech.com/services/app-store-optimization",
                  "description": "ASO app store optimization services covering keyword research, listing optimization, creative improvements, testing, and reporting for Android and iOS.",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "INR",
                    "price": "0",
                    "description": "Request a quote for ASO packages."
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.seoindiatech.com/services/app-store-optimization#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What are app store optimization services?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "App store optimization services improve your app visibility and installs by optimizing keywords, listing copy, creatives, and conversion factors in app stores."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does app store optimization take to show results?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most apps see early movement within 2 to 6 weeks, while stronger results typically build over 2 to 3 months with ongoing updates and testing."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you provide app store optimization India targeting?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We create keyword and listing plans focused on app store optimization India goals, including regional targeting and language considerations when needed."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the difference between ASO and SEO?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ASO focuses on ranking and conversion inside app stores, while SEO focuses on visibility in search engines. Using both together can improve overall discovery."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you work as an app store optimization agency for Android and iOS?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We optimize listings for Google Play and the Apple App Store using store-specific best practices and clear reporting."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can ASO support answer engine optimization services?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. When your app pages and FAQs match user questions, it can improve visibility in AI answers and other search features."
                      }
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.seoindiatech.com/#website",
                  "url": "https://www.seoindiatech.com/",
                  "name": "SEO India Tech",
                  "inLanguage": "en-IN"
                }
              ]
            })
          }}
        />
      </Head>

      <AppStoreOptimization />
    </>
  )
}