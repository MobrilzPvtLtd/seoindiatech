/**
 * Original SIT logo layout - transparent SVG, brand palette (no sticker box).
 * compact: single-line wordmark for navigation header.
 */
export default function SitLogoMark({ variant = 'onLight', compact = false, className = '' }) {
  const isDark = variant === 'onDark'

  const navy = isDark ? '#F3F6FE' : '#2A255D'
  const purple = isDark ? '#C4B8E8' : '#6B2E88'
  const sky = isDark ? '#A4DDFB' : '#A4DDFB'
  const deep = isDark ? '#141228' : '#2A255D'

  if (compact) {
    return (
      <svg
        viewBox="0 0 220 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <text
          x="0"
          y="26"
          fill={navy}
          fontFamily="var(--font-heading), Plus Jakarta Sans, Arial, sans-serif"
          fontSize="22"
          fontWeight="800"
        >
          SE
        </text>
        <g transform="translate(40, 2)">
          <circle cx="11" cy="11" r="11" fill={purple} />
          <circle cx="11" cy="11" r="7" fill={deep} />
          <circle cx="11" cy="11" r="3.8" fill={sky} />
          <circle cx="11" cy="11" r="1.5" fill={deep} />
          <path
            d="M16 4 L21 9 L16 14"
            stroke={isDark ? '#F3F6FE' : '#2A255D'}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <circle cx="66" cy="7" r="3" fill={purple} />
        <path
          d="M66 11 L66 22 L61 17 M66 22 L71 17"
          stroke={purple}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="74"
          y="26"
          fill={navy}
          fontFamily="var(--font-heading), Plus Jakarta Sans, Arial, sans-serif"
          fontSize="22"
          fontWeight="800"
        >
          ndia
        </text>
        <text
          x="128"
          y="26"
          fill={navy}
          fontFamily="var(--font-heading), Plus Jakarta Sans, Arial, sans-serif"
          fontSize="18"
          fontWeight="800"
          letterSpacing="0.4"
        >
          tech
        </text>
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 210 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <text
        x="0"
        y="30"
        fill={navy}
        fontFamily="var(--font-heading), Plus Jakarta Sans, Arial, sans-serif"
        fontSize="26"
        fontWeight="800"
      >
        SE
      </text>

      {/* O - target */}
      <g transform="translate(46, 4)">
        <circle cx="13" cy="13" r="13" fill={purple} />
        <circle cx="13" cy="13" r="8.5" fill={deep} />
        <circle cx="13" cy="13" r="4.5" fill={sky} />
        <circle cx="13" cy="13" r="1.8" fill={deep} />
        <path
          d="M19 5 L25 11 L19 17"
          stroke={isDark ? '#F3F6FE' : '#2A255D'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* I - arrow + dot */}
      <circle cx="74" cy="8" r="3.5" fill={purple} />
      <path
        d="M74 13 L74 26 L68 20 M74 26 L80 20"
        stroke={purple}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <text
        x="84"
        y="30"
        fill={navy}
        fontFamily="var(--font-heading), Plus Jakarta Sans, Arial, sans-serif"
        fontSize="26"
        fontWeight="800"
      >
        ndia
      </text>

      <text
        x="105"
        y="52"
        textAnchor="middle"
        fill={navy}
        fontFamily="var(--font-heading), Plus Jakarta Sans, Arial, sans-serif"
        fontSize="19"
        fontWeight="800"
        letterSpacing="0.5"
      >
        tech
      </text>
    </svg>
  )
}
