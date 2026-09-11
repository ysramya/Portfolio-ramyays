/**
 * Wordmark — design-system.md §2.
 *
 * Prata at 28–30px, `letter-spacing: .06em`, ink on cream.
 *
 * This replaced the previous `/img/brand/logo.png` mark, which is a gold
 * wordmark on a solid black square. On the cream ground that block reads as a
 * third background tone in every header and footer, which the two-tone rule
 * (§1) rules out — and the system names a typographic wordmark instead. The
 * image asset is still in `public/img/brand/` if it's wanted back.
 */

export default function Logo({
  size = 30,
  className = "",
}: {
  /** Rendered wordmark size in px. The system's range is 28–30. */
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`font-[family-name:var(--font-display)] leading-none text-[var(--ink)] ${className}`}
      style={{ fontSize: `${size}px`, letterSpacing: "0.06em" }}
    >
      RY
    </span>
  );
}
