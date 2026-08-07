/** Category-based client testimonials for premium industry pages */
import { healthcareTestimonials } from './healthcareTestimonials'

const HOME_SERVICE_TESTIMONIALS = [
  {
    name: 'Mark Thompson',
    role: 'Owner',
    company: 'HVAC Company, Texas USA',
    text: 'Local SEO finally put us in the map pack for emergency repair searches. Call volume from Google increased 78% in four months with clear weekly reporting.',
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Manager',
    company: 'Plumbing Services, Noida',
    text: 'SEO India Tech built suburb landing pages that actually rank. We stopped relying only on referrals and now get consistent service calls every week.',
  },
  {
    name: 'David Chen',
    role: 'General Manager',
    company: 'Roofing Contractor, Canada',
    text: 'Storm season demand used to overwhelm our phone lines with missed leads. Paid and organic campaigns are now aligned, and cost-per-lead dropped 34%.',
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Marketing Lead',
    company: 'Home Remodeling Firm, Florida',
    text: 'Before-and-after project pages and GBP optimization brought qualified estimate requests. The team understands contractor buyer psychology.',
  },
  {
    name: 'Amit Verma',
    role: 'Director',
    company: 'Automotive Workshop, Delhi',
    text: 'We rank for service-specific searches like brake repair and AC servicing. Organic bookings now cover a meaningful share of our monthly revenue.',
  },
  {
    name: 'Rachel Green',
    role: 'Owner',
    company: 'Interior Design Studio, UK',
    text: 'Portfolio SEO and local visibility helped us attract higher-budget residential clients. Content quality reflects our brand standards.',
  },
]

const SERVICE_SECTOR_TESTIMONIALS = [
  {
    name: 'Robert Hayes',
    role: 'Managing Partner',
    company: 'CPA Firm, New Jersey',
    text: 'We needed compliant, professional SEO for tax and advisory services. Organic leads from business owners improved without risking our reputation.',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Director',
    company: 'Pest Control Company, Mumbai',
    text: 'Seasonal campaigns and local pages helped us dominate urgent service searches. Reporting ties rankings to booked inspections.',
  },
  {
    name: 'Tom Bradley',
    role: 'CEO',
    company: 'Moving Company, Sydney',
    text: 'Relocation keywords are competitive. SEO India Tech built city-pair landing pages that generate interstate move inquiries consistently.',
  },
  {
    name: 'Maria Santos',
    role: 'Operations Head',
    company: 'Janitorial Services, UAE',
    text: 'B2B facility contracts require trust signals. Case studies, reviews, and technical SEO improvements increased qualified RFP requests.',
  },
  {
    name: 'James Okafor',
    role: 'Founder',
    company: 'Sign Manufacturing, Lagos',
    text: 'Product and service pages now rank for commercial signage searches. We finally have a predictable inbound channel beyond trade shows.',
  },
  {
    name: 'Emily Watson',
    role: 'Clinic Director',
    company: 'Dental Group, Australia',
    text: 'Local SEO and GBP optimization brought a steady flow of new patient calls. The team explained every change in plain language.',
  },
]

const FOOD_HEALTH_TESTIMONIALS = [
  {
    name: 'Chef Antonio R.',
    role: 'Owner',
    company: 'Catering Business, Milan',
    text: 'Event catering searches are seasonal and competitive. SEO India Tech built landing pages for weddings and corporate events that rank year-round.',
  },
  {
    name: 'Hannah Brooks',
    role: 'Marketing Manager',
    company: 'Craft Brewery, Oregon',
    text: 'Local discovery and review strategy increased taproom visits. Content highlights our story without generic brewery clichés.',
  },
  {
    name: 'Dr. Priya Nair',
    role: 'Clinic Director',
    company: 'Chiropractic Center, Bangalore',
    text: 'Patient education content ranks for treatment-specific queries. Appointment requests from organic search grew 120% in six months.',
  },
  {
    name: 'Oliver Wright',
    role: 'Founder',
    company: 'Herbal Products Brand, UK',
    text: 'E-commerce SEO and compliance-aware product pages improved visibility for high-intent wellness searches without policy issues.',
  },
  {
    name: 'Sofia Mendez',
    role: 'Owner',
    company: 'Winery, Napa Valley',
    text: 'Tourism and tasting room bookings improved through local SEO and structured content for wine country visitors.',
  },
  {
    name: 'Dr. Rajesh K.',
    role: 'Practice Owner',
    company: 'Wellness Clinic, Delhi',
    text: 'We needed ethical healthcare marketing. SEO India Tech delivered YMYL-safe content that builds trust and drives consultations.',
  },
]

const CATEGORY_TESTIMONIALS = {
  'popular-markets': healthcareTestimonials,
  'automobile-home': HOME_SERVICE_TESTIMONIALS,
  'food-health': FOOD_HEALTH_TESTIMONIALS,
  'service-sector': SERVICE_SECTOR_TESTIMONIALS,
}

export function getTestimonialsForIndustry(categoryId) {
  return CATEGORY_TESTIMONIALS[categoryId] || SERVICE_SECTOR_TESTIMONIALS
}
