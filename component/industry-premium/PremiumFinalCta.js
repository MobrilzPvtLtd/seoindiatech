import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export default function PremiumFinalCta({ data }) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-secondary via-primary to-secondary text-white">
      <div className="pointer-events-none absolute inset-0 hero-grid-bg opacity-20" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl md:text-4xl font-extrabold tracking-tight">{data.title}</h2>
        <p className="mt-4 text-base text-white/80 leading-relaxed max-w-2xl mx-auto">{data.subtitle}</p>

        <ul className="mt-6 flex flex-wrap justify-center gap-4">
          {data.benefits.map((b) => (
            <li key={b} className="inline-flex items-center gap-2 text-sm text-white/90">
              <Check className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={data.primaryCta.href}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-secondary px-8 py-3.5 text-sm font-bold hover:bg-accent transition-colors"
          >
            {data.primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={data.secondaryCta.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
          >
            {data.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
