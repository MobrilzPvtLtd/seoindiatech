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
  return (
    <PremiumSection id="compare" variant="muted">
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        align="center"
        className="mb-10"
      />

      <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-premium dark:bg-card">
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
