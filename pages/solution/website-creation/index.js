import WebsiteCreation from '@/component/solution/website_creation/WebsiteCreation'
import SeoHead from '@/component/common/SeoHead'
import VisibleFaq from '@/component/common/VisibleFaq'
import { PAGE_FAQS } from '@/utils/pageFaqs'

export default function WebsiteCreationPage() {
  return (
    <>
      <SeoHead
        title="Website Creation Services India | SEO India Tech"
        description="Build responsive, SEO-optimized websites that convert visitors into customers. Professional website creation services from SEO India Tech."
        path="/solution/website-creation"
      />
      <WebsiteCreation />
      <VisibleFaq faqs={PAGE_FAQS.websiteCreation} minCount={8} showSchema />
    </>
  )
}
