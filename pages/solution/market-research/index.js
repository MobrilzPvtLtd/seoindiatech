import MarektResearch from '@/component/solution/market_research/MarektResearch'
import SeoHead from '@/component/common/SeoHead'
import VisibleFaq from '@/component/common/VisibleFaq'
import SolutionInternalLinks from '@/component/solution/SolutionInternalLinks'
import { PAGE_FAQS } from '@/utils/pageFaqs'
import { buildSolutionServiceSchema } from '@/utils/schemaBuilders'
import { getSolutionInternalLinks } from '@/utils/internalLinks'

const schema = buildSolutionServiceSchema({
  path: '/solution/market-research',
  name: 'Market Research Services',
  description:
    'Data-driven market research services to understand your audience, competitors, and opportunities.',
  serviceType: 'Market Research',
})

export default function MarketResearchPage() {
  const solutionLinks = getSolutionInternalLinks('market-research')

  return (
    <>
      <SeoHead
        title="Market Research Services India | SEO India Tech"
        description="Data-driven market research services to understand your audience, competitors, and opportunities. Make informed growth decisions with SEO India Tech."
        path="/solution/market-research"
        schema={schema}
      />      <MarektResearch />
      <SolutionInternalLinks links={solutionLinks} title="Related SEO & Marketing Resources" />
      <VisibleFaq faqs={PAGE_FAQS.marketResearch} minCount={8} showSchema />
    </>
  )
}
