import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, TrendingUp, Calendar, User, Tag } from 'lucide-react'
import posts from '@/utils/BlogPost'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const latestPosts = posts.slice(0, 6)

const categoryColors = {
  'SEO & AI': 'from-violet-500 to-purple-600',
  'Local SEO': 'from-emerald-500 to-teal-600',
  'Social Media Marketing': 'from-orange-500 to-red-500',
  'Agentic AI & SEO': 'from-blue-500 to-indigo-600',
}

const BlogSection = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      )

      gsap.fromTo(gridRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: gridRef.current, start: 'top 90%', toggleActions: 'play none none none' } }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03] dark:opacity-[0.05]" />
      
      {/* Animated gradient orbs - Light Mode */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse dark:bg-blue-500/5" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000 dark:bg-purple-500/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-500 dark:bg-cyan-500/3" />

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400/30 dark:bg-blue-400/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 12}s infinite ease-in-out ${Math.random() * 6}s`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={`p-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/20 dark:bg-purple-400/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 14}s infinite ease-in-out ${Math.random() * 8}s`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Glowing line decorations */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-2xl dark:from-blue-500/5" />
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-2xl dark:from-purple-500/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50 px-5 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wider uppercase">
              Insights & Updates
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            From Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Expert insights, industry trends, and actionable strategies for digital success.
          </p>
        </div>

        {/* Grid - 1,2,3 layout */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Post - Featured (Spans full width on mobile, 2 columns on desktop) */}
          <div className="md:col-span-2">
            <Link href={`/blog/${latestPosts[0].slug}`} className="group block h-full">
              <article className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <Image
                    src={latestPosts[0].image}
                    alt={latestPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className={`inline-block bg-gradient-to-r ${categoryColors[latestPosts[0].category] || 'from-blue-500 to-blue-600'} text-white text-[10px] font-bold px-3 py-1.5 rounded-lg tracking-wider uppercase mb-3`}>
                      {latestPosts[0].category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight line-clamp-2 group-hover:text-blue-200 transition-colors">
                      {latestPosts[0].title}
                    </h3>
                    <p className="mt-2 text-white/70 text-sm line-clamp-2">
                      {latestPosts[0].desc}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-white/50 text-xs">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> Admin
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Dec 15, 2024
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* Right Column - 2 Posts stacked */}
          <div className="space-y-6">
            {latestPosts.slice(1, 3).map((post, idx) => (
              <Link key={idx} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="relative sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent sm:bg-gradient-to-r" />
                    </div>
                    <div className="p-5 sm:w-3/5 flex flex-col justify-center">
                      <span className={`inline-block bg-gradient-to-r ${categoryColors[post.category] || 'from-blue-500 to-blue-600'} text-white text-[8px] font-bold px-2.5 py-1 rounded-lg tracking-wider uppercase w-fit mb-2`}>
                        {post.category}
                      </span>
                      <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-1 mt-1">
                        {post.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom 3 Posts */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {latestPosts.slice(3, 6).map((post, idx) => (
            <Link key={idx} href={`/blog/${post.slug}`} className="group block">
              <article className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block bg-gradient-to-r ${categoryColors[post.category] || 'from-blue-500 to-blue-600'} text-white text-[8px] font-bold px-2.5 py-1 rounded-lg tracking-wider uppercase`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mt-2">
                    {post.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-gray-400 dark:text-gray-500 text-xs">
                      <Clock className="w-3 h-3" /> 5 min read
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95 text-sm shadow-lg shadow-blue-500/25"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-15px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-25px) translateX(-5px);
            opacity: 1;
          }
          75% {
            transform: translateY(-10px) translateX(15px);
            opacity: 0.6;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.5;
          }
          50% { 
            transform: scale(1.1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default BlogSection