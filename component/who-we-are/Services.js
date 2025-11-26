import React from 'react'

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
          What We Do — Our Integrated Services
        </h2>

        {/* ROW 1 — IMAGE + ONE CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left: Image */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden">
            <img
              src="/images/sep.jpg"
              alt="Services"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-2xl flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Website Creation & Digital Foundation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A brand’s digital presence starts with a strong foundation. Our
              <a
                href="https://www.seoindiatech.com/solution/website-creation"
                className="text-blue-600"
              >
                {' '}
                website creation
              </a>{' '}
              service builds that foundation — whether you need a sleek
              corporate website, a dynamic e-commerce store, a creative
              portfolio, or content-rich platform tailored to your business
              goals. From wireframes to responsive design, content structuring
              to technical setup — we handle all aspects so your website stands
              out and performs.
              <br />
              <br />
              Our team brings together design sensibilities, technical
              expertise, and user experience focus to create websites that are
              not only visually compelling but also optimized for performance.
              This foundational service is where your digital journey begins,
              but it doesn’t stop there.
            </p>
          </div>
        </div>

        {/* ROW 2 — TWO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-2xl flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Promotion & Advertising for Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Launching a website is just the first step. To truly succeed
              online, you need visibility, reach, and engagement. That’s where
              our{' '}
              <a
                href="https://www.seoindiatech.com/solution/promotion-and-ads"
                className="text-blue-600"
              >
                promotion & advertising
              </a>{' '}
              services come into play. We combine strategic ad campaigns,
              targeted outreach, and digital marketing techniques to ensure your
              brand reaches your ideal audience effectively.
              <br />
              <br />
              Whether it’s search-engine marketing, social campaigns, or
              targeted advertising — we design promotion and advertising
              strategies that amplify your brand, drive traffic, generate leads,
              and maximize conversions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-2xl flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              CRM & Management Tool Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Managing customer relationships, tracking leads, and ensuring
              seamless communication across teams is critical for growth. We
              integrate advanced{' '}
              <a
                href="https://www.seoindiatech.com/solution/crm-and-tools"
                className="text-blue-600"
              >
                CRM & management tool
              </a>{' '}
              solutions to help you track interactions, manage customer data,
              and automate follow-ups. This ensures that every lead, inquiry, or
              customer conversation is captured, organized, and acted upon.
              <br />
              <br />
              With a robust CRM backbone, your business gains clarity on
              customer journeys, better insights into sales pipelines, and
              improved customer retention — turning chaotic data into strategic
              assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
