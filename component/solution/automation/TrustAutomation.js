import { CheckCheck } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function TrustAutomationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)

  // Automation benefits data
  const automationBenefits = [
    {
      id: 1,
      text:
        'Automate key customer service functions, including responses and order processing.',
      color: 'text-primary dark:text-accent',
      iconColor: 'text-primary dark:text-accent',
    },
    {
      id: 2,
      text:
        'Use automation to manage email outreach and social media scheduling efficiently.',
      color: 'text-primary dark:text-accent',
      iconColor: 'text-white/900 dark:text-accent',
    },
    {
      id: 3,
      text:
        'Enhance sales productivity with automated lead generation and prospect scoring.',
      color: 'text-primary dark:text-accent',
      iconColor: 'text-primary dark:text-accent',
    },
    {
      id: 4,
      text:
        'Enhance accounting efficiency with automated invoicing and expense monitoring.',
      color: 'text-primary dark:text-accent',
      iconColor: 'text-white/900 dark:text-accent',
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 px-6 bg-card dark:bg-card relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div
            className={`transform transition-all duration-700 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-card dark:bg-card rounded-2xl border-2 border-border dark:border-border p-8 shadow-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20/40 text-primary dark:text-accent rounded-full text-sm font-medium mb-6">
                <span>Benefits</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-heading mb-8 leading-tight">
                Benefits of Digital Automation
              </h3>

              <div className="space-y-3">
                {automationBenefits.map((benefit, index) => (
                  <div
                    key={benefit.id}
                    className={`flex items-start space-x-4 p-4 rounded-lg transform transition-all duration-300 hover:bg-cream dark:hover:bg-surface/50 cursor-pointer ${
                      hoveredItem === benefit.id
                        ? 'bg-gray-50 dark:bg-surface/50'
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
                    <div className="flex-shrink-0 p-1.5 bg-primary/10 dark:bg-primary/20 rounded-full">
                      <CheckCheck
                        className={`w-5 h-5 ${
                          hoveredItem === benefit.id
                            ? benefit.iconColor
                            : 'text-primary dark:text-accent'
                        }`}
                      />
                    </div>
                    <p
                      className={`text-body text-lg leading-relaxed transition-colors duration-300 ${
                        hoveredItem === benefit.id
                          ? benefit.color
                          : 'text-body'
                      }`}
                    >
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <button className="hidden px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:bg-primary-hover dark:bg-primary-hover dark:hover:bg-primary-hover text-white font-medium rounded-full transition-colors duration-300  items-center group">
                  Learn more about our automation services
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

          {/* Right Side - Illustration */}
          <div
            className={`transform transition-all duration-700 ease-out delay-300 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative bg-card dark:bg-card rounded-2xl border-2 border-border dark:border-border p-8 shadow-xl">
              {/* Main Illustration Container */}
              <div className="relative w-full max-w-lg mx-auto h-80">
                {/* Robot Figure */}
                <div className="relative z-10">
                  {/* Robot Head */}
                  <div className="w-24 h-28 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-t-3xl mx-auto relative mb-2">
                    {/* Eyes */}
                    <div className="absolute top-6 left-6 w-4 h-4 bg-secondary dark:bg-accent rounded-full animate-pulse"></div>
                    <div className="absolute top-6 right-6 w-4 h-4 bg-secondary dark:bg-accent rounded-full animate-pulse"></div>
                    {/* Antenna */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-secondary dark:bg-accent rounded-full animate-ping"></div>
                  </div>

                  {/* Robot Body */}
                  <div className="w-28 h-32 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-500 dark:to-gray-600 rounded-xl mx-auto relative">
                    {/* Screen */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-black dark:bg-background rounded border-2 border-gray-600 dark:border-border">
                      <div className="text-accent dark:text-accent text-xs font-mono p-1 animate-pulse">
                        <div>&lt;/&gt;</div>
                      </div>
                    </div>
                    {/* Control Buttons */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      <div className="w-3 h-3 bg-secondary dark:bg-accent rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-primary/100 dark:bg-indigo-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-secondary dark:bg-accent rounded-full"></div>
                    </div>
                  </div>

                  {/* Base */}
                  <div className="w-32 h-6 bg-primary dark:bg-primary-hover rounded-full mx-auto mt-2 shadow-lg"></div>
                </div>

                {/* Floating Elements */}
                {/* Laptop */}
                <div className="absolute top-8 right-4 transform rotate-12 animate-bounce">
                  <div className="w-20 h-16 bg-gray-800 dark:bg-background rounded-lg relative">
                    <div className="w-18 h-12 bg-blue-400 dark:bg-primary rounded-sm m-1 flex items-center justify-center">
                      <div className="w-12 h-8 bg-secondary dark:bg-primary rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="absolute bottom-16 left-4 transform -rotate-12 animate-pulse">
                  <div className="w-12 h-20 bg-secondary dark:bg-primary rounded-xl relative">
                    <div className="w-10 h-16 bg-blue-400 dark:bg-primary rounded-lg m-1 flex items-center justify-center">
                      <div className="w-6 h-10 bg-primary dark:bg-primary-hover rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Documents/Papers */}
                <div className="absolute top-20 left-8 transform rotate-6">
                  <div className="w-16 h-12 bg-indigo-200 dark:bg-indigo-900 rounded-lg shadow-md relative overflow-hidden">
                    <div className="absolute inset-1 bg-primary/10 dark:bg-indigo-800 rounded">
                      <div className="w-full h-1 bg-indigo-300 dark:bg-primary mt-1"></div>
                      <div className="w-3/4 h-1 bg-indigo-300 dark:bg-primary mt-1"></div>
                      <div className="w-1/2 h-1 bg-indigo-300 dark:bg-primary mt-1"></div>
                    </div>
                  </div>
                </div>

                {/* Gears */}
                <div className="absolute bottom-8 right-8 animate-spin">
                  <div className="w-8 h-8 border-4 border-primary dark:border-blue-400 border-t-transparent rounded-full"></div>
                </div>

                <div className="absolute top-32 right-12">
                  <div className="w-6 h-6 border-4 border-indigo-500 dark:border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
                </div>

                {/* Connecting Lines */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 400 400"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: '#3B82F6', stopOpacity: 0.6 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: '#8B5CF6', stopOpacity: 0.6 }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100 150 Q200 100 300 150"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  <path
                    d="M150 250 Q200 200 250 250"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="3,7"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              {/* Key stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary dark:text-accent">
                    85%
                  </div>
                  <div className="text-xs text-muted">
                    Time Saved
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary dark:text-accent">
                    24/7
                  </div>
                  <div className="text-xs text-muted">
                    Operation
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary dark:text-accent">
                    95%
                  </div>
                  <div className="text-xs text-muted">
                    Accuracy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
