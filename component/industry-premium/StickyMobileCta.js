'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function StickyMobileCta({ label = 'Book Free Consultation', href = '/contact-us' }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white/95 dark:bg-secondary/95 backdrop-blur-md p-3 lg:hidden">
      <Link
        href={href}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-bold text-white shadow-glow-brand"
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
