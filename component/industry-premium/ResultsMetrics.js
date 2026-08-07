import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function ResultsMetrics({ data }) {
  return (
    <PremiumSection id="results" variant="dark">
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        align="center"
        dark
        className="mb-12"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.metrics.map((metric, index) => {
          const barWidth = metric.barWidth || `${72 + (index % 3) * 8}%`
          return (
          <div
            key={metric.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <p className="font-mono text-4xl font-extrabold text-accent md:text-5xl">{metric.value}</p>
            <p className="mt-3 text-sm font-bold text-white">{metric.label}</p>
            <p className="mt-1 text-xs text-white/55">{metric.change}</p>
            <div className="mx-auto mt-5 h-1.5 max-w-[120px] overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                style={{ width: barWidth }}
                role="presentation"
              />
            </div>
          </div>
        )})}
      </div>
    </PremiumSection>
  )
}
