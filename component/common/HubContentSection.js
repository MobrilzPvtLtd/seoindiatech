import Link from 'next/link'
import PageSection from '@/component/ui/PageSection'

export default function HubContentSection({ title, paragraphs, bullets, links = [] }) {
  return (
    <PageSection variant="default" padding="default" containerClassName="max-w-6xl">
      <div className="surface-card rounded-2xl p-8 shadow-sm md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-heading mb-6">{title}</h2>
          {paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="text-muted leading-relaxed mb-5">
              {p}
            </p>
          ))}
          {bullets?.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-2 text-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {links?.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-primary dark:text-accent hover:underline"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          )}
        </div>
    </PageSection>
  )
}
