import Image from 'next/image'
import React from 'react'
import { BarChart2, Target, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  const researchFeatures = [
    {
      icon: <TrendingUp className="w-5 h-5 text-primary dark:text-accent" />,
      text: 'Analyzing industry trends and opportunities.',
    },
    {
      icon: <Target className="w-5 h-5 text-primary dark:text-accent" />,
      text: 'Identifying customer needs and expectations',
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-primary dark:text-accent" />,
      text: 'Make data-driven business decisions',
    },
  ]

  return (
    <section className="bg-white dark:bg-background py-8 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16 lg:gap-24">
          {/* Left content */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card dark:bg-card text-primary dark:text-accent rounded-full text-sm font-medium shadow-sm">
              <BarChart2 className="w-4 h-4" />
              <span>Data-Driven Insights</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-heading leading-tight">
              Market{' '}
              <span className="text-primary dark:text-accent">
                Research Services
              </span>{' '}
              with SEO India Tech
            </h1>

            <div className="w-20 h-1 bg-primary dark:bg-primary rounded-full"></div>

            <p className="text-justify text-body text-base md:text-lg leading-relaxed">
              In today's competitive business environment, brands can no longer
              rely on assumptions or guesswork to make key decisions.
              Understanding customer needs, market demand, and competitive
              landscape is the foundation of sustainable success. At{' '}
              <Link href="https://www.seoindiatech.com/" className="text-primary">
                SEO India Tech,
              </Link>{' '}
              we combine intelligence, data, and strategic insights to help
              businesses thrive through our specialized{' '}
              <b>market research services</b>. Whether you are launching a new
              product, scaling an existing one, or trying to tap into new
              customer segments, our
              <b>market research service</b> offers precise analysis to support
              informed decision-making.
            </p>

            <p className="text-justify text-body text-base md:text-lg leading-relaxed">
              As a leading <b>digital marketing service company,</b> we
              recognize that strategy begins with information. Without clarity,
              every marketing move becomes unpredictable. Our team uses advanced
              tools, real-time data, and proven methodologies to deliver{' '}
              <b>custom market research services</b> that align with your
              business goals and market needs.
            </p>

            {/* <div className="pt-4 space-y-3">
              {researchFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1.5 bg-primary/10 dark:bg-primary/20 rounded-full">
                    {feature.icon}
                  </div>
                  <span className="text-heading dark:text-gray-200">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div> */}

            <div className="hidden pt-6">
              <button className="bg-primary hover:bg-primary-hover dark:bg-primary-hover dark:hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md flex items-center group">
                Get insights now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              {/* Gradient overlay to help with image visibility in dark mode */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent dark:from-black/30 z-10"></div>

              <Image
                src="/images/marketresearch.png"
                alt="Market research visualization showing data analysis, customer insights, and business strategies"
                width={800}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 bg-card dark:bg-card p-2 rounded-lg shadow-md z-20">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-2 right-8 bg-card dark:bg-card px-4 py-3 rounded-lg shadow-lg border border-border dark:border-border z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                    <TrendingUp className="w-5 h-5 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted">
                      ROI Increase
                    </div>
                    <div className="text-lg font-bold text-primary dark:text-accent">
                      +82%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/15 dark:bg-primary/15 rounded-full -z-10"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/25 dark:bg-primary/20 rounded-full -z-10"></div>
          </div>
        </div>

        {/* Research metrics */}
        <div className=" hidden mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Data Points Analyzed', value: '10M+' },
            { label: 'Market Segments', value: '250+' },
            { label: 'Research Methods', value: '15+' },
            { label: 'Success Rate', value: '97%' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-card/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-border text-center"
            >
              <div className="text-2xl font-bold text-primary dark:text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
