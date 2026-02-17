import React from 'react'

export default function OurProcess() {
  const steps = [
    {
      title: 'Step 1. Audit and baseline',
      description:
        'We review your search results, reviews, listings, and brand mentions. We document what customers see today and where the risk sits.',
    },
    {
      title: 'Step 2. Fix and protect',
      description:
        'We correct listings, improve your Google Business Profile, and set monitoring. This is where online reputation management starts to reduce risk.',
    },
    {
      title: 'Step 3. Build positive signals',
      description:
        'We help publish brand pages, local pages, and helpful content that answers real customer questions. This supports online reputation management by pushing accurate information higher.',
    },
    {
      title: 'Step 4. Maintain and improve',
      description:
        'We keep tracking, responding, and improving. Online reputation management services deliver results when the work stays consistent month after month.',
    },
  ]

  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h4 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
          Our process
        </h4>

        <div className="grid gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition p-6 border-l-4 border-blue-600"
            >
              <h5 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                {step.title}
              </h5>
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-7 text-justify">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
