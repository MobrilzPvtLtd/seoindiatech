'use client'

import { useEffect, useState } from 'react'
import { Phone, Mail } from 'lucide-react'

/** Matches Header scroll threshold so bar + nav never overlap */
const HIDE_AFTER_SCROLL_Y = 12

export default function TopContactBar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < HIDE_AFTER_SCROLL_Y)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 h-8 border-b border-white/10 bg-secondary/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <p className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:block leading-none">
          Global Digital Growth Partner
        </p>
        <div className="flex items-center justify-center sm:justify-end gap-x-3 sm:gap-x-4 text-[11px] leading-none">
          <a
            href="tel:+91-8076676731"
            className="inline-flex items-center gap-1 text-white/70 hover:text-accent transition-colors"
          >
            <Phone className="h-3 w-3 shrink-0" />
            <span className="hidden md:inline">IN</span> +91-8076676731
          </a>
          <a
            href="mailto:sales@seoindiatech.com"
            className="inline-flex items-center gap-1 text-white/70 hover:text-accent transition-colors truncate max-w-[52vw] sm:max-w-none"
          >
            <Mail className="h-3 w-3 shrink-0" />
            <span className="truncate">sales@seoindiatech.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}
