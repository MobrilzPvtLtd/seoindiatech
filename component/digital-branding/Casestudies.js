import React from 'react'
import Image from 'next/image'
import { ArrowUpRight, TrendingUp, Award, Globe } from 'lucide-react'

const caseStudies = [
  {
    image:
      '/images/home/logo2.png',
    title: 'E-Commerce Brand Transformation',
    description:
      'We partnered with a struggling e-commerce brand experiencing falling engagement and sales. By overhauling their digital branding with a new website, enhanced SEO, and refreshed social media presence, they saw organic traffic grow by 150% and conversions climb 75% in just six months.',
    icon: <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    stats: '150% increase in organic traffic',
  },
  {
    image:
      '/images/home/logo4.png',
    title: 'Local Business Goes National',
    description:
      'A local business with big ambitions sought our help to reach customers outside their city. By building a captivating brand story, refining their online visibility, and launching targeted PPC ads, we helped them achieve a 200% surge in online inquiries and grow into three new states within a year.',
    icon: <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    stats: '200% growth in online inquiries',
  },
  {
    image:
      '/images/home/logo3.png',
    title: 'SaaS Company Gains Industry Authority',
    description:
      'A SaaS startup struggling for recognition found success through our strategic mix of content marketing, trust signals, and SEO. Within months, they saw 3x more leads and received an invite to speak at a leading industry event.',
    icon: <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    stats: '3x increase in lead generation',
  },
]

const Casestudies = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col items-start lg:flex-row gap-12">
        {/* Left Heading Section */}
        <div className="lg:w-1/3 w-full sticky top-24 self-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            <span>Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Case Studies
          </h2>

          <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mb-6"></div>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-18">
            Real Results from Real Brands
          </p>
        </div>

        {/* Right Cards Section */}
        <div className="lg:w-2/3 w-full flex flex-col gap-8">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all rounded-xl flex flex-col md:flex-row p-6 gap-6 group"
            >
              {/* Image Container */}
              <div className="w-full flex justify-center items-center md:w-fit">
                <div className="relative min-w-[120px] h-[120px] md:w-[140px] md:h-[140px] sm:w-[140px] sm:h-[140px] overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-blue-100 dark:bg-blue-900/40 rounded-md">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="hidden md:block">
                    <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full">
                      {item.stats}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mt-2 text-base leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 md:hidden">
                  <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full">
                    {item.stats}
                  </span>
                </div>

                <div className="hidden mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                  <button className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center group/btn">
                    Read full case study
                    <svg
                      className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Call to Action Card */}
          <div className="hidden bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              Ready to be our next success story?
            </h3>
            <p className="mb-6 text-blue-100">
              Let's transform your brand with data-driven strategies and
              creative excellence.
            </p>
            <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              Request a consultation
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Casestudies
