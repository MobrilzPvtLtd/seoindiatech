import dynamic from 'next/dynamic'
import SeoHead from '@/component/common/SeoHead'
import { HOME_IMAGES } from '@/utils/homeImages'
import { getPageSeo } from '@/utils/pageSeoRegistry'
import { PAGE_FAQS } from '@/utils/pageFaqs'
import { buildFaqPageSchema, buildOrganizationNode, buildWebSiteNode } from '@/utils/schemaBuilders'
import { SITE_URL } from '@/utils/siteConfig'

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

const HOME_ORG_DESCRIPTION =
  'SEO company in India with 14+ years of experience helping businesses grow through SEO, technical SEO, local SEO, e-commerce SEO and AI search.'

export default function Home() {
  const homeSeo = getPageSeo('/')
  const homeFaqs = PAGE_FAQS.home

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildWebSiteNode(),
      {
        ...buildOrganizationNode(),
        description: HOME_ORG_DESCRIPTION,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
        ],
      },
      buildFaqPageSchema(homeFaqs, SITE_URL),
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
