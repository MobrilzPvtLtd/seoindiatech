import React from 'react';
import { ArrowRight, Star, CheckCircle, Zap, TrendingUp } from 'lucide-react';

const Success = () => {
  const benefits = [
    { icon: <CheckCircle className="w-4 h-4" />, text: "Expert Strategy" },
    { icon: <Zap className="w-4 h-4" />, text: "Fast Results" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "Growth Focused" }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-1/4 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 left-1/4 w-80 h-80 bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 hidden md:block pointer-events-none">
        <Star className="w-10 h-10 text-blue-200 dark:text-blue-900 opacity-50" />
      </div>
      <div className="absolute bottom-20 right-20 hidden md:block pointer-events-none">
        <Star className="w-8 h-8 text-blue-200 dark:text-blue-900 opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-gray-400 to-blue-600 dark:from-gray-700 dark:to-gray-900 rounded-3xl px-6 py-16 md:px-16 lg:px-24 text-center shadow-xl overflow-hidden relative">
          {/* Inner decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <span>Your Success Journey</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Begin Your Digital Branding Success Story with <br className="hidden md:block" />
              <span className="text-white underline decoration-blue-300 dark:decoration-blue-400 decoration-4 underline-offset-4">SEO India Tech</span> Today!
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-8 mb-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full"
                >
                  <div className="text-blue-200 dark:text-blue-300">
                    {benefit.icon}
                  </div>
                  <span className="font-medium text-sm">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-blue-50 mt-6 text-base md:text-lg max-w-3xl mx-auto">
              At <span className="text-white font-semibold">SEO India Tech</span>,
              we're dedicated to helping you achieve your digital branding goals.
              Whether you aim to boost brand awareness, drive engagement, or
              increase conversions, our team of experts guides you every step of the
              way.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="hidden bg-white hover:bg-blue-50 text-blue-700 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center group">
                Get started now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="hidden bg-transparent border border-white/50 hover:border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold transition-all duration-300">
                Schedule a consultation
              </button>
            </div>
            
            {/* Social proof */}
            <div className="hidden mt-12 text-white/70">
              <p className="text-sm mb-3">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-8">
                {['Microsoft', 'Adobe', 'Shopify', 'Slack', 'Spotify'].map((brand, index) => (
                  <span key={index} className="text-white/90 font-medium">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Success stats - Optional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
          {[
            { value: "95%", label: "Customer Satisfaction" },
            { value: "2500+", label: "Projects Completed" },
            { value: "87%", label: "Conversion Rate Increase" },
            { value: "350+", label: "5-Star Reviews" }
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-5 text-center border border-gray-200 dark:border-gray-700 shadow-md">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Success;