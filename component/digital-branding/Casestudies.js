import React from 'react'

const Casestudies = () => {
  const data = [
    {
      image:
        'https://www.digitalyzeit.com/wp-content/uploads/2024/07/277564223_439538341365247_7258142149719093139_n.jpg',
      title: 'E-Commerce Brand Transformation',
      description: `A struggling e-commerce brand approached us with low engagement and declining sales. After implementing a complete digital branding overhaul, including a revamped website, SEO optimization, and social media rebranding, the brand saw a 150% increase in organic traffic and a 75% conversion boost within six months.`,
    },
    {
      image:
        'https://www.digitalyzeit.com/wp-content/uploads/2024/07/creativity360pro_logo.jpeg',
      title: 'Local Business Goes National',
      description: `A small local business wanted to expand its reach beyond its city. Through our targeted digital branding strategy, we created a compelling brand story, optimized its online presence, and launched strategic PPC campaigns. The result? A 200% growth in online inquiries and an expansion into three new states within a year.`,
    },
    {
      image:
        'https://www.digitalyzeit.com/wp-content/uploads/2024/07/advyra_logo.jpeg',
      title: 'SaaS Company Gains Industry Authority',
      description: `A SaaS startup needed to establish credibility in a competitive market. Our solution included expert content marketing, social proof integration, and high-impact SEO strategies. The outcome? A 3x increase in lead generation and an invitation to speak at a major industry event.`,
    },
  ]

  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center lg:flex-row gap-12">
        {/* Left Heading Section */}
        <div className="lg:w-1/3 w-full">
          <p className="text-blue-700 text-sm font-semibold border-b-2 border-blue-700 w-fit mb-2">
            SEO India Tech
          </p>
          <h2 className="text-4xl md:text-8xl font-bold text-gray-900 leading-tight mb-4">
            Case Studies
          </h2>
          <p className="text-2xl text-gray-700 font-medium">
            Real Results from Real Brands
          </p>
        </div>

        {/* Right Cards Section */}
        <div className="lg:w-2/3 w-full flex flex-col gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md rounded-xl flex flex-col md:flex-row items-center md:items-start p-5 gap-5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Casestudies
