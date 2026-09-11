import type { ReactNode } from "react";

/**
 * Why this exists: the raw card surface, for the one-off callouts that don't
 * warrant a bespoke component (a highlighted aside, a floating label, a small
 * panel). Every other card-using component in this system is a specialized
 * wrapper around this same surface — change it here and it propagates.
 *
 * Named GlassCard for its history. It is no longer glass: blur, translucency
 * and drop shadows are out of the system (design-system.md §6), so this
 * renders the flat `.card` surface — raised cream, hairline border, square
 * corners. The `strong` prop is kept for its call sites and now selects the
 * band tone, which is the only "heavier" surface the system has.
 */
export default function GlassCard({
  children,
  className = "",
  strong = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** Sits the card on the band tone instead of raised cream, for a slightly heavier surface. */
  strong?: boolean;
  as?: "div" | "section" | "aside";
}) {
  return (
    <Tag
      className={`card ${className}`}
      style={strong ? { background: "var(--bg-band)" } : undefined}
    >
      {children}
    </Tag>
  );
}
