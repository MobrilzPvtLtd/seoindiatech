import React from 'react'
import { FaClinicMedical, FaGraduationCap, FaHome, FaPlane, FaIndustry, FaGavel, FaUtensils, FaShoppingCart, FaCloud, FaDollarSign } from 'react-icons/fa'

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

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-600 font-semibold mb-3">
            Our Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Industries <span className="text-blue-600">We Serve</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            Driving growth across diverse industries
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="group flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-sky-100 text-blue-600 dark:from-blue-900 dark:to-blue-800 dark:text-blue-200 text-xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {industry.name}
                  </p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {industry.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
