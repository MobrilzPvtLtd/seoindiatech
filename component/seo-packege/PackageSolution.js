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
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
            Choose Your SEO Plan
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Simple pricing. Real results. No hidden fees.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => {
            const isPopular = pkg.popular

            return (
              <div
                key={pkg.name}
                className={`relative rounded-2xl bg-white dark:bg-gray-900 
                border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                ${
                  isPopular
                    ? 'border-blue-500 shadow-md'
                    : 'border-gray-200 dark:border-gray-800'
                }`}
              >
                {/* Popular tag */}
                {isPopular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 
                    bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full"
                  >
                    Popular
                  </span>
                )}

                {/* Content */}
                <div className="px-6 py-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {pkg.name}
                  </h3>

                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-500 text-base"> /mo</span>
                  </div>

                  <div className="mt-4 text-sm text-green-600 dark:text-green-400 font-medium">
                    Free Setup Included
                  </div>
                </div>

                {/* Features */}
                <div className="border-t border-gray-100 dark:border-gray-800 px-6 py-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
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
                  <a
                    href="/get-quote"
                    className={`block w-full text-center py-3 rounded-lg font-medium transition
                    ${
                      isPopular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-600 text-white hover:bg-gray-800 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400'
                    }`}
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-12 text-center text-sm text-gray-500">
          Monthly reporting included • Best results with 6-month plan
        </p>
      </div>
    </section>
  )
}
