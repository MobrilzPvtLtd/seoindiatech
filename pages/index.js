import dynamic from 'next/dynamic'
import SeoHead from '@/component/common/SeoHead'
import { HOME_IMAGES } from '@/utils/homeImages'
import { getPageSeo } from '@/utils/pageSeoRegistry'
import { buildWebSiteNode } from '@/utils/schemaBuilders'

import Hero from '@/component/new-home/Hero'

const TopContactBar = dynamic(() => import('@/component/ui/TopContactBar'), { ssr: false })
const TrustedBy = dynamic(() => import('@/component/new-home/TrustedBy'))
const OfferingsSection = dynamic(() => import('@/component/new-home/OfferingsSection'))
const AboutBand = dynamic(() => import('@/component/new-home/AboutBand'))
const WhyUsSection = dynamic(() => import('@/component/new-home/WhyUsSection'))
const SolutionsShowcase = dynamic(() => import('@/component/new-home/SolutionsShowcase'))
const ResultsSection = dynamic(() => import('@/component/new-home/ResultsSection'))
const ProblemsSection = dynamic(() => import('@/component/new-home/ProblemsSection'))
const Industries = dynamic(() => import('@/component/new-home/Industries'))
const BenefitsSection = dynamic(() => import('@/component/new-home/BenefitsSection'))
const ProcessSection = dynamic(() => import('@/component/new-home/ProcessSection'))
const Testimonials = dynamic(() => import('@/component/new-home/Testimonials'))
const AuthorityBand = dynamic(() => import('@/component/new-home/AuthorityBand'))
const SeoHubBand = dynamic(() => import('@/component/new-home/SeoHubBand'))
const Blog = dynamic(() => import('@/component/new-home/Blog'))
const CityLinksBand = dynamic(() => import('@/component/new-home/CityLinksBand'))
const FAQAndContact = dynamic(() => import('@/component/new-home/FAQAndContact'), { ssr: false })
const ScrollToTop = dynamic(() => import('@/component/ui/ScrollToTop'), { ssr: false })

export default function Home() {
  const homeSeo = getPageSeo('/')
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildWebSiteNode(),
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
      <SeoHead
        title={homeSeo.title}
        description={homeSeo.description}
        path="/"
        schema={schemaData}
        lcpImage={HOME_IMAGES.hero}
      />

      <div className="hidden md:block">
        <TopContactBar />
      </div>
      <Hero />
      <TrustedBy />
      <OfferingsSection />
      <AboutBand />
      <WhyUsSection />
      <SolutionsShowcase />
      <ResultsSection />
      <ProblemsSection />
      <Industries />
      <BenefitsSection />
      <ProcessSection />
      <Testimonials />
      <AuthorityBand />
      <SeoHubBand />
      <Blog />
      <CityLinksBand />
      <FAQAndContact />
      <ScrollToTop />
    </>
  )
}
