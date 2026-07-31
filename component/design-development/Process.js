import React from 'react'
import { Search, PenTool, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery & Strategy',
    description:
      'We start by understanding your business goals, target audience, and competitive landscape to define a clear roadmap for your project.',
  },
  {
    icon: PenTool,
    title: 'Design & Prototyping',
    description:
      'Our designers create wireframes, mockups, and interactive prototypes that bring your vision to life before a single line of code is written.',
  },
  {
    icon: Code2,
    title: 'Development & Testing',
    description:
      'Our developers build robust, scalable solutions using modern technologies, with rigorous testing to ensure quality and performance.',
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description:
      'We handle deployment, monitor performance, and provide ongoing maintenance to keep your digital product running at its best.',
  },
]

const Process = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-background dark:bg-secondary/40/60 border border-primary/20 dark:border-primary/40/30 rounded-full text-sm font-medium text-primary dark:text-accent mb-6">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight mb-4">
            How We Bring Your
            <br className="hidden sm:block" />
            Vision to Life
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Our structured approach ensures every project is delivered on time,
            within budget, and exceeding expectations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-400 to-cyan-400" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isRight = index % 2 === 0
              return (
                <div
                  key={index}
                  className="relative md:flex md:items-center md:min-h-[180px]"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-background border-4 border-primary flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                    <span className="text-sm font-bold text-primary dark:text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                      isRight ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <div className="bg-card dark:bg-card rounded-2xl p-6 shadow-lg border border-border dark:border-border hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-background dark:bg-secondary/40/60 rounded-xl">
                          <Icon className="w-5 h-5 text-primary dark:text-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-heading">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
