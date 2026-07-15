import React from 'react'
import { FaSearch, FaGoogle, FaMapMarkerAlt, FaPenNib, FaCode, FaPalette, FaBullhorn, FaShareAlt } from 'react-icons/fa'

const services = [
  {
    title: 'Search Engine Optimization',
    description: 'Improve rankings and drive organic traffic with our result-oriented SEO strategies.',
    icon: FaSearch,
  },
  {
    title: 'Google Ads (PPC)',
    description: 'Target the right audience and get more leads with high converting PPC campaigns.',
    icon: FaGoogle,
  },
  {
    title: 'Local SEO',
    description: 'Rank in local searches and attract more customers from your area.',
    icon: FaMapMarkerAlt,
  },
  {
    title: 'Content Marketing',
    description: 'Engage your audience with powerful content that builds trust and drives traffic.',
    icon: FaPenNib,
  },
//   {
//     title: 'Website Development',
//     description: 'Build fast, responsive, SEO-friendly websites that convert visitors into customers.',
//     icon: FaCode,
//   },
//   {
//     title: 'UI/UX Design',
//     description: 'Create user-friendly designs that enhance experience and boost conversions.',
//     icon: FaPalette,
//   },
//   {
//     title: 'Digital Branding',
//     description: 'Build a strong brand identity that sets you apart from competitors.',
//     icon: FaBullhorn,
//   },
//   {
//     title: 'Social Media Marketing',
//     description: 'Increase brand awareness and engage your audience across social platforms.',
//     icon: FaShareAlt,
//   },
]

const OurServicesSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Our Services
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group flex flex-col gap-3 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-white text-2xl shadow-sm">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurServicesSection
