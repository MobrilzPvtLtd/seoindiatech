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
      icon: <Users className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Identifying the Target Audience',
      text: 'Leverage social media platforms to engage and grow your audience.',
      detail:
        'We analyze competitor strategies to identify opportunities and gaps in the market.',
    },
    {
      id: 2,
      icon: <Target className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Setting Advertising Objectives',
      text:
        'Identify key performance indicators to evaluate campaign success, such as engagement rates, conversion rates, or return on investment, ensuring alignment with overall business goals.',
      detail:
        'We craft tailored strategies that focus on achievable targets, trackable progress, and timelines to maximize your campaign\'s effectiveness.',
    },
    {
      id: 3,
      icon: <Radio className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Choosing the Advertising Medium',
      text:
        'We combine proven traditional outlets with high-performing digital platforms to deliver a unified, impactful brand message to your audience.',
      detail:
        'We integrate cross-platform advertising tactics to ensure consistent messaging and increased audience engagement across all touchpoints.',
    },
    {
      id: 4,
      icon: (
        <MessageSquare className="w-6 h-6 text-primary dark:text-accent" />
      ),
      title: 'Developing the Message',
      text:
        'We develop impactful narratives that highlight your product\'s strengths and inspire action from your target market.',
      detail:
        'Our storytelling approach ensures your message is memorable, authentic, and aligned with your brand values.',
    },
    {
      id: 5,
      icon: <Palette className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Creating the Advertisement',
      text:
        'We produce high-quality ads with visuals, audio, video, and copy that perfectly fit your chosen channels and deliver your message effectively.',
      detail:
        'We handle every stage of the creative process, from initial concept to final production, delivering visually stunning and impactful assets that capture attention and drive results.',
    },
    {
      id: 6,
      icon: <DollarSign className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Budgeting',
      text:
        'We create detailed budget plans that balance cost-efficiency with maximum campaign impact, ensuring every dollar is strategically invested for optimal returns.',
      detail:
        'We carefully plan and distribute your budget to ensure every dollar drives measurable results and campaign success.',
    },
    {
      id: 7,
      icon: <Rocket className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Implementing the Campaign',
      text:
        'We execute campaigns on schedule and continuously monitor performance, making timely adjustments for optimal impact.',
      detail:
        'We ensure seamless campaign execution with proactive tracking and quick adaptations to keep results on target.',
    },
    {
      id: 8,
      icon: <BarChart2 className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Evaluating and Measuring Results',
      text:
        'We conduct comprehensive performance reviews, using data-driven insights to refine strategies and boost future campaign outcomes.',
      detail:
        'We measure campaign success with precision, identifying strengths and uncovering opportunities for optimization.',
    },
  ]

  return (
    <section className="bg-background py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-card dark:bg-card shadow-xl rounded-2xl overflow-hidden">
          {/* Header with blue gradient */}
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-700 dark:to-surface  px-6 md:px-10 py-10 text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Promotion And Advertising
            </h1>
            <div className="w-20 h-1 bg-white/50 mx-auto my-4 rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-medium text-center text-white/90">
              How Does It Work?
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-center mb-10">
              <div className="px-6 py-3 bg-background dark:bg-primary/15 text-primary dark:text-accent rounded-full text-sm font-medium">
                Our 8-Step Promotion Process
              </div>
            </div>

            <div className="space-y-8">
              {promotionSteps.map((step) => (
                <div key={step.id} className="relative group">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0 relative">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg border border-primary/30 dark:border-primary/40 shadow-sm group-hover:bg-primary/15 dark:group-hover:bg-primary/25 transition-colors duration-300">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary dark:bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {step.id}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-primary dark:text-accent text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-body mb-3">
                        {step.text}
                      </p>
                      <div className="mt-2 pl-4 border-l-2 border-primary/30 dark:border-primary/40">
                        <p className="text-muted text-sm italic">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connector line */}
                  {step.id < promotionSteps.length && (
                    <div className="hidden sm:block absolute left-6 top-14 bottom-0 w-0.5 bg-primary/15 dark:bg-primary/20 ml-[0.3rem]"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Results section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-heading mb-2">
                  Turning Strategy Into Success
                </h3>
                <p className="text-muted">
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
                    className="bg-background dark:bg-primary/15 border border-primary/20 dark:border-primary/40 rounded-lg p-4 text-center"
                  >
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-accent mb-3">
                      {item.icon}
                    </div>
                    <div className="text-xl font-bold text-primary dark:text-accent">
                      {item.value}
                    </div>
                    <div className="text-sm text-muted">
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
