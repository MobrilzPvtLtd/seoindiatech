'use client'

import { useEffect, useState } from 'react'

export default function PageSectionNav({ sections }) {
  const [active, setActive] = useState(sections[0]?.id || '')

  useEffect(() => {
    const ids = sections.map((s) => s.id)
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [sections])

  if (!sections?.length) return null

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-16 z-30 border-b border-border/70 bg-white/95 backdrop-blur-md dark:bg-card/95 md:top-[72px]"
    >
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2.5 sm:px-6 lg:px-8 scrollbar-hide">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors sm:text-[11px] ${
              active === section.id
                ? 'bg-primary text-white shadow-sm'
                : 'text-muted hover:bg-primary/5 hover:text-primary'
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
