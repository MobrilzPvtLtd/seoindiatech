"use client";

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import SeoHead from '@/component/common/SeoHead';
import { getPageSeo } from '@/utils/pageSeoRegistry';
import { buildPageGraph, buildWebPageSchema } from '@/utils/schemaBuilders';
import { SITE_URL } from '@/utils/siteConfig';

const seo = getPageSeo('/terms');
const pageUrl = `${SITE_URL}/terms`;
const schema = buildPageGraph({
  breadcrumbs: [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Terms of Service', url: pageUrl },
  ],
  extra: [
    buildWebPageSchema({
      url: pageUrl,
      name: seo.title,
      description: seo.description,
    }),
  ],
});

export default function TermsOfService() {
  return (
    <>
     <SeoHead title={seo.title} description={seo.description} path="/terms" schema={schema} />
      <main className="bg-background min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
         

            {/* Header */}
            <div className="text-center pt-4 pb-6 space-y-3">
              <h1 className="text-4xl font-bold text-primary dark:text-accent leading-tight">
                Terms of Service
              </h1>
              <p className="text-lg text-body max-w-2xl mx-auto">
                Please read these terms carefully before using our services
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
                  By accessing or using SEO India Tech services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-card dark:bg-card p-6 md:p-8 rounded-lg shadow-md dark:shadow-lg border border-border">
              <div className="space-y-8">
                {/* Terms and Conditions */}
                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    Terms and Conditions
                  </h2>
                  <p className="text-body leading-relaxed">
                    The visitors to this <strong className="text-primary dark:text-accent">SEO India Tech</strong> website are bound by the terms and conditions that are mentioned herein. 
                    Thus we strongly recommend that if you want to use this site for any purpose then you must go through the entire terms of use section. 
                    In case you do not agree with any of the terms mentioned then you are advised not to use this website.
                  </p>
                </section>

                <hr className="border-border" />

                {/* Website Modifications */}
                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    Website Modifications
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">i</span>
                      <p className="text-body leading-relaxed">
                        <strong className="text-primary dark:text-accent">SEO India Tech</strong> at its own discretion and without issuing any prior notice under any condition can edit this agreement 
                        and all the modifications would become applicable as soon as they appear on the website.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">i</span>
                      <p className="text-body leading-relaxed">
                        You must acknowledge to read this agreement every time you access this website to stay updated with any changes.
                      </p>
                    </li>
                  </ul>
                </section>

                <hr className="border-border" />

                {/* Information Accuracy */}
                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    Information Accuracy and Liability
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 w-4 h-4 shrink-0" aria-hidden="true" />
                      <p className="text-body leading-relaxed">
                        <strong className="text-primary dark:text-accent">SEO India Tech</strong> makes every effort to ensure that the information provided on the website is accurate and true 
                        but does not guarantee the same. <strong className="text-primary dark:text-accent">SEO India Tech</strong> holds all the rights to upload any information on the website 
                        and edit it as it deems proper.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 w-4 h-4 shrink-0" aria-hidden="true" />
                      <p className="text-body leading-relaxed">
                        At no point of time does <strong className="text-primary dark:text-accent">SEO India Tech</strong> should be held responsible for any inaccuracies or incoherence that 
                        might appear on the website. <strong className="text-primary dark:text-accent">SEO India Tech</strong> would make any changes to the website at its own discretion and 
                        not under any obligation.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 w-4 h-4 shrink-0" aria-hidden="true" />
                      <p className="text-body leading-relaxed">
                        At no point of time does the information on the website is intended to coerce or spur the visitor to avail the products 
                        and services offered by SEO India Tech.
                      </p>
                    </li>
                  </ul>
                </section>

                <hr className="border-border" />

                {/* Copyright and Intellectual Property */}
                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    Copyright and Intellectual Property
                  </h2>
                  <p className="text-body leading-relaxed">
                    All the information present on the website solely belongs to <strong className="text-primary dark:text-accent">SEO India Tech</strong> and any attempt to reproduce it 
                    or copy it would stringently fall under the legal purview of copyright infringement.
                  </p>
                </section>

                <hr className="border-border" />

                {/* System Damage Disclaimer */}
                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    System Damage Disclaimer
                  </h2>
                  <p className="text-body leading-relaxed">
                    <strong className="text-primary dark:text-accent">SEO India Tech</strong> would like to bring it to the notice of the visitors to the website that under no circumstances 
                    should <strong className="text-primary dark:text-accent">SEO India Tech</strong> be held responsible in case there is some damage to the visitor's system, data or any other 
                    information while accessing the website.
                  </p>
                </section>

                <hr className="border-border" />

                {/* Legislation */}
                <section>
                  <h2 className="text-2xl text-primary dark:text-accent mb-4 pb-2 border-b-2 border-primary/20 dark:border-primary/30">
                    Legislation
                  </h2>
                  <p className="text-body leading-relaxed">
                    This agreement is completely under the authority of the Indian judiciary. In case there is any dispute arising out of 
                    the use of this website then the same shall be resolved in the Jurisdiction of New Delhi, India.
                  </p>
                </section>

                {/* Contact Information */}
                <div className="p-6 rounded-md bg-background dark:bg-primary/20">
                  <h3 className="text-xl text-primary dark:text-accent mb-2">
                    Contact Us
                  </h3>
                  <p className="text-body leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at <span className="font-bold">sales@seoindiatech.com</span> or through our website contact form.
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