import React from 'react'

export default function SolutionImpact() {
  return (
    <>
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Integrated Solutions for Full Digital Impact
            </h3>
          </div>

          {/* Content Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-3xl p-10 shadow-xl border border-gray-200 dark:border-gray-700">
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
              At{' '}
              <a href="https://www.seoindiatech.com/" className="text-blue-600">
                SEO India Tech,
              </a>{' '}
              we believe a website should be more than a standalone asset.
              That’s why our services connect your site with social media, CRM
              systems, lead management tools, and analytics — allowing you to
              manage your online presence, track leads, nurture relationships,
              and grow your brand — all from one centralized platform.
            </p>

            <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
              Our streamlined workflow automates routine tasks, saving time,
              cutting costs, and ensuring consistent brand messaging across all
              digital channels. The result: a cohesive, professional digital
              presence that works as hard as you do.
            </p>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        {/* Subtle background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/20 dark:bg-blue-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h5 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Place Your Trust in the Right Partner
          </h5>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
            Choosing SEO India Tech means entrusting your website to experts who
            understand the intersection of design, technology, marketing, and
            growth strategy. Our <b>best website creation services</b> are built
            on a foundation of research, creativity, and continuous
            optimization.
          </p>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-10">
            Whether you’re starting from scratch or looking to upgrade your
            existing online presence, our team is ready to help — delivering{' '}
            <b>professional website creation services</b> tailored to your needs
            and backed by real results.
          </p>
        </div>
      </section>
    </>
  )
}
