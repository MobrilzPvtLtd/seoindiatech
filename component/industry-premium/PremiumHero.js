import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import Button from '@/component/ui/Button'

export default function PremiumHero({ data }) {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20 hero-grid-bg text-white">
      <div className="pointer-events-none absolute inset-0 hero-glow-primary max-md:opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 hero-glow-secondary max-md:opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 lg:px-8 lg:flex-row lg:gap-16">
        <div className="w-full text-center lg:w-1/2 lg:text-left animate-fade-in-up">
          <span className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            {data.badge}
          </span>

          <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {data.h1}
          </h1>

          <div className="mx-auto my-6 h-1.5 w-20 rounded-full bg-accent lg:mx-0" />

          <div className="mx-auto max-w-xl space-y-4 text-base leading-relaxed text-white/80 lg:mx-0">
            {data.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 max-w-xl mx-auto lg:mx-0">
            {data.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-white/85">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-accent lg:justify-start">
            <Star className="h-4 w-4 fill-accent" aria-hidden="true" />
            <span>{data.rating}</span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {data.trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center lg:justify-start">
            <Button href={data.primaryCta.href} variant="secondary" size="md">
              {data.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link
              href={data.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {data.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-[#0e0c18]/60 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.5)]">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-contain p-6"
              priority
              sizes="(max-width: 1024px) 90vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
