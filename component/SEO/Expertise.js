import React from 'react'
import {
  Search,
  FileSearch,
  Gauge,
  Link,
  MapPin,
  ShoppingCart,
} from 'lucide-react'

const Expertise = () => {
  // SEO expertise cards data
  const expertiseCards = [
    {
      icon: <FileSearch className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'In-Depth SEO Audit & Strategy Development',
      description:
        'Our process begins with a full website audit, uncovering technical gaps and mapping out a roadmap to enhance performance and visibility.',
      benefits: [
        'Website performance assessment',
        'Competitor and industry analysis',
        'Keyword strategy development',
      ],
    },
    {
      icon: <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Keyword Research & Content Optimization',
      description:
        'We target high-value search terms and optimize your content to reach the right audience.',
      benefits: [
        'Advanced keyword research and clustering',
        'On-page SEO optimization (titles, meta descriptions, headers, etc.)',
        'Engaging, search-optimized content creation',
      ],
    },
    {
      icon: <Gauge className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Technical SEO for Performance & Usability',
      description:
        'Well-organized websites improve both usability and search visibility. We use technical SEO to keep your site running at its best.',
      benefits: [
        'Website speed optimization',
        'Mobile-first indexing & responsive design',
        'XML sitemaps & structured data implementation',
      ],
    },
    {
      icon: <Link className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Link Building & Authority Growth',
      description:
        'High-quality backlinks boost your domain authority and credibility. We create natural links from reputable sources to enhance your online reputation.',
      benefits: [
        'White-hat link-building strategies',
        'Guest blogging & outreach campaigns',
        'Local citations & authoritative directory listings',
      ],
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Local SEO – Own Your Market',
      description:
        'Our local SEO strategies increase your presence in local searches and map listings.',
      benefits: [
        'Google Business Profile optimization',
        'Local citations and NAP consistency',
        'Geo-targeted content strategies',
      ],
    },
    {
      icon: (
        <ShoppingCart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      ),
      title: 'E-Commerce SEO for More Sales',
      description:
        'Our e-commerce SEO strategies improve product pages, categories, and site speed, driving more traffic and higher conversions.',
      benefits: [
        'SEO-friendly product descriptions',
        'Schema markup for rich snippets',
        'Conversion rate optimization (CRO)',
      ],
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 px-4 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-50/70 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto text-center relative z-10">
        {/* Header section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <span>Our Expertise</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-5xl font-bold leading-tight text-gray-900 dark:text-white text-center mx-auto mb-6">
            Data-Driven SEO Solutions That Accelerate Your Business
          </h2>

          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto mb-8"></div>

          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Our approach combines expertise, creativity, and analytics to drive
            real, measurable outcomes for your business.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {expertiseCards.map((card, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-sm h-full flex flex-col bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-all duration-300">
                {/* Icon header */}
                <div className="mb-4 p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg w-fit">
                  {card.icon}
                </div>

                <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-4">
                  {card.title}
                </h3>

                <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mb-4"></div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {card.description}
                </p>

                <ul className="text-gray-700 dark:text-gray-300 space-y-2 mt-auto">
                  {card.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="min-w-[8px] h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
