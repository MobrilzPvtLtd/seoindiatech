import React from 'react'
import { FaChartLine, FaBrain } from 'react-icons/fa'

export default function GEOTRENDSSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 md:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.04),transparent_40%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.07),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-16 md:space-y-20">
        {/* Header with Icon */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-5 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-600 dark:text-blue-400 shadow-lg">
              <FaChartLine size={40} />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Trends in Generative Engine Optimization
          </h2>
        </div>

        {/* Main Content */}
        <div className="space-y-10 md:space-y-14">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto font-medium">
            Many brands now focus on AI visibility instead of only search engine
            rankings. Recent trends in generative engine optimization show that:
          </p>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <li className="group flex items-start gap-5 p-7 rounded-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 shadow-md hover:shadow-xl hover:border-blue-400/50 dark:hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-1">
              <FaBrain
                className="text-blue-600 dark:text-blue-500 flex-shrink-0 mt-1.5"
                size={28}
              />
              <p className="text-gray-800 dark:text-gray-100 font-medium text-base leading-relaxed">
                AI based queries are increasing daily
              </p>
            </li>

            <li className="group flex items-start gap-5 p-7 rounded-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 shadow-md hover:shadow-xl hover:border-indigo-400/50 dark:hover:border-indigo-600/50 transition-all duration-300 hover:-translate-y-1">
              <FaBrain
                className="text-indigo-600 dark:text-indigo-500 flex-shrink-0 mt-1.5"
                size={28}
              />
              <p className="text-gray-800 dark:text-gray-100 font-medium text-base leading-relaxed">
                Conversational search is growing
              </p>
            </li>

            <li className="group flex items-start gap-5 p-7 rounded-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 shadow-md hover:shadow-xl hover:border-blue-400/50 dark:hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-1">
              <FaBrain
                className="text-blue-600 dark:text-blue-500 flex-shrink-0 mt-1.5"
                size={28}
              />
              <p className="text-gray-800 dark:text-gray-100 font-medium text-base leading-relaxed">
                Voice queries are becoming common
              </p>
            </li>

            <li className="group flex items-start gap-5 p-7 rounded-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 shadow-md hover:shadow-xl hover:border-indigo-400/50 dark:hover:border-indigo-600/50 transition-all duration-300 hover:-translate-y-1">
              <FaBrain
                className="text-indigo-600 dark:text-indigo-500 flex-shrink-0 mt-1.5"
                size={28}
              />
              <p className="text-gray-800 dark:text-gray-100 font-medium text-base leading-relaxed">
                AI assistants prefer trusted content
              </p>
            </li>

            <li className="group flex items-start gap-5 p-7 rounded-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 shadow-md hover:shadow-xl hover:border-blue-400/50 dark:hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-1 col-span-full sm:col-span-1 lg:col-span-1">
              <FaBrain
                className="text-blue-600 dark:text-blue-500 flex-shrink-0 mt-1.5"
                size={28}
              />
              <p className="text-gray-800 dark:text-gray-100 font-medium text-base leading-relaxed">
                Structured data improves AI citations
              </p>
            </li>
          </ul>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto font-medium mt-8">
            A professional generative engine optimization company studies these
            patterns and applies changes that match current AI behavior.
          </p>
        </div>

        {/* Visual Illustrations */}
        <div className="pt-8 text-center space-y-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Visualizing the shift to AI-driven visibility and generative search
            trends
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Rendered images for context */}
          </div>
        </div>
      </div>
    </section>
  )
}
