import Image from 'next/image'
import React from 'react'
import { TrendingUp, Target, BarChart3, ArrowRight } from 'lucide-react'

const Potential = () => {
  // Key benefits data
  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Increased Visibility',
      description:
        'Boost your rankings for the keywords that drive real business results.',
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Qualified Traffic',
      description:
        'Bring in qualified traffic from users searching for your offerings.',
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Measurable Results',
      description:
        'Monitor results with detailed analytics and actionable reports.',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-gray-100 to-blue-50 dark:from-gray-900 dark:to-blue-950/30 px-6 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-50/70 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <span>Unlock Your Potential</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-5xl font-bold leading-tight text-gray-900 dark:text-white mx-auto mb-6">
            Elevate Your Brand Online with Expert SEO Strategies
          </h2>

          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto mb-8"></div>

          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Partner with a team that combines technical precision and creative
            insight to grow your business organically.
          </p>
        </div>

        {/* Main image with frame */}
        <div className="relative mx-auto mb-16 max-w-4xl">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-blue-600 dark:border-blue-500 rounded-tl-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-blue-600 dark:border-blue-500 rounded-br-xl"></div>

          {/* Main image */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative">
              <Image
                src="https://www.digitalyzeit.com/wp-content/uploads/2025/02/SEO-agency.webp"
                alt="SEO Strategy Team Meeting"
                width={900}
                height={600}
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50"></div>
            </div>

            {/* Image caption/overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-left">
              <h3 className="text-xl font-semibold mb-2">
                Expert SEO Strategists
              </h3>
              <p className="text-sm text-gray-200">
                Our team combines technical expertise with creative content
                strategies to drive measurable results
              </p>
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 text-center"
            >
              <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full inline-flex items-center justify-center text-blue-700 dark:text-blue-400 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Potential
