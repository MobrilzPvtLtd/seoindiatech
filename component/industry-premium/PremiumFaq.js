import VisibleFaq from '@/component/common/VisibleFaq'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function PremiumFaq({ data }) {
  return (
    <PremiumSection id="faq" variant="gradient">
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle || 'Clear answers to the questions decision-makers ask before choosing an SEO partner.'}
        align="center"
        className="mb-10"
      />
      <VisibleFaq
        faqs={data.items}
        showSchema={false}
        embedded
        className="max-w-4xl mx-auto"
      />
    </PremiumSection>
  )
}
