import React from 'react'

const Contentservices = () => {
  return (
    <div className="bg-white py-20 px-4">
      {/* Page Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-800">
          The Power of Content<br /> Marketing
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Section */}
        <div>
          <p className="text-sm text-blue-700 font-semibold mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Content That Converts
          </h2>
          <p className="text-gray-700 mb-6">
            Content is only effective if it delivers results. Our team crafts blogs, videos, infographics, and more that do more than just look good—they’re designed to convert.
          </p>
          <img
            src="https://www.digitalyzeit.com/wp-content/uploads/2025/01/high-angle-piece-paper-with-target-audience-scaled.jpg"
            alt="Target Audience"
            className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-8 shadow-[0_8px_0px_0px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
          {/* Item 1 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">SEO-Driven Writing</h3>
            <p className="text-gray-600">
              Get found by the people who matter most—your potential customers.
            </p>
          </div>
          {/* Item 2 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Persuasive Copy</h3>
            <p className="text-gray-600">
              Speak directly to your audience's needs and inspire action.
            </p>
          </div>
          {/* Item 3 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Multimedia Excellence</h3>
            <p className="text-gray-600">
              From eye-catching visuals to engaging videos, we tailor content to your audience’s preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contentservices
 