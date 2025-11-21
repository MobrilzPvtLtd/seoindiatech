
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PromotionalStrategies() {
  const services = [
    "Digital ad campaigns",
    "Social media promotion",
    "Google PPC campaigns",
    "Display ads & remarketing",
    "Email promotions",
    "Brand-based content distribution",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Advertising & Promotional Strategies Matter
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The market is crowded with businesses fighting for consumer attention. Without the right
            advertising & promotional efforts, even the best products or services remain unnoticed. 
            This is why every brand needs strategic, well-structured promotions backed by data, creativity, 
            and intelligent targeting.
          </p>
          <p className="text-lg  text-gray-700 mt-6 max-w-4xl mx-auto leading-relaxed font-medium">
            Our team at <span className="text-blue-600 font-bold"> <Link className="text-blue-600" href="/">
                {" "}
                SEO IndiaTech
              </Link>{" "}</span> builds campaigns 
            that spark interest, create brand recall, and motivate customers to take action. 
            Whether it's digital ads, brand-focused promotions, or creative messaging, 
            we help you strengthen your market positioning.
          </p>
        </div>

        {/* Tailored Solutions Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-10 py-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold text-center">
              Tailored Solutions for Advertisement for Business Promotion
            </h3>
          </div>

          <div className="p-10 md:p-14">
            <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center max-w-4xl mx-auto">
              Every business requires a unique approach to marketing. Our advertisement for business 
              promotion services are designed to highlight your strengths, attract qualified leads, 
              and present your business in the most engaging way possible.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 hover:bg-blue-50 hover:shadow-md transition-all duration-300 group"
                >
                  <CheckCircle2 className="w-8 h-8 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium text-gray-800">{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                With our <span className="font-bold text-blue-600">creative approach</span> and{" "}
                <span className="font-bold text-blue-600">industry insights</span>, your advertisement 
                for business promotion becomes more impactful, more visible, and more aligned 
                with customer expectations.
              </p>
            </div>

            {/* CTA Button */}
            {/* <div className="text-center mt-12">
              <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-5 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Get Started with Powerful Promotions
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}