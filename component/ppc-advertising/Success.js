import React from 'react'

const Success = () => {
  return (
    <div className="bg-white py-12">
      <div className="bg-lime-200 rounded-3xl px-6 py-20 md:px-24 text-center shadow-md max-w-7xl mx-auto mt-10 border border-gray-900">
        <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
          Begin Your Digital Branding Success Story with <br />
          <span className="text-blue-800">SEO India Tech</span> Today!
        </h1>

        <p className="text-gray-800 mt-6 text-base md:text-lg max-w-3xl mx-auto">
          At <span className="text-blue-800 font-semibold">SEO India Tech</span>
          , we’re dedicated to helping you achieve your digital branding goals.
          Whether you aim to boost brand awareness, drive engagement, or
          increase conversions, our team of experts guides you every step of the
          way.
        </p>

        <button className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-indigo-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 shadow-md border border-blue-700/20 dark:border-blue-500/30 mt-10">
          Get started now
        </button>
      </div>
    </div>
  )
}

export default Success
