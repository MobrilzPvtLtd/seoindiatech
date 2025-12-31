import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const Services = () => {
  const router = useRouter()
  const services = [
    {
      title: 'Search Engine Optimization',
      href: '/services/seo',
      desc: (
        <>
          {' '}
          We optimize your website to improve rankings and increase organic
          traffic. From keyword research to link building, our{' '}
          <Link href="/services/seo" className="text-blue-600 underline">
            SEO solutions
          </Link>{' '}
          strengthen your online visibility and help your business reach the
          right audience.{' '}
        </>
      ),
      icon: '🔍',
    },
    {
      title: 'Social Media Marketing',
      href: '/services/social-media-marketing',
      desc: (
        <>
          We create impactful{' '}
          <Link
            href="services/social-media-marketing"
            className="text-blue-600 underline"
          >
            social media strategies
          </Link>{' '}
          to build brand recognition, increase follower engagement, and drive
          meaningful customer interactions across major platforms
        </>
      ),
      icon: '📱',
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      href: '/services/ppc-advertising',
      desc: (
        <>
          {' '}
          Our data-backed{' '}
          <Link
            href="services/ppc-advertising"
            className="text-blue-600 underline"
          >
            PPC campaigns
          </Link>{' '}
          maximize your ROI by targeting high-intent users across Google and
          social platforms. We focus on smart bidding, engaging ad copy, and
          continuous analysis.{' '}
        </>
      ),
      icon: '📈',
    },
    {
      title: 'Content Marketing',
      href: '/services/content-marketing',
      desc:
        'Our team produces high-quality content that educates, informs, and converts. Blogs, web content, infographics, and videos—all crafted to align with your brand’s message.',
      icon: '✍️',
    },
    {
      title: 'Online Reputation Management',
      href: '#',
      desc:
        'We monitor, manage, and protect your digital reputation to maintain a positive brand image across all online channels.',
      icon: '📧',
    },
    {
      title: 'Web Design and Development',
      href: '/solution/website-creation',
      desc:
        'We build fast, responsive, and user-friendly websites that support your marketing goals and deliver seamless customer experiences.',
      icon: '🌐',
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 pt-4 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Left two columns for cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => router.push(service.href)}
                className="cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 
                 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl 
                 shadow-md hover:shadow-lg transition-all duration-300 
                 hover:translate-y-[-5px] border border-blue-100 
                 dark:border-gray-600"
              >
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                <p
                  className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify"
                  onClick={(e) => e.stopPropagation()} // 👈 IMPORTANT
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right side description card */}
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-700 dark:to-gray-800 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white dark:from-gray-300 dark:to-white">
                Your Reliable Digital Marketing Service Agency
              </h2>
              <p className="mb-8 text-sm sm:text-base leading-relaxed text-blue-100 dark:text-gray-400 text-justify">
                As a dedicated digital marketing service agency, we use advanced
                tools, proven methodologies, and industry expertise to ensure
                your brand stands out. Our integrated services help you connect
                with your target audience, build brand trust, and generate
                profitable growth. With us, you get transparent execution,
                consistent reporting, and strong campaign optimization that
                drives long-term success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contactus">
                <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 shadow-md border border-blue-700/20 dark:border-gray-500/30 text-center">
                  Get Started
                </button>
              </Link>
              <Link href="/blog">
                <button className="hidden cursor-pointer bg-transparent text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border border-white/20 text-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
