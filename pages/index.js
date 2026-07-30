import Head from 'next/head'

import TopContactBar from '@/component/ui/TopContactBar'
import Hero from '@/component/new-home/Hero'
import TrustedBy from '@/component/new-home/TrustedBy'
import OfferingsSection from '@/component/new-home/OfferingsSection'
import AboutBand from '@/component/new-home/AboutBand'
import WhyUsSection from '@/component/new-home/WhyUsSection'
import SolutionsShowcase from '@/component/new-home/SolutionsShowcase'
import ResultsSection from '@/component/new-home/ResultsSection'
import ProblemsSection from '@/component/new-home/ProblemsSection'
import Industries from '@/component/new-home/Industries'
import BenefitsSection from '@/component/new-home/BenefitsSection'
import ProcessSection from '@/component/new-home/ProcessSection'
import Testimonials from '@/component/new-home/Testimonials'
import AuthorityBand from '@/component/new-home/AuthorityBand'
import Blog from '@/component/new-home/Blog'
import FAQAndContact from '@/component/new-home/FAQAndContact'
import ScrollToTop from '@/component/ui/ScrollToTop'

export default function Home() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.seoindiatech.com/#organization',
        name: 'SEO India Tech',
        url: 'https://www.seoindiatech.com/',
        logo: 'https://www.seoindiatech.com/sit-transparent.png',
        description:
          'SEO INDIA TECH is a global 360-degree digital growth partner delivering AI-powered SEO, performance marketing, and technology solutions with transparent ROI reporting.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-8076676731',
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
            name: 'What is AI-powered digital marketing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI-powered digital marketing uses strategic automation and real-time optimization alongside human expertise - delivering better outcomes than fully manual traditional marketing.',
            },
          },
          {
            '@type': 'Question',
            name: 'What services does SEO India Tech provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO India Tech offers AI SEO, enterprise SEO, performance marketing, content marketing, web development, branding, and marketing automation for businesses worldwide.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you work with international clients?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, SEO India Tech works with clients across USA, UK, Australia, Europe, UAE, Canada, and worldwide.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to see SEO results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most clients see measurable SEO improvements within 3-6 months with transparent weekly reporting.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why should I choose SEO India Tech?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO India Tech combines AI-powered SEO, full-stack marketing, and technology with 14+ years of experience and transparent ROI reporting.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I get started with SEO India Tech?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Book a free consultation call to review your goals and receive a prioritized growth roadmap.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        <title>
          AI-Powered SEO & Digital Marketing Agency | SEO INDIA TECH
        </title>
        <meta
          name="description"
          content="Global digital growth partner for AI-powered SEO, performance marketing, and technology. 14+ years serving businesses in USA, UK, Australia, and worldwide."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
        <link rel="canonical" href="https://www.seoindiatech.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <TopContactBar />

      {/* 1. Hero - dark split, floating stats */}
      <Hero />

      {/* 2. Trust bar + logo marquee */}
      <TrustedBy />

      {/* 3. Core offerings - 3 pillars */}
      <OfferingsSection />

      {/* 4. About + 500+ stat */}
      <AboutBand />

      {/* 5. Why choose us - 3 reasons */}
      <WhyUsSection />

      {/* 6. Four core services - split image layout */}
      <SolutionsShowcase />

      {/* 7. Case study outcomes */}
      <ResultsSection />

      {/* 8. Problems we solve */}
      <ProblemsSection />

      {/* 9. Industries - centered pills (Autus-style) */}
      <Industries />

      {/* 10. Our benefits - Autus-style cards */}
      <BenefitsSection />

      {/* 11. Process */}
      <ProcessSection />

      {/* 12. Testimonials - dark Autus-style grid */}
      <Testimonials />

      {/* 13. Authority trust band */}
      <AuthorityBand />

      {/* 14. Blog - Autus-style grid */}
      <Blog />

      {/* 15. FAQ + Contact */}
      <FAQAndContact />

      <ScrollToTop />
    </>
  )
}
