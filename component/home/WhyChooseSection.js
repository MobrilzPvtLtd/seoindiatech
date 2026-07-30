import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  FaAward,
  FaUserTie,
  FaChartLine,
  FaClipboardCheck,
  FaBullseye,
  FaMoneyBillWave,
  FaUsers,
  FaStar,
  FaSmile,
  FaCheckCircle,
} from 'react-icons/fa'
import { SiGoogle } from 'react-icons/si'

function useCountUp(target, duration = 2000, isDecimal = false) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  const start = useCallback(() => {
    if (started) return
    setStarted(true)
    const startTime = performance.now()
    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * target)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [target, duration, started])

  return { count: isDecimal ? count.toFixed(1) : Math.round(count), start }
}

const stats = [
  { icon: FaAward, value: '12+', label: 'Years Experience', num: 12, suffix: '+' },
  { icon: FaUsers, value: '500+', label: 'Clients Served', num: 500, suffix: '+' },
  { icon: FaStar, value: '4.9', label: 'Google Rating', num: 4.9, suffix: '', isDecimal: true },
  { icon: FaSmile, value: '98%', label: 'Client Satisfaction', num: 98, suffix: '%' },
]

const features = [
  {
    icon: SiGoogle,
    title: 'Google Compliant SEO',
    desc: 'White-hat strategies following Google guidelines for sustainable, penalty-free rankings.',
  },
  {
    icon: FaUserTie,
    title: 'Dedicated SEO Manager',
    desc: 'A personal expert who manages your campaign and understands your business inside out.',
  },
  {
    icon: FaChartLine,
    title: 'Weekly Progress Reports',
    desc: 'Transparent reporting with rankings, traffic, and conversion data delivered every week.',
  },
  {
    icon: FaBullseye,
    title: 'Customized Strategy',
    desc: 'Tailored SEO plans built around your unique goals, industry, and competition.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Transparent Reporting',
    desc: 'Full visibility into every action taken - no hidden work, no guesswork.',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Affordable Pricing',
    desc: 'Premium SEO services at competitive rates without compromising on quality.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

const StatCard = ({ stat }) => {
  const { count, start } = useCountUp(stat.num, 2000, stat.isDecimal)
  const Icon = stat.icon

  return (
    <motion.div
      variants={itemVariants}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, amount: 0.15 }}
      onViewportEnter={start}
      className="flex items-center gap-4 bg-gray-50/80 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-100/80 dark:border-gray-800/60 shadow-md px-5 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-200/50 dark:hover:border-blue-800/30 hover:-translate-y-0.5"
    >
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xl font-bold text-gray-900 dark:text-white leading-none">
          {count}{stat.suffix}
        </div>
        <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-0.5">
          {stat.label}
        </div>
      </div>
    </motion.div>
  )
}

const WhyChooseSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[50rem] h-[50rem] bg-blue-50/30 rounded-full blur-3xl dark:bg-blue-900/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-50/20 rounded-full blur-3xl dark:bg-indigo-900/5 translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Why Choose{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600 dark:text-blue-400">
                SEO India Tech?
              </span>
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-blue-200/40 dark:bg-blue-500/20 -z-0 rounded-full blur-sm" />
            </span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-base max-w-lg mx-auto">
            We combine expertise, transparency, and results-driven strategies to help your business succeed online.
          </p>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-14"
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200/50 dark:hover:border-blue-800/30 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 dark:text-blue-300 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-blue-500/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12 text-sm text-gray-500 dark:text-gray-400"
        >
          <span className="flex items-center gap-1.5">
            <FaCheckCircle className="w-3.5 h-3.5 text-blue-500" />
            No Lock-In Contracts
          </span>
          <span className="flex items-center gap-1.5">
            <FaCheckCircle className="w-3.5 h-3.5 text-blue-500" />
            100% White Hat SEO
          </span>
          <span className="flex items-center gap-1.5">
            <FaCheckCircle className="w-3.5 h-3.5 text-blue-500" />
            Free Strategy Consultation
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseSection
