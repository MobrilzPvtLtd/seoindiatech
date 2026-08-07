'use client'

import { Star, Quote } from 'lucide-react'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

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
  const [featured, ...rest] = data.items

  return (
    <PremiumSection id="testimonials" variant="muted">
      <PremiumSectionHeader badge={data.badge} title={data.title} align="center" className="mb-10" />

      <div className="grid gap-6 lg:grid-cols-3">
        {featured && (
          <article className="lg:col-span-2 flex flex-col rounded-3xl border border-primary/20 bg-white p-8 shadow-premium dark:bg-card">
            <div className="mb-5 flex items-start justify-between">
              <Quote className="h-10 w-10 text-primary/25" aria-hidden="true" />
              <Stars />
            </div>
            <p className="flex-1 text-lg leading-relaxed text-heading md:text-xl">
              &ldquo;{featured.text}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {featured.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-heading">{featured.name}</p>
                <p className="text-sm text-muted">{featured.role}</p>
                <p className="text-xs text-primary">{featured.company}</p>
              </div>
            </div>
          </article>
        )}

        <div className="flex flex-col gap-4">
          {rest.map((item) => (
            <article
              key={item.name}
              className="flex flex-1 flex-col rounded-2xl border border-border bg-white p-5 dark:bg-card"
            >
              <Stars />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-body">&ldquo;{item.text}&rdquo;</p>
              <div className="mt-4 border-t border-border/60 pt-3">
                <p className="text-sm font-bold text-heading">{item.name}</p>
                <p className="text-xs text-muted">{item.role}, {item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PremiumSection>
  )
}
