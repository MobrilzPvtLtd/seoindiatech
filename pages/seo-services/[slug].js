import SeoHead from '@/component/common/SeoHead'
import { absoluteUrl } from '@/utils/siteConfig'
import Link from 'next/link'

import LocationHero from '@/component/location-services/LocationHero'
import LocationContent from '@/component/location-services/LocationContent'
import LocationFAQ from '@/component/location-services/LocationFAQ'
import LocationInternalLinks from '@/component/location-services/LocationInternalLinks'
import SeoSchema from '@/component/location-services/SeoSchema'
import { getLocationInternalLinks } from '@/utils/internalLinks'
import { shouldNoindexPath } from '@/utils/sitemapWaveConfig'
import { locations } from '../../utils/locations'

export default function LocationPage({ location, pageNoindex = false }) {
  if (!location) {
    return (
      <>
        <SeoHead title="Page Not Found" description="The requested location page could not be found." path="/seo-services" noindex />
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 dark:text-red-400">
            404 - Page Not Found
          </h1>
        </div>
      </>
    )
  }

  const pagePath = `/seo-services/${location.slug}`
  const pageUrl = absoluteUrl(pagePath)
  const internalLinks = getLocationInternalLinks(location.slug)

  return (
    <>
      <SeoHead
        title={location.title}
        description={location.description}
        path={pagePath}
        noindex={pageNoindex}
      />
      <SeoSchema location={location} url={pageUrl} />

      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-2">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services/local-seo-service" className="hover:text-primary">
              Local SEO
            </Link>
            <span className="mx-2">/</span>
            <span className="text-heading font-medium">SEO Services in {location.city}</span>
          </nav>
        </div>

        <LocationHero
          heading={location.heading}
          content={location.content}
          imageSrc={location.heroImage}
        />

        <LocationContent pageContent={location.pageContent} />

        <LocationFAQ faqs={location.faqs} city={location.city} />

        <LocationInternalLinks data={internalLinks} city={location.city} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = locations.map((loc) => ({
    params: { slug: loc.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const location = locations.find((item) => item.slug === params.slug)
  const pagePath = `/seo-services/${params.slug}`

  return {
    props: {
      location: location || null,
      pageNoindex: shouldNoindexPath(pagePath),
    },
  }
}
