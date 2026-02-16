import React from 'react'
import {
  Brain,
  Zap,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Activity,
  Clock,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    icon: Brain,
    color: 'blue',
    title: 'Workflow Planning & Structure Development',
    desc:
      'We start by analyzing your existing operations to identify bottlenecks. Once we understand the pain points, we design a clear, optimized workflow process that aligns with your organizational goals — including task sequencing, role assignment, documentation structure, and automated triggers.',
  },
  {
    number: '02',
    icon: Zap,
    color: 'emerald',
    title: 'Automation Integration for Faster Results',
    desc: (
      <>
        {' '}
        Modern businesses cannot rely entirely on manual operations. We
        integrate powerful{' '}
        <Link href={'/solution/automation'} className="text-blue-500">
          digital automation services{' '}
        </Link>{' '}
        — from automated notifications and approval systems to integrated data
        tracking — reducing errors, saving time, and delivering consistent
        results with minimal effort.
      </>
    ),
  },
  {
    number: '03',
    icon: Users,
    color: 'purple',
    title: 'Collaboration & Task Management',
    desc:
      'Our workflow management setup enables seamless team collaboration. Employees get real-time updates, track progress instantly, assign tasks clearly, and communicate within the platform — ensuring alignment and preventing critical tasks from slipping through the cracks.',
  },
  {
    number: '04',
    icon: TrendingUp,
    color: 'orange',
    title: 'Performance Monitoring & Continuous Improvement',
    desc:
      'Built-in analytics and monitoring tools let you track workflow performance in real time. Identify bottlenecks fast, measure productivity gains, and continuously refine processes for long-term operational excellence.',
  },
]

const colorMap = {
  blue: 'from-blue-500 to-blue-600',
  emerald: 'from-emerald-500 to-emerald-600',
  purple: 'from-purple-500 to-purple-600',
  orange: 'from-orange-500 to-orange-600',
}

export default function WorkflowAutomationSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Streamline Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}
              Intelligent Workflow Automation
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Transform chaotic manual processes into smooth, automated systems
            that save time, reduce errors, and scale with your growth.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon
            const gradient = colorMap[step.color]

            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-400 overflow-hidden"
              >
                {/* Background Gradient Blob */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-3xl`}
                ></div>

                <div className="flex items-start gap-6">
                  {/* Step Number + Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Mini Benefits */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {index === 0 && (
                        <>
                          <span className="flex items-center gap-2 text-sm font-medium text-blue-700">
                            <CheckCircle2 className="w-4 h-4" /> Bottleneck
                            Removal
                          </span>
                          <span className="flex items-center gap-2 text-sm font-medium text-blue-700">
                            <Clock className="w-4 h-4" /> Clear Timelines
                          </span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <span className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                            <Zap className="w-4 h-4" /> Zero-Code Automation
                          </span>
                          <span className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                            <ShieldCheck className="w-4 h-4" /> Error-Free
                          </span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <span className="flex items-center gap-2 text-sm font-medium text-purple-700">
                            <Users className="w-4 h-4" /> Real-Time Sync
                          </span>
                          <span className="flex items-center gap-2 text-sm font-medium text-purple-700">
                            <Activity className="w-4 h-4" /> Full Visibility
                          </span>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <span className="flex items-center gap-2 text-sm font-medium text-orange-700">
                            <TrendingUp className="w-4 h-4" /> Data-Driven
                          </span>
                          <span className="flex items-center gap-2 text-sm font-medium text-orange-700">
                            <RefreshCw className="w-4 h-4" /> Ongoing
                            Optimization
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-16 text-white">
            <h3 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Automate & Scale Your Operations?
            </h3>
            <p className="text-xl opacity-95 mb-10 max-w-3xl mx-auto">
              Let us build a custom workflow system that eliminates repetitive
              tasks and empowers your team to focus on what truly matters —
              growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contactus"
                className="inline-flex items-center px-10 py-5 bg-white text-blue-700 font-bold text-lg rounded-full hover:bg-gray-100 transition shadow-xl"
              >
                Start Your Free Workflow Audit
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
