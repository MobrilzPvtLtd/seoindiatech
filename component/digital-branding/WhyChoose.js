// components/WhyChooseUs.tsx
import { CheckCircle2, Target, Sparkles, Palette, Zap, Globe } from 'lucide-react';

const features = [
  { icon: Target, text: "Extensive experience in digital branding" },
  { icon: Sparkles, text: "Creative specialists and strategic thinkers" },
  { icon: Globe, text: "Focus on clarity, consistency, and user experience" },
  { icon: Palette, text: "Integrated marketing and design expertise" },
  { icon: Zap, text: "Custom solutions tailored to each business" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white overflow-hidden relative">
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-300">
            Why Choose SEO India Tech?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 mx-auto rounded-full"></div>
          <p className='text-center'>Our goal is to deliver digital branding services that help your business grow stronger, stand out,
              and stay relevant in a competitive digital market. <br/>
              Strengthen your presence with SEO India Tech’s digital branding services. Let’s build a brand
identity that inspires trust, enhances engagement, and supports your long-term success.</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex items-start space-x-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <p className="text-lg text-gray-100 leading-relaxed mt-1">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Text + CTA */}
        {/* <div className="text-center max-w-4xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-200 font-light">
            Our goal is to deliver digital branding services that help your business{' '}
            <span className="font-semibold text-indigo-300">grow stronger</span>,{' '}
            <span className="font-semibold text-pink-300">stand out</span>, and stay{' '}
            <span className="font-semibold text-indigo-300">relevant</span> in a competitive digital market.
          </p>

          <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-pink-200">
            Strengthen your presence with SEO India Tech’s digital branding services.
          </p>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let’s build a brand identity that inspires trust, enhances engagement, and supports your long-term success.
          </p>

          <div className="mt-10">
            <button className="px-10 py-5 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300">
              Start Your Branding Journey
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}