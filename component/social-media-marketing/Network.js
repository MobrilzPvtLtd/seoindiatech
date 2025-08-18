import React from 'react';
import {
  Briefcase,
  Network,
  Mail,
  MessageSquare,
  Folder,
  Paintbrush2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const integrations = [
  {
    title: 'Google My Business',
    description:
      'Effectively manage your reputation by monitoring Google My Business reviews and engaging with customers via direct messaging.',
    icon: <MessageSquare className="w-10 h-10 text-red-500 dark:text-red-400" />,
  },
  {
    title: 'Hootsuite Syndicator',
    description:
      'Hootsuite is a unified platform for social media management, enabling you to schedule posts, monitor interactions, and analyze performance from a single dashboard.',
    icon: <Network className="w-10 h-10 text-red-500 dark:text-red-400" />,
  },
  {
    title: 'MailChimp',
    description:
      'We help you share, track, and monitor your email campaigns in Mailchimp, and integrate that data with your existing systems to give you a complete view of your marketing performance.',
    icon: <Mail className="w-10 h-10 text-red-500 dark:text-red-400" />,
  },
  {
    title: 'HubSpot',
    description:
      'By integrating HubSpot, you can strategically align your marketing, sales, and customer service operations, leading to stronger customer engagement and sustainable business growth.',
    icon: <Briefcase className="w-10 h-10 text-red-500 dark:text-red-400" />,
  },
  {
    title: 'Google Drive',
    description:
      'Integrate with Google Drive to streamline your document management, giving you seamless access and real-time collaboration with your team.',
    icon: <Folder className="w-10 h-10 text-red-500 dark:text-red-400" />,
  },
  {
    title: 'Canva',
    description:
      'Design stunning visuals for anything from social media to marketing materials with Canvas user-friendly graphic design platform.',
    icon: <Paintbrush2 className="w-10 h-10 text-red-500 dark:text-red-400" />,
  },
];

const NetworkSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-300 dark:from-gray-900 dark:to-gray-700 px-6 py-20 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 dark:bg-blue-700 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 dark:bg-blue-700 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center px-3 py-1.5 mb-4 bg-blue-400/20 dark:bg-blue-500/20 backdrop-blur-sm text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            <Network className="w-4 h-4 mr-2" />
            <span>Third-Party Platforms</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">Network Integrations</h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Connect and synchronize your assets and data across all your social networks for a more unified and efficient workflow.
          </p>
        </div>

        {/* Integration cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 hover:border-red-400 dark:hover:border-red-500 transition-all duration-300 group"
            >
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
                {item.description}
              </p>
              <div className="mt-6 text-center">
                <button className="text-red-500 dark:text-red-400 font-medium text-sm flex items-center mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-10 max-w-6xl mx-auto shadow-xl relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-200 dark:border-blue-700 rounded-tl-xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-blue-200 dark:border-blue-700 rounded-br-xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight text-center max-w-4xl mx-auto pt-6">
            Ready to Achieve Your Digital Branding Goals? Partner with <span className="text-blue-700 dark:text-blue-500">SEO India Tech</span> Today!
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mt-6 text-lg">
            At <span className="text-blue-700 dark:text-blue-500 font-semibold">SEO India Tech,</span> At SEO India Tech, we're dedicated to helping you achieve your digital branding goals. Whether you aim to boost brand awareness, drive engagement, or increase conversions, our team of experts guides you every step of the way.
          </p>
          
          <Link href="/services/digital-branding" className="flex justify-center mt-10">
            <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 hover:bg-blue-800 dark:hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;