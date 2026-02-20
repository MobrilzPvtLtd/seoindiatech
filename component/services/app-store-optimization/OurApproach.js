import React from "react";

export default function OurApproach() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-indigo-50/20 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Main Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 tracking-tight">
            Our approach to app store optimization strategies
          </h2>
        </div>

        {/* Core Content – Intro + Approach Points as Cards */}
        <div className="max-w-5xl mx-auto mb-20 md:mb-24">
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-12 text-center">
            A good plan combines visibility and conversion. Our app store optimization strategies cover:
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Keyword targeting based on intent, not volume alone",
              "Listing structure that is easy to read on mobile",
              "Creative messaging that matches what users search",
              "Trust building through ratings, reviews, and updates",
              "Ongoing iteration using data, not assumptions",
            ].map((point, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-7 md:p-8 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-400/60 dark:hover:border-indigo-500/50 transition-all duration-400"
              >
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 text-2xl md:text-3xl font-bold text-indigo-500 dark:text-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl leading-relaxed font-medium">
                    {point}
                  </p>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg prose dark:prose-invert max-w-none">
            <p>
              ASO also pairs well with search and content. Many brands combine ASO with answer engine optimization services so their app pages, FAQs, and brand content show up in AI results and featured answers. If you also need help as a local SEO service company, we can align app growth with location-based discovery, Google Business Profile work, and local landing pages. That mix supports brand discovery across search engines and app stores.
            </p>
          </div>
        </div>

        {/* Who should use section – same card style */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 md:mb-16">
            Who should use app store optimization services
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Startups launching a first app",
              "Businesses with an app that is not growing",
              "Apps that rely on paid installs and want better organic share",
              "Brands expanding to new regions",
              "Teams planning a rebrand, relaunch, or major update",
            ].map((text, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-7 md:p-8 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-400/60 dark:hover:border-indigo-500/50 transition-all duration-400"
              >
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 text-2xl md:text-3xl font-bold text-indigo-500 dark:text-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl leading-relaxed font-medium">
                    {text}
                  </p>
                </div>

                {/* Same subtle gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}