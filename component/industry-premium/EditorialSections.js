import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function EditorialAuthoritySection({ data }) {
  return (
    <PremiumSection id="expert-guide" variant="white">
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        align="left"
        className="mb-10 !max-w-4xl"
      />

      <div className="mx-auto max-w-4xl space-y-10">
        {data.blocks.map((block) => (
          <article key={block.heading} className="scroll-mt-28">
            <h3 className="font-heading text-xl font-bold text-heading md:text-2xl">{block.heading}</h3>
            <div className="mt-4 space-y-4">
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 60)} className="premium-prose text-[16px] md:text-[17px]">
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PremiumSection>
  )
}

export function InternalLinksSection({ data }) {
  return (
    <PremiumSection id="related-services" variant="muted" tight>
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        align="center"
        className="mb-8"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex flex-col rounded-2xl border border-border bg-white p-5 transition-all hover:border-primary/30 hover:shadow-md dark:bg-card"
          >
            <h3 className="font-semibold text-heading group-hover:text-primary">{link.title}</h3>
            <p className="premium-prose mt-2 flex-1 text-sm">{link.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </PremiumSection>
  )
}

export function SemanticTopicsSection({ data }) {
  return (
    <PremiumSection id="topics" variant="cream" tight>
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        align="center"
        className="mb-8"
      />
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap justify-center gap-2">
          {data.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-medium text-heading/85 dark:bg-card"
            >
              {topic}
            </span>
          ))}
        </div>
        {data.definition && (
          <aside className="mt-8 rounded-2xl border border-primary/20 bg-white p-6 dark:bg-card">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Definition</p>
            <h3 className="mt-2 font-heading text-lg font-bold text-heading">{data.definition.term}</h3>
            <p className="premium-prose mt-3">{data.definition.text}</p>
          </aside>
        )}
      </div>
    </PremiumSection>
  )
}

export function KeyTakeawaysSection({ data }) {
  return (
    <PremiumSection id="takeaways" variant="dark" tight>
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">{data.badge}</p>
        <h2 className="mt-3 font-heading text-2xl font-bold text-white md:text-3xl">{data.title}</h2>
        <ul className="mt-8 space-y-3 text-left">
          {data.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-[15px] leading-relaxed text-white/92"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </PremiumSection>
  )
}
