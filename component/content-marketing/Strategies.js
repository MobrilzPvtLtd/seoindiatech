import React from 'react';

const Strategies = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        {/* Left Card */}
        <div className="bg-white rounded-2xl shadow-[0_8px_0px_0px_rgba(0,0,0,0.3)] border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://www.digitalyzeit.com/wp-content/uploads/2025/01/strategic-story-telling-scaled.webp"
            alt="Storytelling"
            className="rounded-xl mb-6 w-full object-cover"
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Strategic Storytelling
          </h2>
          <p className="text-gray-700 mb-6 text-base sm:text-lg">
            Your brand has a story, and we’re here to help you tell it in a way that resonates.
            Whether it’s through blogs, social media, or email campaigns, we make sure your
            message is heard loud and clear.
          </p>
          <div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Why It Works:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
              <li>Builds emotional connections with your audience.</li>
              <li>Differentiates you from competitors.</li>
              <li>Leaves a lasting impression.</li>
            </ul>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-2xl shadow-[0_8px_0px_0px_rgba(0,0,0,0.3)] border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Lead Generation Magic
          </h2>
          <p className="text-gray-700 mb-6 text-base sm:text-lg">
            Content without leads is just words. Our lead generation strategies are seamlessly
            integrated into your content, turning visitors into subscribers, and subscribers into customers.
          </p>
          <div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Our Process:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
              <li>
                <strong>Landing Pages That Convert:</strong> High-converting pages paired with compelling content.
              </li>
              <li>
                <strong>Lead Magnets:</strong> Free resources like eBooks, guides, or exclusive videos designed to grab attention and gather leads.
              </li>
              <li>
                <strong>Targeted Campaigns:</strong> Precision-targeted content distribution to attract the right audience.
              </li>
            </ul>
          </div>
          <img
            src="https://www.digitalyzeit.com/wp-content/uploads/2025/01/group-young-businessman-businesswoman-brainstorming-ideas-working-together-1024x576.webp"
            alt="Lead Generation"
            className="rounded-xl mt-6 w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Strategies;
        