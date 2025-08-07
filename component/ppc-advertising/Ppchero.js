import React from 'react'

const Ppchero = () => {
  return (
    <div className="bg-white px-4 py-16 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-800 mb-8">
          Maximize Your ROI with High-Performance<br className="hidden md:block" />
          Pay-Per-Click Advertising
        </h1>

        {/* Subheading Paragraph */}
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          At <span className="font-semibold text-black">SEO India Tech</span>, we don’t just run ads—we create <span className="font-semibold">high-converting, precision-targeted campaigns</span> that generate real business results.
          Our <span className="font-semibold">Pay-Per-Click (PPC) advertising solutions</span> ensure your brand appears in front of the right audience, at the right time, with the right message.
        </p>

        {/* Tagline */}
        <p className="text-gray-800 text-sm md:text-base font-medium mb-10">
          Instant Traffic | Higher Conversions | Maximized ROI
        </p>

        {/* Call-to-action Button */}
        <div className="flex justify-center">
          <button className="bg-lime-200 text-black font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-md hover:scale-105 transition-transform">
            Turn Clicks into Conversions with Data-Driven PPC Campaigns
          </button>
        </div>
      </div>
    </div>
  )
}

export default Ppchero
