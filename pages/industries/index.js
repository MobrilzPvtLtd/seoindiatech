import SeoHead from '@/component/common/SeoHead'
import VisibleFaq from '@/component/common/VisibleFaq'
import { getPageSeo } from '@/utils/pageSeoRegistry'
import { PAGE_FAQS } from '@/utils/pageFaqs'
import { buildIndustriesHubSchema } from '@/utils/schemaBuilders'
import Image from 'next/image'
import Link from 'next/link'
import { INDUSTRY_CATEGORIES, toSlug } from '@/utils/industries'
import { CATEGORY_HERO_IMAGES, INDUSTRY_BENEFIT_PILLARS } from '@/utils/industries/industryMedia'
import { INTERNAL_LINK_CATALOG } from '@/utils/internalLinks'

const seo = getPageSeo('/industries')

export default function IndustriesIndexPage() {
  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        path="/industries"
        schema={buildIndustriesHubSchema({ faqs: PAGE_FAQS.industriesHub })}
      />

      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-heading tracking-tight">
              Industry SEO Services
            </h1>
            <p className="mt-4 text-muted leading-relaxed">
              Specialized programs for 41 verticals with SEO, AI Overview visibility, Google Business
              Profile optimization, PPC advertising, and SMO social growth in one roadmap.
            </p>
            <p className="mt-4 text-muted leading-relaxed text-sm md:text-base">
              Every industry program is built from real search data - not generic templates. We map how your customers search, what competitors rank for, and which local and organic signals drive calls and bookings in your sector. From dentists and plumbers to SaaS and e-commerce, each page includes a tailored SEO, AI Overview, GMB, PPC, and SMO strategy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
            {INDUSTRY_BENEFIT_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-2xl border border-border bg-white dark:bg-card p-4 text-center"
              >
                <div className="relative h-24 mb-3">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
                <p className="text-sm font-bold text-heading">{pillar.title}</p>
              </div>
            ))}
          </div>

          <div className="space-y-16">
            {INDUSTRY_CATEGORIES.map((category) => (
              <section
                key={category.id}
                className="rounded-3xl border border-border bg-white dark:bg-card p-6 md:p-10 shadow-sm"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div className="relative h-48 md:h-56">
                    <Image
                      src={CATEGORY_HERO_IMAGES[category.id]}
                      alt={`${category.title} industry SEO services`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-heading">
                      {category.title}
                    </h2>
                    <p className="mt-3 text-muted leading-relaxed">
                      Tailored SEO, AI Overview, GMB, PPC, and SMO strategies for{' '}
                      {category.title.toLowerCase()} businesses ready to dominate local and organic search.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.items.map((item) => {
                    const slug = toSlug(item)
                    const label = item.replace(/\s+SEO$/i, '').trim()
                    return (
                      <Link
                        key={slug}
                        href={`/industries/${slug}`}
                        className="rounded-xl border border-border/60 bg-cream/50 dark:bg-secondary/20 px-4 py-3 text-sm font-semibold text-heading hover:border-primary/40 hover:bg-primary/5 transition-colors"
                      >
                        {label}
                      </Link>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16 rounded-3xl border border-border bg-cream/40 dark:bg-secondary/20 p-8 md:p-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-heading">
                Explore SEO Services &amp; Resources
              </h2>
              <p className="mt-3 text-muted">
                Pair your industry program with core services, local SEO, packages, and practical guides from our blog.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {INTERNAL_LINK_CATALOG.slice(0, 9).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-border bg-white dark:bg-card p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <h3 className="font-semibold text-heading hover:text-primary">{link.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{link.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <VisibleFaq faqs={PAGE_FAQS.industriesHub} minCount={8} />
    </>
  )
}
