import React from 'react';
import { 
  Palette, 
  Share2, 
  Layout, 
  FileText, 
  BarChart 
} from 'lucide-react';

const approachItems = [
  {
    title: "Brand Identity Development",
    description: "We create a powerful, cohesive brand identity that resonates with your target audience. This includes:",
    icon: <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    items: [
      { label: "Logo & Visual Elements", detail: "Unique, professional logo and visual assets." },
      { label: "Color Palette & Typography", detail: "Reflects your brand's personality." },
      { label: "Brand Voice & Messaging", detail: "A tone that connects to your audience." }
    ]
  },
  {
    title: "Social Media Branding",
    description: "We align your social presence with your brand identity across all platforms.",
    icon: <Share2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    items: [
      { label: "Social profile optimization" },
      { label: "Content strategy & management" },
      { label: "Influencer/community engagement" }
    ]
  },
  {
    title: "Website & UX/UI Design",
    description: "We design user-friendly, SEO-optimized websites with a great user experience.",
    icon: <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    items: [
      { label: "Responsive, mobile-first design" },
      { label: "Conversion-focused layouts" },
      { label: "Accessible and intuitive navigation" }
    ]
  },
  {
    title: "Content & Storytelling",
    description: "We craft engaging content that builds emotional connections:",
    icon: <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    items: [
      { label: "SEO-driven blogs" },
      { label: "Compelling website copy" },
      { label: "Video & multimedia storytelling" }
    ]
  },
  {
    title: "Digital Advertising & Visibility",
    description: "We increase your brand's reach using:",
    icon: <BarChart className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    items: [
      { label: "Search Engine Optimization (SEO)" },
      { label: "Pay-Per-Click (PPC) campaigns" },
      { label: "Retargeting ads" }
    ]
  }
];

const Approach = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-8 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            <span>Our Process</span>
          </div>
          
          <h2 className="text-gray-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Our Digital Branding Approach
          </h2>
          
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mb-6"></div>
          
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            At <span className="text-blue-700 dark:text-blue-400 font-bold">Digitalyzeit,</span> we craft digital brands that leave a lasting impact.
            Our approach is data-driven, creative, and tailored to your business goals.
          </p>
        </div>

        {/* Cards Grid - Reimagined as a more visually appealing layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approachItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white pt-1.5">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {item.description}
                </p>
                
                <ul className="space-y-3">
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-start gap-3">
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 dark:text-gray-100">
                          {subItem.label}
                        </span>
                        {subItem.detail && (
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {' – '}{subItem.detail}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-400"></div>
            </div>
          ))}
        </div>
        
        {/* Optional: Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Ready to establish a powerful digital brand that connects with your audience and drives business growth?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Schedule a Brand Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Approach;