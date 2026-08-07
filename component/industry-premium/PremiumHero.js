import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Star } from 'lucide-react'

export default function PremiumHero({ data }) {
  const [lead, ...supporting] = data.paragraphs

  return (
    <section className="relative overflow-hidden bg-secondary text-white">
      <div className="pointer-events-none absolute inset-0 hero-grid-bg" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 hero-glow-primary opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Copy — primary focus */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="mb-5 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              {data.badge}
            </span>

            <h1 className="font-heading text-[1.85rem] font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.15rem]">
              {data.h1}
            </h1>

            {lead && (
              <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white sm:text-xl lg:mx-0">
                {lead}
              </p>
            )}

            {supporting.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base lg:mx-0"
              >
                {p}
              </p>
            ))}

            {/* CTAs — high priority, above the fold */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href={data.primaryCta.href}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-glow-brand transition-all hover:bg-primary-hover hover:-translate-y-0.5"
              >
                {data.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={data.secondaryCta.href}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-white/25 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                {data.secondaryCta.label}
              </Link>
            </div>

            {/* Social proof row */}
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:gap-6 lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-accent">
                <Star className="h-4 w-4 fill-accent" aria-hidden="true" />
                <span className="font-semibold">{data.rating}</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {data.trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/75"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual + quick benefits */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-[#0e0c18]/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] lg:max-w-none">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                className="object-contain p-5"
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                What you get
              </p>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {data.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-white/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/80">
                      <Check className="h-3 w-3 text-white" aria-hidden="true" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
