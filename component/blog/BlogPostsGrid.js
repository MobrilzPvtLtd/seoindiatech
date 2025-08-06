import React from "react";

// Example blog data (replace with your dynamic data as needed)
const posts = [
    {
        image: "/images/seo-banner.jpg",
        title: "The Rise of AI Marketing Assistants: How Businesses Are Scaling Faster with Automation in 2025",
        desc: "The Rise of AI Marketing Assistants: How businesses are scaling faster with automation in sales, support, and operations.",
        link: "#",
    },
    {
        image: "/images/seo-banner.jpg",
        title: "The Marketing Mix: Mastering the 4Ps for Business Growth in 2025",
        desc: "Discover how the modern marketing mix can boost your business in 2025. Learn strategies for product, price, place, and promotion.",
        link: "#",
    },
    {
        image: "/images/seo-banner.jpg",
        title: "How to Optimize Your PPC Campaigns for Maximum ROI",
        desc: "Unlock the full potential of Paid Search with these PPC optimization strategies for 2025. Achieve more with less budget.",
        link: "#",
    },
    {
        image: "/images/seo-banner.jpg",
        title: "Command Your Business: Navigating CRM and Tools for Optimal Management",
        desc: "Master CRM and business management tools for optimal performance and growth. Strategies, trends, and must-have features.",
        link: "#",
    },
    {
        image: "/images/seo-banner.jpg",
        title: "Unlock the Secrets: Mastering Market Research for Business Success",
        desc: "Mastering market research for business success: introductions, methods, tools, and strategies to achieve breakthrough insights.",
        link: "#",
    },
    {
        image: "/images/seo-banner.jpg",
        title: "The Ultimate Guide To Mastering Management Tools in 2025",
        desc: "The Ultimate Guide to Mastering Management Tools in 2025: strategies for effective leadership, project management, and team collaboration.",
        link: "#",
    },
    {
        image: "/images/seo-banner.jpg",
        title: "Revolutionize Your Business: Mastering the Art of Workflow Automation",
        desc: "Revolutionize your business by mastering workflow automation—discover the latest tools, strategies, and case studies for scaling your enterprise.",
        link: "#",
    },
];

const BlogPostsGrid = () => (
    <section className=" max-w-7xl mx-auto px-3 py-6">
        <div className="relative mb-8 border-b border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Blog Posts</h2>
            <span className="absolute left-0 top-10 w-12 h-2 bg-blue-200 rounded-lg -z-0"></span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, idx) => (
                <div
                    key={idx}
                    className="relative bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden   group"
                >
                    {post.image && (
                        <div className="relative overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="h-56 w-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-120"
                            />
                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/80 via-transparent to-transparent pointer-events-none rounded-t-2xl"></div>
                            {/* Decorative corner ribbon */}
                            <div className="absolute left-0 top-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-br-2xl rounded-tl-2xl shadow-md font-semibold z-10">
                                Featured
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col flex-1 p-5">
                        {/* Title with decoration */}
                        <h3 className="relative font-bold text-base text-gray-800 mb-3 leading-snug">
                            <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent pr-2">
                                {post.title.split(":")[0]}:
                            </span>
                            <span className="relative z-10 text-gray-800">
                                {post.title.split(":").slice(1).join(":")}
                            </span>
                        </h3>
                        <p className="text-sm text-gray-600 flex-1 mb-4">{post.desc}</p>
                        <a
                            href={post.link}
                            className="inline-flex items-center w-32 justify-center px-4 py-2 rounded-full bg-blue-600 text-white font-medium text-sm shadow hover:bg-blue-700 transition"
                        >
                            Read More
                            <svg
                                className="ml-2 w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default BlogPostsGrid;