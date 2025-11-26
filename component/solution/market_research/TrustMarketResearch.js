import {
  CheckCheck,
  Headphones,
  BarChart2,
  MessageSquare,
  Database,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function TrustMarketResearch() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [activeTab, setActiveTab] = useState('digital')

  // Market research methods with enhanced data
  const researchMethods = [
    {
      id: 1,
      text:
        'Social Media Listening: Social media platforms offer valuable insights into consumer opinions, evolving preferences, and emerging market trends.',
      title: 'Social Media Listening',
      description: 'Analyze discussions to uncover consumer insights',
      icon: <Headphones className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      category: 'digital',
    },
    {
      id: 2,
      text:
        'Website Analytics: Implement analytics platforms, including Google Analytics, to track and understand visitor behavior on websites.',
      title: 'Website Analytics',
      description: 'Enhance digital interactions through pattern recognition',
      icon: <BarChart2 className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      category: 'digital',
    },
    {
      id: 3,
      text:
        'Online Communities and Forums: Engage in industry-focused online forums to understand customer segments and gather actionable insights.',
      title: 'Online Communities',
      description: 'Gain insights from industry forums and communities',
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      category: 'community',
    },
    {
      id: 4,
      text:
        'Data Mining and Text Analysis: Advanced data mining and text analysis help businesses uncover valuable insights from unstructured data volumes.',
      title: 'Data Mining & Text Analysis',
      description: 'Discover data patterns using advanced algorithms',
      icon: <Database className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      category: 'analytics',
    },
  ]

  // Filter methods based on active tab
  const filteredMethods =
    activeTab === 'all'
      ? researchMethods
      : researchMethods.filter((method) => method.category === activeTab)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Linking Market Research with Digital Marketing Success Section */}
      <div className="mb-16">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl p-6 md:p-10 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Linking Market Research with Digital Marketing Success
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
            Effective marketing needs strategy. Strategy needs research. At SEO
            India Tech, we bridge the two through research-driven marketing.
            Many businesses struggle with advertising wastage and low ROI
            because they lack market clarity. With our integrated approach, we
            align <b>market research services</b> with{' '}
            <a
              href="https://www.seoindiatech.com/services/content-marketing"
              className="text-blue-600"
            >
              content marketing services,
            </a>{' '}
            SEO, paid ads, and brand promotion strategies to ensure every
            marketing investment generates results.
          </p>

          {/* Timeline / Flow */}
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-blue-300 dark:border-blue-700 pl-6 space-y-10">
              {[
                {
                  title: 'Research & insights',
                  icon: 'Search',
                },
                {
                  title: 'Campaign planning based on findings',
                  icon: 'Target',
                },
                {
                  title: (
                    <>
                      Execution through{' '}
                      <strong>content marketing services,</strong> SEO, email,
                      social media, display ads
                    </>
                  ),
                  icon: 'TrendingUp',
                },
                {
                  title: 'Performance monitoring and optimization',
                  icon: 'BarChart2',
                },
              ].map((item, index) => {
                const Icon =
                  item.icon === 'Search'
                    ? require('lucide-react').Search
                    : item.icon === 'Target'
                    ? require('lucide-react').Target
                    : item.icon === 'TrendingUp'
                    ? require('lucide-react').TrendingUp
                    : require('lucide-react').BarChart2

                return (
                  <div key={index} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[14px] top-1 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full shadow-md"></div>

                    {/* Content Card */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 border border-blue-300/50 dark:border-blue-700 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {item.title}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mt-10">
            When backed by insights, <b>advertising & promotional</b> campaigns
            deliver higher engagement and superior conversions.
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Content */}
          <div
            className={`transform transition-all duration-700 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-10 shadow-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                <span>Market Intelligence</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                We Can Help You Succeed <br />
                By{' '}
                <span className="text-blue-600 dark:text-blue-400">
                  Leveraging
                </span>
              </h3>

              <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mb-6"></div>

              {/* Category filter tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    activeTab === 'all'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  All Methods
                </button>

                <button
                  onClick={() => setActiveTab('digital')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    activeTab === 'digital'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Digital Analysis
                </button>

                <button
                  onClick={() => setActiveTab('community')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    activeTab === 'community'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Community Research
                </button>

                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    activeTab === 'analytics'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Advanced Analytics
                </button>
              </div>

              <div className="space-y-4">
                {filteredMethods.map((method, index) => (
                  <div
                    key={method.id}
                    className={`flex items-start space-x-4 p-4 rounded-lg transform transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-700 ${
                      hoveredItem === method.id
                        ? 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700'
                        : ''
                    } ${
                      isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                    onMouseEnter={() => setHoveredItem(method.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div
                      className={`flex-shrink-0 p-2 rounded-lg ${method.bgColor} transition-colors duration-300`}
                    >
                      {method.icon}
                    </div>
                    <div>
                      <h4
                        className={`font-medium text-lg leading-relaxed transition-colors duration-300 ${
                          hoveredItem === method.id
                            ? method.color
                            : 'text-gray-800 dark:text-white'
                        }`}
                      >
                        {method.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        {method.description}
                      </p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                        {method.text.split(': ')[1]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md flex items-center group">
                  Request Market Analysis
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div
            className={`transform transition-all duration-700 ease-out delay-200 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Main image with glow effect */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 opacity-30 dark:opacity-40 blur-xl rounded-full"></div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/images/market2.png"
                    alt="Market research dashboard showing data visualization and analysis tools"
                    width={600}
                    height={600}
                    className="object-contain bg-white dark:bg-gray-800"
                  />
                </div>
              </div>

              {/* Stats card overlay */}
              <div className="absolute -bottom-6 right-0 left-0 mx-auto w-4/5 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex justify-between">
                <div className="text-center px-3">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    +67%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Market Insights
                  </div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
                <div className="text-center px-3">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    +53%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Decision Accuracy
                  </div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
                <div className="text-center px-3">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    3.2x
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    ROI
                  </div>
                </div>
              </div>

              {/* Floating annotation */}
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-blue-600 dark:text-blue-400">
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-4 h-4" />
                  <span>Data-Driven Insights</span>
                </div>
              </div>
            </div>

            {/* Research methods pills */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {[
                'Surveys',
                'Interviews',
                'Focus Groups',
                'Data Mining',
                'Competitor Analysis',
                'Trend Research',
              ].map((method, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300"
                  style={{
                    transitionDelay: `${400 + index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.5s ease-out',
                  }}
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Market Research for Advertising & Promotional Campaigns */}
      <div className="mt-16">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Market Research for Advertising & Promotional Campaigns
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
            Launching a campaign without research is like navigating without a
            map. With our dedicated <b>market research service,</b> businesses
            can reduce guesswork and maximize returns. We evaluate audience
            demographics, interests, pain points, preferred platforms, and
            buying triggers to create hyper-targeted marketing messages.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Lead generation & customer acquisition',
                icon: 'Target',
              },
              {
                title: 'Brand awareness & recall building',
                icon: 'Users',
              },
              {
                title: 'Product launches & seasonal promotions',
                icon: 'TrendingUp',
              },
              {
                title: 'Customer re-engagement & retention strategies',
                icon: 'BarChart2',
              },
            ].map((item, index) => {
              const Icon =
                item.icon === 'Target'
                  ? require('lucide-react').Target
                  : item.icon === 'Users'
                  ? require('lucide-react').Users
                  : item.icon === 'TrendingUp'
                  ? require('lucide-react').TrendingUp
                  : require('lucide-react').BarChart2

              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/40 border border-blue-300/50 dark:border-blue-700 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {item.title}
                  </p>
                </div>
              )
            })}
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mt-10 leading-relaxed">
            With accurate consumer insights, your{' '}
            <a
              href="https://www.seoindiatech.com/solution/promotion-and-ads"
              className="text-blue-600"
            >
              advertising & promotional{' '}
            </a>
            approach becomes laser- focused and budget-efficient.
          </p>
        </div>
      </div>
    </section>
  )
}
