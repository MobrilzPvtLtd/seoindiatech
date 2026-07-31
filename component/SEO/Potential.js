import Image from 'next/image'
import React from 'react'
import { TrendingUp, Target, BarChart3, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Potential = () => {
  // Key benefits data
  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Increased Visibility',
      description:
        'Boost your rankings for the keywords that drive real business results.',
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Qualified Traffic',
      description:
        'Bring in qualified traffic from users searching for your offerings.',
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Measurable Results',
      description:
        'Monitor results with detailed analytics and actionable reports.',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-gray-100 to-background dark:from-background dark:to-secondary/40/30 px-6 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-background/70 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-primary/20/40 text-primary dark:text-accent rounded-full text-sm font-medium mb-6">
            <span>Unlock Your Potential</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-5xl font-bold leading-tight text-heading mx-auto mb-6">
            Comprehensive SEO Strategy: Our Core Approach
          </h2>

          <div className="w-24 h-1 bg-primary dark:bg-primary rounded-full mx-auto mb-8"></div>

          <p className="text-body text-lg max-w-3xl mx-auto">
           At <Link href="/" className="text-primary">SEO IndiaTech</Link>, our professional SEO services are built on three pillars: audit &amp; strategy,
          content optimization, and technical excellence.
          </p>
        </div>

        {/* Main image with frame */}
        <div className="relative mx-auto mb-16 max-w-4xl">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary dark:border-primary rounded-tl-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-primary dark:border-primary rounded-br-xl"></div>

          {/* Main image */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative">
              <Image
                src="/images/services/track.png"
                alt="SEO Strategy Team Meeting"
                width={900}
                height={600}
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50"></div>
            </div>

            {/* Image caption/overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-left">
              <h3 className="text-xl font-semibold mb-2">
                Expert SEO Strategists
              </h3>
              <p className="text-sm text-gray-200">
                Our team combines technical expertise with creative content
                strategies to drive measurable results
              </p>
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card dark:bg-card p-6 rounded-xl shadow-md border border-border dark:border-border text-center"
            >
              <div className="bg-primary/10 dark:bg-primary/20/40 p-3 rounded-full inline-flex items-center justify-center text-primary dark:text-accent mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-heading mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Potential
