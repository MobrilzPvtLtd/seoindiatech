import React from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative bg-gray-100 dark:bg-gray-900 overflow-hidden transition-colors duration-300 pt-12">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full border border-blue-300/30 dark:border-blue-500/10 animate-pulse" />
        <div className="absolute bottom-10 right-[15%] w-96 h-96 rounded-full border-2 border-blue-200/20 dark:border-blue-400/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-400/10 dark:bg-blue-600/5 blur-3xl" />
        <div className="absolute top-32 right-[20%] w-4 h-4 bg-blue-400/30 dark:bg-blue-500/20 rounded-full" />
        <div className="absolute bottom-32 left-[25%] w-3 h-3 bg-blue-300/30 dark:bg-blue-400/20 rounded-full" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.07) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-36 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/20 rounded-full text-sm font-medium text-blue-700 dark:text-blue-400 mb-8 transition-colors duration-300">
          <span className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full animate-pulse" />
          Design & Development
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6 transition-colors duration-300">
          We Build Digital
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
            Experiences That Matter
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-300">
          From intuitive UI/UX design to powerful web development — we craft
          end-to-end digital solutions that engage users and drive business
          growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              document
                .getElementById('DDform')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-blue-600/25"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <Link
            href="/contact-us"
            className="px-8 py-4 rounded-full text-base font-semibold text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-white transition-all duration-300"
          >
            Talk to an Expert
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center text-gray-400 dark:text-gray-600 transition-colors duration-300">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
