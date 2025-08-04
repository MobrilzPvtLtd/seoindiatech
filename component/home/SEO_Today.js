import React from 'react'

function SEO_Today() {
  return (
    <>
    
     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
        
        {/* The card-like container with a light blue background and rounded corners */}
        <div className="bg-blue-50 p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl max-w-5xl mx-auto">
          
          {/* Main heading with responsive font sizes and centered text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900">
            Begin Your Digital Branding Success Story with{' '}
            <span className="text-blue-600">SEO India Tech</span> Today!
          </h1>
          
          {/* Subheading/description paragraph */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto">
            At <span className="text-blue-600">SEO India Tech</span>, we're dedicated to helping you achieve your digital branding goals. Whether you aim to boost brand awareness, drive engagement, or increase conversions, our team of experts guides you every step of the way.
          </p>
          
          {/* Learn More button */}
          <div className="mt-8 flex justify-center">
            <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300">
              Learn More
            </button>
          </div>
          
        </div>
      </div>
    
    </>
  )
}

export default SEO_Today
