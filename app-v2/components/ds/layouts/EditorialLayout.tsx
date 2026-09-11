import type { ReactNode } from "react";

/**
 * EditorialLayout — a 12-column CSS Grid canvas on the site container.
 *
 * The asymmetric workhorse. It has no opinion about what goes where —
 * children are placed by the caller via `style={{ gridColumn: "1 / 7" }}`,
 * so the same layout can produce a list+aside one time and a 2-column split
 * the next.
 *
 * Width and gutters come from the shared `--wrap-max` / `--wrap-pad` tokens,
 * so every section lines up with the nav, the numbered sections and the
 * deep bands. It used to take per-section widths up to 1700px, which pushed
 * content past the grid everything else sits on; `maxWidth` is still
 * accepted so existing call sites compile, but it no longer widens the
 * canvas.
 */
export default function EditorialLayout({
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
      {/* ds-grid: below md, globals.css forces every child to span the full
          row — call sites place children with inline gridColumn, which a
          utility class can't override. */}
      <div
        className="ds-grid grid gap-x-6 gap-y-10"
        style={{ gridTemplateColumns: "repeat(12, minmax(0, 1fr))" }}
      >
        {children}
      </div>
    </section>
  );
}
