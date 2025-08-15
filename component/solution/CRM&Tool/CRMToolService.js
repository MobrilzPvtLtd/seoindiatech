import React from 'react';
import { Users, CheckSquare, Link, Settings, Shield } from 'lucide-react';

const CRMToolService = () => {
  const crmSections = [
    {
      id: 1,
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "CRM in Action – Streamlining Success Through Customer Focus",
      text: "Our CRM system centralizes customer data, streamlines communication, and fosters lasting relationships through powerful features like contact management, sales automation, and in-depth customer analytics.",
      detail: "With our CRM platform, every customer interaction becomes an opportunity—delivering personalized experiences that boost loyalty and accelerate revenue growth."
    },
    {
      id: 2,
      icon: <CheckSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Mastering the Art of Task and Project Management",
      text: "Effective project and task management is key to organizational success. Our tools streamline collaboration, task delegation, and project tracking. From simple to-do lists to complex timelines, they help your team stay organized, focused, and consistently deliver results.",
      detail: "Customizable workflows, Gantt charts, and real-time progress tracking enable teams to collaborate seamlessly, no matter where they are."
    },
    {
      id: 3,
      icon: <Link className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Connected Systems for Effortless Workflows",
      text: "A key strength of our CRM and management tools is their seamless integration with other business applications. By connecting email, calendars, and third-party apps, we create a unified ecosystem that saves time, minimizes errors, and ensures smooth information flow across your organization.",
      detail: "With our API-first approach, you can effortlessly connect to over 200 popular business tools and platforms, ensuring smooth integration and workflow continuity."
    },
    {
      id: 4,
      icon: <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Tailored Solutions for Your Business",
      text: "Every business is unique, and so are its requirements. Our CRM and management tools are fully customizable, letting you tailor everything from CRM fields to project workflows. This flexibility empowers your team to shape the system perfectly around your business processes.",
      detail: "No-code tools allow quick, independent updates by your staff, minimizing both time and cost overheads."
    },
    {
      id: 5,
      icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Secure and Compliant Solutions",
      text: "In today’s world of rising cyber threats, protecting your business data is critical. Our CRM and management tools incorporate robust security measures, adhere to industry regulations, and prioritize data privacy, giving you complete peace of mind.",
      detail: "Our platform complies with GDPR, CCPA, and industry-specific standards, supported by regular security audits and continuous updates."
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
          {/* Header with blue gradient */}
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-700 dark:to-gray-800  px-6 md:px-10 py-10 text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center">CRM & Management Tools</h1>
            <div className="w-20 h-1 bg-white/50 mx-auto my-4 rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-medium text-center text-blue-100">How Does It Work?</h2>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-center mb-10">
              <div className="px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Complete Business Solution
              </div>
            </div>

            <div className="space-y-10">
              {crmSections.map((section) => (
                <div key={section.id} className="flex flex-col sm:flex-row gap-6 group">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-800 shadow-sm group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60 transition-colors duration-300">
                      {section.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                      <h3 className="font-semibold text-blue-600 dark:text-blue-400 text-xl mb-3">
                        {section.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {section.text}
                      </p>
                      <div className="mt-3 pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {section.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature highlights */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Key Features at a Glance
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Contact Management", value: "Centralized database" },
                  { title: "Sales Pipeline", value: "Visual deal tracking" },
                  { title: "Task Automation", value: "Workflow efficiency" },
                  { title: "Reporting & Analytics", value: "Data-driven insights" },
                  { title: "Mobile Access", value: "Work from anywhere" },
                  { title: "Email Integration", value: "Unified communications" }
                ].map((feature, index) => (
                  <div key={index} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">
                      {feature.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>

        {/* Stats section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Productivity Increase", value: "45%" },
            { title: "Customer Retention", value: "85%" },
            { title: "ROI", value: "3.8x" }
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-700 dark:text-gray-300">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMToolService;