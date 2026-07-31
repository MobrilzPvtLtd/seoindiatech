import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="px-4 py-6 bg-white dark:bg-background">
      <div className="bg-gradient-to-r from-cream to-cyan-50 dark:from-background dark:to-surface border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg max-w-7xl mx-auto my-6 md:my-10">
        {/* Left Content */}
        <div className="max-w-xl space-y-4 w-full md:w-1/2 md:pr-8">

          <h1 className="text-5xl text-center md:text-left md:text-6xl font-bold text-heading leading-16 md:leading-20">
            Digital Marketing Services with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:from-accent dark:to-accent">
              {' '}
              SEO IndiaTech
            </span>
          </h1>

          <p className="text-justify text-body text-base md:text-lg">
            At SEO India Tech, we help businesses grow faster with digital
            marketing services designed to boost visibility, attract customers,
            and strengthen online authority. As a trusted digital marketing
            service company, we combine strategy, creativity, and data-driven
            techniques to deliver measurable results for brands across
            industries.
          </p>

          <p className="text-justify text-body text-base md:text-lg">
            Our team focuses on providing the best digital marketing services
            that enhance your online presence, improve engagement, and increase
            conversions-all while keeping your business goals at the center of
            every campaign. Whether you&#39;re a startup or an established
            brand, our custom solutions help you stay competitive in today's
            digital landscape.
          </p>

          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <Link href="/contact-us" className="inline-block">
              <button className="cursor-pointer dark:from-surface dark:to-background bg-gradient-to-r from-primary to-secondary text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 shadow-md border border-primary/20 dark:border-gray-500/30">
                Get started now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content (Half Screen) */}
        <div className="mt-8 md:mt-0 w-full md:w-1/2">
          <div
            className="bg-white/70 dark:bg-background/70 backdrop-blur 
            rounded-3xl shadow-xl p-8 md:p-10 h-full
            dark:border dark:border-border"
          >
            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-heading mb-8">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:from-accent dark:to-accent">
                SEO India Tech?
              </span>
            </h3>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {/* Card 1 */}
              <div
                className="p-6 rounded-2xl 
                bg-gradient-to-br from-cream to-white
                dark:from-surface dark:to-background
                border border-primary/20 dark:border-border
                shadow-sm hover:shadow-md dark:hover:shadow-lg
                transition"
              >
                <h4 className="font-semibold text-heading mb-2">
                  Tailored Strategies
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Every business is unique, so our plans are customized to match
                  your objectives.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="p-6 rounded-2xl 
                bg-gradient-to-br from-cream to-white
                dark:from-surface dark:to-background
                border border-primary/20 dark:border-border
                shadow-sm hover:shadow-md dark:hover:shadow-lg
                transition"
              >
                <h4 className="font-semibold text-heading mb-2">
                  Expert Team
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Our specialists bring years of experience delivering
                  top-quality digital marketing services.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="p-6 rounded-2xl 
                bg-gradient-to-br from-cream to-white
                dark:from-surface dark:to-background
                border border-primary/20 dark:border-border
                shadow-sm hover:shadow-md dark:hover:shadow-lg
                transition"
              >
                <h4 className="font-semibold text-heading mb-2">
                  Affordable & Transparent
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Clear pricing, regular updates, and honest communication at
                  every stage.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className="p-6 rounded-2xl 
                bg-gradient-to-br from-cream to-white
                dark:from-surface dark:to-background
                border border-primary/20 dark:border-border
                shadow-sm hover:shadow-md dark:hover:shadow-lg
                transition"
              >
                <h4 className="font-semibold text-heading mb-2">
                  Proven Results
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  We stay focused on performance, growth, and real outcomes-not
                  just metrics.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/contact-us">
              <button className="w-full cursor-pointer sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r dark:from-surface dark:to-background bg-gradient-to-r from-primary to-primary-hover dark:from-primary dark:to-primary-hover text-white font-semibold tracking-wide  hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-primary/20 dark:border-gray-500/30">
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
