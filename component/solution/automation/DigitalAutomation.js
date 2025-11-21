import React from "react";
import { Search, Code, Clipboard, CheckSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

const DigitalAutomation = () => {
  const automationSteps = [
    {
      icon: <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Automation for Advertising &amp; Promotional Activities",
      description: (
        <>
          {" "}
          Modern advertising requires speed and precision. We automate your{" "}
          <Link href={"/solution/promotion-and-ads"} className="text-blue-500">
            advertising &amp; promotional{" "}
          </Link>{" "}
          workflows by integrating smart triggers, behavior-based targeting, and
          automated ad scheduling. This helps you run campaigns that are
          consistent, timely, and aligned with user behavior. With automation,
          your advertisement for business promotion becomes more impactful and
          cost-efficient.
        </>
      ),
    },
    {
      icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Marketing Funnels & Lead Nurturing",
      description:
        "Your marketing team must manage leads effectively to increase conversion rates. Our digital automation services build automated funnels that guide potential customers from first interaction to final purchase. We integrate lead scoring, auto-response systems, and targeted email sequences, ensuring no opportunity is ever missed.",
    },
    {
      icon: <Clipboard className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "CRM Management Tool Integration",
      description:
        "A powerful customer relationship strategy begins with the right tools. That’s why we integrate and optimize your crm management tool to enhance customer tracking, communication, and service delivery. Our automation ensures your CRM captures essential information, updates customer profiles, and distributes tasks seamlessly — boosting your team’s efficiency.",
    },
    {
      icon: (
        <CheckSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      ),
      title: "CRM Tool Management & Optimization",
      description: (
        <>
          Managing CRM platforms requires continuous monitoring and
          configuration. Through our{" "}
          <Link href={"/solution/crm-and-tools"} className="text-blue-500">
            {" "}
            crm tool management{" "}
          </Link>
          solution, we optimize CRM settings, automate data flows, implement
          customer segmentation, and ensure improved accuracy across
          departments. This reduces manual data entry and enhances team
          productivity.
        </>
      ),
    },
    {
      icon: <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Automated Reporting & Data Insights",
      description:
        "Data plays a critical role in decision-making. Our digital automation as a service includes automated dashboards and reporting tools that collect, analyze, and present data in real-time.With instant insights, your business can make better decisions and adapt quickly to changing market demands.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
          {/* Header with blue gradient */}
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-700 dark:to-gray-800 px-6 md:px-10 py-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Digital Automation
            </h2>
            <div className="w-20 h-1 bg-white/50 mx-auto my-4 rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-medium text-center text-blue-100">
              Comprehensive Automation Solutions Built for Growth
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-center mb-10">
              <div className="px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                5-Step Automation Process
              </div>
            </div>

            <div className="space-y-8 md:space-y-10">
              {automationSteps.map((step, index) => (
                <div key={index} className="flex gap-5 relative">
                  {/* Vertical line connecting steps */}
                  {index < automationSteps.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800/50 -ml-0.5"></div>
                  )}

                  {/* Step number and icon */}
                  <div className="flex-shrink-0 z-10">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full border-2 border-blue-200 dark:border-blue-700">
                      <span className="text-blue-700 dark:text-blue-300 font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        {step.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 ml-12">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Ready to transform your business with intelligent automation
                solutions?
              </p>
              <Link href="/contactus">
                <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-700 dark:from-gray-800 dark:to-gray-900 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md flex items-center mx-auto group">
                  Get Started with Automation
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Increased Efficiency", value: "85%" },
            { title: "Cost Reduction", value: "40%" },
            { title: "Error Reduction", value: "95%" },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {benefit.value}
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {benefit.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalAutomation;
