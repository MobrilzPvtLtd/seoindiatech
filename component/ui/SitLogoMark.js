/**
 * SEO India Tech wordmark - transparent background, brand orange accents.
 * compact: single-line for navigation; default: stacked "tech" line.
 */
export default function SitLogoMark({ variant = 'onLight', compact = false, className = '' }) {
  const isDark = variant === 'onDark'

  const text = isDark ? '#F8FAFC' : '#1E3A5F'
  const orange = '#F26522'
  const orangeDark = '#D95412'
  const targetMid = isDark ? '#1E3A5F' : '#FFFFFF'

  const TargetO = ({ x, y, scale = 1 }) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <circle cx="12" cy="12" r="12" fill={orange} />
      <circle cx="12" cy="12" r="8" fill={targetMid} />
      <circle cx="12" cy="12" r="5" fill={orange} />
      <circle cx="12" cy="12" r="2.2" fill={orangeDark} />
    </g>
  )

  const ArrowI = ({ x, y, scale = 1 }) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <circle cx="10" cy="3" r="3" fill={orange} />
      <circle cx="10" cy="3" r="1.2" fill={orangeDark} />
      <path
        d="M10 6 L10 20 L6 15 M10 20 L14 15"
        stroke={orange}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  )

  const font = 'var(--font-heading), Plus Jakarta Sans, Arial, sans-serif'

  const svgA11y = {
    role: 'img',
    'aria-label': 'SEO India Tech',
  }

  if (compact) {
    return (
      <svg
        viewBox="0 0 228 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...svgA11y}
      >
        <text x="0" y="27" fill={text} fontFamily={font} fontSize="24" fontWeight="800">
          SE
        </text>
        <TargetO x={42} y={2} scale={0.92} />
        <ArrowI x={66} y={0} scale={0.9} />
        <text x={84} y="27" fill={text} fontFamily={font} fontSize="24" fontWeight="800">
          ndia
        </text>
        <text x="142" y="27" fill={text} fontFamily={font} fontSize="20" fontWeight="800" letterSpacing="0.3">
          tech
        </text>
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 200 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...svgA11y}
    >
      <text x="0" y="32" fill={text} fontFamily={font} fontSize="28" fontWeight="800">
        SE
      </text>
      <TargetO x={48} y={4} />
      <ArrowI x={76} y={2} />
      <text x="96" y="32" fill={text} fontFamily={font} fontSize="28" fontWeight="800">
        ndia
      </text>
      <text
        x="100"
        y="54"
        textAnchor="middle"
        fill={text}
        fontFamily={font}
        fontSize="21"
        fontWeight="800"
        letterSpacing="0.6"
      >
        tech
      </text>
    </svg>
  )
}
