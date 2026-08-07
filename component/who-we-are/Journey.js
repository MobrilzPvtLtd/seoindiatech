import React from 'react'
import { CheckCircle, ArrowUpRight, Star, Clock, Users } from 'lucide-react'
import Image from 'next/image'

const Journey = () => {
  return (
    <section className="bg-cream dark:bg-card py-16 md:py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-20 top-20 w-64 h-64 bg-background dark:bg-primary/15 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute -right-20 bottom-20 w-72 h-72 bg-cream dark:bg-purple-900/20 rounded-full blur-3xl opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
            <Image
              src="/images/whoweare/me.png"
              alt="Our journey at SEO India Tech"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-60"></div>
          </div>

          {/* Floating statistics cards */}
          <div className="hidden absolute -bottom-6 -left-6 md:left-4 bg-white dark:bg-background p-4 rounded-xl shadow-lg border border-border dark:border-border max-w-[180px]">
            <div className="flex items-center space-x-2 mb-1">
              <Clock className="w-5 h-5 text-primary dark:text-accent" />
              <h4 className="font-semibold text-heading">
                Since 2013
              </h4>
            </div>
            <p className="text-sm text-muted">
              Helping businesses transform digitally
            </p>
          </div>

          <div className="hidden absolute -top-6 -right-6 md:right-4 bg-white dark:bg-background p-4 rounded-xl shadow-lg border border-border dark:border-border">
            <div className="flex items-center space-x-1 text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-4 h-4" />
              ))}
            </div>
            <p className="text-sm text-body font-medium">
              Trusted by 1000+ clients
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Section label */}
          <div className="inline-block px-4 py-1.5 bg-background dark:bg-primary/15 text-primary dark:text-accent rounded-full text-sm font-medium mb-2">
            Our Journey
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading leading-tight">
            Our Story: A Journey of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-purple-400">
              Innovation and Excellence
            </span>
          </h2>

          {/* Description */}
          <p className="text-justify text-body text-lg leading-relaxed">
            We began with a simple idea: to change the way businesses engage
            with the digital world. Recognizing the immense power of automation
            to streamline processes, boost productivity, and fuel growth, we
            made it our mission to become a trusted partner for any business
            ready to thrive in a complex digital landscape.
          </p>

          {/* Feature cards */}
          <div className="space-y-4 pt-4">
            <div className="flex items-start bg-white dark:bg-background p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-border dark:border-border">
              <CheckCircle className="text-primary dark:text-accent w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-heading mb-1">
                  Streamlined Operations
                </h4>
                <p className="text-body">
                  We help you streamline operations, eliminate repetitive work,
                  and free your team to focus on strategic, high-impact
                  projects.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-white dark:bg-background p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-border dark:border-border">
              <CheckCircle className="text-primary dark:text-accent w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-heading mb-1">
                  Workflow Optimization
                </h4>
                <p className="text-body">
                  Let us help you optimize your operations, remove bottlenecks,
                  and improve collaboration with our powerful workflow
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
