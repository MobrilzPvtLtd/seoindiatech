import {
  FaBriefcaseMedical,
  FaHome,
  FaHeartbeat,
  FaCogs,
  FaUserMd,
  FaBuilding,
  FaHouseUser,
  FaBaby,
  FaEye,
  FaTeeth,
  FaStethoscope,
  FaDumbbell,
  FaGavel,
  FaTooth,
  FaFan,
  FaWrench,
  FaDoorOpen,
  FaTint,
  FaBorderAll,
  FaHammer,
  FaArchive,
  FaDraftingCompass,
  FaPaintRoller,
  FaCar,
  FaKey,
  FaCouch,
  FaThLarge,
  FaHardHat,
  FaUtensils,
  FaBeer,
  FaWineGlass,
  FaLeaf,
  FaBone,
  FaTruckMoving,
  FaBug,
  FaCalculator,
  FaPaw,
  FaSign,
  FaTrash,
  FaTshirt,
  FaTree,
  FaHouseDamage,
  FaFileInvoiceDollar,
  FaBroom,
} from 'react-icons/fa'
import { INDUSTRY_CATEGORIES, toSlug } from '@/utils/industries'

const CATEGORY_ICONS = {
  store: FaBriefcaseMedical,
  home: FaHome,
  heart: FaHeartbeat,
  cog: FaCogs,
}

/** Industry-specific icons — one unique, recognizable icon per slug */
const INDUSTRY_ICONS = {
  'plastic-surgery-seo': FaUserMd,
  'property-management-seo': FaBuilding,
  'realtor-seo': FaHouseUser,
  'fertility-clinic-seo': FaBaby,
  'optometrist-seo': FaEye,
  'orthodontist-seo': FaTeeth,
  'doctor-physician-seo': FaStethoscope,
  'physiotherapy-seo': FaDumbbell,
  'personal-injury-seo': FaGavel,
  'dentist-seo': FaTooth,
  'hvac-seo': FaFan,
  'plumber-seo': FaWrench,
  'garage-door-seo': FaDoorOpen,
  'well-drilling-company-seo': FaTint,
  'fence-installer-seo': FaBorderAll,
  'deck-builder-seo': FaHammer,
  'cabinet-manufacturer-seo': FaArchive,
  'architect-seo': FaDraftingCompass,
  'painter-seo': FaPaintRoller,
  'automotive-seo': FaCar,
  'locksmith-service-seo': FaKey,
  'interior-designer-seo': FaCouch,
  'flooring-company-seo': FaThLarge,
  'home-builder-and-remodeler-seo': FaHardHat,
  'catering-seo': FaUtensils,
  'breweries-seo': FaBeer,
  'wineries-seo': FaWineGlass,
  'herbal-product-seo': FaLeaf,
  'chiropractor-seo': FaBone,
  'movers-and-moving-company-seo': FaTruckMoving,
  'pest-control-service-seo': FaBug,
  'cpa-firm-seo': FaCalculator,
  'wildlife-removal-company-seo': FaPaw,
  'sign-company-seo': FaSign,
  'waste-management-seo': FaTrash,
  'dry-cleaner-seo': FaTshirt,
  'tree-care-seo': FaTree,
  'roofers-seo': FaHouseDamage,
  'accountants-seo': FaFileInvoiceDollar,
  'pet-service-seo': FaPaw,
  'janitorial-service-seo': FaBroom,
}

const INDUSTRY_DESCRIPTIONS = {
  'plastic-surgery-seo': 'Attract patients searching for cosmetic procedures',
  'property-management-seo': 'Fill vacancies with local search visibility',
  'realtor-seo': 'Generate buyer and seller leads organically',
  'fertility-clinic-seo': 'Reach couples searching for fertility care',
  'optometrist-seo': 'Book more eye exam appointments locally',
  'orthodontist-seo': 'Grow orthodontic patient inquiries online',
  'doctor-physician-seo': 'Connect with patients searching for care',
  'physiotherapy-seo': 'Get more rehab and therapy bookings',
  'personal-injury-seo': 'Capture high-intent legal search traffic',
  'dentist-seo': 'Rank for dental services in your area',
  'hvac-seo': 'Win emergency and seasonal HVAC searches',
  'plumber-seo': 'Dominate local plumber near me results',
  'garage-door-seo': 'Drive repair and installation leads',
  'well-drilling-company-seo': 'Reach property owners needing wells',
  'fence-installer-seo': 'Grow fencing project enquiries',
  'deck-builder-seo': 'Show up for outdoor living searches',
  'cabinet-manufacturer-seo': 'Reach homeowners planning renovations',
  'architect-seo': 'Attract design and planning clients',
  'painter-seo': 'Book more residential painting jobs',
  'automotive-seo': 'Drive dealership and service traffic',
  'locksmith-service-seo': 'Capture urgent local locksmith searches',
  'interior-designer-seo': 'Reach clients planning home makeovers',
  'flooring-company-seo': 'Win flooring installation searches',
  'home-builder-and-remodeler-seo': 'Generate construction project leads',
  'catering-seo': 'Book more events and corporate catering',
  'breweries-seo': 'Grow taproom visits and event bookings',
  'wineries-seo': 'Attract tasting room and wedding traffic',
  'herbal-product-seo': 'Rank for natural wellness searches',
  'chiropractor-seo': 'Fill appointment slots from local search',
  'movers-and-moving-company-seo': 'Capture moving season demand',
  'pest-control-service-seo': 'Win urgent pest removal searches',
  'cpa-firm-seo': 'Reach businesses needing tax and accounting',
  'wildlife-removal-company-seo': 'Dominate emergency removal searches',
  'sign-company-seo': 'Attract commercial signage clients',
  'waste-management-seo': 'Grow B2B waste service contracts',
  'dry-cleaner-seo': 'Increase local drop-off foot traffic',
  'tree-care-seo': 'Book trimming and removal jobs',
  'roofers-seo': 'Win storm damage and replacement leads',
  'accountants-seo': 'Reach SMBs searching for accountants',
  'pet-service-seo': 'Grow grooming and pet care bookings',
  'janitorial-service-seo': 'Win commercial cleaning contracts',
}

function industryLabel(title) {
  return title.replace(/\s+SEO$/i, '').trim()
}

/** Shorter labels for mega menu to prevent wrapping */
const MENU_LABEL_OVERRIDES = {
  'home-builder-and-remodeler-seo': 'Home Builder',
  'movers-and-moving-company-seo': 'Moving Company',
  'well-drilling-company-seo': 'Well Drilling',
  'wildlife-removal-company-seo': 'Wildlife Removal',
  'cabinet-manufacturer-seo': 'Cabinet Maker',
  'pest-control-service-seo': 'Pest Control',
  'janitorial-service-seo': 'Janitorial',
  'fence-installer-seo': 'Fence Installer',
  'garage-door-seo': 'Garage Door',
  'locksmith-service-seo': 'Locksmith',
  'interior-designer-seo': 'Interior Design',
  'flooring-company-seo': 'Flooring',
}

function itemDescription(slug, label) {
  return INDUSTRY_DESCRIPTIONS[slug] || `SEO strategies tailored for ${label.toLowerCase()} businesses`
}

export const industryMegaMenuCategories = INDUSTRY_CATEGORIES.map((cat) => {
  const CategoryIcon = CATEGORY_ICONS[cat.icon] || FaBriefcaseMedical

  return {
    title: cat.title,
    link: '/industries',
    icon: CategoryIcon,
    items: cat.items.map((item) => {
      const slug = toSlug(item)
      const label = MENU_LABEL_OVERRIDES[slug] || industryLabel(item)
      const ItemIcon = INDUSTRY_ICONS[slug] || CategoryIcon
      return {
        icon: ItemIcon,
        title: label,
        desc: itemDescription(slug, label),
        link: `/industries/${slug}`,
      }
    }),
  }
})

export const industryMegaMenuFooter = {
  message: 'Need SEO for your industry?',
  highlight: 'We build programs for 41 verticals.',
  secondaryCta: { label: 'View All Industries', href: '/industries' },
  primaryCta: { label: 'Get Industry SEO Audit', href: '/contact-us' },
}
