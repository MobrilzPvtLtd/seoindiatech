import SeoHead from '@/component/common/SeoHead'
import { absoluteUrl } from '@/utils/siteConfig'
import PremiumIndustryPage from '@/component/industry-premium/PremiumIndustryPage'
import PremiumServiceSchema from '@/component/service-premium/PremiumServiceSchema'
import { getPremiumServiceContent } from '@/utils/services/premium'

export function createPremiumServicePage(slug) {
  const content = getPremiumServiceContent(slug)

  if (!content) {
      return function MissingServicePage() {
      return (
        <>
          <SeoHead
            title="Service Not Found | SEO India Tech"
            description="The requested service page could not be found."
            path={`/services/${slug}`}
            noindex
          />
          <div className="min-h-screen flex items-center justify-center bg-background pt-32">
            <h1 className="text-4xl font-bold text-primary">404 - Service Not Found</h1>
          </div>
        </>
      )
    }
  }

  const pagePath = content.seo.canonical || content.path
  const pageUrl = absoluteUrl(pagePath)

  return function PremiumServiceRoute() {
    return (
      <>
        <SeoHead
          title={content.seo.title}
          description={content.seo.description}
          path={pagePath}
          canonical={content.seo.canonical ? absoluteUrl(content.seo.canonical) : undefined}
          lcpImage={content.hero?.backgroundImage || content.hero?.image?.src}
        />
        <PremiumServiceSchema content={content} url={pageUrl} />
        <main className="min-h-screen bg-white dark:bg-background text-heading dark:text-foreground">
          <PremiumIndustryPage content={content} />
        </main>
      </>
    )
  }
}
