// components/MarketingWorkflowSection.tsx
import React from 'react'
import {
  ArrowRight,
  Zap,
  Target,
  BarChart3,
  Users,
  CheckCircle2,
  Rocket,
  Brain,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Clock,
} from 'lucide-react'

export default function MarketingWorkflowSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Hero Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Workflow Management That Powers
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {' '}
              Digital Marketing Success
            </span>
          </h2>
          <p className="mt-6 text-xl lg:text-2xl text-gray-600 dark:text-gray-100 max-w-5xl mx-auto">
            From campaign planning to PPC execution and lead follow-up — our
            intelligent workflow systems keep your marketing team organized,
            consistent, and laser-focused on results.
          </p>
        </div>

        {/* PPC + Workflow Integration */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Seamless PPC Advertising Services Inside Your Workflow
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Running Google Ads & Meta campaigns is time-sensitive and
              detail-heavy. Our workflow systems ensure:
            </p>
            <ul className="space-y-4">
              {[
                'Keyword research → approval → ad copy → launch — all automated',
                'Daily budget & bid adjustments triggered by performance rules',
                'Real-time performance alerts sent to Slack/Email',
                'Weekly reports auto-generated and shared with stakeholders',
                'Negative keyword updates applied instantly across campaigns',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-200 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg font-semibold text-indigo-600">
              Result: Higher ROI, zero missed opportunities, and full control —
              without micromanagement.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-white/95 dark:bg-gray-800 backdrop-blur rounded-3xl shadow-2xl p-10 border border-gray-100">
              <div className="text-center mb-8">
                <Rocket className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  PPC Workflow Automation
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  From Launch to Optimization — Fully Automated
                </p>
              </div>
              <div className="space-y-4">
                {[
                  'Research',
                  'Strategy',
                  'Creation',
                  'Launch',
                  'Monitor',
                  'Optimize',
                ].map((stage, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">
                      {i + 1}
                    </div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          i < 5 ? 'bg-indigo-600' : 'bg-emerald-500'
                        } transition-all duration-1000`}
                        style={{ width: i < 5 ? '100%' : '70%' }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {stage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How Workflow + Automation Works */}
        <div className="bg-blue-500 rounded-3xl p-12 lg:p-16 text-white mb-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-10">
            How Workflow Optimization Supercharges Your Digital Automation
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Automate Repetitive Tasks',
                desc: 'Content scheduling, email sequences, report generation',
              },
              {
                icon: ShieldCheck,
                title: 'Eliminate Human Error',
                desc:
                  'No missed approvals, forgotten follow-ups, or data entry mistakes',
              },
              {
                icon: MessageSquare,
                title: 'Real-Time Team Sync',
                desc: 'Instant notifications, comments, and status updates',
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-gray-200 mb-12">
            Why Choose <span className="text-blue-600">SEO India Tech</span> for
            Workflow Solutions?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Clear Structure',
                desc: 'Everyone knows their role, deadline, and next step',
              },
              {
                icon: Clock,
                title: 'Faster Execution',
                desc: 'Tasks flow smoothly from ideation to delivery',
              },
              {
                icon: Brain,
                title: 'Data-Driven Operations',
                desc: 'Integrated market research fuels smarter decisions',
              },
              {
                icon: Users,
                title: 'Better Collaboration',
                desc: 'Real-time updates keep marketing & sales aligned',
              },
              {
                icon: TrendingUp,
                title: 'Marketing Optimization',
                desc:
                  'PPC, SEO, content, and email — all perfectly coordinated',
              },
              {
                icon: BarChart3,
                title: 'Scalable Growth',
                desc: 'Systems that grow with your team and goals',
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-400 hover:shadow-xl transition-shadow"
              >
                <benefit.icon className="w-12 h-12 text-blue-600 mb-5" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl  font-bold mb-6">
            Build a Stronger Future with Smart Workflow Solutions
          </h2>
          <p className="text-xl  opacity-95 mb-10 max-w-4xl mx-auto">
            If you want your business to achieve consistent performance, you
            need a powerful workflow process backed by automation and data
            insights. At SEO India Tech, we help you design, implement, and
            manage workflows that support your growth and simplify your
            operations. With integrated digital automation services, strategic
            insights from market research services, and improved campaign
            execution through ppc advertising services, your business gains
            long- lasting efficiency and competitive advantage.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#get-started"
              className="inline-flex items-center px-10 py-5 bg-white text-indigo-700 font-bold text-lg rounded-full hover:bg-gray-100 transition shadow-xl hover:shadow-2xl"
            >
              Start Your Free Workflow Audit Today
              <ArrowRight className="ml-3 w-6 h-6" />
            </a>
            <a
              href="#speak-to-expert"
              className="inline-flex items-center px-10 py-5 bg-transparent border-3 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-indigo-700 transition"
            >
              Speak to a Workflow Expert
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}
