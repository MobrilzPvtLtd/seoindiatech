import Image from 'next/image';
import React from 'react';
import { LineChart, Users, BarChart2, ArrowRight } from 'lucide-react';

const Matters = () => {
  const seoStats = [
    {
      icon: <LineChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      highlight: "93%",
      text: "of online experiences begin with a search engine— if you're not ranking, you're invisible."
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      highlight: "53%",
      text: "of all website traffic comes from organic search, making it the most powerful digital marketing channel."
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      highlight: "14.6%",
      text: "conversion rate for SEO leads, compared to just 1.7% from outbound strategies."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 px-6 md:px-10 lg:px-20 py-16 md:py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-50/70 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-10 lg:gap-16 relative z-10">
        {/* Content Section */}
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <span>Business Growth</span>
          </div>

          <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Why SEO Matters for Your Business
          </h2>

          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mb-8"></div>

          {/* SEO Stats with improved styling */}
          <div className="space-y-6 mb-8">
            {seoStats.map((stat, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg mt-1">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200">
                    <span className="font-bold text-blue-700 dark:text-blue-400 text-xl mr-1">{stat.highlight}</span>
                    {stat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center group">
            Get Free Quote Now
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-5/12 lg:w-2/5">
          <div className="bg-white dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-md relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full"></div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                At{' '}
                <span className="font-semibold text-blue-700 dark:text-blue-400">Digitalyzeit,</span>{' '}
                we blend creativity with analytics to build SEO strategies that go
                beyond rankings. Our comprehensive, tailored approach ensures
                long-term success in an ever-changing digital landscape.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://www.digitalyzeit.com/wp-content/uploads/2025/02/SEO-meeting-1024x1024.webp"
                alt="SEO Strategy Meeting"
                width={900}
                height={600}
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Image caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">Our SEO experts analyzing search performance data</p>
              </div>
            </div>

            {/* Client results - optional */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Average Client Results</span>
                <div className="text-blue-700 dark:text-blue-400 font-bold">+78% Organic Traffic</div>
              </div>
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Timeframe</span>
                <div className="text-blue-700 dark:text-blue-400 font-bold">First 6 Months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matters;