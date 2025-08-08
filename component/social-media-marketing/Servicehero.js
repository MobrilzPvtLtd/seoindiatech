import React from 'react';
import Image from 'next/image';
import { ArrowRight, Share2 } from 'lucide-react';
import Link from 'next/link';

const ServiceHero = () => {
  const images = [
    {
      src: "https://www.digitalyzeit.com/wp-content/uploads/2024/07/Growth-Marketing-Hero-Image-1.webp",
      alt: "Social Media Marketing Strategy"
    },
    {
      src: "https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Unlocking-Image-2.webp",
      alt: "Content Creation Process"
    },
    {
      src: "https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Meaningful-Image-1.webp",
      alt: "Analytics Dashboard"
    }
  ];

  return (
    <section className='bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-12 shadow-lg max-w-7xl mx-auto my-6 md:my-10 overflow-hidden relative'>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 dark:bg-cyan-700 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10">
        {/* Left Content */}
        <div className="max-w-xl space-y-6 w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-2">
            <Share2 className="w-4 h-4" />
            <span>Social Media Experts</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Our Expert Social Media <span className="text-blue-600 dark:text-blue-400">Marketing</span> Services
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
            With a sharp focus on analytics and an acute awareness of social trends, we expertly navigate the complexities of algorithms to ensure your brand stands out and shines in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link href="/contactus">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2 group">
              Get started now
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            </Link>
            <Link href="">
            <button className="hidden bg-transparent text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center">
              Explore Services
            </button>
            </Link>
          </div>
          
          {/* Stats - Optional */}
          <div className="flex gap-6 pt-4 border-t border-gray-200 dark:border-gray-700 mt-6">
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">300+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">98%</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Satisfaction</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">5.0</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Rating</p>
            </div>
          </div>
        </div>

        {/* Right Images - Grid Layout */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            {/* First Image - Larger */}
            <div className="col-span-2 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-xl bg-white dark:bg-gray-800 p-1.5">
              <div className="relative h-48 md:h-56 lg:h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Bottom two images */}
            {images.slice(1).map((image, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-xl bg-white dark:bg-gray-800 p-1.5"
              >
                <div className="relative h-32 md:h-40 w-full rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;