import SectionHeader from '@/component/ui/SectionHeader'

const VARIANTS = {
  white: 'bg-white dark:bg-card',
  cream: 'bg-cream',
  muted: 'bg-background',
  dark: 'bg-secondary text-white section-dark-copy',
  accent: 'bg-gradient-to-b from-primary/5 via-background to-background',
}

/**
 * Premium industry section shell — consistent rhythm, spacing, and backgrounds.
 */
export default function PremiumSection({
  children,
  id,
  variant = 'white',
  className = '',
  containerClassName = '',
  header,
  tight = false,
}) {
  const padding = tight ? 'py-14 md:py-16' : 'py-16 md:py-24'

  return (
    <section id={id} className={`${VARIANTS[variant] || VARIANTS.white} ${padding} ${className}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {header}
        {children}
      </div>
    </section>
  )
}

export function PremiumSectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) {
  return (
    <SectionHeader
      badge={badge}
      title={title}
      highlight={highlight}
      description={subtitle}
      align={align}
      dark={dark}
      className={className}
    />
  )
}
