import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
 
const testimonials = [
  {
    id: 1,
    name: "Christine Jackson",
    handle: "luminous_statue_35",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "If you're not using testimonials, you're missing out on a golden opportunity to turn visitors and potential buyers into actual customers."
  },
  {
    id: 2,
    name: "Yasmine Garcia",
    handle: "pendulous_ukulele_30",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "If you're not using testimonials, you're missing out on a golden opportunity to turn visitors and potential buyers into actual customers."
  },
  {
    id: 3,
    name: "Sakura Palastri",
    handle: "salubrious_producer_83",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    text: "If you're not using testimonials, you're missing out on a golden opportunity to turn visitors and potential buyers into actual customers."
  },
  {
    id: 4,
    name: "Bác. Lỡ Lĩnh",
    handle: "puckish_cookies_38",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "If you're not using testimonials, you're missing out on a golden opportunity to turn visitors and potential buyers into actual customers."
  },
  {
    id: 5,
    name: "Ibrahim Mahmud",
    handle: "limpid_cupcake_68",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "If you're not using testimonials, you're missing out on a golden opportunity to turn visitors and potential buyers into actual customers."
  },
  {
    id: 6,
    name: "Margaret Taylor",
    handle: "amatory_clerk_73",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    text: "If you're not using testimonials, you're missing out on a golden opportunity to turn visitors and potential buyers into actual customers."
  }
];
 
const TestimonialCard = ({ item }) => {
  const cardRef = useRef(null);
 
  const handleEnter = () => {
    gsap.to(cardRef.current, {
      rotation: -2,
      scale: 1.05,
      zIndex: 10,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)', // slight overshoot = the "twitch"
    });
  };
 
  const handleLeave = () => {
    gsap.to(cardRef.current, {
      rotation: 0,
      scale: 1,
      zIndex: 1,
      duration: 0.4,
      ease: 'power3.out',
    });
  };
 
  return (
  <div
    ref={cardRef}
    onMouseEnter={handleEnter}
    onMouseLeave={handleLeave}
    className="testimonial-card relative bg-white dark:bg-gray-900 rounded-[2.5rem] p-10 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center will-change-transform"
  >
 
    {/* Avatar */}
    <div className="w-20 h-20 rounded-full overflow-hidden mb-5 shadow-inner">
      <img
        src={item.avatar}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
 
    {/* Identity */}
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
      {item.name}
    </h3>
    <p className="text-gray-400 dark:text-gray-500 text-sm mb-6">
      {item.handle}
    </p>
 
    {/* Quote Text */}
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg px-2">
      {item.text}
    </p>
 
    {/* Bottom Quote Icon */}
    <div className="mt-8">
      <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
        <path d="M0 18.5714C0 8.31429 7.14286 0 16.5714 0V5.71429C11.4286 5.71429 8.57143 8.57143 8.57143 12.8571H17.1429V30H0V18.5714ZM22.8571 18.5714C22.8571 8.31429 30 0 39.4286 0V5.71429C34.2857 5.71429 31.4286 8.57143 31.4286 12.8571H40V30H22.8571V18.5714Z" fill="#0066FF"/>
      </svg>
    </div>
  </div>
  );
};
 
const Testimonials = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 90%',
        }
      });
 
      // Cards Stagger Animation
      gsap.from('.testimonial-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
        }
      });
    }, sectionRef);
 
    return () => ctx.revert();
  }, []);
 
  return (
    <section ref={sectionRef} className="bg-white dark:bg-slate-950 py-20 md:py-32 px-4 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-800 px-4 py-1.5 rounded-full mb-6 bg-white dark:bg-gray-900 shadow-sm">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              Testimonials 🙂
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Our trusted clients
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed expectations.
          </p>
        </div>
 
        {/* Grid Section */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-center"
        >
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Testimonials;
 
 