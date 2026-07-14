import type { ReactNode, CSSProperties } from "react";

/**
 * SplitLayout — 1280px, a 2-column CSS Grid, ratio configurable per call.
 *
 * Not a fixed 50/50: pass `ratio` as a `[left, right]` fr-tuple so
 * consecutive Split sections down a page can vary (5:7 one time, 7:5
 * reversed the next) instead of feeling like the same block reused. The
 * ratio is written into a single CSS custom property so it can vary per
 * instance while `md:grid-cols-[var(--split-cols)]` keeps the
 * single-column-on-mobile breakpoint behavior server-renderable (no
 * client-only window checks).
 */
export default function SplitLayout({
  left,
  right,
  ratio = [1, 1],
  className = "",
}: {
  left: ReactNode;
  right: ReactNode;
  ratio?: [number, number];
  className?: string;
}) {
  const gridVars = { "--split-cols": `${ratio[0]}fr ${ratio[1]}fr` } as CSSProperties;

  return (
    <section
      className={`py-20 md:py-28 px-6 md:px-10 ${className}`}
      style={{ maxWidth: "1280px", marginInline: "auto" }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-[var(--split-cols)] gap-10 md:gap-14 items-center"
        style={gridVars}
      >
        {left}
        {right}
      </div>
    </section>
  );
}
