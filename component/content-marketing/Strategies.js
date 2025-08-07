import React from 'react';
import Image from 'next/image';
import { BookOpen, Target, Award, Lightbulb, Link, Download, Users } from 'lucide-react';

const Strategies = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>Content Strategies</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Innovative Content Approaches
          </h2>
          
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto mb-6"></div>
          
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Cutting-edge content strategies that capture attention, build relationships, and drive measurable business results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Card - Strategic Storytelling */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0_8px_0px_0px_rgba(59,130,246,0.5)] dark:shadow-[0_8px_0px_0px_rgba(59,130,246,0.3)] border border-gray-200 dark:border-gray-700 p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative rounded-xl overflow-hidden mb-6 h-64">
              <Image
                src="https://www.digitalyzeit.com/wp-content/uploads/2025/01/strategic-story-telling-scaled.webp"
                alt="Storytelling"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-700 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                Strategic Storytelling
              </h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-base sm:text-lg">
              Your brand has a story, and we're here to help you tell it in a way that resonates.
              Whether it's through blogs, social media, or email campaigns, we make sure your
              message is heard loud and clear.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Why It Works:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  "Builds emotional connections with your audience.",
                  "Differentiates you from competitors.",
                  "Leaves a lasting impression."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Case Study Link */}
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
              <a href="#" className="text-blue-600 dark:text-blue-400 font-medium flex items-center group hover:underline">
                Read storytelling case study 
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Card - Lead Generation */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0_8px_0px_0px_rgba(59,130,246,0.5)] dark:shadow-[0_8px_0px_0px_rgba(59,130,246,0.3)] border border-gray-200 dark:border-gray-700 p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                <Target className="w-5 h-5 text-blue-700 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                Lead Generation Magic
              </h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-base sm:text-lg">
              Content without leads is just words. Our lead generation strategies are seamlessly
              integrated into your content, turning visitors into subscribers, and subscribers into customers.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl mb-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Our Process:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                {[
                  {
                    title: "Landing Pages That Convert:",
                    desc: "High-converting pages paired with compelling content.",
                    icon: <Link className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  },
                  {
                    title: "Lead Magnets:",
                    desc: "Free resources like eBooks, guides, or exclusive videos designed to grab attention and gather leads.",
                    icon: <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  },
                  {
                    title: "Targeted Campaigns:",
                    desc: "Precision-targeted content distribution to attract the right audience.",
                    icon: <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1.5 bg-white dark:bg-gray-700 rounded-md shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">{item.title}</span>{' '}
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative rounded-xl overflow-hidden h-64">
              <Image
                src="https://www.digitalyzeit.com/wp-content/uploads/2025/01/group-young-businessman-businesswoman-brainstorming-ideas-working-together-1024x576.webp"
                alt="Lead Generation"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Results Stat - Optional */}
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Average client result</p>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-2xl">+137% Leads</p>
              </div>
              <a href="#" className="text-blue-600 dark:text-blue-400 font-medium flex items-center group hover:underline">
                See our approach 
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Optional: CTA Section */}
        <div className="hidden mt-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-xl p-8 text-white shadow-lg">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to transform your content strategy?</h3>
              <p className="text-blue-100">Book a free strategy session with our content experts</p>
            </div>
            <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              Schedule a consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;