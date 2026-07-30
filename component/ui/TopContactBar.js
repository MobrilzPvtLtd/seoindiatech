'use client'

import { useEffect, useState } from 'react'
import { Phone, Mail } from 'lucide-react'

export default function TopContactBar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] border-b border-white/10 bg-secondary/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <p className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:block">
          Global Digital Growth Partner
        </p>
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-1 text-[11px] sm:text-xs">
          <a
            href="tel:+91-8076676731"
            className="flex items-center gap-1.5 text-white/70 hover:text-accent transition-colors"
          >
            <Phone className="h-3 w-3" />
            <span className="hidden md:inline">IN</span> +91-8076676731
          </a>
          <a
            href="mailto:sales@seoindiatech.com"
            className="flex items-center gap-1.5 text-white/70 hover:text-accent transition-colors"
          >
            <Mail className="h-3 w-3" />
            sales@seoindiatech.com
          </a>
        </div>
      </div>
    </div>
  )
}
