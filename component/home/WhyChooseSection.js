import React from 'react'
import { FaAward, FaUserTie, FaChartLine, FaClipboardCheck, FaBullseye, FaMoneyBillWave, FaTags, FaLink, FaTools } from 'react-icons/fa'
import { SiGoogle } from 'react-icons/si'

const items = [
  {
    icon: FaAward,
    title: '12+ Years Industry Experience',
  },
  {
    icon: SiGoogle,
    title: 'Google Compliant SEO',
  },
  {
    icon: FaUserTie,
    title: 'Dedicated SEO Manager',
  },
  {
    icon: FaChartLine,
    title: 'Weekly Progress Reports',
  },
  {
    icon: FaClipboardCheck,
    title: 'Transparent Reporting',
  },
  {
    icon: FaBullseye,
    title: 'Customized Growth Strategy',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Affordable Pricing',
  },
  {
    icon: FaTags,
    title: 'Website Pricing',
  },
  {
    icon: FaLink,
    title: 'White Hat Link Building',
  },
  {
    icon: FaTools,
    title: 'Technical SEO Experts',
  },
]

const WhyChooseSection = () => {
  return (
    <section className="bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Why Choose <span className="text-blue-600">SEO India Tech?</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4 xl:gap-5">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center rounded-xl bg-transparent p-4 xl:p-5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-sky-200 text-blue-700 dark:bg-gradient-to-br dark:from-blue-900 dark:to-blue-950 dark:text-blue-200 mb-4 text-xl">
                  <Icon />
                </div>
                <p className="text-sm leading-snug font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection


// import React from 'react'
// import { FaAward, FaUserTie, FaChartLine, FaClipboardCheck, FaBullseye, FaMoneyBillWave, FaTags, FaLink, FaTools } from 'react-icons/fa'
// import { SiGoogle } from 'react-icons/si'

// const items = [
//   {
//     icon: FaAward,
//     title: '12+ Years Industry Experience',
//   },
//   {
//     icon: SiGoogle,
//     title: 'Google Compliant SEO',
//   },
//   {
//     icon: FaUserTie,
//     title: 'Dedicated SEO Manager',
//   },
//   {
//     icon: FaChartLine,
//     title: 'Weekly Progress Reports',
//   },
//   {
//     icon: FaClipboardCheck,
//     title: 'Transparent Reporting',
//   },
//   {
//     icon: FaBullseye,
//     title: 'Customized Growth Strategy',
//   },
//   {
//     icon: FaMoneyBillWave,
//     title: 'Affordable Pricing',
//   },
//   {
//     icon: FaTags,
//     title: 'Website Pricing',
//   },
//   {
//     icon: FaLink,
//     title: 'White Hat Link Building',
//   },
//   {
//     icon: FaTools,
//     title: 'Technical SEO Experts',
//   },
// ]

// const WhyChooseSection = () => {
//   return (
//     <section className="bg-white dark:bg-slate-950 relative overflow-hidden">
//       {/* Subtle background accent */}
//       <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl dark:bg-blue-900/5 -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-50/20 rounded-full blur-3xl dark:bg-indigo-900/5" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-14">
//           <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-100/60 dark:border-blue-800/30 px-4 py-1.5 rounded-full mb-4">
//             <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
//             <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-300 tracking-wider uppercase">
//               Why Choose Us
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 dark:text-white leading-tight">
//             Why Choose{' '}
//             <span className="relative inline-block">
//               <span className="relative z-10 text-blue-600 dark:text-blue-400">
//                 SEO India Tech?
//               </span>
//               <span className="absolute bottom-1 left-0 w-full h-2.5 bg-blue-200/40 dark:bg-blue-500/20 -z-0 rounded-full blur-sm" />
//             </span>
//           </h2>
//           <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm max-w-lg mx-auto">
//             We combine expertise, transparency, and results-driven strategies to help your business succeed online.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
//           {items.map((item, index) => {
//             const Icon = item.icon
//             return (
//               <div
//                 key={index}
//                 className="group flex flex-col items-center text-center rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm p-5 md:p-6 border border-slate-100/80 dark:border-slate-700/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/5 hover:border-blue-200/60 dark:hover:border-blue-800/40 hover:-translate-y-1.5"
//               >
//                 <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 dark:text-blue-300 mb-4 text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/10">
//                   <Icon className="w-6 h-6" />
//                 </div>
//                 <p className="text-sm leading-tight font-semibold text-slate-800 dark:text-slate-100 transition-colors duration-300">
//                   {item.title}
//                 </p>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default WhyChooseSection