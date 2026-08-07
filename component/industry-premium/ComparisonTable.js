import { Check } from 'lucide-react'
import SectionHeader from '@/component/ui/SectionHeader'
import PageSection from '@/component/ui/PageSection'

function CellValue({ value }) {
  const v = value.toLowerCase()
  if (v === 'no' || v === 'rare' || v === 'difficult' || v === 'limited' || v === 'opaque retainers' || v === 'variable' || v === 'monthly at best' || v === 'monthly pdfs' || v === 'add-on cost' || v === 'basic setup' || v === 'solo bandwidth' || v === 'rotating juniors' || v === 'generic packages' || v === 'sometimes' || v === 'emerging' || v === 'enterprise pricing') {
    return <span className="text-muted text-sm">{value}</span>
  }
  if (v.includes('core') || v.includes('included') || v.includes('custom') || v.includes('built') || v.includes('named') || v.includes('live') || v.includes('scalable') || v.includes('clear')) {
    return (
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
        <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
        {value}
      </span>
    )
  }
  return <span className="text-sm text-body">{value}</span>
}

export default function ComparisonTable({ data }) {
  return (
    <PageSection variant="cream" padding="default">
      <SectionHeader badge={data.badge} title={data.title} subtitle={data.subtitle} align="center" className="mb-10" />

      <div className="overflow-x-auto rounded-2xl border border-border bg-white dark:bg-card shadow-sm">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b border-border bg-surface/80">
              <th scope="col" className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-muted">
                {data.columns[0]}
              </th>
              <th scope="col" className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-muted">
                {data.columns[1]}
              </th>
              <th scope="col" className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-muted">
                {data.columns[2]}
              </th>
              <th scope="col" className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-primary bg-primary/5">
                {data.columns[3]}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row.feature} className="border-b border-border/60 last:border-0">
                <th scope="row" className="px-4 py-3.5 text-sm font-semibold text-heading">
                  {row.feature}
                </th>
                <td className="px-4 py-3.5"><CellValue value={row.freelancer} /></td>
                <td className="px-4 py-3.5"><CellValue value={row.agency} /></td>
                <td className="px-4 py-3.5 bg-primary/5"><CellValue value={row.us} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageSection>
  )
}
