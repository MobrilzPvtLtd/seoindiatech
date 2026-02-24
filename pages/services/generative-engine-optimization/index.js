import React from 'react';
import Head from 'next/head';
import GEO from '@/component/services/generative-engine-optimization/GEO';

export default function Index() {
  return (
    <div>
      <Head>
        {/* Meta Title & Description */}
        <title>Generative Engine Optimization Agency India</title>
        <meta
          name="description"
          content="Use proven generative engine optimization strategies to help your brand appear in AI search answers and improve online visibility with our GEO experts."
        />

        {/* Open Graph / OG Tags */}
        <meta property="og:title" content="Rank in AI Search with GEO Experts" />
        <meta
          property="og:description"
          content="Drive AI based search visibility using tested generative engine optimization strategies. Work with a trusted digital marketing company in India today."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.seoindiatech.com/services/generative-engine-optimization"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Found in AI Search Results" />
        <meta
          name="twitter:description"
          content="Build strong AI search presence with a leading generative engine optimization company in India."
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Generative Engine Optimization Agency",
              "url": "https://www.seoindiatech.com/services/generative-engine-optimization",
              "description":
                "Generative engine optimization strategies for brands by a leading digital marketing company in India."
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Generative Engine Optimization Services",
              "provider": {
                "@type": "Organization",
                "name": "SEO India Tech"
              },
              "areaServed": "India",
              "description":
                "AI SEO company offering generative engine optimization geo strategies for brands."
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are generative engine optimization strategies",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generative engine optimization strategies help your content appear in AI generated search answers by making it clear and structured."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does a generative engine optimization company help",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A generative engine optimization company improves your website content so AI tools can read and include it in responses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is GEO important for brands",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generative engine optimization geo strategies for brands help businesses appear in AI driven results."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can GEO replace SEO",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GEO supports SEO by preparing your content for AI tools."
                  }
                }
              ]
            }),
          }}
        />
      </Head>

      {/* Main Component */}
      <GEO />
    </div>
  );
}