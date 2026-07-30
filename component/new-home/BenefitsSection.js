import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BarChart3, Brain, Trophy, Headphones } from 'lucide-react'
import SectionBadge from '@/component/ui/SectionBadge'
import ScribbleText from '@/component/ui/ScribbleText'

import { HOME_IMAGES } from '@/utils/homeImages'

const benefits = [
  {
    layout: 'corner',
    icon: BarChart3,
    title: 'Data-Driven Campaigns',
    desc: 'We use analytics, GA4, and search data to guide every campaign decision - tracking performance weekly so results exceed expectations, not vanity metrics.',
    image: HOME_IMAGES.analytics,
    imageAlt: 'Marketing analytics dashboard',
  },
  {
    layout: 'corner',
    icon: Brain,
    title: 'Smart and Strategic use of AI',
    desc: 'AI has changed digital marketing - but blind automation can hurt your brand. We combine experience with AI tools for smarter, safer growth.',
    image: HOME_IMAGES.aiTech,
    imageAlt: 'AI-powered SEO technology',
  },
  {
    layout: 'split-top',
    icon: Trophy,
    title: 'Success Stories from Across Industries',
    desc: 'In the last decade we have served clients across healthcare, SaaS, e-commerce, and home services - delivering measurable outcomes every single time.',
    image: HOME_IMAGES.success,
    imageAlt: 'Client success and growth results',
    iconFirst: true,
  },
  {
    layout: 'split-top',
    icon: Headphones,
    title: 'Unmatched Assistance 24×7',
    desc: 'We are your remote marketing team with a promise to be as available as your in-house team - strategy calls, reporting, and support around the clock.',
    image: HOME_IMAGES.support,
    imageAlt: 'Dedicated client support team',
    iconFirst: false,
  },
]

function IconCircle({ icon: Icon }) {
  return (
    <div className="flex h-16 w-16 md:h-[72px] md:w-[72px] shrink-0 items-center justify-center rounded-full bg-primary border-2 border-heading/10 shadow-sm">
      <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
    </div>
  )
}

function CornerBenefitCard({ item, index }) {
  const Icon = item.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className="rounded-3xl bg-white border border-border/60 shadow-sm overflow-hidden flex flex-col"
    >
      <div className="p-6 md:p-8">
        <IconCircle icon={Icon} />
        <h3 className="mt-5 text-xl font-bold text-heading">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
      </div>
      <div className="relative h-36 md:h-44 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
      </div>
    </motion.article>
  )
}

function SplitTopBenefitCard({ item, index }) {
  const Icon = item.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className="rounded-3xl bg-white border border-border/60 shadow-sm overflow-hidden flex flex-col"
    >
      <div className="flex items-center justify-between gap-4 p-6 md:p-8 pb-4">
        {item.iconFirst ? (
          <>
            <IconCircle icon={Icon} />
            <div className="relative h-20 w-32 md:h-24 md:w-40 rounded-2xl overflow-hidden shrink-0 shadow-sm">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </>
        ) : (
          <>
            <div className="relative h-20 w-32 md:h-24 md:w-40 rounded-2xl overflow-hidden shrink-0 shadow-sm">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <IconCircle icon={Icon} />
          </>
        )}
      </div>
      <div className="px-6 md:px-8 pb-6 md:pb-8">
        <h3 className="text-xl font-bold text-heading">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
      </div>
    </motion.article>
  )
}

function BenefitCard({ item, index }) {
  if (item.layout === 'split-top') {
    return <SplitTopBenefitCard item={item} index={index} />
  }
  return <CornerBenefitCard item={item} index={index} />
}

const BenefitsSection = () => {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 md:pb-24">
      <div className="section-padding !pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12 mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionBadge>Our Benefits</SectionBadge>
              <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-heading sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
                How{' '}
                <ScribbleText className="text-primary" scribbleColor="#6B2E88">
                  We
                </ScribbleText>{' '}
                Create A Difference!
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-muted max-w-xl">
                Years of experience, creative excellence, and strategic use of AI - SEO INDIA TECH is
                your one-stop partner to climb the success ladder with measurable outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end"
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-8 py-3.5 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
              >
                Work With Us
              </Link>
              <Link
                href="/services/seo"
                className="inline-flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/90 px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
              >
                Browse Our Services
              </Link>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((item, i) => (
              <BenefitCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,80 L0,40 L1440,0 L1440,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

export default BenefitsSection
