import React from 'react'
import {
  Users,
  Target,
  Radio,
  MessageSquare,
  Palette,
  DollarSign,
  Rocket,
  BarChart2,
} from 'lucide-react'

const PromotionService = () => {
  const promotionSteps = [
    {
      id: 1,
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Identifying the Target Audience',
      text: 'Leverage social media platforms to engage and grow your audience.',
      detail:
        'We analyze competitor strategies to identify opportunities and gaps in the market.',
    },
    {
      id: 2,
      icon: <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Setting Advertising Objectives',
      text:
        'Identify key performance indicators to evaluate campaign success, such as engagement rates, conversion rates, or return on investment, ensuring alignment with overall business goals.',
      detail:
        'We craft tailored strategies that focus on achievable targets, trackable progress, and timelines to maximize your campaign’s effectiveness.',
    },
    {
      id: 3,
      icon: <Radio className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Choosing the Advertising Medium',
      text:
        'We combine proven traditional outlets with high-performing digital platforms to deliver a unified, impactful brand message to your audience.',
      detail:
        'We integrate cross-platform advertising tactics to ensure consistent messaging and increased audience engagement across all touchpoints.',
    },
    {
      id: 4,
      icon: (
        <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      ),
      title: 'Developing the Message',
      text:
        'We develop impactful narratives that highlight your product’s strengths and inspire action from your target market.',
      detail:
        'Our storytelling approach ensures your message is memorable, authentic, and aligned with your brand values.',
    },
    {
      id: 5,
      icon: <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Creating the Advertisement',
      text:
        'We produce high-quality ads with visuals, audio, video, and copy that perfectly fit your chosen channels and deliver your message effectively.',
      detail:
        'We handle every stage of the creative process, from initial concept to final production, delivering visually stunning and impactful assets that capture attention and drive results.',
    },
    {
      id: 6,
      icon: <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Budgeting',
      text:
        'We create detailed budget plans that balance cost-efficiency with maximum campaign impact, ensuring every dollar is strategically invested for optimal returns.',
      detail:
        'We carefully plan and distribute your budget to ensure every dollar drives measurable results and campaign success.',
    },
    {
      id: 7,
      icon: <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Implementing the Campaign',
      text:
        'We execute campaigns on schedule and continuously monitor performance, making timely adjustments for optimal impact.',
      detail:
        'We ensure seamless campaign execution with proactive tracking and quick adaptations to keep results on target.',
    },
    {
      id: 8,
      icon: <BarChart2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Evaluating and Measuring Results',
      text:
        'We conduct comprehensive performance reviews, using data-driven insights to refine strategies and boost future campaign outcomes.',
      detail:
        'We measure campaign success with precision, identifying strengths and uncovering opportunities for optimization.',
    },
  ]

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
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Promotion And Advertising
            </h1>
            <div className="w-20 h-1 bg-white/50 mx-auto my-4 rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-medium text-center text-blue-100">
              How Does It Work?
            </h2>
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
                  Turning Strategy Into Success
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Proven strategies that turn your goals into measurable success
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    metric: 'Brand Awareness',
                    value: '+65%',
                    icon: <Users className="w-5 h-5" />,
                  },
                  {
                    metric: 'Engagement Rate',
                    value: '+42%',
                    icon: <MessageSquare className="w-5 h-5" />,
                  },
                  {
                    metric: 'Conversion Rate',
                    value: '+38%',
                    icon: <Target className="w-5 h-5" />,
                  },
                  {
                    metric: 'Average ROI',
                    value: '3.2x',
                    icon: <BarChart2 className="w-5 h-5" />,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 text-center"
                  >
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400 mb-3">
                      {item.icon}
                    </div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {item.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromotionService
