import React from 'react'

const Features = () => {
  return (
    <div className='mt-20 px-4 p-7'>
      <h1 className="text-5xl font-extrabold text-center drop-shadow-md">
        <span className="text-blue-800 drop-shadow-lg">Amazing </span>
        <span className="text-red-700 italic font-semibold drop-shadow-md">Features</span>
      </h1>
      
      <p className="text-gray-700 text-center max-w-xl mx-auto p-3">
        Enjoy our efficient and amazing features, and learn more about how we technically offer for you.
      </p>
        {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
        
        {/* Card 1 */}
        <div className="border hover:border-blue-700 p-6 text-center shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <img
                src="https://www.digitalyzeit.com/wp-content/uploads/2023/05/ecommerce.png"
                alt="Followers"
                className="w-20 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-blue-800 mt-6">Ecommerce Shop</h3>
            <p className="text-gray-600 mt-2">
                Upload your products is never been easier now, and connect them to your website and social media channels.
            </p>
        </div>


        {/* Card 2 */}
        <div className="border hover:border-blue-700 p-6 text-center shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <img src="https://www.digitalyzeit.com/wp-content/uploads/2023/05/appointment.png" alt="Followers" className="w-20 mx-auto" />
          <h3 className="text-2xl font-semibold text-blue-800 mt-6">Booking System</h3>
          <p className="text-gray-600 mt-2">
            An integrated system that would allow you to start generating and organizing your guidance immediately.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border hover:border-blue-700 p-6 text-center shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <img src="https://www.digitalyzeit.com/wp-content/uploads/2023/05/browser.png" alt="Followers" className="w-20 mx-auto" />
          <h3 className="text-2xl font-semibold text-blue-800 mt-6">Website Builder</h3>
          <p className="text-gray-600 mt-2">
            Launch your website within two weeks by choosing one of our prebuilt templates that suits your business.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features
