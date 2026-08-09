import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function SolutionInternalLinks({ links, title = 'Related Services & Resources' }) {
  if (!links?.length) return null

  return (
    <section className="py-16 bg-cream/50 dark:bg-secondary/20 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Explore More</p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-heading md:text-3xl">{title}</h2>
          <p className="mt-3 text-body">
            Related SEO, marketing, and growth resources to support your solution rollout.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col rounded-2xl border border-border bg-white p-5 transition-all hover:border-primary/30 hover:shadow-md dark:bg-card"
            >
              <h3 className="font-semibold text-heading group-hover:text-primary">{link.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{link.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                {link.matrixAnchor || link.title}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
