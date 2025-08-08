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
            Transform Your Digital{' '}
            <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            We deliver cutting-edge solutions tailored to your specific needs,
            driving growth and fostering innovation.
          </p>
        </div>

        {/* First Solution */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/2 md:order-1 order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Digital-Marketing-Innovative-Image-1.webp"
                alt="UI/UX Design Solutions"
                className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8 md:order-2 order-2">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                Innovative UI/UX Solutions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                At SEO India Tech, we harmonize creativity with functionality to design intuitive interfaces that leave a lasting impression. Elevate your digital presence with user experiences that resonate deeply and effectively connect with your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services/ui-ux-design">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-indigo-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95">
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
              <img
                src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Digital-Marketing-Digital-Image-1.webp"
                alt="Digital Branding Solutions"
                className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8 md:order-1 order-2">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                Unparalleled Digital Branding
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                At SEO India Tech, we excel at navigating the digital landscape to fuel engagement, boost conversions, and ensure your brand's triumph. Trust us to elevate your brand to new heights with our comprehensive branding strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services/digital-branding">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-indigo-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95">
                    Learn more
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="#">
                  <button className="hidden bg-transparent text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-medium border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 flex items-center justify-center gap-2">
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
