import React from 'react';
import { Target, Users, TrendingUp, BarChart2, Search } from 'lucide-react';

const MarketResearchService = () => {
  const researchSteps = [
    {
      id: 1,
      icon: <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Identify Market Opportunities",
      text: "Identify market opportunities and potential customers through thorough analysis of market size, growth, and segmentation.",
      detail: "Our comprehensive market opportunity analysis helps you discover untapped niches and emerging trends."
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Understand Customer Needs",
      text: "Understand customer needs and preferences through surveys, interviews, focus groups, and behavioral analysis.",
      detail: "We use a mix of qualitative and quantitative research methods to uncover deep customer insights."
    },
    {
      id: 3,
      icon: <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Evaluate Competition and Trends",
      text: "Evaluate the competition and market trends through competitive analysis, benchmarking, and trend forecasting.",
      detail: "Our competitive intelligence provides you with actionable strategies to gain market advantage."
    },
    {
      id: 4,
      icon: <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Test New Products or Services",
      text: "Test new products or services through prototype testing, concept validation, and market trials.",
      detail: "Reduce risk and increase success rates by validating concepts before full-scale launch."
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
            <h1 className="text-3xl md:text-4xl font-bold text-center">Market Research</h1>
            <div className="w-20 h-1 bg-white/50 mx-auto my-4 rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-medium text-center text-blue-100">How Does It Work?</h2>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-center mb-10">
              <div className="px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Data-Driven Insights for Business Growth
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchSteps.map((step) => (
                <div key={step.id} className="flex flex-col h-full group">
                  <div className="bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-sm h-full flex flex-col transition-all duration-300 group-hover:shadow-md group-hover:border-blue-200 dark:group-hover:border-blue-800/50">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-800 shadow-sm">
                        {step.icon}
                      </div>
                      <div className="relative">
                        <span className="absolute -top-3 -left-3 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {step.id}
                        </span>
                        <h3 className="font-semibold text-blue-600 dark:text-blue-400 text-lg">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {step.text}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Research methodology */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Our Research Methodology
              </h3>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { title: "Primary Research", description: "Direct data collection through surveys, interviews, and focus groups" },
                    { title: "Secondary Research", description: "Analysis of existing studies, reports, and published data" },
                    { title: "Data Analysis", description: "Statistical analysis and pattern identification" },
                    { title: "Competitive Analysis", description: "Benchmarking against industry leaders and competitors" },
                    { title: "Market Segmentation", description: "Identifying distinct customer groups and their needs" },
                    { title: "Trend Forecasting", description: "Predicting future market movements and opportunities" }
                  ].map((method, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{method.title}</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm pl-5">
                        {method.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="hidden  mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Ready to gain valuable market insights?
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Our research team is equipped to help you make data-driven decisions.
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md flex items-center group whitespace-nowrap">
                Request Research Proposal
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Reduced Risk", value: "75%" },
            { title: "Better Targeting", value: "92%" },
            { title: "Increased ROI", value: "3.4x" },
            { title: "Growth Rate", value: "+47%" }
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

export default MarketResearchService;