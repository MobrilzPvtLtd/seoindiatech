import React from 'react'
import { Star, Award, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'

const Navigate = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-background dark:bg-primary/15 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-50 dark:bg-yellow-900/10 rounded-full blur-2xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 space-y-6">
            {/* Rating stars with subtle animation */}
            <div className="flex items-center mb-4">
              <div className="flex space-x-1 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300 dark:text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">
                4.8 from over 1000+ reviews
              </span>
            </div>

            {/* Main heading with gradient accent */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-heading">
              Mastering the <br />
              <span className="relative">
                Digital Landscape
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500 dark:from-accent dark:to-purple-400 rounded-full opacity-70"></span>
              </span>{' '}
              <br />
              with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-purple-400">
                SEO India Tech
              </span>
            </h2>

            {/* Description with improved typography */}
            <p className="text-justify text-lg text-body leading-relaxed">
              Navigating the digital landscape is challenging, but success is
              achievable with the right partner. At SEO India Tech, we
              specialize in automation, market research, workflow building, and
              advertising. With over a decade of experience and a track record
              of successfully serving more than 1000 clients, we provide the
              expertise and precision you can trust to grow your business.
            </p>

            {/* Stats section */}
            <div className="hidden grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-border dark:border-gray-800">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-background dark:bg-primary/15 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary dark:text-accent" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-heading">
                    10+ Years
                  </h4>
                  <p className="text-sm text-muted">
                    Industry Experience
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-cream dark:bg-primary/20 rounded-lg">
                  <Users className="w-6 h-6 text-primary dark:text-accent" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-heading">
                    1000+
                  </h4>
                  <p className="text-sm text-muted">
                    Satisfied Clients
                  </p>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div className="hidden mt-8">
              <button className="px-8 py-3.5 bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-purple-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform active:scale-95">
                Discover Our Approach
              </button>
            </div>
          </div>

          {/* Image with enhanced styling */}
          <div className="flex-1 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-100 dark:bg-yellow-900/20 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 dark:bg-primary/15 rounded-full blur-xl -z-10"></div>

            <div className="relative w-xl h-96 rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.03] group">
              {/* Replace with Next.js Image for better optimization */}
              <Image
                src="/images/whoweare/grow.png"
                alt="Navigate with SEO India Tech"
                // width={1024}
                // height={640}
                fill
                className=" object-cover rounded-2xl "
              />

              {/* Overlay gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent opacity-60"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navigate
