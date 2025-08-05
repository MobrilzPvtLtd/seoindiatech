import { ChevronDown, ChevronUp, Sun, Moon } from 'lucide-react';
import React, { useState, useRef, useEffect, useContext } from 'react';
import ServiceDropdown from './ServiceDropdown';
import SolutionDropdown from './SolutionDropdown';
import { ThemeContext } from '@/context/ThemeContext';
 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Use ThemeContext
  const themeContext = useContext(ThemeContext);
  
  // Handle potential context issues
  const theme = themeContext?.theme || 'light';
  const toggleTheme = themeContext?.toggleTheme || (() => console.error('Theme context not available'));
  
  const isDark = theme === 'dark';

  const servicesRef = useRef();
  const solutionsRef = useRef();
  
  // Debug the theme state
  useEffect(() => {
    console.log('Current theme:', theme);
    console.log('Dark mode classes on HTML:', document.documentElement.classList.contains('dark'));
  }, [theme]);

  // Set mounted state when component mounts
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
    <header className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300`}>
      <div className="container mx-auto px-4 flex items-center justify-between md:justify-center md:space-x-64 h-20">
        {/* Logo */}
        <div className="flex items-center">
          {mounted ? (
            <img
              src="/SIT-logo2.png"
              alt="Logo"
              className={`w-20 h-12 mr-2 ${isDark ? 'filter invert' : ''}`}
              style={{ minWidth: 48, minHeight: 48 }}
            />
          ) : (
            <div className="w-20 h-12 mr-2 bg-gray-100 dark:bg-gray-800 animate-pulse" 
              style={{ minWidth: 48, minHeight: 48 }}></div>
          )}
        </div>

        {/* Menu */}
        <nav className="relative flex-grow md:flex-grow-0">
          <button 
            className={`md:hidden ${isDark ? 'text-gray-300' : 'text-gray-600'} focus:outline-none`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <ul className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 absolute md:static ${isDark ? 'bg-gray-900' : 'bg-white'} md:bg-transparent top-full left-0 w-full md:w-auto p-4 md:p-0 shadow-md md:shadow-none z-20`}>
            <li><a href="#" className={`block ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-700'} font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0`}>Home</a></li>
            <li><a href="#" className={`block ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-700'} font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0`}>Who We Are</a></li>
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
                className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-700'} font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0 flex items-center hover:cursor-pointer`}
                aria-expanded={isServicesOpen}
                aria-controls="services-dropdown"
              >
                Services {isServicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isServicesOpen && (
                <div
                  id="services-dropdown"
                  className={`absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-full max-w-[80vw] md:w-[600px] lg:w-[900px] ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg z-30`}
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
                  <ServiceDropdown isDark={isDark} />
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
                className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-700'} font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0 flex items-center hover:cursor-pointer`}
                aria-expanded={isSolutionsOpen}
                aria-controls="solutions-dropdown"
              >
                Solutions {isSolutionsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isSolutionsOpen && (
                <div
                  id="solutions-dropdown"
                  className={`absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-full max-w-[80vw] md:w-[600px] lg:w-[900px] ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg z-30`}
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
                  <SolutionDropdown isDark={isDark} />
                </div>
              )}
            </li>
            <li><a href="#" className={`block ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-700'} font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0`}>Blog</a></li>
          </ul>
        </nav>

        {/* Right side - Contact Button and Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle with improved accessibility */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isDark ? 'focus:ring-offset-gray-900' : ''} transition-colors duration-300`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {mounted && (
              isDark ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )
            )}
          </button>

          <a href="#" className={`${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-700 hover:bg-blue-800'} text-white px-4 py-2 rounded-md hidden md:block transition-colors duration-300`}>
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;