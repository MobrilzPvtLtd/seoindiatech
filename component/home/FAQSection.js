import React, { useState, useRef, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { HiOutlineChatBubbleLeftRight, HiOutlineSparkles, HiOutlineClock, HiOutlineUserGroup } from 'react-icons/hi2';
import Link from 'next/link';

const faqs = [
  {
    question: 'What SEO services does SEO India Tech offer?',
    answer: 'We offer comprehensive SEO services including technical SEO, on-page optimization, off-page link building, content marketing, local SEO, and analytics reporting. Our strategies are tailored to your business goals for maximum results.',
    category: 'Services'
  },
  {
    question: 'How long does it take to see SEO results?',
    answer: 'SEO is a long-term strategy. While minor improvements may appear within 4-6 weeks, significant results typically take 3-6 months. We provide weekly progress reports so you can track every improvement along the way.',
    category: 'Timeline'
  },
  {
    question: 'Do you follow white-hat SEO practices?',
    answer: 'Absolutely. We strictly follow Google\'s webmaster guidelines and use only white-hat SEO techniques. Our focus is on sustainable, long-term growth rather than quick tricks that could harm your website.',
    category: 'Ethics'
  },
  {
    question: 'How do you report on SEO performance?',
    answer: 'We provide detailed weekly reports covering keyword rankings, traffic growth, backlink profile, technical health, and conversions. Our transparent reporting ensures you always know what\'s happening with your SEO campaign.',
    category: 'Reporting'
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work across diverse industries including e-commerce, healthcare, real estate, education, technology, finance, and more. Our team adapts strategies to fit the unique needs and competition of each industry.',
    category: 'Industries'
  },
  {
    question: 'Can I cancel my SEO plan anytime?',
    answer: 'Yes, we offer flexible plans with no long-term lock-in contracts. However, we recommend at least 3-6 months for meaningful results. You can upgrade, downgrade, or cancel your plan as needed.',
    category: 'Pricing'
  }
];

const FAQItem = ({ faq, isOpen, onClick, index }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`group rounded-2xl transition-all duration-400 overflow-hidden border ${isOpen
          ? 'border-blue-500/30 bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800 dark:to-slate-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(59,130,246,0.06)]'
          : 'border-slate-200/80 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/40 hover:border-blue-400/40 dark:hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_4px_20px_rgba(59,130,246,0.05)]'
        }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center gap-4 p-5 lg:p-6 text-left cursor-pointer"
      >
        <span className={`relative flex items-center justify-center w-9 h-9 rounded-xl text-xs font-bold shrink-0 transition-all duration-300 ${isOpen
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
            : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30'
          }`}>
          {String(index + 1).padStart(2, '0')}
          {isOpen && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-white dark:ring-slate-800" />
          )}
        </span>
        <span className="flex-1">
          <span className={`block text-[15px] lg:text-base font-semibold leading-snug transition-colors duration-300 ${isOpen
              ? 'text-slate-900 dark:text-white'
              : 'text-slate-700 dark:text-slate-200'
            }`}>
            {faq.question}
          </span>
          {isOpen && (
            <span className="inline-block mt-1 text-[10px] font-medium tracking-wider uppercase text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 rounded-full">
              {faq.category}
            </span>
          )}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
            ? 'bg-blue-50 dark:bg-blue-900/30'
            : 'bg-slate-50 dark:bg-slate-700/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20'
          }`}>
          <HiChevronDown
            className={`w-4 h-4 transition-all duration-300 ${isOpen
                ? 'rotate-180 text-blue-600'
                : 'text-slate-400 dark:text-slate-500'
              }`}
          />
        </div>
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-400 ease-[cubic-bezier(0.33,1,0.68,1)] overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div className="px-5 pb-5 lg:px-6 lg:pb-6 pl-[4.25rem] lg:pl-[4.5rem]">
          <div className="relative pl-4 border-l-2 border-blue-200 dark:border-blue-800/50">
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white dark:bg-slate-950 overflow-hidden relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-50/30 to-transparent dark:from-blue-950/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-50/20 dark:bg-indigo-950/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20">
          {/* Left - FAQ */}
          <div className="flex-1 min-w-0">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                Frequently Asked{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600 dark:text-blue-400">
                    Questions
                  </span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/40 dark:bg-blue-500/20 -z-0 rounded-full blur-sm" />
                </span>
              </h2>
              <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed">
                Got questions? We have answers. Find everything you need to know about our SEO services and how we can help your business grow.
              </p>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="lg:w-[380px] xl:w-[420px] shrink-0">
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 lg:p-10 text-white shadow-2xl shadow-blue-600/20 dark:shadow-blue-600/10 sticky top-8 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                {/* Header: Icon + Title in same row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg shadow-black/5 shrink-0">
                    <HiOutlineChatBubbleLeftRight className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    Still have questions?
                  </h3>
                </div>

                <p className="text-blue-100/90 text-sm leading-relaxed mb-8 max-w-xs">
                  Can&apos;t find what you&apos;re looking for? Our SEO experts are here to help. Get a free consultation and custom strategy for your business.
                </p>

                <Link href="/contactus">
                  <button className="w-full cursor-pointer bg-white text-blue-700 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2.5 text-sm group">
                    <HiOutlineChatBubbleLeftRight className="w-4 h-4 transition-transform group-hover:scale-110" />
                    Talk to SEO Expert
                    <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                </Link>

                <div className="mt-8 pt-8 border-t border-white/15">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-sm font-bold backdrop-blur-sm">
                        <HiOutlineClock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">24/7 Support</p>
                        <p className="text-[10px] text-blue-200/80">Quick response</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-sm font-bold backdrop-blur-sm">
                        <HiOutlineUserGroup className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Expert Team</p>
                        <p className="text-[10px] text-blue-200/80">10+ years experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Trusted by 500+ clients
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                4.9/5 rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;