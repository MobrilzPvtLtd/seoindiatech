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
      icon: <Target className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Define Purpose and Goals',
      text:
        'Determine the primary objective of your website, such as selling products, providing information, generating leads, or building a community.',
      detail:
        'We begin with a detailed strategy session to define your target audience, business goals, and key success metrics.',
    },
    {
      id: 2,
      icon: <Globe className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Choose a Domain Name',
      text:
        'Choose a domain name that represents your brand, ensuring it is memorable, easy to pronounce, and simple to type.',
      detail:
        'We help secure the ideal web address to match your brand identity and improve search visibility.',
    },
    {
      id: 3,
      icon: <FileCode className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Select a Website Platform',
      text:
        'Select a CMS or website platform suited to your technical abilities and specific project requirements.',
      detail:
        'Our team recommends an optimal technology stack tailored to your project, whether using WordPress, React, Next.js, or custom development.',
    },
    {
      id: 4,
      icon: <Layout className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Design the Website',
      text:
        'Define the website\'s appearance and layout, covering color schemes, fonts, imagery, and UI design elements.',
      detail:
        'We create visual prototypes and mockups to help you envision your website\'s design prior to building it.',
    },
    {
      id: 5,
      icon: <Code className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Develop and Build',
      text:
        'Implement website designs by applying appropriate programming languages and frameworks to create a working digital platform.',
      detail:
        'We write high-quality code to bring your website to life, ensuring responsiveness and peak performance.',
    },
    {
      id: 6,
      icon: <Database className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Create and Organize Content',
      text:
        'Create and organize website content across text, images, videos, and multimedia to enhance user experience.',
      detail:
        'Our team crafts content layouts that enhance impact and maintain consistency with your brand\'s message and tone.',
    },
    {
      id: 7,
      icon: <Search className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Optimize for Search Engines (SEO)',
      text:
        'Enhance website visibility through effective search engine optimization techniques.',
      detail:
        'We ensure your website follows SEO best practices, helping users find it naturally through search engines.',
    },
    {
      id: 8,
      icon: <RefreshCw className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Test and Optimize',
      text:
        'Conduct thorough testing across multiple devices and browsers to guarantee a fully responsive and functional website.',
      detail:
        'We conduct thorough quality assurance testing to ensure your website\'s functionality, performance, security, and accessibility meet high standards.',
    },
    {
      id: 9,
      icon: <Server className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Choose a Hosting Provider',
      text:
        'Opt for a web hosting provider providing proper storage, bandwidth, security features, and responsive customer support.',
      detail:
        'Scalable hosting solutions are provided to ensure optimal performance, robust security, and cost-efficiency for your website.',
    },
    {
      id: 10,
      icon: <Rocket className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Launch the Website',
      text:
        'Make the website live for users following thorough testing and final approval procedures.',
      detail:
        'We handle final checks, DNS configuration, and performance monitoring to ensure your website goes live smoothly.',
    },
    {
      id: 11,
      icon: <Lock className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Maintain and Update',
      text:
        'Keep the website secure and up-to-date by regularly adding fresh content and applying necessary updates.',
      detail:
        'We provide continuous maintenance services to keep your website secure, fast, and updated with the latest technologies.',
    },
  ]

  return (
    <section className="bg-background py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-card dark:bg-card shadow-xl rounded-2xl overflow-hidden">
          {/* Header with blue gradient */}
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-700 dark:to-surface px-6 md:px-10 py-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Website Creation
            </h2>
            <div className="w-20 h-1 bg-white/50 mx-auto my-4 rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-medium text-center text-white/90">
              How Does It Work?
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-center mb-10">
              <div className="px-6 py-3 bg-background dark:bg-primary/15 text-primary dark:text-accent rounded-full text-sm font-medium">
                Our 11-Step Process for Building Exceptional Websites
              </div>
            </div>

            <div className="space-y-8">
              {websiteSteps.map((step) => (
                <div key={step.id} className="relative group">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0 relative">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg border border-primary/30 dark:border-primary/40 shadow-sm group-hover:bg-primary/15 dark:group-hover:bg-primary/25 transition-colors duration-300">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary dark:bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {step.id}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-primary dark:text-accent text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-body mb-3">
                        {step.text}
                      </p>
                      <div className="mt-2 pl-4 border-l-2 border-primary/30 dark:border-primary/40">
                        <p className="text-muted text-sm italic">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connector line */}
                  {step.id < websiteSteps.length && (
                    <div className="hidden sm:block absolute left-6 top-14 bottom-0 w-0.5 bg-primary/15 dark:bg-primary/20 ml-[0.3rem]"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Website types section */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold text-heading mb-6 text-center">
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
                    className="bg-background dark:bg-primary/15 border border-primary/20 dark:border-primary/40 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-lg font-semibold text-heading mb-1">
                      {type.title}
                    </div>
                    <div className="text-sm text-primary dark:text-accent">
                      {type.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="bg-white dark:bg-background rounded-3xl shadow-2xl border border-border p-6 md:p-10 relative overflow-hidden">
          {/* Section Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-heading text-center mb-12">
            Why Choose Our Top Website Creation Services
          </h2>

          {/* 2-Column Split Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto">
            {/* LEFT CARD */}
            <div className="flex flex-col h-full bg-gradient-to-br from-cream to-white dark:from-primary/15 dark:to-surface rounded-3xl shadow-lg border border-primary/30 dark:border-primary/30 p-6 md:p-8 hover:shadow-2xl">
              {/* Accent Line */}
              <div className="w-16 h-1 bg-primary dark:bg-accent rounded-full mb-4"></div>

              <p className="text-heading dark:text-gray-300 leading-relaxed text-lg">
                <span className="font-semibold text-heading">
                  Strategic Planning &amp; Market Research
                </span>
                <br />
                <br />
                Your website is more than just pages - it's your digital
                storefront, brand ambassador, and lead generation engine. That's
                why we start with through{' '}
                <a
                  href="https://www.seoindiatech.com/solution/market-research"
                  className="text-primary"
                >
                  market research
                </a>{' '}
                and strategy sessions to define your target audience, goals, and
                success metrics. This critical first step ensures we build a
                website that not only looks great, but also resonates with your
                audience and supports your business objectives.
                <br />
                <br />
                We analyze your competitors, discover what works in your
                industry, and use those insights to shape a website structure
                optimized for conversions. The result? A smart online platform
                that's not just visually appealing, but purpose-driven - giving
                you an edge among the top website creation services available.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="flex flex-col h-full bg-gradient-to-br from-cream to-white dark:from-purple-900/20 dark:to-surface rounded-3xl shadow-lg border border-primary/20 dark:border-primary/30 p-6 md:p-8 hover:shadow-2xl">
              {/* Accent Line */}
              <div className="w-16 h-1 bg-primary dark:bg-purple-400 rounded-full mb-4"></div>

              <p className="text-heading dark:text-gray-300 leading-relaxed text-lg">
                <span className="font-semibold text-heading">
                  Tailored Design &amp; User Experience
                </span>
                <br />
                <br />
                Design matters. A clean, intuitive layout - with easy
                navigation, smart UI/UX, and responsive design - can make or
                break a visitor's impression. Our design team selects colors,
                fonts, imagery, and layouts that match your brand identity and
                engage your visitors.
                <br />
                <br />
                Whether your site is a sleek corporate site, a dynamic
                e-commerce store, or a creative portfolio, we ensure every
                element is optimized for performance and user satisfaction. This
                commitment to quality helps us deliver on our promise of
                professional website creation services that impress from the
                first glance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebsiteCreationService
