import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/component/ui/SectionHeader'
import PageSection from '@/component/ui/PageSection'

export default function CaseStudySection({ data }) {
  return (
    <PageSection variant="cream" padding="default">
      <SectionHeader badge="Case Study" title={data.title} align="center" className="mb-10" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-white dark:bg-card p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">The Problem</h3>
            <p className="text-sm text-body leading-relaxed">{data.problem}</p>
          </div>
          <div className="rounded-2xl border border-border bg-white dark:bg-card p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Our Solution</h3>
            <p className="text-sm text-body leading-relaxed">{data.solution}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white dark:bg-card p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Execution</h3>
          <p className="text-sm text-body leading-relaxed">{data.execution}</p>
          <p className="mt-3 text-xs font-semibold text-muted">Timeline: {data.timeline}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.results.map((r) => (
            <div key={r.label} className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
              <p className="font-mono text-2xl font-bold text-primary">{r.value}</p>
              <p className="text-xs font-semibold text-heading mt-1">{r.label}</p>
              <p className="text-[10px] text-muted">{r.change}</p>
            </div>
          ))}
        </div>

        {data.cta && (
          <div className="text-center">
            <Link
              href={data.cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
            >
              {data.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </PageSection>
  )
}
