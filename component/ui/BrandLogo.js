'use client'

import Link from 'next/link'
import Image from 'next/image'
import logoImage from '@/assets/brand/sit-transparent.png'

const LOGO_FALLBACK_SRC = '/images/brand/sit-transparent.png'

/**
 * Official transparent PNG logo — bundled for Netlify; no white background shell.
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

  const imageTone = isDark
    ? 'brightness-110 contrast-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]'
    : ''

  return (
    <Link
      href="/"
      className={`group inline-flex items-center shrink-0 min-w-0 max-w-[200px] transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="SEO India Tech - Home"
    >
      <Image
        src={logoImage}
        alt="SEO India Tech"
        width={logoImage.width || 170}
        height={logoImage.height || 94}
        className={`${imageClass} ${imageTone} object-contain object-left block`}
        priority={priority}
        unoptimized
        onError={(e) => {
          const img = e.currentTarget
          if (img.src !== LOGO_FALLBACK_SRC) {
            img.src = LOGO_FALLBACK_SRC
          }
        }}
      />
    </Link>
  )
}
