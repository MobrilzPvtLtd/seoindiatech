import React from 'react';
import Image from 'next/image';

const Seohero = () => {
  return (
    <div className="bg-white p-6 md:p-12 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      <div className="max-w-7xl w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-snug md:leading-tight max-w-2xl mx-auto md:mx-0">
          Boost Visibility, Drive Traffic, and Dominate Search Rankings
        </h1>
        <p className="text-gray-700 mt-6 max-w-xl mx-auto md:mx-0 px-2 md:px-0">
          In today’s digital-first world, a strong online presence isn’t
          optional—it’s essential. Search Engine Optimization (SEO) is the
          backbone of digital success, ensuring that your business ranks higher
          on search engines, attracts quality traffic, and turns visitors into
          loyal customers. At{' '}
          <span className="text-blue-700 font-semibold">SEO India Tech,</span>{' '}
          we don’t just optimize websites—we craft strategic SEO solutions that
          deliver measurable results.
        </p>
        <button className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 shadow-md border border-blue-700/20 dark:border-blue-500/30">
          Get started now
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="https://www.digitalyzeit.com/wp-content/uploads/2025/02/search-engine-optimization-1024x1024.webp"
          alt="Manage Account"
          width={500}
          height={500}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl rounded-3xl border border-gray-200 object-contain"
        />
      </div>
    </div>
  );
};

export default Seohero;
