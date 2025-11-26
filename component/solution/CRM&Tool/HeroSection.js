import Image from 'next/image'
import React from 'react'
import { Users, ChartBar, Zap, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  // const crmFeatures = [
  //   {
  //     icon: <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  //     text: '360° customer relationship management',
  //   },
  //   {
  //     icon: <ChartBar className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  //     text: 'Data-driven business analytics',
  //   },
  //   {
  //     icon: <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  //     text: 'Workflow automation & optimization',
  //   },
  // ]

  return (
    <section className="bg-white dark:bg-gray-900 py-8 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16 lg:gap-24">
          {/* Left content */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium shadow-sm">
              <span>Business Solutions</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              CRM &{' '}
              <span className="text-blue-700 dark:text-blue-400">Tools</span> -
              Smart Automation for Seamless Customer Management
            </h1>

            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></div>

            <p className="text-gray-700 text-justify dark:text-gray-300 text-base md:text-lg leading-relaxed">
              In today’s competitive market, every business needs a structured
              and efficient way to manage customer relationships, streamline
              databases, and automate business operations. CRM systems make this
              possible by centralizing all customer and sales information in one
              place. At{' '}
              <a href="https://www.seoindiatech.com/" className="text-blue-600">
                SEO India Tech,
              </a>{' '}
              we empower businesses with advanced CRM integration and automation
              solutions that transform the way teams operate. Our goal is to
              create simplified and productive business environments using smart{' '}
              <b>crm tool management</b> and data-driven workflows that
              accelerate growth.
            </p>
            <p className="text-gray-700 text-justify dark:text-gray-300 text-base md:text-lg leading-relaxed">
              As companies expand, managing customer interactions manually
              becomes challenging and unorganized. With a powerful{' '}
              <b>crm management tool,</b> businesses can automate lead capture,
              track communications, update records instantly, and achieve better
              coordination between marketing, sales, and support teams. We bring
              strategic CRM implementation backed by expertise, customization,
              and automation to ensure your team works efficiently and delivers
              a superior customer experience.
            </p>

            {/* <div className="pt-4 space-y-3">
              {crmFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1.5 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    {feature.icon}
                  </div>
                  <span className="text-gray-800 dark:text-gray-200">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div> */}

            <div className="hidden pt-6 flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md flex items-center group">
                Get started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="bg-transparent border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Schedule a demo
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              {/* Gradient overlay to help with image visibility in dark mode */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent dark:from-black/30 z-10"></div>

              <Image
                src="/images/crm.png"
                alt="CRM and Management Tools interface showing analytics dashboard and customer data"
                width={800}
                height={640}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Interactive elements */}
              <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md z-20">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-1 right-8 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <ChartBar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Customer Retention
                    </div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      +67%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200 dark:bg-blue-900/30 rounded-full -z-10"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-300/50 dark:bg-blue-800/30 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
