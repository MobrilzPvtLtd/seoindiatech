/** Inline brand mark — never depends on Netlify /public static paths. */
export default function SitLogoSvg({ className = 'h-9 w-auto', title = 'SEO India Tech' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 58"
      fill="none"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <text x="0" y="32" fill="#1E3A5F" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="800">
        SE
      </text>
      <g transform="translate(48, 4)">
        <circle cx="12" cy="12" r="12" fill="#F26522" />
        <circle cx="12" cy="12" r="8" fill="#FFFFFF" />
        <circle cx="12" cy="12" r="5" fill="#F26522" />
        <circle cx="12" cy="12" r="2.2" fill="#D95412" />
      </g>
      <g transform="translate(76, 2)">
        <circle cx="10" cy="3" r="3" fill="#F26522" />
        <circle cx="10" cy="3" r="1.2" fill="#D95412" />
        <path
          d="M10 6 L10 20 L6 15 M10 20 L14 15"
          stroke="#F26522"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <text x="96" y="32" fill="#1E3A5F" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="800">
        ndia
      </text>
      <text
        x="100"
        y="54"
        textAnchor="middle"
        fill="#1E3A5F"
        fontFamily="Arial, sans-serif"
        fontSize="21"
        fontWeight="800"
        letterSpacing="0.6"
      >
        tech
      </text>
    </svg>
  )
}
