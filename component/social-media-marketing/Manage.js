import React from 'react'

const Manage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-900">
        Manage Social Media<br />
        In <span className="text-blue-700">One Place</span>
      </h1>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Card 1 */}
        <div className="w-full md:w-1/3 max-w-sm">
          <img 
            src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Place-Image-2.webp" 
            alt="Research" 
            className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-blue-700 mt-4 text-xl font-semibold">Research</h2>
          <p className="text-gray-700">Our robust research process lays the foundation for success.</p>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 max-w-sm">
          <img 
            src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Place-Image-1.webp" 
            alt="Planning" 
            className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-blue-700 mt-4 text-xl font-semibold">Planning</h2>
          <p className="text-gray-700">Planning expertise is where ideas transform into powerful strategies.</p>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 max-w-sm">
          <img 
            src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Place-Image-3.webp" 
            alt="Posting" 
            className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-blue-700 mt-4 text-xl font-semibold">Posting</h2>
          <p className="text-gray-700">Our posting strategy merges creativity and precision.</p>
        </div>
      </div>
    </div>
  )
}

export default Manage
