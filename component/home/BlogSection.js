import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar, User } from 'lucide-react'
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
    <section ref={sectionRef} className="relative py-14 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with accent line */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-100/60 dark:border-blue-800/30 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-300 tracking-wider uppercase">
              Our Blog
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Insights from the{' '}
            <span className="text-blue-600 dark:text-blue-400">Digital Frontier</span>
          </h2>
        </div>

        {/* Featured Post - Hero Style */}
        <div ref={gridRef} className="mb-8">
          <Link href={`/blog/${latestPosts[0].slug}`} className="group block">
            <article className="relative rounded-3xl overflow-hidden bg-gray-900">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={latestPosts[0].image}
                  alt={latestPosts[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-3xl">
                  <span className={`inline-block ${categoryColors[latestPosts[0].category] || 'bg-blue-600'} text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase mb-4`}>
                    {latestPosts[0].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors">
                    {latestPosts[0].title}
                  </h3>
                  <p className="mt-3 text-white/80 text-base md:text-lg line-clamp-2">
                    {latestPosts[0].desc}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-6 text-white/60 text-sm">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" /> Admin
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Dec 15, 2024
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> 5 min read
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>

        {/* Grid Posts - Magazine Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.slice(1, 4).map((post, idx) => (
            <Link key={idx} href={`/blog/${post.slug}`} className="group block">
              <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${categoryColors[post.category] || 'bg-blue-600'} text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                    {post.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400 dark:text-gray-500 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Dec 15
                      </span>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Bottom Posts - Minimal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {latestPosts.slice(4, 6).map((post, idx) => (
            <Link key={idx} href={`/blog/${post.slug}`} className="group block">
              <article className="flex gap-5 bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500">
                <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <span className={`inline-block ${categoryColors[post.category] || 'bg-blue-600'} text-white text-[8px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase w-fit mb-2`}>
                    {post.category}
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-3 text-gray-400 dark:text-gray-500 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Dec 15
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 5 min
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 text-sm"
          >
            Explore All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
