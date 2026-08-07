import Link from 'next/link'
import { ArrowRight, Check, Phone } from 'lucide-react'

export default function PremiumFinalCta({ data }) {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28 text-white">
      <div className="pointer-events-none absolute inset-0 hero-grid-bg opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-primary/30 blur-[100px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
          {data.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          {data.subtitle}
        </p>

        <ul className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {data.benefits.map((b) => (
            <li
              key={b}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90"
            >
              <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={data.primaryCta.href}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 text-sm font-bold text-white shadow-glow-brand transition-all hover:bg-primary-hover hover:-translate-y-0.5"
          >
            {data.primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={data.secondaryCta.href}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-white/25 px-10 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            {data.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
