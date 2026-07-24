import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import posts from '@/utils/BlogPost'

const WALL_SIZE = 15
const wallPosts = Array.from({ length: WALL_SIZE }, (_, i) => ({
    ...posts[i % posts.length],
    _key: i,
    offset: i % 3 === 0 ? 'mt-0' : i % 3 === 1 ? 'mt-12' : 'mt-24',
}))

const Blog = () => {
    const sectionRef = useRef(null)
    const [touching, setTouching] = useState(false)
    const startX = useRef(0)

    const handleTouchStart = (e) => {
        setTouching(true)
        startX.current = e.touches[0].clientX
        if (sectionRef.current) {
            const track = sectionRef.current.querySelector('.animate-marquee')
            if (track) track.style.animationPlayState = 'paused'
        }
    }

    const handleTouchMove = (e) => {
        if (!touching || !sectionRef.current) return
        const track = sectionRef.current.querySelector('.animate-marquee')
        if (!track) return
        const diff = startX.current - e.touches[0].clientX
        const currentTransform = getComputedStyle(track).transform
        let currentX = 0
        if (currentTransform !== 'none') {
            const matrix = new DOMMatrix(currentTransform)
            currentX = matrix.m41
        }
        track.style.transform = `translateX(${currentX - diff}px)`
        startX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        setTouching(false)
        if (sectionRef.current) {
            const track = sectionRef.current.querySelector('.animate-marquee')
            if (track) {
                track.style.transform = ''
                track.style.animationPlayState = 'running'
            }
        }
    }

    return (
        <section ref={sectionRef} className="relative py-20 md:py-40 bg-white overflow-x-hidden overflow-y-visible flex flex-col items-center">

            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            />

            {/* Card Marquee Wall */}
            <div className="w-full relative z-10 overflow-hidden">
                <div
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="flex gap-10 animate-marquee"
                >
                    {[...wallPosts, ...wallPosts].map((post, i) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={`${post._key}-${i}`}
                            className={`relative w-[220px] sm:w-[250px] h-[300px] sm:h-[350px] shrink-0 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-rotate-3 hover:scale-110 hover:z-30 group cursor-pointer ${post.offset}`}
                        >
                            <img
                                src={post.image || "https://randomuser.me/api/portraits/men/1.jpg"}
                                alt={post.title}
                                className="w-full h-full object-cover pointer-events-none"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                                <h3 className="text-white text-xs sm:text-sm font-semibold leading-tight line-clamp-2 drop-shadow-lg">{post.title}</h3>
                                <span className="text-blue-300 text-[10px] sm:text-xs mt-1 inline-block">{post.category}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Centered Content Below the Wall */}
            <div className="relative z-20 flex flex-col items-center text-center px-6 mt-8">

                <div className="relative">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                        <span className="text-slate-900 block">Latest news</span>
                        <span className="text-slate-400">&amp; insights that matter</span>
                    </h2>

                    <p className="mt-6 max-w-lg mx-auto text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                        Stay updated with the strategies, trends, and stories shaping SEO today.
                    </p>

                    <Link
                        href="/blog"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-8 py-4 text-sm font-semibold hover:bg-slate-800 transition-all hover:gap-4 shadow-lg shadow-slate-900/20"
                    >
                        View all articles
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    )
}

export default Blog
