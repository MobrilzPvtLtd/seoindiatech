import React from 'react'

export default function AEOMeans() {
  return (
    <section className="relative bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-heading mb-12">
          What{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            answer engine optimization
          </span>{' '}
          means for your business
        </h2>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-body text-justify leading-relaxed">
              <span className="font-semibold text-heading">
                Answer engine optimization
              </span>{' '}
              is the practice of shaping your content so AI systems and search
              engines can extract accurate answers. It focuses on clarity,
              intent, and format.
            </p>

            <p className="text-lg text-body text-justify leading-relaxed">
              When done well,{' '}
              <span className="font-semibold text-heading">
                answer engine optimization
              </span>{' '}
              can improve visibility in featured snippets, People Also Ask
              results, AI overviews, and voice responses. It can also lift
              conversions because users land on content that matches their exact
              question.
            </p>
          </div>

          {/* Right Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Clear question based headings',
              'Short direct answers near the top of sections',
              'Strong internal linking so pages connect logically',
              'Schema markup and entity signals for AI clarity',
            ].map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 bg-background p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition duration-300 hover:shadow-xl"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent font-bold shrink-0">
                  {index + 1}
                </div>

                <p className="text-body text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
