import React from "react";
import { Users, Sparkles } from "lucide-react";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

export default function EcommerceWhoDifferent() {
  return (
    <>
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* WHO WE HELP */}
        <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1">

          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>

          <div className="flex items-center gap-3 mb-5">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              Who We Help
            </h4>
          </div>

          <div className="text-gray-600 dark:text-gray-300 text-justify space-y-4 leading-relaxed">
            <p>We work with:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Small stores that want local buyers</li>
              <li>Medium stores that want more national traffic</li>
              <li>Large stores with many products</li>
              <li>Stores that sell services as well as products</li>
            </ul>
            <p>
              No matter your size, we tailor our work to fit your SEO goals. If you are a small business looking for <Link href="https://www.seoindiatech.com/services/small-business-seo" className="font-medium text-sky-600 dark:text-sky-400 hover:underline">small business SEO services</Link> and support, we can help. If you want a local SEO company in India that understands your market, that is us.
            </p>
          </div>
        </div>

        {/* WHAT MAKES US DIFFERENT */}
        <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1">

          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>

          <div className="flex items-center gap-3 mb-5">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              What Makes Us Different
            </h4>
          </div>

          <div className="text-gray-600 dark:text-gray-300 text-justify space-y-4 leading-relaxed">
            <p>
              Many SEO companies use the same techniques on every website. That does not work. We take time to understand your store, your customers, and your goals. Then we plan work that brings traffic and meaningful results.
            </p>
            <p>
              We do not make wide claims. We do not promise instant results. Instead we focus on steady growth that you can track. You get clear reports and honest work every month.
            </p>
            <p>
              We write content for real people. That means buyers find the answers they need. That leads to more sales, not just more traffic.
            </p>
            <p>
              We treat your store like our own. We look for small wins that build up to big improvements over time.
            </p>
          </div>
        </div>

      </div>
    </section>
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* LEFT SIDE – 60% */}
        <div className="lg:col-span-3 group relative rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-10 shadow-sm transition-all duration-500 hover:shadow-xl">

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400">
              <TrendingUp className="w-6 h-6" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Benefits of Our E Commerce SEO Services
            </h2>
          </div>

          <div className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed text-lg">
            <p>
              As a top expert Ecommerce SEO service provider we give you the comprehensive range of digital solutions needed to revamp e-commerce sites. Advanced techniques are combined with tried and tested strategies for sustainable growth by ecommerce SEO services. We focus on measurable results to boost bottom lines: we offer you the best value for your money.
            </p>
          </div>

        </div>


        {/* RIGHT SIDE – 40% */}
        <div className="lg:col-span-2 group relative rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-10 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center">

          <div className="relative inline-block mb-6">
            <h6 className="text-xl font-semibold text-gray-900 dark:text-white">
              Start Today
            </h6>

            <span className="absolute left-0 -bottom-2 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
          </div>

          <div className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed text-lg mb-8">
            <p>
              If you want ecommerce <Link href="https://www.seoindiatech.com/services/seo" className="font-medium text-sky-600 dark:text-sky-400 hover:underline">SEO services</Link> that deliver real attention from search engines and real buyers, contact us. We will review your site and share clear steps you can take next.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contactus"
            className="inline-block w-fit px-6 py-3 rounded-xl bg-blue-600 text-white font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            Contact Us Today
          </Link>

        </div>

      </div>
    </section>
    </>
  );
}
