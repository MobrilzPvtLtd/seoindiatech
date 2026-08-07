import SeoHead from '@/component/common/SeoHead'
import { absoluteUrl } from '@/utils/siteConfig'
import PremiumIndustryPage from '@/component/industry-premium/PremiumIndustryPage'
import PremiumServiceSchema from '@/component/service-premium/PremiumServiceSchema'
import { getPremiumHubContent } from '@/utils/services/premium'
import Link from 'next/link'

export default function ServiceCategoryPage({ slug }) {
  const content = getPremiumHubContent(slug)

  if (!content) {
    return (
      <>
        <SeoHead title="Page Not Found" description="The requested service category could not be found." path="/services" noindex />
        <section className="bg-white dark:bg-background min-h-screen flex items-center justify-center">
          <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-heading mb-4">404</h1>
          <p className="text-muted text-lg mb-8">Service category not found.</p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full"
          >
            Go Back Home
          </Link>
          </div>
        </section>
      </>
    )
  }

  const pagePath = content.path
  const pageUrl = absoluteUrl(pagePath)

  return (
    <>
      <SeoHead
        title={content.seo.title}
        description={content.seo.description}
        path={pagePath}
        lcpImage={content.hero?.backgroundImage}
      />
      <PremiumServiceSchema content={content} url={pageUrl} />
      <main className="min-h-screen bg-white dark:bg-background text-heading dark:text-foreground">
        <PremiumIndustryPage content={content} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const hubSlugs = ['seo', 'digital-marketing', 'paid-advertising', 'design-and-development']
  return {
    paths: hubSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  }
}
