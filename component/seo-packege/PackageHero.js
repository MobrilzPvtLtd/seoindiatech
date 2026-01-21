import React from "react";
import Link from "next/link";

export default function PackageHero() {
  return (
    <section className="w-full bg-blue-50 dark:bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-blue-900 dark:text-white mb-4">
          Our SEO Packages
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm text-blue-800 dark:text-gray-300 mb-8">
          <Link
            href="/"
            className="hover:underline hover:text-blue-900 dark:hover:text-white"
          >
            Home
          </Link>
          <span>›</span>
          <span className="font-medium">SEO Packages</span>
        </div>

        {/* CTA Button */}
        <button className="border border-blue-900 dark:border-white text-blue-900 dark:text-white px-6 py-3 rounded-md font-medium transition hover:bg-blue-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900">
          Get a Free Consultation
        </button>
      </div>
    </section>
  );
}
