import Link from 'next/link'
import { motion } from 'framer-motion'
import { PenLine, Rocket, Monitor } from 'lucide-react'
import SectionBadge from '@/component/ui/SectionBadge'

const offerings = [
  {
    icon: PenLine,
    title: 'AI Powered Digital Solutions',
    desc: 'Branding, web, SEO, and performance marketing - one integrated team with AI-accelerated delivery.',
  },
  {
    icon: Rocket,
    title: 'Impressive Digital Footprint',
    desc: 'Seamless funnels that capture, nurture, and convert leads across search, social, and paid channels.',
  },
  {
    icon: Monitor,
    title: 'Expert-Led Consultancy',
    desc: 'Industry-specific strategy sessions backed by 14+ years of data and accountable growth roadmaps.',
  },
]

const OfferingsSection = () => {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered header - Autus layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-14 md:mb-16"
        >
          <SectionBadge>Features</SectionBadge>
          <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-heading sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
            SEO &amp; Digital Growth Services
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted max-w-2xl mx-auto">
            Search, content, and media systems that improve visibility, generate quality leads, and
            drive measurable revenue growth — with SEO as the foundation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/services/seo"
              className="inline-flex items-center rounded-full border border-primary/20 bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              SEO Services
            </Link>
            <Link
              href="/services/technical-seo"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-heading hover:border-primary/30 transition-colors"
            >
              Technical SEO
            </Link>
            <Link
              href="/services/local-seo-service"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-heading hover:border-primary/30 transition-colors"
            >
              Local SEO
            </Link>
            <Link
              href="/services/e-commerce-seo"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-heading hover:border-primary/30 transition-colors"
            >
              E-commerce SEO
            </Link>
            <Link
              href="/services/international-seo"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-heading hover:border-primary/30 transition-colors"
            >
              International SEO
            </Link>
          </div>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-10 py-4 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
          >
            Skyrocket Your Sales
          </Link>
        </motion.div>

        {/* 3 columns with connector line */}
        <div className="relative">
          <div className="connector-line hidden md:block" />
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {offerings.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className="relative z-10 text-center"
              >
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary shadow-[0_8px_30px_rgba(107,46,136,0.35)]">
                  <item.icon className="h-9 w-9 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-heading">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted max-w-xs mx-auto">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferingsSection
