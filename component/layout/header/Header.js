import { ChevronDown, Menu, X } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import ServiceDropdown from './ServiceDropdown'
import SolutionDropdown from './SolutionDropdown'
import ThemeToggleButton from './ThemeToggleButton'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
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
        { title: 'AEO', slug: 'answer-engine-optimization' },
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
      slug: 'design-development',
      services: [{ title: 'UI/UX Design', slug: 'ui-ux-design' }],
    },
  ]

  const solutions = [
    { title: 'Automation', icon: '⚙️', slug: 'automation' },
    { title: 'Workflow', icon: '📋', slug: 'workflow' },
    { title: 'Promotion & Ads', icon: '📣', slug: 'promotion-and-ads' },
    { title: 'CRM & Tools', icon: '👥', slug: 'crm-and-tools' },
    { title: 'Market Research', icon: '🔍', slug: 'market-research' },
    { title: 'Website Creation', icon: '🌐', slug: 'website-creation' },
  ]

  const servicesTimeoutRef = useRef(null)
  const solutionsTimeoutRef = useRef(null)
  const servicesRef = useRef(null)
  const solutionsRef = useRef(null)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    setMounted(true)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth >= 768) setIsMenuOpen(false)
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
      if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

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
    if (isSolutionsOpen) setIsSolutionsOpen(false)
  }

  const handleServicesMouseEnter = () => {
    if (windowWidth >= 768) {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current)
        servicesTimeoutRef.current = null
      }
      setIsServicesOpen(true)
      setIsSolutionsOpen(false)
    }
  }

  const handleServicesMouseLeave = () => {
    if (windowWidth >= 768) {
      servicesTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150)
    }
  }

  const handleSolutionsMouseEnter = () => {
    if (windowWidth >= 768) {
      if (solutionsTimeoutRef.current) {
        clearTimeout(solutionsTimeoutRef.current)
        solutionsTimeoutRef.current = null
      }
      setIsSolutionsOpen(true)
      setIsServicesOpen(false)
    }
  }

  const handleSolutionsMouseLeave = () => {
    if (windowWidth >= 768) {
      solutionsTimeoutRef.current = setTimeout(() => setIsSolutionsOpen(false), 300)
    }
  }

  const handleServicesClick = () => {
    if (windowWidth < 768) {
      setIsServicesOpen(!isServicesOpen)
      setIsSolutionsOpen(false)
    }
  }

  const handleSolutionsClick = () => {
    if (windowWidth < 768) {
      setIsSolutionsOpen(!isSolutionsOpen)
      setIsServicesOpen(false)
    }
  }

  const handleCardClick = () => {
    setIsServicesOpen(false)
    setIsSolutionsOpen(false)
  }

  // Underlined nav link — replaces the old jumpy border-b hover
  const NavLink = ({ href, children }) => (
    <Link
      href={href}
      className="relative text-[15px] text-slate-600 dark:text-slate-300 font-medium py-1 transition-colors duration-200 hover:text-slate-900 dark:hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  )

  const contactButtonClass =
    'inline-flex items-center justify-center bg-slate-900 dark:bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-500 hover:shadow-[0_8px_20px_-6px_rgba(37,99,235,0.55)] active:scale-95 whitespace-nowrap'

  const mobileContactButtonClass =
    'block bg-slate-900 dark:bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold text-center transition-all duration-300 hover:bg-blue-600 active:scale-95 w-full shadow-md'

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40">
        <div
          className={`
            mx-3 mt-3 md:mx-6 md:mt-4 max-w-7xl md:mx-auto
            flex items-center justify-between h-16 md:h-[68px]
            px-4 sm:px-6 lg:px-8
            rounded-full border
            backdrop-blur-xl backdrop-saturate-150
            transition-all duration-300 ease-out
            ${
              scrolled
                ? 'bg-white/85 dark:bg-slate-900/85 border-slate-200/70 dark:border-slate-700/60 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.18)]'
                : 'bg-white/60 dark:bg-slate-900/60 border-white/40 dark:border-slate-700/40 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.08)]'
            }
          `}
        >
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            {mounted ? (
              <Link href="/" className="block">
                <div className="relative w-10 h-10 md:w-14 md:h-14 cursor-pointer">
                  <Image
                    src="/sit.png"
                    alt="SIT Logo"
                    fill
                    sizes="(max-width: 768px) 40px, 56px"
                    className="object-contain object-left dark:invert"
                    priority
                  />
                </div>
              </Link>
            ) : (
              <div className="w-10 h-10 md:w-14 md:h-14 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-full" />
            )}
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-7 lg:gap-9">
              <li><NavLink href="/">Home</NavLink></li>
              <li><NavLink href="/who-we-are">Who We Are</NavLink></li>

              <li
                className="relative"
                ref={servicesRef}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className="flex items-center gap-1 text-[15px] text-slate-600 dark:text-slate-300 font-medium py-1 transition-colors duration-200 hover:text-slate-900 dark:hover:text-white"
                  aria-expanded={isServicesOpen}
                  aria-controls="services-dropdown"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  id="services-dropdown"
                  className={`
                    absolute left-1/2 top-full mt-3 -translate-x-1/2
                    w-full max-w-[80vw] md:w-[600px] lg:w-[900px]
                    bg-white dark:bg-slate-800 rounded-2xl z-30
                    border border-slate-200/70 dark:border-slate-700/60
                    shadow-[0_20px_50px_-12px_rgba(15,23,42,0.25)]
                    transition-all duration-200 origin-top
                    ${isServicesOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
                  `}
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                  onClick={handleCardClick}
                >
                  <ServiceDropdown />
                </div>
              </li>

              <li><NavLink href="/seo-packages">Packages</NavLink></li>
              <li><NavLink href="/blog">Blog</NavLink></li>
            </ul>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggleButton />
            <button
              className="menu-toggle text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2 z-50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggleButton />
            <Link href="/contact-us" className={contactButtonClass}>
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        ref={mobileMenuRef}
        className={`
          fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white dark:bg-slate-900
          shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col md:hidden
        `}
      >
        <div className="flex justify-between items-center p-5 border-b border-slate-200 dark:border-slate-800">
          <span className="text-lg font-bold text-slate-900 dark:text-white">Menu</span>
          <button
            onClick={toggleMobileMenu}
            aria-label="Close menu"
            className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full p-1.5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul className="space-y-1 p-4">
            <li>
              <Link
                href="/"
                className="block text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white px-4 py-3 rounded-xl font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/who-we-are"
                className="block text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white px-4 py-3 rounded-xl font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Who We Are
              </Link>
            </li>

            <li>
              <button
                onClick={handleServicesClick}
                className="flex justify-between items-center w-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white px-4 py-3 rounded-xl font-medium transition-colors"
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
                      <button
                        onClick={() =>
                          setOpenCategory(openCategory === category.slug ? null : category.slug)
                        }
                        className="flex justify-between items-center w-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-medium tracking-wide"
                      >
                        {category.title}
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-300 ${openCategory === category.slug ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {openCategory === category.slug && (
                        <ul className="pl-4 mt-1 space-y-0.5 border-l border-slate-200 dark:border-slate-700 ml-4">
                          {category.services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/services/${service.slug}`}
                                className="block text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-sm transition-colors"
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
              <Link
                href="/seo-packages"
                className="block text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white px-4 py-3 rounded-xl font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="block text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white px-4 py-3 rounded-xl font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-6 border-t border-slate-200 dark:border-slate-800 mt-auto">
          <Link href="/contact-us" className={mobileContactButtonClass} onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header