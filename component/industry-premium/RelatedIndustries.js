import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function RelatedIndustries({ data }) {
  return (
    <PremiumSection id="related" variant="white" tight>
      <PremiumSectionHeader badge={data.badge} title={data.title} align="center" className="mb-10" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => (
          <Link
            key={item.slug || item.href}
            href={item.href || `/industries/${item.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-cream/40 p-5 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md dark:bg-background/40 dark:hover:bg-card"
          >
            <h3 className="text-base font-bold text-heading group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 premium-prose text-[15px]">{item.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
              {item.ctaLabel || 'Explore'}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </PremiumSection>
  )
}
