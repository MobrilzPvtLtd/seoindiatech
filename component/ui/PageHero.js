import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Button from './Button'

/**
 * Unified hero for service, industry, location, and hub pages.
 */
export default function PageHero({
  title,
  subtitle,
  badge,
  features,
  image,
  imageAlt,
  children,
  variant = 'light',
  primaryCta = { label: 'Get Free SEO Audit', href: '/contact-us' },
  secondaryCta,
}) {
  const isDark = variant === 'dark'

  const sectionClass = isDark
    ? 'relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20 hero-grid-bg text-white'
    : 'relative overflow-hidden pt-24 md:pt-28 pb-12 md:pb-16 bg-gradient-to-b from-white to-background dark:from-card dark:to-background'

  const titleClass = isDark
    ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white'
    : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-heading'

  const subtitleClass = isDark
    ? 'text-base sm:text-lg text-white/80 leading-relaxed'
    : 'text-base sm:text-lg text-muted leading-relaxed'

  return (
    <section className={sectionClass}>
      {isDark && (
        <>
          <div className="pointer-events-none absolute inset-0 hero-glow-primary" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 hero-glow-secondary" aria-hidden="true" />
        </>
      )}
      {!isDark && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        </div>
      )}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 lg:px-8 md:flex-row md:gap-16 lg:gap-20">
        <div className="w-full md:w-1/2 text-center md:text-left">
          {badge && (
            <span className={`mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${
              isDark
                ? 'border border-white/15 bg-white/10 text-accent'
                : 'border border-primary/15 bg-primary/8 text-primary'
            }`}>
              {badge}
            </span>
          )}

          <h1 className={titleClass}>{title}</h1>
          <div className={`mx-auto md:mx-0 my-6 h-1.5 w-20 rounded-full ${isDark ? 'bg-accent' : 'bg-primary'}`} />

          {subtitle && (
            <div className={`max-w-xl mx-auto md:mx-0 ${subtitleClass}`}>
              {typeof subtitle === 'string' ? <p>{subtitle}</p> : subtitle}
            </div>
          )}

          {children}

          {features?.length > 0 && (
            <div className="mt-8 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 mx-auto md:mx-0">
              {features.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-center gap-2 text-left">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      isDark ? 'bg-white/10 text-accent' : 'bg-primary/10 text-primary'
                    }`}>
                      {Icon ? <Icon className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                    </span>
                    <span className={`text-sm ${isDark ? 'text-white/85' : 'text-body'}`}>
                      {item.text || item}
                    </span>
                  </div>
                )
              })}
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button href={primaryCta.href} variant={isDark ? 'secondary' : 'primary'} size="md">
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant={isDark ? 'outline' : 'ghost'}
                size="md"
                className={!isDark ? 'border border-border bg-white text-heading hover:bg-cream dark:bg-card dark:text-heading' : ''}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>

        {image && (
          <div className="flex w-full justify-center md:w-1/2">
            <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-white shadow-premium dark:bg-card">
              <Image
                src={image}
                alt={imageAlt || (typeof title === 'string' ? title : 'SEO services illustration')}
                fill
                className="object-contain p-4 transition-transform duration-300 hover:scale-[1.02]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
