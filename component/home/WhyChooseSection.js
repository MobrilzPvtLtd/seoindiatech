import React from 'react'
import { FaAward, FaUserTie, FaChartLine, FaClipboardCheck, FaBullseye, FaMoneyBillWave, FaTags, FaLink, FaTools } from 'react-icons/fa'
import { SiGoogle } from 'react-icons/si'

const items = [
  {
    icon: FaAward,
    title: '12+ Years Industry Experience',
  },
  {
    icon: SiGoogle,
    title: 'Google Compliant SEO',
  },
  {
    icon: FaUserTie,
    title: 'Dedicated SEO Manager',
  },
  {
    icon: FaChartLine,
    title: 'Weekly Progress Reports',
  },
  {
    icon: FaClipboardCheck,
    title: 'Transparent Reporting',
  },
  {
    icon: FaBullseye,
    title: 'Customized Growth Strategy',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Affordable Pricing',
  },
  {
    icon: FaTags,
    title: 'Website Pricing',
  },
  {
    icon: FaLink,
    title: 'White Hat Link Building',
  },
  {
    icon: FaTools,
    title: 'Technical SEO Experts',
  },
]

const WhyChooseSection = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Why Choose <span className="text-blue-600">SEO India Tech?</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4 xl:gap-5">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center rounded-xl bg-transparent p-4 xl:p-5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-sky-200 text-blue-700 dark:bg-gradient-to-br dark:from-blue-900 dark:to-blue-950 dark:text-blue-200 mb-4 text-xl">
                  <Icon />
                </div>
                <p className="text-sm leading-snug font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
