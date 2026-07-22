import React from 'react'
import {
  Palette,
  Code,
  Smartphone,
  Globe,
  Layers,
  Zap,
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Create intuitive, visually appealing, and user-focused interfaces that enhance satisfaction and drive conversions. We blend aesthetics with functionality to deliver designs that resonate with your audience.',
    points: ['User Research & Wireframing', 'Interactive Prototyping', 'Visual Design Systems'],
  },
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Build fast, secure, and scalable websites using modern frameworks and clean code architecture. Our development team ensures your site performs flawlessly under any load.',
    points: ['React & Next.js Experts', 'Headless CMS Integration', 'API Development & Integration'],
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'Ensure seamless experiences across all devices with mobile-first, adaptive layouts. Your users get a consistent experience whether on phone, tablet, or desktop.',
    points: ['Mobile-First Approach', 'Cross-Browser Testing', 'Progressive Enhancement'],
  },
  {
    icon: Globe,
    title: 'Custom Web Applications',
    description:
      'Develop tailored web applications that solve unique business challenges and scale with your growth. From dashboards to SaaS platforms, we build it all.',
    points: ['SaaS & Dashboard Apps', 'Real-Time Features', 'Cloud Deployment'],
  },
  {
    icon: Layers,
    title: 'E-Commerce Solutions',
    description:
      'Launch high-converting online stores with intuitive shopping experiences and secure payment integration. We optimize every step of the buyer journey.',
    points: ['Shopify & Custom Stores', 'Payment Gateway Setup', 'Conversion Optimization'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Improve load times, Core Web Vitals, and overall site performance for better user experience and SEO rankings. Speed matters — we make your site lightning fast.',
    points: ['Core Web Vitals Audit', 'Image & Code Optimization', 'CDN & Caching Strategy'],
  },
]

const Services = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/30 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Comprehensive Design &
            <br className="hidden sm:block" />
            Development Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            At{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              SEO India Tech,
            </span>{' '}
            we transform ideas into powerful digital products through design
            excellence and technical expertise.
          </p>
        </div>

        {/* Zigzag Layout */}
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon
            const isReversed = index % 2 !== 0
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-10 md:gap-16`}
              >
                {/* Icon Side */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-blue-500/20 rotate-3 hover:rotate-0 transition-transform duration-500">
                      <Icon className="w-14 h-14 text-white" />
                    </div>
                    <div className="absolute -inset-4 rounded-3xl border border-blue-200 dark:border-blue-800/30 -rotate-3 hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/3">
                  <span className="text-sm font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wider mb-2 block">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.points.map((point, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
