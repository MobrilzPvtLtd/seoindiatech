'use client'

import Link from 'next/link'
import SitLogoMark from '@/component/ui/SitLogoMark'

/**
 * Inline SVG wordmark — no static files or image optimizer required.
 */
export default function BrandLogo({
  variant = 'onLight',
  size = 'md',
  compact = false,
  className = '',
}) {
  const useCompact = compact || size === 'sm'

  const svgClass = {
    sm: 'h-7 w-auto max-w-[128px]',
    md: 'h-8 w-auto max-w-[140px] sm:h-9 sm:max-w-[150px]',
    lg: 'h-9 w-auto max-w-[150px] sm:h-10 sm:max-w-[165px]',
  }[size] || 'h-8 w-auto max-w-[140px]'

  return (
    <Link
      href="/"
      className={`group inline-flex items-center shrink-0 max-w-[180px] transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="SEO India Tech - Home"
    >
      <SitLogoMark
        variant={variant}
        compact={useCompact}
        className={`${svgClass} block`}
      />
    </Link>
  )
}
