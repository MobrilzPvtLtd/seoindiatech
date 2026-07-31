import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Zap,
  TrendingUp,
  DollarSign,
  Users,
  Scale,
  ArrowRight,
  Bot,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [activeBot, setActiveBot] = useState(0);

  // Cycle through different bot states for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBot((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animation class based on active bot state
  const getAnimationClass = (index) => {
    return activeBot === index
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-4";
  };

  const benefits = [
    {
      icon: (
        <Zap className="w-5 h-5 text-primary dark:text-accent group-hover:text-primary dark:group-hover:text-accent" />
      ),
      title: "Increase Efficiency",
      description:
        "Reduce manual effort and optimize processes with smart automation.",
      hoverClass: "group-hover:bg-primary/10 dark:group-hover:bg-blue-900/30",
    },
    {
      icon: (
        <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300" />
      ),
      title: "Reduce Costs",
      description:
        "Boost operational efficiency and cut costs with precise, automated processes.",
      hoverClass: "group-hover:bg-green-100 dark:group-hover:bg-green-900/30",
    },
    {
      icon: (
        <Users className="w-5 h-5 text-primary dark:text-accent group-hover:text-purple-700 dark:group-hover:text-purple-300" />
      ),
      title: "Enhance Customer Experience",
      description:
        "Enhance interactions through AI chatbots, email automation, and tailored marketing campaigns.",
      hoverClass: "group-hover:bg-primary/10 dark:group-hover:bg-purple-900/30",
    },
    {
      icon: (
        <Scale className="w-5 h-5 text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300" />
      ),
      title: "Improve Scalability",
      description:
        "Scale your operations effortlessly using tailored cloud automation tools.",
      hoverClass: "group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30",
    },
  ];

  // Bot animation frames
  const botAnimationFrames = [
    "/images/bot-frame1.svg",
    "/images/bot-frame2.svg",
    "/images/bot-frame3.svg",
  ];

  return (
    <section className="bg-white dark:bg-background overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card dark:bg-card/80 text-primary dark:text-accent rounded-full text-sm font-medium shadow-sm">
                <Bot className="w-4 h-4" />
                <span>AI-Powered Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-heading leading-16">
                Transform Your Business Efficiency with Advanced{" "}
                <span className="text-primary">Digital Automation </span>{" "}
                Services
              </h1>

              <p className="text-justify text-xl text-body leading-relaxed max-w-xl">
                In today's competitive digital economy, businesses must operate
                faster, smarter, and more efficiently to stay ahead. At{" "}
                <Link className="text-primary" href="/">
                  {" "}
                  SEO IndiaTech
                </Link>{" "}
                our digital automation services are designed to streamline your
                operations, enhance customer engagement, and drive measurable
                business growth. From workflow automation to marketing
                optimization and CRM integration, we deliver cutting-edge
                digital automation as a service tailored to your unique
                organizational needs.
              </p>
              <p className="text-justify text-xl text-body leading-relaxed max-w-xl">
                Automation is no longer a luxury - it is a necessity. Modern
                companies require intelligent systems that reduce manual work,
                eliminate operational errors, and create room for innovation.
                Our automation solutions empower your business to reduce costs,
                accelerate productivity, and scale effortlessly.
              </p>
            </div>

            {/* <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group border border-border bg-card dark:bg-card hover:border-transparent dark:hover:border-transparent p-4 md:p-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md ${benefit.hoverClass}`}
                >
                  <div className="flex gap-4">
                    <div className="p-2 bg-cream dark:bg-surface rounded-lg transition-colors duration-300 group-hover:bg-white dark:group-hover:bg-gray-900 h-full">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-heading mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted text-sm dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center items-center">
            {/* Main image with glow effect */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary opacity-30 dark:opacity-50 blur-xl rounded-full"></div>

              <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image
                  src="/images/herobg.jpg"
                  alt="Automation Bot"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                />

                {/* Bot animation overlay */}
                <div className="absolute bottom-0 right-0 p-6">
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      className={`absolute transition-all duration-700 ease-in-out ${getAnimationClass(
                        index
                      )}`}
                    >
                      <div className="bg-white dark:bg-background p-3 rounded-lg shadow-lg border border-border">
                        <Bot
                          className={`w-12 h-12 ${
                            index === 0
                              ? "text-primary"
                              : index === 1
                              ? "text-purple-500"
                              : "text-green-500"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 bg-card dark:bg-card p-2 rounded-lg shadow-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-card dark:bg-card px-8 py-4 rounded-lg shadow-lg border border-border dark:border-border flex gap-6 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-accent">
                  85%
                </div>
                <div className="text-sm text-muted">
                  Efficiency
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200 dark:bg-surface"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-accent">
                  24/7
                </div>
                <div className="text-sm text-muted">
                  Operation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
