import React from 'react';

const Why = () => {
  return (
    <div className='bg-gray-200 py-20'>
      <h1 className='text-green-950 text-6xl font-bold leading-tight px-8 md:px-36 mb-16'>
        Why UI/UX Is Your <br />Competitive Advantage
      </h1>

      <div className='space-y-12 px-8 md:px-36'>

        {/* Row 1 */}
        <div className='flex flex-col md:flex-row items-center justify-between border-t border-b py-8 gap-6'>
          <img 
            src='https://www.digitalyzeit.com/wp-content/uploads/2025/02/website-desgin.webp' 
            alt='Trust' 
            className='w-56 h-20 object-cover rounded-full'
          />
          <h2 className='text-xl font-semibold text-center md:text-left text-gray-700'>
            Instant Trust & Credibility
          </h2>
          <p className='text-gray-700 text-center md:text-left'>
            75% of users judge a brand’s trustworthiness by its design.
          </p>
        </div>

        {/* Row 2 */}
        <div className='flex flex-col md:flex-row items-center justify-between border-t border-b py-8 gap-6'>
          <img 
            src='https://www.digitalyzeit.com/wp-content/uploads/2025/01/strategic-story-telling-scaled.webp' 
            alt='Conversion' 
            className='w-56 h-20 object-cover rounded-full'
          />
          <h2 className='text-xl font-semibold text-center md:text-left text-gray-700'>
            Optimized for Conversion
          </h2>
          <p className='text-gray-700 text-center md:text-left'>
            A seamless UI can boost conversion rates by up to 200%.
          </p>
        </div>

        {/* Row 3 */}
        <div className='flex flex-col md:flex-row items-center justify-between border-t border-b py-8 gap-6'>
          <img 
            src='https://www.digitalyzeit.com/wp-content/uploads/2024/08/Digital-Marketing-Innovative-Image-1.webp' 
            alt='Retention' 
            className='w-56 h-20 object-cover rounded-full'
          />
          <h2 className='text-xl font-semibold text-center md:text-left text-gray-700'>
            Customer Retention & Loyalty
          </h2>
          <p className='text-gray-700 text-center md:text-left'>
            Intuitive UX leads to 88% higher customer retention rates.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Why;
