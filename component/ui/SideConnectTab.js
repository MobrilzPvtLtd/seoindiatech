import Link from 'next/link'

export default function SideConnectTab() {
  return (
    <Link
      href="/contact-us"
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 lg:flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-bold tracking-wide py-6 px-2.5 rounded-l-xl shadow-glow-brand transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      style={{ writingMode: 'vertical-rl' }}
      aria-label="Let's Connect - contact us"
    >
      Let&apos;s Connect
    </Link>
  )
}
