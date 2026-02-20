import React from 'react'
import {
  FaSearch,
  FaPenNib,
  FaImage,
  FaStar,
  FaGlobe,
  FaChartLine,
  FaFileAlt,
} from 'react-icons/fa'

export default function WhyAppStore() {
  const data = [
    {
      icon: <FaSearch />,
      title: 'Keyword research and mapping',
      content:
        'We find search terms that match your app features, use cases, and user intent. Then we map them to title, subtitle, short description, long description, and keyword fields based on store guidelines. This is the base for app store optimization strategies that improve visibility.',
    },
    {
      icon: <FaPenNib />,
      title: 'Metadata copy that reads like a human',
      content:
        'We write copy that sounds natural, stays clear, and still supports app store optimization services. We avoid fluff. We explain what the app does, who it helps, and why it is worth installing. We keep it easy to scan...',
    },
    {
      icon: <FaImage />,
      title: 'Creative improvements that drive installs',
      content:
        'Your icon and screenshots do heavy lifting. We review your current creatives and suggest changes to improve clarity and tap-through. We can support with screenshot copy, layout guidance, and video preview direction...',
    },
    {
      icon: <FaStar />,
      title: 'Ratings and review support',
      content:
        'Stores reward apps that earn trust. We help you build a review plan that follows store policies. We also guide response templates and timing. A strong rating profile supports advanced app store optimization...',
    },
    {
      icon: <FaGlobe />,
      title: 'Localization for India and beyond',
      content:
        'If you are targeting regional audiences, localization matters. We adapt messaging and keywords for app store optimization India goals. If you want global growth, we plan rollouts market by market...',
    },
    {
      icon: <FaChartLine />,
      title: 'A/B testing and iteration',
      content:
        'Better ASO comes from testing. We run experiments on screenshots, short description hooks, and other elements where the store allows. Then we scale what works...',
    },
    {
      icon: <FaFileAlt />,
      title: 'Reporting you can actually use',
      content:
        'You get clean reporting on ranking movement, conversion trends, and what changed. We connect ASO work with your wider marketing plan...',
      full: true,
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-5">
            What you get with our app store optimization agency
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            As an app store optimization agency, we follow a clear process. It
            is not guesswork. Each update is backed by research and testing.
          </p>
        </div>

        {/* Cards – icon + title in one row */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={index}
              className={`group rounded-2xl p-6 md:p-7 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                item.full ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              {/* Icon + Title – single row */}
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-2xl transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                  {item.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
