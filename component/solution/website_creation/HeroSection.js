import Image from 'next/image'
import React from 'react'
import { Code, Layout, TrendingUp, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const websiteFeatures = [
    {
      icon: <Layout className="w-5 h-5 text-primary dark:text-accent" />,
      text: 'Seamless user experience on all devices',
    },
    {
      icon: <Code className="w-5 h-5 text-primary dark:text-accent" />,
      text: 'Cutting-edge technologies for efficient development',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-primary dark:text-accent" />,
      text: 'Boost website performance with effective SEO',
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
              <Code className="w-4 h-4" />
              <span>Professional Web Development</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Website{' '}
              <span className="text-primary dark:text-accent">
                Creation Services
              </span>{' '}
              by SEO India Tech
            </h1>

            <div className="w-20 h-1 bg-primary dark:bg-primary rounded-full"></div>

            <p className="text-justify text-body text-base md:text-lg leading-relaxed">
              In today's fiercely competitive digital landscape, having a
              robust, user-friendly website is no longer optional - it's
              essential. At SEO India Tech, we deliver <b>best website creation
              services,</b> tailored to your business goals and designed to grow
              with you. Whether you're launching a startup, scaling operations,
              or seeking a professional online presence, our <b>professional
              website creation services</b> combine strategic insight, technical
              excellence, and marketing know-how to give you a powerful digital
              edge.
            </p>

            {/* <div className="pt-4 space-y-3">
              {websiteFeatures.map((feature, index) => (
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

            <div className="hidden pt-6 flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary-hover dark:bg-primary-hover dark:hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md flex items-center group">
                Start your project
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="bg-transparent border border-primary dark:border-primary text-primary dark:text-accent hover:bg-background dark:hover:bg-blue-900/30 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                View portfolio
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              {/* Gradient overlay to help with image visibility in dark mode */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent dark:from-black/30 z-10"></div>

              <Image
                src="/images/website_creation2.png"
                alt="Website creation process showing responsive design and development interfaces"
                width={800}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Browser frame overlay */}
              <div className="absolute top-4 left-4 right-4 h-8 bg-cream dark:bg-surface rounded-t-lg flex items-center px-3 z-20">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mx-auto bg-white dark:bg-gray-600 rounded-full px-3 py-0.5 text-xs text-body">
                  yourwebsite.com
                </div>
              </div>

              {/* Code snippet card */}
              <div className="absolute -bottom-5 right-8 bg-card dark:bg-card px-4 py-3 rounded-lg shadow-lg border border-border dark:border-border z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                    <Code className="w-5 h-5 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted">
                      Clean Code
                    </div>
                    <div className="text-lg font-mono font-bold text-primary dark:text-accent">
                      &lt;/&gt;
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
      </div>
    </section>
  )
}

export default HeroSection
