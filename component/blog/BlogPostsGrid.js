import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import posts from '@/utlis/BlogPost'

const BlogPostsGrid = () => (
  <section className="py-12 md:py-10 px-4 md:px-8 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="relative mb-12 border-b border-gray-200 dark:border-gray-800 pb-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mt-3">
          Latest Insights
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xltext-center">
          Keep your business future-ready with fresh strategies and smart tools.
        </p>
        <div className="mx-auto mt-3 w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post, idx) => (
          <Link key={idx} href={`/blog/${post.slug}`} className="group">
            <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-full">
              {/* Image */}
              {post.image && (
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Category Badge */}
                  <div className="absolute left-4 top-4 bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-md z-10">
                    {post.category}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
                </div>
              )}

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 md:p-6">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 mb-4 line-clamp-3">
                  {post.desc}
                </p>

                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 w-fit">
                  <BookOpen className="w-4 h-4 mr-1.5" />
                  Read Article
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default BlogPostsGrid
