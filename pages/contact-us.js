import ContactUsSection from '@/component/contactus/Contactus'
import ContactSeoContent from '@/component/contactus/ContactSeoContent'
import SeoHead from '@/component/common/SeoHead'
import { getPageSeo } from '@/utils/pageSeoRegistry'
import { buildContactPageSchema } from '@/utils/schemaBuilders'

const seo = getPageSeo('/contact-us')

export default function ContactUsPage() {
  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        path="/contact-us"
        schema={buildContactPageSchema()}
      />      <ContactUsSection />
      <ContactSeoContent />
    </>
  )
}
