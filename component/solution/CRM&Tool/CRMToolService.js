import React from 'react'
import { Users, CheckSquare, Link, Settings, Shield } from 'lucide-react'

const CRMToolService = () => {
  const crmSections = [
    {
      id: 1,
      icon: <Users className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'CRM in Action - Streamlining Success Through Customer Focus',
      text:
        'Our CRM system centralizes customer data, streamlines communication, and fosters lasting relationships through powerful features like contact management, sales automation, and in-depth customer analytics.',
      detail:
        'With our CRM platform, every customer interaction becomes an opportunity-delivering personalized experiences that boost loyalty and accelerate revenue growth.',
    },
    {
      id: 2,
      icon: (
        <CheckSquare className="w-6 h-6 text-primary dark:text-accent" />
      ),
      title: 'Mastering the Art of Task and Project Management',
      text:
        'Effective project and task management is key to organizational success. Our tools streamline collaboration, task delegation, and project tracking. From simple to-do lists to complex timelines, they help your team stay organized, focused, and consistently deliver results.',
      detail:
        'Customizable workflows, Gantt charts, and real-time progress tracking enable teams to collaborate seamlessly, no matter where they are.',
    },
    {
      id: 3,
      icon: <Link className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Connected Systems for Effortless Workflows',
      text:
        'A key strength of our CRM and management tools is their seamless integration with other business applications. By connecting email, calendars, and third-party apps, we create a unified ecosystem that saves time, minimizes errors, and ensures smooth information flow across your organization.',
      detail:
        'With our API-first approach, you can effortlessly connect to over 200 popular business tools and platforms, ensuring smooth integration and workflow continuity.',
    },
    {
      id: 4,
      icon: <Settings className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Tailored Solutions for Your Business',
      text:
        'Every business is unique, and so are its requirements. Our CRM and management tools are fully customizable, letting you tailor everything from CRM fields to project workflows. This flexibility empowers your team to shape the system perfectly around your business processes.',
      detail:
        'No-code tools allow quick, independent updates by your staff, minimizing both time and cost overheads.',
    },
    {
      id: 5,
      icon: <Shield className="w-6 h-6 text-primary dark:text-accent" />,
      title: 'Secure and Compliant Solutions',
      text:
        'In today\'s world of rising cyber threats, protecting your business data is critical. Our CRM and management tools incorporate robust security measures, adhere to industry regulations, and prioritize data privacy, giving you complete peace of mind.',
      detail:
        'Our platform complies with GDPR, CCPA, and industry-specific standards, supported by regular security audits and continuous updates.',
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
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-700 dark:to-surface  px-6 md:px-10 py-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              CRM & Management Tools
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
                Complete Business Solution
              </div>
            </div>

            <div className="space-y-10">
              {crmSections.map((section) => (
                <div
                  key={section.id}
                  className="flex flex-col sm:flex-row gap-6 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-lg border border-primary/30 dark:border-primary/40 shadow-sm group-hover:bg-primary/15 dark:group-hover:bg-primary/25 transition-colors duration-300">
                      {section.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="bg-gray-50 dark:bg-card/80 border border-border dark:border-border rounded-xl p-6 shadow-sm">
                      <h3 className="font-semibold text-primary dark:text-accent text-xl mb-3">
                        {section.title}
                      </h3>
                      <p className="text-body mb-4">
                        {section.text}
                      </p>
                      <div className="mt-3 pl-4 border-l-2 border-primary/30 dark:border-primary/40">
                        <p className="text-muted text-sm">
                          {section.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature highlights */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold text-heading mb-6 text-center">
                Key Features at a Glance
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Contact Management',
                    value: 'Centralized database',
                  },
                  { title: 'Sales Pipeline', value: 'Visual deal tracking' },
                  { title: 'Task Automation', value: 'Workflow efficiency' },
                  {
                    title: 'Reporting & Analytics',
                    value: 'Data-driven insights',
                  },
                  { title: 'Mobile Access', value: 'Work from anywhere' },
                  {
                    title: 'Email Integration',
                    value: 'Unified communications',
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-background dark:bg-primary/15 border border-primary/20 dark:border-primary/40 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-lg font-semibold text-heading mb-1">
                      {feature.title}
                    </div>
                    <div className="text-sm text-primary dark:text-accent">
                      {feature.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Productivity Increase', value: '45%' },
            { title: 'Customer Retention', value: '85%' },
            { title: 'ROI', value: '3.8x' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card dark:bg-card p-6 rounded-xl shadow-md text-center border border-border"
            >
              <div className="text-3xl font-bold text-primary dark:text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-body">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Why Market Research Matters Section */}
      <div className="mt-16">
        <div className="bg-card dark:bg-card rounded-2xl shadow-xl border border-border p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-4">
            Why CRM Tools Matter for Growing Businesses
          </h2>

          <p className="text-body text-center max-w-3xl mx-auto mb-10">
            Modern businesses succeed when they understand customer behavior,
            track performance, and create personalized customer journeys. CRM
            tools act as the foundation of successful digital operations by:
          </p>

          {/* Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Improving customer communication and engagement',
                icon: 'Target',
              },
              {
                title: 'Recording every interaction and sales touchpoint',
                icon: 'TrendingUp',
              },
              {
                title: 'Enhancing collaboration across departments',
                icon: 'Search',
              },
              {
                title: 'Automating follow-ups and task assignments',
                icon: 'BarChart2',
              },
              {
                title:
                  'Providing data that supports smarter business decisions',
                icon: 'Users',
              },
            ].map((item, i) => {
              const Icon =
                item.icon === 'Target'
                  ? require('lucide-react').Target
                  : item.icon === 'TrendingUp'
                  ? require('lucide-react').TrendingUp
                  : item.icon === 'Search'
                  ? require('lucide-react').Search
                  : item.icon === 'BarChart2'
                  ? require('lucide-react').BarChart2
                  : require('lucide-react').Users

              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-background/40 border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20/40 border border-primary/30/50 dark:border-primary/30 flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-heading mb-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom paragraph */}
          <p className="text-body text-center max-w-3xl mx-auto mt-10">
            With our structured <b>crm tool management,</b> companies can build
            lasting customer relationships while eliminating manual errors and
            redundant tasks. CRM tools don't just support sales workflows-they
            help businesses convert opportunities faster and retain existing
            customers more effectively.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="bg-card dark:bg-card rounded-2xl shadow-xl border border-border p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-4">
            Complete CRM Tool Management for Every Industry
          </h2>

          <p className="text-body text-center max-w-3xl mx-auto mb-10">
            Every business has different customer processes, sales cycles,
            communication channels, and reporting needs. Our CRM specialists
            analyze your business structure and build tailored CRM architecture
            that fits your workflow-no generalized solutions, only strategic and
            customized deployments.
          </p>
          <p className="text-body text-center max-w-3xl mx-auto mb-10">
            Our <b>crm management tool</b> services cover end-to-end support
            including:
          </p>

          {/* Research Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'CRM setup and cloud configuration',
                icon: 'Users',
              },
              {
                title: 'Custom workflow mapping and dashboards',
                icon: 'TrendingUp',
              },
              {
                title: 'Automated lead nurturing',
                icon: 'Search',
              },
              {
                title: 'Product and service tracking',
                icon: 'Target',
              },
              {
                title: 'Sales performance reporting',
                icon: 'BarChart2',
              },
              {
                title: 'Role-based access and data permissions',
                icon: 'TrendingUp',
              },
            ].map((item, i) => {
              const Icon =
                item.icon === 'Users'
                  ? require('lucide-react').Users
                  : item.icon === 'TrendingUp'
                  ? require('lucide-react').TrendingUp
                  : item.icon === 'Search'
                  ? require('lucide-react').Search
                  : item.icon === 'Target'
                  ? require('lucide-react').Target
                  : require('lucide-react').BarChart2

              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-background/40 border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20/40 border border-primary/30/50 dark:border-primary/30 flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-heading mb-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-body text-center max-w-3xl mx-auto mt-10">
            We ensure your CRM becomes a productive, user-friendly, and
            high-performing asset for daily operations.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CRMToolService
