import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="px-4 py-6 bg-white dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg max-w-7xl mx-auto my-6 md:my-10">
        {/* Left Content */}
        <div className="max-w-xl space-y-4 w-full md:w-1/2 md:pr-8">
          <span className="inline-block bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-full px-4 py-1.5 text-sm font-medium text-black dark:text-white">
            ⭐ Digital Marketing
          </span>

          <h1 className="text-5xl text-center md:text-left md:text-6xl font-bold text-gray-900 dark:text-white leading-16 md:leading-20">
       Digital Marketing Services with
            <span className="text-blue-700 dark:text-blue-400"> SEO IndiaTech</span>
          </h1>

          <p className="text-justify text-gray-700 dark:text-gray-300 text-base md:text-lg">
            At SEO India Tech, we help businesses grow faster with digital marketing services designed to
boost visibility, attract customers, and strengthen online authority. As a trusted digital
marketing service company, we combine strategy, creativity, and data-driven techniques to
deliver measurable results for brands across industries.
          </p>

          <p className="text-justify text-gray-700 dark:text-gray-300 text-base md:text-lg">
            Our team focuses on providing the best digital marketing services that enhance your online
presence, improve engagement, and increase conversions—all while keeping your business
goals at the center of every campaign. Whether you&#39;re a startup or an established brand, our
custom solutions help you stay competitive in today’s digital landscape.
          </p>

          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <Link href="/contactus" className="inline-block">
              <button className="cursor-pointer dark:from-gray-800 dark:to-gray-900 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 shadow-md border border-blue-700/20 dark:border-gray-500/30">
                Get started now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Images (Half Screen) */}
        <div className="mt-8 md:mt-0 grid grid-cols-2 gap-4 w-full md:w-1/2">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/account.png"
              alt="Manage Account"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/follower.png"
              alt="Followers"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/about.png"
              alt="Work"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/images/likes.png"
              alt="Likes"
              width={500}
              height={500}
              className="w-full h-auto object-cover border-t"
            />
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/profile.png"
              alt="Post"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
