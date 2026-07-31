import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const Contentbranding = () => {
  return (
    <section className="bg-gradient-to-b from-cream to-blue-100 dark:from-blue-950 dark:to-secondary/30 py-16 md:py-20 lg:py-24 px-6 md:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/15/50 dark:bg-primary-hover/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10/70 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Decorative stars */}
        <div className="absolute -top-10 left-10 md:left-20 hidden md:block">
          <Star className="w-10 h-10 text-accent dark:text-primary opacity-50" />
        </div>
        <div className="absolute -bottom-6 right-16 hidden md:block">
          <Star className="w-8 h-8 text-accent dark:text-primary opacity-40" />
        </div>

        <div className="bg-card dark:bg-card rounded-2xl border border-primary/20 dark:border-primary/40 shadow-xl p-8 md:p-12 lg:p-16">
          {/* Header badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent rounded-full text-sm font-medium">
              <span>Transform Your Brand</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="flex justify-center px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-5xl text-center text-heading">
              Integration with Local{" "}
              <span className="text-primary dark:text-accent font-bold">
                SEO Services
              </span>{" "}
              Today!
            </h2>
          </div>

          {/* Decorative line */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1.5 bg-primary dark:bg-primary rounded-full"></div>
          </div>

          {/* Description */}
          <div className="flex justify-center px-4 pt-8">
            <p className="text-body text-lg md:text-xl mb-6 max-w-5xl text-center">
               Content becomes more powerful when optimized for search engines.
              Our  <Link href={'/services/seo'} className="text-accent underline"> local seo services</Link>  work seamlessly with our content marketing
              approach to position your business in local search results and
              attract nearby customers. By incorporating geo-targeted keywords,
              location-based content, and localized landing pages, we help
              businesses grow visibility within their region. Whether you
              operate a small store or a multi-city enterprise, our combination
              of content marketing services and local seo services drives
              stronger regional engagement, higher footfall, and improved
              conversions. 
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8 mb-12">
            {[
              {
                title: "Strategic Content",
                desc: "Data-driven content planning",
              },
              {
                title: "Engaging Storytelling",
                desc: "Memorable brand narratives",
              },
              {
                title: "Conversion Focused",
                desc: "Content that drives action",
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
            <Link href="/contact-us">
              <button className="cursor-pointer bg-gradient-to-r from-primary to-secondary dark:from-surface dark:to-background hover:bg-blue-800 dark:bg-primary dark:hover:bg-primary-hover text-white px-6 py-3 rounded-full text-base font-medium transition flex items-center justify-center group shadow-lg">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            <button className="hidden cursor-pointer bg-transparent text-primary dark:text-accent border border-primary/30 dark:border-primary/30 hover:bg-background dark:hover:bg-blue-900/30 px-6 py-3 rounded-full text-base font-medium transition">
              Schedule a Consultation
            </button>
          </div>

          {/* Trust elements */}
          <div className="hidden mt-12 text-center">
            <p className="text-muted text-sm uppercase tracking-wider mb-4">
              Trusted by leading brands
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {["Microsoft", "Adobe", "Shopify", "Slack", "Spotify"].map(
                (brand, index) => (
                  <div
                    key={index}
                    className="text-muted font-semibold"
                  >
                    {brand}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Optional testimonial */}
        <div className="hidden mt-8 bg-card dark:bg-card p-6 rounded-xl border border-primary/20 dark:border-primary/40 shadow-lg max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="text-primary dark:text-accent">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
              </svg>
            </div>
            <div>
              <p className="text-muted italic">
                "SEO India Tech transformed our content strategy and helped us
                achieve a 78% increase in organic traffic within just 6 months.
                Their strategic approach to content marketing has been
                invaluable."
              </p>
              <p className="text-heading font-medium mt-4">
                Sarah Johnson
              </p>
              <p className="text-muted text-sm">
                Marketing Director, TechCorp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contentbranding;
