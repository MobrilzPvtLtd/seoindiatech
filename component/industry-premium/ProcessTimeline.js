import { PremiumIcon } from './icons'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function ProcessTimeline({ data }) {
  return (
    <PremiumSection id="process" variant="white">
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        align="center"
        className="mb-14"
      />

      {/* Desktop: horizontal stepped timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          <div className="absolute left-0 right-0 top-7 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" aria-hidden="true" />
          <ol className="grid grid-cols-9 gap-2">
            {data.steps.map((step, i) => (
              <li key={step.title} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-md dark:bg-card">
                  <PremiumIcon name={step.icon} className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wide text-heading">{step.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile / tablet: vertical timeline — easier to scan */}
      <ol className="lg:hidden space-y-0">
        {data.steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
            {i < data.steps.length - 1 && (
              <div className="absolute left-[27px] top-14 bottom-0 w-0.5 bg-border" aria-hidden="true" />
            )}
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-sm dark:bg-card">
              <PremiumIcon name={step.icon} className="h-5 w-5" />
            </div>
            <div className="min-w-0 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                Step {i + 1}
              </span>
              <h3 className="mt-0.5 text-base font-bold text-heading">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </PremiumSection>
  )
}
