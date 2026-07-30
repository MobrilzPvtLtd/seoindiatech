import SeoHead from '@/component/common/SeoHead'
import PPC from '@/component/services/pay-per-click/PPC'

export default function PayPerClickPage() {
  return (
    <>
      <SeoHead
        title="Pay Per Click Services | SEO India Tech"
        description="Run high-performing pay per click campaigns for maximum ROI. Expert PPC management services by SEO India Tech."
        path="/services/pay-per-click"
        noindex
      />
      <PPC />
    </>
  )
}
