import Image from 'next/image'
import React from 'react'
import {
  BarChart2,
  PieChart,
  TrendingUp,
  Activity,
  Monitor,
  LayoutDashboard,
} from 'lucide-react'

const Dashboard = () => {
  // Dashboard features
  const dashboardFeatures = [
    {
      icon: <BarChart2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Comprehensive Analytics',
      description:
        'Track essential business metrics effortlessly with our easy-to-read visual dashboard.',
    },
    {
      icon: <PieChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Performance Reports',
      description:
        'Get actionable reports showing campaign results and ROI performance.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Growth Tracking',
      description:
        'Analyze results and pinpoint opportunities for continued growth.',
    },
    {
      icon: <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Real-Time Updates',
      description:
        'Get real-time updates with live data and instant notifications.',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 px-4 py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-50/70 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <LayoutDashboard className="w-4 h-4" />
            <span>Analytics Dashboard</span>
          </div>

          <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your Personalized Business Dashboard
          </h2>

          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto mb-6"></div>

          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Our intuitive dashboard delivers valuable insights by combining all
            your marketing data in one place.
          </p>
        </div>

        {/* Main dashboard image */}
        <div className="relative mb-16">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-blue-600 dark:border-blue-500 rounded-tl-xl hidden md:block"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-blue-600 dark:border-blue-500 rounded-br-xl hidden md:block"></div>

          <div className="bg-white dark:bg-gray-800 p-2 md:p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
            {/* Dashboard header label */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded-full font-medium shadow-lg flex items-center">
              <Monitor className="w-4 h-4 mr-2" />
              <span>Live Dashboard Preview</span>
            </div>

            {/* Dashboard image */}
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/services/dashboard.png"
                alt="Business Analytics Dashboard"
                width={1600}
                height={900}
                layout="responsive"
                className="rounded-lg hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {dashboardFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Dashboard
