import dynamic from 'next/dynamic'
import PremiumHero from './PremiumHero'
import TrustStatsBar from './TrustStatsBar'
import WhyChooseGrid from './WhyChooseGrid'
import ServicesIncluded from './ServicesIncluded'
import StickyMobileCta from './StickyMobileCta'

const AudienceCards = dynamic(() => import('./AudienceCards'))
const ProcessTimeline = dynamic(() => import('./ProcessTimeline'))
const ComparisonTable = dynamic(() => import('./ComparisonTable'))
const ResultsMetrics = dynamic(() => import('./ResultsMetrics'))
const CaseStudySection = dynamic(() => import('./CaseStudySection'))
const RelatedIndustries = dynamic(() => import('./RelatedIndustries'))
const IndustryTestimonials = dynamic(() => import('./IndustryTestimonials'))
const PremiumFaq = dynamic(() => import('./PremiumFaq'))
const PremiumFinalCta = dynamic(() => import('./PremiumFinalCta'))

export default function PremiumIndustryPage({ content }) {
  return (
    <div className="premium-industry-page">
      <PremiumHero data={content.hero} />
      <TrustStatsBar data={content.trust} />
      <WhyChooseGrid data={content.whyChoose} />
      <ServicesIncluded data={content.services} />
      <AudienceCards data={content.audiences} />
      <ProcessTimeline data={content.process} />
      <ComparisonTable data={content.comparison} />
      <ResultsMetrics data={content.results} />
      <CaseStudySection data={content.caseStudy} />
      <RelatedIndustries data={content.relatedIndustries} />
      <IndustryTestimonials data={content.testimonials} />
      <PremiumFaq data={content.faq} />
      <PremiumFinalCta data={content.finalCta} />
      <StickyMobileCta label={content.finalCta.primaryCta.label} href={content.finalCta.primaryCta.href} />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </div>
  )
}
