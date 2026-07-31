'use client'

import Link from 'next/link'
import Image from 'next/image'

const LOGO_SRC = '/sit-transparent.png'

/**
 * Official brand logo - transparent PNG, no background box.
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
    md: compact ? 'h-9 w-auto max-w-[150px]' : 'h-11 w-auto max-w-[170px]',
    lg: compact ? 'h-10 w-auto max-w-[160px]' : 'h-14 w-auto max-w-[200px]',
  }[size] || 'h-10 w-auto max-w-[150px]'

  const toneClass = isDark
    ? 'brightness-110 contrast-105'
    : ''

  return (
    <Link
      href="/"
      className={`group inline-flex items-center shrink-0 min-w-0 transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="SEO India Tech - Home"
    >
      <Image
        src={LOGO_SRC}
        alt="SEO India Tech"
        width={832}
        height={458}
        className={`${imageClass} object-contain object-left ${toneClass}`}
        priority={priority}
      />
    </Link>
  )
}
