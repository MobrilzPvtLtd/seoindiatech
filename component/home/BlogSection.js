import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar, User, Sparkles, Filter, Grid3X3, LayoutList } from 'lucide-react'
import posts from '@/utils/BlogPost'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const latestPosts = posts.slice(0, 6)

const categoryColors = {
  'SEO & AI': 'bg-violet-600',
  'Local SEO': 'bg-emerald-600',
  'Social Media Marketing': 'bg-orange-600',
  'Agentic AI & SEO': 'bg-blue-600',
}

const BlogSection = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [viewMode, setViewMode] = useState('grid')

  const filters = ['All', 'Blogs', 'News', 'Case Studies', 'Interviews']

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )

      gsap.fromTo(gridRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: gridRef.current, start: 'top 90%', toggleActions: 'play none none none' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef}>
          {/* INSIGHTS Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500" />
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase">
              Insights
            </span>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-violet-500 to-transparent" />
          </div>

          {/* Title and Action Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Latest News &amp; Insights
              </h2>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-lg">
                Stay updated with the latest trends and strategies
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all group shrink-0"
            >
              <span>View all</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Filter Bar - As shown in screenshot */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200 dark:border-gray-800 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Filter by</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* View Toggle - Optional */}
            <div className="flex items-center gap-1 border border-gray-200 dark:border-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Column Grid - Full Card Background Images */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.slice(0, 3).map((post, idx) => (
            <Link key={idx} href={`/blog/${post.slug}`} className="group block h-full">
              <article className="relative h-[420px] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={idx === 0}
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 group-hover:via-black/40 transition-all duration-500" />
                </div>

                {/* Content - Positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`${categoryColors[post.category] || 'bg-blue-600'} text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase shadow-lg`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-white/70 text-sm line-clamp-2">
                    {post.desc}
                  </p>

                  {/* Footer with Author & Meta */}
                  <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-xs">
                        JD
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">John Doe</p>
                        <div className="flex items-center gap-2 text-white/50 text-xs">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> 4 min read
                          </span>
                          <span>•</span>
                          <span>Dec 15, 2024</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-white font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Gradient overlay on hover for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection