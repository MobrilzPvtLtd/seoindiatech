import React from "react";
import Image from "next/image";

export default function ReputationHero() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 px-6 bg-white dark:bg-gray-950">

      {/* background bubbles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-52 h-52 bg-indigo-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-10 w-28 h-28 bg-purple-400/20 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-7 relative z-10">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 dark:text-white leading-tight">
            <span className="text-blue-600 dark:text-blue-400">
              Online Reputation Management Services
            </span>{" "}
            That Bring Real Results
          </h1>

          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full"></div>

          <div className="space-y-6 text-[1.05rem] leading-relaxed text-gray-700 dark:text-gray-300 text-justify">

            <p>
              When people search your brand, they form an opinion in seconds. A
              few bad reviews, an old news article, or an incorrect listing can
              cost you calls and sales. That is why online reputation management
              matters. With result-driven online reputation management services,
              you control what customers see first and you respond fast when
              issues appear.
            </p>

            <p>
              SEO India Tech works as an online reputation management company
              that helps brands protect trust and win back leads. We handle
              reviews, listings, search results, and brand mentions in one clear
              plan. If you want online reputation management for business
              growth, you need consistent monitoring and steady action, not
              one-time cleanups.
            </p>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">

          {/* colored bubbles behind image */}
          <div className="absolute w-44 h-44 bg-blue-400/30 rounded-full blur-2xl -left-6 top-10"></div>
          <div className="absolute w-52 h-52 bg-indigo-400/30 rounded-full blur-3xl right-0 bottom-10"></div>

          <Image
            src="/images/services/reputation.png"
            alt="Online Reputation Management Services - Protected Brand Reputation"
            width={520}
            height={520}
            className="object-contain relative z-10"
            priority
            quality={92}
          />

        </div>

      </div>
    </section>
  );
}