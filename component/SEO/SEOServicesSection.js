import React from 'react'
import {
  ArrowRight,
  BarChart3,
  Target,
  ShieldCheck,
  TrendingUp,
  FileText,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

export default function SEOServicesSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            PPC Advertising Services & Google PPC Campaigns
          </h3>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-100 max-w-4xl mx-auto leading-relaxed">
            Organic growth is powerful, but when you need immediate visibility,
            our PPC advertising services step in. Our team designs, manages, and
            optimizes{' '}
            <Link className="text-blue-600" href={'/services/ppc-advertising'}>
              Google PPC campaigns{' '}
            </Link>{' '}
            that deliver measurable results.
          </p>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-100 leading-relaxed">
            We leverage <strong>search ads</strong>,{' '}
            <strong>display ads</strong>, and{' '}
            <strong>remarketing strategies</strong> to ensure your paid
            campaigns work in synergy with your SEO efforts. The result? A fully
            integrated digital marketing approach that maximizes ROI and boosts
            your bottom line.
          </p>
        </div>

        {/* Measurable Results */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10 lg:p-16 mb-20 border border-gray-400">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Measurable Results with Transparent Reporting
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-100 leading-relaxed">
                With our professional services, you’re never in the dark. We
                provide <strong>regular, in-depth analytics reports</strong>
                so you can track progress across organic rankings, traffic,
                conversions, and engagement. These insights power smarter
                decisions, helping you fine-tune your SEO and PPC strategies for
                long-term success.
              </p>
            </div>
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="mb-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
            Why Partner with{' '}
            <span className="text-blue-600">SEO India Tech</span>?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Proven Track Record',
                desc:
                  'Data-driven SEO & PPC services that have helped businesses of all sizes grow sustainably.',
              },
              {
                icon: Target,
                title: 'Customized Strategies',
                desc:
                  'Tailored SEO & PPC plans built specifically for your business goals and target audience.',
              },
              {
                icon: ShieldCheck,
                title: 'White-Hat Techniques',
                desc:
                  'Ethical, Google-compliant methods ensuring long-term results without penalties.',
              },
              {
                icon: Zap,
                title: 'Holistic Expertise',
                desc:
                  'From Local SEO to Content Marketing, Digital Branding, and Google PPC — we cover it all.',
              },
              {
                icon: FileText,
                title: 'Full Transparency',
                desc:
                  'Regular performance reports and actionable insights — no guesswork, ever.',
              },
              {
                icon: BarChart3,
                title: 'ROI-Focused Growth',
                desc:
                  'Every campaign is designed to deliver measurable returns and scalable growth.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md border border-gray-400 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-5">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-100 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-blue-500 rounded-3xl p-12 lg:p-16 text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Start Your SEO & PPC Journey Today
          </h2>
          <p className="text-xl  mb-10 max-w-4xl mx-auto opacity-95">
            Ready to transform your online visibility? Get in touch with SEO
            India Tech for a
            <span className="font-bold"> free consultation</span>. We’ll build a
            powerful, data-driven plan combining expert SEO, Local SEO, Content
            Marketing, and PPC advertising services — tailored for your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-white text-blue-400 font-bold text-lg rounded-full hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
            >
              Claim Your Free Consultation
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
