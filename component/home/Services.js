import Link from 'next/link'
import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Search Engine Optimization',
      desc:
        "Enhance your website's visibility and achieve higher search engine rankings with our data-driven SEO strategies, customized to meet your business goals.",
      icon: '🔍',
    },
    {
      title: 'Social Media Marketing',
      desc:
        'Create a powerful online presence and foster a vibrant community around your brand with our effective social media strategies.',
      icon: '📱',
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      desc:
        'Maximize your ROI by driving targeted traffic through our data-driven and strategic PPC campaigns.',
      icon: '📈',
    },
    {
      title: 'Content Marketing',
      desc:
        "Establish your brand's authority and build a loyal audience with compelling and relevant content designed to resonate with your customers.",
      icon: '✍️',
    },
    {
      title: 'Email Marketing',
      desc:
        'We design personalized email campaigns that reach your audience directly, helping you nurture leads and drive conversions for maximum impact.',
      icon: '📧',
    },
    {
      title: 'Web Design and Development',
      desc:
        'Develop a visually stunning and user-friendly website that reflects your brand and converts visitors into customers.',
      icon: '🌐',
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 pt-4 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Left two columns for cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-blue-100 dark:border-gray-600"
              >
                <div className="flex items-start mb-4">
                  <span
                    className="text-3xl mr-3"
                    role="img"
                    aria-label={service.title}
                  >
                    {service.icon}
                  </span>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right side description card */}
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-700 dark:to-gray-800 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white dark:from-gray-300 dark:to-white">
                Our Services
              </h1>
              <p className="mb-8 text-sm sm:text-base leading-relaxed text-blue-100 dark:text-gray-400">
                At SEO India Tech, we deliver powerful digital marketing
                solutions designed to elevate your brand and drive measurable
                success. Our team of experts crafts highly customized,
                cutting-edge strategies that align with your business goals,
                leveraging advanced technology and industry insights to ensure
                impactful, sustainable outcomes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contactus">
                <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 shadow-md border border-blue-700/20 dark:border-gray-500/30 text-center">
                  Get Started
                </button>
              </Link>
              <Link href="/blog">
                <button className="hidden cursor-pointer bg-transparent text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border border-white/20 text-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
