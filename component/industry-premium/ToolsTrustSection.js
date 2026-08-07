import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function ToolsTrustSection({ data }) {
  return (
    <PremiumSection id="tools-trust" variant="white" tight>
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        align="center"
        className="mb-12"
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-cream/40 p-6 dark:bg-background/40">
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Tools We Use</h3>
          <ul className="mt-4 space-y-3">
            {data.tools.map((tool) => (
              <li key={tool.name} className="rounded-xl border border-border/70 bg-white px-4 py-3 dark:bg-card">
                <p className="font-semibold text-heading">{tool.name}</p>
                <p className="premium-prose mt-1 text-sm">{tool.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-cream/40 p-6 dark:bg-background/40">
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Certifications</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {data.certifications.map((cert) => (
              <li
                key={cert}
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-heading"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-cream/40 p-6 dark:bg-background/40">
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Awards & Recognition</h3>
          <ul className="mt-4 space-y-3">
            {data.awards.map((award) => (
              <li key={award} className="flex items-start gap-2 text-[15px] text-heading/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PremiumSection>
  )
}
