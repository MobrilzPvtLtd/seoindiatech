import React from 'react';
import { 
  Palette, 
  Share2, 
  Layout, 
  FileText, 
  BarChart 
} from 'lucide-react';
import Link from 'next/link';

const approachItems = [
  {
    title: "A consistent and recognizable identity",
    description: "We develop a cohesive, memorable brand presence that speaks directly to your target market. This includes:",
    icon: <Palette className="w-6 h-6 text-primary dark:text-accent" />,
    items: [
      { label: "Logo & Visual Elements", detail: "Unique, professional logo and visual assets." },
      { label: "Color Palette & Typography", detail: "Reflects your brand's personality." },
      { label: "Brand Voice & Messaging", detail: "A tone that connects to your audience." }
    ]
  },
  {
    title: "Higher trust and credibility",
    description: "We ensure your social media presence reflects your brand identity consistently across every platform.",
    icon: <Share2 className="w-6 h-6 text-primary dark:text-accent" />,
    items: [
      { label: "Social profile optimization" },
      { label: "Content strategy & management" },
      { label: "Influencer/community engagement" }
    ]
  },
  {
    title: "Stronger customer engagement",
    description: "We craft responsive, SEO-optimized websites focused on seamless user interaction.",
    icon: <Layout className="w-6 h-6 text-primary dark:text-accent" />,
    items: [
      { label: "Responsive, mobile-first design" },
      { label: "Conversion-focused layouts" },
      { label: "Accessible and intuitive navigation" }
    ]
  },
  {
    title: "Clear messaging across platforms",
    description: "We develop engaging narratives that connect hearts and minds:",
    icon: <FileText className="w-6 h-6 text-primary dark:text-accent" />,
    items: [
      { label: "SEO-driven blogs" },
      { label: "Compelling website copy" },
      { label: "Video & multimedia storytelling" }
    ]
  },
  {
    title: "Digital Advertising & Visibility",
    description: "Our approach extends your brand influence with:",
    icon: <BarChart className="w-6 h-6 text-primary dark:text-accent" />,
    items: [
      { label: "Search Engine Optimization (SEO)" },
      { label: "Pay-Per-Click (PPC) campaigns" },
      { label: "Retargeting ads" }
    ]
  }
];

const Approach = () => {
  return (
    <section className="bg-white dark:bg-background py-16 px-4 sm:px-8 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-background dark:bg-primary/20/40 text-primary dark:text-accent rounded-full text-sm font-medium mb-4">
            <span>Our Process</span>
          </div>
          
          <h2 className="text-heading text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Why Digital Branding Services Matter
          </h2>
          
          <div className="w-20 h-1 bg-primary dark:bg-primary rounded-full mb-6"></div>
          
          <p className="text-body text-lg">
           A strong brand influences how customers perceive your business. With our professional <Link href={'/services/digital-branding'} className='text-accent underline'> digital
           branding services</Link>  you get
          </p>
        </div>

        {/* Cards Grid - Reimagined as a more visually appealing layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approachItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-card dark:bg-card border border-border shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 bg-background dark:bg-primary/15 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-heading pt-1.5">
                    {item.title}
                  </h3>
                </div>
                
                {/* <p className="text-muted text-sm mb-4">
                  {item.description}
                </p> */}
                
                {/* <ul className="space-y-3">
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-start gap-3">
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-accent"></div>
                      </div>
                      <div>
                        <span className="font-semibold text-heading dark:text-gray-100">
                          {subItem.label}
                        </span>
                        {subItem.detail && (
                          <span className="text-muted text-sm">
                            {' - '}{subItem.detail}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul> */}
              </div>
              
              {/* <div className="h-1 w-full bg-gradient-to-r from-primary to-primary-hover dark:from-primary dark:to-accent"></div> */}
            </div>
          ))}
        </div>
        
        {/* Optional: Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-body mb-6 max-w-2xl mx-auto">
            Ready to turn your brand into a powerful digital presence that delivers results?
          </p>
          <button className="cursor-pointer bg-gradient-to-r from-primary to-secondary hover:bg-primary-hover dark:from-surface dark:to-background dark:hover:bg-primary-hover text-white font-semibold py-3 px-8 rounded-full transition-colors">
            Schedule a Brand Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Approach;