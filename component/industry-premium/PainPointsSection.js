import Image from 'next/image'
import { PremiumIcon } from './icons'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function PainPointsSection({ data }) {
  return (
    <PremiumSection id="challenges" variant="muted">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <PremiumSectionHeader
            badge={data.badge}
            title={data.title}
            subtitle={data.subtitle}
            align="left"
            className="mb-0 !max-w-none"
          />
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-white shadow-premium dark:bg-card">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {data.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/25 hover:shadow-md dark:bg-card"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <PremiumIcon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold leading-snug text-heading md:text-lg">{item.title}</h3>
              <p className="premium-prose mt-2">{item.description}</p>
              {item.impact && (
                <p className="mt-3 text-sm font-semibold text-primary">{item.impact}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </PremiumSection>
  )
}
