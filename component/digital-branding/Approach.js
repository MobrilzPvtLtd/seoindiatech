import React from 'react';

const Approach = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-8 md:px-20">
      {/* Heading */}
      <h1 className="text-gray-800 text-3xl sm:text-4xl font-bold leading-tight mb-3 text-center md:text-left">
        Our Digital Branding Approach
      </h1>
      <p className="text-gray-700 text-base sm:text-lg mb-12 text-center md:text-left">
        At <span className="text-blue-700 font-bold">SEO India Tech,</span> we craft digital brands that leave a lasting impact.
        Our approach is data-driven, creative, and tailored to your business goals.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* LEFT COLUMN */}
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-5 sm:p-6 space-y-8">
          {/* Brand Identity */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              Brand Identity Development
            </h2>
            <p className="text-gray-600 text-sm mb-2">
              We create a powerful, cohesive brand identity that resonates with your target audience. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm">
              <li><strong>Logo & Visual Elements</strong> – Unique, professional logo and visual assets.</li>
              <li><strong>Color Palette & Typography</strong> – Reflects your brand’s personality.</li>
              <li><strong>Brand Voice & Messaging</strong> – A tone that connects to your audience.</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              Social Media Branding
            </h2>
            <p className="text-gray-600 text-sm mb-2">
              We align your social presence with your brand identity across all platforms.
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm">
              <li>Social profile optimization</li>
              <li>Content strategy & management</li>
              <li>Influencer/community engagement</li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-5 sm:p-6 space-y-8">
          {/* Website & UX/UI */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              Website & UX/UI Design
            </h2>
            <p className="text-gray-600 text-sm">
              We design user-friendly, SEO-optimized websites with a great user experience.
            </p>
          </div>

          {/* Content & Storytelling */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              Content & Storytelling
            </h2>
            <p className="text-gray-600 text-sm mb-2">
              We craft engaging content that builds emotional connections:
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm">
              <li>SEO-driven blogs</li>
              <li>Compelling website copy</li>
              <li>Video & multimedia storytelling</li>
            </ul>
          </div>

          {/* Advertising */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              Digital Advertising & Visibility
            </h2>
            <p className="text-gray-600 text-sm mb-2">
              We increase your brand’s reach using:
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm">
              <li>Search Engine Optimization (SEO)</li>
              <li>Pay-Per-Click (PPC) campaigns</li>
              <li>Retargeting ads</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
    