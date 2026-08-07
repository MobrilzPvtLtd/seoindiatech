'use client'

import { Star, Quote } from 'lucide-react'
import SectionHeader from '@/component/ui/SectionHeader'
import PageSection from '@/component/ui/PageSection'

function Stars() {
  return (
    <div role="img" className="flex gap-0.5 text-accent" aria-label="5 star rating">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function IndustryTestimonials({ data }) {
  return (
    <PageSection variant="cream" padding="default">
      <SectionHeader badge={data.badge} title={data.title} align="center" className="mb-10" />

      <div className="grid md:grid-cols-3 gap-6">
        {data.items.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-border bg-white dark:bg-card p-6 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <Quote className="h-8 w-8 text-primary/30" aria-hidden="true" />
              <Stars />
            </div>
            <p className="flex-1 text-sm leading-relaxed text-body">&ldquo;{item.text}&rdquo;</p>
            <div className="mt-5 pt-4 border-t border-border">
              <p className="text-sm font-bold text-heading">{item.name}</p>
              <p className="text-xs text-muted">{item.role}</p>
              <p className="text-xs text-primary/80">{item.company}</p>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  )
}
