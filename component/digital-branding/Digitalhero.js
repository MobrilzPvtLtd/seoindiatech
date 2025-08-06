import React from 'react';

const Digitalhero = () => {
  return (
    <div className="bg-white dark:bg-amber-800 border border-gray-300 rounded-2xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg max-w-7xl mx-auto my-10">

      {/* Left Content */}
      <div className="max-w-xl space-y-6 w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Your Next Level Brand Potential with Our Branding Expertise
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          In today’s digital-first world, your brand is more than just a logo or a tagline – 
          it’s your audience’s experience, perception, and emotional connection with your business online. 
          Digital branding is the strategic process of building and managing your brand’s presence across 
          various digital platforms, ensuring consistency, engagement, and long-term brand loyalty.<br />
          At <b>SEO Tech India</b>, we don’t just create brands – we build digital identities that stand out, captivate, and convert.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
          Get started now
        </button>
      </div>

      {/* Right Image – hidden on small screens */}
      <div className="hidden md:flex w-full md:w-1/2 mt-10 md:mt-0 justify-center">
        <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-500 hover:scale-105 h-full">
          <img
            src="https://www.digitalyzeit.com/wp-content/uploads/2025/02/Digital-Branding-1020x1536.webp"
            alt="Digital Branding"
            className="object-cover w-full h-full max-h-[600px] rounded-xl"
          />
        </div>
      </div>

    </div>
  );
};

export default Digitalhero;
