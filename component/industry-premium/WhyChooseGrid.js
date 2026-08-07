import { PremiumIcon } from './icons'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function WhyChooseGrid({ data }) {
  const [featured, ...rest] = data.cards

  return (
    <PremiumSection id="why-us" variant="cream" className="pt-20 md:pt-24">
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        align="center"
        className="mb-14"
      />

      {/* Featured card - draws eye first */}
      {featured && (
        <article className="mb-6 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-white via-white to-primary/5 p-8 shadow-premium dark:from-card dark:to-primary/10 md:p-10">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-glow-brand">
              <PremiumIcon name={featured.icon} className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-heading md:text-3xl">{featured.title}</h3>
              <p className="premium-prose mt-3">{featured.description}</p>
              {featured.points?.length > 0 && (
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
                  {featured.points.map((point) => (
                    <li key={point} className="premium-list-item flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </article>
      )}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {rest.map((card) => (
          <article
            key={card.title}
            className="group rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-premium dark:bg-card md:p-7"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <PremiumIcon name={card.icon} />
            </div>
            <h3 className="text-lg font-bold leading-snug text-heading md:text-xl">{card.title}</h3>
            <p className="premium-prose mt-3">{card.description}</p>
            {card.points?.length > 0 && (
              <ul className="mt-5 space-y-2.5 border-t border-border/70 pt-5">
                {card.points.map((point) => (
                  <li key={point} className="premium-list-item flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </PremiumSection>
  )
}
