import React from 'react';
import {
  Briefcase,
  Network,
  Mail,
  MessageSquare,
  Folder,
  Paintbrush2
} from 'lucide-react';

const integrations = [
  {
    title: 'Google My Business',
    description:
      'Monitor Google My Business reviews and engage with customers through direct messaging.',
    icon: <MessageSquare className="w-12 h-12 text-red-400 mx-auto" />,
  },
  {
    title: 'Hootsuite Syndicator',
    description:
      'Hootsuite schedules posts, monitors interactions, and analyzes social media performance from one platform.',
    icon: <Network className="w-12 h-12 text-red-400 mx-auto" />,
  },
  {
    title: 'MailChimp',
    description:
      'Share and track and monitor your email campaigns in Mailchimp and integrate it with your system.',
    icon: <Mail className="w-12 h-12 text-red-400 mx-auto" />,
  },
  {
    title: 'HubSpot',
    description:
      'Integrate your HubSpot for marketing, sales, and customer service, designed to enhance customer engagement and drive business growth.',
    icon: <Briefcase className="w-12 h-12 text-red-400 mx-auto" />,
  },
  {
    title: 'Google Drive',
    description:
      'Integration with Google Drive enables seamless access and collaboration, streamlining document management across platforms.',
    icon: <Folder className="w-12 h-12 text-red-400 mx-auto" />,
  },
  {
    title: 'Canva',
    description:
      'Canva is a user-friendly graphic design platform for creating a variety of visual content, including social media posts, presentations, and marketing materials.',
    icon: <Paintbrush2 className="w-12 h-12 text-red-400 mx-auto" />,
  },
];

const NetworkSection = () => {
  return (
    <section className="bg-red-400 px-6 py-20">
      <div className="text-center text-white max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">Network Integrations</h1>
        <p className="mt-4 text-lg">
          Connect assets and data across your most used social networks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
        {integrations.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow hover:shadow-lg border hover:border-red-400 transition-all duration-300 text-center"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center max-w-6xl mx-auto pt-16">
            Begin Your Digital Branding Success Story with <span className="text-blue-700">Digitalyzeit</span> Today!
        </h1>
        <p className='text-gray-900 text-center max-w-5xl mx-auto pt-10'>At <span className='text-blue-700 font-bold'>Digitalyzeit,</span> we’re dedicated to helping you achieve your digital branding goals. Whether you aim to boost brand awareness, drive engagement, or increase conversions, our team of experts guides you every step of the way.</p>
        <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg mx-auto block mt-10">
            Learn More
        </button>

    </section>
  );
};

export default NetworkSection;
