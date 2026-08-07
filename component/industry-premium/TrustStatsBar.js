'use client'

import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const target = parseInt(value, 10) || 0

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setCount(target)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const duration = 1200
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.floor(progress * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="font-mono text-3xl md:text-4xl font-bold text-heading">
      {count}
      {suffix}
    </span>
  )
}

export default function TrustStatsBar({ data }) {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-card border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">{data.badge}</p>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-heading">{data.title}</h2>
          <p className="mt-3 text-sm text-muted leading-relaxed">{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {data.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-cream/50 dark:bg-background p-6 text-center hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs font-medium text-muted uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {data.platforms?.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted">
            {data.platforms.map((p) => (
              <span key={p} className="rounded-full border border-border px-4 py-2 bg-surface">
                {p}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
