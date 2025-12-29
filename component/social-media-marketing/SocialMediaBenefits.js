// components/SocialMediaBenefits.tsx
import {
  TrendingUp,
  MessageCircle,
  MousePointerClick,
  Heart,
  BarChart3,
  Shield,
} from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    text: 'Improved brand recognition across all major platforms',
  },
  {
    icon: MessageCircle,
    text: 'Higher engagement rates with meaningful user interactions',
  },
  {
    icon: MousePointerClick,
    text: 'Increased website traffic and better conversion potential',
  },
  {
    icon: Heart,
    text: 'Enhanced customer relationships through active communication',
  },
  {
    icon: BarChart3,
    text: 'Greater market insights to understand audience behavior',
  },
  {
    icon: Shield,
    text: 'A strong online reputation that supports long-term success',
  },
]

export default function SocialMediaBenefits() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Benefits of Our{' '}
            <span className="text-blue-700 bg-clip-text">
              Social Media Marketing Services India
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl dark:text-gray-200 mx-auto leading-relaxed">
            Choosing SEO India Tech gives you access to reliable{' '}
            <strong className="text-blue-700">
              social media marketing services India
            </strong>{' '}
            that drive actual business growth.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-blue-100 hover:border-blue-300 transition-all duration-500 hover:-translate-y-3"
              >
                {/* Icon with Blue Gradient */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-9 h-9 text-white" strokeWidth={2.5} />
                </div>

                {/* Text */}
                <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed font-medium">
                  {benefit.text}
                </p>

                {/* Checkmark Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-2xl blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700 -z-10"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white leading-relaxed">
            Our social media marketing services are built to deliver both{' '}
            <span className="text-blue-600 underlin">short-term boosts</span>{' '}
            and{' '}
            <span className="text-blue-600">long-term digital authority</span>.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-blue-600/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Growing on Social Media
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
      </div>
    </section>
  )
}
