// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
// import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
// import { motion, AnimatePresence } from 'framer-motion';

// /**
//  * Same split-block idea as before, but with the layered detail it was
//  * missing: multiple glows instead of one, a slowly orbiting ring of
//  * accent dots around the big word, a floating proof chip straddling
//  * the seam between panels, scattered background shapes on the paper
//  * side, a proper avatar-stack proof row, and a slow keyword marquee
//  * along the bottom edge. The structure didn't change - the richness
//  * did.
//  */

// const services = ['SEO', 'PPC', 'Content', 'Branding', 'Web'];
// const accents = ['#16C784', '#FF6B4A', '#3355FF', '#8B5CF6'];

// const featureList = [
//     { label: 'Increase Organic Traffic', accent: accents[0] },
//     { label: 'Generate Quality Leads', accent: accents[2] },
//     { label: 'Maximize ROI & Revenue', accent: accents[3] },
// ];

// const marqueeItems = [
//     'SEO Strategy', 'Paid Ads', 'Content Growth', 'Web Design', 'Local SEO',
//     'Noida', 'Delhi', 'Mumbai', 'Technical Audits', 'Brand Identity',
// ];

// const avatarStack = [
//     { initials: 'CJ', accent: accents[0] },
//     { initials: 'YG', accent: accents[1] },
//     { initials: 'SP', accent: accents[2] },
//     { initials: 'IM', accent: accents[3] },
// ];

// const Hero = () => {
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setIndex((prev) => (prev + 1) % services.length);
//         }, 2200);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <section className="relative w-full overflow-hidden bg-[#F6F7F9]">
//             <div className="relative grid lg:grid-cols-[42%_58%] min-h-[680px] lg:min-h-[92vh] lg:max-h-[1000px]">

//                 {/* LEFT - ink block */}
//                 <div className="relative flex flex-col items-center lg:items-start justify-center bg-[#14161F] px-8 sm:px-14 lg:px-16 py-20 lg:py-0 overflow-hidden">
//                     {/* Layered glows */}
//                     <div className="pointer-events-none absolute w-[420px] h-[420px] rounded-full blur-[110px] opacity-25" style={{ background: `radial-gradient(circle, ${accents[2]}, transparent 70%)`, top: '20%', left: '10%' }} />
//                     <div className="pointer-events-none absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.18]" style={{ background: `radial-gradient(circle, ${accents[3]}, transparent 70%)`, bottom: '5%', right: '-5%' }} />
//                     <div className="pointer-events-none absolute w-[220px] h-[220px] rounded-full blur-[90px] opacity-[0.14]" style={{ background: `radial-gradient(circle, ${accents[0]}, transparent 70%)`, top: '5%', right: '10%' }} />

//                     {/* Fine plus-sign texture */}
//                     <div
//                         className="pointer-events-none absolute inset-0 opacity-[0.05]"
//                         style={{
//                             backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
//                             backgroundSize: '48px 48px',
//                         }}
//                     />

//                     {/* Floating proof tag */}
//                     <motion.div
//                         initial={{ opacity: 0, y: -10, rotate: -6 }}
//                         animate={{ opacity: 1, y: 0, rotate: -6 }}
//                         transition={{ duration: 0.6, delay: 0.5 }}
//                         className="absolute top-10 left-6 sm:left-10 rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm px-3 py-2 hidden sm:block"
//                     >
//                         <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Avg. traffic lift</p>
//                         <p className="text-sm font-semibold text-white">+64% <span style={{ color: accents[0] }}>↑</span></p>
//                     </motion.div>

//                     <motion.span
//                         initial={{ opacity: 0, y: 12 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="relative font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6"
//                     >
//                         What we do best
//                     </motion.span>

//                     {/* Orbiting ring around the big word */}
//                     <div className="relative flex items-center justify-center">
//                         <div className="pointer-events-none absolute w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full border border-dashed border-white/[0.12]" />
//                         <motion.div
//                             className="pointer-events-none absolute w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px]"
//                             animate={{ rotate: 360 }}
//                             transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
//                         >
//                             {accents.map((color, i) => (
//                                 <span
//                                     key={color}
//                                     className="absolute h-2 w-2 rounded-full"
//                                     style={{
//                                         backgroundColor: color,
//                                         top: '50%',
//                                         left: '50%',
//                                         transform: `rotate(${i * 90}deg) translate(120px)`,
//                                         boxShadow: `0 0 10px ${color}`,
//                                     }}
//                                 />
//                             ))}
//                         </motion.div>

