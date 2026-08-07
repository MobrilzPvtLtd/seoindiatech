import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function ResourceGroup({ title, links }) {
  if (!links?.length) return null

  return (
    <div>
      <h3 className="mb-4 text-lg font-bold text-heading">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <span className="font-semibold text-heading group-hover:text-primary">{link.title}</span>
            {link.description && (
              <span className="mt-1 text-sm leading-relaxed text-body line-clamp-2">{link.description}</span>
            )}
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary">
              Read more
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function BlogRelatedResources({ data }) {
  if (!data) return null

  const hasContent =
    data.services?.length || data.industries?.length || data.related?.length || data.explore?.length

  if (!hasContent) return null

  return (
    <section className="mt-16 pt-12 border-t border-border" aria-labelledby="related-resources-heading">
      <div className="mb-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Keep Reading</p>
        <h2 id="related-resources-heading" className="mt-2 text-2xl font-bold text-heading">
          Related Services &amp; Guides
        </h2>
        <p className="mt-2 text-body">
          Explore programs and articles connected to this topic.
        </p>
      </div>

      <div className="space-y-10">
        <ResourceGroup title="Recommended Services" links={data.services} />
        <ResourceGroup title="Industry Programs" links={data.industries} />
        <ResourceGroup title="Related Articles" links={data.related} />
        <ResourceGroup title="Explore SEO India Tech" links={data.explore} />
      </div>
    </section>
  )
}
