import Head from 'next/head'
import Link from 'next/link'
import { industries, INDUSTRY_CATEGORIES, toSlug } from '@/utils/industries'

export default function IndustriesIndexPage() {
  return (
    <>
      <Head>
        <title>Industry SEO Services | SEO India Tech</title>
        <meta
          name="description"
          content="Browse 41 specialized industry SEO programs - healthcare, home services, food & health, and professional sectors. AI-powered search and local SEO."
        />
        <link rel="canonical" href="https://www.seoindiatech.com/industries" />
      </Head>

      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-heading tracking-tight">
              Industry SEO Services
            </h1>
            <p className="mt-4 text-muted leading-relaxed">
              Specialized SEO landing pages for 41 verticals - local search, AI visibility, and conversion-focused content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {INDUSTRY_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className={`rounded-2xl border p-5 ${
                  cat.highlight
                    ? 'bg-amber-50/80 border-amber-200/70 dark:bg-amber-950/20'
                    : 'bg-white dark:bg-card border-border'
                }`}
              >
                <h2 className="text-sm font-bold text-heading uppercase tracking-wide mb-4 pb-3 border-b border-dashed border-border/70">
                  {cat.title}
                </h2>
                <ul className="space-y-0">
                  {cat.items.map((item, i) => (
                    <li
                      key={toSlug(item)}
                      className={i < cat.items.length - 1 ? 'border-b border-dashed border-border/50' : ''}
                    >
                      <Link
                        href={`/industries/${toSlug(item)}`}
                        className="block py-2 text-sm font-medium text-body hover:text-primary transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            {industries.length} industry programs  |  Updated weekly with performance insights
          </p>
        </div>
      </main>
    </>
  )
}
