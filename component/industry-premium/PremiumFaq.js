import VisibleFaq from '@/component/common/VisibleFaq'
import PremiumSection, { PremiumSectionHeader } from './PremiumSection'

export default function PremiumFaq({ data }) {
  return (
    <PremiumSection id="faq" variant="white">
      <PremiumSectionHeader
        badge={data.badge}
        title={data.title}
        align="center"
        className="mb-10"
      />
      <VisibleFaq
        faqs={data.items}
        showSchema={false}
        embedded
        className="max-w-3xl mx-auto"
      />
    </PremiumSection>
  )
}
