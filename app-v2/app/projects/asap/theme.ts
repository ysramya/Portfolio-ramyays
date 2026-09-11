import type { ProjectTheme } from "@/components/ds/tokens";

/**
 * ASAP — mapped onto the portfolio design system (design-system.md).
 *
 * This was a dark, warm-neutral palette (near-black grounds, sand/ivory type,
 * amber accents) with radial-gradient page washes. The system is a cream
 * ground with one accent used only as the brush flourish, and no gradients
 * (§6) — so the palette is *inverted* rather than deleted: keys that were
 * dark grounds now resolve to the cream grounds, and keys that were light
 * type now resolve to ink. Because the page inverted as a whole, call sites
 * that used a key as a background and call sites that used it as text both
 * stay correct without edits.
 *
 * The accent hues collapse to ink: the system forbids accent-coloured fills
 * and accent text. The case study reads its colours from the page tokens instead.
 */
export const asapPalette = {
  // former grounds → cream surfaces
  black: "var(--bg)",
  charcoal: "var(--bg-raised)",
  graphite: "var(--bg-band)",
  // mid tone stays mid
  slate: "var(--muted-2)",
  // former light type → ink hierarchy
  sand: "var(--body)",
  beige: "var(--body)",
  ivory: "var(--ink)",
  // former accents → ink (no accent fills, no accent text)
  amber: "var(--ink)",
  gold: "var(--muted)",
  sage: "var(--muted-2)",
} as const;

/** Gradients are out (§6). These resolve to flat system surfaces. */
export const asapGradients = {
  amberSand: "var(--bg-raised)",
  charcoalGraphite: "var(--bg-band)",
  goldCharcoal: "var(--bg-raised)",
  sageAmber: "var(--bg-band)",
  page: "var(--bg)",
} as const;

export const asapTheme: ProjectTheme = {
  primary: "var(--ink)",
  secondary: "var(--bg-raised)",
  accent: "var(--ink)",
};
