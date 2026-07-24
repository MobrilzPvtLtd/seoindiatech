import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FaXTwitter, FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa6'
import { CircleDot } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
 
const NewFooter = () => {
  const currentYear = new Date().getFullYear()
 
  const handleCallUs = () => window.open('tel:+91-8076676731', '_self')
  const handleEmailUs = () => window.open('mailto:sales@seoindiatech.com', '_self')
 
  const services = [
    { title: 'Social Media Marketing', slug: 'social-media-marketing' },
    { title: 'Innovative UI/UX Solutions', slug: 'ui-ux-design' },
    { title: 'Digital Branding', slug: 'digital-branding' },
    { title: 'Content Marketing', slug: 'content-marketing' },
    { title: 'Search Engine Optimization', slug: 'seo' },
    { title: '(PPC) Advertising', slug: 'ppc-advertising' },
  ]
 
  const solutions = [
    { title: 'Automation', slug: 'automation' },
    { title: 'Workflow', slug: 'workflow' },
    { title: 'Promotion & Ads', slug: 'promotion-and-ads' },
    { title: 'CRM & Tools', slug: 'crm-and-tools' },
    { title: 'Market Research', slug: 'market-research' },
    { title: 'Website Creation', slug: 'website-creation' },
  ]
 
  const locations = ['Noida', 'Delhi', 'Hyderabad', 'Pune', 'Chandigarh', 'Mumbai', 'Jaipur']
 
  const socials = [
    { icon: FaXTwitter, href: 'https://x.com/seoindiatech411', label: 'Twitter', hover: 'hover:text-white' },
    { icon: FaInstagram, href: 'https://www.instagram.com/seoindiatech/', label: 'Instagram', hover: 'hover:text-pink-400' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@SEOIndiatech', label: 'YouTube', hover: 'hover:text-red-400' },
    { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61582651577922', label: 'Facebook', hover: 'hover:text-blue-400' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/seo-india-tech/', label: 'LinkedIn', hover: 'hover:text-blue-400' },
  ]
 
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="relative w-32 h-16">
              <Link href="/" className="block relative w-full h-full">
                <Image
                  src="/sit.png"
                  alt="SEO India Tech Logo"
                  fill
                  sizes="128px"
                  style={{ objectFit: 'contain', objectPosition: 'left' }}
                  className="bg-white p-1.5 rounded-md"
                />
              </Link>
            </div>
            <p className="text-base font-medium text-gray-200">
              Start Your Business &{' '}
              <span className="font-bold text-blue-400">GROW WITH US</span>
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              We help businesses transform their digital presence and achieve sustainable growth
              through innovative marketing solutions.
            </p>
          </div>
 
          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white tracking-wide">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white tracking-wide">Our Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.slug}>
                  <Link
                    href={`/solution/${solution.slug}`}
                    className="flex items-center text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span>{solution.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white tracking-wide">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <p className="flex items-start space-x-3 text-gray-500">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>E 160, E Block, Sector 63, Noida, Hazratpur Wajidpur, Uttar Pradesh 201301</span>
              </p>
              <p className="flex items-start space-x-3 text-gray-500">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </p>
            </div>
 
            <div className="pt-1 space-y-3">
              <button
                onClick={handleCallUs}
                className="w-full bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-blue-50 hover:scale-[1.02] active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </button>
              <button
                onClick={handleEmailUs}
                className="w-full border border-white/15 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-white/10 hover:scale-[1.02] active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
 
      {/* SEO Locations */}
      <div className="relative border-t border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500">
          <span className="font-semibold text-gray-300">Our Presence:</span>{' '}
          {locations.map((city, i) => (
            <React.Fragment key={city}>
              <Link
                href={`/seo-services/seo-services-in-${city.toLowerCase()}`}
                className="text-blue-400 font-medium hover:text-blue-300 hover:underline"
              >
                {city}
              </Link>
              {i < locations.length - 1 && ' | '}
            </React.Fragment>
          ))}
        </div>
      </div>
 
      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <p className="text-gray-500 text-sm">&copy; {currentYear} SEO India Tech &ndash; All rights reserved</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
 
          <div className="flex flex-wrap justify-center gap-3">
            {socials.map(({ icon: Icon, href, label, hover }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`h-9 w-9 flex items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-white/30 hover:-translate-y-0.5 ${hover}`}
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
 
      {/* Oversized faded wordmark, like a signature watermark closing out the page */}
      <div className="relative select-none pointer-events-none pb-2 pt-6 overflow-hidden">
        <p
          className="text-center font-extrabold leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(3.5rem, 14vw, 11rem)',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.02) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          SEO INDIA TECH
        </p>
      </div>
    </footer>
  )
}
 
export default NewFooter
 
 