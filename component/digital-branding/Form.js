import React from 'react';

const Form = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-100 py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-10 border">
        {/* LEFT COLUMN */}
        <div className="w-full flex flex-col justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Take Your Brand to the Next Level
            </h2>
            <p className="text-gray-800 text-base md:text-lg">
              Your brand deserves to
              <span className="text-blue-700 font-semibold"> stand out, connect, and grow.</span>{' '}
              Whether you’re starting from scratch or need a digital makeover, Digitalyzeit has the
              expertise to make it happen.
            </p>
          </div>

          {/* Icon Cards (Updated style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl p-6 border shadow-md relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-2 rounded-bl-xl rounded-tl-xl bg-gray-800" />
              <div className="bg-black text-white rounded-full p-3 mb-4 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Schedule a Free Consultation
              </h3>
              <p className="text-gray-700 text-sm">
                to discuss your digital branding needs. Let’s craft a brand that makes a lasting
                impact!
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl p-6 border shadow-md relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-2 rounded-bl-xl rounded-tl-xl bg-gray-800" />
              <div className="bg-black text-white rounded-full p-3 mb-4 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get Started Today</h3>
              <p className="text-gray-700 text-sm">
                Contact us and transform your brand into a digital powerhouse.
              </p>
            </div>
          </div>

          <p className="text-gray-800 font-bold mt-8">
            SEO India Tech - Where Brands Become Digital <br/>Icons.
          </p>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <form className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-5 border border-gray-300 flex flex-col justify-between shadow-inner">
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

          {/* Submit Button */}
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
