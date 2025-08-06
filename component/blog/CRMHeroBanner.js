import { ChevronRight } from "lucide-react";
import React from "react";

const CRMHeroBanner = () => (
  <section className=" max-w-7xl mx-auto px-3 py-6">
    <div className="relative w-full flex items-center justify-center py-6 ">
      {/* Background Image */}
      <img
        src="/images/Crmbanner.jpg" // Replace with your image path
        alt="Command Your Business: Navigating CRM and Tools for Optimal Management"
        className="w-full h-98 object-cover rounded-md"
        style={{ filter: "brightness(0.4)" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-white font-bold text-2xl md:text-3xl text-center px-4">
          Command Your Business: Navigating CRM and Tools for Optimal Management
        </h2>
        <button className="mt-10 flex items-center px-6 py-2 rounded bg-white bg-opacity-80 hover:bg-blue-600 hover:text-white transition-all font-semibold text-blue-900 text-lg shadow">
          Read More
          <ChevronRight className="ml-2 w-5  " />
        </button>
      </div>
    </div>
  </section>
);

export default CRMHeroBanner;