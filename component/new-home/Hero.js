"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    'SEO Strategies',
    'Digital Marketing',
    'Content Growth',
    'Paid Advertising',
    'Web Solutions',
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-screen max-h-[1000px] min-h-[600px] flex items-center justify-center overflow-hidden">

            {/* 1. BACKGROUND IMAGE - Using a professional marketing/tech image from Unsplash */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                    alt="Business Results"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay that is light enough to see the image but dark enough to read text */}
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90" />
            </div>

            {/* 2. CONTENT AREA */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-8 md:pt-24 md:pb-12 text-center flex flex-col items-center justify-center">

                {/* Social Proof Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md px-6 py-2.5 rounded-2xl mb-6 md:mb-8"
                >
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 w-3 h-3" />
                        ))}
                    </div>
                    <div className="h-4 w-px bg-white/20 hidden sm:block" />
                    <p className="text-white text-xs font-semibold tracking-wide">
                        Trusted by <span className="text-blue-400">500+</span> Businesses | <span className="text-blue-400">4.9/5</span> Rating
                    </p>
                </motion.div>

                {/* Main Headline */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4 md:mb-6">
                    Grow Your Business with <br className="hidden md:block" />
                    <span className="text-white">Result-Driven </span>
                    <div className="relative inline-block min-w-[200px] text-left align-bottom">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={services[index]}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                            >
                                {services[index]}
                            </motion.span>
                        </AnimatePresence>
                        <span className="text-blue-500 animate-pulse ml-1">|</span>
                    </div>
                </h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-200 text-sm md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8"
                >
                    We help businesses rank higher, get more traffic, generate quality leads,
                    and increase revenue with customized strategies.
                </motion.p>

                {/* Features List */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-10"
                >
                    {['Increase Organic Traffic', 'Generate Quality Leads', 'Maximize ROI & Revenue'].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-white/90">
                            <FaCheckCircle className="text-blue-400 w-4 h-4" />
                            <span className="text-sm md:text-base font-medium">{item}</span>
                        </div>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5"
                >
                    <Link href="/contact-us" className="w-full sm:w-auto">
                        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-sm transition-all shadow-xl shadow-blue-600/30 active:scale-95 flex items-center justify-center gap-3 cursor-pointer">
                            GET FREE SEO AUDIT
                            <FaArrowRight className="w-4 h-4" />
                        </button>
                    </Link>

                    <Link href="/contact-us" className="w-full sm:w-auto">
                        <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold text-sm transition-all active:scale-95 flex items-center justify-center gap-3 cursor-pointer">
                            <HiOutlineChatBubbleLeftRight className="w-5 h-5" />
                            TALK TO EXPERT
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />

        </section>
    );
};

export default Hero;
