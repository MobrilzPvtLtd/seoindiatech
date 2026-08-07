import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PremiumIcon } from './icons'
import SectionHeader from '@/component/ui/SectionHeader'
import PageSection from '@/component/ui/PageSection'

export default function ServicesIncluded({ data }) {
  return (
    <PageSection variant="default" padding="default">
      <SectionHeader badge={data.badge} title={data.title} subtitle={data.subtitle} align="center" className="mb-12" />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-white dark:bg-card p-6 flex flex-col hover:shadow-premium transition-shadow duration-300"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <PremiumIcon name={item.icon} className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-heading mb-2">{item.title}</h3>
            <p className="text-sm text-body leading-relaxed mb-4 flex-1">{item.description}</p>
            <ul className="space-y-1.5 mb-4">
              {item.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-xs text-muted">
                  <span className="text-primary font-bold">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {data.cta && (
        <div className="mt-10 text-center">
          <Link
            href={data.cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-8 py-3.5 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
          >
            {data.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </PageSection>
  )
}
