import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import SectionHeader from '@/component/ui/SectionHeader'

const caseStudies = [
  {
    metric: '+142%',
    headline: 'Organic clicks from Google search',
    client: 'E-commerce Fashion Brand',
    industry: 'Fashion & Accessories',
    region: 'USA',
    spark: 'M2,34 C14,32 18,26 26,27 C34,28 36,18 46,16 C56,14 60,20 70,10 C78,2 84,6 92,3',
    href: '/contact-us',
  },
  {
    metric: '+32.6%',
    headline: 'Organic traffic growth in six months',
    client: 'Luxury Retail Platform',
    industry: 'E-commerce',
    region: 'UK',
    spark: 'M2,30 C10,31 16,34 22,30 C30,25 32,14 42,15 C52,16 54,24 64,20 C74,16 78,6 92,4',
    href: '/contact-us',
  },
  {
    metric: '424',
    headline: 'Conversions from paid search campaign',
    client: 'Home Services Brand',
    industry: 'Home Renovation',
    region: 'Canada',
    spark: 'M2,36 C12,35 16,30 24,31 C32,32 34,22 44,23 C54,24 56,12 66,9 C76,6 82,10 92,2',
    href: '/contact-us',
  },
]

const ResultsSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,46,136,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Client Outcomes"
          title="SEO Results & Case Studies"
          description="A snapshot of outcomes across SEO, paid media, and full-funnel optimization - each engagement tied to measurable KPIs."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((item, i) => (
            <motion.article
              key={item.headline}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group card-premium relative overflow-hidden rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/8 to-transparent rounded-bl-full" />
              <svg viewBox="0 0 94 36" className="h-8 w-20 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none">
                <path d={item.spark} stroke="#6B2E88" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <p className="font-mono text-4xl font-bold text-primary md:text-5xl tracking-tight">
                {item.metric}
              </p>
              <p className="mt-3 text-base font-semibold text-heading leading-snug">{item.headline}</p>
              <p className="mt-2 text-sm font-medium text-muted">{item.client}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.industry}
                </span>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-secondary">
                  {item.region}
                </span>
              </div>
              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
              >
                Discuss similar results
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-cta hover:bg-cta-hover px-8 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
          >
            Book a discovery call
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-heading hover:border-primary/30 transition-all"
          >
            Explore more outcomes
            <ArrowUpRight className="h-4 w-4 text-primary" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ResultsSection
