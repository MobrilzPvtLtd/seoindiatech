import React from 'react'
import { Star } from 'lucide-react'
import Image from 'next/image'

// Optimized circular progress component
const CircularProgress = ({ percentage, color, size = 80 }) => {
  const radius = 14
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          r={radius}
          stroke="#E5E7EB"
          className="dark:stroke-gray-700"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="16"
          cy="16"
          r={radius}
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500 ease-out"
        />
      </svg>
    </div>
  )
}

// Optimized status badge component
const StatusBadge = ({ status, type }) => {
  const styles = {
    processing:
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
    verified:
      'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  }

  return (
    <span className={`${styles[type]} px-2 py-1 rounded text-xs font-medium`}>
      {status}
    </span>
  )
}

// Optimized status item component
const StatusItem = ({ title, rating, status, type }) => (
  <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-3 border dark:border-gray-700">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
        <Star className="w-4 h-4 text-yellow-500" />
      </div>
      <div>
        <div className="font-medium text-sm dark:text-white">{title}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {rating} ⭐
        </div>
      </div>
    </div>
    <StatusBadge status={status} type={type} />
  </div>
)

// Optimized traffic chart component
const TrafficChart = () => (
  <div className="relative h-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg overflow-hidden">
    <svg
      className="w-full h-full"
      viewBox="0 0 300 60"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M0,50 Q75,45 150,30 Q225,15 300,10"
        stroke="#3B82F6"
        strokeWidth="3"
        fill="none"
        className="dark:stroke-blue-400"
      />
      <path
        d="M0,50 Q75,45 150,30 Q225,15 300,10 L300,60 L0,60 Z"
        fill="url(#chartGradient)"
        className="dark:opacity-50"
      />
    </svg>
  </div>
)

const SEOSolution = () => {
  const statusData = [
    {
      title: 'Subscription',
      rating: '5.0',
      status: 'Processing',
      type: 'processing',
    },
    {
      title: 'Get free extension',
      rating: '5.0',
      status: 'Verified',
      type: 'verified',
    },
  ]

  const metrics = [
    {
      label: 'Authority Score',
      value: 82,
      displayValue: '92%',
      color: '#3B82F6',
    },
    { label: 'Content score', value: 74, displayValue: '74', color: '#10B981' },
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Search Engine Optimization
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Tailored{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
              SEO solutions
            </span>{' '}
            for Optimal Performance
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Enhance Organic Engagement, Optimize Visibility, and Reach Top
            Search Results with Strategic SEO.
          </p>
        </header>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Email Verification Card */}
          <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
            <header className="mb-6">
              <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                Email Verification
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Your email approach quietly shapes the effectiveness and
                exposure of your communications.
              </p>
            </header>
            <div className="rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 relative bottom-0">
              <Image
                src={'/images/subscribtion.png'}
                width={500}
                height={300}
                alt="Email Verification"
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
          </article>

          {/* Competitor Analysis Card */}
          <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
            <header className="mb-6">
              <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                Competitor Analysis
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Excessive bounced emails harm sender credibility and reduce overall email delivery performance.
              </p>
            </header>
            <div className="rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 relative bottom-0">
              <Image
                src={'/images/ORGANIC.png'}
                width={500}
                height={300}
                alt="Competitor Analysis"
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
          </article>

          {/* Revenue Monitoring Card */}
          <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 md:col-span-2 xl:col-span-1 border border-gray-100 dark:border-gray-700 overflow-hidden">
            <header className="mb-6">
              <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                Revenue Monitoring
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Email list verification ensures your messages reach active and
                valid recipients.
              </p>
            </header>
            <div className="rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 relative bottom-0">
              <Image
                src={'/images/score.png'}
                width={500}
                height={300}
                alt="Revenue Monitoring"
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default SEOSolution
