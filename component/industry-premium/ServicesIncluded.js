import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PremiumIcon } from './icons'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function ServicesIncluded({ data }) {
  return (
    <PremiumSection id="services" variant="white">
      <div className="lg:grid lg:grid-cols-12 lg:gap-14 lg:items-start">
        {/* Sticky sidebar — anchors the section */}
        <div className="mb-10 lg:col-span-4 lg:mb-0 lg:sticky lg:top-28">
          <PremiumSectionHeader
            badge={data.badge}
            title={data.title}
            subtitle={data.subtitle}
            align="left"
            className="mb-0 !max-w-none"
          />
          {data.cta && (
            <Link
              href={data.cta.href}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-glow-brand transition-all hover:bg-primary-hover hover:-translate-y-0.5"
            >
              {data.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {/* Service cards — scannable list */}
        <div className="lg:col-span-8 space-y-4">
          {data.items.map((item, index) => (
            <article
              key={item.title}
              className="group flex gap-5 rounded-2xl border border-border bg-cream/30 p-5 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md dark:bg-background/50 dark:hover:bg-card md:p-6"
            >
              <div className="flex shrink-0 flex-col items-center gap-2">
                <span className="font-mono text-xs font-bold text-primary/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-white">
                  <PremiumIcon name={item.icon} className="h-5 w-5" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">{item.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.benefits.map((b) => (
                    <li
                      key={b}
                      className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-medium text-heading"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PremiumSection>
  )
}
