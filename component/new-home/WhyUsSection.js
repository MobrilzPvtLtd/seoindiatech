import Link from 'next/link'
import { motion } from 'framer-motion'
import { BarChart3, Network, Star } from 'lucide-react'
import SectionBadge from '@/component/ui/SectionBadge'
import ScribbleText from '@/component/ui/ScribbleText'
import IconRing from '@/component/ui/IconRing'

const reasons = [
  {
    icon: BarChart3,
    title: 'Unprecedented Results',
    desc: 'We align every sprint to your business goals - overcoming challenges and delivering outcomes that match your vision.',
    variant: 'accent',
  },
  {
    icon: Network,
    title: 'Data-Driven Approach',
    desc: 'Industry data and AI insights power our campaigns - smarter decisions, faster optimization, measurable growth.',
    variant: 'dark',
  },
  {
    icon: Star,
    title: 'Customized Strategies',
    desc: 'Your market, audience, and goals are unique. We build tailored roadmaps - never generic templates.',
    variant: 'dark',
  },
]

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
        >
          <SectionBadge>Why Choose Us</SectionBadge>
          <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-heading sm:text-4xl md:text-[2.75rem]">
            3 Reasons{' '}
            <ScribbleText className="text-heading" scribbleColor="#A4DDFB">
              Why
            </ScribbleText>{' '}
            SEO INDIA TECH Is Your Best Bet!
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
            Your business needs a digital partner that understands search, media, and technology -
            and can deliver accountable results. That&apos;s what we do.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-10 py-4 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
          >
            Get Started with AI-Powered Marketing
          </Link>
        </motion.div>

        {/* Icon rings with arrows */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-6">
          {reasons.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center max-w-sm"
            >
              <IconRing icon={item.icon} variant={item.variant} />
              {i < reasons.length - 1 && (
                <div className="hidden md:block absolute top-14 -right-8 z-10 text-neutral">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" aria-hidden="true">
                    <path d="M0 6h32M28 2l6 4-6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              <h3 className="mt-6 text-lg font-bold text-heading">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