//                         <div className="relative h-[5.5rem] sm:h-[7rem] lg:h-[8.5rem] flex items-center">
//                             <AnimatePresence mode="wait">
//                                 <motion.span
//                                     key={services[index]}
//                                     initial={{ opacity: 0, y: 24, scale: 0.94 }}
//                                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                                     exit={{ opacity: 0, y: -24, scale: 0.94 }}
//                                     transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
//                                     className="block font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#5B7CFF] to-[#B79CFF]"
//                                     style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
//                                 >
//                                     {services[index]}
//                                 </motion.span>
//                             </AnimatePresence>
//                         </div>
//                     </div>

//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.3 }}
//                         className="relative mt-8 text-sm text-slate-500 max-w-[220px] text-center lg:text-left"
//                     >
//                         One of five disciplines we run under one roof.
//                     </motion.p>

//                     <div className="hidden lg:block absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-[#16C784] via-[#3355FF] to-[#8B5CF6] opacity-70" />
//                 </div>

//                 {/* RIGHT - paper block */}
//                 <div className="relative flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-0 overflow-hidden">
//                     <div
//                         className="pointer-events-none absolute inset-0 opacity-[0.04]"
//                         style={{ backgroundImage: 'radial-gradient(#14161F 1px, transparent 1px)', backgroundSize: '30px 30px' }}
//                     />
//                     {/* Scattered decorative shapes */}
//                     <div className="pointer-events-none absolute w-64 h-64 rounded-full blur-[90px] opacity-[0.15]" style={{ background: accents[3], top: '-8%', right: '5%' }} />
//                     <div className="pointer-events-none absolute w-48 h-48 rounded-full blur-[80px] opacity-[0.12]" style={{ background: accents[0], bottom: '0%', right: '15%' }} />
//                     <svg className="pointer-events-none absolute top-10 right-10 w-16 h-16 opacity-[0.15] hidden lg:block" viewBox="0 0 40 40" fill="none">
//                         <circle cx="20" cy="20" r="18" stroke="#14161F" strokeWidth="1" strokeDasharray="3 4" />
//                     </svg>

//                     {/* Floating tag drifting near headline */}
//                     {/* <motion.div
//                         initial={{ opacity: 0, y: 10, rotate: 4 }}
//                         animate={{ opacity: 1, y: 0, rotate: 4 }}
//                         transition={{ duration: 0.6, delay: 0.55 }}
//                         className="absolute top-8 right-6 sm:right-10 rounded-xl border border-black/[0.08] bg-white px-3 py-2 shadow-sm hidden sm:block"
//                     >
//                         <p className="text-xs font-semibold text-[#14161F] flex items-center gap-1">
//                             <FaStar className="text-amber-400 w-3 h-3" /> 4.9/5 rated
//                         </p>
//                     </motion.div> */}

//                     <div className="relative max-w-xl">
//                         <motion.h1
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//                             className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#14161F] tracking-tight leading-[1.15] mb-5"
//                         >
//                             strategies that actually move the needle.
//                         </motion.h1>

//                         <motion.p
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.2 }}
//                             className="text-[#64748B] text-base lg:text-lg leading-relaxed mb-8"
//                         >
//                             We help businesses rank higher, get more traffic, generate quality leads,
//                             and increase revenue with customized strategies.
//                         </motion.p>

//                         <motion.div
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.35 }}
//                             className="flex flex-wrap gap-x-6 gap-y-3 mb-9"
//                         >
//                             {featureList.map((item) => (
//                                 <div key={item.label} className="flex items-center gap-2 text-[#14161F]">
//                                     <FaCheckCircle className="w-4 h-4" style={{ color: item.accent }} />
//                                     <span className="text-sm lg:text-[15px] font-medium">{item.label}</span>
//                                 </div>
//                             ))}
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 16 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.5 }}
//                             className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8"
//                         >
//                             <Link href="/contact-us" className="w-full sm:w-auto">
//                                 <button className="w-full text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-transform active:scale-95 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#3355FF] to-[#7C5CFF] shadow-lg shadow-indigo-500/25">
//                                     Get Free SEO Audit
//                                     <FaArrowRight className="w-3.5 h-3.5" />
//                                 </button>
//                             </Link>
//                             <Link href="#faq" className="w-full sm:w-auto">
//                                 <button className="w-full bg-white hover:bg-gray-50 border border-black/[0.1] text-[#14161F] px-8 py-3.5 rounded-full font-semibold text-sm transition-all active:scale-95 flex items-center justify-center gap-2.5">
//                                     <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
//                                     Talk to Expert
//                                 </button>
//                             </Link>
//                         </motion.div>

