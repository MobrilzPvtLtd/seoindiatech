import React from 'react'

export default function MarketStrategy() {
  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/20 dark:bg-blue-700/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h5 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Let’s Build a Smarter Market Strategy Together
        </h5>

        <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
          Business success is not about who spends more but who spends wisely.
          With our professional
          <b> market research services,</b> you gain knowledge, clarity, and
          strategic advantage to outperform competitors. Whether you are a
          startup, SME, or enterprise, our{' '}
          <b>custom market research services</b> are tailored to fuel your
          growth, reduce risk, and improve ROI across campaigns.
        </p>

        <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-10">
          Start building your future with confidence. Partner with SEO India
          Tech — where research meets success and strategy meets growth.
        </p>

        {/* CTA Box */}
        {/* <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-5 rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-105">
          <span className="text-lg font-medium">
            Your success begins with informed decisions.
          </span>
        </div> */}
      </div>
    </section>
  )
}
