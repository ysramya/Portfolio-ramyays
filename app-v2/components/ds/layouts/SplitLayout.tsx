import type { ReactNode, CSSProperties } from "react";

/**
 * SplitLayout — a 2-column CSS Grid on the site container, ratio
 * configurable per call.
 *
 * Not a fixed 50/50: pass `ratio` as a `[left, right]` fr-tuple so
 * consecutive Split sections down a page can vary (5:7 one time, 7:5
 * reversed the next). The ratio is written into a single CSS custom
 * property so `md:grid-cols-[var(--split-cols)]` keeps the
 * single-column-on-mobile behaviour server-renderable.
 *
 * Width and gutters come from `--wrap-max` / `--wrap-pad`, matching the
 * nav and every other section.
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
  const gridVars = {
    "--split-cols": `minmax(0, ${ratio[0]}fr) minmax(0, ${ratio[1]}fr)`,
  } as CSSProperties;

  return (
    <section
      className={`py-12 md:py-[72px] ${className}`}
      style={{ maxWidth: "var(--wrap-max)", marginInline: "auto", paddingInline: "var(--wrap-pad)" }}
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
