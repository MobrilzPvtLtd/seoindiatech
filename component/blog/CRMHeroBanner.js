import React from "react";

const CRMHeroBanner = () => (
  <div className="relative w-full flex items-center justify-center py-6 px-20">
    {/* Background Image */}
    <img
      src="/images/Crmbanner.jpg" // Replace with your image path
      alt="Command Your Business: Navigating CRM and Tools for Optimal Management"
      className="w-full h-98 md:h-108 object-cover rounded-md"
      style={{ filter: "brightness(0.4)" }}
    />
    {/* Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h2 className="text-white font-bold text-2xl md:text-3xl text-center px-4">
        Command Your Business: Navigating CRM and Tools for Optimal Management
      </h2>
      <button className="mt-4 flex items-center px-6 py-2 rounded bg-white bg-opacity-80 hover:bg-blue-600 hover:text-white transition-all font-semibold text-blue-900 text-lg shadow">
        Read More
        <svg
          className="ml-2 w-5 h-5 text-blue-600 group-hover:text-white transition-colors"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M12.293 5.293a1 1 0 011.414 1.414L10.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4z" />
        </svg>
      </button>
    </div>
  </div>
);

export default CRMHeroBanner;