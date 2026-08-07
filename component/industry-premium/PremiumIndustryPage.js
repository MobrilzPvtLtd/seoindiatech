import dynamic from 'next/dynamic'
import PremiumHero from './PremiumHero'
import TrustStatsBar from './TrustStatsBar'
import WhySeoMatters from './WhySeoMatters'
import PainPointsSection from './PainPointsSection'
import WhyChooseGrid from './WhyChooseGrid'
import ServicesIncluded from './ServicesIncluded'
import StickyMobileCta from './StickyMobileCta'

const EditorialAuthoritySection = dynamic(() =>
  import('./EditorialSections').then((m) => m.default)
)
const KeyTakeawaysSection = dynamic(() =>
  import('./EditorialSections').then((m) => m.KeyTakeawaysSection)
)
const SemanticTopicsSection = dynamic(() =>
  import('./EditorialSections').then((m) => m.SemanticTopicsSection)
)
const InternalLinksSection = dynamic(() =>
  import('./EditorialSections').then((m) => m.InternalLinksSection)
)
const PillarServicesSection = dynamic(() => import('./PillarServicesSection'))
const AudienceCards = dynamic(() => import('./AudienceCards'))
const ProcessTimeline = dynamic(() => import('./ProcessTimeline'))
const ComparisonTable = dynamic(() => import('./ComparisonTable'))
const ResultsMetrics = dynamic(() => import('./ResultsMetrics'))
const CaseStudySection = dynamic(() => import('./CaseStudySection'))
const RelatedIndustries = dynamic(() => import('./RelatedIndustries'))
const ToolsTrustSection = dynamic(() => import('./ToolsTrustSection'))
const IndustryTestimonials = dynamic(() => import('./IndustryTestimonials'))
const PremiumFaq = dynamic(() => import('./PremiumFaq'))
const PremiumContactBand = dynamic(() => import('./PremiumContactBand'))
const PremiumFinalCta = dynamic(() => import('./PremiumFinalCta'))

export default function PremiumIndustryPage({ content }) {
  return (
    <div className="premium-industry-page">
      <PremiumHero data={content.hero} />
      <TrustStatsBar data={content.trust} />
      {content.whySeoMatters && <WhySeoMatters data={content.whySeoMatters} />}
      {content.painPoints && <PainPointsSection data={content.painPoints} />}
      <WhyChooseGrid data={content.whyChoose} />
      <ServicesIncluded data={content.services} />
      {content.editorial && <EditorialAuthoritySection data={content.editorial} />}
      {content.keyTakeaways && <KeyTakeawaysSection data={content.keyTakeaways} />}
      {content.pillars && <PillarServicesSection data={content.pillars} />}
      <AudienceCards data={content.audiences} />
      <ProcessTimeline data={content.process} />
      <ComparisonTable data={content.comparison} />
      <ResultsMetrics data={content.results} />
      <CaseStudySection data={content.caseStudy} />
      <RelatedIndustries data={content.relatedIndustries} />
      {content.toolsTrust && <ToolsTrustSection data={content.toolsTrust} />}
      {content.semanticTopics && <SemanticTopicsSection data={content.semanticTopics} />}
      {content.internalLinks && <InternalLinksSection data={content.internalLinks} />}
      <IndustryTestimonials data={content.testimonials} />
      <PremiumFaq data={content.faq} />
      {content.contact && <PremiumContactBand data={content.contact} />}
      <PremiumFinalCta data={content.finalCta} />
      <StickyMobileCta label="Get a Free Quote" href={content.finalCta.primaryCta.href} />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </div>
  )
}
