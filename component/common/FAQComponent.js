import React, { useState } from 'react';

const FAQComponent = ({ faqdata }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of digital services to help businesses grow and succeed online. Our core services include custom website development, mobile app development for both Android and iOS platforms, and digital marketing solutions such as SEO, PPC, and social media marketing. Whether you're a startup looking to establish an online presence or an enterprise seeking advanced digital solutions, we provide tailored strategies that align with your business goals. Our team of experienced developers, designers, and marketers work together to deliver performance-driven results, ensuring your business stays ahead of the competition."
    },
    {
      question: "What is the cost of building a website or app?",
      answer:
        "The cost of building a website or app varies based on your project scope, features, design complexity, and required integrations. We offer flexible pricing models to suit startups, SMEs, and large enterprises. After a quick consultation, we provide a transparent quote with no hidden charges."
    },
    {
      question: "How long does it take to complete a website project?",
      answer:
        "The timeline for completing a website project can vary depending on its size, complexity, and specific features required. However, for a standard business website with common functionalities and a clean design, it typically takes 3 to 8 weeks from start to finish. This includes phases like discovery, planning, design, development, testing, and launch. Larger or more complex websites—such as e-commerce stores or custom portals—may take longer. We also accommodate urgent timelines where possible, without compromising on quality. Regular updates and approvals are shared throughout the process to keep you involved every step of the way."
    },
    {
      question: "Do you provide ongoing support after project delivery?",
      answer:
        "Yes, we absolutely do. Once your website or mobile app is launched, we offer ongoing support and maintenance services to ensure it continues to perform at its best. This includes fixing bugs, updating content, improving speed, adding new features, and implementing security updates. Our team stays available to handle technical issues and routine updates so your platform remains up-to-date, secure, and optimized. You can opt for monthly maintenance packages or pay-as-you-go support, depending on your needs. Our goal is to give you peace of mind while you focus on growing your business."
    },
    {
      question: "Is SEO included in the website development package?",
      answer:
        "Yes, we include basic SEO as part of every website development package. This typically covers meta tags, keyword-friendly URLs, image optimization, mobile responsiveness, and proper HTML structure. These elements help ensure your website is search-engine friendly from day one. For businesses looking to drive more organic traffic and improve rankings on Google, we also offer advanced SEO services as an add-on. These include keyword research, backlink building, local SEO, content strategy, and technical SEO audits. Based on your marketing goals, we can create a customized SEO plan to help you generate more leads and visibility online."
    },
    {
      question: "How can you help my business grow online?",
      answer:
        "We help your business grow online by combining technical excellence with creative strategy. We build responsive websites, user-friendly mobile apps, and run result-driven marketing campaigns. By focusing on user experience, keyword optimization, and performance analytics, we ensure your brand gets maximum visibility and lead conversions. Our services are tailored to each client, so you get a solution that fits your exact business needs."
    },
    {
      question: "Can you manage the website or app after launch?",
      answer:
        "Absolutely. We offer ongoing maintenance and support services for websites and mobile apps. From updates and bug fixes to performance optimization and security monitoring, our team ensures your digital assets run smoothly post-launch. You can also opt for monthly support packages for peace of mind."
    }
  ];

  const data = faqdata || faqData;

  return (
    <div className="bg-gradient-to-b from-blue-300 to-white dark:from-gray-700 dark:to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl py-10 px-4 md:px-20 shadow-2xl backdrop-blur">
          {/* Header Section */}
          <div className="flex flex-col items-center mb-8 text-center space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300 text-md max-w-md leading-relaxed">
              Get answers to your questions and learn about our platform
            </p>
          </div>
          {/* FAQ Accordion */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((faq, index) => (
              <div key={index} className={index === data.length - 1 ? '' : 'border-b dark:border-gray-700'}>
                <button
                  className="w-full flex justify-between items-center py-6 px-0 focus:outline-none focus:ring-0"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="flex-1 text-left font-semibold text-lg text-gray-800 dark:text-white">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-600 dark:text-gray-400 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-panel-${index}`}
                    className="px-0 pb-6"
                  >
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-md">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;