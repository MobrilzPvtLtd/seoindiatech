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
    <span ref={ref} className="font-mono text-4xl font-extrabold text-primary md:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

export default function TrustStatsBar({ data }) {
  return (
    <section className="relative z-20 -mt-12 px-4 sm:px-6 md:-mt-16 lg:px-8" aria-label="Trust statistics">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_20px_50px_-12px_rgba(42,37,93,0.18)] dark:bg-card dark:shadow-none">
          <div className="grid grid-cols-2 divide-x divide-y divide-border/60 md:grid-cols-4 md:divide-y-0">
            {data.stats.map((stat) => (
              <div key={stat.label} className="px-4 py-8 text-center md:px-6 md:py-10">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {data.platforms?.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 border-t border-border/60 bg-cream/40 px-4 py-3 dark:bg-background/50">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Rated on</span>
              {data.platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-border bg-white px-3 py-1 text-[11px] font-semibold text-heading dark:bg-card"
                >
                  {p}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
