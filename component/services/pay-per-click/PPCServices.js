import React from 'react'
import {
  FaSearch,
  FaGoogle,
  FaBullhorn,
  FaFileAlt,
  FaDollarSign,
  FaChartLine,
} from 'react-icons/fa'

export default function PPCServices() {
  const services = [
    {
      icon: FaSearch,
      title: 'Keyword research and campaign planning',
      description:
        'We start by mapping your products and services to search intent. Then we build a pay per click campaign around high intent terms, local intent terms, and competitor terms where it makes sense. This planning step reduces wasted clicks and keeps your pay per click campaign focused.',
    },
    {
      icon: FaGoogle,
      title: 'Google Ads setup and account structure',
      description:
        'Our team sets up search campaigns, display where needed, and remarketing for visitors who did not convert the first time. We align ad groups to landing pages so each pay per click campaign stays relevant. This can improve Quality Score, which may lower cost per click.',
    },
    {
      icon: FaBullhorn,
      title: 'Ad copy and extensions that push action',
      description:
        'We write ad text that matches what the searcher wants. We add call, sitelink, location, and structured snippet extensions to give users more reasons to click. A strong pay per click campaign often wins because the message is clear and the next step is easy.',
    },
    {
      icon: FaFileAlt,
      title: 'Landing page feedback that improves conversions',
      description:
        'Ads cannot fix a weak page. We review your landing pages for speed, clarity, trust signals, and form flow. Small changes can lift results. When the page improves, the pay per click campaign usually gets cheaper leads.',
    },
    {
      icon: FaDollarSign,
      title: 'Bid and budget control',
      description:
        'We set budgets by priority, not by guesswork. We adjust bids by device, location, time, and audience signals. This keeps your pay per click campaign steady, even when competition changes.',
    },
    {
      icon: FaChartLine,
      title: 'Tracking, reporting, and steady improvement',
      description:
        'We track calls, forms, purchases, and key actions. We monitor search terms, add negative keywords, and test new ads. We also run A/B tests on ads and landing pages. We flag wasted spend early, so your budget goes to queries that can convert. This is how a pay per click campaign gets better month after month.',
    },
  ]

  return (
    <section className="px-6 md:px-12 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
          What you get with our PPC service
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:scale-105 border border-gray-100 dark:border-gray-700 cursor-pointer"
              >
                <div className="flex items-center mb-4 gap-4">
                  {/* Icon inside circular background */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-700">
                    <Icon className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-7 text-justify">
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
