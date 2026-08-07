import VisibleFaq from '@/component/common/VisibleFaq'

export default function PremiumFaq({ data }) {
  return (
    <VisibleFaq
      badge={data.badge}
      title={data.title}
      faqs={data.items}
      showSchema={false}
      className="max-w-4xl"
    />
  )
}
