import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/component/ui/SectionHeader'
import PageSection from '@/component/ui/PageSection'

export default function RelatedIndustries({ data }) {
  return (
    <PageSection variant="default" padding="default">
      <SectionHeader badge={data.badge} title={data.title} align="center" className="mb-10" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.items.map((item) => (
          <Link
            key={item.slug}
            href={`/industries/${item.slug}`}
            className="group rounded-2xl border border-border bg-white dark:bg-card p-5 hover:border-primary/30 hover:shadow-premium transition-all duration-300"
          >
            <h3 className="text-base font-bold text-heading group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Learn more
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </PageSection>
  )
}
