import React from 'react';

const Form = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-100 py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl p-6 sm:p-10 border shadow-2xl">

        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between border border-gray-700 rounded-2xl p-6 sm:p-8 bg-white">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
              Industries We Elevate with <br className="hidden sm:block" /> <span className="text-blue-700">UI/UX Excellence</span>
            </h2>
            <p className="text-gray-600 mb-4 text-center md:text-left">
              From startups to enterprises, we create transformative experiences across diverse industries:
            </p>
            <ul className="text-gray-800 space-y-3 list-disc list-inside text-sm sm:text-base">
              <li><strong>E-Commerce</strong> – High-converting shopping experiences that maximize revenue.</li>
              <li><strong>SaaS & Tech</strong> – Streamlined, intuitive interfaces for seamless adoption.</li>
              <li><strong>Healthcare</strong> – User-friendly patient portals and medical software.</li>
              <li><strong>Fintech & Banking</strong> – Secure, frictionless, and accessible digital solutions.</li>
              <li><strong>Education</strong> – Engaging platforms that enhance knowledge retention.</li>
            </ul>
          </div>

          {/* Centered image */}
          <div className="mt-8 flex justify-center">
            <img
              src="https://www.digitalyzeit.com/wp-content/uploads/2025/02/UI-design-1024x1024.webp"
              alt="UI/UX"
              className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover shadow-md"
            />
          </div>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <form className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-5 border border-gray-700 flex flex-col justify-between shadow-inner">

          <div className="space-y-5">
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                className="w-full p-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">Company Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button at the bottom */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Form;
