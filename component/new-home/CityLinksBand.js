import Link from 'next/link'
import { LOCATION_CITIES } from '@/utils/internalLinks'

const cities = LOCATION_CITIES

export default function CityLinksBand() {
  return (
    <section className="bg-cream dark:bg-secondary/30 py-10 border-y border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
          SEO Services Across India
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/seo-services/${city.slug}`}
              className="rounded-full border border-border bg-white dark:bg-card px-4 py-2 text-sm font-medium text-heading hover:border-primary/40 hover:text-primary transition-colors"
            >
              SEO in {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
