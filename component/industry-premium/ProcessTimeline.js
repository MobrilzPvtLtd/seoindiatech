import { PremiumIcon } from './icons'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

const PHASES = [
  { label: 'Foundation', steps: [0, 1, 2] },
  { label: 'Build', steps: [3, 4, 5] },
  { label: 'Scale', steps: [6, 7, 8] },
]

export default function ProcessTimeline({ data }) {
  return (
    <PremiumSection id="process" variant="accent">
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        align="center"
        className="mb-12"
      />

      <div className="space-y-12">
        {PHASES.map((phase) => (
          <div key={phase.label}>
            <div className="mb-6 flex items-center gap-4">
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                Phase: {phase.label}
              </span>
              <div className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>

            <ol className="grid gap-5 md:grid-cols-3">
              {phase.steps.map((stepIndex) => {
                const step = data.steps[stepIndex]
                return (
                  <li
                    key={step.title}
                    className="relative rounded-2xl border border-border bg-cream/40 p-6 transition-all hover:border-primary/25 hover:bg-white hover:shadow-md dark:bg-background/40 dark:hover:bg-card"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-glow-brand">
                        <PremiumIcon name={step.icon} className="h-6 w-6" />
                        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-secondary text-xs font-bold text-white">
                          {stepIndex + 1}
                        </span>
                      </div>
                      <h3 className="text-base font-bold leading-snug text-heading md:text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="premium-prose">{step.description}</p>
                  </li>
                )
              })}
            </ol>
          </div>
        ))}
      </div>
    </PremiumSection>
  )
}
