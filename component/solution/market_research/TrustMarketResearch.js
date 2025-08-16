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
    </section>
  )
}
