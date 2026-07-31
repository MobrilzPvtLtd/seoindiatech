import React from 'react'

export default function WhyChoose() {
  return (
    <section
      className="w-full py-24 px-6 
                        bg-white dark:bg-background 
                        transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADING */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12
                       text-heading"
        >
          Why Choose Our{' '}
          <span className="text-primary dark:text-accent">
            Local SEO Services
          </span>
        </h2>

        {/* CONTENT CARD */}
        <div
          className="bg-background 
                        rounded-3xl p-10 md:p-14 
                        shadow-xl border 
                        border-gray-200 dark:border-gray-800"
        >
          <div
            className="space-y-6 text-lg leading-relaxed 
                          text-body 
                          text-justify"
          >
            <p>
              Local SEO service work is not one size fits all. Every area and
              business type is different. We tailor our local SEO services to
              match your location and audience. When customers look for services
              like yours, we help your site show up.
            </p>

            <p>
              As a local SEO services agency, we focus on search terms that
              matter to your business. We work with both small and large
              companies. Our services include:
            </p>

            {/* BULLET LIST */}
            <ul className="space-y-3 pl-6 list-disc marker:text-primary dark:marker:text-accent">
              <li>Local keyword research and optimization</li>
              <li>Google Business Profile setup and management</li>
              <li>Local citation building across directories</li>
              <li>On-page SEO for local landing pages</li>
              <li>Local link building</li>
              <li>Review and reputation management</li>
            </ul>

            <p>
              This mix of local SEO marketing services helps search engines show
              your business when local customers search for your offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
