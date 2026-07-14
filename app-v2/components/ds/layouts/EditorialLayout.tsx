import type { ReactNode } from "react";

/**
 * EditorialLayout — 1280px, a 12-column CSS Grid canvas.
 *
 * This is the asymmetric workhorse. It has no opinion about what goes
 * where — it's a grid, not a template. Children are placed by the caller
 * via `style={{ gridColumn: "1 / 7" }}` (etc.) on each child, so the same
 * layout can produce a list+aside one time and a 2-column split the next.
 * That's the whole point: composition logic lives at the call site, not
 * baked into a fixed component recipe.
 */
export default function EditorialLayout({
  children,
  className = "",
  maxWidth = "1280px",
}: {
  children: ReactNode;
  className?: string;
  /** Override the default 1280px canvas — pass "1440px" etc. for sections that need more room (statistics, research). */
  maxWidth?: string;
}) {
  return (
    <section
      className={`py-20 md:py-28 px-6 md:px-10 ${className}`}
      style={{ maxWidth, marginInline: "auto" }}
    >
      <div
        className="grid gap-x-6 gap-y-10"
        style={{ gridTemplateColumns: "repeat(12, 1fr)" }}
      >
        {children}
      </div>
    </section>
  );
}
