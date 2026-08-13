'use client'

import Link from 'next/link'
import SitLogoSvg from '@/component/ui/SitLogoSvg'

/**
 * Inline SVG logo — always renders (no static file / image optimizer dependency).
 */
export default function BrandLogo({
  variant = 'onLight',
  size = 'md',
  compact = false,
  className = '',
}) {
  const isDark = variant === 'onDark'

  const svgClass = {
    sm: compact ? 'h-7 w-auto max-w-[120px]' : 'h-8 w-auto max-w-[130px]',
    md: compact ? 'h-8 w-auto max-w-[135px]' : 'h-9 w-auto max-w-[145px] sm:h-10 sm:max-w-[155px]',
    lg: compact ? 'h-9 w-auto max-w-[145px]' : 'h-10 w-auto max-w-[160px] sm:h-11 sm:max-w-[175px]',
  }[size] || 'h-9 w-auto max-w-[145px]'

  const shellClass = isDark
    ? 'rounded-lg bg-white px-2 py-1 shadow-[0_2px_12px_rgba(0,0,0,0.18)] ring-1 ring-white/25'
    : ''

  return (
    <Link
      href="/"
      className={`group inline-flex items-center shrink-0 max-w-[180px] transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="SEO India Tech - Home"
    >
      <span className={`inline-flex items-center ${shellClass}`}>
        <SitLogoSvg className={`${svgClass} block`} />
      </span>
    </Link>
  )
}
