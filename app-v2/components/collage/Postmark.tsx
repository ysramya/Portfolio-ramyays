/** A circular postmark with cancellation waves — drawn, not an image asset. */
export default function Postmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      {/* cancellation waves */}
      <svg width="86" height="34" viewBox="0 0 86 34" fill="none">
        {[8, 15, 22, 29].map((y) => (
          <path
            key={y}
            d={`M2 ${y} q 10 -5 20 0 t 20 0 t 20 0 t 20 0`}
            stroke="rgba(36,31,26,0.5)"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <svg width="84" height="84" viewBox="0 0 84 84" fill="none">
        <circle cx="42" cy="42" r="39" stroke="rgba(36,31,26,0.55)" strokeWidth="1.6" strokeDasharray="3 3" />
        <circle cx="42" cy="42" r="31" stroke="rgba(36,31,26,0.4)" strokeWidth="1" />
        <path id="pm-top" d="M42 12 a30 30 0 0 1 0 60 a30 30 0 0 1 0 -60" fill="none" />
        <text fill="rgba(36,31,26,0.62)" fontSize="7.5" letterSpacing="2.2" fontFamily="var(--font-type), monospace">
          <textPath href="#pm-top" startOffset="8%">
            OBSERVE · QUESTION · DESIGN
          </textPath>
        </text>
        {/* small central flourish */}
        <g stroke="rgba(36,31,26,0.55)" strokeWidth="1.2" fill="none">
          <circle cx="42" cy="42" r="4.5" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={deg}
              x1="42"
              y1="42"
              x2={42 + 10 * Math.cos((deg * Math.PI) / 180)}
              y2={42 + 10 * Math.sin((deg * Math.PI) / 180)}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
