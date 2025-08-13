import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import posts from "@/utlis/BlogPost";

// Example blog data (replace with your dynamic data as needed)


const BlogPostsGrid = () => (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
            {/* Section header with improved styling */}
            <div className="relative mb-12 border-b border-gray-200 dark:border-gray-800 pb-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Latest Insights</h2>
                    <Link href="/blog" className="hidden inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors">
                        View all articles
                        <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                    Stay up-to-date with the latest strategies, tools, and insights for growing your business.
                </p>
                <span className="absolute left-0 bottom-0 w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full"></span>
            </div>
            
            {/* Blog posts grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {posts.map((post, idx) => (
                     <Link key={idx} href={`/blog/${post.slug}`} className="group">
                    <article
                        key={idx}
                        className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-full"
                    >
                        {/* Image container */}
                        {post.image && (
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                
                                {/* Category badge */}
                                <div className="absolute left-4 top-4 bg-blue-600 dark:bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-md z-10">
                                    {post.category}
                                </div>
                                
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                                
                                {/* Post metadata on image */}
                                <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between text-white">
                                    <div className="flex items-center text-xs">
                                        <Calendar className="w-3.5 h-3.5 mr-1 opacity-80" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center text-xs">
                                        <Clock className="w-3.5 h-3.5 mr-1 opacity-80" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {/* Content */}
                        <div className="flex flex-col flex-1 p-5 md:p-6">
                            {/* Title with decoration */}
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                {post.title.includes(":") ? (
                                    <>
                                        <span className="text-blue-600 dark:text-blue-400">
                                            {post.title.split(":")[0]}:
                                        </span>
                                        <span className="text-gray-900 dark:text-white">
                                            {post.title.split(":").slice(1).join(":")}
                                        </span>
                                    </>
                                ) : post.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 mb-4 line-clamp-3">{post.desc}</p>
                            
                            {/* Read more button */}
                            <span
                                // href={post.link}
                                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700/60 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-all duration-300 w-auto self-start"
                            >
                                <BookOpen className="w-4 h-4 mr-1.5" />
                                Read Article
                                <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </div>
                    </article>
                    </Link>
                ))}
            </div>
            
            {/* Newsletter signup - optional */}
            <div className="hidden mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-10 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">Get the latest articles in your inbox</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
                    Subscribe to our newsletter and never miss out on the latest insights, tips, and trends.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-800 dark:bg-blue-500 text-white font-medium rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    </section>
);

export default BlogPostsGrid;