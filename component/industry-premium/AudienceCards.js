import { PremiumIcon } from './icons'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function AudienceCards({ data }) {
  return (
    <PremiumSection id="who-needs" variant="cream">
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        align="center"
        className="mb-12"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item, index) => (
          <article
            key={item.title}
            className={`relative overflow-hidden rounded-2xl border border-border bg-white p-6 dark:bg-card ${
              index === 0 ? 'sm:col-span-2 lg:col-span-1 ring-2 ring-primary/20' : ''
            }`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/40 text-secondary">
                <PremiumIcon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-heading">{item.title}</h3>
            </div>
            <p className="premium-prose">{item.description}</p>
            <ul className="mt-4 space-y-2.5 border-t border-border/60 pt-4">
              {item.points.map((p) => (
                <li key={p} className="premium-list-item flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PremiumSection>
  )
}
