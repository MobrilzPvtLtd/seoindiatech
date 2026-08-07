/**
 * @typedef {Object} PremiumCta
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {Object} PremiumImage
 * @property {string} src
 * @property {string} alt
 */

/**
 * @typedef {Object} PremiumHero
 * @property {string} badge
 * @property {string} h1
 * @property {string[]} paragraphs
 * @property {string[]} benefits
 * @property {PremiumCta} primaryCta
 * @property {PremiumCta} secondaryCta
 * @property {string[]} trustBadges
 * @property {string} rating
 * @property {PremiumImage} image
 */

/**
 * @typedef {Object} PremiumTrustStat
 * @property {string} value
 * @property {string} label
 * @property {string} [suffix]
 */

/**
 * @typedef {Object} PremiumCard
 * @property {string} title
 * @property {string} description
 * @property {string[]} [points]
 * @property {string} [icon]
 */

/**
 * @typedef {Object} PremiumServiceCard
 * @property {string} title
 * @property {string} description
 * @property {string[]} benefits
 * @property {string} [icon]
 */

/**
 * @typedef {Object} PremiumProcessStep
 * @property {string} title
 * @property {string} description
 * @property {string} [icon]
 */

/**
 * @typedef {Object} PremiumComparisonRow
 * @property {string} feature
 * @property {string} freelancer
 * @property {string} agency
 * @property {string} us
 */

/**
 * @typedef {Object} PremiumMetric
 * @property {string} label
 * @property {string} value
 * @property {string} change
 */

/**
 * @typedef {Object} PremiumCaseStudy
 * @property {string} title
 * @property {string} problem
 * @property {string} solution
 * @property {string} execution
 * @property {string} timeline
 * @property {PremiumMetric[]} results
 */

/**
 * @typedef {Object} PremiumTestimonial
 * @property {string} name
 * @property {string} role
 * @property {string} company
 * @property {string} text
 */

/**
 * @typedef {Object} PremiumRelatedIndustry
 * @property {string} title
 * @property {string} slug
 * @property {string} description
 */

/**
 * @typedef {Object} PremiumSeo
 * @property {string} title
 * @property {string} description
 * @property {string} slug
 * @property {string[]} keywords
 * @property {string[]} internalLinks
 */

/**
 * @typedef {Object} PremiumIndustryContent
 * @property {string} slug
 * @property {string} name
 * @property {PremiumSeo} seo
 * @property {PremiumHero} hero
 * @property {Object} trust
 * @property {Object} whyChoose
 * @property {Object} services
 * @property {Object} audiences
 * @property {Object} process
 * @property {Object} comparison
 * @property {Object} results
 * @property {PremiumCaseStudy} caseStudy
 * @property {Object} relatedIndustries
 * @property {Object} testimonials
 * @property {Object} faq
 * @property {Object} finalCta
 */

export {}
