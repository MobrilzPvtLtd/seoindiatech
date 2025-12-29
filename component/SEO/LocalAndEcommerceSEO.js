import {
  MapPin,
  Store,
  ShoppingCart,
  Search,
  Star,
  ArrowRight,
  Globe,
  Package,
} from 'lucide-react'

export default function LocalAndEcommerceSEO() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Specialized SEO Services That Deliver Real Business Results
          </h2>
          <p className="mt-5 text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Whether you're a local business wanting to dominate your
            neighborhood or an online store focused on sales — we have tailored
            SEO strategies built exactly for your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Local SEO Card */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-10 lg:p-12 overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10 group-hover:opacity-60 transition-opacity"></div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Local SEO Services:{' '}
                <span className="text-blue-600">Own Your Neighborhood</span>
              </h3>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              If your business serves a specific geographic market, our local
              SEO services are designed just for you. We optimize your{' '}
              <strong>Google Business Profile</strong>, ensure perfect NAP
              consistency (Name, Address, Phone), and create localized content
              that resonates with nearby customers.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Rank #1 in the Google Map Pack (Local 3-Pack)',
                'Get more phone calls, directions & foot traffic',
                'Dominate “near me” and location-based searches',
                'Build trust with reviews & optimized GBP posts',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-200 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#local-seo-contact"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl"
            >
              Dominate Local Search Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* E-Commerce SEO Card */}
          <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-10 lg:p-12 overflow-hidden border border-emerald-100 hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-40 -z-10 group-hover:opacity-60 transition-opacity"></div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <ShoppingCart className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                E-Commerce SEO That{' '}
                <span className="text-emerald-600">Drives Sales</span>
              </h3>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              For online retailers, our SEO solutions are laser-focused on{' '}
              <strong>conversions</strong>. We optimize every element of your
              store to attract qualified traffic and turn visitors into paying
              customers.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'SEO-friendly product descriptions & titles',
                'Rich snippets with schema markup (stars, price, stock)',
                'Category & collection page optimization',
                'Site speed, mobile UX & CRO improvements',
                'Higher rankings = more traffic = more sales',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-200 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#ecommerce-seo-contact"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl"
            >
              Boost Your Online Store Sales
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-20 text-center">
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Trusted by Local Businesses & E-Commerce Brands Across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" /> 500+ Optimized Listings
            </div>
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5" /> 200+ Local Clients
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5" /> Top 3 Rankings Achieved
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
