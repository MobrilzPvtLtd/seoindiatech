import React from 'react';
import Head from 'next/head';
import DigitalMarketing from '@/component/services/digital-marketing/DigitalMarketing';

export default function index() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.seoindiatech.com/services/digital-marketing#webpage",
        "url": "https://www.seoindiatech.com/services/digital-marketing",
        "name": "AI Focused Digital Marketing Company",
        "description": "AI focused digital marketing services company offering Ecommerce SEO services, Local SEO services, local SEO marketing services, and Small business SEO services.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.seoindiatech.com/#website",
          "name": "SEO India Tech",
          "url": "https://www.seoindiatech.com/"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.seoindiatech.com/services/digital-marketing#service",
        "name": "Digital Marketing Services",
        "serviceType": "Digital Marketing",
        "provider": {
          "@type": "Organization",
          "name": "SEO India Tech",
          "url": "https://www.seoindiatech.com/"
        },
        "areaServed": "IN",
        "description": "Digital marketing services company providing Ecommerce SEO services, Local SEO services, local SEO marketing services, and Small business SEO services."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.seoindiatech.com/services/digital-marketing#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does an AI focused digital marketing company do",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It uses AI tools to support research and testing, then applies human review to improve SEO, ads, and conversions."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from a digital marketing services company",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Small improvements can show in 4 to 8 weeks. Strong SEO growth usually takes 3 to 6 months, depending on competition and site condition."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer Ecommerce SEO services for Shopify and WooCommerce",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work on product pages, category structure, technical fixes, and tracking to improve rankings and sales actions."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in Local SEO services",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Business Profile work, local pages, citations, review support, and local content that targets map and local search results."
            }
          },
          {
            "@type": "Question",
            "name": "Are Small business SEO services different from enterprise SEO",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Small business SEO focuses on fast wins, fewer pages, clear priorities, and budget control while building steady growth."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use local SEO marketing services if I have multiple locations",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We create location pages, manage listings, and keep each location consistent across profiles and citations."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Title */}
        <title>AI Focused Digital Marketing Company | SEO India Tech</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="AI focused digital marketing services company for SEO, Ecommerce SEO services, Local SEO services, and Small business SEO services that drive leads."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/digital-marketing"
        />

        {/* Open Graph */}
        <meta property="og:title" content="AI Focused Digital Marketing Company" />
        <meta
          property="og:description"
          content="Work with a digital marketing services company that improves SEO, Ecommerce SEO services, and local visibility to increase leads."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.seoindiatech.com/services/digital-marketing"
        />
        <meta property="og:site_name" content="SEO India Tech" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Focused Digital Marketing Company" />
        <meta
          name="twitter:description"
          content="Digital marketing services company for Ecommerce SEO services, Local SEO marketing services, and small business growth."
        />
        <meta
          name="twitter:url"
          content="https://www.seoindiatech.com/services/digital-marketing"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Digital Marketing Component */}
      <DigitalMarketing />
    </>
  );
}
