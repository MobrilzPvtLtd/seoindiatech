import React from 'react';
import { Phone, Mail, Globe, CircleDot, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaFacebook } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleCallUs = () => {
    // Add your phone number here
    window.open('tel:+91-8010355718', '_self');
  };

  const handleEmailUs = () => {
    // Add your email here  
    window.open('mailto:sales@seoindiatech.com', '_self');
  };

  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Drive brand visibility and engage your target audience through strategic social media campaigns and content.',
      icon: '📣',
      slug: 'social-media-marketing'
    },
    {
      title: 'Innovative UI/UX Solutions',
      description: 'Design and develop intuitive, user-friendly interfaces to enhance user experience and engagement.',
      icon: '🎨',
      slug: 'ui-ux-design'
    },
    {
      title: 'Digital Branding',
      description: 'Build a strong, cohesive brand identity across digital platforms to attract and retain your audience.',
      icon: '🌟',
      slug: 'digital-branding'
    },
    {
      title: 'Content Marketing',
      description: 'Create and distribute valuable, relevant content to attract and engage your target audience effectively.',
      icon: '✍️',
      slug: 'content-marketing'
    },
    {
      title: 'Search Engine Optimization',
      description: 'Optimize your website to rank higher on search engines, increasing visibility and organic traffic.',
      icon: '🔍',
      slug: 'seo'
    },
    {
      title: '(PPC) Advertising',
      description: 'Run targeted pay-per-click campaigns to drive traffic and conversions with measurable results.',
      icon: '📈',
      slug: 'ppc-advertising'
    },
  ];

  const solutions = [
    {
      title: 'Automation',
      description: 'Automation streamlines tasks, boosting efficiency and reducing errors, so your team can focus on strategic goals.',
      icon: '⚙️',
      slug: 'automation'
    },
    {
      title: 'Workflow',
      description: 'Workflow streamlines and automates tasks, ensuring a smooth, efficient, and organized process from start to finish.',
      icon: '📋',
      slug: 'workflow'
    },
    {
      title: 'Promotion & Ads',
      description: 'Drive brand visibility and attract your target audience through strategic messaging and impactful campaigns.',
      icon: '📣',
      slug: 'promotion-and-ads'
    },
    {
      title: 'CRM & Tools',
      description: 'CRM and management tools optimize customer relationships and streamline operations for better efficiency and growth.',
      icon: '👥',
      slug: 'crm-and-tools'
    },
    {
      title: 'Market Research',
      description: 'Market research provides valuable insights into consumer behavior and emerging trends, guiding smart business decisions.',
      icon: '🔍',
      slug: 'market-research'
    },
    {
      title: 'Website Creation',
      description: 'Website creation involves designing and developing an engaging, functional online presence tailored to your brand\'s needs.',
      icon: '🌐',
      slug: 'website-creation'
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Newsletter Section */}
      <div className="bg-blue-50 dark:bg-blue-900/30 py-10 border-b border-blue-100 dark:border-blue-800/30 hidden ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:max-w-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Stay updated with the latest trends, tips, and insights in digital marketing.
              </p>
            </div>
            <div className="w-full md:w-auto flex-1 max-w-md">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Link href="/" className="block relative">
                <div className="relative w-32 h-16">
                  <Image
                    src="/sit.png"
                    alt="Logo"
                    fill
                    sizes="128px"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center',
                    }}
                    className="bg-white dark:bg-gray-800 p-1.5 rounded-md shadow-sm"
                  />
                </div>
              </Link>
            </div>
            <p className="text-lg font-medium">
              Start Your Business & <span className="font-bold text-blue-600 dark:text-blue-400">GROW WITH US</span>
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We help businesses transform their digital presence and achieve sustainable growth through innovative marketing solutions.
            </p> 
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <CircleDot className="w-3 h-3 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Solutions</h3>
            <ul className="space-y-3">
              {solutions.slice(0, 6).map((solution) => (
                <li key={solution.slug}>
                  <Link href={`/solution/${solution.slug}`} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <CircleDot className="w-3 h-3 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <span>{solution.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Contact Info</h3>

            <div className="space-y-4">
              <p className="flex items-start space-x-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <span>E-160, 3rd Floor, Sector 63 Noida, U.P. 201301, India</span>
              </p>

              <p className="flex items-start space-x-3 text-gray-600 dark:text-gray-300">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={handleCallUs}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-indigo-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover:scale-105 transform active:scale-95 border border-blue-700/20 dark:border-blue-500/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </button>

              <button
                onClick={handleEmailUs}
                className="w-full bg-gradient-to-r from-red-500 to-red-700 dark:from-red-600 dark:to-red-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover:scale-105 transform active:scale-95 border border-red-500/20 dark:border-red-500/30"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              &copy; {currentYear} SEO India Tech – All rights reserved
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="https://twitter.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2 hover:scale-105 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={18} />
              <span className="text-sm font-medium">Twitter</span>
            </Link>

            <Link
              href="https://instagram.com"
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 flex items-center gap-2 hover:scale-105 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={18} />
              <span className="text-sm font-medium">Instagram</span>
            </Link>

            <Link
              href="https://youtube.com"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 flex items-center gap-2 hover:scale-105 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={18} />
              <span className="text-sm font-medium">YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;