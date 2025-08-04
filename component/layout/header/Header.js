import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesRef = useRef();
  const solutionsRef = useRef();

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <header className={`bg-white shadow-md transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`container mx-auto px-4 flex items-center justify-center space-x-16 transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'}`}>
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/seologo2.png"
            alt="Logo"
            className={`rounded-full mr-2 transition-all duration-300 ${scrolled ? 'w-8 h-8' : 'w-12 h-12'}`}
          />
          {/* <span className={`font-bold text-blue-700 transition-all duration-300 ${scrolled ? 'text-xl' : 'text-3xl'}`}>DI.</span> */}
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
            <li className="relative" ref={servicesRef}>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="block text-gray-600 hover:text-blue-700  font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0 flex items-center"
              >
                Services {isServicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isServicesOpen && (
                <ul className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 z-30">
                  {[ 'Consulting', 'Development', 'Design', 'Support' ].map((service, idx) => (
                    <li key={service} className="p-2 hover:bg-gray-100 rounded-md flex items-center space-x-4">
                      <img src={`https://via.placeholder.com/48?text=${service[0]}`} alt={service} className="w-12 h-12 rounded" />
                      <div>
                        <h3 className="font-bold">{service}</h3>
                        <button className="mt-1 text-blue-700 text-sm">Learn</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="relative" ref={solutionsRef}>
              <button 
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="block text-gray-600 hover:text-blue-700 font-bold hover:border-b-2 hover:border-blue-500 py-2 md:py-0 flex items-center"
              >
                Solutions {isSolutionsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isSolutionsOpen && (
                <ul className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 z-30">
                  {[ 'Enterprise', 'SME', 'Startup', 'Custom' ].map((solution, idx) => (
                    <li key={solution} className="p-2 hover:bg-gray-100 rounded-md flex items-center space-x-4">
                      <img src={`https://via.placeholder.com/48?text=${solution[0]}`} alt={solution} className="w-12 h-12 rounded" />
                      <div>
                        <h3 className="font-bold">{solution}</h3>
                        <button className="mt-1 text-blue-700 text-sm">Learn</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><a href="#" className="block text-gray-600 font-bold hover:border-b-2 hover:border-blue-500 hover:text-blue-700 py-2 md:py-0">Blog</a></li>
          </ul>
        </nav>

        {/* Contact Button */}
        <a href="#" className="bg-blue-700  text-white px-4 py-2 rounded-md hidden md:block">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;