import React from 'react'
import {
  Target,
  Globe,
  Code,
  Layout,
  Server,
  Rocket,
  RefreshCw,
  Database,
  Search,
  FileCode,
  Lock,
} from 'lucide-react'

const WebsiteCreationService = () => {
  const websiteSteps = [
    {
      id: 1,
      icon: <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Define Purpose and Goals',
      text:
        'Determine the primary objective of your website, such as selling products, providing information, generating leads, or building a community.',
      detail:
        'We begin with a detailed strategy session to define your target audience, business goals, and key success metrics.',
    },
    {
      id: 2,
      icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Choose a Domain Name',
      text:
        'Choose a domain name that represents your brand, ensuring it is memorable, easy to pronounce, and simple to type.',
      detail:
        'We help secure the ideal web address to match your brand identity and improve search visibility.',
    },
    {
      id: 3,
      icon: <FileCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Select a Website Platform',
      text:
        'Select a CMS or website platform suited to your technical abilities and specific project requirements.',
      detail:
        'Our team recommends an optimal technology stack tailored to your project, whether using WordPress, React, Next.js, or custom development.',
    },
    {
      id: 4,
      icon: <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Design the Website',
      text:
        'Define the website’s appearance and layout, covering color schemes, fonts, imagery, and UI design elements.',
      detail:
        'We create visual prototypes and mockups to help you envision your website’s design prior to building it.',
    },
    {
      id: 5,
      icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Develop and Build',
      text:
        'Implement website designs by applying appropriate programming languages and frameworks to create a working digital platform.',
      detail:
        'We write high-quality code to bring your website to life, ensuring responsiveness and peak performance.',
    },
    {
      id: 6,
      icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Create and Organize Content',
      text:
        'Create and organize website content across text, images, videos, and multimedia to enhance user experience.',
      detail:
        'Our team crafts content layouts that enhance impact and maintain consistency with your brand’s message and tone.',
    },
    {
      id: 7,
      icon: <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Optimize for Search Engines (SEO)',
      text:
        'Enhance website visibility through effective search engine optimization techniques.',
      detail:
        'We ensure your website follows SEO best practices, helping users find it naturally through search engines.',
    },
    {
      id: 8,
      icon: <RefreshCw className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Test and Optimize',
      text:
        'Conduct thorough testing across multiple devices and browsers to guarantee a fully responsive and functional website.',
      detail:
        'We conduct thorough quality assurance testing to ensure your website’s functionality, performance, security, and accessibility meet high standards.',
    },
    {
      id: 9,
      icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Choose a Hosting Provider',
      text:
        'Opt for a web hosting provider providing proper storage, bandwidth, security features, and responsive customer support.',
      detail:
        'Scalable hosting solutions are provided to ensure optimal performance, robust security, and cost-efficiency for your website.',
    },
    {
      id: 10,
      icon: <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Launch the Website',
      text:
        'Make the website live for users following thorough testing and final approval procedures.',
      detail:
        'We handle final checks, DNS configuration, and performance monitoring to ensure your website goes live smoothly.',
    },
    {
      id: 11,
      icon: <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Maintain and Update',
      text:
        'Keep the website secure and up-to-date by regularly adding fresh content and applying necessary updates.',
      detail:
        'We provide continuous maintenance services to keep your website secure, fast, and updated with the latest technologies.',
    },
  ]

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
          {/* Header with blue gradient */}
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-700 dark:to-gray-800 px-6 md:px-10 py-10 text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Website Creation
            </h1>
            <div className="w-20 h-1 bg-white/50 mx-auto my-4 rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-medium text-center text-blue-100">
              How Does It Work?
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-center mb-10">
              <div className="px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Our 11-Step Process for Building Exceptional Websites
              </div>
            </div>

            <div className="space-y-8">
              {websiteSteps.map((step) => (
                <div key={step.id} className="relative group">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0 relative">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-800 shadow-sm group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60 transition-colors duration-300">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {step.id}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-blue-600 dark:text-blue-400 text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {step.text}
                      </p>
                      <div className="mt-2 pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                        <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connector line */}
                  {step.id < websiteSteps.length && (
                    <div className="hidden sm:block absolute left-6 top-14 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 ml-[0.3rem]"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Website types section */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Types of Websites We Create
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'E-Commerce Stores',
                    description: 'Online shopping with secure payments',
                  },
                  {
                    title: 'Corporate Websites',
                    description: 'Professional business presence',
                  },
                  {
                    title: 'Portfolio Sites',
                    description: 'Showcase creative work',
                  },
                  {
                    title: 'Blogs & News',
                    description: 'Content-focused platforms',
                  },
                  {
                    title: 'Web Applications',
                    description: 'Interactive user experiences',
                  },
                  {
                    title: 'Landing Pages',
                    description: 'Conversion-optimized pages',
                  },
                ].map((type, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {type.title}
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">
                      {type.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebsiteCreationService
