export default function SectionBadge({ children, dark = false }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${dark ? 'text-white/80' : 'text-heading'}`}>
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
          dark ? 'bg-accent text-secondary' : 'bg-secondary text-white'
        }`}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[11px] font-bold uppercase tracking-[0.22em]">{children}</span>
    </div>
  )
}
