import React from 'react';

const Solutionswho = () => {
  return (
    <div className="mt-20 px-4 p-7">
      <h1 className="text-5xl font-extrabold text-center drop-shadow-md">
        <span className="text-blue-800 drop-shadow-lg">Use Our </span>
        <span className="text-red-700 italic font-semibold drop-shadow-md">Solutions</span>
      </h1>

      <p className="text-gray-700 text-center max-w-xl mx-auto p-3">
        You can now choose between our <b>Marketing Solutions</b> that suit your business needs, depending on your niche and market needs.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
        
        {/* Card Start */}
        {[
          {
            title: 'Workflow',
            desc: 'We help you build your workflow for your business, and what methods and strategies to expand',
            tag: true
          },
          {
            title: 'Automation',
            desc: 'Automate your work by using the best technology and the right one for your business',
            tag: true
          },
          {
            title: 'Market Research',
            desc: 'By understanding how the market works and needs, creating profile personas, and market approach.',
            tag: false
          },
          {
            title: 'Website Creation',
            desc: 'Creating the best UI and enhancing websites layout, and understanding more about the User Experience (UX)',
            tag: false
          },
          {
            title: 'Promotion and Advertising',
            desc: 'Marketing for your products, product line, brand, or company by attracting the right audience with the right approach.',
            tag: false
          },
          {
            title: 'CRM & Management tools',
            desc: 'We use the best tools in the market to help you achieve and organize your business',
            tag: false
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative group border border-gray-200 rounded-lg p-6 text-center shadow hover:shadow-lg hover:border-blue-700 transition-all duration-300 h-72 flex flex-col justify-between"
          >
            {item.tag && (
              <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-sm absolute -mt-6 ml-4">
                SPECIAL OFFER
              </span>
            )}

            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mt-6">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>

            <button className="mt-6 bg-gray-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white px-6 py-2 rounded-md transition">
              Read More
            </button>
          </div>
        ))}
        {/* Card End */}
      </div>
    </div>
  );
};

export default Solutionswho;
