import React from 'react'
import { FaSearchDollar, FaRedoAlt, FaMapMarkedAlt } from 'react-icons/fa'

const campaigns = [
  {
    title: 'Search Ads',
    description:
      'These are the main engine of paid search. We build each pay per click campaign with tight themes so ads match the exact query.',
    icon: FaSearchDollar,
  },
  {
    title: 'Remarketing',
    description:
      'Remarketing brings back visitors who left without buying. A pay per click campaign with remarketing often improves conversion rate because the user already knows your brand.',
    icon: FaRedoAlt,
  },
  {
    title: 'Local Lead Campaigns',
    description:
      'If you serve a city or region, we connect ads with location signals, call assets, and map visibility.',
    icon: FaMapMarkedAlt,
  },
]

export default function PpcCampaignSection() {
  return (
    <>
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Types of{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Pay Per Click
            </span>{' '}
            Campaign We Manage
          </h2>
          <div className="w-20 sm:w-24 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        {/* Responsive Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800
                bg-gray-50 dark:bg-gray-900
                hover:bg-white dark:hover:bg-gray-800
                hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300 h-full flex flex-col"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg
                    bg-blue-100 dark:bg-blue-900/40
                    text-blue-600 dark:text-blue-400
                    group-hover:scale-110 transition"
                  >
                    <Icon className="text-[18px] sm:text-[22px]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Hover Accent */}
                <div className="mt-6 w-10 group-hover:w-20 h-1 bg-blue-600 transition-all duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* Who This Service Is For */}
        <div className="mt-16 sm:mt-20 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
            Who This Service Is For
          </h3>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Service businesses, B2B teams, and ecommerce brands that need
            measurable leads or sales.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
