import Image from 'next/image'
import Link from 'next/link'
import { getIndustryBenefits } from '@/utils/industries/industryMedia'

export default function IndustryBenefits({ label, categoryTitle }) {
  const benefits = getIndustryBenefits(label, categoryTitle)

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-background border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
            Full-Stack Growth
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-heading tracking-tight">
            SEO, AI Overview, GMB, PPC &amp; SMO for {label}
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Every {categoryTitle.toLowerCase()} program combines organic search, AI visibility,
            local map dominance, paid ads, and social proof-so your pipeline grows from multiple
            channels, not just one tactic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <article
              key={benefit.id}
              className="group rounded-2xl border border-border bg-cream/40 dark:bg-card overflow-hidden hover:shadow-premium transition-shadow duration-300"
            >
              <div className="relative h-44 bg-white dark:bg-secondary/30">
                <Image
                  src={benefit.image}
                  alt={`${benefit.title} illustration for ${label}`}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-heading mb-3">{benefit.title}</h3>
                <p className="text-sm text-body leading-relaxed mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-muted leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span dangerouslySetInnerHTML={{ __html: point }} />
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <article className="rounded-2xl border border-primary/20 bg-gradient-to-br from-secondary to-primary p-6 text-white flex flex-col justify-between md:col-span-2 xl:col-span-1">
            <div>
              <h3 className="text-xl font-bold mb-3">Ready for a custom roadmap?</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Get a free audit covering SEO gaps, GBP health, AI Overview opportunities, PPC
                waste, and SMO quick wins for your {label.toLowerCase()} business.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-secondary px-5 py-2.5 text-sm font-bold hover:bg-accent transition-colors"
            >
              Book Free Consultation
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}
