import React from "react";

export default function WhyAppStore() {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-background">
      <div className="max-w-4xl mx-auto">

        <div className="bg-card dark:bg-card rounded-2xl shadow-sm hover:shadow-md transition p-8">
          
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-heading">
            Why <span className="text-primary dark:text-accent">App Store Optimization</span> services are important
          </h2>

          <p className="text-body text-base md:text-lg leading-7 text-justify mb-4">
            App store optimization services focus on two things. First, ranking. Second, conversion. Ranking decides how many people see your app. Conversion decides how many of those people install it.
          </p>

          <p className="text-body text-base md:text-lg leading-7 text-justify">
            If your listing is not aligned with what people search, you miss intent-based traffic. If your visuals and copy are weak, you lose installs even when you rank. A strong ASO app store optimization plan improves both parts together.
          </p>

        </div>

      </div>
    </section>
  );
}