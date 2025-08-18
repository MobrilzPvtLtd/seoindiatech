import { ChevronDown, ChevronUp, CircleDot, Menu, X } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import ServiceDropdown from './ServiceDropdown';
import SolutionDropdown from './SolutionDropdown';
import ThemeToggleButton from './ThemeToggleButton';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Scroll behavior state
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  // Services and solutions data for mobile view
  const services = [
    {
      title: 'Social Media Marketing',
      icon: '📣',
      slug: 'social-media-marketing'
    },
    {
      title: 'Innovative UI/UX Solutions',
      icon: '🎨',
      slug: 'ui-ux-design'
    },
    {
      title: 'Digital Branding',
      icon: '🌟',
      slug: 'digital-branding'
    },
    {
      title: 'Content Marketing',
      icon: '✍️',
      slug: 'content-marketing'
    },
    {
      title: 'Search Engine Optimization',
      icon: '🔍',
      slug: 'seo'
    },
    {
      title: '(PPC) Advertising',
      icon: '📈',
      slug: 'ppc-advertising'
    },
  ];

  const solutions = [
    {
      title: 'Automation',
      icon: '⚙️',
      slug: 'automation'
    },
    {
      title: 'Workflow',
      icon: '📋',
      slug: 'workflow'
    },
    {
      title: 'Promotion & Ads',
      icon: '📣',
      slug: 'promotion-and-ads'
    },
    {
      title: 'CRM & Tools',
      icon: '👥',
      slug: 'crm-and-tools'
    },
    {
      title: 'Market Research',
      icon: '🔍',
      slug: 'market-research'
    },
    {
      title: 'Website Creation',
      icon: '🌐',
      slug: 'website-creation'
    },
  ];

  // Refs for timeout management
  const servicesTimeoutRef = useRef(null);
  const solutionsTimeoutRef = useRef(null);
  const servicesRef = useRef(null);
  const solutionsRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // For smooth scroll detection
  const lastScrollTop = useRef(0);
  const scrollingTimer = useRef(null);

  // Set mounted state when component mounts to avoid hydration issues
  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Handle clicks outside of mobile menu to close it
    const handleClickOutside = (e) => {
      if (isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    // Improved scroll handler with better detection
    const handleScroll = () => {
      // Don't hide the header when the mobile menu is open
      if (isMenuOpen) {
        setVisible(true);
        return;
      }

      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

      // Determine if we're at the top of the page
      const isAtTop = currentScrollTop < 10;
      setAtTop(isAtTop);

      // If at top, always show header
      if (isAtTop) {
        setVisible(true);
      } else {
        // Detect scroll direction with a threshold
        const scrollDifference = Math.abs(currentScrollTop - lastScrollTop.current);

        // Only process significant scroll movements (5px threshold)
        if (scrollDifference > 5) {
          // Scrolling down
          if (currentScrollTop > lastScrollTop.current) {
            setVisible(false);
          }
          // Scrolling up
          else {
            setVisible(true);
          }
        }
      }

      // Save current scroll position
      lastScrollTop.current = currentScrollTop;

      // Reset timer for when scrolling stops
      clearTimeout(scrollingTimer.current);
      scrollingTimer.current = setTimeout(() => {
        if (window.scrollY < 10) {
          setVisible(true);
        }
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleResize();

    // Clear any timeouts on unmount
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
      if (scrollingTimer.current) clearTimeout(scrollingTimer.current);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  // Toggle body scroll when menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // For mobile devices
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
    if (isSolutionsOpen) setIsSolutionsOpen(false);
  };

  // Functions to handle dropdown hover behavior for desktop with delay
  const handleServicesMouseEnter = () => {
    if (windowWidth >= 768) {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
        servicesTimeoutRef.current = null;
      }
      setIsServicesOpen(true);
      setIsSolutionsOpen(false);
    }
  };

  const handleServicesMouseLeave = () => {
    if (windowWidth >= 768) {
      servicesTimeoutRef.current = setTimeout(() => {
        setIsServicesOpen(false);
      }, 100);
    }
  };

  const handleSolutionsMouseEnter = () => {
    if (windowWidth >= 768) {
      if (solutionsTimeoutRef.current) {
        clearTimeout(solutionsTimeoutRef.current);
        solutionsTimeoutRef.current = null;
      }
      setIsSolutionsOpen(true);
      setIsServicesOpen(false);
    }
  };

  const handleSolutionsMouseLeave = () => {
    if (windowWidth >= 768) {
      solutionsTimeoutRef.current = setTimeout(() => {
        setIsSolutionsOpen(false);
      }, 300);
    }
  };

  // Functions for mobile dropdown toggle (click behavior)
  const handleServicesClick = () => {
    if (windowWidth < 768) {
      setIsServicesOpen(!isServicesOpen);
      setIsSolutionsOpen(false);
    }
  };

  const handleSolutionsClick = () => {
    if (windowWidth < 768) {
      setIsSolutionsOpen(!isSolutionsOpen);
      setIsServicesOpen(false);
    }
  };

  // NEW: Function to close dropdown when a card is clicked
  const handleCardClick = () => {
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
  };

  // Contact button styling
  const contactButtonClass = "bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-700 dark:to-gray-900 text-white px-10 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 whitespace-nowrap shadow-md border border-blue-700/20 dark:border-gray-500/30";
  const mobileContactButtonClass = "block bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-indigo-700 text-white px-8 py-3 rounded-full font-medium text-center transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 w-full shadow-md border border-blue-700/20 dark:border-blue-500/30";

  return (
    <>
      {/* Main Header */}
      <header
        className={`
          fixed top-0 left-0 w-full z-40
          transform transition-transform duration-300 ease-out will-change-transform
          ${visible ? 'translate-y-0' : '-translate-y-full'}
          ${atTop || isMenuOpen ? 'bg-white dark:bg-gray-900' : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'}
          border-b border-gray-200 dark:border-gray-800 
          shadow-md dark:shadow-gray-800/30
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32 flex items-center justify-between ">
          {/* Logo with Next.js Image and Link to Homepage */}
          {/* <div className="flex items-center"> */}
            {mounted ? (
              <Link href="/" passHref>
                <div className="relative w-16 h-10 md:w-28 md:h-16 mr-2 cursor-pointer my-0.5">
                  <Image
                    src="/SIT-logo2.png"
                    alt="SIT Logo"
                    fill
                    sizes="(max-width: 768px) 64px, 96px"
                    className="object-contain object-center dark:invert"
                    priority
                  />
                </div>
              </Link>
            ) : (
              <div className="w-16 h-10 md:w-20 md:h-12 mr-2 bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
            )}
          {/* </div> */}

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-4 lg:space-x-10">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="text-sm md:text-sm lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-bold hover:border-b-2 hover:border-blue-500 py-2 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/who-we-are"
                  className=" whitespace-nowrap text-sm md:text-sm lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-bold hover:border-b-2 hover:border-blue-500 py-2 transition-colors duration-300"
                >
                  Who We Are
                </Link>
              </li>
              {/* Desktop Services Dropdown */}
              <li
                className="relative flex items-center"
                ref={servicesRef}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className="text-sm md:text-sm lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-bold hover:border-b-2 hover:border-blue-500 py-2 flex items-center hover:cursor-pointer transition-colors duration-300"
                  aria-expanded={isServicesOpen}
                  aria-controls="services-dropdown"
                >
                  Services{" "}
                  {isServicesOpen ? (
                    <ChevronUp size={24} className='pt-1' />
                  ) : (
                    <ChevronDown size={24} className='pt-1' />
                  )}
                </button>
                {isServicesOpen && (
                  <div
                    id="services-dropdown"
                    className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-full max-w-[80vw] md:w-[600px] lg:w-[900px] bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-lg z-30 transition-colors duration-300"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                    onClick={handleCardClick}
                  >
                    <ServiceDropdown />
                  </div>
                )}
              </li>
              {/* Desktop Solutions Dropdown */}
              <li
                className="relative flex items-center"
                ref={solutionsRef}
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <button
                  className="text-sm md:text-sm lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-bold hover:border-b-2 hover:border-blue-500 py-2 flex items-center hover:cursor-pointer transition-colors duration-300"
                  aria-expanded={isSolutionsOpen}
                  aria-controls="solutions-dropdown"
                >
                  Solutions{" "}
                  {isSolutionsOpen ? (
                    <ChevronUp size={24} className='pt-1' />
                  ) : (
                    <ChevronDown size={24} className='pt-1' />
                  )}
                </button>
                {isSolutionsOpen && (
                  <div
                    id="solutions-dropdown"
                    className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-full max-w-[80vw] md:w-[600px] lg:w-[900px] bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-lg z-30 transition-colors duration-300"
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                    onClick={handleCardClick}
                  >
                    <SolutionDropdown />
                  </div>
                )}
              </li>
              <li className="flex items-center">
                <Link
                  href="/blog"
                  className="text-sm md:text-sm lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-bold hover:border-b-2 hover:border-blue-500 py-2 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggleButton />
            <button
              className="menu-toggle text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 z-50"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Theme Toggle and Contact Button - Desktop only */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggleButton />
            <Link
              href="/contactus"
              className={contactButtonClass}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu System - Outside of the header */}
      {/* Mobile Menu Drawer Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu Drawer - Fixed to viewport, not relative to header */}
      <div
        ref={mobileMenuRef}
        className={`
          fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white dark:bg-gray-900 
          shadow-xl z-50 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col md:hidden
        `}
      >
        <div className="flex justify-end p-5 border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={toggleMobileMenu}
            aria-label="Close menu"
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul className="space-y-1 p-4">
            <li>
              <Link
                href="/"
                className="block text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-3 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/who-we-are"
                className="block text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-3 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Who We Are
              </Link>
            </li>

            {/* Mobile Services Dropdown */}
            <li>
              <button
                onClick={handleServicesClick}
                className="flex justify-between items-center w-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-3 rounded-md font-medium"
                aria-expanded={isServicesOpen}
              >
                Services
                {isServicesOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {isServicesOpen && (
                <ul className="pl-6 mt-1 space-y-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <CircleDot className="w-2 h-2 mr-2 text-black dark:text-white" />
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile Solutions Dropdown */}
            <li>
              <button
                onClick={handleSolutionsClick}
                className="flex justify-between items-center w-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-3 rounded-md font-medium"
                aria-expanded={isSolutionsOpen}
              >
                Solutions
                {isSolutionsOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {isSolutionsOpen && (
                <ul className="pl-6 mt-1 space-y-1">
                  {solutions.map((solution) => (
                    <li key={solution.slug}>
                      <Link
                        href={`/solutions/${solution.slug}`}
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <CircleDot className="w-2 h-2 mr-2 text-black dark:text-white" />
                        {solution.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/blog"
                className="block text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-3 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="p-6 border-t border-gray-200 dark:border-gray-800 mt-auto"
        >
          <Link
            href="/contactus"
            className={mobileContactButtonClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;