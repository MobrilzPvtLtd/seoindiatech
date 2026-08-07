'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

function Stars() {
  return (
    <div role="img" className="flex gap-0.5 text-accent" aria-label="5 star rating">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-accent" aria-hidden="true" />
      ))}
    </div>
  )
}

function TestimonialCard({ item }) {
  return (
    <article className="flex h-full min-h-[220px] w-[300px] shrink-0 snap-start flex-col rounded-2xl border border-border bg-white p-5 shadow-sm dark:bg-card sm:w-[340px]">
      <div className="mb-3 flex items-start justify-between gap-2">
        <Quote className="h-7 w-7 shrink-0 text-primary/20" aria-hidden="true" />
        <Stars />
      </div>
      <p className="flex-1 text-[15px] leading-[1.7] text-heading/85">&ldquo;{item.text}&rdquo;</p>
      <div className="mt-4 flex items-center gap-3 border-t border-border/60 pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
          {item.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-heading">{item.name}</p>
          <p className="truncate text-sm text-muted">{item.role}</p>
          <p className="truncate text-sm text-primary">{item.company}</p>
        </div>
      </div>
    </article>
  )
}

export default function IndustryTestimonials({ data }) {
  const scrollRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const items = data.items || []

  const updateArrows = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [updateArrows, items.length])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.85
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  const featured = items[0]

  return (
    <PremiumSection id="testimonials" variant="muted">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <PremiumSectionHeader
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle || `${items.length} verified healthcare client stories`}
          align="left"
          className="mb-0 !max-w-2xl"
        />
        <div className="flex items-center gap-2 lg:shrink-0">
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-heading transition-colors hover:border-primary hover:text-primary disabled:opacity-30 dark:bg-card"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={!canNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-heading transition-colors hover:border-primary hover:text-primary disabled:opacity-30 dark:bg-card"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {featured && (
        <article className="mb-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-white to-primary/5 p-8 shadow-premium dark:from-card dark:to-primary/10 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <Stars />
              <p className="mt-4 text-lg font-medium leading-relaxed text-heading md:text-xl">
                &ldquo;{featured.text}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 md:flex-col md:items-end md:text-right">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                {featured.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-heading">{featured.name}</p>
                <p className="text-sm text-muted">{featured.role}</p>
                <p className="text-sm text-primary">{featured.company}</p>
              </div>
            </div>
          </div>
        </article>
      )}

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin"
        role="region"
        aria-label="Client testimonials carousel"
      >
        {items.slice(1).map((item) => (
          <TestimonialCard key={`${item.name}-${item.company}`} item={item} />
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted">
        Showing {items.length} client reviews across plastic surgery, dental, fertility, and specialty healthcare
      </p>
    </PremiumSection>
  )
}
