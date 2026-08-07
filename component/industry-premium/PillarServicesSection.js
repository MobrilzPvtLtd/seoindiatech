import Image from 'next/image'
import { Check } from 'lucide-react'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function PillarServicesSection({ data }) {
  return (
    <PremiumSection id="seo-pillars" variant="cream">
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        align="center"
        className="mb-14"
      />

      <div className="space-y-16 md:space-y-20">
        {data.items.map((pillar, index) => {
          const reversed = index % 2 === 1
          return (
            <article
              key={pillar.id}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                reversed ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div>
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  {pillar.label}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-bold text-heading md:text-3xl">{pillar.title}</h3>
                <p className="premium-prose mt-4">{pillar.description}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-4 dark:bg-card">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Process</p>
                    <p className="premium-prose mt-2 text-sm">{pillar.process}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4 dark:bg-card">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Outcome</p>
                    <p className="premium-prose mt-2 text-sm">{pillar.outcome}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {pillar.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[15px] text-heading/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white to-primary/5 shadow-premium dark:from-card dark:to-primary/10">
                <Image
                  src={pillar.image.src}
                  alt={pillar.image.alt}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </article>
          )
        })}
      </div>
    </PremiumSection>
  )
}
