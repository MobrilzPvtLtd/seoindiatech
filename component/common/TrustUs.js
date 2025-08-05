'use client';

import Link from 'next/link';

const TrustUs = ({
  title = 'Trust Us',
  subtitle = '',
  buttonText = 'Contact Us Now!',
  buttonUrl = '/contact',
  bgGradient = 'bg-gradient-to-r from-gray-100 to-gray-200',
  textColor = 'text-black',
  buttonGradient = 'bg-gradient-to-r from-blue-500 to-blue-700',
  buttonTextColor = 'text-white',
}) => {
  return (
    <section className={`w-full ${bgGradient}`}>
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-left mb-6 md:mb-0">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor}`}>
            {title}
          </h2>
          {subtitle && (    
            <h3 className={`text-4xl md:text-5xl font-bold ${textColor}`}>
              {subtitle}
            </h3>
          )}
        </div>

        <div className="w-full md:max-w-82">
          <Link
            href={buttonUrl}
            className={`${buttonGradient} ${buttonTextColor} text-center py-4 px-8 rounded text-lg font-medium w-full md:w-auto block transition-all duration-300 hover:shadow-lg hover:scale-105`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustUs;