import React from 'react'
import { FaClinicMedical, FaGraduationCap, FaHome, FaPlane, FaIndustry, FaGavel, FaUtensils, FaShoppingCart, FaCloud, FaDollarSign } from 'react-icons/fa'
import { motion } from 'framer-motion'

const industries = [
  { name: 'Healthcare', icon: FaClinicMedical, desc: 'Boost patient reach & visibility' },
  { name: 'Education', icon: FaGraduationCap, desc: 'Attract more enrollments online' },
  { name: 'Real Estate', icon: FaHome, desc: 'Generate qualified property leads' },
  { name: 'Travel', icon: FaPlane, desc: 'Drive bookings & travel traffic' },
  { name: 'Manufacturing', icon: FaIndustry, desc: 'Expand B2B digital presence' },
  { name: 'Law Firms', icon: FaGavel, desc: 'Get found by potential clients' },
  { name: 'Restaurants', icon: FaUtensils, desc: 'Increase local foot traffic' },
  { name: 'eCommerce', icon: FaShoppingCart, desc: 'Maximize online store sales' },
  { name: 'SaaS', icon: FaCloud, desc: 'Grow subscriptions & trials' },
  { name: 'Finance', icon: FaDollarSign, desc: 'Build trust & attract clients' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
}

const cardVariants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } }
}

const IndustriesSection = () => {
  return (
    <section className="bg-background py-14 md:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-heading leading-tight">
            Industries <span className="text-primary dark:text-accent">We Serve</span>
          </h2>
          <p className="mt-4 text-base text-muted">
            Driving growth across diverse industries
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group flex flex-col rounded-2xl bg-card dark:bg-card border border-border dark:border-border shadow-md p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 dark:hover:border-blue-800"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cream to-blue-100 text-primary dark:from-primary/20 dark:to-secondary dark:text-accent text-xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </div>
                  <p className="text-sm font-semibold text-body">
                    {industry.name}
                  </p>
                </div>
                <p className="text-sm text-muted">
                  {industry.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default IndustriesSection
