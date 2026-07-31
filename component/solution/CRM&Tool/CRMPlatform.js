import React from 'react'

export default function CRMPlatform() {
  return (
    <section className="py-20 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-heading">
            CRM Platforms We Support
          </h4>
        </div>

        {/* Card */}
        <div className="bg-cream dark:bg-card rounded-3xl p-10 shadow-lg">
          <p className="text-heading dark:text-gray-300 leading-relaxed mb-6">
            We work with the world's leading CRM systems and provide fully
            custom implementation based on business requirements:
          </p>

          {/* Grid List (updated to 3 columns) */}
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            <div className="p-5 bg-white dark:bg-surface rounded-xl shadow text-heading">
              Salesforce
            </div>
            <div className="p-5 bg-white dark:bg-surface rounded-xl shadow text-heading">
              HubSpot CRM
            </div>
            <div className="p-5 bg-white dark:bg-surface rounded-xl shadow text-heading">
              Zoho CRM
            </div>
            <div className="p-5 bg-white dark:bg-surface rounded-xl shadow text-heading">
              Microsoft Dynamics
            </div>
            <div className="p-5 bg-white dark:bg-surface rounded-xl shadow text-heading">
              Pipedrive
            </div>
            <div className="p-5 bg-white dark:bg-surface rounded-xl shadow text-heading">
              Freshsales
            </div>
            <div className="p-5 bg-white dark:bg-surface rounded-xl shadow text-heading">
              Monday CRM
            </div>
            <div className="p-5 bg-white dark:bg-surface rounded-xl shadow text-heading">
              Bitrix24
            </div>
          </div>

          <p className="text-heading dark:text-gray-300 leading-relaxed">
            Whether you need a new CRM setup, migration from an old system, or
            complete automation workflow, we ensure smooth and secure
            deployment.
          </p>
        </div>
      </div>
    </section>
  )
}
