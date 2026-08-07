import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function LinkGrid({ links }) {
  if (!links?.length) return null

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex flex-col rounded-2xl border border-border bg-white p-5 transition-all hover:border-primary/30 hover:shadow-md dark:bg-card"
        >
          <h3 className="font-semibold text-heading group-hover:text-primary">{link.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{link.description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  )
}

function CityPills({ links }) {
  if (!links?.length) return null

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-heading transition-colors hover:border-primary/40 hover:text-primary dark:bg-card"
        >
          {link.title.replace('SEO Services in ', 'SEO in ')}
        </Link>
      ))}
    </div>
  )
}

export default function LocationInternalLinks({ data, city }) {
  if (!data) return null

  return (
    <section className="py-16 bg-cream/50 dark:bg-secondary/20 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Explore More</p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-heading md:text-3xl">
            SEO Resources for {city} Businesses
          </h2>
          <p className="mt-3 text-body">
            Related services, industry programs, and nearby city pages to help you plan your next growth step.
          </p>
        </div>

        {data.services?.length > 0 && (
          <div>
            <h3 className="mb-4 text-lg font-bold text-heading">Core SEO Services</h3>
            <LinkGrid links={data.services} />
          </div>
        )}

        {data.industries?.length > 0 && (
          <div>
            <h3 className="mb-4 text-lg font-bold text-heading">Industry SEO Programs</h3>
            <LinkGrid links={data.industries} />
          </div>
        )}

        {data.cities?.length > 0 && (
          <div>
            <h3 className="mb-4 text-lg font-bold text-heading">SEO Services in Other Cities</h3>
            <CityPills links={data.cities} />
          </div>
        )}

        {data.resources?.length > 0 && (
          <div>
            <h3 className="mb-4 text-lg font-bold text-heading">Guides &amp; Next Steps</h3>
            <LinkGrid links={data.resources} />
          </div>
        )}
      </div>
    </section>
  )
}
