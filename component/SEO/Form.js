import React from 'react'

const Form = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-100 py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-white rounded-3xl p-6 sm:p-10 border shadow-2xl">

        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-center rounded-2xl p-6 bg-white max-w-xl">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center md:text-left">
              Why Choose SEO India Tech for SEO?
            </h2>
        
            <ul className="text-gray-800 space-y-3 list-inside text-lg">
              <li><strong>Proven Track Record</strong> – Our results speak for themselves, with businesses experiencing exponential growth through our SEO strategies.</li>
              <li><strong>Customized Strategies</strong> – No cookie-cutter approaches. Every strategy is tailored to your industry, audience, and goals.</li>
              <li><strong>Ethical, White-Hat SEO</strong> – We follow best practices to ensure sustainable rankings without risking penalties.</li>
              <li><strong>Transparency & Reporting</strong> – We keep you informed with detailed reports, so you always know how your SEO is performing.</li>
              <li><strong>Holistic Digital Marketing Expertise</strong> – Beyond SEO, we integrate with content marketing, UI/UX, and paid strategies for maximum impact.</li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <form className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-5 border shadow-xl flex flex-col justify-between shadow-inner">

          <div className="space-y-5">
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-xl text-gray-600 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-xl text-gray-600 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-xl text-gray-600 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                className="w-full p-3 text-gray-600 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">Company Name</label>
              <input
                type="text"
                className="w-full p-3 text-gray-600 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 text-gray-600 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
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
  )
}

export default Form
