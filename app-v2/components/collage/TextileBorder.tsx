/**
 * The woven-textile strip down the left edge of the homepage.
 *
 * Drawn as a repeating SVG pattern rather than an image so it scales to any
 * page height without tiling seams. Hidden below lg — on a phone it would
 * eat scarce horizontal space for pure decoration.
 */
export default function TextileBorder() {
  return (
    <div
      className="hidden lg:block absolute left-0 top-0 bottom-0 w-[26px] z-10 pointer-events-none"
      aria-hidden
    >
      <svg width="26" height="100%" preserveAspectRatio="none">
        <defs>
          <pattern id="kilim" width="26" height="48" patternUnits="userSpaceOnUse">
            <rect width="26" height="48" fill="#b3392c" />
            {/* diamond lattice */}
            <path d="M13 4 L22 16 L13 28 L4 16 Z" fill="none" stroke="#e0a02e" strokeWidth="1.6" />
            <path d="M13 10 L18 16 L13 22 L8 16 Z" fill="#efe6d6" />
            {/* zig-zag bands */}
            <path d="M0 32 L6.5 36 L13 32 L19.5 36 L26 32" fill="none" stroke="#3e8a8c" strokeWidth="2" />
            <path d="M0 41 L6.5 45 L13 41 L19.5 45 L26 41" fill="none" stroke="#efe6d6" strokeWidth="1.4" />
            {/* edge rules */}
            <rect x="0" y="0" width="1.5" height="48" fill="#241f1a" opacity="0.35" />
            <rect x="24.5" y="0" width="1.5" height="48" fill="#241f1a" opacity="0.35" />
          </pattern>
        </defs>
        <rect width="26" height="100%" fill="url(#kilim)" />
      </svg>
    </div>
  );
}
