import type { ProjectTheme } from "@/components/ds/tokens";

/**
 * Wellnut — mapped onto the portfolio design system (design-system.md).
 *
 * The original "night sky" register (indigo / purple / pink on near-black,
 * deliberately avoiding the mascot's forest green per user direction) is
 * retired with the dark system: the page is cream now, gradients are out
 * (§6), and accent fills and accent text are out (§1). Keys are inverted so
 * existing call sites stay correct as either backgrounds or text.
 */
export const wellnutPalette = {
  // former grounds → cream surfaces
  black: "var(--bg)",
  navy: "var(--bg-band)",
  // former accents → ink hierarchy
  indigo: "var(--ink)",
  purple: "var(--ink)",
  pink: "var(--muted)",
  brown: "var(--muted-2)",
  // former light type → ink
  lavender: "var(--body)",
  ivory: "var(--ink)",
} as const;

/** Gradients are out (§6). These resolve to flat system surfaces. */
export const wellnutGradients = {
  purpleIndigo: "var(--bg-raised)",
  indigoPink: "var(--bg-raised)",
  brownPurple: "var(--bg-band)",
  navyBlack: "var(--bg-band)",
  page: "var(--bg)",
} as const;

export const wellnutTheme: ProjectTheme = {
  primary: "var(--ink)",
  secondary: "var(--bg-raised)",
  accent: "var(--ink)",
};
