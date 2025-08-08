import React from 'react';
import { Users, Target, Radio, MessageSquare, Palette, DollarSign, Rocket, BarChart2 } from 'lucide-react';

const PromotionService = () => {
  const promotionSteps = [
    {
      id: 1,
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Identifying the Target Audience",
      text: "Understand the characteristics, preferences, and behaviors of the target audience to tailor the advertising message effectively.",
      detail: "We use advanced market research and data analytics to precisely define your ideal customer segments."
    },
    {
      id: 2,
      icon: <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Setting Advertising Objectives",
      text: "Define clear and measurable objectives for the advertising campaign. Objectives may include increasing brand awareness, driving sales, or promoting a new product feature.",
      detail: "Our SMART goal framework ensures every campaign has specific, measurable outcomes aligned with your business goals."
    },
    {
      id: 3,
      icon: <Radio className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Choosing the Advertising Medium",
      text: "Select the most appropriate channels or media for reaching the target audience. This could include traditional media like TV, radio, and print, as well as digital channels such as social media, websites, and online advertising platforms.",
      detail: "We develop custom multi-channel strategies that maximize your reach while optimizing your budget allocation."
    },
    {
      id: 4,
      icon: <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Developing the Message",
      text: "Create a compelling and persuasive message that communicates the unique selling propositions (USPs) of the product or service. The message should resonate with the target audience and be consistent with the overall brand image.",
      detail: "Our creative team crafts messaging that cuts through the noise and connects emotionally with your audience."
    },
    {
      id: 5,
      icon: <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Creating the Advertisement",
      text: "Produce the actual advertisement, which could include visuals, audio, video, and copy. The creative elements should align with the chosen medium and effectively convey the intended message.",
      detail: "From concept to production, we deliver high-quality creative assets that stand out in today's crowded media landscape."
    },
    {
      id: 6,
      icon: <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Budgeting",
      text: "Allocate a budget for the advertising campaign, considering the costs associated with creative development, media placement, and any additional expenses.",
      detail: "Our transparent budgeting process ensures maximum value and eliminates unexpected costs."
    },
    {
      id: 7,
      icon: <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Implementing the Campaign",
      text: "Launch the advertising campaign according to the planned schedule. Monitor its performance and make adjustments if necessary.",
      detail: "Our campaign management includes real-time monitoring and agile optimization to maximize performance."
    },
    {
      id: 8,
      icon: <BarChart2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Evaluating and Measuring Results",
      text: "Assess the effectiveness of the advertising campaign by analyzing key performance indicators (KPIs) such as reach, engagement, conversion rates, and return on investment (ROI).",
      detail: "Our comprehensive analytics provide actionable insights for continuous improvement of your marketing strategy."
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
            <h1 className="text-3xl md:text-4xl font-bold text-center">Promotion And Advertising</h1>
            <div className="w-20 h-1 bg-white/50 mx-auto my-4 rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-medium text-center text-blue-100">How Does It Work?</h2>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-center mb-10">
              <div className="px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Our 8-Step Promotion Process
              </div>
            </div>
            
            <div className="space-y-8">
              {promotionSteps.map((step) => (
                <div key={step.id} className="relative group">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0 relative">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-800 shadow-sm group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60 transition-colors duration-300">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {step.id}
                      </div>
                    </div>
                    
                    {/* Step content */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-blue-600 dark:text-blue-400 text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {step.text}
                      </p>
                      <div className="mt-2 pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                        <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connector line */}
                  {step.id < promotionSteps.length && (
                    <div className="hidden sm:block absolute left-6 top-14 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 ml-[0.3rem]"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Results section */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  The Results You Can Expect
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our comprehensive approach delivers measurable outcomes for your business
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { metric: "Brand Awareness", value: "+65%", icon: <Users className="w-5 h-5" /> },
                  { metric: "Engagement Rate", value: "+42%", icon: <MessageSquare className="w-5 h-5" /> },
                  { metric: "Conversion Rate", value: "+38%", icon: <Target className="w-5 h-5" /> },
                  { metric: "Average ROI", value: "3.2x", icon: <BarChart2 className="w-5 h-5" /> }
                ].map((item, index) => (
                  <div key={index} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400 mb-3">
                      {item.icon}
                    </div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{item.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{item.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionService;