import Link from 'next/link'
import React from 'react'
import {
  FaStar,
  FaGoogle,
  FaSearch,
  FaBullhorn,
  FaShieldAlt,
} from 'react-icons/fa'

export default function ORMServices() {
  const services = [
    {
      icon: <FaStar size={18} />,
      title: 'Review monitoring and response',
      description:
        'We track new reviews across major platforms. We help you reply with the right tone and the right facts. This reduces risk, shows accountability, and encourages more positive feedback. Review handling supports online reputation management for business because it affects local rankings and conversion.',
    },
    {
      icon: <FaGoogle size={18} />,
      title: 'Google Business Profile support',
      description: (
        <>
          For local brands, your listing is often the first impression. We
          improve accuracy, categories, services, photos, and review workflows.
          We also include{' '}
          <Link
            href="/services/gbp-optimization"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Google Business Profile (GBP) optimization
          </Link>{' '}
          steps that support more calls, direction requests, and
          trust.
        </>
      ),
    },
    {
      icon: <FaSearch size={18} />,
      title: 'Search result improvement',
      description:
        'We identify pages that harm trust or show outdated information. Then we build a plan to improve what ranks for your brand name. This uses SEO basics, content placement, and clean technical signals to help stronger pages appear higher.',
    },
    {
      icon: <FaBullhorn size={18} />,
      title: 'Brand mention tracking and quick response',
      description:
        'We track brand mentions across the web and social sites. When a complaint appears, we help you respond early so it does not spread. Reputation work is easier when the response is fast and consistent.',
    },
    {
      icon: <FaShieldAlt size={18} />,
      title: 'Crisis support and recovery plan',
      description:
        'If there is a sudden spike in negative feedback, we help you stabilize the situation. We set a response process, fix listing errors, and publish accurate brand pages that answer customer questions. Many teams need this structure to prevent repeat issues.',
    },
  ]

  return (
    <section className="mt-24 px-6 md:px-12 py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
          Our Online Reputation Management Services Focus on Five Areas
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer"
            >
              {/* Icon + Title Row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-600 text-white">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-7 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
