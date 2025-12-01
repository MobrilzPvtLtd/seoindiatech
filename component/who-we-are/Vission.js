import React from 'react'

export default function Vission() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Vision &amp; Commitment
          </h2>
        </div>

        {/* Content Box */}
        <div
          className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 
                      dark:from-purple-900/20 dark:via-pink-900/10 dark:to-orange-900/20
                      border border-gray-200 dark:border-gray-700 
                      rounded-3xl p-10 shadow-xl"
        >
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
            At SEO India Tech, our goal is simple yet ambitious: to empower businesses with digital tools
            and strategies that deliver real growth, lasting relationships, and measurable success. We
            believe in building more than websites — we build digital platforms, growth engines, and brand
            destinations.
          </p>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
            Whether you’re a startup, an established company, or somewhere in between — we offer the
            expertise, technology, and passion to transform your digital presence. Through our integrated
            services — combining <b>workflow, automation, market research, website creation, promotion &amp;
            advertising,</b> and <b>CRM &amp; management tool</b> solutions — we make your digital transformation
            seamless, effective, and scalable.
          </p>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            Join us at SEO India Tech — and let’s build the future of your business together.
          </p>
        </div>

      </div>
    </section>
  )
}
