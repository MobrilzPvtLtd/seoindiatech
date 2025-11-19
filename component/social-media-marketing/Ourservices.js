import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

const servicesData = [
  {
    title: 'Social Media Strategy Development',
    content:
      'A strong strategy lays the foundation for successful marketing. Our social media marketing services begin with analyzing your brand goals, audience preferences, competitor activity, and existing social performance. Based on this research, we create a clear, actionable plan that aligns with your business objectives.',
  },
  {
    title: 'Content Creation & Management',
    content:
      'Content shapes the way your audience perceives your brand. Our experts craft engaging posts,images, videos, reels, stories, banners, and creative messages tailored for each platform. With high-quality content, our social media marketing services ensure your brand gets noticed and remembered.',
  },
  {
    title: 'Paid Social Media Advertising',
    content:
      'Paid advertising helps you reach a larger and highly targeted audience. As part of our social media marketing services, we design effective ad campaigns, optimize audience segments, and track every detail to ensure maximum return on investment. Whether you want brand awareness or conversions, our ads deliver measurable results.',
  },
  {
    title: 'Community Engagement',
    content:
      'Growing your online community is essential for long-term success. Our social media marketing services include continuous monitoring, responding to comments, handling messages, solving customer queries, and initiating meaningful interactions that build trust and loyalty.',
  },
  {
    title: 'Social Media Analytics & Reporting',
    content:
      'Data analysis is crucial for refining strategies. As a committed social media marketing services company, we track performance metrics such as reach, impressions, engagement, conversions, and audience growth. This helps us adjust the campaigns for better outcomes.',
  },
  {
    title: 'Profile Optimization',
    content:
      'Your social profiles represent your brand. As part of our social media marketing services India, we optimize your bios, visuals, cover images, highlights, and overall branding to ensure a professional and consistent appearance across all platforms.',
  },
]

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-white dark:bg-gray-900 pt-4 pb-8">
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
           What Our <span className='text-blue-700'>Social Media Marketing </span> Services Include
            
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
            By analyzing how value is delivered at each stage of the customer
            journey, we can develop and implement a tailored response strategy.
          </p>

          {/* Accordion Items */}
          <div className="space-y-4">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-l-4 border-blue-600 dark:border-blue-500'
                    : ''
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-gray-900 dark:text-white focus:outline-none"
                >
                  <span>{item.title}</span>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  )}
                </button>

                {/* Slide Toggle Content */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-40 py-2 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="overflow-hidden rounded-2xl shadow-lg border-1 border-blue-500 dark:border-gray-600">
            <Image
              src="/images/services/reporti.png"
              alt="Analytics Visual"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Optional decorative element */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-2xl"></div>
        </div>
      </section>
    </section>
  )
}

export default OurServices