//                         {/* Avatar-stack proof row */}
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.65 }}
//                             className="flex items-center gap-3"
//                         >
//                             <div className="flex -space-x-2.5">
//                                 {avatarStack.map((a) => (
//                                     <div
//                                         key={a.initials}
//                                         className="h-8 w-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white ring-2 ring-[#F6F7F9]"
//                                         style={{ backgroundColor: a.accent }}
//                                     >
//                                         {a.initials}
//                                     </div>
//                                 ))}
//                             </div>
//                             <div>
//                                 <div className="flex items-center gap-0.5">
//                                     {[...Array(5)].map((_, i) => (
//                                         <FaStar key={i} className="text-amber-400 w-3 h-3" />
//                                     ))}
//                                 </div>
//                                 <p className="text-[#64748B] text-xs">
//                                     <span className="font-semibold text-[#14161F]">500+</span> businesses grown
//                                 </p>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>

//             {/* Slow keyword marquee along the bottom edge */}
//             <div className="relative border-t border-black/[0.06] bg-[#F6F7F9] py-3 overflow-hidden">
//                 <motion.div
//                     className="flex w-max gap-8"
//                     animate={{ x: ['0%', '-50%'] }}
//                     transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
//                 >
//                     {[...marqueeItems, ...marqueeItems].map((item, i) => (
//                         <span key={i} className="flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-[#94A3B8] whitespace-nowrap">
//                             {item}
//                             <span style={{ color: accents[i % accents.length] }}>-</span>
//                         </span>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

// new hero

// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
// import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
// import { motion, AnimatePresence } from 'framer-motion';

// /**
//  * A proper full-bleed hero: one dramatic, immersive dark canvas with a
//  * single dominant headline as the focal point, instead of content
//  * broken into panels or tiles. Richness comes from the background
//  * (layered glows, drifting particles, a big graphic sparkline, a fine
//  * grid) and from craft in the typography - not from adding more boxes.
//  */

// const services = ['SEO', 'PPC', 'Content', 'Branding', 'Web'];
// const accents = ['#16C784', '#FF6B4A', '#3355FF', '#8B5CF6'];

// const featureList = [
//     { label: 'Increase Organic Traffic', accent: accents[0] },
//     { label: 'Generate Quality Leads', accent: accents[2] },
//     { label: 'Maximize ROI & Revenue', accent: accents[3] },
// ];

// const marqueeItems = [
//     'SEO Strategy', 'Paid Ads', 'Content Growth', 'Web Design', 'Local SEO',
//     'Noida', 'Delhi', 'Mumbai', 'Technical Audits', 'Brand Identity',
// ];

// const particles = Array.from({ length: 10 }, (_, i) => ({
//     id: i,
//     left: `${8 + i * 9}%`,
//     size: 3 + (i % 3),
//     delay: i * 0.4,
//     duration: 6 + (i % 4),
//     accent: accents[i % accents.length],
// }));

// const Hero = () => {
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setIndex((prev) => (prev + 1) % services.length);
//         }, 2200);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <section className="relative w-full min-h-screen max-h-[1100px] flex flex-col bg-[#0E0F16] overflow-hidden">
//             {/* Layered background glows */}
//             <div className="pointer-events-none absolute w-[560px] h-[560px] rounded-full blur-[130px] opacity-25" style={{ background: `radial-gradient(circle, ${accents[2]}, transparent 70%)`, top: '-10%', left: '-8%' }} />
//             <div className="pointer-events-none absolute w-[460px] h-[460px] rounded-full blur-[120px] opacity-[0.18]" style={{ background: `radial-gradient(circle, ${accents[3]}, transparent 70%)`, bottom: '-12%', right: '-6%' }} />
//             <div className="pointer-events-none absolute w-[320px] h-[320px] rounded-full blur-[110px] opacity-[0.14]" style={{ background: `radial-gradient(circle, ${accents[0]}, transparent 70%)`, top: '20%', right: '15%' }} />

