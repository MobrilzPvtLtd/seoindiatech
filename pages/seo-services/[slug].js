import Head from 'next/head'
import { locations } from '../../utils/locations'

import LocationHero from '@/component/location-services/LocationHero'
import LocationContent from '@/component/location-services/LocationContent'
import LocationFAQ from '@/component/location-services/LocationFAQ'
import SeoSchema from '@//component/location-services/SeoSchema'

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

  const pageUrl = `https://www.seoindiatech.com/${location.slug}`

  return (
    <>
      <Head>
        <title>{location.title}</title>
        <meta name="description" content={location.description} />

        {/* SEO */}
        <meta property="og:title" content={location.title} />
        <meta property="og:description" content={location.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta name="robots" content="index, follow" />

        {/* Schema Markup */}
        <SeoSchema location={location} url={pageUrl} />
      </Head>

      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {/* HERO SECTION */}
        <LocationHero
          heading={location.heading}
          content={location.content}
          imageSrc={location.heroImage}
        />

        {/* MAIN PAGE CONTENT */}
        <LocationContent pageContent={location.pageContent} />

        {/* FAQ SECTION */}
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
