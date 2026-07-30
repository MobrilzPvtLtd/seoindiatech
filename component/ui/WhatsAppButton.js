'use client'

import { FaWhatsapp } from 'react-icons/fa6'

const WHATSAPP_NUMBER = '918076676731'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hi SEO India Tech, I would like to discuss digital marketing / SEO services.'
)
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)] lg:bottom-8 lg:left-8"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  )
}
