import React from "react";
import Link from "next/link";

export default function WhyChooseSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition p-6 sm:p-8 md:p-10">
          
          {/* Heading */}
          <h5 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Why choose SEO India Tech
          </h5>

          {/* Content */}
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-7 text-justify mb-6">
            You get a clear plan, not vague promises. Your pay per click campaign
            is built around measurable actions, with full tracking. We share
            reports that explain what changed and why. And we do not lock you
            into confusing setups. We also work as a full digital marketing
            services company, so if your paid ads uncover new keywords, we can
            feed them into content and local SEO services agency work for
            long-term results.
          </p>

          {/* CTA Button */}
          <Link href="/contactus">
            <button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold py-3 px-6 rounded-lg transition duration-300">
              Talk to Our Team
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
