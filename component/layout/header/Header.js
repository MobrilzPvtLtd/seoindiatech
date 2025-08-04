import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import ServiceDropdown from './ServiceDropdown';
import SolutionDropdown from './SolutionDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const servicesRef = useRef();
  const solutionsRef = useRef();

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
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-center space-x-16 h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/SIT-logo2.png"
            alt="Logo"
            className="w-20 h-12 mr-2 "
            style={{ minWidth: 48, minHeight: 48 }}
          />
         
        </div>

        {/* Menu */}
        <nav className="relative">
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <ul className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 absolute md:static bg-white md:bg-transparent top-full left-0 w-full md:w-auto p-4 md:p-0 shadow-md md:shadow-none z-20`}>
            <li><a href="#" className="block text-gray-600 hover:text-blue-700 font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0">Home</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-blue-700 font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0">Who We Are</a></li>
            {/* Services Dropdown */}
            <li
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => {
                setIsServicesOpen(true);
                setIsSolutionsOpen(false);
              }}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className=" text-gray-600 hover:text-blue-700 font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0 flex items-center hover:cursor-pointer"
                aria-expanded={isServicesOpen}
                aria-controls="services-dropdown"
              >
                Services {isServicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isServicesOpen && (
                <div
                  id="services-dropdown"
                  className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-full max-w-[80vw] md:w-[600px] lg:w-[900px] bg-white shadow-lg rounded-lg z-30"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
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
                setIsSolutionsOpen(true);
                setIsServicesOpen(false);
              }}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className=" text-gray-600 hover:text-blue-700 font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0 flex items-center hover:cursor-pointer"
                aria-expanded={isSolutionsOpen}
                aria-controls="solutions-dropdown"
              >
                Solutions {isSolutionsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isSolutionsOpen && (
                <div
                  id="solutions-dropdown"
                  className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-full max-w-[80vw] md:w-[600px] lg:w-[900px] bg-white shadow-lg rounded-lg z-30"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                
                  <SolutionDropdown/>
                </div>
              )}
            </li>
            <li><a href="#" className="block text-gray-600 font-bold hover:border-b-2 hover:border-blue-500 hover:text-blue-700 py-2 md:py-0">Blog</a></li>
          </ul>
        </nav>

        {/* Contact Button */}
        <a href="#" className="bg-blue-700 text-white px-4 py-2 rounded-md hidden md:block">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;