import { PremiumIcon } from './icons'
import SectionHeader from '@/component/ui/SectionHeader'
import PageSection from '@/component/ui/PageSection'

export default function ProcessTimeline({ data }) {
  return (
    <PageSection variant="default" padding="default">
      <SectionHeader badge={data.badge} title={data.title} subtitle={data.subtitle} align="center" className="mb-12" />

      <div className="relative">
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" aria-hidden="true" />

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-9 lg:gap-3 lg:overflow-visible lg:pb-0">
          {data.steps.map((step, i) => (
            <div
              key={step.title}
              className="min-w-[200px] snap-center flex-shrink-0 lg:min-w-0 flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-white dark:bg-card text-primary shadow-sm">
                <PremiumIcon name={step.icon} className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xs font-bold text-heading mb-1 uppercase tracking-wide">{step.title}</h3>
              <p className="text-[11px] text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  )
}
