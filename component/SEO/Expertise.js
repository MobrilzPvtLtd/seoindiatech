import React from 'react'

const Expertise = () => {
  return (
    <div className="mx-auto px-4 py-20 text-center bg-white">
      <h1 className="text-3xl md:text-6xl max-w-6xl font-bold leading-snug text-black text-center mx-auto">
        Our SEO Expertise: A Data-Driven Approach to Growth
      </h1>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm h-full flex flex-col shadow-xl p-10 rounded-2xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-gray-700 mt-4 text-2xl font-semibold pb-7">
              In-Depth SEO Audit & Strategy Development
            </h2>
            <p className="text-gray-700 pb-5">
              Before we begin, we analyze your website’s performance, identify
              technical gaps, and develop a customized roadmap to enhance
              visibility and engagement.
            </p>
            <ul className="text-gray-700 list-disc pl-4 mt-auto">
              <li>Website performance assessment</li>
              <li>Competitor and industry analysis</li>
              <li>Keyword strategy development</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm h-full flex flex-col shadow-xl p-10 rounded-2xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-gray-700 mt-4 text-2xl font-semibold pb-7">
              Keyword Research & Content Optimization
            </h2>
            <p className="text-gray-700 pb-5">
              We identify high-intent keywords that your target audience is
              searching for and optimize your content accordingly.
            </p>
            <ul className="text-gray-700 list-disc pl-4 mt-auto">
              <li>Advanced keyword research and clustering</li>
              <li>
                On-page SEO optimization (titles, meta descriptions, headers,
                etc.)
              </li>
              <li>Engaging, search-optimized content creation</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm h-full flex flex-col shadow-xl p-10 rounded-2xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-gray-700 mt-4 text-2xl font-semibold pb-7">
              Technical SEO for Performance & Usability
            </h2>
            <p className="text-gray-700 pb-5">
              A well-structured website improves user experience and search
              rankings. Our technical SEO expertise ensures your site runs
              smoothly.
            </p>
            <ul className="text-gray-700 list-disc pl-4 mt-auto">
              <li>Website speed optimization</li>
              <li>Mobile-first indexing & responsive design</li>
              <li>XML sitemaps & structured data implementation</li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm h-full flex flex-col shadow-xl p-10 rounded-2xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-gray-700 mt-4 text-2xl font-semibold pb-7">
              Link Building & Authority Growth
            </h2>
            <p className="text-gray-700 pb-5">
              Backlinks from reputable sources improve domain authority and
              trust. We build high-quality, natural backlinks to strengthen your
              digital reputation.
            </p>
            <ul className="text-gray-700 list-disc pl-4 mt-auto">
              <li>White-hat link-building strategies</li>
              <li>Guest blogging & outreach campaigns</li>
              <li>Local citations & authoritative directory listings</li>
            </ul>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm h-full flex flex-col shadow-xl p-10 rounded-2xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-gray-700 mt-4 text-2xl font-semibold pb-7">
              Local SEO – Own Your Market
            </h2>
            <p className="text-gray-700 pb-5">
              For businesses targeting local customers, we enhance your presence
              in local searches and Google
            </p>
            <ul className="text-gray-700 list-disc pl-4 mt-auto">
              <li>Maps rankings. Google Business Profile optimization</li>
              <li>Local citations and NAP consistency</li>
              <li>Geo-targeted content strategies</li>
            </ul>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm h-full flex flex-col shadow-xl p-10 rounded-2xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-gray-700 mt-4 text-2xl font-semibold pb-7">
              E-Commerce SEO for More Sales
            </h2>
            <p className="text-gray-700 pb-5">
              For online stores, we optimize product pages, category structures,
              and site speed to boost organic traffic and conversions.
            </p>
            <ul className="text-gray-700 list-disc pl-4 mt-auto">
              <li>SEO-friendly product descriptions</li>
              <li>Schema markup for rich snippets</li>
              <li>Conversion rate optimization (CRO)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise
