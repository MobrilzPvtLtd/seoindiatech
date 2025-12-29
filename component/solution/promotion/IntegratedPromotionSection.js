import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Target,
  Zap,
  Shield,
  TrendingUp,
  MessageSquare,
} from 'lucide-react'
import Link from 'next/link'

export default function IntegratedPromotionSection() {
  const seoServices = [
    'On-page optimization',
    'Technical SEO',
    'Keyword targeting',
    'Local SEO',
    'High-quality link-building',
    'SEO-friendly content creation',
  ]

  const ppcServices = [
    'Keyword research & selection',
    'Google Ads setup',
    'Landing page optimization',
    'Bid & budget management',
    'Real-time monitoring',
    'Performance analytics & reporting',
  ]

  const integratedFeatures = [
    'Creative ad design and messaging',
    'Platform-specific promotion',
    'Audience segmentation',
    'Data-backed campaign planning',
    'SEO-aligned ad optimization',
    'Consistent brand communication',
    'Continuous tracking and reporting',
  ]

  const whyChooseUs = [
    'Creative and highly skilled marketing team',
    'Customized promotional campaigns',
    'High-quality brand messaging',
    'Experienced professionals handling SEO and PPC',
    'Transparent performance reports',
    'Long-term marketing growth',
  ]

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Boost Results with Professional SEO Services */}
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Boost Results with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
              Professional SEO Services
            </span>
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Promotions and advertisements become significantly more effective
            when paired with strong search engine visibility. That’s why we
            integrate <strong>professional SEO services</strong> into your
            promotional strategy to ensure your brand ranks higher, reaches the
            right audience, and maintains long-term visibility.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {seoServices.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-400"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-medium text-gray-800 dark:text-gray-100">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg font-semibold text-gray-700 dark:text-gray-300">
            By combining SEO with advertising & promotional strategies, your
            business gains both{' '}
            <span className="text-blue-600">
              immediate and long-term results
            </span>{' '}
            — higher visibility, stronger traffic, and improved conversions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          {/* PPC Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 text-white dark:from-gray-800 dark:to-gray-900">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-10 h-10 text-blue-500" />
              <h4 className="text-3xl font-bold  text-black dark:text-white">
                Pay Per Click Advertising
              </h4>
            </div>
            <h5 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Instant Online Visibility
            </h5>
            <p className="text-lg opacity-95 leading-relaxed mb-8 text-black dark:text-white">
              While SEO delivers long-term organic growth,{' '}
              <Link
                href={'/services/ppc-advertising'}
                className="text-blue-600"
              >
                pay per click advertising{' '}
              </Link>{' '}
              offers immediate visibility and rapid lead generation.
            </p>
            <ul className="space-y-4">
              {ppcServices.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Target className="w-5 h-5 mt-1 flex-shrink-0 text-blue-500" />
                  <span className="text-black dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-white/20 backdrop-blur rounded-2xl">
              <p className="text-lg font-semibold text-black dark:text-white">
                Attract high-intent customers • Boost ROI • Scale fast
              </p>
            </div>
          </div>

          <div className="p-12">
            <BarChart3 className="w-16 h-16 text-blue-600 mb-6" />
            <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
              PPC allows your business to gain <strong>fast traction</strong>,
              appear at the exact moment customers search, and drive qualified
              leads instantly. Combined with targeted promotional campaigns —{' '}
              <span className="font-bold text-blue-600">
                your growth accelerates
              </span>
              .
            </p>
          </div>
        </div>

        {/* Integrated Strategy */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-16 text-white">
          <Shield className="w-20 h-20 mx-auto mb-6 opacity-90" />
          <h4 className="text-4xl md:text-5xl font-extrabold mb-6">
            Integrated Promotion Strategy for Maximum Results
          </h4>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-95">
            At <strong>SEO India Tech</strong>, we don’t do isolated campaigns.
            We blend advertisement, SEO, PPC, and brand promotion into one
            unified, high-performance strategy.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {integratedFeatures.map((feat, i) => (
              <div
                key={i}
                className="bg-white/15 backdrop-blur rounded-xl p-5 text-left"
              >
                <TrendingUp className="w-8 h-8 mb-2" />
                <p className="font-medium">{feat}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h5 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Why Choose <span className="text-blue-600">SEO India Tech</span>{' '}
              for Promotion & Ads?
            </h5>
            <div className="space-y-6">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-medium pt-2">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-12 text-white shadow-2xl">
            <MessageSquare className="w-16 h-16 mb-6" />
            <blockquote className="text-2xl font-bold italic">
              “We work closely with your team to understand your objectives and
              build promotional solutions that bring real, measurable results.”
            </blockquote>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-16 border border-gray-400">
          <h5 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Grow Your Business with Strategic Promotion & Ads
          </h5>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            If you’re ready to elevate your brand, dominate search results, and
            accelerate growth —
            <strong className="text-blue-600"> SEO India Tech</strong> is your
            trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* <button className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Start Growing Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button> */}
            <Link
              href={'/contactus'}
              className="inline-flex items-center gap-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-full transition-all duration-300"
            >
              Schedule a Free Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
