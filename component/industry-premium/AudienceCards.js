import { PremiumIcon } from './icons'
import SectionHeader from '@/component/ui/SectionHeader'
import PageSection from '@/component/ui/PageSection'

export default function AudienceCards({ data }) {
  return (
    <PageSection variant="cream" padding="default">
      <SectionHeader badge={data.badge} title={data.title} subtitle={data.subtitle} align="center" className="mb-12" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-white dark:bg-card p-6 hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/30 text-secondary">
              <PremiumIcon name={item.icon} className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-heading mb-2">{item.title}</h3>
            <p className="text-sm text-body leading-relaxed mb-3">{item.description}</p>
            <ul className="space-y-1.5">
              {item.points.map((p) => (
                <li key={p} className="text-xs text-muted flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageSection>
  )
}
