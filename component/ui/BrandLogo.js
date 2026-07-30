'use client'

import Link from 'next/link'
import Image from 'next/image'

/** Official brand raster - /public/sit.png */
const LOGO_SRC = '/sit.png'

/**
 * Existing SIT logo with display fixes:
 * - Light surfaces: dark pill behind logo (hides baked-in black background)
 * - Dark surfaces: mix-blend-lighten + brightness so logo reads clearly
 */
export default function BrandLogo({
  variant = 'onLight',
  size = 'md',
  compact = false,
  className = '',
}) {
  const isDark = variant === 'onDark'

  const imageClass = {
    sm: compact ? 'h-8 w-auto max-w-[120px]' : 'h-9 w-auto max-w-[140px]',
    md: compact ? 'h-9 w-auto max-w-[132px]' : 'h-10 md:h-11 w-auto max-w-[160px] md:max-w-[180px]',
    lg: compact ? 'h-10 w-auto max-w-[150px]' : 'h-12 md:h-14 w-auto max-w-[200px] md:max-w-[240px]',
  }[size] || 'h-10 w-auto max-w-[160px]'

  const blendClass = isDark
    ? 'mix-blend-lighten brightness-[1.25] contrast-[1.08]'
    : ''

  const wrapClass = isDark
    ? 'inline-flex items-center shrink-0'
    : 'inline-flex items-center shrink-0 rounded-lg bg-secondary px-2.5 py-1 shadow-sm'

  return (
    <Link
      href="/"
      className={`group flex items-center shrink-0 min-w-0 transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="SEO India Tech - Home"
    >
      <span className={wrapClass}>
        <Image
          src={LOGO_SRC}
          alt="SEO India Tech"
          width={180}
          height={52}
          className={`${imageClass} object-contain object-left ${blendClass}`}
          priority
        />
      </span>
    </Link>
  )
}
