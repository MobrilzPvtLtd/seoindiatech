"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";

const CARDS = [
    {
        title: "SEO & AI Visibility",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    },
    {
        title: "Social Media",
        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
    },
    {
        title: "Content & Video",
        img: "https://images.unsplash.com/photo-1492691523569-ec806d77341f?q=80&w=800",
    },
    {
        title: "UI/UX Design",
        img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800",
    },
    {
        title: "Brand Strategy",
        img: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800",
    },
    {
        title: "Performance Marketing",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    },
    {
        title: "PR & Reputation",
        img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800",
    },
    {
        title: "Web Engineering",
        img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800",
    },
    {
        title: "App Store Optimization",
        img: "https://images.unsplash.com/photo-1551650975-87deeddbee77?q=80&w=800",
    },
    {
        title: "Market Analysis",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    },
];

export default function NewCardSection() {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // 1. Heading Scale: Shrinks from 1 to 0.45
    const titleScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.45]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);

    // 2. Diagonal Movement Track
    // Adjust x start percentage to show 2-3 cards initially
    const xMovement = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);
    // Upward diagonal slope
    const yMovement = useTransform(scrollYProgress, [0, 1], ["15vh", "-15vh"]);

    const springX = useSpring(xMovement, { stiffness: 70, damping: 22 });
    const springY = useSpring(yMovement, { stiffness: 70, damping: 22 });

    return (
        <section ref={targetRef} className="relative h-[500vh] bg-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                {/* Dynamic Scaling Heading */}
                <motion.div
                    style={{ scale: titleScale, opacity: titleOpacity }}
                    className="absolute left-10 md:left-24 z-30 pointer-events-none origin-left"
                >
                    <h2 className="text-5xl md:text-7xl font-black leading-[0.85] uppercase tracking-tighter italic text-black">
                        <span className="text-[#1108ff] block">Full Stack,</span>
                        <span className="block">Powered by AI</span>
                    </h2>
                    <p className="mt-4 text-black/40 text-base md:text-lg font-medium max-w-xs">
                        Everything your campaign needs, with AI working across every part of
                        it:
                    </p>
                </motion.div>

                {/* Diagonal Moving Track */}
                <motion.div
                    style={{ x: springX, y: springY }}
                    className="flex gap-6 md:gap-10 pl-[55vw] relative z-20"
                >
                    {CARDS.map((card, index) => (
                        <HorizontalCard
                            key={index}
                            card={card}
                            progress={scrollYProgress}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* Bottom UI Elements */}
                <div className="absolute bottom-10 left-10 md:left-24 z-30 flex items-center gap-6">
                    <div className="flex gap-2">
                        <button className="h-10 w-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all">
                            <ArrowLeft size={18} />
                        </button>
                        <button className="h-10 w-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all">
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

const HorizontalCard = ({ card, progress, index }) => {
    // Staggered flick rotation
    const rotate = useTransform(
        progress,
        [0, 0.15 + index * 0.05, 0.45 + index * 0.05, 1],
        [10, 5, -5, -15],
    );

    return (
        <motion.div
            style={{ rotate }}
            className="group relative h-[300px] w-[230px] md:h-[420px] md:w-[300px] shrink-0 overflow-hidden rounded-[24px] bg-white border border-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
        >
            <img
                src={card.img}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

            {/* Card Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-end justify-between gap-3">
                    <h3 className="text-white text-lg md:text-xl font-bold tracking-tight uppercase leading-tight">
                        {card.title}
                    </h3>
                    <div className="h-8 w-8 shrink-0 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#1108ff] transition-all">
                        <ArrowUpRight size={16} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

