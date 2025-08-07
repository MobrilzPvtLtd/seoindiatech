import React from 'react'

const Branding = () => {
  return (
    <div className="bg-white p-24">
      <div className="flex justify-center px-4">
        <h1 className="text-5xl font-bold leading-tight max-w-6xl text-center text-black">
          Begin Your Digital Branding Success Story with{' '}
          <span className="text-blue-700 font-bold">SEO India Tech</span> Today!
        </h1>
      </div>
      <div className="flex justify-center px-4 pt-9">
        <p className="text-black text-lg mb-6 max-w-6xl text-center">
          At <span className="font-bold text-blue-700">SEO India Tech</span>,
          we’re dedicated to helping you achieve your digital branding goals.
          Whether you aim to boost brand awareness, drive engagement, or
          increase conversions, our team of experts guides you every step of the
          way.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-indigo-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 shadow-md border border-blue-700/20 dark:border-blue-500/30">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Branding
