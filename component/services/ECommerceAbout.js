import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Activity,
  FileText,
  Link2,
  MapPin,
  BarChart3,
} from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const items = [
  {
    icon: Search,
    title: "Keyword Planning",
    text: "We find the words your buyers type. We choose words that lead to sales. Then we map them to pages on your site so each page has a clear goal.",
  },
  {
    icon: Activity,
    title: "Site Health Check",
    text: "If your site has errors or slow pages, search engines may ignore it. We check your site for issues and fix them. We improve page load speed and site navigation.",
  },
  {
    icon: FileText,
    title: "On-Page Work",
    text: "We make sure your product pages and category pages have clear titles, descriptions, images, and content. We write text that helps search engines and customers understand what you sell.",
  },
  {
    icon: Link2,
    title: "Link Growth",
    text: "We help your store earn links from sites that matter. Good links bring more credibility. More credibility usually means higher rankings.",
  },
  {
    icon: MapPin,
    title: "Local SEO for Stores",
    text: "If you sell locally, we help you rank in local searches. We set up local listings and make sure your store appears in maps and local search results.",
  },
  {
    icon: BarChart3,
    title: "Monthly Progress Reports",
    text: "Each month you receive a clear report. You can see what improved, what works, and what direction we take next.",
  },
];

export default function ECommerceAbout() {
  return (
    <section className="pt-14 pb-24 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 dark:text-white mb-6"
        >
          What We Do
        </motion.h2>

        {/* PARAGRAPH */}
        <motion.p
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-20 text-lg text-slate-600 dark:text-slate-300 text-justify leading-relaxed"
        >
          We do more than just fix tags and links. We help your store become more visible in search results. We focus on results you can measure. That includes traffic, rankings, and conversions.
        </motion.p>

        {/* FLOW LINE */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-slate-300 dark:bg-slate-700"></div>

          <div className="space-y-16">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* DOT */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-sky-600 dark:bg-sky-400"></div>

                  {/* CARD */}
                  <div className="md:w-[46%] bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-900">
                        <Icon className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-justify leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
