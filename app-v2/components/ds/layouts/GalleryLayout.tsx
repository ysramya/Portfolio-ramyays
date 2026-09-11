import type { ReactNode } from "react";

/**
 * GalleryLayout — a 12-column image grid on the site container.
 *
 * Children are placed via `gridColumn`/`gridRow`; giving two children
 * overlapping row ranges plus a z-index still produces real overlap.
 *
 * Like EditorialLayout it now sits on `--wrap-max` / `--wrap-pad` so image
 * sections align with the rest of the page instead of breaking out to
 * 1440–1600px. `maxWidth` is accepted for existing call sites and ignored.
 */
export default function GalleryLayout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  /** Deprecated — accepted for existing call sites; the canvas always uses the site container. */
  maxWidth?: string;
}) {
  return (
    <section
      className={`py-12 md:py-[72px] ${className}`}
      style={{ maxWidth: "var(--wrap-max)", marginInline: "auto", paddingInline: "var(--wrap-pad)" }}
    >
      {/* ds-grid: below md, globals.css collapses children to full-row and
          zeroes the collage stagger offsets. */}
      <div
        className="ds-grid grid gap-4"
        style={{ gridTemplateColumns: "repeat(12, minmax(0, 1fr))", gridAutoRows: "minmax(80px, auto)" }}
      >
        {children}
      </div>
    </section>
  );
}
