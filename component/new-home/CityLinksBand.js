import Link from 'next/link'

const cities = [
  { name: 'Delhi', slug: 'seo-services-in-delhi' },
  { name: 'Mumbai', slug: 'seo-services-in-mumbai' },
  { name: 'Bangalore', slug: 'seo-services-in-bangalore' },
  { name: 'Chennai', slug: 'seo-services-in-chennai' },
  { name: 'Hyderabad', slug: 'seo-services-in-hyderabad' },
  { name: 'Pune', slug: 'seo-services-in-pune' },
  { name: 'Noida', slug: 'seo-services-in-noida' },
  { name: 'Gurgaon', slug: 'seo-services-in-gurgaon' },
  { name: 'Chandigarh', slug: 'seo-services-in-chandigarh' },
  { name: 'Jaipur', slug: 'seo-services-in-jaipur' },
  { name: 'Kolkata', slug: 'seo-services-in-kolkata' },
]

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
