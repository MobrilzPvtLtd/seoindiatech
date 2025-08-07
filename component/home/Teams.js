import React from 'react';
import { useEffect, useRef } from 'react';

function Teams() {
    const teamLogos = [
        {
            src: "https://www.digitalyzeit.com/wp-content/uploads/2024/07/diyrealestate_logo.jpeg",
            alt: "DIY Real Estate",
            name: "DIY Real Estate"
        },
        {
            src: "https://www.digitalyzeit.com/wp-content/uploads/2024/07/New-Project-1-2-e1681330049792.png",
            alt: "Tech Project",
            name: "Tech Project"
        },
        {
            src: "https://www.digitalyzeit.com/wp-content/uploads/2024/07/stayksa_logo.jpeg",
            alt: "Stay KSA",
            name: "Stay KSA"
        },
        {
            src: "https://www.digitalyzeit.com/wp-content/uploads/2024/07/creativity360pro_logo.jpeg",
            alt: "Creativity 360 Pro",
            name: "Creativity 360 Pro"
        },
        {
            src: "https://www.digitalyzeit.com/wp-content/uploads/2024/07/277564223_439538341365247_7258142149719093139_n.jpg",
            alt: "Creative Agency",
            name: "Creative Agency"
        },
        {
            src: "https://www.digitalyzeit.com/wp-content/uploads/2024/07/327548114_556602153061050_7036279599931781900_n.jpg",
            alt: "Digital Solutions",
            name: "Digital Solutions"
        },
        {
            src: "https://www.digitalyzeit.com/wp-content/uploads/2024/07/advyra_logo.jpeg",
            alt: "Advyra",
            name: "Advyra"
        }
    ];

    // Duplicate the array for seamless looping
    const allLogos = [...teamLogos, ...teamLogos];

    return (
        <div className='bg-white dark:bg-gray-900 py-8'>
        <div className="max-w-7xl mx-auto overflow-hidden py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-24">
                <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                    We've been working with teams worldwide
                </h2>
            </div>

            {/* Main marquee container */}
            <div className="relative w-full overflow-hidden">
                {/* First marquee row - moves left */}
                <div className="marquee-container">
                    <div className="marquee-animation-left h-44">
                        {allLogos.map((logo, index) => (
                            <div
                                key={`marquee1-${index}`}
                                className="mx-2 sm:mx-4 flex-shrink-0 bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                                style={{
                                    width: 'clamp(110px, 25vw, 170px)',
                                    height: 'clamp(100px, 20vw, 170px)'
                                }}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                    style={{
                                        maxHeight: 'clamp(70px, 15vw, 110px)'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add the following CSS to your component */}
            <style jsx>{`
                .marquee-container {
                    overflow: hidden;
                    width: 100%;
                    position: relative;
                }
                
                .marquee-animation-left {
                    display: flex;
                    animation: marqueeLeft 30s linear infinite;
                    will-change: transform;
                    
                }
                
                @keyframes marqueeLeft {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                /* Pause animation on hover for better user experience */
                .marquee-container:hover .marquee-animation-left {
                    animation-play-state: paused;
                }
                
                /* Apply smoother animation for all browsers */
                @media (prefers-reduced-motion: no-preference) {
                    .marquee-animation-left {
                        animation-timing-function: linear;
                    }
                }
                
                /* Slow down a bit on small screens for better readability */
                @media (max-width: 640px) {
                    .marquee-animation-left {
                        animation-duration: 5s;
                    }
                }
            `}</style>
        </div>
        </div>
    );
}

export default Teams;