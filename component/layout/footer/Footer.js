import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FaXTwitter, FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa6'
import { HiArrowUpRight } from 'react-icons/hi2'
import Link from 'next/link'
import Image from 'next/image'

/**
 * Whole footer now dark. Two shades carry the depth: `#0B0D14` for the
 * main body, `#14161F` for the CTA band and closing wordmark band, so
 * the two bookend moments still read as distinct without breaking into
 * light/dark zones. Every text, border, and hover color below was
 * re-picked for contrast against dark, not lifted from the light version.
 */

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const Footer = () => {
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
    { icon: FaXTwitter, href: 'https://x.com/seoindiatech411', label: 'Twitter', hover: 'hover:text-white hover:border-white/30' },
    { icon: FaInstagram, href: 'https://www.instagram.com/seoindiatech/', label: 'Instagram', hover: 'hover:text-pink-400 hover:border-pink-400/40' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@SEOIndiatech', label: 'YouTube', hover: 'hover:text-red-400 hover:border-red-400/40' },
    { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61582651577922', label: 'Facebook', hover: 'hover:text-blue-400 hover:border-blue-400/40' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/seo-india-tech/', label: 'LinkedIn', hover: 'hover:text-blue-400 hover:border-blue-400/40' },
  ]

  return (
    <footer className="relative bg-[#0B0D14] text-slate-300">
      {/* Transition edge — marks where the page ends and the footer begins */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#5B7CFA]/40 to-transparent" />

      {/* Main Footer — hairlines organize the grid instead of whitespace */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerParent}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 min-h-[320px] overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-0"
        >
          <span
            className="font-extrabold leading-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(2.5rem, 9vw, 8rem)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            SEO INDIA TECH
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] divide-y divide-white/[0.08] lg:divide-y-0 lg:divide-x lg:divide-white/[0.08]">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="relative w-32 h-16">
              <Link href="/" className="block relative w-full h-full">
                <Image
                  src="/sit.png"
                  alt="SEO India Tech Logo"
                  fill
                  sizes="128px"
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
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
          <motion.div variants={fadeUp} className="space-y-5 py-8 lg:py-0 lg:px-8">
            <h3 className="text-xs font-semibold text-white tracking-[0.15em] uppercase">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span>{service.title}</span>
                    <HiArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#5B7CFA]" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={fadeUp} className="space-y-5 py-8 lg:py-0 lg:px-8">
            <h3 className="text-xs font-semibold text-white tracking-[0.15em] uppercase">Our Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.slug}>
                  <Link
                    href={`/solution/${solution.slug}`}
                    className="group flex items-center justify-between text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span>{solution.title}</span>
                    <HiArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#5B7CFA]" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp} className="space-y-5 pt-8 lg:pt-0 lg:pl-8">
            <h3 className="text-xs font-semibold text-white tracking-[0.15em] uppercase">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <p className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-4 h-4 text-[#5B7CFA] mt-0.5 flex-shrink-0" />
                <span>E 160, E Block, Sector 63, Noida, Hazratpur Wajidpur, Uttar Pradesh 201301</span>
              </p>
              <p className="flex items-start space-x-3 text-slate-400">
                <Mail className="w-4 h-4 text-[#5B7CFA] mt-0.5 flex-shrink-0" />
                <span>sales@seoindiatech.com</span>
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5">
              <span className="text-xs text-slate-400">
                <Clock className="w-3 h-3 inline -mt-0.5 mr-1 text-slate-500" />
                Mon&ndash;Fri, 9:00&ndash;6:00
              </span>
            </div>

            <div className="pt-2 border-t border-white/[0.08]">
              <p className="pt-4 text-sm font-semibold text-white">Ready to move your numbers?</p>
              <div className="flex gap-2.5 pt-3">
                <button
                  onClick={handleCallUs}
                  className="flex-1 bg-white text-[#0B0D14] px-4 py-2.5 rounded-full font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 hover:bg-slate-100 hover:-translate-y-0.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Us
                </button>
                <button
                  onClick={handleEmailUs}
                  className="flex-1 border border-white/20 text-white px-4 py-2.5 rounded-full font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 hover:bg-white/10 hover:-translate-y-0.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Locations + bottom bar, unified into one closing strip */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        className="relative border-t border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row lg:items-center gap-4 border-b border-white/[0.08]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 shrink-0">Our presence</p>
          <div className="flex flex-wrap gap-2">
            {locations.map((city) => (
              <Link
                key={city}
                href={`/seo-services/seo-services-in-${city.toLowerCase()}`}
                className="rounded-full border border-white/[0.1] px-3 py-1 text-xs text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/[0.05] transition-colors duration-200"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-xs text-slate-500">
            <p>&copy; {currentYear} SEO India Tech &ndash; All rights reserved</p>
            <div className="flex items-center gap-3">
              <Link href="/privacy-policy" className="hover:text-[#5B7CFA] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#5B7CFA] transition-colors">Terms of Service</Link>
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
                className={`h-9 w-9 flex items-center justify-center rounded-full border border-white/[0.1] text-slate-500 transition-all duration-300 hover:-translate-y-0.5 ${hover}`}
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer