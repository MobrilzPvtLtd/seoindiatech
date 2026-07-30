import React from 'react'
import { BarChart3, Check, Puzzle, Rocket, Settings } from 'lucide-react'

const features = [
  {
    icon: Check,
    text: 'We focus on real productivity and ROI',
  },
  {
    icon: BarChart3,
    text: 'We offer strategic consulting and implementation',
  },
  {
    icon: Puzzle,
    text: 'We provide minimal-learning, user-friendly tools',
  },
  {
    icon: Settings,
    text: 'We ensure continuous optimization post-deployment',
  },
  {
    icon: Rocket,
    text: 'We support all departments-Sales, Billing, Support, HR & Marketing',
    wide: true,
  },
]

export default function WhyCRM() {
  return (
    <>
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose SEO India Tech?
            </h4>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              We deliver more than software-we deliver long-term business
              transformation. Businesses prefer our CRM and automation services
              because:
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our experts understand both technology and business requirements,
              making us the perfect CRM partner for startups, SMBs, and
              enterprises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.text}
                  className={`p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700${feature.wide ? ' sm:col-span-2' : ''}`}
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-3">
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {feature.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h5 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Support Beyond Implementation
            </h5>
          </div>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-8 text-center">
            CRM success requires consistent monitoring and refinement. After CRM
            setup and automation integration, we continue supporting your team
            with:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md">
              <p className="text-gray-900 dark:text-white font-medium">
                Dashboard adjustments and workflow upgrades
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md">
              <p className="text-gray-900 dark:text-white font-medium">
                New automation requests
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md">
              <p className="text-gray-900 dark:text-white font-medium">
                User role updates and access management
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md">
              <p className="text-gray-900 dark:text-white font-medium">
                CRM troubleshooting and issue resolution
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md lg:col-span-2">
              <p className="text-gray-900 dark:text-white font-medium">
                Feature enhancements and system performance tracking
              </p>
            </div>
          </div>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed mt-8 text-center">
            Our ongoing <b>CRM tool management</b> ensures continuous
            efficiency, stability, and business growth without interruption.
          </p>
        </div>
      </section>

      <section className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/20 dark:bg-blue-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h5 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Transform Your Operations with CRM and Automation
          </h5>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
            Whether you are looking to streamline sales, enhance customer
            support, track team performance, or automate processes across your
            organization, our CRM and automation expertise ensures measurable
            results. From selecting the perfect <b>crm management tool</b> and
            mapping the ideal <b>workflow process</b> to implementing advanced{' '}
            <b>digital automation services,</b> we turn complex operations into
            intelligent, manageable systems.
          </p>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-10">
            Let SEO India Tech elevate your business with smarter CRM-powered
            digital transformation.
          </p>
        </div>
      </section>
    </>
  )
}
