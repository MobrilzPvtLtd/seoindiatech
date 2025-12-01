import React from 'react'

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Why Clients Choose Us
        </h3>

        <div className="space-y-8">
          {[
            {
              icon: 'Layers',
              text: (
                <>
                  <strong>Holistic approach:</strong> We don’t just build
                  websites — we build digital ecosystems that combine{' '}
                  <strong>
                    workflow, automation, market research, website creation,
                    promotion & advertising, and CRM & management tool
                  </strong>{' '}
                  systems into unified solutions.
                </>
              ),
            },
            {
              icon: 'Settings',
              text: (
                <>
                  <strong>Customized solutions:</strong> We understand that
                  every business is unique. Our services are tailored to your
                  goals, industry dynamics, and growth ambitions.
                </>
              ),
            },
            {
              icon: 'BarChart',
              text: (
                <>
                  <strong>Data-driven strategies:</strong> From market research
                  to CRM analytics, every decision is based on real data,
                  ensuring smarter outcomes and measurable results.
                </>
              ),
            },
            {
              icon: 'Clock',
              text: (
                <>
                  <strong>Efficiency through automation:</strong> By automating
                  repetitive processes and structuring workflows, we help you
                  save time, reduce errors, and scale smoothly.
                </>
              ),
            },
            {
              icon: 'LifeBuoy',
              text: (
                <>
                  <strong>End-to-end support:</strong> From initial handshake to
                  long-term optimization and maintenance — we stay with you
                  through the entire digital journey.
                </>
              ),
            },
          ].map((item, index) => {
            const Icon =
              item.icon === 'Layers'
                ? require('lucide-react').Layers
                : item.icon === 'Settings'
                ? require('lucide-react').Settings
                : item.icon === 'BarChart'
                ? require('lucide-react').BarChart
                : item.icon === 'Clock'
                ? require('lucide-react').Clock
                : require('lucide-react').LifeBuoy

            return (
              <div
                key={index}
                className="flex gap-6 bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700 
            rounded-2xl p-6 shadow hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl 
              bg-blue-100 dark:bg-blue-900/40 border border-blue-300/50 dark:border-blue-700"
                >
                  <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
