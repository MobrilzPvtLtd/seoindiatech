'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import SectionBadge from '@/component/ui/SectionBadge'
import ScribbleText from '@/component/ui/ScribbleText'
import { homeTestimonials } from '@/utils/homeTestimonials'

const LOCAL_AVATARS = ['/images/sarah.png', '/images/michael.png', '/images/lauren.png', '/images/profile.png']

function Stars() {
  return (
    <div role="img" className="flex gap-0.5 text-accent" aria-label="5 star rating">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 13.9l-4.94 2.71.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ item }) {
  return (
    <article className="flex flex-col rounded-t-3xl bg-white p-6 md:p-8 min-h-[300px] shrink-0 snap-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
      <div className="flex items-start justify-between gap-4 mb-5">
        <Quote className="h-8 w-8 text-primary fill-primary/20 shrink-0" strokeWidth={1.5} />
        <Stars />
      </div>
      <p className="flex-1 text-sm md:text-[15px] leading-relaxed text-heading/90">
        {item.text}
      </p>
      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border/60">
        <div className="relative h-11 w-11 shrink-0 rounded-full overflow-hidden bg-surface">
          <Image src={LOCAL_AVATARS[(item.id - 1) % LOCAL_AVATARS.length]} alt={item.name} fill className="object-cover" sizes="44px" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-heading truncate">{item.name}</p>
          <p className="text-xs text-muted truncate">{item.role}</p>
          {item.company && (
            <p className="text-xs text-primary/80 truncate">{item.company}</p>
          )}
        </div>
      </div>
    </article>
  )
}

const Testimonials = () => {
  const scrollRef = useRef(null)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isUserScrolling, setIsUserScrolling] = useState(false)
  const scrollTimeoutRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerView(1)
      else if (window.innerWidth < 1024) setItemsPerView(2)
      else setItemsPerView(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, homeTestimonials.length - itemsPerView)

  const scrollToIndex = useCallback(
    (index) => {
      const container = scrollRef.current
      if (!container || !container.children[0]) return

      const card = container.children[0]
      const gap = 24
      const cardWidth = card.offsetWidth + gap
      const target = Math.min(Math.max(0, index), maxIndex)

      container.scrollTo({ left: target * cardWidth, behavior: 'smooth' })
      setActiveIndex(target)
    },
    [maxIndex]
  )

  const scrollNext = useCallback(() => {
    const next = activeIndex >= maxIndex ? 0 : activeIndex + 1
    scrollToIndex(next)
  }, [activeIndex, maxIndex, scrollToIndex])

  const scrollPrev = useCallback(() => {
    const prev = activeIndex <= 0 ? maxIndex : activeIndex - 1
    scrollToIndex(prev)
  }, [activeIndex, maxIndex, scrollToIndex])

  useEffect(() => {
    if (isUserScrolling) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(scrollNext, 4500)
    return () => clearInterval(intervalRef.current)
  }, [isUserScrolling, scrollNext])

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container || !container.children[0]) return
    const card = container.children[0]
    const gap = 24
    const cardWidth = card.offsetWidth + gap
    const index = Math.round(container.scrollLeft / cardWidth)
    setActiveIndex(Math.min(index, maxIndex))
  }

  const pauseAutoScroll = () => {
    setIsUserScrolling(true)
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
  }

  const resumeAutoScroll = () => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = setTimeout(() => setIsUserScrolling(false), 4000)
  }

  const dotCount = maxIndex + 1

  return (
    <section className="dark-grid-bg section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-glow-primary opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-12 mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-dark-copy"
          >
            <SectionBadge dark>Testimonials</SectionBadge>
            <h2 className="mt-6 font-heading text-3xl font-extrabold text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
              Our Client{' '}
              <ScribbleText className="text-accent" scribbleColor="#6B2E88">
                Success
              </ScribbleText>{' '}
              Stories!
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-white/60 max-w-xl">
              Real outcomes from {homeTestimonials.length} clients across SEO, paid media, and AI
              search - transparent reporting and accountable growth worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-3 lg:justify-end"
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-8 py-3.5 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
            >
              Work With Us
            </Link>
            <Link
              href="/services/ai-seo"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 text-white hover:bg-white/10 px-8 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5"
            >
              Check AI-Powered Services
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 touch-pan-x"
            onScroll={handleScroll}
            onTouchStart={pauseAutoScroll}
            onTouchEnd={resumeAutoScroll}
            onMouseEnter={pauseAutoScroll}
            onMouseLeave={resumeAutoScroll}
          >
            {homeTestimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  pauseAutoScroll()
                  scrollPrev()
                  resumeAutoScroll()
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  pauseAutoScroll()
                  scrollNext()
                  resumeAutoScroll()
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {Array.from({ length: dotCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    pauseAutoScroll()
                    scrollToIndex(i)
                    resumeAutoScroll()
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  aria-label={`Go to testimonial slide ${i + 1}`}
                >
                  <span
                    className={`block rounded-full transition-all ${
                      i === activeIndex ? 'h-2.5 w-6 bg-accent' : 'h-2.5 w-2.5 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>

            <p className="hidden sm:block text-xs text-white/50 font-medium">
              {activeIndex + 1} / {dotCount}  |  {homeTestimonials.length} reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
