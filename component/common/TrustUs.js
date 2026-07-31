'use client'

import { ArrowRight } from 'lucide-react'
import Button from '@/component/ui/Button'
import PageSection from '@/component/ui/PageSection'

const TrustUs = ({
  title = 'Trust Us',
  subtitle = '',
  description = '',
  buttonText = 'Contact Us Now!',
  buttonUrl = '/contact-us',
  variant = 'gradient',
}) => {
  const isDark = variant === 'dark'

  return (
    <PageSection
      variant={isDark ? 'dark' : 'gradient'}
      padding="sm"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className={`absolute -left-24 -top-24 h-64 w-64 rounded-full blur-3xl ${isDark ? 'bg-primary/30' : 'bg-primary/10'}`} />
        <div className={`absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl ${isDark ? 'bg-accent/20' : 'bg-accent/25'}`} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
        <div className="text-left md:max-w-2xl">
          <h2 className={`font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-heading'}`}>
            {title}
          </h2>
          {subtitle && (
            <h3 className={`mt-2 text-2xl font-bold sm:text-3xl md:text-4xl ${isDark ? 'text-white/90' : 'text-heading/80'}`}>
              {subtitle}
            </h3>
          )}
          {description && (
            <p className={`mt-4 text-lg leading-relaxed ${isDark ? 'text-white/75' : 'text-muted'}`}>
              {description}
            </p>
          )}
        </div>

        <div className="w-full shrink-0 md:w-auto">
          <Button href={buttonUrl} variant={isDark ? 'secondary' : 'primary'} size="lg" className="w-full md:w-auto">
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </PageSection>
  )
}

export default TrustUs
