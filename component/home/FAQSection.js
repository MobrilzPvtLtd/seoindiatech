import React from 'react';
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineGlobeAlt,
  HiOutlineTag,
  HiCheck,
  HiOutlineArrowRight,
} from 'react-icons/hi2';
import Link from 'next/link';
import { Reveal } from '@/component/motion/Reveal'

const faqs = [
  {
    question: 'What SEO services does SEO India Tech offer?',
    answer: 'We offer comprehensive SEO services including technical SEO, on-page optimization, off-page link building, content marketing, local SEO, and analytics reporting. Our strategies are tailored to your business goals for maximum results.',
    category: 'Services',
  },
  {
    question: 'How long does it take to see SEO results?',
    answer: 'SEO is a long-term strategy. While minor improvements may appear within 4-6 weeks, significant results typically take 3-6 months. We provide weekly progress reports so you can track every improvement along the way.',
    category: 'Timeline',
  },
  {
    question: 'Do you follow white-hat SEO practices?',
    answer: 'Absolutely. We strictly follow Google\'s webmaster guidelines and use only white-hat SEO techniques. Our focus is on sustainable, long-term growth rather than quick tricks that could harm your website.',
    category: 'Ethics',
  },
  {
    question: 'How do you report on SEO performance?',
    answer: 'We provide detailed weekly reports covering keyword rankings, traffic growth, backlink profile, technical health, and conversions. Our transparent reporting ensures you always know what\'s happening with your SEO campaign.',
    category: 'Reporting',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work across diverse industries including e-commerce, healthcare, real estate, education, technology, finance, and more. Our team adapts strategies to fit the unique needs and competition of each industry.',
    category: 'Industries',
  },
  {
    question: 'Can I cancel my SEO plan anytime?',
    answer: 'Yes, we offer flexible plans with no long-term lock-in contracts. However, we recommend at least 3-6 months for meaningful results. You can upgrade, downgrade, or cancel your plan as needed.',
    category: 'Pricing',
  },
];

const MOCKS = [
  {
    gradient: 'from-blue-200 via-blue-300 to-cyan-300',
    icon: HiOutlineChatBubbleLeftRight,
    title: 'Full-funnel SEO',
    badge: 'SERVICES',
    type: 'chat',
    prompt: 'Technical SEO, on-page, off-page, local — everything under one roof.',
    footer: 'Auto-scoped',
  },
  {
    gradient: 'from-blue-300 via-indigo-300 to-blue-400',
    icon: HiOutlineDocumentText,
    title: 'Growth timeline',
    badge: 'LIVE',
    type: 'checklist',
    items: ['Week 4-6 · quick wins land', 'Month 3 · rankings climb', 'Month 6 · growth compounds'],
  },
  {
    gradient: 'from-blue-100 via-blue-200 to-cyan-200',
    icon: HiOutlineShieldCheck,
    title: 'Google guidelines',
    badge: 'COMPLIANT',
    type: 'checklist',
    items: ['White-hat techniques only', 'No link schemes or cloaking', 'No spam or paid links'],
  },
  {
    gradient: 'from-blue-200 via-blue-300 to-indigo-300',
    icon: HiOutlineChartBar,
    title: 'Weekly report',
    badge: '+24%',
    type: 'chart',
  },
  {
    gradient: 'from-cyan-200 via-blue-200 to-blue-300',
    icon: HiOutlineGlobeAlt,
    title: 'Industry coverage',
    badge: '10+',
    type: 'chat',
    prompt: 'Healthcare, real estate, education, eCommerce, finance & more.',
    footer: 'Sector-tuned',
  },
  {
    gradient: 'from-blue-200 via-indigo-200 to-blue-300',
    icon: HiOutlineTag,
    title: 'Flexible plans',
    badge: 'NO LOCK-IN',
    type: 'checklist',
    items: ['Upgrade anytime', 'Downgrade anytime', 'Cancel anytime'],
  },
];

const bars = [40, 62, 50, 74, 58, 88, 66];
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const MockPanel = ({ mock }) => {
  const Icon = mock.icon;
  return (
    <div className={`h-full w-full rounded-[1.75rem] bg-gradient-to-br ${mock.gradient} p-5 md:p-6 flex items-start`}>
      <div className="w-full bg-white rounded-2xl shadow-xl shadow-black/10 p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Icon className="w-4.5 h-4.5" />
            </div>
            <span className="font-display text-sm font-semibold text-gray-900">{mock.title}</span>
          </div>
          <span className="font-mono text-[10px] font-semibold tracking-wide text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full whitespace-nowrap">
            {mock.badge}
          </span>
        </div>

        {mock.type === 'chat' && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
            <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{mock.prompt}&rdquo;</p>
            {mock.footer && (
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-gray-400">{mock.footer}</p>
            )}
          </div>
        )}

        {mock.type === 'checklist' && (
          <div className="space-y-2">
            {mock.items.map((item) => (
              <div key={item} className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <HiCheck className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        )}

        {mock.type === 'chart' && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 pt-4 pb-3">
            <div className="flex items-end justify-between gap-1.5 h-24">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-blue-400" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {days.map((d, i) => (
                <span key={i} className="flex-1 text-center font-mono text-[9px] text-gray-400">{d}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const FAQSection = () => {
  const stickyTop = (i) => 88 + i * 22;

  return (
    <section className="bg-white dark:bg-gray-900 relative transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/30 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6">
          <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
          FAQ
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.05] tracking-tight">
          Frequently Asked
          <br />
          Questions
        </h2>
        <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
          Got questions? We have answers — everything you need to know about working with us.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {faqs.map((faq, i) => (
          <div key={i} className="sticky mb-8 md:mb-10" style={{ top: `${stickyTop(i)}px` }}>
            <Reveal once amount={0.15}>
              <div className="rounded-[2rem] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl shadow-blue-500/5 dark:shadow-blue-900/10 p-6 md:p-10 transition-colors duration-300">
                <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                  {/* Left — text */}
                  <div className="order-2 md:order-1">
                    <span className="inline-block font-mono text-[11px] font-semibold tracking-[0.15em] uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/30 rounded-full px-3 py-1 mb-5">
                      Question {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-snug mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>

                  {/* Right — mockup panel */}
                  <div className="order-1 md:order-2 h-56 md:h-64">
                    <MockPanel mock={MOCKS[i]} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      {/* <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Still have questions? We&apos;re here to help.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/25 group"
        >
          Contact Us
          <HiOutlineArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div> */}
    </section>
  );
};

export default FAQSection;
