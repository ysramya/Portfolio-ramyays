import type { ReactNode } from "react";

/**
 * GalleryLayout — 1440px, a collage grid.
 *
 * Wider than EditorialLayout on purpose — a collage needs room to stagger
 * and overlap. Children are placed via `gridColumn`/`gridRow` on each
 * child; giving two children overlapping row ranges (e.g. one spans rows
 * 1–2, another starts at row 2) plus a z-index is what produces real
 * overlap instead of a gapped grid.
 */
export default function GalleryLayout({
  children,
  className = "",
  maxWidth = "1440px",
}: {
  children: ReactNode;
  className?: string;
  /** Override the default 1440px canvas — pass "1600px" for wider research/collage moments. */
  maxWidth?: string;
}) {
  return (
    <section
      className={`py-20 md:py-28 px-6 md:px-10 ${className}`}
      style={{ maxWidth, marginInline: "auto" }}
    >
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(12, 1fr)", gridAutoRows: "minmax(80px, auto)" }}
      >
        {children}
      </div>
    </section>
  );
}
