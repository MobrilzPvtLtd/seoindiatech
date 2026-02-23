import React from 'react'
import Head from 'next/head'
import GBPOptimization from '@/component/services/gbp-optimization/GBPOptimization'

export default function GBPOptimizationPage() {
  return (
    <>
      <Head>
        {/* Primary Meta */}
        <title>
          Google Business Profile Optimization | SEO India Tech
        </title>
        <meta
          name="description"
          content="Get more calls and visits with GBP optimization services by SEO India Tech. Improve map visibility, reviews, posts, and local signals."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/gbp-optimization"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Google Business Profile Optimization That Brings Calls"
        />
        <meta
          property="og:description"
          content="Fix profile details, categories, reviews, photos, and posts. Get steady local visibility and more customer actions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.seoindiatech.com/services/gbp-optimization"
        />
        <meta property="og:site_name" content="SEO India Tech" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Google Business Profile Optimization That Gets You Found"
        />
        <meta
          name="twitter:description"
          content="GBP optimization services for better map visibility, more calls, and stronger local trust."
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://www.seoindiatech.com/services/gbp-optimization#webpage",
                "url": "https://www.seoindiatech.com/services/gbp-optimization",
                "name": "Google Business Profile Optimization",
                "description": "GBP optimization services to improve Google Business Profile visibility, engagement, and customer actions for local businesses.",
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://www.seoindiatech.com/#website",
                  "url": "https://www.seoindiatech.com/",
                  "name": "SEO India Tech"
                },
                "publisher": {
                  "@type": "Organization",
                  "@id": "https://www.seoindiatech.com/#organization",
                  "name": "SEO India Tech",
                  "url": "https://www.seoindiatech.com/"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://www.seoindiatech.com/services/gbp-optimization#service",
                "name": "GBP Optimization Services",
                "serviceType": "Google Business Profile Optimization",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://www.seoindiatech.com/#organization",
                  "name": "SEO India Tech",
                  "url": "https://www.seoindiatech.com/"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                },
                "url": "https://www.seoindiatech.com/services/gbp-optimization",
                "description": "gbp optimization services that improve profile accuracy, categories, services, posts, photos, reviews, and tracking for better local visibility and actions."
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "@id": "https://www.seoindiatech.com/services/gbp-optimization#faq",
                "url": "https://www.seoindiatech.com/services/gbp-optimization",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What are gbp optimization services and what do they include?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "gbp optimization services improve your Google Business Profile details, categories, services, photos, posts, and reviews so you get more calls, direction requests, and website visits."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does google business profile optimization take to show results?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Small fixes can improve actions within days, but steady gains usually take a few weeks as reviews, posts, and local signals build."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can a google my business SEO company help if my profile is already verified?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Verification is only the start. A google my business SEO company can improve categories, services, content, reviews, and tracking to increase visibility."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the difference between google business profile SEO and website SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "google business profile SEO improves your Maps and local listing visibility. Website SEO improves your site rankings. Together, they support a stronger local business SEO service plan."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do reviews affect google business profile gbp optimization?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Reviews influence trust and user actions. A good review process and clear responses also support google business profile gbp optimization over time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need a local SEO service company along with profile work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "If you want stronger results, yes. A local SEO service company can improve citations, location pages, and local signals that support your profile."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </Head>

      <GBPOptimization />
    </>
  )
}