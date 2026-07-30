import {
  Store,
  Home,
  HeartPulse,
  Settings,
  Scissors,
  Building2,
  KeyRound,
  Baby,
  Eye,
  Smile,
  Stethoscope,
  Dumbbell,
  Scale,
  AlignCenter,
  Wind,
  Wrench,
  Warehouse,
  Droplets,
  Fence,
  Hammer,
  Box,
  Ruler,
  Paintbrush,
  Car,
  Key,
  Lamp,
  Layers,
  HardHat,
  UtensilsCrossed,
  Wheat,
  Wine,
  Leaf,
  Activity,
  Truck,
  Bug,
  Calculator,
  Squirrel,
  Signpost,
  Trash2,
  Shirt,
  TreePine,
  Receipt,
  PawPrint,
  SprayCan,
} from 'lucide-react'
import { INDUSTRY_CATEGORIES, toSlug } from '@/utils/industries'

const CATEGORY_ICONS = {
  store: Store,
  home: Home,
  heart: HeartPulse,
  cog: Settings,
}

/** Unique, relevant icon per industry slug */
const INDUSTRY_ICONS = {
  'plastic-surgery-seo': Scissors,
  'property-management-seo': Building2,
  'realtor-seo': KeyRound,
  'fertility-clinic-seo': Baby,
  'optometrist-seo': Eye,
  'orthodontist-seo': AlignCenter,
  'doctor-physician-seo': Stethoscope,
  'physiotherapy-seo': Dumbbell,
  'personal-injury-seo': Scale,
  'dentist-seo': Smile,
  'hvac-seo': Wind,
  'plumber-seo': Wrench,
  'garage-door-seo': Warehouse,
  'well-drilling-company-seo': Droplets,
  'fence-installer-seo': Fence,
  'deck-builder-seo': Hammer,
  'cabinet-manufacturer-seo': Box,
  'architect-seo': Ruler,
  'painter-seo': Paintbrush,
  'automotive-seo': Car,
  'locksmith-service-seo': Key,
  'interior-designer-seo': Lamp,
  'flooring-company-seo': Layers,
  'home-builder-and-remodeler-seo': HardHat,
  'catering-seo': UtensilsCrossed,
  'breweries-seo': Wheat,
  'wineries-seo': Wine,
  'herbal-product-seo': Leaf,
  'chiropractor-seo': Activity,
  'movers-and-moving-company-seo': Truck,
  'pest-control-service-seo': Bug,
  'cpa-firm-seo': Calculator,
  'wildlife-removal-company-seo': Squirrel,
  'sign-company-seo': Signpost,
  'waste-management-seo': Trash2,
  'dry-cleaner-seo': Shirt,
  'tree-care-seo': TreePine,
  'roofers-seo': Home,
  'accountants-seo': Receipt,
  'pet-service-seo': PawPrint,
  'janitorial-service-seo': SprayCan,
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

function itemDescription(slug, label) {
  return INDUSTRY_DESCRIPTIONS[slug] || `SEO strategies tailored for ${label.toLowerCase()} businesses`
}

export const industryMegaMenuCategories = INDUSTRY_CATEGORIES.map((cat) => {
  const CategoryIcon = CATEGORY_ICONS[cat.icon] || Store

  return {
    title: cat.title,
    link: '/industries',
    icon: CategoryIcon,
    items: cat.items.map((item) => {
      const slug = toSlug(item)
      const label = industryLabel(item)
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
