import SeoPackage from '@/component/seo-packege/SeoPackage'
import SeoPackageContent from '@/component/seo-packege/SeoPackageContent'
import SeoHead from '@/component/common/SeoHead'
import VisibleFaq from '@/component/common/VisibleFaq'
import { getPageSeo } from '@/utils/pageSeoRegistry'
import { PAGE_FAQS } from '@/utils/pageFaqs'
import { buildSeoPackagesSchema } from '@/utils/schemaBuilders'

const seo = getPageSeo('/seo-packages')

export default function SeoPackagesPage() {
  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        path="/seo-packages"
        schema={buildSeoPackagesSchema({ faqs: PAGE_FAQS.seoPackages })}
      />
      <SeoPackage />
      <SeoPackageContent />
      <VisibleFaq faqs={PAGE_FAQS.seoPackages} minCount={8} />
    </>
  )
}
