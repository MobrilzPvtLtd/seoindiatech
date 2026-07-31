import React from "react";
import { MousePointer, BarChart2, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

const Ppchero = () => {
  const keyBenefits = [
    {
      icon: <MousePointer className="w-5 h-5" />,
      text: "Instant Traffic",
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      text: "Higher Conversions",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      text: "Maximized ROI",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-background dark:from-background dark:to-secondary/40/30 px-4 pt-24 md:pt-28 pb-8 md:pb-20 lg:pb-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent/80 dark:text-primary/40 opacity-30"
        >
          <circle cx="30" cy="30" r="30" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-20 hidden lg:block">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-indigo-200 dark:text-indigo-900 opacity-30"
        >
          <rect width="40" height="40" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20/40 text-primary dark:text-accent rounded-full text-sm font-medium">
            <span>PPC Advertising</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-heading mb-8 text-center">
          Result-Driven PPC Advertising Services to Maximize Your ROI
        </h1>

        {/* Decorative underline */}
        <div className="w-24 h-1.5 bg-primary dark:bg-primary rounded-full mx-auto mb-8"></div>

        {/* Subheading Paragraph */}
        <p className="text-body text-justify dark:text-gray-300 text-lg md:text-xl mb-10 max-w-4xl mx-auto">
          
          In today's fast-paced digital world, businesses cannot rely solely on
          organic methods to grow. Paid campaigns have become essential to reach
          the right audience instantly. At{" "}
          <Link href={"/"} className="text-primary">
            SEO IndiaTech {" "}
          </Link>
          we provide powerful and performance-oriented PPC advertising services
          that help your business achieve immediate visibility, higher
          conversions, and maximum ROI. As a leading PPC advertising company,
          our goal is simple - to ensure your brand reaches the right customers
          at the right time through strategic pay per click advertising.
        </p>

        {/* Key benefits pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          {keyBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center bg-card dark:bg-card px-4 py-2 rounded-full shadow-md border border-border"
            >
              <div className="p-1.5 bg-primary/10 dark:bg-primary/20 rounded-full mr-2 text-primary dark:text-accent">
                {benefit.icon}
              </div>
              <span className="text-heading dark:text-gray-200 font-medium">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>

        {/* Statistics cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { value: "95%", label: "Increased click-through rates" },
            { value: "3.5x", label: "Average return on ad spend" },
            { value: "70%", label: "Lower cost per acquisition" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card dark:bg-card p-4 rounded-xl shadow-md border border-border dark:border-border text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary dark:text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-muted text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => {
              document
                .getElementById("PPCform")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer bg-gradient-to-r from-primary to-secondary hover:bg-primary-hover dark:from-surface dark:to-background dark:hover:bg-primary-hover text-white font-bold text-lg px-6 py-3 rounded-full shadow-md transition-all duration-300 flex items-center group"
          >
            Get Your Custom PPC Strategy
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button className="hidden bg-transparent text-body hover:text-primary dark:hover:text-accent font-medium text-lg border border-border dark:border-border hover:border-primary dark:hover:border-primary px-6 py-3 rounded-full transition-colors duration-300">
            Learn About Our Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ppchero;
