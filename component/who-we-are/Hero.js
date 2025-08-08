import React from 'react';
import { Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='bg-white dark:bg-gray-900 pt-4 pb-8'>
    <div className='relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-20 left-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60'></div>
        <div className='absolute -bottom-10 right-10 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50'></div>
      </div>

      <div className='pt-16 md:pt-20 max-w-7xl flex p-6 md:p-12 flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 mx-auto my-10'>
        <div className='md:max-w-xl'>
          {/* Badge/Tag */}
          <div className='mb-8'>
            <span className='inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium'>
              Business Growth Solutions
            </span>
          </div>

          {/* Main Heading */}
          {/* <div className="flex flex-col items-center justify-center text-center min-h-screen"> */}
            <h1 className='text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-6'>
              Start Your <span className='font-bold text-blue-600 dark:text-blue-400'>Business</span>
              <span className='relative text-center '>
                {" "}&
                <span className='absolute -bottom-1.5 left-0 w-full h-1 bg-blue-500 dark:bg-blue-400 rounded-full opacity-60'></span>
              </span>
              <span className='block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300'>
                Grow With Us
              </span>
            </h1>
          {/* </div> */}


          {/* Description */}
          <p className='text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl'>
            In the world of digital marketing, whether you are a small business, start-up, or even a big company, we can help you grow your audience, scale your business, and optimize your working flow.
          </p>

          {/* Call to Action Buttons */}
          <div className='flex flex-wrap gap-4 mb-14'>
            <Link href="/contactus">
            <button className='px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 transform active:scale-95'>
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            </Link>
            <Link href="/blog">
            <button className='px-8 py-3.5 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300'>
              Learn More
            </button>
            </Link>
          </div>

          {/* Social Media Links */}
          <div className='flex flex-wrap items-center gap-6'>
            <p className='text-gray-600 dark:text-gray-400 font-medium'>Follow us:</p>
            <Link href="https://facebook.com" className='flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200' target="_blank" rel="noopener noreferrer">
              <div className='w-9 h-9 flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 rounded-full'>
                <Facebook size={18} className="text-blue-700 dark:text-blue-400" />
              </div>
              <span className='font-medium'>Facebook</span>
            </Link>
            <Link href="https://instagram.com" className='flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200' target="_blank" rel="noopener noreferrer">
              <div className='w-9 h-9 flex items-center justify-center bg-pink-50 dark:bg-pink-900/30 rounded-full'>
                <Instagram size={18} className="text-pink-600 dark:text-pink-400" />
              </div>
              <span className='font-medium'>Instagram</span>
            </Link>
            <Link href="https://linkedin.com" className='flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200' target="_blank" rel="noopener noreferrer">
              <div className='w-9 h-9 flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 rounded-full'>
                <Linkedin size={18} className="text-blue-700 dark:text-blue-400" />
              </div>
              <span className='font-medium'>LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className='relative w-full md:w-1/2 lg:w-[49%] flex-shrink-0'>
          <div className='relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 transition-all hover:shadow-2xl duration-300 transform hover:scale-[1.02]'>
            {/* Using Next.js Image for better optimization */}
            <Image
              src="/images/isometric_12.jpg"
              alt="Business Growth"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50'></div>
          </div>

          {/* Floating elements for visual interest */}
          <div className='absolute -top-6 -right-6 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-xl'></div>
          <div className='absolute -bottom-4 -left-4 w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-lg'></div>

          {/* Stats badge */}
          <div className=' hidden absolute -bottom-5 right-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-3 px-4 border border-gray-100 dark:border-gray-700'>
            <p className='text-sm text-gray-600 dark:text-gray-400 mb-1'>Trusted by</p>
            <p className='text-xl font-bold text-gray-900 dark:text-white'>500+ Companies</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;