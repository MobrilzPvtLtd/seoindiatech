/**
 * Standard page section wrapper - consistent spacing, container, and backgrounds.
 */
export default function PageSection({
  children,
  className = '',
  containerClassName = '',
  id,
  as: Tag = 'section',
  variant = 'default',
  padding = 'default',
}) {
  const variants = {
    default: 'bg-background',
    cream: 'bg-cream',
    white: 'bg-white dark:bg-card',
    dark: 'bg-secondary text-white section-dark-copy',
    gradient: 'bg-gradient-to-b from-white to-background dark:from-card dark:to-background',
  }

  const paddings = {
    none: '',
    sm: 'py-12 md:py-16',
    default: 'section-padding',
    hero: 'pt-24 md:pt-28 pb-16 md:pb-20',
  }

  return (
    <Tag id={id} className={`${variants[variant] || variants.default} ${paddings[padding] || paddings.default} ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </Tag>
  )
}