//             {/* Big graphic sparkline spanning the canvas */}
//             <svg className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-[0.14]" viewBox="0 0 1200 700" preserveAspectRatio="none" fill="none">
//                 <path
//                     d="M0,560 C160,540 240,420 380,440 C500,458 540,300 680,320 C800,338 840,180 1000,200 C1090,212 1130,120 1200,100"
//                     stroke="url(#heroLine)" strokeWidth="3"
//                 />
//                 <defs>
//                     <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
//                         <stop offset="0%" stopColor={accents[0]} />
//                         <stop offset="50%" stopColor={accents[2]} />
//                         <stop offset="100%" stopColor={accents[3]} />
//                     </linearGradient>
//                 </defs>
//             </svg>

//             {/* Fine dot grid */}
//             <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '34px 34px' }} />

//             {/* Drifting particles */}
//             {particles.map((p) => (
//                 <motion.span
//                     key={p.id}
//                     className="pointer-events-none absolute rounded-full"
//                     style={{ left: p.left, top: '65%', width: p.size, height: p.size, backgroundColor: p.accent, boxShadow: `0 0 8px ${p.accent}` }}
//                     animate={{ y: [0, -220, 0], opacity: [0, 0.8, 0] }}
//                     transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
//                 />
//             ))}

//             {/* Main content */}
//             <div className="relative z-10 flex-1 flex items-center justify-center px-6">
//                 <div className="max-w-4xl mx-auto text-center py-24">
                    

//                     <motion.h1
//                         initial={{ opacity: 0, y: 24 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//                         className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white tracking-tight leading-[1.08] mb-6"
//                     >
//                         Grow your business with
//                         <br />
//                         <span className="relative inline-block min-w-[210px] sm:min-w-[280px] text-left align-bottom">
//                             <AnimatePresence mode="wait">
//                                 <motion.span
//                                     key={services[index]}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     exit={{ opacity: 0, y: -20 }}
//                                     transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
//                                     className="inline-block bg-gradient-to-r from-[#5B7CFF] to-[#B79CFF] bg-clip-text text-transparent"
//                                 >
//                                     {services[index]}
//                                 </motion.span>
//                             </AnimatePresence>
//                             <span className="text-[#5B7CFF] animate-pulse ml-1">|</span>
//                         </span>{' '}
//                         strategies.
//                     </motion.h1>

//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.3 }}
//                         className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
//                     >
//                         We help businesses rank higher, get more traffic, generate quality leads,
//                         and increase revenue with customized strategies.
//                     </motion.p>

//                     <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.42 }}
//                         className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10"
//                     >
//                         {featureList.map((item) => (
//                             <div key={item.label} className="flex items-center gap-2 text-slate-200">
//                                 <FaCheckCircle className="w-4 h-4" style={{ color: item.accent }} />
//                                 <span className="text-sm font-medium">{item.label}</span>
//                             </div>
//                         ))}
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, y: 16 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.54 }}
//                         className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
//                     >
//                         <Link href="/contact-us" className="w-full sm:w-auto">
//                             <button className="w-full text-white px-9 py-4 rounded-full font-semibold text-sm transition-transform active:scale-95 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#3355FF] to-[#7C5CFF] shadow-xl shadow-indigo-500/25">
//                                 Get Free SEO Audit
//                                 <FaArrowRight className="w-3.5 h-3.5" />
//                             </button>
//                         </Link>
//                         <Link href="#faq" className="w-full sm:w-auto">
//                             <button className="w-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white px-9 py-4 rounded-full font-semibold text-sm transition-all active:scale-95 flex items-center justify-center gap-2.5">
//                                 <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
//                                 Talk to Expert
//                             </button>
//                         </Link>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.68 }}
//                         className="flex items-center justify-center gap-2"
//                     >
//                         <div className="flex items-center gap-0.5">
//                             {[...Array(5)].map((_, i) => (
//                                 <FaStar key={i} className="text-amber-400 w-3.5 h-3.5" />
//                             ))}
//                         </div>
//                         <p className="text-slate-400 text-sm">
//                             <span className="font-semibold text-white">4.9/5</span> from{' '}
//                             <span className="font-semibold text-white">500+</span> businesses
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Scroll cue */}
//             <motion.div
//                 className="relative z-10 mx-auto mb-6 hidden sm:flex flex-col items-center gap-1"
//                 animate={{ y: [0, 6, 0] }}
//                 transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
//             >
//                 <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Scroll</span>
//                 <div className="h-8 w-[1.5px] bg-gradient-to-b from-slate-500 to-transparent" />
//             </motion.div>

