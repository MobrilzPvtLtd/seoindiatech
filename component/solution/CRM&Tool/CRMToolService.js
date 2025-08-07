import React from 'react';

const CRMToolService = () => {
  return (
    <div className='bg-gray-100 py-8'> 
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
        CRM & Management Tools
      </h1>
      <h2 className="text-2xl font-semibold text-gray-600 text-center mb-8">
        How Does It Work?
      </h2>
      <div className="space-y-6">
        <Section
          title="Understanding CRM – The Backbone of Customer-Centricity"
          text="Discover how our CRM system centralizes customer data, streamlines communication, and builds lasting relationships with key features like contact management, sales automation, and customer analytics. The next as each step is completed. This ensures the right tasks are performed in the right sequence by the right people."
        />
        <Section
          title="The Art of Task and Project Management"
          text="Efficient project and task management are vital for organizational success. Discover how our management tools facilitate seamless collaboration, task delegation, and project tracking. From simple to-do lists to complex project timelines, our tools ensure that your team stays organized and focused on delivering results."
        />
        <Section
          title="Integration for Seamless Workflows"
          text="One of the strengths of our CRM and management tools lies in their ability to integrate seamlessly with other business applications. Explore how our solutions connect with email, calendar, and third-party apps, creating a unified ecosystem. This integration not only saves time but also reduces the risk of errors and ensures a smooth flow of information across your organization."
        />
        <Section
          title="Customization for Your Unique Needs"
          text="Every business is unique, and so are its needs. Our CRM and management tools are highly customizable, allowing you to adapt them to your specific requirements. From custom fields in CRM to personalized project workflows, our tools empower you to mold the system to fit your business like a glove."
        />
        <Section
          title="Data Security and Compliance"
          text="In an era of increasing cyber threats and data breaches, ensuring the security of your business information is paramount. Learn about the robust security measures embedded in our CRM and management tools. We take data privacy seriously and comply with industry regulations to provide you with peace of mind."
        />
      </div>
    </div>
    </div>
  );
};

const Section = ({ title, text }) => (
  <div>
    <h3 className="font-semibold text-blue-600 text-lg mb-1">{title} <span className="text-gray-700 text-base text-justify">{text}</span></h3>
    
  </div>
);

export default CRMToolService;