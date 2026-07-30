import Link from 'next/link'
import { Headphones, Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { WHATSAPP_URL } from '@/component/ui/WhatsAppButton'

const EMAIL = 'sales@seoindiatech.com'

export default function FooterQuickContact() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-6 space-y-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
          <Headphones className="h-5 w-5" />
        </div>
        <h4 className="text-base font-bold text-white tracking-tight">Quick Contact</h4>
      </div>

      <p className="text-sm leading-relaxed text-white/55">
        Get in touch with us instantly through WhatsApp or Email. Serving clients in{' '}
        <span className="font-semibold text-white/80">12+ countries</span> worldwide.
      </p>

      <div className="grid grid-cols-2 gap-3">
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#eceae4] hover:bg-white px-3 py-3.5 text-xs sm:text-sm font-bold text-gray-900 transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <FaWhatsapp className="h-5 w-5 shrink-0 text-[#25D366]" />
          <span>WHATSAPP</span>
        </Link>
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#eceae4] hover:bg-white px-3 py-3.5 text-xs sm:text-sm font-bold text-gray-900 transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <Mail className="h-5 w-5 shrink-0 text-red-500" />
          <span>EMAIL</span>
        </a>
      </div>
    </div>
  )
}
