import {
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Megaphone,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export default function TrustedAdvertisingCompany() {
  const benefits = [
    { icon: Sparkles, text: 'Strengthen brand recognition' },
    { icon: Users, text: 'Increase customer engagement' },
    { icon: Target, text: 'Generate quality leads' },
    { icon: TrendingUp, text: 'Improve online reach' },
    { icon: Megaphone, text: 'Boost conversion rates' },
    { icon: ShieldCheck, text: 'Promote seasonal or long-term campaigns' },
  ]

  const brandFocus = [
    'Enhancing brand recall',
    'Creating consistent communication',
    'Delivering compelling promotional stories',
    'Positioning your business as a trusted authority',
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <ShieldCheck className="w-5 h-5" />
            Trusted by Growing Businesses Across India
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
            Your Trusted{' '}
            <span className="text-transparent bg-clip-text bg-blue-600">
              Advertising & Promotion Company
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-100 max-w-5xl mx-auto leading-relaxed">
            As an established advertising & promotion company, we combine{' '}
            <strong>creativity, technology, and strategy</strong> to deliver
            high-performance promotional solutions. Our experienced team
            analyzes your competitors, understands market trends, and studies
            your audience behavior to build campaigns that deliver{' '}
            <span className="text-blue-600 font-bold">powerful outcomes</span>.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-400 border border-gray-400 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="relative z-10 flex items-start gap-5">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 pt-2">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto">
            From creative ad design to platform selection and performance
            monitoring — our team manages the{' '}
            <strong>entire process seamlessly</strong>.
          </p>
        </div>

        {/* Brand Promotion Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl p-12 md:p-20 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8">
              Advertising & Brand Promotion for{' '}
              <span className="text-yellow-300">Business Growth</span>
            </h3>

            <p className="text-xl md:text-2xl opacity-95 leading-relaxed mb-12 max-w-4xl mx-auto">
              Your brand is more than just a logo — it is an emotional and
              strategic representation of your business. Our advertising & brand
              promotion solutions help you create a{' '}
              <strong>strong identity that connects deeply</strong> with your
              audience and builds long-term trust.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {brandFocus.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-all duration-300"
                >
                  <div className="w-3 h-3 bg-yellow-300 rounded-full" />
                  <p className="text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-xl font-medium opacity-95">
              Whether you’re targeting local customers or building a nationwide
              audience — we help your business build{' '}
              <span className="text-yellow-300 font-bold">
                credibility and influence
              </span>
              .
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <h4 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Brand’s Presence?
          </h4>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Let’s build advertising & promotion campaigns that don’t just get
            seen — they get <strong>results</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href={'/contactus'}
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Launch Your Campaign Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            {/* <button className="inline-flex items-center gap-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-full transition-all duration-300">
              Get a Free Brand Audit
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
