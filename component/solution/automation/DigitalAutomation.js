import React from 'react';

const DigitalAutomation = () => {
  return (
    <div className="bg-gray-100 py-10">
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Digital Automation</h1>
      <h2 className="text-2xl font-semibold text-gray-600 text-center mb-8">How Does It Work?</h2>
      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
           Identify the task that you want to automate.
        </p>
        <p className="text-gray-700 text-lg">
           Determine the best way to automate the task. This may involve using software, hardware, or a combination of both.
        </p>
        <p className="text-gray-700 text-lg">
          Develop a plan for implementing the automation. This should include a timeline, budget, and resources.
        </p>
        <p className="text-gray-700 text-lg">
          Test the automation to make sure that it is working properly.
        </p>
        <p className="text-gray-700 text-lg">
           Implement the automation and monitor its performance.
        </p>
      </div>
    </div>
    </div>
  );
};

export default DigitalAutomation;