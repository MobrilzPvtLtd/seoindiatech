import dynamic from 'next/dynamic'
import PremiumHero from './PremiumHero'
import TrustStatsBar from './TrustStatsBar'
import GeoQuickAnswer from './GeoQuickAnswer'
import PremiumSection from './PremiumSection'
import WhySeoMatters from './WhySeoMatters'
import PainPointsSection from './PainPointsSection'
import WhyChooseGrid from './WhyChooseGrid'
import ServicesIncluded from './ServicesIncluded'
import PageSectionNav from './PageSectionNav'
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

function buildNavSections(content) {
  const sections = []
  const add = (id, label, show = true) => {
    if (show && id) sections.push({ id, label })
  }
  add('why-seo', 'Overview', Boolean(content.whySeoMatters))
  add('why-us', 'Benefits', Boolean(content.whyChoose))
  add('services', 'Services', Boolean(content.services))
  add('pain-points', 'Challenges', Boolean(content.painPoints))
  add('key-takeaways', 'Takeaways', Boolean(content.keyTakeaways))
  add('seo-pillars', 'Pillars', Boolean(content.pillars))
  add('who-needs', 'Who It\'s For', Boolean(content.audiences))
  add('process', 'Process', Boolean(content.process))
  add('results', 'Results', Boolean(content.results))
  add('compare', 'Compare', Boolean(content.comparison))
  add('case-study', 'Case Study', Boolean(content.caseStudy))
  add('expert-guide', 'Expert Guide', Boolean(content.editorial))
  add('tools-trust', 'Tools', Boolean(content.toolsTrust))
  add('related', 'Related', Boolean(content.relatedIndustries))
  add('testimonials', 'Reviews', Boolean(content.testimonials))
  add('faq', 'FAQ', Boolean(content.faq))
  return sections
}

export default function PremiumIndustryPage({ content }) {
  const navSections = buildNavSections(content)

  return (
    <div className="premium-industry-page">
      <PremiumHero data={content.hero} />
      <TrustStatsBar data={content.trust} />
      {content.answerFirst && (
        <PremiumSection variant="white" tight>
          <div className="mx-auto max-w-3xl">
            <GeoQuickAnswer data={content.answerFirst} />
          </div>
        </PremiumSection>
      )}
      {navSections.length > 3 && <PageSectionNav sections={navSections} />}

      {content.whySeoMatters && <WhySeoMatters data={content.whySeoMatters} />}
      <WhyChooseGrid data={content.whyChoose} />
      <ServicesIncluded data={content.services} />
      {content.painPoints && <PainPointsSection data={content.painPoints} />}
      {content.keyTakeaways && <KeyTakeawaysSection data={content.keyTakeaways} />}
      {content.pillars && <PillarServicesSection data={content.pillars} />}
      <AudienceCards data={content.audiences} />
      <ProcessTimeline data={content.process} />
      <ResultsMetrics data={content.results} />
      <ComparisonTable data={content.comparison} />
      <CaseStudySection data={content.caseStudy} />
      {content.editorial && <EditorialAuthoritySection data={content.editorial} />}
      {content.toolsTrust && <ToolsTrustSection data={content.toolsTrust} />}
      <RelatedIndustries data={content.relatedIndustries} />
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
