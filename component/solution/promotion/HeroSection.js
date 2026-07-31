import Image from "next/image";
import React from "react";
import { TrendingUp, Target, Megaphone, ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const promotionFeatures = [
    {
      icon: <Target className="w-5 h-5 text-primary dark:text-accent" />,
      text: "Tailored campaigns for better engagement",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-primary dark:text-accent" />,
      text: "Smarter strategies, proven by data",
    },
    {
      icon: <Megaphone className="w-5 h-5 text-primary dark:text-accent" />,
      text: "Engage customers across multiple platforms",
    },
  ];

  return (
    <section className="bg-white dark:bg-background py-8 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16 lg:gap-24">
          {/* Left content */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card dark:bg-card text-primary dark:text-accent rounded-full text-sm font-medium shadow-sm">
              <Megaphone className="w-4 h-4" />
              <span>Marketing Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-heading leading-tight">
             Powerful Advertising & Promotional Solutions with SEO IndiaTech
            </h1>

            <div className="w-20 h-1 bg-primary dark:bg-primary rounded-full"></div>

            <p className="text-justify text-body text-base md:text-lg leading-relaxed">
              In a fast-moving digital world, every business needs strong
              visibility, consistent branding, and targeted promotions to
              attract the right audience. At{" "}
              <Link className="text-primary" href="/">
                {" "}
                SEO IndiaTech
              </Link>{" "}
              , we provide result-driven advertising &amp; promotional solutions
              that help businesses grow faster, reach new markets, and stand out
              from the competition. Whether you're launching a new product,
              expanding your services, or strengthening your online presence,
              our strategic promotional plans deliver measurable results that
              positively impact your bottom line.
            </p>
            <p className="text-justify text-body text-base md:text-lg leading-relaxed">
              As a trusted advertising &amp; promotion company, we develop
              customized campaigns that align with your brand identity, target
              audience, and business objectives. Our goal is to help your brand
              communicate its message effectively through the right channels and
              at the right time.
            </p>

            {/* <div className="pt-4 space-y-3">
              {promotionFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1.5 bg-primary/10 dark:bg-primary/20 rounded-full">
                    {feature.icon}
                  </div>
                  <span className="text-heading dark:text-gray-200">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right image */}
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10"></div>

              <Image
                src="/images/promotion.png"
                alt="Promotion and advertising visual showing digital marketing strategies"
                width={800}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Floating elements */}
              <div className="absolute top-4 left-4 bg-card dark:bg-card p-2 rounded-lg shadow-md z-20">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Metrics card */}
              <div className="absolute -bottom-1 right-8 bg-card dark:bg-card px-4 py-3 rounded-lg shadow-lg border border-border dark:border-border z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                    <TrendingUp className="w-5 h-5 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted">
                      ROI Increase
                    </div>
                    <div className="text-lg font-bold text-primary dark:text-accent">
                      +72%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/15 dark:bg-primary/15 rounded-full -z-10"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/25 dark:bg-primary/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
