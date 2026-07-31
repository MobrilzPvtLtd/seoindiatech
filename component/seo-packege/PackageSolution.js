import Link from 'next/link'
import React from 'react'

const packages = [
  {
    name: 'STARTER',
    price: '249',
    keywords: 'Up to 20',
    recommended: '6 Months',
    popular: false,
  },
  {
    name: 'Growth',
    price: '399',
    keywords: 'Up to 50',
    recommended: '6 Months',
    popular: false,
  },
  {
    name: 'Platinum',
    price: '699',
    keywords: 'Up to 100',
    recommended: '4 Months',
    popular: true,
  },
  {
    name: 'Dedicated',
    price: '1199',
    keywords: 'Up to 250',
    recommended: '3 Months',
    popular: false,
  },
]

export default function PackageSolution() {
  return (
    <section className="pt-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-heading">
            SEO Package Solutions
          </h2>
          <p className="mt-3 text-muted">
            Choose the perfect SEO package for your business needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => {
            const isPopular = pkg.popular

            return (
              <div
                key={pkg.name}
                className={`relative rounded-2xl bg-white dark:bg-background 
                border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                ${
                  isPopular
                    ? 'border-primary shadow-md'
                    : 'border-gray-200 dark:border-gray-800'
                }`}
              >
                {/* Popular tag */}
                {isPopular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 
                    bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full"
                  >
                    Popular
                  </span>
                )}

                {/* Content */}
                <div className="px-6 py-8 text-center">
                  <h3 className="text-lg font-semibold text-heading">
                    {pkg.name}
                  </h3>

                  <div className="mt-4">
                    <span className="text-4xl font-bold text-heading">
                      ${pkg.price}
                    </span>
                    <span className="text-muted text-base"> /mo</span>
                  </div>

                  <div className="mt-4 text-sm text-green-600 dark:text-green-400 font-medium">
                    Free Setup Included
                  </div>
                </div>

                {/* Features */}
                <div className="border-t border-border dark:border-gray-800 px-6 py-6 space-y-3 text-sm text-body">
                  <div className="flex justify-between">
                    <span>Keywords</span>
                    <span className="font-medium">{pkg.keywords}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Recommended</span>
                    <span className="font-medium">{pkg.recommended}</span>
                  </div>
                </div>

                {/* Button */}
                <div className="px-6 pb-7">
                  <Link
                    href="/contact-us"
                    className={`block w-full text-center py-3 rounded-lg font-medium transition
                    ${
                      isPopular
                        ? 'w-full cursor-pointer sm:w-auto bg-gradient-to-r from-primary to-primary-hover dark:from-primary dark:to-primary-hover text-white font-semibold tracking-wide  hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-primary/20'
                        : 'w-full cursor-pointer sm:w-auto bg-gradient-to-r from-gray-600 to-gray-700 bg-gradient-to-r dark:from-surface dark:to-background text-white font-semibold tracking-wide  hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border dark:border-gray-500/30'
                    }`}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-12 text-center text-sm text-muted">
          Monthly reporting included - Best results with 6-month plan
        </p>
      </div>
    </section>
  )
}
