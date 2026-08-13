'use client'

import { ChevronDown, Home, Menu, X } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import ServiceDropdown from './ServiceDropdown'
import IndustryDropdown from './IndustryDropdown'
import { MegaMenuPanel, megaMenuOpenClass } from './MegaMenu'
import ThemeToggleButton from './ThemeToggleButton'
import Link from 'next/link'
import BrandLogo from '@/component/ui/BrandLogo'
import TopContactBar from '@/component/ui/TopContactBar'
import { INDUSTRY_CATEGORIES, toSlug } from '@/utils/industries'
import { useTheme } from '@/context/ThemeContext'

const Header = () => {
  const router = useRouter()
  const { theme } = useTheme()
  const isDarkTheme = theme === 'dark'
  const isHome = router.pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isIndustryOpen, setIsIndustryOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [openCategory, setOpenCategory] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  const serviceCategories = [
    {
      title: 'SEO',
      slug: 'seo',
      services: [
        { title: 'Local SEO', slug: 'local-seo-service' },
        { title: 'AI SEO', slug: 'ai-seo' },
        { title: 'Small Business SEO', slug: 'small-business-seo' },
        { title: 'E Commerce Seo', slug: 'e-commerce-seo' },
        { title: 'App Store Optimization', slug: 'app-store-optimization' },
        { title: 'GBP Optimization', slug: 'gbp-optimization' },
        { title: 'GEO Optimization', slug: 'generative-engine-optimization' },
        { title: 'AEO Optimization', slug: 'answer-engine-optimization' },
      ],
    },
    {
      title: 'DIGITAL MARKETING',
      slug: 'digital-marketing',
      services: [
        { title: 'Digital Branding', slug: 'digital-branding' },
        { title: 'Content Marketing', slug: 'content-marketing' },
        { title: 'Online Reputation Management', slug: 'online-reputation-management' },
        { title: 'Social Media Optimization', slug: 'social-media-optimization' },
      ],
    },
    {
      title: 'PAID ADVERTISING',
      slug: 'paid-advertising',
      services: [
        { title: 'PPC Advertising', slug: 'ppc-advertising' },
        { title: 'Pay Per Click', slug: 'pay-per-click' },
      ],
    },
    {
      title: 'DESIGN & DEVELOPMENT',
      slug: 'design-and-development',
      services: [{ title: 'UI/UX Design', slug: 'ui-ux-design' }],
    },
  ]

  const servicesTimeoutRef = useRef(null)
  const servicesRef = useRef(null)
  const industryTimeoutRef = useRef(null)
  const industryRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const DESKTOP_NAV_BP = 1280

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth >= DESKTOP_NAV_BP) setIsMenuOpen(false)
    }

    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest('.menu-toggle')
      ) {
        setIsMenuOpen(false)
      }
    }

    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop
      setScrolled(currentScrollTop > 12)
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleResize()
    handleScroll()

    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current)
      if (industryTimeoutRef.current) clearTimeout(industryTimeoutRef.current)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        setIsServicesOpen(false)
        setIsIndustryOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isMenuOpen])

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isServicesOpen) setIsServicesOpen(false)
    if (isIndustryOpen) setIsIndustryOpen(false)
  }

  const handleIndustryMouseEnter = () => {
    if (windowWidth >= DESKTOP_NAV_BP) {
      if (industryTimeoutRef.current) {
        clearTimeout(industryTimeoutRef.current)
        industryTimeoutRef.current = null
      }
      setIsIndustryOpen(true)
      setIsServicesOpen(false)
    }
  }

  const handleIndustryMouseLeave = () => {
    if (windowWidth >= DESKTOP_NAV_BP) {
      industryTimeoutRef.current = setTimeout(() => setIsIndustryOpen(false), 150)
    }
  }

  const handleServicesClick = () => {
    if (windowWidth < DESKTOP_NAV_BP) {
      setIsServicesOpen((open) => !open)
      setIsIndustryOpen(false)
      return
    }
    setIsServicesOpen(true)
    setIsIndustryOpen(false)
  }

  const handleIndustryClick = () => {
    if (windowWidth < DESKTOP_NAV_BP) {
      setIsIndustryOpen((open) => !open)
      setIsServicesOpen(false)
      return
    }
    setIsIndustryOpen(true)
    setIsServicesOpen(false)
  }

  const handleServicesMouseEnter = () => {
    if (windowWidth >= DESKTOP_NAV_BP) {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current)
        servicesTimeoutRef.current = null
      }
      setIsServicesOpen(true)
      setIsIndustryOpen(false)
    }
  }

  const handleServicesMouseLeave = () => {
    if (windowWidth >= DESKTOP_NAV_BP) {
      servicesTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150)
    }
  }

  const handleCardClick = () => {
    setIsServicesOpen(false)
    setIsIndustryOpen(false)
  }

  const darkHeroNav = isHome && !scrolled && !isDarkTheme
  const showTopContactBar = isHome && !scrolled && (windowWidth === 0 || windowWidth >= 768)
  const headerTopClass = showTopContactBar ? 'top-8' : 'top-0'

  const navLinkTextColor = darkHeroNav
    ? 'text-white/90 hover:text-white'
    : isDarkTheme
      ? 'text-white/85 hover:text-white'
      : 'text-heading hover:text-primary'

  const servicesBtnColor = darkHeroNav
    ? 'text-white/90 hover:text-white'
    : isDarkTheme
      ? 'text-white/85 hover:text-white'
      : 'text-heading hover:text-primary'

  const NavLink = ({ href, children }) => {
    const isActive = router.pathname === href
    return (
      <Link
        href={href}
        className={`relative inline-flex items-center min-h-11 px-1 text-xs lg:text-sm font-semibold uppercase tracking-wide whitespace-nowrap shrink-0 transition-colors duration-200
          after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-primary
          after:transition-all after:duration-300 hover:after:w-full
          ${
            isActive
              ? `after:w-full ${darkHeroNav ? 'text-white' : 'text-primary'}`
              : `after:w-0 ${navLinkTextColor}`
          }`}
      >
        {children}
      </Link>
    )
  }

  const contactButtonClass =
    'inline-flex items-center justify-center shrink-0 rounded-full bg-primary hover:bg-primary-hover text-white px-4 lg:px-5 py-2 lg:py-2.5 font-bold text-xs lg:text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-glow-brand active:scale-95 whitespace-nowrap'

  const mobileContactButtonClass =
    'block rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3.5 font-bold text-center transition-all duration-300 active:scale-95 w-full shadow-glow-brand'

  const logoOnDark = darkHeroNav || isDarkTheme

  const headerBarClass =
    darkHeroNav
      ? 'bg-transparent border-transparent'
      : isDarkTheme
        ? 'bg-secondary/95 backdrop-blur-md border-white/10'
        : 'bg-white/95 backdrop-blur-md border-border/60 shadow-sm'

  const headerInnerClass =
    'mx-auto flex w-full max-w-7xl items-center justify-between gap-2 sm:gap-3 h-14 sm:h-16 px-4 sm:px-6 lg:px-8'

  return (
    <>
      {isHome && (
        <div className="hidden md:block">
          <TopContactBar />
        </div>
      )}
      <header
        className={`fixed left-0 right-0 w-full max-w-[100vw] z-50 isolate overflow-hidden transition-[top,transform] duration-300 ease-in-out ${headerTopClass} ${isMenuOpen ? 'z-[80]' : ''}`}
      >
        <div className={`w-full border-b transition-all duration-300 ${headerBarClass}`}>
          <div className={headerInnerClass}>
            <BrandLogo
              variant={logoOnDark ? 'onDark' : 'onLight'}
              size="md"
              priority
            />

            <nav className="hidden xl:flex flex-1 justify-center min-w-0 px-1 overflow-hidden">
              <ul className="flex items-center flex-nowrap gap-x-1.5 lg:gap-x-2 xl:gap-x-3 max-w-full">
                <li>
                  <Link
                    href="/"
                    className={`flex items-center justify-center min-h-11 min-w-11 rounded-lg transition-colors ${darkHeroNav ? 'text-accent hover:text-accent/80' : 'text-primary'}`}
                    aria-label="Home"
                  >
                    <Home size={18} strokeWidth={2} />
                  </Link>
                </li>
                <li><NavLink href="/who-we-are">About Us</NavLink></li>

                <li
                  className="relative"
                  ref={servicesRef}
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <button
                    type="button"
                    onClick={handleServicesClick}
                    className={`flex items-center gap-1 min-h-11 px-2 text-xs lg:text-sm uppercase tracking-wide whitespace-nowrap shrink-0 ${servicesBtnColor} font-semibold transition-colors duration-200`}
                    aria-expanded={isServicesOpen}
                    aria-controls="services-dropdown"
                  >
                    Our Services
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <MegaMenuPanel
                    id="services-dropdown"
                    className={megaMenuOpenClass(isServicesOpen)}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                    onClick={handleCardClick}
                  >
                    <ServiceDropdown closeMenu={handleCardClick} />
                  </MegaMenuPanel>
                </li>

                <li
                  className="relative"
                  ref={industryRef}
                  onMouseEnter={handleIndustryMouseEnter}
                  onMouseLeave={handleIndustryMouseLeave}
                >
                  <button
                    type="button"
                    onClick={handleIndustryClick}
                    className={`flex items-center gap-1 min-h-11 px-2 text-xs lg:text-sm uppercase tracking-wide whitespace-nowrap shrink-0 ${servicesBtnColor} font-semibold transition-colors duration-200`}
                    aria-expanded={isIndustryOpen}
                    aria-controls="industry-dropdown"
                  >
                    Industry
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isIndustryOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <MegaMenuPanel
                    id="industry-dropdown"
                    className={megaMenuOpenClass(isIndustryOpen)}
                    onMouseEnter={handleIndustryMouseEnter}
                    onMouseLeave={handleIndustryMouseLeave}
                    onClick={handleCardClick}
                  >
                    <IndustryDropdown closeMenu={handleCardClick} />
                  </MegaMenuPanel>
                </li>

                <li><NavLink href="/seo-packages">SEO Packages</NavLink></li>
                <li><NavLink href="/blog">Blog</NavLink></li>
                <li><NavLink href="/contact-us">Contact Us</NavLink></li>
              </ul>
            </nav>

            <div className="flex items-center justify-end shrink-0 gap-2">
              <div className="hidden xl:flex items-center gap-2 lg:gap-3">
                <ThemeToggleButton onDark={logoOnDark} compact />
                <Link href="/contact-us" className={contactButtonClass}>
                  Book a Call
                </Link>
              </div>

              <div className="xl:hidden flex items-center gap-2">
                <ThemeToggleButton onDark={logoOnDark} compact />
                <button
                  className={`menu-toggle min-h-11 min-w-11 flex items-center justify-center ${darkHeroNav ? 'text-white hover:bg-white/10' : 'text-heading hover:bg-surface'} focus:outline-none focus:ring-2 focus:ring-primary rounded-full transition-colors`}
                  onClick={toggleMobileMenu}
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[85] xl:hidden transition-opacity duration-300"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        ref={mobileMenuRef}
        className={`
          fixed top-0 right-0 h-full w-[min(100%,20rem)] bg-secondary dark:bg-slate-900
          shadow-2xl z-[90] transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}
          flex flex-col xl:hidden
        `}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex justify-between items-center gap-3 p-4 border-b border-white/10">
            <BrandLogo variant="onDark" size="sm" compact className="min-w-0 max-w-[140px]" />
          <button
            onClick={toggleMobileMenu}
            aria-label="Close menu"
            className="flex items-center justify-center min-h-11 min-w-11 text-white/70 hover:bg-white/10 rounded-full transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain" data-lenis-prevent>
          <ul className="space-y-1 p-4">
            <li>
              <Link
                href="/"
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                  router.pathname === '/'
                    ? 'bg-white/10 text-accent'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/who-we-are"
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                  router.pathname === '/who-we-are'
                    ? 'bg-white/10 text-accent'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Who We Are
              </Link>
            </li>

            <li>
              <button
                onClick={handleServicesClick}
                className="flex justify-between items-center w-full text-white/75 hover:bg-white/10 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isServicesOpen && (
                <ul className="pl-4 mt-1 space-y-1">
                  {serviceCategories.map((category) => (
                    <li key={category.slug}>
                      <div className="flex items-center">
                        <Link
                          href={`/services/${category.slug}`}
                          className="flex-1 text-white/80 hover:bg-white/10 hover:text-white px-4 py-2 rounded-lg text-sm font-medium tracking-wide"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() =>
                            setOpenCategory(openCategory === category.slug ? null : category.slug)
                          }
                          className="flex items-center justify-center min-h-11 min-w-11 text-white/70 hover:text-white rounded-lg shrink-0"
                          aria-label={`Expand ${category.title} services`}
                        >
                          <ChevronDown
                            size={13}
                            className={`transition-transform duration-300 ${openCategory === category.slug ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </div>

                      {openCategory === category.slug && (
                        <ul className="pl-4 mt-1 space-y-0.5 border-l border-white/20 ml-4">
                          {category.services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/services/${service.slug}`}
                                className="block text-white/75 hover:text-accent px-4 py-2 text-sm transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={handleIndustryClick}
                className="flex justify-between items-center w-full text-white/75 hover:bg-white/10 hover:text-white px-4 py-3 rounded-xl font-medium transition-colors"
              >
                Industries
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isIndustryOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isIndustryOpen && (
                <ul className="pl-2 mt-1 space-y-3">
                  <li>
                    <Link
                      href="/industries"
                      className="block text-accent hover:text-white px-4 py-2 text-sm font-semibold transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Industries
                    </Link>
                  </li>
                  {INDUSTRY_CATEGORIES.map((cat) => (
                    <li key={cat.id}>
                      <p className="px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                        {cat.title}
                      </p>
                      <ul className="space-y-0.5">
                        {cat.items.map((item) => (
                          <li key={toSlug(item)}>
                            <Link
                              href={`/industries/${toSlug(item)}`}
                              className="block text-white/60 hover:text-accent px-4 py-1.5 text-sm transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/seo-packages"
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                  router.pathname === '/seo-packages'
                    ? 'bg-white/10 text-accent'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                SEO Packages
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                  router.pathname === '/blog'
                    ? 'bg-white/10 text-accent'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                  router.pathname === '/contact-us'
                    ? 'bg-white/10 text-accent'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-6 border-t border-white/10 mt-auto">
          <Link href="/contact-us" className={mobileContactButtonClass} onClick={() => setIsMenuOpen(false)}>
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header