import React from 'react';
import { ArrowRight, Zap, LayoutGrid, LineChart, Globe, Speaker, BarChart3 } from 'lucide-react';

const Solutionswho = () => {
  const solutions = [
    {
      title: 'Workflow',
      desc: 'We help you build your workflow for your business, and what methods and strategies to expand',
      tag: true,
      icon: <LayoutGrid className="w-6 h-6" />
    },
    {
      title: 'Automation',
      desc: 'Automate your work by using the best technology and the right one for your business',
      tag: true,
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Market Research',
      desc: 'By understanding how the market works and needs, creating profile personas, and market approach.',
      tag: false,
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: 'Website Creation',
      desc: 'Creating the best UI and enhancing websites layout, and understanding more about the User Experience (UX)',
      tag: false,
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Promotion and Advertising',
      desc: 'Marketing for your products, product line, brand, or company by attracting the right audience with the right approach.',
      tag: false,
      icon: <Speaker className="w-6 h-6" />
    },
    {
      title: 'CRM & Management tools',
      desc: 'We use the best tools in the market to help you achieve and organize your business',
      tag: false,
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-50 dark:bg-red-900/10 rounded-full blur-3xl opacity-70 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Solutions For Your Business
          </span>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-blue-700 dark:text-blue-400">Use Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 dark:from-red-500 dark:to-red-300 italic font-semibold">Solutions</span>
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            You can now choose between our <span className="font-semibold">Marketing Solutions</span> that suit your business needs, depending on your niche and market requirements.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden"
            >
              {/* Card Background with subtle gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 -z-10"></div>
              
              {/* Special offer tag */}
              {solution.tag && (
                <div className="absolute top-0 left-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-br-lg shadow-md">
                    SPECIAL OFFER
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-8 border border-gray-200 dark:border-gray-700 rounded-xl group-hover:border-blue-500 dark:group-hover:border-blue-500 transition-all duration-300 h-full flex flex-col justify-between shadow-sm group-hover:shadow-xl bg-white dark:bg-gray-800">
                <div>
                  {/* Icon */}
                  <div className="mb-5 p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg inline-block">
                    {solution.icon}
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {solution.desc}
                  </p>
                </div>
                
                {/* Button */}
                <button className="cursor-pointer mt-6 inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium group-hover:text-white dark:group-hover:text-white px-5 py-2.5 rounded-lg border border-blue-200 dark:border-blue-800 group-hover:bg-blue-600 dark:group-hover:bg-blue-700 group-hover:border-transparent transition-all duration-300">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="hidden text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform active:scale-95">
            Explore All Solutions
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutionswho;