import { Bot, Zap, Settings, ShieldCheck, ArrowRight, CheckCircle2, Cpu, Workflow, Users } from "lucide-react";
import Link from "next/link";

export default function DigitalAutomationServices() {
  const differentiators = [
    { icon: Settings, title: "Tailored Solutions", desc: "Every automation strategy is designed specifically for your operational needs." },
    { icon: Users, title: "User-Friendly Systems", desc: "Tools are easy to manage even for non-technical teams." },
    { icon: Workflow, title: "End-to-End Support", desc: "From planning to implementation, we assist at every stage." },
    { icon: Cpu, title: "Technology Expertise", desc: "We integrate top platforms, CRMs, analytics tools, and marketing systems." },
    { icon: ShieldCheck, title: "Proven Track Record", desc: "Helped businesses reduce costs & boost productivity significantly." },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Bot className="w-5 h-5" />
            Future-Proof Your Business with Intelligent Automation
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">SEO India Tech</span>
            <br />
            for <span className="text-indigo-600">Digital Automation Services</span>?
          </h2>

          <p className="text-xl  text-gray-600 max-w-5xl mx-auto leading-relaxed">
            At <strong>SEO India Tech</strong>, we believe automation should <span className="font-bold text-indigo-600">empower your team</span>, not complicate your processes. 
            We combine technical expertise with deep industry knowledge to deliver automation solutions that make your business more <strong>agile and scalable</strong>.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-400 border border-gray-100 hover:border-indigo-200 hover:-translate-y-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                  <item.icon className="w-9 h-9 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scale Your Business Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <Zap className="w-20 h-20 mx-auto mb-8 text-orange-500 animate-pulse" />
            
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8">
              Scale Your Business with{" "}
              <span className="text-orange-500">Intelligent Automation</span>
            </h3>

            <p className="text-xl md:text-2xl opacity-95 leading-relaxed mb-10 max-w-4xl mx-auto">
              Are you ready to automate repetitive tasks, improve customer management, and accelerate business growth? 
              SEO India Tech is your partner in building intelligent workflows that save time and improve output.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {["Advertising Automation", "CRM Integration", "Lead Management", "Market Research"].map((service) => (
                <div key={service} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300 border border-white/20">
                  <CheckCircle2 className="w-8 h-8 mb-3 text-green-300 mx-auto" />
                  <p className="font-semibold text-lg">{service}</p>
                </div>
              ))}
            </div>

            <p className="text-xl font-medium opacity-95 mb-10">
              Transform your operations today with advanced digital automation services designed for <span className="text-yellow-300 font-bold">long-term success</span>.
            </p>

            
          </div>
        </div>

        {/* Final Branding CTA */}
        <div className="text-center mt-20 bg-white rounded-3xl shadow-2xl p-16 border border-gray-100">
          <h4 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Partner with SEO India Tech
          </h4>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Build a brand that stands out. Our <strong>digital branding solutions</strong> give your business the identity, voice, and influence it needs 
            to dominate the digital world — backed by intelligent automation and data-driven strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
          
            <Link href={'/contactus'} className="inline-flex items-center gap-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold text-lg px-10 py-5 rounded-full transition-all duration-300">
              Book a Free Automation Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}