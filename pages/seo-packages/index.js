import SeoPackage from '@/component/seo-packege/SeoPackage'
import SeoPackageContent from '@/component/seo-packege/SeoPackageContent'
import SeoHead from '@/component/common/SeoHead'
import { getPageSeo } from '@/utils/pageSeoRegistry'

const seo = getPageSeo('/seo-packages')

export default function SeoPackagesPage() {
  return (
    <>
      <SeoHead title={seo.title} description={seo.description} path="/seo-packages" />
      <SeoPackage />
      <SeoPackageContent />
    </>
  )
}
