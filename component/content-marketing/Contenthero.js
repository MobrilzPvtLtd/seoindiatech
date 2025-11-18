import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Contenthero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 md:px-4 py-4 px-2 md:py-16">
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg max-w-7xl mx-auto overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-100 dark:bg-blue-800/20 rounded-full blur-3xl opacity-60 dark:opacity-40"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-50 dark:bg-blue-800/10 rounded-full blur-3xl opacity-60 dark:opacity-40"></div>
        </div>

        {/* Left Content */}
        <div className="max-w-xl space-y-6 w-full md:w-1/2 z-10">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-800/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-2">
            <span>Strategic Content Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
           Content Marketing Services – Build Trust, Engage Audiences &amp; Grow

            <span className="text-blue-700 dark:text-blue-400"> Your Brand</span>
          </h1>

          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full"></div>

          <p className="text-justify text-gray-700 dark:text-gray-300 text-base md:text-lg">
            At{' '}
            <span className="text-blue-700 dark:text-blue-400 font-medium">
              SEO Inida Tech,
            </span>{' '}
           High-quality content is the foundation of every successful digital strategy. At SEO India Tech, we
offer professional content marketing services designed to elevate brand visibility, attract the
right audience, and drive long-term engagement. With a strong focus on storytelling, SEO, and
user intent, we help businesses deliver meaningful messages that inspire action and build
authority across digital platforms.
          </p>
          <p className="text-justify text-gray-700 dark:text-gray-300 text-base md:text-lg">
           
          As a leading content marketing agency, we understand that customers connect with brands
that offer value, clarity, and consistent communication. Our approach blends creativity with
strategy to produce content that not only ranks but also resonates with your target audience.
Whether you want to boost organic reach, improve user experience, or strengthen your digital
identity, our comprehensive content marketing services support all aspects of your business
growth.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contactus">
              <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-800 dark:from-gray-800 dark:to-gray-900 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition flex items-center group shadow-md">
                Get started now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="hidden bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-6 py-3 rounded-full font-semibold border border-gray-200 dark:border-gray-700 transition">
              View our portfolio
            </button>
          </div>

          {/* Service highlights */}
          <div className="flex flex-wrap gap-3 pt-4">
            {['SEO Content', 'Blogs', 'Social Media', 'Email Campaigns'].map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Right Images - Improved Grid */}
        <div className="mt-10 md:mt-0 w-full md:w-1/2 md:pl-8 z-10">
          <div className="grid grid-cols-2 gap-4">
            {/* Top image */}
            <div className="col-span-2 relative h-48 md:h-64 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 rounded-xl"></div>
              <Image
                src="/images/account.png"
                alt="Content Marketing Strategy"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-3 left-4 z-20 text-white font-medium">
                Content Strategy
              </div>
            </div>

            {/* Bottom two images */}
            <div className="relative h-40 md:h-48 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 rounded-xl"></div>
              <Image
                src="/images/services/your.png"
                alt="Content Creation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute bottom-3 left-4 z-20 text-white font-medium text-sm">
                SEO Writing
              </div>
            </div>

            <div className="relative h-40 md:h-48 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 rounded-xl"></div>
              <Image
                src="/images/services/follow.png"
                alt="Content Distribution"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute bottom-3 left-4 z-20 text-white font-medium text-sm">
                Distribution
              </div>
            </div>
          </div>

          {/* Optional: Metrics */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-700">
              <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl">
                67%
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-xs">
                Higher Engagement
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-700">
              <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl">
                3.5x
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-xs">
                More Conversions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contenthero
