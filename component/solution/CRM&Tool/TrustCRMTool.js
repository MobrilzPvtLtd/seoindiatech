import {
  CheckCheck,
  BarChart2,
  Users,
  MessageCircle,
  TrendingUp,
  LayoutGrid,
  ArrowRight,
} from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function TrustCRMTool() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [activeTab, setActiveTab] = useState('data')

  // Automation benefits data with additional details
  const automationBenefits = [
    {
      id: 1,
      text: 'Centralized Data Management',
      description: 'Keep all customer information in one accessible location',
      icon: <LayoutGrid className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      category: 'data',
    },
    {
      id: 2,
      text: 'Improved Customer Relationships',
      description: 'Build stronger connections with personalized interactions',
      icon: <Users className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      category: 'customer',
    },
    {
      id: 3,
      text: 'Enhanced Communication',
      description: 'Streamline interactions across all departments',
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      category: 'communication',
    },
    {
      id: 4,
      text: 'Increased Productivity',
      description: 'Automate routine tasks to focus on high-value activities',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      category: 'productivity',
    },
    {
      id: 5,
      text: 'Strategic Decision-Making',
      description: 'Use data-driven insights to guide business strategies',
      icon: <BarChart2 className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      category: 'data',
    },
    {
      id: 6,
      text: 'Scalability and Growth',
      description: 'Easily adapt as your business expands and evolves',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      category: 'productivity',
    },
  ]

  // Filter benefits based on active tab
  const filteredBenefits =
    activeTab === 'all'
      ? automationBenefits
      : automationBenefits.filter((benefit) => benefit.category === activeTab)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="mb-16">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl p-6 md:p-10 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Workflow Process Optimization
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
            Technology alone cannot enhance performance unless it supports the
            right business process. That’s why our CRM solutions emphasize
            building a highly efficient{' '}
            <a
              href="https://www.seoindiatech.com/solution/workflow"
              className="text-blue-600"
            >
              workflow process
            </a>{' '}
            across departments.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
            We analyze your internal flow including:
          </p>

          {/* Timeline / Flow */}
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-blue-300 dark:border-blue-700 pl-6 space-y-10">
              {[
                {
                  title: 'Lead generation to deal closure',
                  icon: 'Search',
                },
                {
                  title: 'Customer service cycle',
                  icon: 'Target',
                },
                {
                  title: 'Payment and renewal cycles',
                  icon: 'TrendingUp',
                },
                {
                  title: 'Employee task management and escalation systems',
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
            After mapping your structure, we build automated pipelines that
            reduce delays, eliminate manual tasks, and boost productivity. With
            an optimized <b>workflow process,</b> businesses can deliver
            responses faster, achieve higher customer satisfaction, and operate
            with greater clarity and accountability.
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
                <BarChart2 className="w-4 h-4" />
                <span>Business Solutions</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Benefits of using{' '}
                <span className="text-blue-600 dark:text-blue-400">CRM</span>{' '}
                <br />& Management tools
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
                  All Benefits
                </button>

                <button
                  onClick={() => setActiveTab('data')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    activeTab === 'data'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Data Management
                </button>

                <button
                  onClick={() => setActiveTab('customer')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    activeTab === 'customer'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Customer Relations
                </button>

                <button
                  onClick={() => setActiveTab('productivity')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    activeTab === 'productivity'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Productivity
                </button>
              </div>

              <div className="space-y-3">
                {filteredBenefits.map((benefit, index) => (
                  <div
                    key={benefit.id}
                    className={`flex items-start space-x-4 p-4 rounded-lg transform transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-700 ${
                      hoveredItem === benefit.id
                        ? 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700'
                        : ''
                    } ${
                      isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                    onMouseEnter={() => setHoveredItem(benefit.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div
                      className={`flex-shrink-0 p-2 rounded-lg ${benefit.bgColor} transition-colors duration-300`}
                    >
                      {benefit.icon}
                    </div>
                    <div>
                      <p
                        className={`font-medium text-lg leading-relaxed transition-colors duration-300 ${
                          hoveredItem === benefit.id
                            ? benefit.color
                            : 'text-gray-800 dark:text-white'
                        }`}
                      >
                        {benefit.text}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
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
                    src="/images/crm1.jpeg"
                    alt="CRM and management tools dashboard showing analytics and customer data"
                    width={600}
                    height={600}
                    className="object-cover bg-white dark:bg-gray-800"
                  />
                </div>
              </div>

              {/* Stats card overlay */}
              <div className="absolute -bottom-6 right-0 left-0 mx-auto w-4/5 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex justify-between">
                <div className="text-center px-3">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    29%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Sales Increase
                  </div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
                <div className="text-center px-3">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    42%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Productivity
                  </div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
                <div className="text-center px-3">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    87%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Customer Retention
                  </div>
                </div>
              </div>

              {/* Annotation */}
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-blue-600 dark:text-blue-400">
                Real-time insights
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Research for Advertising & Promotional Campaigns */}
      <div className="mt-16">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
            CRM + Automation = Maximum Business Efficiency
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
            Automation is the backbone of modern CRM. We integrate advanced
            <a href="https://www.seoindiatech.com/solution/automation" className="text-blue-600"> digital automation services</a> to unlock full CRM potential and
            minimize dependency on manual operations. Automation not only
            improves productivity but also helps businesses reduce operational
            costs.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
            Some key automation advantages include:
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Auto-assignment of leads to the right representatives',
                icon: 'Target',
              },
              {
                title: 'Instant notifications for follow-ups and meetings',
                icon: 'Users',
              },
              {
                title: 'Email/SMS automation for campaigns and reminders',
                icon: 'TrendingUp',
              },
              {
                title: 'Real-time reporting and notification alerts',
                icon: 'BarChart2',
              },
              {
                title: 'Automated ticket creation and escalation',
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
            With advanced <b>digital automation services,</b> your business gains the
            power to scale faster and manage operations with better accuracy,
            consistency, and customer insight.
          </p>
        </div>
      </div>
    </section>
  )
}
