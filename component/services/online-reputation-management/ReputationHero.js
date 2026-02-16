import React from 'react'
import Image from 'next/image'

export default function ReputationHero() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-14 sm:py-16 md:py-20 px-5 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        {/* Left - Text content */}
        <div className="w-full md:w-1/2 space-y-7 md:space-y-9 text-center md:text-left">
          <h1 className="text-4xl sm:text-4.5xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
            <span className="text-blue-600 dark:text-blue-400">
              Online Reputation Management Services
            </span>{' '}
            That Bring Real Results
          </h1>

          <div className="space-y-7 text-[1.05rem] sm:text-lg md:text-[1.05rem] leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            <p>
              When people search your brand, they form an opinion in seconds. A
              few bad reviews, an old news article, or an incorrect listing can
              cost you calls and sales. That is why online reputation management
              matters. With result-driven online reputation management services,
              you control what customers see first and you respond fast when
              issues appear.
            </p>

            <p>
              SEO India Tech works as an online reputation management company
              that helps brands protect trust and win back leads. We handle
              reviews, listings, search results, and brand mentions in one clear
              plan. If you want online reputation management for business
              growth, you need consistent monitoring and steady action, not
              one-time cleanups.
            </p>
          </div>

          <div className="pt-4 md:pt-6 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-blue-300/40"
            >
              Get Your Free Reputation Audit
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[380px] sm:max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 dark:shadow-indigo-900/30 transform transition-all duration-500 hover:scale-[1.04] hover:shadow-indigo-600/30">
            <Image
              src="/images/services/orm.png"
              alt="Online Reputation Management Services - Protected Brand Reputation"
              fill
              className="object-contain transition-transform duration-700 hover:scale-110"
              priority
              quality={92}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
