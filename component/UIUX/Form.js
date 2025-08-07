import React from 'react';
import Image from 'next/image';
import { Send, Check } from 'lucide-react';

const Form = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-950 py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Form header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 mb-4">
            <Check className="w-4 h-4 mr-2" /> Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Let's Build Something Amazing Together
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-2xl dark:shadow-blue-900/20">

          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 bg-white dark:bg-gray-800">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
                Industries We Elevate with <br className="hidden sm:block" /> 
                <span className="text-blue-700 dark:text-blue-400">UI/UX Excellence</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center md:text-left">
                From startups to enterprises, we create transformative experiences across diverse industries:
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'E-Commerce', desc: 'High-converting shopping experiences that maximize revenue.' },
                  { title: 'SaaS & Tech', desc: 'Streamlined, intuitive interfaces for seamless adoption.' },
                  { title: 'Healthcare', desc: 'User-friendly patient portals and medical software.' },
                  { title: 'Fintech & Banking', desc: 'Secure, frictionless, and accessible digital solutions.' },
                  { title: 'Education', desc: 'Engaging platforms that enhance knowledge retention.' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">{item.title}</span>{' '}
                      <span className="text-gray-600 dark:text-gray-300">– {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Centered image */}
            <div className="mt-8 flex justify-center">
              <div className="relative rounded-xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md h-[200px] sm:h-[250px] shadow-lg">
                <Image
                  src="https://www.digitalyzeit.com/wp-content/uploads/2025/02/UI-design-1024x1024.webp"
                  alt="UI/UX Design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <form className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 space-y-5 border border-gray-200 dark:border-gray-700 flex flex-col justify-between shadow-inner">
            <div className="space-y-5">
              <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                  Email <span className="text-red-600 dark:text-red-400">*</span>
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none dark:text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                    First Name <span className="text-red-600 dark:text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none dark:text-white"
                    placeholder="John"
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none dark:text-white"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                  Phone Number <span className="text-red-600 dark:text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none dark:text-white"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Company Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none dark:text-white"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">How can we help?</label>
                <textarea
                  rows="4"
                  className="w-full p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none resize-none dark:text-white"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox"
                  id="privacy"
                  className="mt-1.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  I agree to the <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a>
                </label>
              </div>
            </div>

            {/* Submit Button at the bottom */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg flex items-center justify-center group"
              >
                Submit Request
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
                We'll get back to you within 24-48 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;