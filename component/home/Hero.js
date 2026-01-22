import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="px-4 py-6 bg-white dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg max-w-7xl mx-auto my-6 md:my-10">
        {/* Left Content */}
        <div className="max-w-xl space-y-4 w-full md:w-1/2 md:pr-8">
          {/* <span className="inline-block bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-full px-4 py-1.5 text-sm font-medium text-black dark:text-white">
            ⭐ Digital Marketing
          </span> */}

          <h1 className="text-5xl text-center md:text-left md:text-6xl font-bold text-gray-900 dark:text-white leading-16 md:leading-20">
            Digital Marketing Services with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
              {' '}
              SEO IndiaTech
            </span>
          </h1>

          <p className="text-justify text-gray-700 dark:text-gray-300 text-base md:text-lg">
            At SEO India Tech, we help businesses grow faster with digital
            marketing services designed to boost visibility, attract customers,
            and strengthen online authority. As a trusted digital marketing
            service company, we combine strategy, creativity, and data-driven
            techniques to deliver measurable results for brands across
            industries.
          </p>

          <p className="text-justify text-gray-700 dark:text-gray-300 text-base md:text-lg">
            Our team focuses on providing the best digital marketing services
            that enhance your online presence, improve engagement, and increase
            conversions—all while keeping your business goals at the center of
            every campaign. Whether you&#39;re a startup or an established
            brand, our custom solutions help you stay competitive in today’s
            digital landscape.
          </p>

          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <Link href="/contactus" className="inline-block">
              <button className="cursor-pointer dark:from-gray-800 dark:to-gray-900 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 shadow-md border border-blue-700/20 dark:border-gray-500/30">
                Get started now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content (Half Screen) */}
        <div className="mt-8 md:mt-0 w-full md:w-1/2">
          <div
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur 
            rounded-3xl shadow-xl p-8 md:p-10 h-full
            dark:border dark:border-gray-700"
          >
            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                SEO India Tech?
              </span>
            </h3>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {/* Card 1 */}
              <div
                className="p-6 rounded-2xl 
                bg-gradient-to-br from-blue-50 to-white
                dark:from-gray-800 dark:to-gray-900
                border border-blue-100 dark:border-gray-700
                shadow-sm hover:shadow-md dark:hover:shadow-lg
                transition"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Tailored Strategies
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Every business is unique, so our plans are customized to match
                  your objectives.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="p-6 rounded-2xl 
                bg-gradient-to-br from-blue-50 to-white
                dark:from-gray-800 dark:to-gray-900
                border border-blue-100 dark:border-gray-700
                shadow-sm hover:shadow-md dark:hover:shadow-lg
                transition"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Expert Team
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our specialists bring years of experience delivering
                  top-quality digital marketing services.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="p-6 rounded-2xl 
                bg-gradient-to-br from-blue-50 to-white
                dark:from-gray-800 dark:to-gray-900
                border border-blue-100 dark:border-gray-700
                shadow-sm hover:shadow-md dark:hover:shadow-lg
                transition"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Affordable & Transparent
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Clear pricing, regular updates, and honest communication at
                  every stage.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className="p-6 rounded-2xl 
                bg-gradient-to-br from-blue-50 to-white
                dark:from-gray-800 dark:to-gray-900
                border border-blue-100 dark:border-gray-700
                shadow-sm hover:shadow-md dark:hover:shadow-lg
                transition"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Proven Results
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  We stay focused on performance, growth, and real outcomes—not
                  just metrics.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/contactus">
              <button className="w-full cursor-pointer sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white font-semibold tracking-wide  hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-blue-700/20 dark:border-gray-500/30">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
