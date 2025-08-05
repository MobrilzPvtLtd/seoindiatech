import React from 'react';

const Servicehero = () => {
  return (
    <div className="bg-red-400 border border-gray-300 rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg max-w-7xl mx-auto my-10">

      {/* Left Content */}
      <div className="max-w-xl space-y-6 w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Our Expert Social Media <span className="text-blue-700">Marketing</span> Services
        </h1>
        <p className="text-gray-800 text-base md:text-lg">
          With a sharp focus on analytics and an acute awareness of social trends, we expertly navigate the complexities of algorithms to ensure your brand stands out and shines in the digital landscape.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          Get started now
        </button>
      </div>

      {/* Right Images */}
      <div className="mt-8 md:mt-0 grid grid-cols-2 gap-4 w-full md:w-1/2">
        {/* Card 1 */}
            <div className="hover:scale-105 transition-transform duration-300">
            <img src="https://www.digitalyzeit.com/wp-content/uploads/2024/07/Growth-Marketing-Hero-Image-1.webp" alt="Manage Account" className="w-full h-auto object-cover rounded-xl shadow-md" />
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Unlocking-Image-2.webp" alt="Work" className="w-full h-auto object-cover" />
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Meaningful-Image-1.webp" alt="Post" className="w-full h-auto object-cover" />
            </div>
        </div>
    </div>
  );
};

export default Servicehero;
