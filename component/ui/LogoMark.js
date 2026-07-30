/**
 * Brand mark - search (SEO) + growth arrow (results) + AI node.
 * Inline SVG for crisp rendering at any size.
 */
export default function LogoMark({ className = 'h-full w-full', ...props }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="sit-bg" x1="18" y1="10" x2="102" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6B2E88" />
          <stop offset="0.5" stopColor="#4A1F62" />
          <stop offset="1" stopColor="#2A255D" />
        </linearGradient>
        <linearGradient id="sit-growth" x1="52" y1="72" x2="92" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A4DDFB" />
          <stop offset="1" stopColor="#B0A8CC" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="104" height="104" rx="28" fill="url(#sit-bg)" />
      {/* Magnifying glass - search & SEO */}
      <circle cx="46" cy="50" r="18" stroke="white" strokeWidth="5" />
      <path d="M58 62 L72 76" stroke="white" strokeWidth="5" strokeLinecap="round" />
      {/* Growth trend line - marketing results */}
      <path
        d="M34 88 L52 68 L68 76 L92 40"
        stroke="url(#sit-growth)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="92" cy="40" r="5" fill="#A4DDFB" />
      {/* AI pulse node */}
      <circle cx="88" cy="28" r="6" fill="#A4DDFB" opacity="0.95" />
      <circle cx="88" cy="28" r="10" stroke="#A4DDFB" strokeWidth="1.5" opacity="0.45" />
    </svg>
  )
}
