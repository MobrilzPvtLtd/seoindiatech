import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionBadge from '@/component/ui/SectionBadge'
import ScribbleText from '@/component/ui/ScribbleText'
import { INDUSTRY_CATEGORIES, toSlug } from '@/utils/industries'

const featuredSlugs = [
  'dentist-seo',
  'hvac-seo',
  'realtor-seo',
  'plumber-seo',
  'chiropractor-seo',
  'roofers-seo',
  'automotive-seo',
  'personal-injury-seo',
]

const featuredIndustries = INDUSTRY_CATEGORIES.flatMap((c) => c.items)
  .filter((item) => featuredSlugs.includes(toSlug(item)))
  .map((name) => ({ name, slug: toSlug(name) }))

const Industries = () => {
  return (
    <section className="section-padding bg-white dark:bg-card relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <SectionBadge>Sectors We Perform</SectionBadge>
          </div>

          <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-heading sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
            Industries We Have{' '}
            <ScribbleText className="text-primary" scribbleColor="#6B2E88">
              Served
            </ScribbleText>{' '}
            With AI-Powered Services!
          </h2>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted max-w-2xl mx-auto">
            Specialized SEO for healthcare, home services, food &amp; health, and professional sectors -
            41 industry programs with local SEO, AI visibility, and lead-focused content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="mt-10 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {featuredIndustries.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/industries/${item.slug}`}
                className="inline-flex items-center rounded-full border border-border bg-cream dark:bg-secondary/50 px-5 py-2.5 text-sm font-semibold text-heading hover:border-primary/30 hover:bg-primary/5 transition-colors duration-300"
              >
                {item.name.replace(/\s+SEO$/i, '')}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 md:mt-12 flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/industries"
            className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-10 py-4 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
          >
            Browse All Industries
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full border border-border bg-white dark:bg-secondary/50 px-10 py-4 text-sm font-bold text-heading hover:border-primary/30 transition-all hover:-translate-y-0.5"
          >
            Get Free Audit
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
