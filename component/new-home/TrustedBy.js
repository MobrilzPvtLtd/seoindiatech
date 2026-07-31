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

/* Duplicate once for seamless CSS marquee — not 3x */
const marqueeLogos = [...clientLogos, ...clientLogos]

const TrustedBy = () => {
  return (
    <section className="relative pt-2 pb-12 md:pb-16 overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Trusted by <span className="text-heading">500+ companies</span> worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-center sm:gap-8">
            {[
              { v: '14+', l: 'Years' },
              { v: '500+', l: 'Clients' },
              { v: '4.9*', l: 'Rating' },
              { v: '6', l: 'Continents' },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-mono text-lg font-bold text-heading">{s.v}</p>
                <p className="text-[10px] uppercase tracking-wider text-muted">{s.l}</p>
              </div>
            ))}
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
