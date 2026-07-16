import React, { useState, useEffect, useRef } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiChevronDown, FiChevronUp, FiPhone, FiMessageCircle, FiMail, FiArrowRight, FiHelpCircle, FiCheckCircle } from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const faqData = [
  {
    category: 'Services',
    question: 'What services does SEO India Tech provide?',
    answer: 'We offer SEO, Google Ads (PPC), Content Marketing, Web Design & Development, Social Media Marketing, Local SEO, and Custom Software Development.',
    highlight: true
  },
  {
    category: 'Pricing',
    question: 'What is the cost of your SEO services?',
    answer: 'Our SEO packages start from ₹14,999/month and vary based on your business goals, competition, and scope of work. We offer customized plans for every budget.',
    highlight: false
  },
  {
    category: 'Results',
    question: 'How long does it take to see SEO results?',
    answer: 'Typically, you can expect noticeable improvements within 3-6 months. However, some on-page and technical SEO wins can show results within the first 4-6 weeks.',
    highlight: true
  },
  {
    category: 'Process',
    question: 'Do you follow white-hat SEO techniques?',
    answer: 'Yes, we strictly follow Google\'s Webmaster Guidelines using ethical, white-hat SEO strategies that ensure sustainable rankings without risk of penalties.',
    highlight: false
  },
  {
    category: 'Support',
    question: 'Will I have a dedicated account manager?',
    answer: 'Absolutely. Every client is assigned a dedicated SEO Manager who handles your campaign, provides weekly updates, and is available for any queries.',
    highlight: false
  },
  {
    category: 'Results',
    question: 'Do you work with international clients?',
    answer: 'Yes, we work with clients across the USA, UK, UAE, Australia, and other regions, delivering tailored strategies for each market.',
    highlight: true
  },
]

const categoryIcons = {
  Services: FiHelpCircle,
  Pricing: FiHelpCircle,
  Results: FiCheckCircle,
  Process: FiCheckCircle,
  Support: FiPhone,
}

const FAQItem = ({ faq, isOpen, onToggle }) => {
  const CategoryIcon = categoryIcons[faq.category] || FiHelpCircle
  return (
    <div
      className={`group rounded-2xl transition-all duration-300 ${
        isOpen
          ? 'bg-white dark:bg-gray-800 shadow-xl shadow-blue-500/5 border border-blue-200/60 dark:border-blue-800/30'
          : 'border border-gray-200/80 dark:border-gray-700/80 bg-white/60 dark:bg-gray-800/40 hover:border-blue-400/40 dark:hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_4px_20px_rgba(59,130,246,0.05)]'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-start gap-3.5 cursor-pointer"
      >
        <div
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
            isOpen
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 shadow-sm shadow-blue-500/10'
              : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30'
          }`}
        >
          <CategoryIcon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {faq.highlight && (
              <span className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800/30">
                Popular
              </span>
            )}
            <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              {faq.category}
            </span>
          </div>
          <h3
            className={`mt-1.5 text-sm font-semibold leading-snug transition-colors duration-200 ${
              isOpen
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-700 dark:text-gray-200'
            }`}
          >
            {faq.question}
          </h3>
        </div>
        <div
          className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
            isOpen
              ? 'bg-blue-500 text-white rotate-0 shadow-sm shadow-blue-500/20'
              : 'bg-gray-50 dark:bg-gray-700/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 text-gray-400 dark:text-gray-500'
          }`}
        >
          {isOpen ? <FiChevronUp className="w-3.5 h-3.5" /> : <FiChevronDown className="w-3.5 h-3.5" />}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 pl-16">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const faqListRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Left side - FAQ items stagger from left
      gsap.fromTo(leftRef.current.children,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      )

      // Right side - CTA card slides in from right
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: rightRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white dark:bg-gray-900 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-blue-50/30 rounded-full blur-3xl dark:bg-blue-900/5" />
        <div className="absolute -bottom-40 -left-40 w-[25rem] h-[25rem] bg-indigo-50/20 rounded-full blur-3xl dark:bg-indigo-900/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-100/60 dark:border-blue-800/30 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-300 tracking-wider uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">
          {/* Left Column — FAQ Accordion */}
          <div ref={leftRef} className="space-y-3">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>

          {/* Right Column — CTA Card */}
          <div ref={rightRef} className="lg:sticky lg:top-8">
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 lg:p-10 text-white shadow-2xl shadow-blue-600/20 dark:shadow-blue-600/10 sticky top-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.05] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/[0.05] rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 border border-white/10">
                    <FiMessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-blue-100/80 uppercase tracking-wider">Need Help?</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
                  Talk to an SEO Expert
                </h3>
                <p className="text-sm text-blue-100/70 mb-8 leading-relaxed">
                  Get a free consultation and learn how we can help your business grow online.
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="w-full cursor-pointer bg-white text-blue-700 px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 text-sm group"
                  >
                    <FiPhone className="w-4 h-4 transition-transform group-hover:-rotate-12" />
                    Call Us Now
                  </a>

                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full cursor-pointer bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 text-sm backdrop-blur-sm group"
                  >
                    <FiMessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                    Chat on WhatsApp
                  </a>

                  <a
                    href="mailto:info@seoindiatech.com"
                    className="w-full cursor-pointer bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 text-sm backdrop-blur-sm group"
                  >
                    <FiMail className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    Email Us
                  </a>
                </div>

                <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-400 dark:text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    100% Free
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    No Commitments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
