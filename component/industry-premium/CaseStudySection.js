import Link from 'next/link'
import { ArrowRight, Clock, Target, TrendingUp } from 'lucide-react'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function CaseStudySection({ data }) {
  return (
    <PremiumSection id="case-study" variant="cream">
      <PremiumSectionHeader badge="Case Study" title={data.title} align="center" className="mb-12" />

      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-premium dark:bg-card">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-border p-8 md:border-b-0 md:border-r">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Target className="h-5 w-5" aria-hidden="true" />
                <h3 className="text-sm font-bold uppercase tracking-wider">The Problem</h3>
              </div>
              <p className="text-base leading-relaxed text-body">{data.problem}</p>
            </div>
            <div className="bg-primary/5 p-8">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <TrendingUp className="h-5 w-5" aria-hidden="true" />
                <h3 className="text-sm font-bold uppercase tracking-wider">Our Solution</h3>
              </div>
              <p className="text-base leading-relaxed text-body">{data.solution}</p>
            </div>
          </div>

          <div className="border-t border-border px-8 py-6">
            <div className="mb-2 flex items-center gap-2 text-muted">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider">Timeline: {data.timeline}</span>
            </div>
            <p className="text-sm leading-relaxed text-body">{data.execution}</p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
            {data.results.map((r) => (
              <div key={r.label} className="bg-secondary p-6 text-center">
                <p className="font-mono text-2xl font-bold text-accent md:text-3xl">{r.value}</p>
                <p className="mt-2 text-xs font-semibold text-white">{r.label}</p>
                <p className="mt-0.5 text-[10px] text-white/50">{r.change}</p>
              </div>
            ))}
          </div>
        </div>

        {data.cta && (
          <div className="mt-10 text-center">
            <Link
              href={data.cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-glow-brand transition-all hover:bg-primary-hover hover:-translate-y-0.5"
            >
              {data.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </PremiumSection>
  )
}
