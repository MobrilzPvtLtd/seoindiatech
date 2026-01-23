import Link from 'next/link'
import React from 'react'

const plans = ['Starter', 'Growth', 'Platinum', 'Dedicated']

const Cell = ({ value }) => {
  if (value === 'Yes') {
    return (
      <span className="text-green-600 dark:text-green-400 font-semibold">
        ✔
      </span>
    )
  }
  if (value === 'No') {
    return (
      <span className="text-red-500 dark:text-red-400 font-semibold">✖</span>
    )
  }
  return <span className="font-medium">{value}</span>
}

const sections = [
  {
    title: 'Initial Website Audit and Review',
    rows: [
      ['Basic Website Audit', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Backlinks Analysis', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Competitor Analysis', '1', '1', '2', '3'],
      ['Keywords Research and Analysis', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Website Modification Consulting', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Duplicate Content Check', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Google Penalty Check', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Manual Spam Check', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Broken Links Check', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Initial Rank Report', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Mobile Usability Check', 'Yes', 'Yes', 'Yes', 'Yes'],
    ],
  },
  {
    title: 'On Page Optimization',
    rows: [
      ['Website Architecture Checking', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Duplicate Content Issues Check', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Google Search Console Account Setup', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Google Analytics Account Setup', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['XML Sitemaps Creation and Optimization', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Robots.txt File Creation and Optimization', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Canonicalization / 301 Redirect', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Existing Content Analysis and Suggestion', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Page Speed Score Analysis', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Page Speed Score Improving', 'No', 'No', 'Yes', 'Yes'],
      [
        'Title Tag & Meta Description Optimization',
        'Up to 20 Pages',
        'Up to 50 Pages',
        'Up to 100 Pages',
        'All Pages',
      ],
      [
        'Image Optimization',
        'Up to 20 Pages',
        'Up to 50 Pages',
        'Up to 100 Pages',
        'All Pages',
      ],
      [
        'Anchor Tag Optimization',
        'Up to 20 Pages',
        'Up to 50 Pages',
        'Up to 100 Pages',
        'All Pages',
      ],
      [
        'Internal Linking Optimization',
        'Up to 20 Pages',
        'Up to 50 Pages',
        'Up to 100 Pages',
        'All Pages',
      ],
      [
        'Heading Tags Optimization',
        'Up to 20 Pages',
        'Up to 50 Pages',
        'Up to 100 Pages',
        'All Pages',
      ],
      [
        'Schema Markup Analysis and Optimization',
        'Up to 20 Pages',
        'Up to 50 Pages',
        'Up to 100 Pages',
        'All Pages',
      ],
      [
        'Web Content Suggestions (Writing Cost Extra)',
        'Up to 20 Pages',
        'Up to 50 Pages',
        'Up to 100 Pages',
        'All Pages',
      ],
      [
        'URL Re-Writing (If Required)',
        'Up to 20 Pages',
        'Up to 50 Pages',
        'Up to 100 Pages',
        'All Pages',
      ],
      ['New Pages Creation (Content Cost Extra)', '2', '5', '10', '50'],
      ['Bing Webmaster Tools Setup', 'No', 'No', 'Yes', 'Yes'],
      ['Custom 404 Page Creation (If Required)', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Blog Section Creation (If Required)', 'No', 'No', 'Yes', 'Yes'],
    ],
  },
  {
    title: 'Content Writing (Per Month)',
    rows: [
      ['Article Writing', '1', '2', '2', 'Up to 5'],
      ['Blog Writing', '1', '2', '3', 'Up to 5'],
      ['Guest Blog Writing', '2', '2', '3', 'Up to 6'],
      ['Classified Writing', '1', '2', '2', 'Up to 5'],
      ['PDF Creation', '1', '2', '3', 'Up to 5'],
      ['Podcast Creation', '1', '2', '3', 'Up to 5'],
      ['On-site Blog Writing', 'No', '1', '2', 'Up to 4'],
      ['Infographic Creation', 'No', '1', '2', 'Up to 5'],
      ['Press Release Writing', 'No', 'No', '1', 'Up to 2'],
    ],
  },
  {
    title: 'Off Page / Link Building (Per Month)',
    rows: [
      ['Article Submission', '1', '2', '2', 'Up to 5'],
      ['Article Promotion', '5', '10', '10', 'Up to 25'],
      ['Blog Submission', '1', '2', '3', 'Up to 5'],
      ['Blog Promotion', '5', '10', '15', 'Up to 25'],
      ['Guest Blog Submissions', '2', '2', '3', 'Up to 5'],
      ['Guest Blog Promotion', '10', '10', '15', 'Up to 25'],
      ['Social Bookmarking', '30', '75', '100', 'Up to 120'],
      ['Business Profile Creation', '5', '8', '10', 'Up to 12'],
      ['Podcast Submission', '5', '10', '15', 'Up to 20'],
      ['Classified Submissions', '20', '30', '40', 'Up to 60'],
      ['On-site Blog Submission', 'No', '1', '2', 'Up to 4'],
      ['On-site Blog Promotion', 'No', '5', '10', 'Up to 20'],
      ['PDF / PPT Submission', '4', '6', '8', 'Up to 12'],
      ['Business Citation', '2', '5', '8', 'Up to 11'],
      ['Infographic Submission', 'No', '5', '10', 'Up to 15'],
      ['Press Release Submissions', 'No', 'No', '1', 'Up to 2'],
      ['Press Release Promotion', 'No', 'No', '5', 'Up to 10'],
      ['Total Backlinks / Month', '90', '181', '257', 'Up to 375'],
    ],
  },
  {
    title: 'Local Search Optimization',
    rows: [
      ['Google Business Profile Analysis', 'Yes', 'Yes', 'Yes', 'Yes'],
      [
        'Google Business Profile Setup & Verification',
        'Yes',
        'Yes',
        'Yes',
        'Yes',
      ],
      ['NAP Syndication', 'No', 'Yes', 'Yes', 'Yes'],
      ['Google Business Profile Optimization', 'No', 'Yes', 'Yes', 'Yes'],
      ['Bing Local Listing Creation & Verification', 'No', 'Yes', 'Yes', 'Yes'],
      ['Posting on GBP (Per Month)', 'No', '4', '8', 'Up to 12'],
    ],
  },
  {
    title: 'Social Media Optimization',
    rows: [
      [
        'Account Creation (FB, X, Instagram, LinkedIn)',
        'Yes',
        'Yes',
        'Yes',
        'Yes',
      ],
      ['Social Channel Account Optimization', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Profile Bio Writing', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Cover Image Design & Update', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Creative Creation (Per Month)', 'No', '4', '8', 'Up to 16'],
      ['Instagram Reel Posts', 'No', 'Up to 2', 'Up to 5', 'Up to 10'],
      ['Facebook Posts', 'No', '4', '8', 'Up to 16'],
      ['LinkedIn Posts', 'No', '4', '8', 'Up to 16'],
      ['Instagram Posts', 'No', '4', '8', 'Up to 16'],
      ['X Posts', 'No', '4', '8', 'Up to 16'],
    ],
  },
  {
    title: 'Reporting',
    rows: [
      ['Keyword Ranking Report', 'Semimonthly', 'Weekly', 'Weekly', 'Weekly'],
      ['Activity Reports', 'Semimonthly', 'Weekly', 'Weekly', 'Daily'],
      [
        'Google Analytics Report',
        'Monthly',
        'Monthly',
        'Monthly',
        'Weekly & Monthly',
      ],
      [
        'Google Search Console Report',
        'Monthly',
        'Monthly',
        'Monthly',
        'Weekly & Monthly',
      ],
    ],
  },
]

function TableSection({ title, rows }) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
      <h3 className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white px-6 py-3 font-semibold text-center text-xl">
        {title}
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full text-sm text-center border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-800 sticky top-0 z-10">
            <tr className="h-12 md:h-14">
              <th className="text-left px-4 py-3 bg-gray-100 dark:bg-gray-800">
                Feature
              </th>
              {plans.map((plan, index) => (
                <th
                  key={plan}
                  className={`py-3 font-semibold ${
                    index >= 2
                      ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                      : ''
                  }`}
                >
                  {plan}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="
                  min-h-[3.5rem] md:min-h-[4rem]
                  odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800
                  hover:bg-blue-50/60 dark:hover:bg-blue-900/30 transition-colors
                  align-middle
                "
              >
                <td className="px-4 py-3 text-left font-medium border-t border-gray-200 dark:border-gray-700">
                  {row[0]}
                </td>
                {row.slice(1).map((cell, idx) => (
                  <td
                    key={idx}
                    className={`
                      py-3 border-l border-t border-gray-200 dark:border-gray-700
                      align-middle
                      ${
                        idx >= 2
                          ? 'border-blue-300/60 dark:border-blue-700/60 bg-blue-50/40 dark:bg-blue-900/20'
                          : ''
                      }
                    `}
                  >
                    <Cell value={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function PackageFeatures() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="divide-y divide-gray-200 dark:divide-gray-800 rounded-xl overflow-hidden shadow-sm">
          {sections.map((section) => (
            <TableSection key={section.title} {...section} />
          ))}
        </div>

        {/* Single button after the last table */}
        <div className="mt-10 flex justify-center">
          <Link href="/contactus">
            <button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                       text-white font-medium px-8 py-3 cursor-pointer rounded-lg shadow-md 
                       transition-all duration-200 transform hover:scale-[1.03] 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Ready to start a plan
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
