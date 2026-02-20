import React from "react";

export default function WhyAppStore() {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition p-8">
          
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Why <span className="text-blue-600 dark:text-blue-400">App Store Optimization</span> services are important
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-7 text-justify mb-4">
            App store optimization services focus on two things. First, ranking. Second, conversion. Ranking decides how many people see your app. Conversion decides how many of those people install it.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-7 text-justify">
            If your listing is not aligned with what people search, you miss intent-based traffic. If your visuals and copy are weak, you lose installs even when you rank. A strong ASO app store optimization plan improves both parts together.
          </p>

        </div>

      </div>
    </section>
  );
}