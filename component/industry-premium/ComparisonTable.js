import { Check, X } from 'lucide-react'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

function CellValue({ value, highlight }) {
  const v = value.toLowerCase()
  const isWeak =
    v === 'no' ||
    v === 'rare' ||
    v === 'difficult' ||
    v === 'limited' ||
    v.includes('opaque') ||
    v === 'variable' ||
    v.includes('monthly') ||
    v.includes('add-on') ||
    v.includes('basic') ||
    v.includes('solo') ||
    v.includes('rotating') ||
    v.includes('generic') ||
    v === 'sometimes' ||
    v === 'emerging' ||
    v.includes('enterprise')

  if (highlight && !isWeak) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
        {value}
      </span>
    )
  }

  if (isWeak) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-muted">
        {!highlight && <X className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden="true" />}
        {value}
      </span>
    )
  }

  return <span className="text-sm text-body">{value}</span>
}

export default function ComparisonTable({ data }) {
  const usLabel = data.columns[3]
  const agencyLabel = data.columns[2]
  const freelancerLabel = data.columns[1]

  return (
    <PremiumSection id="compare" variant="muted">
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        align="center"
        className="mb-10"
      />

      {/* Mobile: stacked cards — no horizontal table scroll */}
      <div className="space-y-4 md:hidden">
        {data.rows.map((row) => (
          <article
            key={row.feature}
            className="rounded-2xl border border-border bg-white p-5 shadow-sm dark:bg-card"
          >
            <h3 className="text-sm font-bold text-heading">{row.feature}</h3>
            <dl className="mt-4 space-y-3">
              <div className="flex items-start justify-between gap-3 rounded-xl bg-cream/60 px-3 py-2.5 dark:bg-primary/10">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">{usLabel}</dt>
                <dd className="text-right">
                  <CellValue value={row.us} highlight />
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3 px-3 py-1">
                <dt className="text-xs font-medium text-muted">{agencyLabel}</dt>
                <dd className="text-right">
                  <CellValue value={row.agency} />
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3 px-3 py-1">
                <dt className="text-xs font-medium text-muted">{freelancerLabel}</dt>
                <dd className="text-right">
                  <CellValue value={row.freelancer} />
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      {/* Desktop: full comparison table */}
      <div className="hidden md:block overflow-hidden rounded-3xl border border-border bg-white shadow-premium dark:bg-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left">
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="bg-surface/60 px-5 py-4 text-xs font-bold uppercase tracking-wider text-muted"
                >
                  {data.columns[0]}
                </th>
                <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-muted">
                  {data.columns[1]}
                </th>
                <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-muted">
                  {data.columns[2]}
                </th>
                <th
                  scope="col"
                  className="relative bg-primary px-5 py-4 text-xs font-bold uppercase tracking-wider text-white"
                >
                  <span className="absolute -top-px left-4 rounded-b-md bg-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-secondary">
                    Recommended
                  </span>
                  <span className="mt-2 block">{data.columns[3]}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-border/50 last:border-0 ${i % 2 === 0 ? 'bg-white dark:bg-card' : 'bg-cream/30 dark:bg-background/30'}`}
                >
                  <th scope="row" className="px-5 py-4 text-sm font-semibold text-heading">
                    {row.feature}
                  </th>
                  <td className="px-5 py-4">
                    <CellValue value={row.freelancer} />
                  </td>
                  <td className="px-5 py-4">
                    <CellValue value={row.agency} />
                  </td>
                  <td className="bg-primary/5 px-5 py-4">
                    <CellValue value={row.us} highlight />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PremiumSection>
  )
}
