import Image from 'next/image'

const clientLogos = [
  { src: '/images/home/logo1.png', alt: 'DIY Real Estate' },
  { src: '/images/home/logo2.png', alt: 'Tech Project' },
  { src: '/images/home/logo3.png', alt: 'Stay KSA' },
  { src: '/images/home/logo4.png', alt: 'Creativity 360 Pro' },
  { src: '/images/home/logo5.png', alt: 'Creative Agency' },
  { src: '/images/home/logo6.png', alt: 'Digital Solutions' },
  { src: '/images/home/intgra.png', alt: 'Advyra' },
]

/* Duplicate once for seamless CSS marquee - not 3x */
const marqueeLogos = [...clientLogos, ...clientLogos]

const stats = [
  { v: '14+', l: 'Years' },
  { v: '500+', l: 'Clients' },
  { v: '4.9*', l: 'Rating' },
  { v: '6', l: 'Continents' },
]

const TrustedBy = () => {
  return (
    <section className="relative pt-2 pb-12 md:pb-16 overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="rounded-2xl border border-primary/15 bg-white/80 dark:bg-card/90 shadow-sm px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <span className="hidden sm:block h-10 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
              <p className="text-sm sm:text-base font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-heading leading-snug">
                Trusted by{' '}
                <span className="text-primary">500+ companies</span>{' '}
                <span className="text-heading/80">worldwide</span>
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-border/80 bg-cream/60 dark:bg-secondary/20 px-2 py-3 sm:px-4 sm:py-3.5 text-center"
                >
                  <p className="font-mono text-xl sm:text-2xl font-extrabold text-primary tabular-nums leading-none">
                    {s.v}
                  </p>
                  <p className="mt-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-heading/70">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-container">
          <div className="marquee-track gap-6">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0 flex items-center justify-center rounded-xl border border-border bg-surface/80 px-8 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/25 hover:shadow-md"
                style={{ width: '200px', height: '96px' }}
              >
                <div className="relative h-12 w-36">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    sizes="144px"
                    loading="lazy"
                    quality={75}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
