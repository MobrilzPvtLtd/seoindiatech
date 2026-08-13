'use client'

import Link from 'next/link'
import Image from 'next/image'

const LOGO_SRC = '/sit-transparent.png'

/**
 * Official brand logo — transparent PNG. Use onDark on dark hero/footer surfaces.
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

  const imageTone = isDark ? '' : ''

  return (
    <Link
      href="/"
      className={`group inline-flex items-center shrink-0 min-w-[120px] sm:min-w-[140px] transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="SEO India Tech - Home"
    >
      <span className={`inline-flex items-center ${shellClass}`}>
        <Image
          src={LOGO_SRC}
          alt="SEO India Tech"
          width={832}
          height={458}
          className={`${imageClass} object-contain object-left ${imageTone}`}
          priority={priority}
          sizes="(max-width: 640px) 140px, 170px"
        />
      </span>
    </Link>
  )
}
