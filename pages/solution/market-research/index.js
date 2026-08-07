import MarektResearch from '@/component/solution/market_research/MarektResearch'
import SeoHead from '@/component/common/SeoHead'
import VisibleFaq from '@/component/common/VisibleFaq'
import { PAGE_FAQS } from '@/utils/pageFaqs'
import { buildSolutionServiceSchema } from '@/utils/schemaBuilders'

const schema = buildSolutionServiceSchema({
  path: '/solution/market-research',
  name: 'Market Research Services',
  description:
    'Data-driven market research services to understand your audience, competitors, and opportunities.',
  serviceType: 'Market Research',
})

export default function MarketResearchPage() {
  return (
    <>
      <SeoHead
        title="Market Research Services India | SEO India Tech"
        description="Data-driven market research services to understand your audience, competitors, and opportunities. Make informed growth decisions with SEO India Tech."
        path="/solution/market-research"
        schema={schema}
      />      <MarektResearch />
      <VisibleFaq faqs={PAGE_FAQS.marketResearch} minCount={8} showSchema />
    </>
  )
}
