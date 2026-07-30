import SeoHead from '@/component/common/SeoHead'
import { absoluteUrl } from '@/utils/siteConfig'
import LocationHero from '@/component/location-services/LocationHero'
import IndustryBenefits from '@/component/industry-services/IndustryBenefits'
import LocationContent from '@/component/location-services/LocationContent'
import LocationFAQ from '@/component/location-services/LocationFAQ'
import IndustrySchema from '@/component/industry-services/IndustrySchema'
import { industries } from '@/utils/industries'

export default function IndustryPage({ industry }) {
  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <h1 className="text-4xl font-bold text-primary">404 - Page Not Found</h1>
      </div>
    )
  }

  const pagePath = `/industries/${industry.slug}`
  const pageUrl = absoluteUrl(pagePath)

  return (
    <>
      <SeoHead
        title={industry.title}
        description={industry.description}
        path={pagePath}
      />
      <IndustrySchema industry={industry} url={pageUrl} />

      <main className="min-h-screen bg-white dark:bg-background text-heading dark:text-foreground">
        <LocationHero
          heading={industry.heading}
          content={industry.content}
          imageSrc={industry.heroImage}
          imageAlt={`${industry.name} SEO services illustration`}
        />
        <IndustryBenefits label={industry.name} categoryTitle={industry.categoryTitle} />
        <LocationContent pageContent={industry.pageContent} />
        <LocationFAQ faqs={industry.faqs} city={industry.name} subject={industry.name} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: industries.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const industry = industries.find((item) => item.slug === params.slug)
  return { props: { industry: industry || null } }
}
