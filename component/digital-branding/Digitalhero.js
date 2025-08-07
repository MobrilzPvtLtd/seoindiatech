import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

const Digitalhero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 px-6 py-12">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-lg max-w-7xl mx-auto overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60 dark:opacity-40"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-60 dark:opacity-40"></div>
        
        {/* Left Content */}
        <div className="max-w-xl space-y-6 w-full md:w-1/2 z-10">
          <div className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            <span>Digital Identity Solutions</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Your Next Level Brand Potential with Our Branding Expertise
          </h1>
          
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            In today's digital-first world, your brand is more than just a logo or a tagline – 
            it's your audience's experience, perception, and emotional connection with your business online. 
            Digital branding is the strategic process of building and managing your brand's presence across 
            various digital platforms, ensuring consistency, engagement, and long-term brand loyalty.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            At <b className="text-blue-700 dark:text-blue-400">Digitalyzeit</b>, we don't just create brands – we build digital identities that stand out, captivate, and convert.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <button className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center group shadow-md">
              Get started now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold border border-gray-200 dark:border-gray-600 transition duration-300">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-102 relative h-[400px] sm:h-[500px] w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-60 z-10 rounded-xl"></div>
            <Image
              src="https://www.digitalyzeit.com/wp-content/uploads/2025/02/Digital-Branding-1020x1536.webp"
              alt="Digital Branding"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Optional: Feature highlights */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { title: 'Brand Strategy', desc: 'Comprehensive digital brand positioning' },
          { title: 'Visual Identity', desc: 'Compelling logos, colors, and design systems' },
          { title: 'Consistent Experience', desc: 'Unified brand presence across all channels' }
        ].map((item, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
              <span className="text-blue-700 dark:text-blue-400 font-bold">{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Digitalhero;