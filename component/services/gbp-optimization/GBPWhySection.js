import React from 'react'
import { FaChartLine } from 'react-icons/fa'

export default function GBPWhySection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative bg-white/70 dark:bg-background/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-lg border border-border dark:border-gray-800">
          {/* Accent Side Border */}
          <div className="absolute left-0 top-8 bottom-8 w-1 bg-primary rounded-full"></div>

          <div className="pl-6 space-y-6">
            {/* Heading with Icon */}
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 dark:bg-primary/20/40 p-3 rounded-xl">
                <FaChartLine className="text-primary dark:text-accent text-xl" />
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-heading">
                Why a stronger profile matters
              </h3>
            </div>

            {/* Content */}
            <p className="text-muted text-justify leading-relaxed text-base md:text-lg">
              Local searches often end in quick actions. People tap call, get
              directions, or message you. Our gbp optimization services focus on
              the signals Google uses to rank map results and the details
              customers use to choose you. These gbp optimization services also
              reduce wrong calls by keeping details accurate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
