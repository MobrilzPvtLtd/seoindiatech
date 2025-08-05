import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import ServiceDropdown from './ServiceDropdown';
import SolutionDropdown from './SolutionDropdown';
import ThemeToggle from '@/component/common/ThemeToggle'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
 

  const servicesRef = useRef();
  const solutionsRef = useRef();

  // Set mounted state when component mounts to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current && !servicesRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
      if (
        solutionsRef.current && !solutionsRef.current.contains(event.target)
      ) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header class="bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 flex items-center justify-center space-x-64 h-20">
        {/* Logo */}
        <div className="flex items-center">
          {mounted ? (
            <img
              src="/SIT-logo2.png"
              alt="Logo"
              className="w-20 h-12 mr-2 dark:invert"
              style={{ minWidth: 48, minHeight: 48 }}
            />
          ) : (
            <div
              className="w-20 h-12 mr-2 bg-gray-100 dark:bg-gray-800 animate-pulse"
              style={{ minWidth: 48, minHeight: 48 }}
            ></div>
          )}
        </div>

        {/* Menu */}
        <nav className="relative">
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <ul className={`${isMenuOpen ? 'block' : 'hidden'
            } md:flex md:space-x-6 absolute md:static bg-white dark:bg-gray-900 md:bg-transparent top-full left-0 w-full md:w-auto p-4 md:p-0 shadow-md dark:shadow-gray-800 md:shadow-none z-20 transition-colors duration-300`}>
            <li><a href="/" className="block text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0 transition-colors duration-300">Home</a></li>
            <li><a href="/who-we-are" className="block text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0 transition-colors duration-300">Who We Are</a></li>
            {/* Services Dropdown */}
            <li
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => {
                if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                  setIsServicesOpen(true);
                  setIsSolutionsOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                  setIsServicesOpen(false);
                }
              }}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0 flex items-center hover:cursor-pointer transition-colors duration-300"
                aria-expanded={isServicesOpen}
                aria-controls="services-dropdown"
              >
                Services {isServicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isServicesOpen && (
                <div
                  id="services-dropdown"
                  className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-full max-w-[80vw] md:w-[600px] lg:w-[900px] bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-lg z-30 transition-colors duration-300"
                  onMouseEnter={() => {
                    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                      setIsServicesOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                      setIsServicesOpen(false);
                    }
                  }}
                >
                  <ServiceDropdown />
                </div>
              )}
            </li>
            {/* Solutions Dropdown */}
            <li
              className="relative"
              ref={solutionsRef}
              onMouseEnter={() => {
                if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                  setIsSolutionsOpen(true);
                  setIsServicesOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                  setIsSolutionsOpen(false);
                }
              }}
            >
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0 flex items-center hover:cursor-pointer transition-colors duration-300"
                aria-expanded={isSolutionsOpen}
                aria-controls="solutions-dropdown"
              >
                Solutions {isSolutionsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isSolutionsOpen && (
                <div
                  id="solutions-dropdown"
                  className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-full max-w-[80vw] md:w-[600px] lg:w-[900px] bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-lg z-30 transition-colors duration-300"
                  onMouseEnter={() => {
                    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                      setIsSolutionsOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                      setIsSolutionsOpen(false);
                    }
                  }}
                >
                  <SolutionDropdown />
                </div>
              )}
            </li>
            <li><a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0 transition-colors duration-300">Blog</a></li>
          </ul>
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center gap-6 ">
          <ThemeToggle />
        

        {/* Contact Button */}
        <a href="#" className="bg-blue-700 dark:bg-blue-600 text-white px-4 py-2 rounded-md hidden md:block hover:bg-blue-800 dark:hover:bg-blue-500 transition-colors duration-300">
          Contact Us
        </a>
        </div>
      </div>
    </header>
  );
};

export default Header;