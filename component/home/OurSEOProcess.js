import React from 'react'
import { FaClipboardList, FaSearch, FaLightbulb, FaCode, FaTools, FaRegFileAlt, FaLink, FaChartLine } from 'react-icons/fa'

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

const StepItem = ({ step }) => {
  const Icon = step.icon
  return (
    <div className="flex flex-col items-center p-2 md:p-3 text-center group cursor-default">
      <div className="relative flex h-14 w-14 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/15 text-white shadow-lg shadow-black/10 transition-all duration-300 group-hover:from-white/30 group-hover:to-white/10 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-black/20">
        <Icon className="text-xl md:text-lg" />
      </div>
      <p className="mt-2 font-bold text-white/40 text-[9px] md:text-[8px] tracking-[0.15em] uppercase">
        Step {step.number}
      </p>
      <p className="mt-1 text-sm md:text-xs font-semibold text-white leading-snug max-w-[12rem] md:max-w-[10rem]">
        {step.title}
      </p>
    </div>
  )
}

const RightArrow = () => (
  <div className="flex items-center justify-center text-white/30 shrink-0">
    <svg width="24" height="10" viewBox="0 0 24 10" fill="none" className="md:w-[32px] md:h-[12px]">
      <line x1="0" y1="5" x2="19" y2="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <polygon points="18,1 24,5 18,9" fill="currentColor" />
    </svg>
  </div>
)

const LeftArrow = () => (
  <div className="flex items-center justify-center text-white/30 shrink-0">
    <svg width="24" height="10" viewBox="0 0 24 10" fill="none" className="md:w-[32px] md:h-[12px]">
      <line x1="5" y1="5" x2="24" y2="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <polygon points="6,1 0,5 6,9" fill="currentColor" />
    </svg>
  </div>
)

const DownArrowMobile = ({ align }) => (
  <div className={`grid grid-cols-[1fr_auto_1fr] items-center md:hidden`}>
    {align === 'right' ? (
      <>
        <div />
        <div />
        <div className="flex justify-center py-1.5 text-white/30">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
            <line x1="5" y1="0" x2="5" y2="13" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
            <polygon points="1,12 5,18 9,12" fill="currentColor" />
          </svg>
        </div>
      </>
    ) : (
      <>
        <div className="flex justify-center py-1.5 text-white/30">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
            <line x1="5" y1="0" x2="5" y2="13" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
            <polygon points="1,12 5,18 9,12" fill="currentColor" />
          </svg>
        </div>
        <div />
        <div />
      </>
    )}
  </div>
)

const OurSEOProcess = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-5 md:p-6 text-white overflow-hidden shadow-xl shadow-blue-900/20">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/[0.03] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-3xl"></div>

      {/* Header with subtle improvements */}
      <div className="relative mb-4 md:mb-5">
        <div className="flex items-center gap-2">
          <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-semibold tracking-wider uppercase bg-white/15 rounded-full border border-white/10">
            Our Process
          </span>
          <span className="text-[10px] text-blue-200/60">8 Steps</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mt-2">
          Our SEO Process
        </h3>
        <p className="text-blue-200 text-xs md:text-sm mt-0.5">Step-by-step strategy for measurable growth</p>
      </div>

      {/* Mobile: zigzag snake pattern */}
      <div className="relative md:hidden">
        {/* Row 1: Step 1 → Step 2 */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <StepItem step={processSteps[0]} />
          <RightArrow />
          <StepItem step={processSteps[1]} />
        </div>
        <DownArrowMobile align="right" />

        {/* Row 2: Step 4 ← Step 3 */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <StepItem step={processSteps[3]} />
          <LeftArrow />
          <StepItem step={processSteps[2]} />
        </div>
        <DownArrowMobile align="left" />

        {/* Row 3: Step 5 → Step 6 */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <StepItem step={processSteps[4]} />
          <RightArrow />
          <StepItem step={processSteps[5]} />
        </div>
        <DownArrowMobile align="right" />

        {/* Row 4: Step 8 ← Step 7 */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <StepItem step={processSteps[7]} />
          <LeftArrow />
          <StepItem step={processSteps[6]} />
        </div>
      </div>

      {/* Desktop: zigzag snake pattern */}
      <div className="relative hidden md:block">
        {/* Row 1: Step 1 → Step 2 → Step 3 → Step 4 */}
        <div className="flex items-center justify-between">
          {processSteps.slice(0, 4).map((step, stepIndex) => (
            <React.Fragment key={step.title}>
              <StepItem step={step} />
              {stepIndex < 3 && <RightArrow />}
            </React.Fragment>
          ))}
        </div>
        {/* Down arrow below Step 4, between Step 4 and Step 5 */}
        <div className="flex justify-end py-1 pr-12 text-white/30">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <line x1="5" y1="0" x2="5" y2="11" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
            <polygon points="1,10 5,16 9,10" fill="currentColor" />
          </svg>
        </div>
        {/* Row 2: Step 8 ← Step 7 ← Step 6 ← Step 5 */}
        <div className="flex items-center justify-between">
          {[processSteps[7], processSteps[6], processSteps[5], processSteps[4]].map((step, stepIndex) => (
            <React.Fragment key={step.title}>
              <StepItem step={step} />
              {stepIndex < 3 && <LeftArrow />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Subtle bottom indicator */}
      <div className="relative mt-4 md:mt-5 pt-3 md:pt-4 border-t border-white/10 flex justify-between items-center">
        <span className="text-[10px] text-blue-200/50">Transparent • Data-Driven • Results</span>
        <span className="text-[10px] text-blue-200/50">8 Steps to Success</span>
      </div>
    </section>
  )
}

export default OurSEOProcess