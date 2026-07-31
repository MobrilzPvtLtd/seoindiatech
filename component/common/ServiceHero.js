import { ArrowRight, Search, BarChart, Globe, Shield, Zap, Target, TrendingUp } from 'lucide-react'
import PageHero from '@/component/ui/PageHero'

const iconMap = {
  Search,
  BarChart,
  Globe,
  Shield,
  Zap,
  Target,
  TrendingUp,
  ArrowRight,
}

export default function ServiceHero({ title, subtitle, features, image, badge }) {
  const mappedFeatures = features?.map((item) => ({
    ...item,
    icon: typeof item.icon === 'string' ? iconMap[item.icon] || ArrowRight : item.icon,
  }))

  return (
    <PageHero
      title={title}
      subtitle={subtitle}
      badge={badge}
      features={mappedFeatures}
      image={image || '/images/services/score.png'}
      imageAlt={typeof title === 'string' ? title : 'SEO services illustration'}
      primaryCta={{ label: 'Get started now', href: '/contact-us' }}
      secondaryCta={{ label: 'See our results', href: '#contact-form' }}
    />
  )
}
