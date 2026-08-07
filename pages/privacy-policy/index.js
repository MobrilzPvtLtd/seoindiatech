"use client";

import React from 'react';
import SeoHead from '@/component/common/SeoHead';
import { getPageSeo } from '@/utils/pageSeoRegistry';
import { buildPageGraph, buildWebPageSchema } from '@/utils/schemaBuilders';
import { SITE_URL } from '@/utils/siteConfig';

const seo = getPageSeo('/privacy-policy');
const pageUrl = `${SITE_URL}/privacy-policy`;
const schema = buildPageGraph({
  breadcrumbs: [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Privacy Policy', url: pageUrl },
  ],
  extra: [
    buildWebPageSchema({
      url: pageUrl,
      name: seo.title,
      description: seo.description,
    }),
  ],
});

export default function PrivacyPolicy() {
  return (
    <>
         <SeoHead title={seo.title} description={seo.description} path="/privacy-policy" schema={schema} />
      <main className="bg-background min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Breadcrumb */}
         

            {/* Header */}
            <div className="text-center pt-4 pb-6 space-y-3">
              <h1 className="text-4xl font-bold text-primary dark:text-accent leading-tight">
                Privacy Policy
              </h1>
              <p className="text-lg text-body max-w-2xl mx-auto">
                How we collect, use, and protect your information
              </p>
              <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                Last Updated: August 2026
              </span>
            </div>

            {/* Introduction Alert */}
            <div className="p-4 rounded-lg bg-background dark:bg-primary/20 border border-border">
              <div className="flex items-start">
                <span className="text-primary mr-2 mt-1">!</span>
                <p className="text-body">
                  This Privacy Policy explains how SEO India Tech collects, uses, and protects your personal information. By using our services, you agree to the terms outlined in this policy.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-card dark:bg-card p-6 md:p-8 rounded-lg shadow-md dark:shadow-lg border border-border">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    Information We Collect
                  </h2>
                  <p className="text-body leading-relaxed mb-4">
                    SEO India Tech may collect personal information you provide when you contact us, request a quote, subscribe to updates, or use our website. This may include your name, email address, phone number, company name, website URL, and project details.
                  </p>
                  <p className="text-body leading-relaxed">
                    We also collect technical data automatically, such as IP address, browser type, device information, pages visited, and referral source through cookies and analytics tools. This helps us improve site performance and user experience.
                  </p>
                </section>

                <hr className="border-border" />

                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    How We Use Your Information
                  </h2>
                  <ul className="space-y-3 text-body leading-relaxed list-disc pl-6">
                    <li>To respond to inquiries and provide SEO, marketing, and development services</li>
                    <li>To send proposals, reports, and service-related communications</li>
                    <li>To improve our website, content, and customer experience</li>
                    <li>To comply with legal obligations and prevent fraud or abuse</li>
                  </ul>
                </section>

                <hr className="border-border" />

                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    Cookies and Analytics
                  </h2>
                  <p className="text-body leading-relaxed">
                    We use cookies and similar technologies to analyze traffic, remember preferences, and measure campaign performance. You can control cookies through your browser settings. Disabling cookies may affect some site features.
                  </p>
                </section>

                <hr className="border-border" />

                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    Data Sharing and Security
                  </h2>
                  <p className="text-body leading-relaxed mb-4">
                    We do not sell your personal information. We may share data with trusted service providers (such as email, hosting, analytics, and CRM tools) only as needed to deliver our services. These partners are required to protect your information.
                  </p>
                  <p className="text-body leading-relaxed">
                    We implement reasonable technical and organizational measures to safeguard data. However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <hr className="border-border" />

                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    Your Rights
                  </h2>
                  <p className="text-body leading-relaxed">
                    Depending on your location, you may have rights to access, correct, delete, or restrict use of your personal data. To exercise these rights, contact us at sales@seoindiatech.com. EU and UK visitors may have additional rights under GDPR.
                  </p>
                </section>

                <hr className="border-border" />

                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    Third-Party Links
                  </h2>
                  <p className="text-body leading-relaxed">
                    Our website may link to third-party sites. We are not responsible for the privacy practices of those websites. Please review their policies before sharing personal information.
                  </p>
                </section>

                <hr className="border-border" />

                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    Changes to This Policy
                  </h2>
                  <p className="text-body leading-relaxed">
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the revised policy.
                  </p>
                </section>

                {/* Contact Information */}
                <div className="p-6 rounded-md bg-background dark:bg-primary/20">
                  <h3 className="text-xl text-primary dark:text-accent mb-2">
                    Contact Us
                  </h3>
                  <p className="text-body leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at <span className="font-bold">sales@seoindiatech.com</span> or through our website contact form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}