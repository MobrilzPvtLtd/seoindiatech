import React from 'react'
import Image from 'next/image'
import { Search, MessageSquare, Film, BarChart } from 'lucide-react'

const serviceItems = [
  {
    title: 'SEO-Driven Writing',
    description:
      'Get found by the people who matter most—your potential customers.',
    icon: <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: 'Persuasive Copy',
    description: "Speak directly to your audience's needs and inspire action.",
    icon: (
      <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    ),
  },
  {
    title: 'Multimedia Excellence',
    description:
      "From eye-catching visuals to engaging videos, we tailor content to your audience's preferences.",
    icon: <Film className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: 'Analytics & Optimization',
    description:
      'We measure performance and continuously refine your content for maximum impact.',
    icon: <BarChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
]

const Contentservices = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-70 dark:opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-70 dark:opacity-30"></div>
      </div>

      {/* Page Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
          <span>Content Excellence</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
          The Power of Content
          <br /> Marketing
        </h1>

        <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto mb-6"></div>

        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
          Strategic content that earns trust, captivates audiences, and fuels
          measurable growth.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-blue-700 dark:text-blue-400 font-semibold mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              Content That Converts
            </h2>
            <p className="text-justify text-gray-700 dark:text-gray-300 mb-6">
              From blogs to videos, every piece we create is backed by
              strategy—designed to position your brand as a leader and turn
              casual visitors into committed clients.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px] group">
            <Image
              src="https://www.digitalyzeit.com/wp-content/uploads/2025/01/high-angle-piece-paper-with-target-audience-scaled.jpg"
              alt="Target Audience"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-medium">
                Targeting the right audience with precision
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                67%
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                of B2B buyers rely on content to make purchasing decisions
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                6x
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                higher conversion rates for companies using content marketing
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 space-y-8 shadow-[0_8px_0px_0px_rgba(59,130,246,0.5)] dark:shadow-[0_8px_0px_0px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Our Content Services
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive solutions designed to elevate your brand's voice and
              visibility
            </p>
          </div>

          {/* Service items */}
          <div className="space-y-6">
            {serviceItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="pt-4 mt-8 border-t border-gray-100 dark:border-gray-700">
            <button className="hidden w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
              Get a Content Strategy Assessment
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content Process - Optional */}
      <div className="max-w-7xl mx-auto mt-24 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Content Creation Process
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A strategic approach that ensures your content delivers measurable
            results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              title: 'Research',
              desc: 'Audience & competitor analysis',
            },
            {
              step: '2',
              title: 'Strategy',
              desc: 'Content planning & calendar',
            },
            {
              step: '3',
              title: 'Creation',
              desc: 'Writing, design & production',
            },
            {
              step: '4',
              title: 'Optimization',
              desc: 'Analytics & performance',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contentservices
