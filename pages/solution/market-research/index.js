import MarektResearch from '@/component/solution/market_research/MarektResearch'
import SeoHead from '@/component/common/SeoHead'
import VisibleFaq from '@/component/common/VisibleFaq'
import { PAGE_FAQS } from '@/utils/pageFaqs'

export default function MarketResearchPage() {
  return (
    <>
      <SeoHead
        title="Market Research Services India | SEO India Tech"
        description="Data-driven market research services to understand your audience, competitors, and opportunities. Make informed growth decisions with SEO India Tech."
        path="/solution/market-research"
      />
      <MarektResearch />
      <VisibleFaq faqs={PAGE_FAQS.marketResearch} />
    </>
  )
}
