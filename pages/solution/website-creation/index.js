import WebsiteCreation from '@/component/solution/website_creation/WebsiteCreation'
import SeoHead from '@/component/common/SeoHead'
import VisibleFaq from '@/component/common/VisibleFaq'
import SolutionInternalLinks from '@/component/solution/SolutionInternalLinks'
import { PAGE_FAQS } from '@/utils/pageFaqs'
import { buildSolutionServiceSchema } from '@/utils/schemaBuilders'
import { getSolutionInternalLinks } from '@/utils/internalLinks'

const schema = buildSolutionServiceSchema({
  path: '/solution/website-creation',
  name: 'Website Creation Services',
  description:
    'Build responsive, SEO-optimized websites that convert visitors into customers.',
  serviceType: 'Website Design and Development',
})

export default function WebsiteCreationPage() {
  const solutionLinks = getSolutionInternalLinks('website-creation')

  return (
    <>
      <SeoHead
        title="Website Creation Services India | SEO India Tech"
        description="Build responsive, SEO-optimized websites that convert visitors into customers. Professional website creation services from SEO India Tech."
        path="/solution/website-creation"
        schema={schema}
      />
      <WebsiteCreation />
      <SolutionInternalLinks links={solutionLinks} title="Related SEO & Web Resources" />
      <VisibleFaq faqs={PAGE_FAQS.websiteCreation} minCount={8} showSchema />
    </>
  )
}
