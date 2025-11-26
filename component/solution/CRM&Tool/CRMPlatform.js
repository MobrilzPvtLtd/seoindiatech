import React from 'react'

export default function CRMPlatform() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-gray-900 dark:text-white">
            CRM Platforms We Support
          </h4>
        </div>

        {/* Card */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-10 shadow-lg">
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
            We work with the world’s leading CRM systems and provide fully
            custom implementation based on business requirements:
          </p>

          {/* Grid List (updated to 3 columns) */}
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            <div className="p-5 bg-white dark:bg-gray-700 rounded-xl shadow text-gray-900 dark:text-white">
              Salesforce
            </div>
            <div className="p-5 bg-white dark:bg-gray-700 rounded-xl shadow text-gray-900 dark:text-white">
              HubSpot CRM
            </div>
            <div className="p-5 bg-white dark:bg-gray-700 rounded-xl shadow text-gray-900 dark:text-white">
              Zoho CRM
            </div>
            <div className="p-5 bg-white dark:bg-gray-700 rounded-xl shadow text-gray-900 dark:text-white">
              Microsoft Dynamics
            </div>
            <div className="p-5 bg-white dark:bg-gray-700 rounded-xl shadow text-gray-900 dark:text-white">
              Pipedrive
            </div>
            <div className="p-5 bg-white dark:bg-gray-700 rounded-xl shadow text-gray-900 dark:text-white">
              Freshsales
            </div>
            <div className="p-5 bg-white dark:bg-gray-700 rounded-xl shadow text-gray-900 dark:text-white">
              Monday CRM
            </div>
            <div className="p-5 bg-white dark:bg-gray-700 rounded-xl shadow text-gray-900 dark:text-white">
              Bitrix24
            </div>
          </div>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            Whether you need a new CRM setup, migration from an old system, or
            complete automation workflow, we ensure smooth and secure
            deployment.
          </p>
        </div>
      </div>
    </section>
  )
}
