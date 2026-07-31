import Link from 'next/link'
import { TrendingUp, Target, ShieldCheck, Zap, FileText, BarChart3, Check } from 'lucide-react'
import Button from '@/component/ui/Button'
import PageSection from '@/component/ui/PageSection'
import SectionHeader from '@/component/ui/SectionHeader'

const reasons = [
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    desc: (
      <>
        We&apos;ve worked across enough industries and business sizes to know the difference between what actually moves rankings and what just looks like activity on a report. Our experience delivering{' '}
        <Link href="/services/ai-seo" className="text-primary dark:text-accent hover:underline">
          AI SEO services India
        </Link>{' '}
        helps businesses achieve sustainable organic growth.
      </>
    ),
  },
  {
    icon: Target,
    title: 'Customized Strategies',
    desc: 'Your market, your competitors, and your audience shape the plan-not a template we run for every client. Every strategy is tailored to your business goals and long-term success.',
  },
  {
    icon: ShieldCheck,
    title: 'White-Hat SEO Techniques',
    desc: 'We only use methods search engines actually reward, so your rankings hold up long after the work is done, not just until the next algorithm update.',
  },
  {
    icon: Zap,
    title: 'Holistic Digital Marketing Expertise',
    desc: 'SEO rarely works in isolation. When it needs to connect with content, design, or paid campaigns, we handle that too instead of leaving gaps for someone else to fill.',
  },
  {
    icon: FileText,
    title: 'Full Transparency',
    desc: "You'll always know exactly what's been done, what's coming next, and why-not just a dashboard full of numbers with no context.",
  },
  {
    icon: BarChart3,
    title: 'ROI-Focused Growth',
    desc: (
      <>
        Every recommendation gets weighed against one question: does this actually grow the business, or does it just move a metric that looks good in a slide deck? That&apos;s the approach behind our{' '}
        <strong>Best SEO Services in India</strong>, where every action is focused on measurable business results.
      </>
    ),
  },
]

export default function WhyPartnerSection({ title, subtitle, showCheckmarks = false }) {
  const defaultTitle = (
    <>
      Why Businesses Choose <span className="text-primary">SEO India Tech</span>?
    </>
  )

  return (
    <PageSection variant="white" padding="default">
      <div className="flex flex-col items-start gap-12 md:flex-row md:gap-20">
        <div className="w-full md:sticky md:top-28 md:w-5/12">
          {typeof title === 'string' ? (
            <SectionHeader title={title} description={subtitle} align="left" className="mb-8" />
          ) : (
            <div className="mb-8">
              <h2 className="font-heading text-3xl font-bold leading-tight text-heading md:text-4xl lg:text-5xl">
                {title || defaultTitle}
              </h2>
              {subtitle && <p className="mt-6 text-lg leading-relaxed text-muted">{subtitle}</p>}
            </div>
          )}
          <Button href="/contact-us" variant="primary" size="lg">
            Get a Free Consultation
          </Button>
        </div>

        <div className="w-full md:w-7/12">
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="group card-premium flex gap-4 rounded-2xl p-6 hover:border-primary/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                  {showCheckmarks ? (
                    <Check className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                  ) : (
                    <reason.icon className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                  )}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-heading">{reason.title}</h3>
                  <p className="leading-relaxed text-muted">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  )
}
