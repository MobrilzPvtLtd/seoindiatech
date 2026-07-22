import React from 'react'
import { TrendingUp, Target, ShieldCheck, Zap, FileText, BarChart3, Check } from 'lucide-react'
import Link from 'next/link'

const reasons = [
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    desc: 'Data-driven strategies that have helped businesses of all sizes grow sustainably.',
  },
  {
    icon: Target,
    title: 'Customized Strategies',
    desc: 'Tailored plans built specifically for your business goals and target audience.',
  },
  {
    icon: ShieldCheck,
    title: 'White-Hat Techniques',
    desc: 'Ethical, Google-compliant methods ensuring long-term results without penalties.',
  },
  {
    icon: Zap,
    title: 'Holistic Expertise',
    desc: 'From SEO to Content Marketing, Design, and PPC — we cover it all.',
  },
  {
    icon: FileText,
    title: 'Full Transparency',
    desc: 'Regular performance reports and actionable insights — no guesswork, ever.',
  },
  {
    icon: BarChart3,
    title: 'ROI-Focused Growth',
    desc: 'Every campaign is designed to deliver measurable returns and scalable growth.',
  },
]

export default function WhyPartnerSection({ title, subtitle, showCheckmarks = false }) {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 md:py-28 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          {/* Left Side — Heading + Text */}
          <div className="w-full md:w-5/12 md:sticky md:top-28">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/30 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              {title || (
                <>
                  Why Partner with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    SEO India Tech
                  </span>
                  ?
                </>
              )}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              {subtitle || 'We are a trusted digital partner delivering high-performance solutions backed by research, creativity, and innovation. Our commitment to quality sets us apart.'}
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/25"
            >
              Get a Free Consultation
            </Link>
          </div>

          {/* Right Side — Reasons List */}
          <div className="w-full md:w-7/12">
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    {showCheckmarks ? (
                      <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                    ) : (
                      <reason.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
