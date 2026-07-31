import React from "react";
import Image from "next/image";
import {
  BookOpen,
  Target,
  Award,
  Lightbulb,
  Link,
  Download,
  Users,
} from "lucide-react";

const Strategies = () => {
  return (
    <section className="bg-white dark:bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 dark:bg-primary/20/40 text-primary dark:text-accent rounded-full text-sm font-medium mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>Content Strategies</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Types of Content We Create
          </h2>

          <div className="w-24 h-1 bg-primary dark:bg-primary rounded-full mx-auto mb-6"></div>

          <p className="max-w-2xl mx-auto text-body">
            As a dedicated content marketing agency, we produce a wide range of
            high-quality content tailored to your goals, including
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Card - Strategic Storytelling */}
          <div className="bg-card dark:bg-card rounded-2xl shadow-[0_8px_0px_0px_rgba(59,130,246,0.5)] dark:shadow-[0_8px_0px_0px_rgba(59,130,246,0.3)] border border-border p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative rounded-xl overflow-hidden mb-6 h-64">
              <Image
                src="/images/services/strategies1.png"
                alt="Storytelling"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 dark:bg-primary/20/40 rounded-lg">
                <BookOpen className="w-5 h-5 text-primary dark:text-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-heading">
                Strategic Storytelling
              </h2>
            </div>

            <p className="text-justify text-body mb-6 text-base sm:text-lg">
              Your brand's story deserves to be told in a way that inspires and
              resonates. From blogs to social media and email campaigns, we
              amplify your message so it reaches the right audience with impact.
            </p>

            <div className="bg-background dark:bg-primary/15 p-5 rounded-xl">
              <h3 className="font-bold text-heading mb-3 text-lg flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary dark:text-accent" />
                Why It Works:
              </h3>
              <ul className="space-y-3 text-body">
                {[
                  "SEO-Optimized Blogs",
                  "Website Content",
                  "Landing Pages",
                  "Product Descriptions",
                  "Press Releases",
                  "Email Campaigns",
                  "Case Studies",
                  "Whitepapers",
                  
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-accent"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Study Link */}
            <div className="mt-6 pt-4 border-t border-border dark:border-border">
              <a
                href="#"
                className="text-primary dark:text-accent font-medium flex items-center group hover:underline"
              >
                Read storytelling case study
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Card - Lead Generation */}
          <div className="bg-card dark:bg-card rounded-2xl shadow-[0_8px_0px_0px_rgba(59,130,246,0.5)] dark:shadow-[0_8px_0px_0px_rgba(59,130,246,0.3)] border border-border p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 dark:bg-primary/20/40 rounded-lg">
                <Target className="w-5 h-5 text-primary dark:text-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-heading">
                Lead Generation Magic
              </h2>
            </div>

            <p className="text-justify text-body mb-6 text-base sm:text-lg">
              Great content should deliver more than engagement-it should drive
              results. Our lead generation strategies are built into every word,
              transforming casual visitors into subscribers and subscribers into
              customers.
            </p>

            <div className="bg-background dark:bg-primary/15 p-5 rounded-xl mb-6">
              <h3 className="font-bold text-heading mb-3 text-lg flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary dark:text-accent" />
                Our Process:
              </h3>
              <ul className="space-y-4 text-body">
                {[
                  {
                    title: "Landing Pages That Convert:",
                    desc: "High-converting pages paired with compelling content.",
                    icon: (
                      <Link className="w-5 h-5 text-primary dark:text-accent" />
                    ),
                  },
                  {
                    title: "Lead Magnets:",
                    desc: "Free resources like eBooks, guides, or exclusive videos designed to grab attention and gather leads.",
                    icon: (
                      <Download className="w-5 h-5 text-primary dark:text-accent" />
                    ),
                  },
                  {
                    title: "Targeted Campaigns:",
                    desc: "Precision-targeted content distribution to attract the right audience.",
                    icon: (
                      <Target className="w-5 h-5 text-primary dark:text-accent" />
                    ),
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1.5 bg-white dark:bg-surface rounded-md shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-semibold text-heading">
                        {item.title}
                      </span>{" "}
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-xl overflow-hidden h-64">
              <Image
                src="/images/services/leading.png"
                alt="Lead Generation"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Results Stat - Optional */}
            <div className="mt-6 pt-4 border-t border-border dark:border-border flex justify-between items-center">
              <div>
                <p className="text-muted text-sm">
                  Average client result
                </p>
                <p className="text-primary dark:text-accent font-bold text-2xl">
                  +137% Leads
                </p>
              </div>
              <a
                href="#"
                className="text-primary dark:text-accent font-medium flex items-center group hover:underline"
              >
                See our approach
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Optional: CTA Section */}
        <div className="hidden mt-16 bg-gradient-to-r from-primary to-secondary dark:from-blue-700 dark:to-secondary/30 rounded-xl p-8 text-white shadow-lg">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                Ready to transform your content strategy?
              </h3>
              <p className="text-white/90">
                Book a free strategy session with our content experts
              </p>
            </div>
            <button className="bg-white text-primary hover:bg-background px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              Schedule a consultation
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
