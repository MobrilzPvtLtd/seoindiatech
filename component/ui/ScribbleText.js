export default function ScribbleText({
  children,
  className = '',
  scribbleColor = '#A4DDFB',
  italic = true,
}) {
  return (
    <span className={`relative inline-block ${italic ? 'italic' : ''} ${className}`}>
      {children}
      <svg
        className="absolute -bottom-1 left-0 w-full h-[0.35em] pointer-events-none"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M2,8 C30,2 50,10 80,6 C110,2 130,9 160,5 C175,3 190,7 198,4"
          fill="none"
          stroke={scribbleColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
