import { PremiumIcon } from './icons'
import SectionHeader from '@/component/ui/SectionHeader'
import PageSection from '@/component/ui/PageSection'

export default function WhyChooseGrid({ data }) {
  return (
    <PageSection variant="cream" padding="default">
      <SectionHeader badge={data.badge} title={data.title} subtitle={data.subtitle} align="center" className="mb-12" />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.cards.map((card) => (
          <article
            key={card.title}
            className="group rounded-2xl border border-border bg-white dark:bg-card p-6 hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <PremiumIcon name={card.icon} />
            </div>
            <h3 className="text-lg font-bold text-heading mb-2">{card.title}</h3>
            <p className="text-sm text-body leading-relaxed mb-4">{card.description}</p>
            {card.points?.length > 0 && (
              <ul className="space-y-2">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </PageSection>
  )
}
