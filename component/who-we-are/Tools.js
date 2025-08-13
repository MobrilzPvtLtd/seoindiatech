import React from 'react'
import Image from 'next/image'
import { ArrowRight, Info, Sparkles, ToolCase } from 'lucide-react'

const Tools = () => {
  const tools = [
    {
      name: 'HubSpot',
      src:
        'https://www.digitalyzeit.com/wp-content/uploads/2023/05/HubSpot-Logo.png',
      category: 'CRM & Marketing',
      description:
        'Complete CRM platform with marketing, sales, and service automation',
    },
    {
      name: 'Webflow',
      src:
        'https://www.digitalyzeit.com/wp-content/uploads/2023/05/6361f668d294812aef98add0_webflow-logo.png',
      category: 'Website Builder',
      description: 'Powerful visual design platform for responsive websites',
    },
    {
      name: 'Mailchimp',
      src:
        'https://www.digitalyzeit.com/wp-content/uploads/2023/05/Mailchimp-Logo-2018-present.png',
      category: 'Email Marketing',
      description: 'Marketing automation platform for email campaigns',
    },
    {
      name: 'SimplyBook.me',
      src:
        'https://www.digitalyzeit.com/wp-content/uploads/2023/05/SimplyBook-logo-1.png',
      category: 'Appointment Scheduling',
      description: 'Online booking system for service-based businesses',
    },
    {
      name: 'ClickUp',
      src:
        'https://www.digitalyzeit.com/wp-content/uploads/2023/05/clickup-logo-text.png',
      category: 'Project Management',
      description: 'All-in-one productivity platform for tasks and projects',
    },
    {
      name: 'Miro',
      src:
        'https://www.digitalyzeit.com/wp-content/uploads/2023/05/miro-logo-vector.png',
      category: 'Collaboration',
      description: 'Online collaborative whiteboard platform',
    },
    {
      name: 'Zapier',
      src:
        'https://www.digitalyzeit.com/wp-content/uploads/2023/05/image1-1024x552.png',
      category: 'Automation',
      description: 'Tool for automating workflows between web applications',
    },
    {
      name: 'Kissflow',
      src:
        'https://www.digitalyzeit.com/wp-content/uploads/2023/05/kissflow-hor.svg',
      category: 'Workflow Management',
      description: 'Digital workplace for workflow and process automation',
    },
    {
      name: 'Keap',
      src:
        'https://www.digitalyzeit.com/wp-content/uploads/2023/05/2560px-Logo_of_Keap_Company.svg-1024x478.png',
      category: 'CRM & Automation',
      description: 'CRM, sales and marketing automation for small businesses',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 -right-10 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-purple-50 dark:bg-purple-900/20 rounded-full blur-3xl opacity-70 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            <ToolCase size={16} className="text-blue-600 dark:text-blue-400" />
            Best-in-Class Technology
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The tools that make us work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 relative">
              smarter
              <Sparkles className="text-yellow-400 w-8 h-8 absolute -top-4 -right-8" />
            </span>
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            By leveraging a suite of industry-leading tools, we deliver
            efficient, scalable solutions that drive tangible results for your
            business.
          </p>
        </div>

        {/* Tools Grid - Centered with Hover Overlay */}
        <div className=" max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group relative aspect-[4/2] bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Tool logo - centered */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={200}
                  height={80}
                  className="max-h-28 w-auto object-contain transition-transform duration-300 z-10 group-hover:scale-90 dark:filter dark:brightness-[1.15] dark:contrast-[1.1]"
                />
              </div>

              {/* Hover overlay - appears when hovered */}
              <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 dark:from-blue-700/95 dark:to-purple-700/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-sm font-medium text-blue-100 dark:text-blue-200 mb-3">
                  {tool.category}
                </p>
                <p className="text-center text-sm text-white/90">
                  {tool.description}
                </p>

                <div className="absolute bottom-4 right-4 bg-white/20 rounded-full p-1.5 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <Info size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text and CTA */}
        <div className="hidden mt-16 text-center">
          <p className="text-xl font-medium text-gray-900 dark:text-white mb-6">
            And Many More Cutting-Edge Tools...
          </p>

          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform active:scale-95">
            Explore Our Full Tech Stack
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Tools
