import type { ReactNode } from "react";
import { glassTier } from "./tokens";

/**
 * Why this exists: the raw liquid-glass surface, for the one-off callouts
 * that don't warrant a bespoke component (a highlighted aside, a floating
 * label, a small panel). Every other glass-using component in this system
 * (FloatingQuote, chips, the chat panel) is a specialized wrapper around
 * this same surface — change the tint here and it propagates everywhere.
 */
export default function GlassCard({
  children,
  className = "",
  strong = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** Use the stronger tier when the surface sits over busy imagery and needs to stay legible. */
  strong?: boolean;
  as?: "div" | "section" | "aside";
}) {
  return (
    <Tag className={`${strong ? glassTier.strong : glassTier.standard} rounded-2xl ${className}`}>
      {children}
    </Tag>
  );
}
