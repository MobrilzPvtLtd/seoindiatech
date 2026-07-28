import React from 'react'
import { TrendingUp, Target, ShieldCheck, Zap, FileText, BarChart3, Check } from 'lucide-react'
import Link from 'next/link'

const reasons = [
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    desc: <>We've worked across enough industries and business sizes to know the difference between what actually moves rankings and what just looks like activity on a report. Our experience delivering <Link href="/services/ai-seo" className="text-blue-600 dark:text-blue-400 hover:underline">AI SEO services India</Link> helps businesses achieve sustainable organic growth.</>,
  },
  {
    icon: Target,
    title: 'Customized Strategies',
    desc: 'Your market, your competitors, and your audience shape the plan—not a template we run for every client. Every strategy is tailored to your business goals and long-term success.',
  },
  {
    icon: ShieldCheck,
    title: 'White-Hat SEO Techniques',
    desc: 'We only use methods search engines actually reward, so your rankings hold up long after the work is done, not just until the next algorithm update.',
  },
  {
    icon: Zap,
    title: 'Holistic Digital Marketing Expertise',
    desc: 'SEO rarely works in isolation. When it needs to connect with content, design, or paid campaigns, we handle that too instead of leaving gaps for someone else to fill.',
  },
  {
    icon: FileText,
    title: 'Full Transparency',
    desc: "You'll always know exactly what's been done, what's coming next, and why—not just a dashboard full of numbers with no context.",
  },
  {
    icon: BarChart3,
    title: 'ROI-Focused Growth',
    desc: <>Every recommendation gets weighed against one question: does this actually grow the business, or does it just move a metric that looks good in a slide deck? That's the approach behind our <strong>Best SEO Services in India</strong>, where every action is focused on measurable business results.</>,
  },
]

export default function WhyPartnerSection({ title, subtitle, showCheckmarks = false }) {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 md:py-28 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          {/* Left Side — Heading + Text */}
          <div className="w-full md:w-5/12 md:sticky md:top-28">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              {title || (
                <>
                  Why Businesses Choose{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    SEO India Tech
                  </span>
                  ?
                </>
              )}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              {subtitle || `Most SEO agencies promise rankings. We focus on what actually gets you there — a real audit of your site and competitors, a strategy built around your specific goals, and reporting that shows exactly what's working each month. No guesswork, no cookie-cutter packages, just SEO built the way it should be.`}
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
