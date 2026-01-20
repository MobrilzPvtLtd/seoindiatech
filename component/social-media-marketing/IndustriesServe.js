import {
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Home,
  Plane,
  Landmark,
  Cpu,
  Shirt,
  Utensils,
} from 'lucide-react'

const industries = [
  { name: 'E-commerce', icon: ShoppingCart },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Education', icon: GraduationCap },
  { name: 'Real Estate', icon: Home },
  { name: 'Travel & Hospitality', icon: Plane },
  { name: 'Finance', icon: Landmark },
  { name: 'Technology', icon: Cpu },
  { name: 'Fashion & Lifestyle', icon: Shirt },
  { name: 'Food & Beverages', icon: Utensils },
]

export default function IndustriesWeServe() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Industries <span className="text-blue-600">We Serve</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
            As a seasoned{' '}
            <span className="font-semibold text-blue-700">
              social media marketing services company
            </span>
            , we work with businesses across diverse sectors — helping every
            brand stand out and grow.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-md hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-400 hover:-translate-y-4 text-center"
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all duration-300">
                  <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                </div>

                {/* Industry Name */}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-colors">
                  {industry.name}
                </h3>

                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5 rounded-2xl blur-3xl scale-0 group-hover:scale-110 transition-transform duration-500 -z-10"></div>
              </div>
            )
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-medium text-gray-800 dark:text-gray-100 max-w-4xl mx-auto">
            No matter your industry, our{' '}
            <span className="text-blue-600 font-bold">
              social media marketing services
            </span>{' '}
            ensure your brand <span className="">captures attention</span> and
            stays ahead of competitors.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/contactus"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-blue-600/60 transform hover:scale-105 transition-all duration-300"
            >
              See How We Can Help Your Industry
              <svg
                className="w-6 h-6 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
