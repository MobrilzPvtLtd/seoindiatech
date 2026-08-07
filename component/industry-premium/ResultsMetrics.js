import SectionHeader from '@/component/ui/SectionHeader'
import PageSection from '@/component/ui/PageSection'

export default function ResultsMetrics({ data }) {
  return (
    <PageSection variant="default" padding="default">
      <SectionHeader badge={data.badge} title={data.title} subtitle={data.subtitle} align="center" className="mb-12" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-border bg-gradient-to-br from-white to-cream/60 dark:from-card dark:to-background p-6 text-center"
          >
            <p className="font-mono text-3xl md:text-4xl font-bold text-primary">{metric.value}</p>
            <p className="mt-2 text-sm font-semibold text-heading">{metric.label}</p>
            <p className="mt-1 text-xs text-muted">{metric.change}</p>
            <div className="mt-4 h-2 rounded-full bg-border overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                style={{ width: '75%' }}
                role="presentation"
              />
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  )
}
