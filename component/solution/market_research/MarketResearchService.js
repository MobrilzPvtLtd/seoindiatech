import React from 'react'
import { Target, Users, TrendingUp, BarChart2, Search } from 'lucide-react'

const MarketResearchService = () => {
  const researchSteps = [
    {
      id: 1,
      icon: <Target className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Identify Market Opportunities',
      text:
        'Discover growth opportunities and potential customers through detailed analysis of market size, segmentation, and emerging industry trends.',
      detail:
        'Discover hidden market niches and track emerging trends with our comprehensive analysis.',
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Understand Customer Needs',
      text:
        'Gather insights into customer needs and preferences using surveys, interviews, focus groups, and detailed behavioral data analysis.',
      detail:
        'We combine qualitative and quantitative research methods to reveal valuable customer insights.',
    },
    {
      id: 3,
      icon: <TrendingUp className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Evaluate Competition and Trends',
      text:
        'Analyze competition and market dynamics using benchmarking, competitive analysis, and strategic forecasting to identify growth opportunities.',
      detail:
        'Our competitive intelligence delivers actionable strategies to help you achieve a strong market advantage.',
    },
    {
      id: 4,
      icon: <Search className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Test New Products or Services',
      text:
        'Validate new offerings through prototype testing, market trials, and structured concept evaluation.',
      detail:
        'Validate concepts early to reduce risk and improve success rates before full-scale launch.',
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
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-700 dark:to-surface px-6 md:px-10 py-10 text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Market Research
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
                Data-Driven Insights for Business Growth
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchSteps.map((step) => (
                <div key={step.id} className="flex flex-col h-full group">
                  <div className="bg-gray-50 dark:bg-card/80 border border-border dark:border-border rounded-xl p-6 shadow-sm h-full flex flex-col transition-all duration-300 group-hover:shadow-md group-hover:border-primary/30 dark:group-hover:border-primary/40">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg border border-primary/30 dark:border-primary/40 shadow-sm">
                        {step.icon}
                      </div>
                      <div className="relative">
                        <span className="absolute -top-3 -left-3 w-6 h-6 bg-primary dark:bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {step.id}
                        </span>
                        <h3 className="font-semibold text-primary dark:text-accent text-lg">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-body mb-4">
                      {step.text}
                    </p>

                    <div className="mt-auto pt-4 border-t border-border">
                      <p className="text-muted text-sm italic">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Research methodology */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold text-heading mb-6 text-center">
                Our Research Methodology
              </h3>

              <div className="bg-background dark:bg-primary/15 border border-primary/20 dark:border-primary/40 rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Primary Research',
                      description:
                        'Direct insights through surveys, interviews, and groups',
                    },
                    {
                      title: 'Secondary Research',
                      description:
                        'Evaluate published data, reports, and prior studies',
                    },
                    {
                      title: 'Data Analysis',
                      description:
                        'Statistical methods for recognizing data patterns',
                    },
                    {
                      title: 'Competitive Analysis',
                      description:
                        'Benchmark against competitors and market leaders',
                    },
                    {
                      title: 'Market Segmentation',
                      description:
                        'Determine unique customer groups and preferences',
                    },
                    {
                      title: 'Trend Forecasting',
                      description:
                        'Forecast market movements and potential opportunities',
                    },
                  ].map((method, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-primary dark:bg-accent rounded-full"></div>
                        <h4 className="font-medium text-heading">
                          {method.title}
                        </h4>
                      </div>
                      <p className="text-muted text-sm pl-5">
                        {method.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="hidden  mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-body font-medium">
                  Ready to gain valuable market insights?
                </p>
                <p className="text-muted text-sm">
                  Our research team is equipped to help you make data-driven
                  decisions.
                </p>
              </div>
              <button className="bg-primary hover:bg-primary-hover dark:bg-primary-hover dark:hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md flex items-center group whitespace-nowrap">
                Request Research Proposal
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Reduced Risk', value: '75%' },
            { title: 'Better Targeting', value: '92%' },
            { title: 'Increased ROI', value: '3.4x' },
            { title: 'Growth Rate', value: '+47%' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card dark:bg-card p-6 rounded-xl shadow-md text-center border border-border"
            >
              <div className="text-3xl font-bold text-primary dark:text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-body">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Market Research Matters Section */}
      <div className="mt-16">
        <div className="bg-card dark:bg-card rounded-2xl shadow-xl border border-border p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-4">
            Why Market Research Matters for Business Success
          </h2>

          <p className="text-body text-center max-w-3xl mx-auto mb-10">
            Modern customers are smarter, informed, and selective. Businesses
            need deeper understanding about what customers expect, how markets
            behave, and how competitors position their offerings. Through our
            professional <b>market research services,</b> we help brands decode
            consumer psychology and identify growth opportunities.
          </p>

          {/* Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Discover Pain Points & Buyer Behavior',
                icon: 'Target',
              },
              {
                title: 'Understand Emerging Market Trends',
                icon: 'TrendingUp',
              },
              {
                title: 'Identify Market Gaps & Product Fit',
                icon: 'Search',
              },
              {
                title: 'Evaluate Competitor Strengths',
                icon: 'BarChart2',
              },
              {
                title: 'Measure Brand Identity & Perception',
                icon: 'Users',
              },
            ].map((item, i) => {
              const Icon =
                item.icon === 'Target'
                  ? require('lucide-react').Target
                  : item.icon === 'TrendingUp'
                  ? require('lucide-react').TrendingUp
                  : item.icon === 'Search'
                  ? require('lucide-react').Search
                  : item.icon === 'BarChart2'
                  ? require('lucide-react').BarChart2
                  : require('lucide-react').Users

              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-background/40 border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20/40 border border-primary/30/50 dark:border-primary/30 flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-heading mb-1">
                      {item.title}
                    </h4>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom paragraph */}
          <p className="text-body text-center max-w-3xl mx-auto mt-10">
            With data-driven insights, companies can craft smarter marketing
            strategies, optimize products, and build customer-centric
            experiences that drive higher ROI and long-term business success.
          </p>
        </div>
      </div>

      {/* Custom Market Research Services Section */}
      <div className="mt-16">
        <div className="bg-card dark:bg-card rounded-2xl shadow-xl border border-border p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-4">
            Our Custom Market Research Services
          </h2>

          <p className="text-body text-center max-w-3xl mx-auto mb-10">
            Every business is unique, and so is its market approach. That is why
            we offer fully <b>custom market research services</b> tailored to
            specific industries, audiences, and objectives. We go beyond generic
            reporting and deliver actionable insights that help you plan,
            execute, and optimize your marketing blueprint.
          </p>

          {/* Research Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Customer & Buyer Persona Research',
                icon: 'Users',
              },
              {
                title: 'Product/Service Demand Forecasting',
                icon: 'TrendingUp',
              },
              {
                title: 'Competitor & Opportunity Analysis',
                icon: 'Search',
              },
              {
                title: 'Brand Positioning & Market Perception Study',
                icon: 'Target',
              },
              {
                title: 'Pricing Strategy & Customer Value Analysis',
                icon: 'BarChart2',
              },
              {
                title: 'Industry Growth & Trend Assessment',
                icon: 'TrendingUp',
              },
            ].map((item, i) => {
              const Icon =
                item.icon === 'Users'
                  ? require('lucide-react').Users
                  : item.icon === 'TrendingUp'
                  ? require('lucide-react').TrendingUp
                  : item.icon === 'Search'
                  ? require('lucide-react').Search
                  : item.icon === 'Target'
                  ? require('lucide-react').Target
                  : require('lucide-react').BarChart2

              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-background/40 border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20/40 border border-primary/30/50 dark:border-primary/30 flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-heading mb-1">
                      {item.title}
                    </h4>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-body text-center max-w-3xl mx-auto mt-10">
            These insights empower business leaders to take confident decisions
            backed by verified data and analytics.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MarketResearchService
