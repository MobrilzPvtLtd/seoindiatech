"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function EcommerceSEOFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Q1. What is ecommerce SEO?",
      answer:
        "Ecommerce SEO means improving your online store so it appears more often in search results when buyers look for products like yours.",
    },
    {
      question: "Q2. How long until I see results?",
      answer:
        "SEO takes time. Most stores see noticeable increases in rankings and traffic in 3 to 6 months.",
    },
    {
      question: "Q3. Do you work with small businesses?",
      answer:
        "Yes. We offer small business SEO services and adjust our work to your budget and goals.",
    },
    {
      question: "Q4. Can SEO help local sales?",
      answer:
        "Yes. Our local SEO company in India services help your store appear in local searches and local maps listings.",
    },
    {
      question: "Q5. What is included in your reports?",
      answer:
        "We share traffic changes, keyword rankings, and work done each month in simple, easy to read reports.",
    },
    {
      question: "Q6. Do I have to sign a long contract?",
      answer:
        "We offer flexible plans. You can choose the plan that fits your goals.",
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
