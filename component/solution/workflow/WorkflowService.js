import React from 'react';
import { ClipboardList, ArrowRight, BarChart2, Eye, RefreshCw } from 'lucide-react';

const WorkFlowService = () => {
  const workflowSteps = [
    {
      id: 1,
      icon: <ClipboardList className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Define",
      text: "the sequence of steps in the process. This includes determining the tasks, their order, which users/roles perform them, etc.",
      detail: "We help you map out your entire workflow process with clear responsibilities and dependencies."
    },
    {
      id: 2,
      icon: <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Coordinate",
      text: "the progression of the workflow from one task to the next as each step is completed. This ensures the right tasks are performed in the right sequence by the right people.",
      detail: "Our automation tools ensure smooth handoffs between team members and departments."
    },
    {
      id: 3,
      icon: <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Provide",
      text: "visibility into the status of each workflow instance. This allows managers and users to track the progress and ensure workflows are completed on time.",
      detail: "Real-time dashboards and notifications keep everyone informed about current status and next steps."
    },
    {
      id: 4,
      icon: <RefreshCw className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Optimize",
      text: "and improve the workflow over time. By analyzing metrics around cycle times, bottlenecks, and throughput, workflows can be streamlined for greater efficiency.",
      detail: "Our analytics tools help identify bottlenecks and opportunities for continuous improvement."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-900 py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
          {/* Header with blue gradient */}
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-700 dark:to-gray-800 px-6 md:px-10 py-10 text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Workflow</h1>
            <div className="w-20 h-1 bg-white/50 mx-auto my-4 rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-medium text-center text-blue-100">How Does It Work?</h2>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-center mb-10">
              <div className="px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Our 4-Step Workflow Process
              </div>
            </div>

            <div className="space-y-10">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative"
                >
                  {/* Connecting line between steps */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800/50"></div>
                  )}

                  <div className="flex gap-6">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full border-2 border-blue-300 dark:border-blue-700">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {step.id}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-grow">
                      <div className="bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                        <h3 className="font-semibold text-blue-600 dark:text-blue-400 text-xl mb-2">
                          {step.title} <span className="text-gray-700 dark:text-gray-300 font-normal">{step.text}</span>
                        </h3>
                        <p className="mt-3 text-gray-600 dark:text-gray-400 pl-0 md:pl-6 border-l-2 border-blue-200 dark:border-blue-800/50">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="hidden mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Ready to optimize your workflow processes?
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Our team of experts is ready to help you implement efficient workflows.
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md flex items-center group whitespace-nowrap">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default WorkFlowService;