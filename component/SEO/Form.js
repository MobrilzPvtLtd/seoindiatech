import React from 'react';
import { Mail, User, Phone, Briefcase, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const Form = () => {
  const benefits = [
    {
      title: "Proven Track Record",
      description: "Our results speak for themselves, with businesses experiencing exponential growth through our SEO strategies.",
      icon: <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Customized Strategies",
      description: "No cookie-cutter approaches. Every strategy is tailored to your industry, audience, and goals.",
      icon: <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Ethical, White-Hat SEO",
      description: "We follow best practices to ensure sustainable rankings without risking penalties.",
      icon: <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Transparency & Reporting",
      description: "We keep you informed with detailed reports, so you always know how your SEO is performing.",
      icon: <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Holistic Digital Marketing Expertise",
      description: "Beyond SEO, we integrate with content marketing, UI/UX, and paid strategies for maximum impact.",
      icon: <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    }
  ];

  const formFields = [
    {
      id: "email",
      label: "Email",
      type: "email",
      required: true,
      icon: <Mail className="w-5 h-5 text-gray-400" />
    },
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      icon: <User className="w-5 h-5 text-gray-400" />
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      required: false,
      icon: <User className="w-5 h-5 text-gray-400" />
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      icon: <Phone className="w-5 h-5 text-gray-400" />
    },
    {
      id: "company",
      label: "Company Name",
      type: "text",
      required: false,
      icon: <Briefcase className="w-5 h-5 text-gray-400" />
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-900/80 py-16 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/4 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-blue-50/70 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-xl relative z-10">
          {/* LEFT COLUMN - BENEFITS */}
          <div className="flex flex-col justify-center rounded-2xl p-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6 w-fit">
              <span>Why Choose Us</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
              Why Choose Digitalyzeit for SEO?
            </h2>
            
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mb-8 hidden md:block"></div>
            
            <div className="space-y-5 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800/50 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 dark:bg-blue-700 rounded-full text-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <p className="text-blue-800 dark:text-blue-200 text-sm font-medium">
                  Fill out the form to get a personalized SEO strategy for your business
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 sm:p-8 space-y-5 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Get Your Free SEO Consultation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We'll analyze your website and provide actionable insights
              </p>
            </div>
            
            <form className="space-y-5">
              {formFields.map((field) => (
                <div key={field.id}>
                  <label className="block font-medium mb-1 text-gray-700 dark:text-gray-300">
                    {field.label} {field.required && <span className="text-red-600 dark:text-red-400">*</span>}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {field.icon}
                    </div>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      className="w-full p-3 pl-10 rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                      required={field.required}
                    />
                  </div>
                </div>
              ))}
              
              <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                  </div>
                  <textarea
                    rows="4"
                    id="message"
                    name="message"
                    className="w-full p-3 pl-10 rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none resize-none transition-colors"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg flex items-center justify-center group"
                >
                  Submit Request
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="text-center text-gray-500 dark:text-gray-400 text-xs mt-3">
                  We respect your privacy. Your information will not be shared.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;