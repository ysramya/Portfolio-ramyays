import Image from "next/image";

/**
 * The RY monogram: cream letters and gold leaf-and-ring line art.
 *
 * Two renderings of one artwork, because cream letters vanish on ivory: the
 * cream version for deep-green grounds and a dark-letter version for ivory.
 * Which one shows follows the surrounding theme in CSS (`.logo-on-dark` /
 * `.logo-on-light`, globals.css), so the nav switches with the band it floats
 * over and the footer takes the light one. The favicon and touch icon use the
 * cream version on a deep-green tile (app/icon.png, app/apple-icon.png).
 */

export default function Logo({
  size = 44,
  className = "",
}: {
  /** Rendered width and height in px. */
  size?: number;
  className?: string;
}) {
  const common = {
    width: size,
    height: size,
    sizes: `${size}px`,
    draggable: false,
  } as const;
  return (
    <span className={`inline-flex select-none ${className}`} style={{ width: size, height: size }}>
      <Image src="/img/brand/logo-mark-light.png" alt="RY" priority className="logo-on-light" {...common} />
      <Image src="/img/brand/logo-mark.png" alt="" aria-hidden priority className="logo-on-dark" {...common} />
    </span>
  );
}
