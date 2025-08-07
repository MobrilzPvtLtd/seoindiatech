import React from 'react'

const Advertisement = () => {
  return (
    <div className='bg-white px-4 py-16'>
      {/* Heading */}
      <div className='text-center mb-14'>
        <h1 className='text-gray-900 text-3xl md:text-4xl font-bold leading-snug'>
          Our PPC Advertising Services
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Drive traffic, leads, and sales with our strategic and ROI-driven ad solutions.
        </p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {/* Card 1 */}
        <div className='bg-white border rounded-xl shadow-md p-6 flex flex-col justify-between h-full'>
          <h2 className='text-xl font-semibold mb-2 text-gray-800'>
            Google Ads & Search Engine Marketing (SEM)
          </h2>
          <p className='text-gray-600 mb-3'>
            Get to the top of Google search results and attract <strong>high-intent buyers</strong> ready to convert.
          </p>
          <ul className='list-disc list-inside text-gray-700 space-y-1'>
            <li>Google Search Ads & Display Ads</li>
            <li>YouTube Video Ads & Shopping Ads</li>
            <li>Google Remarketing & Retargeting</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className='bg-white border rounded-xl shadow-md p-6 flex flex-col justify-between h-full'>
          <h2 className='text-xl font-semibold mb-2 text-gray-800'>
            Social Media Advertising
          </h2>
          <p className='text-gray-600 mb-3'>
            Leverage the power of <strong>Facebook, Instagram, LinkedIn, and TikTok Ads</strong> to drive engagement and sales.
          </p>
          <ul className='list-disc list-inside text-gray-700 space-y-1'>
            <li>Facebook & Instagram Paid Campaigns</li>
            <li>LinkedIn B2B Lead Generation</li>
            <li>TikTok & Snapchat Ads for Viral Reach</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className='bg-white border rounded-xl shadow-md p-6 flex flex-col justify-between h-full'>
          <h2 className='text-xl font-semibold mb-2 text-gray-800'>
            Retargeting & Conversion Optimization
          </h2>
          <p className='text-gray-600 mb-3'>
            Re-engage lost visitors and turn them into paying customers with strategic <strong>retargeting campaigns</strong>.
          </p>
          <ul className='list-disc list-inside text-gray-700 space-y-1'>
            <li>Dynamic Remarketing & Abandoned Cart Recovery</li>
            <li>A/B Testing & Ad Performance Optimization</li>
            <li>Landing Page Optimization for Higher Conversions</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className='bg-white border rounded-xl shadow-md p-6 flex flex-col justify-between h-full'>
          <h2 className='text-xl font-semibold mb-2 text-gray-800'>
            Display & Programmatic Advertising
          </h2>
          <p className='text-gray-600 mb-3'>
            Maximize brand exposure and reach <strong>new audiences</strong> through AI-powered <strong>programmatic ads</strong>.
          </p>
          <ul className='list-disc list-inside text-gray-700 space-y-1'>
            <li>Banner Ads & Native Advertising</li>
            <li>Geofencing & Location-Based Targeting</li>
            <li>AI-Driven Bidding Strategies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Advertisement
