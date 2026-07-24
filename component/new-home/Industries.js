import React, { useEffect, useRef } from 'react'
import { FaClinicMedical, FaGraduationCap, FaHome, FaPlane, FaIndustry, FaGavel, FaUtensils, FaShoppingCart, FaCloud, FaDollarSign } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
 
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}
 
const industries = [
  { name: 'Healthcare', icon: FaClinicMedical, desc: 'Boost patient reach & visibility' },
  { name: 'Education', icon: FaGraduationCap, desc: 'Attract more enrollments online' },
  { name: 'Real Estate', icon: FaHome, desc: 'Generate qualified property leads' },
  { name: 'Travel', icon: FaPlane, desc: 'Drive bookings & travel traffic' },
  { name: 'Manufacturing', icon: FaIndustry, desc: 'Expand B2B digital presence' },
  { name: 'Law Firms', icon: FaGavel, desc: 'Get found by potential clients' },
  { name: 'Restaurants', icon: FaUtensils, desc: 'Increase local foot traffic' },
  { name: 'eCommerce', icon: FaShoppingCart, desc: 'Maximize online store sales' },
  { name: 'SaaS', icon: FaCloud, desc: 'Grow subscriptions & trials' },
  { name: 'Finance', icon: FaDollarSign, desc: 'Build trust & attract clients' },
]
 
// Split industries into two rows for the marquee
const row1 = industries.slice(0, 5);
const row2 = industries.slice(5, 10);
 
const IndustryCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="group flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)] w-[280px] shrink-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
        <Icon />
      </div>
      <div>
        <p className="text-sm font-bold text-white mb-1 tracking-wide">
          {item.name}
        </p>
        <p className="text-xs text-slate-400 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
};
 
const Industries = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
 
  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 90%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])
 
  return (
    <section ref={sectionRef} className="bg-black py-20 md:py-32 overflow-hidden relative">
      
      {/* 1. Background Grid Decoration (Subtle Lines) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          //  style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
      />
 
      {/* 2. Header */}
      <div ref={headerRef} className="relative z-10 max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Industries <span className="text-blue-500">We Serve</span>
        </h2>
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
          We combine data-driven SEO with deep industry knowledge to deliver
          high-performance results across specialized sectors.
        </p>
      </div>
 
      {/* 3. Scrolling Marquee (Two Rows moving in opposite directions) */}
      <div className="relative z-10 flex flex-col gap-6">
        
        {/* Row 1: Moving Right */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-marquee">
            {[...row1, ...row1, ...row1].map((item, i) => (
              <IndustryCard key={i} item={item} />
            ))}
          </div>
        </div>
 
        {/* Row 2: Moving Left */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-marquee-reverse">
            {[...row2, ...row2, ...row2].map((item, i) => (
              <IndustryCard key={i} item={item} />
            ))}
          </div>
        </div>
 
      </div>
 
      {/* 4. Side Gradient Fades (Makes the scroll smooth) */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />
 
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
        /* Pause scroll on hover so users can read the card */
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
 
export default Industries
 