//             {/* Bottom keyword marquee, transitions into the next section */}
//             <div className="relative z-10 border-t border-white/10 py-3 overflow-hidden bg-white/[0.02]">
//                 <motion.div
//                     className="flex w-max gap-8"
//                     animate={{ x: ['0%', '-50%'] }}
//                     transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
//                 >
//                     {[...marqueeItems, ...marqueeItems].map((item, i) => (
//                         <span key={i} className="flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-slate-500 whitespace-nowrap">
//                             {item}
//                             <span style={{ color: accents[i % accents.length] }}>-</span>
//                         </span>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaStar, FaCheckCircle, FaArrowRight, FaSearch } from 'react-icons/fa';
import { HiOutlineChatBubbleLeftRight, HiArrowTrendingUp } from 'react-icons/hi2';
import { motion } from 'framer-motion';

/**
 * The previous versions were all mood/abstraction (gradients, sparklines,
 * bento tiles) with no actual SEO content. This one leads with the
 * product itself: a live search-results mockup showing the client's
 * site climbing to position #1, plus a real rank counter. It should
 * read unmistakably as "an SEO company's hero," not just "an agency."
 */

const accents = { green: '#16C784', coral: '#FF6B4A', indigo: '#3355FF', violet: '#8B5CF6' };

const featureList = [
    { label: 'Increase Organic Traffic', accent: accents.green },
    { label: 'Generate Quality Leads', accent: accents.indigo },
    { label: 'Maximize ROI & Revenue', accent: accents.violet },
];

const trackedKeywords = [
    { term: 'digital marketing agency', rank: 1, delta: 12 },
    { term: 'seo services noida', rank: 2, delta: 8 },
    { term: 'ppc management company', rank: 3, delta: 5 },
];

const competitorResults = [
    { site: 'competitor-one.com', title: 'Digital Marketing Services | CompetitorOne' },
    { site: 'agency-generic.in', title: 'Top Marketing Agency in India | Generic' },
];

const SEARCH_QUERY = 'best digital marketing agency';

