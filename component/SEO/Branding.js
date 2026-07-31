import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const Branding = () => {
  return (
    <section className="bg-gradient-to-b from-white to-background dark:from-background dark:to-secondary/40/30 py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-background/70 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-20 left-20 hidden md:block pointer-events-none">
        <Star className="w-10 h-10 text-accent/80 dark:text-primary opacity-50" />
      </div>
      <div className="absolute bottom-20 right-20 hidden md:block pointer-events-none">
        <Star className="w-8 h-8 text-accent/80 dark:text-primary opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-card dark:bg-card rounded-2xl border border-border dark:border-border shadow-xl p-8 md:p-16">
          {/* Header badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent rounded-full text-sm font-medium">
              <span>Get Started Today</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="flex justify-center px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl text-center text-heading">
              Integrated Digital Branding &amp; Content Marketing with{" "}
              <span className="text-primary dark:text-accent font-bold">
                SEO India Tech
              </span>
            </h2>
          </div>

          {/* Decorative line */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1.5 bg-primary dark:bg-primary rounded-full"></div>
          </div>

          {/* Description */}
          <div className="flex justify-center px-4 pt-8">
            <p className="text-body text-lg md:text-xl mb-6 max-w-4xl text-center">
              SEO doesn't work in isolation. That's why SEO India Tech offers{" "}
              <Link
                className="text-primary"
                href={"/services/content-marketing"}
              >
                {" "}
                content marketing services{" "}
              </Link>{" "}
              and digital branding services that complement your SEO strategy.
              Our skilled writers create blog posts, articles, infographics, and
              more - all optimized to rank and convert. By marrying SEO with
              strong branding, we help you build trust, authority, and a loyal
              audience.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8 mb-12">
            {[
              {
                title: "Strategic Branding",
                desc: "Build a lasting impression",
              },
              {
                title: "Audience Engagement",
                desc: "Connect with your customers",
              },
              {
                title: "Measurable Results",
                desc: "Track and optimize performance",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-background dark:bg-primary/15 rounded-lg p-4 text-center"
              >
                <h3 className="font-semibold text-heading mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="hidden bg-gradient-to-r from-primary to-secondary hover:bg-blue-800 dark:bg-primary dark:hover:bg-primary-hover text-white px-6 py-3 rounded-full text-base font-medium transition flex items-center justify-center group shadow-lg">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <Link href="/contact-us">
              <button className="hidden cursor-pointer bg-transparent text-primary dark:text-accent border border-primary/30 dark:border-primary/30 hover:bg-background dark:hover:bg-blue-900/30 px-6 py-3 rounded-full text-base font-medium transition">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
