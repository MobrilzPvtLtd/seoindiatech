import React from 'react'
import { motion } from 'framer-motion'
import {
  FaClipboardList,
  FaSearch,
  FaLightbulb,
  FaCode,
  FaTools,
  FaRegFileAlt,
  FaLink,
  FaChartLine,
} from 'react-icons/fa'

const processSteps = [
  { title: 'Website Audit', desc: 'Full technical & content health check', icon: FaClipboardList },
  { title: 'Competitor Analysis', desc: 'See exactly where you\'re losing ground', icon: FaSearch },
  { title: 'Keyword Research', desc: 'Target terms your buyers actually search', icon: FaLightbulb },
  { title: 'On-page SEO', desc: 'Structure & copy tuned for relevance', icon: FaCode },
  { title: 'Technical SEO', desc: 'Speed, crawlability, and site health', icon: FaTools },
  { title: 'Content Optimization', desc: 'Refresh pages that are close to ranking', icon: FaRegFileAlt },
  { title: 'Authority Building', desc: 'Earn links that move the needle', icon: FaLink },
  { title: 'Monthly Reporting', desc: 'Clear numbers, no jargon', icon: FaChartLine },
]

const columns = [processSteps.slice(0, 4), processSteps.slice(4, 8)]

const OurSEOProcess = () => {
  let stepIndex = 0

  return (
    <section className="bg-white dark:bg-background py-14 md:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-heading leading-tight transition-colors duration-300">
            Our SEO process
          </h2>
          <p className="mt-4 text-base text-muted transition-colors duration-300">
            Step-by-step strategy for measurable growth, transparent and
            data-driven from day one.
          </p>
        </motion.div>

        {/* Timeline columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="relative">
              {/* dotted connector line */}
              <div className="absolute left-4 top-4 bottom-4 border-l border-dashed border-border transition-colors duration-300" />

              <div className="space-y-10">
                {col.map((step, i) => {
                  const Icon = step.icon
                  const index = colIndex * 4 + i
                  const currentIndex = stepIndex++
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="relative flex items-start gap-5"
                    >
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-card dark:bg-card border border-gray-200 dark:border-gray-600 text-heading text-xs font-mono font-semibold transition-colors duration-300">
                        {index + 1}
                      </span>
                      <div className="pt-0.5">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="text-primary dark:text-accent text-sm transition-colors duration-300" />
                          <p className="text-sm font-semibold text-heading transition-colors duration-300">
                            {step.title}
                          </p>
                        </div>
                        <p className="text-sm text-muted leading-relaxed transition-colors duration-300">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2 transition-colors duration-300"
        >
          <span className="text-[11px] text-muted transition-colors duration-300">
            Transparent &bull; Data-Driven &bull; Results
          </span>
          <span className="text-[11px] text-muted transition-colors duration-300">
            8 Steps to Success
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default OurSEOProcess
