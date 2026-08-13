'use client'

import Link from 'next/link'
import logoImage from '../../public/images/brand/sit-transparent.png'

const LOGO_FALLBACK_SRC = '/images/brand/sit-transparent.png'

/**
 * Official brand logo (transparent PNG) — bundled via webpack for reliable Netlify delivery.
 */
export default function BrandLogo({
  variant = 'onLight',
  size = 'md',
  compact = false,
  className = '',
  priority = false,
}) {
  const isDark = variant === 'onDark'

  const imageClass = {
    sm: compact ? 'h-8 w-auto max-w-[130px]' : 'h-9 w-auto max-w-[145px]',
    md: compact ? 'h-9 w-auto max-w-[150px]' : 'h-10 w-auto max-w-[165px] sm:h-11 sm:max-w-[170px]',
    lg: compact ? 'h-10 w-auto max-w-[160px]' : 'h-12 w-auto max-w-[190px] sm:h-14 sm:max-w-[200px]',
  }[size] || 'h-10 w-auto max-w-[150px]'

  const shellClass = isDark
    ? 'rounded-xl bg-white/95 px-2.5 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] ring-1 ring-white/20'
    : ''

  const logoSrc = logoImage?.src || LOGO_FALLBACK_SRC

  return (
    <Link
      href="/"
      className={`group inline-flex items-center shrink-0 min-w-0 max-w-[200px] transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="SEO India Tech - Home"
    >
      <span className={`inline-flex items-center ${shellClass}`}>
        <img
          src={logoSrc}
          alt="SEO India Tech"
          width={logoImage?.width || 170}
          height={logoImage?.height || 94}
          className={`${imageClass} block object-contain object-left`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={(e) => {
            if (e.currentTarget.src !== LOGO_FALLBACK_SRC) {
              e.currentTarget.src = LOGO_FALLBACK_SRC
            }
          }}
        />
      </span>
    </Link>
  )
}
