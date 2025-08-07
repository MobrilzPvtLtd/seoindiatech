import React from 'react';

const MarketResearchService = () => {
  return (
    <div className='bg-gray-100 py-10'>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
        Market Research 
      </h1>
      <h2 className="text-2xl font-semibold text-gray-600 text-center mb-8">
        How Does It Work?
      </h2>
      <div className="space-y-6">
        <Section
          title="Understanding CRM – The Backbone of Customer-Centricity"
          text="Identify market opportunities and potential customers."
        />
        <Section
          title="The Art of Task and Project Management"
          text="Understand customer needs and preferences."
        />
       
        <Section
          title="Customization for Your Unique Needs"
          text="Evaluate the competition and market trends."
        />
        <Section
          title="Data Security and Compliance"
          text="Test new products or services."
        />
      </div>
    </div>
    </div>
  );
};

const Section = ({ title, text }) => (
  <div>
    <h3 className="font-semibold text-blue-600 text-lg mb-1">{title}  <span className="text-gray-700 text-base text-justify">{text}</span></h3>
   
  </div>
);

export default MarketResearchService;