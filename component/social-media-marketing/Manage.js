import React from 'react';
import Image from 'next/image';

const Manage = () => {
  return (
    <section className="bg-white dark:bg-gray-900 pt-4 pb-8">
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-20 text-center">
      {/* Section Header */}
      <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-900 dark:text-white">
        Manage Social Media<br />
        In <span className="text-blue-700 dark:text-blue-500">One Place</span>
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Our comprehensive platform helps you simplify and streamline your social media workflow
      </p>

      {/* Cards - Keeping the original UI intact */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Card 1 */}
        <div className="w-full md:w-1/3 max-w-sm">
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Place-Image-2.webp" 
              alt="Research" 
              className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-blue-700 dark:text-blue-400 mt-4 text-xl font-semibold">Research</h2>
          <p className="text-gray-700 dark:text-gray-300">Our robust research process lays the foundation for success.</p>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 max-w-sm">
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Place-Image-1.webp" 
              alt="Planning" 
              className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-blue-700 dark:text-blue-400 mt-4 text-xl font-semibold">Planning</h2>
          <p className="text-gray-700 dark:text-gray-300">Planning expertise is where ideas transform into powerful strategies.</p>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 max-w-sm">
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Place-Image-3.webp" 
              alt="Posting" 
              className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-blue-700 dark:text-blue-400 mt-4 text-xl font-semibold">Posting</h2>
          <p className="text-gray-700 dark:text-gray-300">Our posting strategy merges creativity and precision.</p>
        </div>
      </div>
      
      {/* Optional CTA button */}
      <div className="mt-10 hidden">
        <button className="px-6 py-3 bg-blue-700 dark:bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors">
          Explore our platform
        </button>
      </div>
    </section>
    </section>
  );
};

export default Manage;