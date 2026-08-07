import Image from 'next/image'
import GeoQuickAnswer from './GeoQuickAnswer'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function WhySeoMatters({ data }) {
  return (
    <PremiumSection id="why-seo" variant="white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <PremiumSectionHeader
            badge={data.badge}
            title={data.title}
            subtitle={data.subtitle}
            align="left"
            className="mb-8 !max-w-none"
          />

          <div className="space-y-6">
            {data.trends.map((trend) => (
              <article key={trend.title} className="rounded-2xl border border-border bg-cream/50 p-5 dark:bg-background/40">
                <h3 className="font-heading text-lg font-bold text-heading">{trend.title}</h3>
                <p className="premium-prose mt-2">{trend.description}</p>
              </article>
            ))}
          </div>

          {data.geoAnswer && (
            <div className="mt-8">
              <GeoQuickAnswer data={data.geoAnswer} />
            </div>
          )}
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-accent/10 shadow-premium">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-contain p-8"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {data.highlights?.length > 0 && (
            <div className="mt-5 grid grid-cols-2 gap-3">
              {data.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-xl border border-border bg-white px-4 py-3 text-center dark:bg-card"
                >
                  <p className="font-mono text-xl font-bold text-primary">{h.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">{h.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PremiumSection>
  )
}
