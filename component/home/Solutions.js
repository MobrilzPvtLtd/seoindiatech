import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Solutions = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium">
            Our Solutions
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Digital Marketing Service in India for Every 
            <span className="text-blue-600 dark:text-blue-400"> Business</span>
          </h2>
          <p className="mt-4 max-w-5xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
           Whether you want to boost sales, increase traffic, or strengthen your brand, our digital
            marketing service in India ensures that your business stays ahead in the competitive market.
            
            With a balance of innovation and strategy, we help you unlock new opportunities and achieve
            sustainable success.
          </p>
        </div>

        {/* First Solution */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/2 md:order-1 order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/images/uiux.png"
                alt="UI/UX Design Solutions"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8 md:order-2 order-2">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                Strategic UI/UX Design and Development
              </h3>
              <p className="text-justify text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                SEO India Tech seamlessly combines creative design with
                user-focused functionality to build memorable interfaces.
                Amplify your digital presence with experiences that engage and
                resonate with your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services/ui-ux-design">
                  <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95">
                    Learn more
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="#">
                  <button className="bg-transparent text-blue-600 hidden dark:text-blue-400 px-8 py-3 rounded-full font-medium border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 flex items-center justify-center gap-2">
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Second Solution */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mt-16">
          <div className="w-full md:w-1/2 md:order-2 order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/images/digital branding.png"
                alt="Digital Branding Solutions"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8 md:order-1 order-2">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                Building Your Distinct Digital Brand
              </h3>
              <p className="text-justify text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                SEO India Tech excels at mastering the digital realm to drive
                engagement, boost conversions, and secure your brand’s
                prominence. Trust our expert branding strategies to elevate your
                brand to new peaks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services/digital-branding">
                  <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95">
                    Learn more
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="#">
                  <button className="hidden cursor-pointer bg-transparent text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-medium border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 flex items-center justify-center gap-2">
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
