'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lightbulb, Cloud, FileSearch } from 'lucide-react'
import SectionBadge from '@/component/ui/SectionBadge'

const PATH_D =
  'M 95,95 C 180,95 320,70 480,110 S 620,200 290,270 S 120,340 520,420 S 500,500 500,530'

const problems = [
  {
    num: '01',
    icon: null,
    title: 'Not Getting Results from Your Marketing',
    desc: 'We are AI-enabled professionals. We analyse your past and existing marketing campaigns and follow a data-driven approach to optimize performance and get you results you truly deserve.',
    cardClass: 'top-[2%] right-[2%] md:right-[5%] w-[280px] md:w-[320px]',
    nodeClass: 'top-[14%] left-[46%] md:left-[48%]',
  },
  {
    num: '02',
    icon: Cloud,
    title: 'Getting Traffic, But Not Leads',
    desc: 'We level up the game by driving targeted traffic and real humans - not bots - who are genuinely interested in buying from you.',
    cardClass: 'top-[38%] left-[2%] md:left-[4%] w-[280px] md:w-[300px]',
    nodeClass: 'top-[42%] left-[26%] md:left-[28%]',
  },
  {
    num: '03',
    icon: FileSearch,
    title: 'No Clear Digital Strategy',
    desc: 'A lack of clear strategy limits growth, reduces engagement, and creates inconsistent marketing. We deliver one roadmap with defined goals and weekly accountability.',
    cardClass: 'bottom-[12%] right-[2%] md:right-[6%] w-[280px] md:w-[300px]',
    nodeClass: 'top-[62%] left-[58%] md:left-[60%]',
  },
]

function BulbIcon() {
  return (
    <div className="absolute top-[4%] left-[3%] md:left-[6%] z-20">
      <div className="relative">
        <svg width="72" height="88" viewBox="0 0 72 88" className="md:w-[88px] md:h-[108px]" aria-hidden="true">
          <path
            d="M36,4 C20,4 10,18 10,32 C10,44 18,52 22,58 L22,68 C22,72 26,76 30,76 H42 C46,76 50,72 50,68 L50,58 C54,52 62,44 62,32 C62,18 52,4 36,4 Z"
            fill="#6B2E88"
          />
          <rect x="26" y="76" width="20" height="8" rx="2" fill="#B0A8CC" />
          <rect x="28" y="84" width="16" height="4" rx="1" fill="#706295" />
        </svg>
      </div>
    </div>
  )
}

function PlugIcon() {
  return (
    <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 z-10">
      <svg width="48" height="56" viewBox="0 0 48 56" aria-hidden="true">
        <rect x="14" y="0" width="8" height="22" rx="2" fill="#262425" />
        <rect x="26" y="0" width="8" height="22" rx="2" fill="#262425" />
        <path d="M8,22 H40 V36 C40,42 35,46 24,46 C13,46 8,42 8,36 Z" fill="#262425" />
        <rect x="20" y="46" width="8" height="10" rx="1" fill="#262425" />
      </svg>
    </div>
  )
}

function StepNode({ num, className, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
      className={`absolute z-20 flex h-[56px] w-[56px] md:h-[64px] md:w-[64px] items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 rounded-full bg-white shadow-[0_8px_24px_rgba(42,37,93,0.15)]" />
      <div className="absolute inset-[3px] rounded-full border-[3px] border-primary bg-white" />
      <span className="relative font-mono text-xl md:text-2xl font-extrabold text-primary">{num}</span>
    </motion.div>
  )
}

function ProblemCard({ item, index }) {
  const Icon = item.icon
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.12 + 0.2, duration: 0.55 }}
      className={`absolute z-30 ${item.cardClass}`}
    >
      <div className="rounded-2xl bg-white p-5 md:p-6 shadow-[0_16px_48px_-12px_rgba(42,37,93,0.2)] border border-border/50">
        {Icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-heading/15 bg-cream">
            <Icon className="h-5 w-5 text-heading" strokeWidth={1.5} />
          </div>
        )}
        <h3 className="text-base md:text-lg font-bold text-heading leading-snug">{item.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.desc}</p>
      </div>
    </motion.article>
  )
}

function ProblemsPath() {
  return (
    <div className="relative w-full min-h-[620px] md:min-h-[680px] mt-6 md:mt-10">
      <BulbIcon />
      <PlugIcon />

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d={PATH_D}
          stroke="#262425"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </svg>

      {problems.map((item, i) => (
        <StepNode key={item.num} num={item.num} className={item.nodeClass} index={i} />
      ))}
      {problems.map((item, i) => (
        <ProblemCard key={item.title} item={item} index={i} />
      ))}
    </div>
  )
}

const ProblemsSection = () => {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <SectionBadge>Problems We Solve</SectionBadge>
          <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-heading sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
            SEO Challenges We Help You Solve
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
            Whether you are launching online or scaling an existing presence, we diagnose what blocks
            visibility and leads — then build SEO-first programs that deliver measurable growth.
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-8 py-3.5 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
          >
            Get a Free SEO Consultation
          </Link>
        </motion.div>

        <div className="hidden md:block">
          <ProblemsPath />
        </div>

        <div className="mt-8 grid gap-4 md:hidden">
          {problems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl bg-white p-5 border border-border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary font-mono text-sm font-bold text-primary">
                    {item.num}
                  </span>
                  {Icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-cream">
                      <Icon className="h-4 w-4 text-heading" />
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
