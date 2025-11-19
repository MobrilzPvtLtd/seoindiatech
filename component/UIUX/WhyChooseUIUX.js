// components/WhyChooseUIUX.tsx
import { 
  Users, 
  Lightbulb, 
  Layers, 
  Search, 
  Sparkles, 
  Wallet 
} from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: "User-First Approach",
    desc: "Every design decision is based on real user behavior and experience."
  },
  {
    icon: Lightbulb,
    title: "Creative Expertise",
    desc: "Our design team brings fresh ideas and innovative concepts to every project."
  },
  {
    icon: Layers,
    title: "End-to-End Support",
    desc: "From research to development, we provide complete design and optimization solutions."
  },
  {
    icon: Search,
    title: "SEO + Design Integration",
    desc: "With strong SEO optimization services, your design gains better online visibility."
  },
  {
    icon: Sparkles,
    title: "Brand-Driven Design",
    desc: "Our digital branding services strengthen your identity and help you stand out."
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    desc: "High-quality UI/UX design services tailored to fit all business sizes."
  }
];

export default function WhyChooseUIUX() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3 * md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose SEO India Tech for the{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Best UI/UX Design Services in India?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            SEO India Tech is known for delivering high-performance digital solutions backed by research 
            and innovation. We take pride in being one of the top providers of the best UI/UX design 
            services in India because of our commitment to quality, user understanding, and strategic thinking.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-400 hover:-translate-y-3"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.desc}
                </p>

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
            );
          })}
        </div>

        {/* Optional CTA at bottom */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get a Free UI/UX Audit
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}