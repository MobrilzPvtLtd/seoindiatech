import React from "react";
import {
  Brain,
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  Globe,
  Users,
  ArrowRight,
  Activity,
  Search,
  FileSearch,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

export default function WorkflowMarketResearch() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Intelligent Workflows Powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Real-Time Market Research
            </span>
          </h2>
          <p className="mt-6 text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Stop making decisions in the dark. We embed automated market
            research directly into your daily workflows — delivering competitor
            insights, customer trends, and growth opportunities exactly when
            your team needs them.
          </p>
        </div>

        {/* Core Value Proposition */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              Strong decision-making starts with accurate insights. That’s why
              we enhance workflows with automated market research services that
              support strategic planning and product development. Our tools
              collect, analyze, and structure data from multiple sources, giving
              your team the right information at the right time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether your business needs customer behavior insights, competitor
              tracking, demand forecasting, or industry trend reports, our{" "}
              <Link
                href={"/solution/market-research"}
                className="text-blue-500"
              >
                {" "}
                market research services{" "}
              </Link>{" "}
              deliver data-driven intelligence seamlessly integrated into your
              workflow. This ensures faster decision-making and improved
              business outcomes without manual effort.
            </p>
          </div>

          {/* Visual Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <div className="grid grid-cols-2 gap-6 text-center">
                {[
                  {
                    icon: Search,
                    label: "Competitor Tracking",
                    color: "indigo",
                  },
                  { icon: Users, label: "Customer Insights", color: "purple" },
                  {
                    icon: TrendingUp,
                    label: "Demand Forecasting",
                    color: "emerald",
                  },
                  { icon: Globe, label: "Industry Trends", color: "blue" },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div
                      className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <p className="mt-4 font-semibold text-gray-800">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Activity className="w-12 h-12 text-indigo-600 mx-auto animate-pulse" />
                <p className="text-sm text-gray-500 mt-2">
                  Live Data Flow • Updated Hourly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Lightbulb,
              title: "Data-Driven Decisions",
              desc: "No more guesswork. Every strategy is backed by fresh competitor and customer intelligence.",
            },
            {
              icon: Zap,
              title: "Zero Manual Research",
              desc: "Automated collection & analysis — your team focuses on execution, not data hunting.",
            },
            {
              icon: FileSearch,
              title: "Seamless Workflow Integration",
              desc: "Insights delivered directly into your existing tools: Slack alerts, dashboard updates, automated reports.",
            },
          ].map((benefit, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-5">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h4>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
