import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='px-4 py-6  bg-white dark:bg-gray-900'>

            <div className='bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg max-w-7xl mx-auto my-6 md:my-10'>
                {/* Left Content */}
                <div className="max-w-xl space-y-4 w-full md:w-1/2 md:pr-8">
                    <span className="inline-block bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-full px-4 py-1.5 text-sm font-medium text-black dark:text-white">
                        ⭐ Digital Marketing
                    </span>

                    <h1 className="text-5xl text-center md:text-left md:text-7xl font-bold text-gray-900 dark:text-white leading-16 md:leading-20">
                        Empowering Your Digital <span className="text-blue-700 dark:text-blue-400">Journey</span>
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
                        SEO India Tech is a digital marketing agency that empowers startups and
                        established enterprises to grow and thrive online. We help businesses
                        achieve lasting success through innovative strategies and tailored
                        solutions. Our team of experts crafts customized strategies that
                        resonate with your target audience and drive meaningful results.
                    </p>

                    <div className='flex items-center justify-center md:justify-start w-full md:w-auto'>
                        <Link href="/contactus" className="inline-block">
                            <button className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-indigo-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 shadow-md border border-blue-700/20 dark:border-blue-500/30">
                                Get started now
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Images (Half Screen) */}
                <div className="mt-8 md:mt-0 grid grid-cols-2 gap-4 w-full md:w-1/2">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img src="https://www.digitalyzeit.com/wp-content/uploads/2024/07/Growth-Marketing-Hero-Image-1.webp" alt="Manage Account" className="w-full h-auto object-cover" />
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300">
                        <img src="https://www.digitalyzeit.com/wp-content/uploads/2024/07/Growth-Marketing-Hero-Image-4.webp" alt="Followers" className="w-full h-auto object-cover" />
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img src="https://www.digitalyzeit.com/wp-content/uploads/2024/07/Growth-Marketing-Hero-Image-2.webp" alt="Work" className="w-full h-auto object-cover" />
                        <img src="https://www.digitalyzeit.com/wp-content/uploads/2024/07/Growth-Marketing-Hero-Image-3.webp" alt="Likes" className="w-full h-auto object-cover border-t" />
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img src="https://www.digitalyzeit.com/wp-content/uploads/2024/07/Growth-Marketing-Hero-Image-5.webp" alt="Post" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;