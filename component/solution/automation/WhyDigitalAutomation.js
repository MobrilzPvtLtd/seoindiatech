import {
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  ArrowRight,
} from 'lucide-react'

export default function WhyDigitalAutomation() {
  const benefits = [
    {
      icon: Zap,
      title: 'Lightning-Fast Workflows',
      desc: 'Automate repetitive tasks and accelerate daily operations.',
    },
    {
      icon: Clock,
      title: 'Save Hundreds of Hours',
      desc: 'Let your team focus on strategy, not manual work.',
    },
    {
      icon: TrendingUp,
      title: 'Scale Without Stress',
      desc: 'Grow your business while systems run smoothly in the background.',
    },
    {
      icon: Users,
      title: 'Happier Teams & Customers',
      desc: 'Faster responses, fewer errors, better satisfaction.',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      desc: 'Real-time reports and insights at your fingertips.',
    },
    {
      icon: Shield,
      title: 'Zero Infrastructure Hassle',
      desc: 'We manage everything — you just enjoy the results.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Zap className="w-5 h-5 animate-pulse" />
            The Future of Business Efficiency Is Here
          </div>

          <h2 className="text-5xl  font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
            Why{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">
              Digital Automation
            </span>{' '}
            Matters
            <br />
            for <span className="text-indigo-600">Modern Businesses</span>
          </h2>

          <p className="text-xl  text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Every business depends on smooth workflows, accurate data, and
            real-time communication. Whether you run an e-commerce store,
            service-based company, or local enterprise, our digital automation
            services ensure that your internal processes run with maximum
            efficiency. Automation allows your team to focus on strategic
            activities rather than repetitive tasks. Through structured
            workflows and integrated tools, your business experiences faster
            delivery, reduced operational delays, and improved customer
            satisfaction.
          </p>
          <p className="text-xl  text-gray-600 dark:text-gray-300 max-w-5xl mx-auto  leading-relaxed pt-2">
            As a leading provider of digital automation as a service, we help
            companies adopt automation technologies without the complexity of
            maintaining infrastructure. From automated reporting to integrated
            marketing funnels, our solutions are built to simplify your daily
            operations and enhance performance at every level.
          </p>
        </div>
      </div>
    </section>
  )
}
