import React from 'react'
import { FaClipboardList, FaSearch, FaLightbulb, FaCode, FaTools, FaRegFileAlt, FaLink, FaChartLine } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'

const processSteps = [
  { number: '1', title: 'Website Audit', icon: FaClipboardList },
  { number: '2', title: 'Competitor Analysis', icon: FaSearch },
  { number: '3', title: 'Keyword Research', icon: FaLightbulb },
  { number: '4', title: 'On-page SEO', icon: FaCode },
  { number: '5', title: 'Technical SEO', icon: FaTools },
  { number: '6', title: 'Content Optimization', icon: FaRegFileAlt },
  { number: '7', title: 'Authority Building', icon: FaLink },
  { number: '8', title: 'Monthly Reporting', icon: FaChartLine },
]

const OurSEOProcess = () => {
  const rows = [processSteps.slice(0, 4), processSteps.slice(4, 8)]

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-4 md:p-5 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative mb-3">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-white/15 rounded-full mb-2">
          Our Process
        </span>
        <h3 className="text-lg font-bold text-white">
          Our SEO Process
        </h3>
        <p className="text-blue-200 text-xs mt-0.5">Step-by-step strategy for measurable growth</p>
      </div>

      <div className="relative space-y-2">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            {row.map((step, stepIndex) => {
              const Icon = step.icon
              return (
                <React.Fragment key={step.title}>
                  <div className="flex flex-1 flex-col items-center p-2 text-center group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 backdrop-blur text-white transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                      <Icon className="text-sm" />
                    </div>
                    <p className="mt-1 font-bold text-white/50 text-[8px] tracking-wider">
                      STEP {step.number}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-white leading-snug max-w-[10rem]">
                      {step.title}
                    </p>
                  </div>
                  {stepIndex < row.length - 1 && (
                    <div className="hidden md:flex items-center justify-center px-1 text-white/30">
                      <div className="w-8 h-[1px] bg-white/20"></div>
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurSEOProcess
