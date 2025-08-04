import React from 'react';
import { Image, Users, BarChart2, Youtube } from 'lucide-react';

const Socialmediastrategies = () => {
  return (
    <>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl md:text-3xl font-bold leading-snug text-gray-700">
          Strengthen Your Brand’s Presence And Engage Effectively With Your <br className="hidden md:block" />
          Audience Through Our Sophisticated <span className="text-blue-700">Social Media Strategies.</span>
        </h1>
        <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
          Digitalyzeit offers expertly crafted campaigns designed to captivate and connect,
          ensuring your message resonates across platforms and drives meaningful engagement.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="border rounded-xl p-6 text-left shadow-md hover:shadow-lg transition duration-300 ease-in-out bg-white">
            <Image className="w-10 h-10 text-blue-500 mb-4" />
            <h2 className="text-lg font-semibold mb-2 text-black">Content Creation</h2>
            <p className="text-gray-600 text-sm">
              We believe that content is at the heart of every successful social media campaign.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-6 text-left shadow-md hover:shadow-lg transition duration-300 ease-in-out bg-white">
            <Users className="w-10 h-10 text-green-500 mb-4" />
            <h2 className="text-lg font-semibold mb-2 text-black">Engagement Strategies</h2>
            <p className="text-gray-600 text-sm">
              Engagement is the heartbeat of social media. With Outgrid, you can easily engage the users.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-6 text-left shadow-md hover:shadow-lg transition duration-300 ease-in-out bg-white">
            <BarChart2 className="w-10 h-10 text-purple-500 mb-4" />
            <h2 className="text-lg font-semibold mb-2 text-black">Data-Driven Campaigns</h2>
            <p className="text-gray-600 text-sm">
              Our data-driven approach ensures that every campaign we launch is backed by insights.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border rounded-xl p-6 text-left shadow-md hover:shadow-lg transition duration-300 ease-in-out bg-white">
            <Youtube className="w-10 h-10 text-red-500 mb-4" />
            <h2 className="text-lg font-semibold mb-2 text-black">Influencer Collaborations</h2>
            <p className="text-gray-600 text-sm">
              In the era of influencer marketing, we understand the power of partnerships.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socialmediastrategies;
