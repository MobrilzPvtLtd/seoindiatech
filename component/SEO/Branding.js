import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Branding = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-50/70 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-20 left-20 hidden md:block pointer-events-none">
        <Star className="w-10 h-10 text-blue-200 dark:text-blue-800 opacity-50" />
      </div>
      <div className="absolute bottom-20 right-20 hidden md:block pointer-events-none">
        <Star className="w-8 h-8 text-blue-200 dark:text-blue-800 opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl p-8 md:p-16">
          {/* Header badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              <span>Get Started Today</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="flex justify-center px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl text-center text-gray-900 dark:text-white">
              Begin Your Digital Branding Success Story with{' '}
              <span className="text-blue-700 dark:text-blue-400 font-bold">Digitalyzeit</span> Today!
            </h2>
          </div>

          {/* Decorative line */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          </div>

          {/* Description */}
          <div className="flex justify-center px-4 pt-8">
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6 max-w-4xl text-center">
              At <span className="font-bold text-blue-700 dark:text-blue-400">Digitalyzeit</span>,
              we're dedicated to helping you achieve your digital branding goals.
              Whether you aim to boost brand awareness, drive engagement, or
              increase conversions, our team of experts guides you every step of the
              way.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8 mb-12">
            {[
              { title: "Strategic Branding", desc: "Build a lasting impression" },
              { title: "Audience Engagement", desc: "Connect with your customers" },
              { title: "Measurable Results", desc: "Track and optimize performance" }
            ].map((feature, index) => (
              <div key={index} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base font-medium transition flex items-center justify-center group shadow-lg">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="bg-transparent text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-6 py-3 rounded-full text-base font-medium transition">
              Schedule a Consultation
            </button>
          </div>


        </div>


      </div>
    </section>
  );
};

export default Branding;