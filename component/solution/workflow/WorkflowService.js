import React from 'react';

const WorkFlowService = () => {
  return (
    <div className=' bg-gray-100 py-8'>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
       Workflow 
      </h1>
      <h2 className="text-2xl font-semibold text-gray-600 text-center mb-8">
        How Does It Work?
      </h2>
      <div className="space-y-6">
        <Section
          title="Define "
          text=" the sequence of steps in the process. This includes determining the tasks, their order, which users/roles perform them, etc."
        />
        <Section
          title="Coordinate "
          text="the progression of the workflow from one task to the next as each step is completed. This ensures the right tasks are performed in the right sequence by the right people."
        />
        <Section
          title="Provide "
          text="visibility into the status of each workflow instance. This allows managers and users to track the progress and ensure workflows are completed on time."
        />
        <Section
          title="Optimize"
          text="and improve the workflow over time. By analyzing metrics around cycle times, bottlenecks, and throughput, workflows can be streamlined for greater efficiency."
        />
       
      </div>
    </div>
    </div>
  );
};

const Section = ({ title, text }) => (
  <div>
    <h3 className="font-semibold text-blue-600 text-lg mb-1">{title}<span className="text-gray-700 text-base text-justify">{text}</span></h3>  
   
  </div>
);

export default WorkFlowService;