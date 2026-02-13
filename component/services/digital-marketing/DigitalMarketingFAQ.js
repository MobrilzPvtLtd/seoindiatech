"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DigitalMarketingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Q1. What does an AI focused digital marketing company do?",
      answer:
        "It uses AI tools to support research and testing, then applies human review to improve SEO, ads, and conversions.",
    },
    {
      question: "Q2. How long does it take to see results from a digital marketing services company?",
      answer:
        "Small improvements can show in 4 to 8 weeks. Strong SEO growth usually takes 3 to 6 months, depending on competition and site condition.",
    },
    {
      question: "Q3. Do you offer Ecommerce SEO services for Shopify and WooCommerce?",
      answer:
        "Yes. We work on product pages, category structure, technical fixes, and tracking to improve rankings and sales actions.",
    },
    {
      question: "Q4. What is included in Local SEO services?",
      answer:
        "Google Business Profile work, local pages, citations, review support, and local content that targets map and local search results.",
    },
    {
      question: "Q5. Are Small business SEO services different from enterprise SEO?",
      answer:
        "Yes. Small business SEO focuses on fast wins, fewer pages, clear priorities, and budget control while building steady growth.",
    },
    {
      question: "Q6. Can I use local SEO marketing services if I have multiple locations?",
      answer:
        "Yes. We create location pages, manage listings, and keep each location consistent across profiles and citations.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        FAQs
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900 shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <span className="font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </span>

              <ChevronDown
                className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-6 pt-0" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
