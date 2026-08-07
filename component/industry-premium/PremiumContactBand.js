import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import PremiumSection from './PremiumSection'

export default function PremiumContactBand({ data }) {
  return (
    <PremiumSection id="contact" variant="accent" tight>
      <div className="overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-premium dark:bg-card">
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-border p-8 md:p-10 lg:border-b-0 lg:border-r">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Get Started</p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-heading md:text-3xl">{data.title}</h2>
            <p className="premium-prose mt-4">{data.subtitle}</p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={data.phone.href}
                  className="inline-flex items-center gap-3 text-heading transition-colors hover:text-primary"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold">{data.phone.label}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${data.email}`}
                  className="inline-flex items-center gap-3 text-heading transition-colors hover:text-primary"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold">{data.email}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-heading/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm">{data.address}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center bg-gradient-to-br from-secondary to-primary p-8 text-white md:p-10">
            <h3 className="font-heading text-xl font-bold md:text-2xl">{data.formTitle}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/90">{data.formSubtitle}</p>
            <ul className="mt-5 space-y-2">
              {data.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href={data.cta.href}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-secondary transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              {data.cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </PremiumSection>
  )
}
