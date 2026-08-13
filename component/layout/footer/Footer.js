import React from 'react'
import { Globe, Award, Users } from 'lucide-react'
import { FaXTwitter, FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { HiArrowUpRight } from 'react-icons/hi2'
import Link from 'next/link'
import BrandLogo from '@/component/ui/BrandLogo'
import FooterQuickContact from './FooterQuickContact'
import { WHATSAPP_URL } from '@/component/ui/WhatsAppButton'
import { LOCATION_CITIES } from '@/utils/internalLinks'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { title: 'SEO Services', slug: 'seo' },
    { title: 'Local SEO', slug: 'local-seo-service' },
    { title: 'AI SEO', slug: 'ai-seo' },
    { title: 'GBP Optimization', slug: 'gbp-optimization' },
    { title: 'Content Marketing', slug: 'content-marketing' },
    { title: 'PPC Advertising', slug: 'ppc-advertising' },
    { title: 'Digital Marketing', slug: 'digital-marketing' },
    { title: 'Small Business SEO', slug: 'small-business-seo' },
  ]

  const solutions = [
    { title: 'Automation', slug: 'automation' },
    { title: 'Workflow', slug: 'workflow' },
    { title: 'Promotion & Ads', slug: 'promotion-and-ads' },
    { title: 'CRM & Tools', slug: 'crm-and-tools' },
    { title: 'Market Research', slug: 'market-research' },
    { title: 'Website Creation', slug: 'website-creation' },
  ]

  const company = [
    { title: 'About Us', href: '/who-we-are' },
    { title: 'Industries', href: '/industries' },
    { title: 'Blog', href: '/blog' },
    { title: 'SEO Packages', href: '/seo-packages' },
    { title: 'Contact Us', href: '/contact-us' },
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Terms & Conditions', href: '/terms' },
  ]

  const globalMarkets = ['USA', 'UK', 'Australia', 'Europe', 'UAE', 'Canada']
  const indiaCities = LOCATION_CITIES

  const socials = [
    { icon: FaWhatsapp, href: WHATSAPP_URL, label: 'WhatsApp', external: true },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/seo-india-tech/', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://x.com/seoindiatech411', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/seoindiatech/', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@SEOIndiatech', label: 'YouTube' },
    { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61582651577922', label: 'Facebook' },
  ]

  const companyHighlights = [
    { icon: Award, value: '14+', label: 'Years of excellence' },
    { icon: Users, value: '500+', label: 'Global clients' },
    { icon: Globe, value: '12+', label: 'Countries served' },
  ]

  return (
    <footer className="relative bg-secondary text-slate-300 overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 hero-grid-bg opacity-25" />
      <div className="pointer-events-none absolute inset-0 hero-glow-primary opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-x-8 lg:gap-y-10">
          {/* Brand + stats */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <BrandLogo variant="onDark" size="lg" compact className="max-w-[175px]" />
            <p className="text-sm leading-relaxed text-white/80 max-w-sm">
              Global 360-degree digital growth partner - AI-powered SEO, performance marketing,
              and technology for measurable business outcomes.
            </p>

            <div className="max-w-md space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">
                  Follow us
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white/70 transition-all duration-300 hover:border-accent/45 hover:bg-white/10 hover:text-accent hover:-translate-y-0.5 ${
                        label === 'WhatsApp' ? 'hover:text-[#25D366] hover:border-[#25D366]/45' : ''
                      }`}
                    >
                      <Icon size={18} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-4">
                {companyHighlights.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex flex-col items-center px-2 text-center first:pl-0 last:pr-0">
                    <Icon className="mb-2 h-4 w-4 text-accent" aria-hidden />
                    <p className="font-mono text-lg font-bold leading-none text-white tabular-nums">
                      {value}
                    </p>
                    <p className="mt-1.5 text-[10px] leading-snug text-white/60">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.14em]">Services</h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group flex items-center justify-between gap-2 text-sm text-white/75 hover:text-white transition-colors"
                  >
                    <span>{item.title}</span>
                    <HiArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 text-accent transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.14em]">Solutions</h3>
            <ul className="space-y-2.5">
              {solutions.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/solution/${item.slug}`}
                    className="group flex items-center justify-between gap-2 text-sm text-white/75 hover:text-white transition-colors"
                  >
                    <span>{item.title}</span>
                    <HiArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 text-accent transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.14em]">Company</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <FooterQuickContact />
          </div>
        </div>

        {/* Markets */}
        <div className="mt-10 pt-8 border-t border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 shrink-0">
              <Globe className="h-4 w-4 text-accent" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                Global Markets
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {globalMarkets.map((market) => (
                <span
                  key={market}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                >
                  {market}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 shrink-0 sm:w-28">
              India Offices
            </p>
            <div className="flex flex-wrap gap-2">
              {indiaCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/seo-services/${city.slug}`}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-white/10 bg-black/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/65">
            &copy; <span suppressHydrationWarning>{currentYear}</span> SEO INDIA TECH. All rights reserved.
          </p>
          <p className="text-xs text-white/60">
            Engineering measurable growth worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
