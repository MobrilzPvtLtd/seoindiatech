import React from 'react'
import {
  ArrowRight,
  Zap,
  LayoutGrid,
  LineChart,
  Globe,
  Speaker,
  BarChart3,
} from 'lucide-react'
import Link from 'next/link'

const Solutionswho = () => {
  const solutions = [
    {
      title: 'Workflow',
      desc:
        'We partner with you to build a custom workflow for your business and provide the strategies you need to achieve sustainable growth.',
      tag: true,
      icon: <LayoutGrid className="w-6 h-6" />,
      url: '/solution/workflow'
    },
    {
      title: 'Automation',
      desc:
        'Choose the right technology to automate your work, so you can streamline your operations and drive growth.',
      tag: true,
      icon: <Zap className="w-6 h-6" />,
      url: '/solution/automation'
    },
    {
      title: 'Market Research',
      desc:
        'We build your strategy by understanding market needs, creating audience personas, and defining your go-to-market approach.',
      tag: false,
      icon: <LineChart className="w-6 h-6" />,
      url: '/solution/market-research'
    },
    {
      title: 'Website Creation',
      desc:
        'We specialize in creating intuitive UI/UX design, enhancing website layouts, and improving user experience for optimal performance.',
      tag: false,
      icon: <Globe className="w-6 h-6" />,
      url: '/solution/website-creation'
    },
    {
      title: 'Promotion and Advertising',
      desc:
        'Attract your ideal audience and drive growth by effectively marketing your products, brand, or company with our strategic approach.',
      tag: false,
      icon: <Speaker className="w-6 h-6" />,
      url: '/solution/promotion-and-ads'
    },
    {
      title: 'CRM & Management tools',
      desc:
        'We leverage industry-leading tools to help you organize your business and achieve your strategic objectives.',
      tag: false,
      icon: <BarChart3 className="w-6 h-6" />,
      url: '/solution/crm-and-tools'
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-50 dark:bg-red-900/10 rounded-full blur-3xl opacity-70 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Solutions For Your Business
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-blue-700 dark:text-blue-400">Use Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 dark:from-red-500 dark:to-red-300 italic font-semibold">
              Solutions
            </span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            We offer a variety of{' '}
            <span className="font-semibold">Marketing Solutions</span> that can
            be tailored to suit your specific business needs, niche, and market
            requirements.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden"
            >
              {/* Card Background with subtle gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 -z-10"></div>

              {/* Special offer tag */}
              {solution.tag && (
                <div className="absolute top-0 left-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-br-lg shadow-md">
                    SPECIAL OFFER
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-8 border border-gray-200 dark:border-gray-700 rounded-xl group-hover:border-blue-500 dark:group-hover:border-blue-500 transition-all duration-300 h-full flex flex-col justify-between shadow-sm group-hover:shadow-xl bg-white dark:bg-gray-800">
                <div>
                  {/* Icon */}
                  <div className="mb-5 p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg inline-block">
                    {solution.icon}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {solution.desc}
                  </p>
                </div>

                {/* Button */}
                <Link href={solution.url}>
                <button className="cursor-pointer mt-6 inline-flex items-center justify-center gap-1.5 text-sm text-blue-700 dark:text-blue-400 font-medium group-hover:text-white dark:group-hover:text-white px-3 py-1.5 rounded-md border border-blue-200 dark:border-blue-800 group-hover:bg-blue-600 dark:group-hover:bg-blue-700 group-hover:border-transparent transition-all duration-300 w-40">
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="hidden text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform active:scale-95">
            Explore All Solutions
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Solutionswho
