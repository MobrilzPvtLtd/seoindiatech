// components/WhyChooseSocialMedia.tsx
import {
  Target,
  Users,
  BarChart3,
  MessageSquare,
  DollarSign,
  RefreshCw,
} from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: 'Tailored Social Media Solutions',
    desc:
      'Every business is unique — our strategies are 100% customized to your brand and goals.',
  },
  {
    icon: Users,
    title: 'Experienced Professionals',
    desc:
      'Our team lives and breathes social media — from trending content to platform algorithms.',
  },
  {
    icon: RefreshCw,
    title: 'Full-Service Campaign Management',
    desc:
      'From strategy & content creation to scheduling, engagement, and ads — we handle it all.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    desc:
      'Every move is backed by real-time analytics, insights, and performance tracking.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Packages',
    desc:
      'Premium social media marketing services at pricing that fits startups to enterprises.',
  },
  {
    icon: MessageSquare,
    title: 'Consistent Communication',
    desc:
      'Weekly reports, monthly reviews, and instant updates — you’re always in the loop.',
  },
]

export default function WhyChooseSocialMedia() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose SEO India Tech for{' '}
            <span className="text-blue-700 bg-clip-text">
              Social Media Success?
            </span>
          </h2>
          <p className="text-xl dark:text-gray-100 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            As a leading{' '}
            <span className="font-semibold text-blue-700">
              social media marketing services company
            </span>
            , SEO India Tech combines creativity, technology, and analytics to
            deliver superior results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-500 hover:-translate-y-4"
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-blue-700 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-9 h-9 text-white" strokeWidth={2.5} />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.desc}
                </p>

                {/* Decorative hover blob */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-2xl blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700"></div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Boost Your Social Media Presence Today
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