const Hero = () => {
    const [typed, setTyped] = useState('');
    const [rank, setRank] = useState(68);

    useEffect(() => {
        let i = 0;
        const iv = setInterval(() => {
            i += 1;
            setTyped(SEARCH_QUERY.slice(0, i));
            if (i >= SEARCH_QUERY.length) clearInterval(iv);
        }, 55);
        return () => clearInterval(iv);
    }, []);

    useEffect(() => {
        if (rank <= 1) return;
        const t = setTimeout(() => setRank((r) => Math.max(1, r - Math.max(1, Math.ceil(r / 5)))), 140);
        return () => clearTimeout(t);
    }, [rank]);

    return (
        <section className="relative w-full overflow-hidden bg-[#F6F7F9] py-20 lg:py-0 lg:min-h-[92vh] flex items-center">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{ backgroundImage: 'radial-gradient(#14161F 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />
            <div
                className="pointer-events-none absolute w-[420px] h-[420px] rounded-full blur-[120px] opacity-[0.12]"
                style={{ background: `radial-gradient(circle, ${accents.indigo}, transparent 70%)`, top: '-5%', right: '-5%' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

                {/* LEFT - copy */}
                <div className="text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-4 py-1.5 mb-6"
                    >
                        <FaSearch className="w-3 h-3 text-[#3355FF]" />
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#64748B]">
                            SEO &amp; search growth agency
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-[#14161F] tracking-tight leading-[1.08] mb-6"
                    >
                        From page 3 to Google's{' '}
                        <span
                            className="inline-block bg-gradient-to-r from-[#3355FF] to-[#8B5CF6] bg-clip-text text-transparent tabular-nums"
                        >
                            #{rank}
                        </span>{' '}
                        result.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="text-[#64748B] text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
                    >
                        We help businesses rank higher, get more organic traffic, generate quality leads,
                        and increase revenue with SEO strategies built around real keyword data.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mb-9"
                    >
                        {featureList.map((item) => (
                            <div key={item.label} className="flex items-center gap-2 text-[#14161F]">
                                <FaCheckCircle className="w-4 h-4" style={{ color: item.accent }} />
                                <span className="text-sm md:text-[15px] font-medium">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
                    >
                        <Link href="/contact-us" className="w-full sm:w-auto">
                            <button className="w-full text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-transform active:scale-95 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#3355FF] to-[#7C5CFF] shadow-lg shadow-indigo-500/25">
                                Get Free SEO Audit
                                <FaArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </Link>
                        <Link href="#faq" className="w-full sm:w-auto">
                            <button className="w-full bg-white hover:bg-gray-50 border border-black/[0.1] text-[#14161F] px-8 py-3.5 rounded-full font-semibold text-sm transition-all active:scale-95 flex items-center justify-center gap-2.5">
                                <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
                                Talk to Expert
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center justify-center lg:justify-start gap-2"
                    >
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-amber-400 w-3.5 h-3.5" />
                            ))}
                        </div>
                        <p className="text-[#64748B] text-xs sm:text-sm">
                            <span className="font-semibold text-[#14161F]">4.9/5</span> from{' '}
                            <span className="font-semibold text-[#14161F]">500+</span> businesses ranked
                        </p>
                    </motion.div>
                </div>

                {/* RIGHT - live search results mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mx-auto max-w-md lg:max-w-none"
                >
                    <div className="rounded-2xl border border-black/[0.08] bg-white shadow-[0_30px_60px_-24px_rgba(20,22,31,0.18)] overflow-hidden">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 border-b border-black/[0.06] bg-[#F6F7F9] px-4 py-2.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B4A]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#16C784]" />
                            <div className="ml-2 flex-1 rounded-md bg-white border border-black/[0.06] px-3 py-1 text-[11px] text-[#94A3B8] truncate">
                                google.com/search?q={SEARCH_QUERY.replace(/ /g, '+')}
                            </div>
                        </div>

                        {/* Search bar */}
                        <div className="px-5 pt-4 pb-3 border-b border-black/[0.06]">
                            <div className="flex items-center gap-2.5 rounded-full border border-black/[0.1] px-4 py-2.5">
                                <FaSearch className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                                <span className="text-sm text-[#14161F]">
                                    {typed}
                                    <span className="inline-block w-[1px] h-4 bg-[#14161F] ml-0.5 align-middle animate-pulse" />
                                </span>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="px-5 py-4 space-y-4">
                            {/* Client's result - #1, highlighted */}
                            <div className="relative rounded-xl border-l-4 pl-4 py-1" style={{ borderColor: accents.green }}>
                                <span className="absolute -top-2 right-0 inline-flex items-center gap-1 rounded-full bg-[#16C784]/10 px-2 py-0.5 text-[10px] font-bold" style={{ color: accents.green }}>
                                    <HiArrowTrendingUp className="w-3 h-3" /> #1
                                </span>
                                <p className="text-[11px] text-[#16C784] font-medium">yourbusiness.com</p>
                                <p className="text-[15px] font-semibold" style={{ color: accents.indigo }}>
                                    Best Digital Marketing Agency - SEO India Tech
                                </p>
                                <p className="text-xs text-[#64748B] leading-relaxed mt-0.5">
                                    Result-driven SEO, PPC, and content strategies that turn traffic into revenue.
                                </p>
                            </div>

                            {/* Muted competitor results */}
                            {competitorResults.map((r) => (
                                <div key={r.site} className="pl-4 py-1 opacity-50">
                                    <p className="text-[11px] text-[#94A3B8]">{r.site}</p>
                                    <p className="text-sm font-medium text-[#475569] truncate">{r.title}</p>
                                </div>
                            ))}
                        </div>

                        {/* Tracked keyword ranks */}
                        <div className="border-t border-black/[0.06] px-5 py-4 bg-[#F6F7F9]">
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#94A3B8] mb-3">Tracked keywords</p>
                            <div className="space-y-2.5">
                                {trackedKeywords.map((k) => (
                                    <div key={k.term} className="flex items-center justify-between">
                                        <span className="text-xs text-[#475569] truncate pr-2">{k.term}</span>
                                        <span className="flex items-center gap-2 shrink-0">
                                            <span className="font-mono text-xs font-semibold text-[#14161F]">#{k.rank}</span>
                                            <span className="flex items-center gap-0.5 text-[11px] font-semibold" style={{ color: accents.green }}>
                                                <HiArrowTrendingUp className="w-3 h-3" /> {k.delta}
                                            </span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Floating badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="absolute -top-4 -left-4 rotate-[-4deg] rounded-xl border border-black/[0.07] bg-white px-3 py-2 shadow-lg"
                    >
                        <p className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8]">Avg. time to rank #1</p>
                        <p className="text-sm font-bold text-[#14161F]">90 days</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;