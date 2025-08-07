import Image from 'next/image'
import React from 'react'

const Matters = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center bg-white px-6 md:px-20 py-16 gap-10 md:gap-20">
      {/* Content Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-gray-800 text-3xl md:text-4xl font-bold mb-4">
          Why SEO Matters
        </h1>
        <p className="text-gray-700 mb-4">
          <b>93% of online experiences begin with a search engine— </b>if you’re
          not ranking, you’re invisible.
          <br />
          <b> Organic search drives 53% of all website traffic,</b> making it
          the most powerful digital marketing channel. <br />
          <b>SEO leads have a 14.6% conversion rate,</b> compared to just 1.7%
          from outbound strategies.
        </p>

        <button className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-indigo-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 shadow-md border border-blue-700/20 dark:border-blue-500/30 mt-8">
          Get Free Quote Now
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full  rounded-2xl hover:shadow-2xl duration-300 p-6 md:p-10 max-w-lg border border-gray-400 shadow-sm">
        <p className="text-gray-700 mb-4">
          At{' '}
          <span className="font-semibold text-blue-600">SEO India Tech,</span>{' '}
          we blend creativity with analytics to build SEO strategies that go
          beyond rankings. Our comprehensive, tailored approach ensures
          long-term success in an ever-changing digital landscape.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://www.digitalyzeit.com/wp-content/uploads/2025/02/SEO-meeting-1024x1024.webp"
            alt="Manage Account"
            width={900}
            height={600}
            className="w-sm max-w-2xl rounded-3xl border object-contain shadow-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Matters
