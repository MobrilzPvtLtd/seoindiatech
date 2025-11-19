import React from 'react'
import Image from 'next/image'
import { Check, Users, TrendingUp, Shield, LineChart, EyeClosedIcon } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    title: 'Brand Strategy & Positioning',
    description:
      'We study your market, competitors, and audience to create a clear and compelling brand strategy. This ensures your brand stands out with a strong message and well-defined positioning.',
    icon: <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: 'Content Marketing Services',
    description:( <>  Engaging content brings your brand to life. Through blogs, web copy, social posts, and
storytelling, our <Link href={'/services/content-marketing'} className='text-blue-400 underline'>content marketing services </Link>  help deliver your brand’s message in a meaningful
and impactful way.</>),
    icon: <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: 'Social Media Branding',
    description:
     ( <>  With tailored <Link href={'/services/social-media-marketing'} className='text-blue-400 underline'>social media marketing services </Link> , we build a consistent brand image across
platforms like Instagram, Facebook, LinkedIn, and more. From visuals to tone, every post
reinforces your brand identity.</>),
    icon: <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: 'Search Visibility &amp; SEO Support',
    description:
      ( <>  Brand visibility depends on strong search presence. Our integrated <Link href={'/services/seo'} className='text-blue-400 underline'>seo services </Link> ensure your
      brand ranks better, reaches more users, and gains long-term digital authority.</>),
    icon: <EyeClosedIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
]

const Why = () => {
  return (
    <section className="bg-white dark:bg-gray-900 px-6 md:px-8 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 lg:gap-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-[500px]">
            <Image
              src="/images/services/digitalpresence.png"
              alt="Digital Branding"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            <Check className="w-4 h-4 mr-2" />
            <span>Brand Excellence</span>
          </div>

          <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold mb-4">
           What Our Digital Branding Services Include
          </h2>

          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mb-6"></div>

          {/* <p className="text-justify text-gray-700 dark:text-gray-300 mb-4">
            Today's{' '}
            <span className="font-bold text-gray-900 dark:text-white">
              5.3 billion internet users worldwide
            </span>{' '}
            form opinions and make decisions based on digital interactions. A
            weak digital brand can cost businesses visibility, trust, and
            long-term customer relationships.
          </p>
          <p className="text-gray-800 dark:text-gray-200 font-bold mb-6">
            A well-executed digital branding strategy:
          </p> */}

          {/* Enhanced Bullet List */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-justify">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Optional CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button className="hidden cursor-pointer bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-lg transition-colors flex items-center">
              Learn more about our branding services
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why
