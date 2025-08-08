import { ChevronRight, ArrowRight, BarChart2 } from "lucide-react";
import React from "react";
import Image from "next/image";

const CRMHeroBanner = () => (
  <section className="bg-white dark:bg-gray-900 pt-4 pb-8">
  <section className="max-w-7xl mx-auto px-4 md:px-6 py-2  md:py-12">
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
      {/* Background Image with Next.js Image for better performance */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/images/Crmbanner.jpg" // Replace with your image path
          alt="CRM Management Dashboard"
          fill
          sizes="(max-width: 768px) 100vw, 1280px"
          priority
          className="object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        
        {/* Gradient overlay for more depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
          <BarChart2 className="w-4 h-4" />
          <span>CRM Solutions</span>
        </div>
        
        <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center max-w-4xl leading-tight drop-shadow-md">
          Command Your Business: <span className="text-blue-300">Navigating CRM</span> and Tools for Optimal Management
        </h2>
        
        <p className="text-gray-200 text-center mt-4 max-w-2xl text-lg">
          Streamline your operations and boost productivity with our powerful CRM solutions designed for modern businesses.
        </p>
        
        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-900 hover:bg-blue-50 transition-all font-semibold text-base shadow-lg hover:shadow-xl">
            Read More
            <ChevronRight className="ml-1 w-5 h-5" />
          </button>
          
          <button className="hidden flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700 text-white transition-all font-semibold text-base border border-blue-500/50 shadow-lg hover:shadow-xl">
            Explore CRM Tools
            <ArrowRight className="ml-1 w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-6 left-6 w-24 h-24 border-l-2 border-b-2 border-white/20 rounded-bl-3xl"></div>
      <div className="absolute top-6 right-6 w-24 h-24 border-r-2 border-t-2 border-white/20 rounded-tr-3xl"></div>
    </div>
    
    {/* Featured stats - Optional */}
    <div className="flex justify-center mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
        {[
          { number: "1000+", label: "Active Users" },
          { number: "99.9%", label: "Uptime" },
          { number: "30%", label: "Revenue Increase" },
          { number: "24/7", label: "Customer Support" }
        ].map((stat, index) => (
          <div key={index} className="px-3">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  </section>
);

export default CRMHeroBanner;