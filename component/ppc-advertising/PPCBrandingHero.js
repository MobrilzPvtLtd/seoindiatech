// components/PPCBrandingHero.tsx
import React from 'react'
import {
  ArrowRight,
  Target,
  BarChart3,
  Shield,
  Zap,
  MessageSquare,
} from 'lucide-react'
import Link from 'next/link'

export default function PPCBrandingHero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
            PPC + Local SEO + Branding ={' '}
            <span className="text-blue-600">Powerful Digital Growth</span>
          </h3>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-100 max-w-4xl mx-auto">
            PPC cannot function in isolation. To build a complete online
            presence, your paid ads must work together with SEO, branding, and
            content strategy. That’s why we combine PPC with local seo services
            to help businesses dominate local search results while driving
            instant paid traffic.
          </p>
        </div>

        {/* Core Value Cards */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-400">
            <Zap className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Instant Paid Traffic
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Additionally, our{' '}
              <Link
                className="text-blue-600 underline"
                href={'/services/digital-branding'}
              >
                digital branding solution{' '}
              </Link>{' '}
              ensures your brand stands out with strong messaging, visuals, and
              positioning. From brand visibility to customer trust, everything
              improves when PPC campaigns align with a well-structured branding
              approach.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-400">
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Dominate Local Search
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Combine PPC with powerful local SEO services to own the map pack
              and organic results in your area.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-400">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Build Trust & Authority
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our digital branding solutions create consistent messaging and
              visuals that convert visitors into loyal customers.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 lg:p-16 mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 text-center mb-4">
            Why Choose <span className="text-blue-600">SEO India Tech</span> for
            PPC Advertising Services?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-4xl mx-auto mb-12">
            Recognized as a reliable digital marketing service company offering
            the best tailored strategies for your business goals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: BarChart3,
                title: 'Proven Expertise',
                desc:
                  'Years of managing high-performing Google PPC campaigns across industries.',
              },
              {
                icon: Target,
                title: 'Tailored Strategies',
                desc:
                  'Custom campaigns — no generic templates. Designed to maximize your ROI.',
              },
              {
                icon: MessageSquare,
                title: 'Transparent Reports',
                desc:
                  'Detailed insights on clicks, conversions, and ROI — always know where your money goes.',
              },
              {
                icon: Zap,
                title: 'Budget Optimization',
                desc:
                  'Efficient spend with zero waste. Get more leads without overspending.',
              },
              {
                icon: Shield,
                title: 'Complete Digital Support',
                desc:
                  'PPC + Local SEO + Content + Branding — a full-stack growth solution.',
              },
              {
                icon: ArrowRight,
                title: 'Holistic Integration',
                desc:
                  'PPC works seamlessly with SEO, CRO, landing pages, and branding.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0">
                  <item.icon className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white text-lg">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Start Your PPC Advertising Journey Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Ready for targeted ads, qualified leads, and instant visibility?
            Partner with SEO India Tech and experience professional
            pay-per-click advertising crafted for real success.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            {/* Primary Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg rounded-lg transition duration-200 shadow-md hover:shadow-lg"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            {/* Secondary Button */}
            {/* <a
              href="#case-studies"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent hover:bg-gray-200 text-gray-800 font-medium text-lg rounded-lg border-2 border-gray-400 transition duration-200"
            >
              View Case Studies
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}
