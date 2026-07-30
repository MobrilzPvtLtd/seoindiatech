import Head from 'next/head'
import LocationHero from '@/component/location-services/LocationHero'
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

  const pageUrl = `https://www.seoindiatech.com/industries/${industry.slug}`

  return (
    <>
      <Head>
        <title>{industry.title}</title>
        <meta name="description" content={industry.description} />
        <meta property="og:title" content={industry.title} />
        <meta property="og:description" content={industry.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <IndustrySchema industry={industry} url={pageUrl} />
      </Head>

      <main className="min-h-screen bg-white dark:bg-background text-heading dark:text-foreground">
        <LocationHero
          heading={industry.heading}
          content={industry.content}
          imageSrc={industry.heroImage}
        />
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
