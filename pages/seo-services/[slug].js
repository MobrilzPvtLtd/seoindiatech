import Head from 'next/head';
import { locations } from '../../utils/locations';
import LocationHero from '@/component/location-services/LocationHero';
import LocationFAQ from '@/component/location-services/LocationFAQ'; // ← adjust path if needed

export default function LocationPage({ location }) {
  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 dark:text-red-400">
          404 - Page Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{location.title}</title>
        <meta name="description" content={location.description} />
        {/* Optional: better social sharing / SEO */}
        <meta property="og:title" content={location.title} />
        <meta property="og:description" content={location.description} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {/* Hero Section */}
        <LocationHero
          heading={location.heading}
          content={location.content}
          imageSrc={location.heroImage}           // ← now using the dynamic heroImage field
        />

        {/* FAQ Section */}
        <LocationFAQ
          faqs={location.faqs}                    // will use custom if exists, else defaults
          city={location.city}
        />

        {/* You can add more sections later, e.g.:
        <LocationServicesList city={location.city} />
        <LocationContactCTA city={location.city} />
        */}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = locations.map((loc) => ({
    params: { slug: loc.slug },
  }));

  return {
    paths,
    fallback: false, // 404 for unknown slugs
  };
}

export async function getStaticProps({ params }) {
  const location = locations.find((item) => item.slug === params.slug);

  return {
    props: {
      location: location || null,
    },
    // revalidate: 3600, // optional: ISR every hour if you update locations often
  };
}