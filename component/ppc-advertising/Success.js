import React from 'react'
import { ArrowRight, Star, CheckCircle, Zap, TrendingUp, Cable, PackageCheck } from 'lucide-react'

const Success = () => {
  const benefits = [
    { icon: <CheckCircle className="w-4 h-4" />, text: 'Reduce unnecessary ad spending' },
    { icon: <Zap className="w-4 h-4" />, text: 'Improve click-through rates' },
    { icon: <TrendingUp className="w-4 h-4" />, text: 'Enhance lead quality' },
    { icon: <Cable className="w-4 h-4" />, text: 'Optimize landing pages' },
    { icon: <PackageCheck className="w-4 h-4" />, text: 'Deliver transparent performance reports' },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-background dark:from-background dark:to-secondary/40/30 py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-1/4 w-72 h-72 bg-primary/10 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 left-1/4 w-80 h-80 bg-primary/10 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 hidden md:block pointer-events-none">
        <Star className="w-10 h-10 text-accent/80 dark:text-primary/40 opacity-50" />
      </div>
      <div className="absolute bottom-20 right-20 hidden md:block pointer-events-none">
        <Star className="w-8 h-8 text-accent/80 dark:text-primary/40 opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-secondary/60 to-primary dark:from-gray-700 dark:to-gray-900 rounded-3xl px-6 py-16 md:px-16 lg:px-24 text-center shadow-xl overflow-hidden relative">
          {/* Inner decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <span>Your Success Journey</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            A PPC Advertising Company That Focuses on ROI{' '}
              <br className="hidden md:block" />
              {/* <span className="text-white underline decoration-accent dark:decoration-accent decoration-4 underline-offset-4">
                SEO India Tech
              </span> */}
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-8 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full"
                >
                  <div className="text-accent/80 dark:text-accent">
                    {benefit.icon}
                  </div>
                  <span className="font-medium text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            <p className="text-white/90 mt-6 text-base md:text-lg max-w-3xl mx-auto">
              Our strength lies in creating campaigns that generate conversions, not just clicks. As a results-
              first PPC advertising company,
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="hidden bg-white hover:bg-background text-primary px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center group">
                Get started now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="hidden bg-transparent border border-white/50 hover:border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold transition-all duration-300">
                Schedule a consultation
              </button>
            </div>

            {/* Social proof */}
            <div className="hidden mt-12 text-white/70">
              <p className="text-sm mb-3">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-8">
                {['Microsoft', 'Adobe', 'Shopify', 'Slack', 'Spotify'].map(
                  (brand, index) => (
                    <span key={index} className="text-white/90 font-medium">
                      {brand}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Success stats - Optional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
          {[
            { value: '95%', label: 'Customer Satisfaction' },
            { value: '2500+', label: 'Projects Completed' },
            { value: '87%', label: 'Conversion Rate Increase' },
            { value: '350+', label: '5-Star Reviews' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card dark:bg-card rounded-lg p-5 text-center border border-border shadow-md"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary dark:text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-muted text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Success
