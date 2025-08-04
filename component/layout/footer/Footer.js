import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  const handleCallUs = () => {
    // Add your phone number here
    window.open('tel:+1234567890', '_self');
  };

  const handleEmailUs = () => {
    // Add your email here  
    window.open('mailto:contact@digitalyze.com', '_self');
  };

  return (
    <>
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          
          {/* Left Section - Logo and Tagline */}
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <div className="flex items-center space-x-2">
              <img
                src="/SIT-logo2.png"
                alt="Logo"
                className="w-20 h-12"
              
              />
              
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg font-semibold text-gray-800">
                Start Your Business & <span className="font-bold">GROW WITH US</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                ©DIGITALYZE IT – All rights reserved
              </p>
            </div>
          </div>

          {/* Right Section - CTA */}
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-xl font-medium text-gray-800">
              Would You Like To
            </h2>
            
            <div className="flex items-center space-x-2 rounded-lg overflow-hidden shadow-lg">
              <button
                onClick={handleCallUs}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </button>
              
              <div className="bg-white px-3 py-3 text-gray-600 font-medium border-t border-b border-gray-200">
                Or
              </div>
              
              <button
                onClick={handleEmailUs}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;