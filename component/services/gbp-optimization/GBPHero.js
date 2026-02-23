import React from 'react'
import Image from 'next/image'

export default function GBPHero() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Google Business Profile Optimization Service in India
            </h1>

            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>

            <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed text-base md:text-lg">
              Your Google Business Profile is often the first thing people see
              when they search for a local service. It shows your phone number,
              directions, hours, photos, reviews, and updates. If any of this is
              missing or messy, you lose calls and visits. SEO India Tech helps
              you fix that with gbp optimization services built for steady local
              growth. If you want fast clarity on what to change first, our gbp
              optimization services start with a simple audit and a clear action
              list.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[85%] md:w-[75%] lg:w-[80%] group">
              {/* Background Glow Effect */}
              <div className="absolute -inset-3 bg-blue-500/10 dark:bg-blue-400/10 rounded-3xl blur-xl"></div>

              <Image
                src="/images/services/GOOGLE-MAPS-SEO.jpg"
                alt="Google Business Profile Optimization"
                width={500}
                height={350}
                className="relative rounded-3xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
