import SeoHead from '@/component/common/SeoHead'
import { absoluteUrl } from '@/utils/siteConfig'

import LocationHero from '@/component/location-services/LocationHero'
import LocationContent from '@/component/location-services/LocationContent'
import LocationFAQ from '@/component/location-services/LocationFAQ'
import SeoSchema from '@/component/location-services/SeoSchema'
import { locations } from '../../utils/locations'

export default function LocationPage({ location }) {
  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 dark:text-red-400">
          404 - Page Not Found
        </h1>
      </div>
    )
  }

  const pagePath = `/seo-services/${location.slug}`
  const pageUrl = absoluteUrl(pagePath)

  return (
    <>
      <SeoHead
        title={location.title}
        description={location.description}
        path={pagePath}
      />
      <SeoSchema location={location} url={pageUrl} />

      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <LocationHero
          heading={location.heading}
          content={location.content}
          imageSrc={location.heroImage}
        />

        <LocationContent pageContent={location.pageContent} />

        <LocationFAQ faqs={location.faqs} city={location.city} />
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

  return {
    props: {
      location: location || null,
    },
  }
}
