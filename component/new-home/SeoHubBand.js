import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getHomepageHubLinks } from '@/utils/internalLinks'

export default function SeoHubBand() {
  const hubs = getHomepageHubLinks()

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Explore</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            SEO Resources &amp; Services
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg">
            Start with the core areas most businesses use to plan search growth, content, and conversions.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hubs.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="group flex h-full flex-col rounded-2xl border border-border bg-cream/40 p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <h3 className="font-heading text-lg font-bold text-heading group-hover:text-primary">{hub.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{hub.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary">
                {hub.matrixAnchor || hub.title}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
