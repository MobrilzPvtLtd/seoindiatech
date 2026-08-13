import CRMTools from '@/component/solution/CRM&Tool/CRMTool'
import SeoHead from '@/component/common/SeoHead'
import VisibleFaq from '@/component/common/VisibleFaq'
import SolutionInternalLinks from '@/component/solution/SolutionInternalLinks'
import { PAGE_FAQS } from '@/utils/pageFaqs'
import { buildSolutionServiceSchema } from '@/utils/schemaBuilders'
import { getSolutionInternalLinks } from '@/utils/internalLinks'

const schema = buildSolutionServiceSchema({
  path: '/solution/crm-and-tools',
  name: 'CRM and Automation Tools',
  description:
    'India CRM and SEO CRM system setup: manage leads, pipelines, and marketing workflows integrated with your SEO and digital marketing programs.',
  serviceType: 'CRM and Marketing Automation',
})

export default function CrmAndToolsPage() {
  const solutionLinks = getSolutionInternalLinks('crm-and-tools')

  return (
    <>
      <SeoHead
        title="India CRM & SEO CRM System | CRM & Tools | SEO India Tech"
        description="India CRM setup and SEO CRM systems to manage leads, pipelines, and marketing workflows. Integrate CRM with your SEO and digital marketing from SEO India Tech."
        path="/solution/crm-and-tools"
        schema={schema}
      />
      <CRMTools />
      <SolutionInternalLinks links={solutionLinks} title="Related SEO & Marketing Resources" />
      <VisibleFaq faqs={PAGE_FAQS.crmAndTools} minCount={8} showSchema />
    </>
  )
}
