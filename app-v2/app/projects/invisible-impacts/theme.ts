import type { ProjectTheme } from "@/components/ds/tokens";

/**
 * Invisible Impacts / Cost of a Click — mapped onto the portfolio design
 * system (design-system.md).
 *
 * The original palette was read off the installation photo: black hardware,
 * silver wordmark, vivid blue LED light in the water tank. That reading is
 * still true of the photograph, and the photograph still carries it — but the
 * page around it is now the system's cream ground with no gradients (§6) and
 * no accent fills (§1). The palette is inverted so existing call sites stay
 * correct whether they used a key as a background or as text.
 */
export const impactsPalette = {
  // former grounds → cream surfaces
  background: "var(--bg)",
  surface: "var(--bg-raised)",
  // former light type → ink hierarchy
  silver: "var(--body)",
  // former accents → ink (no accent fills, no accent text)
  lightBlue: "var(--ink)",
  deepBlue: "var(--muted)",
  divider: "var(--rule)",
} as const;

/** Gradients are out (§6). These resolve to flat system surfaces. */
export const impactsGradients = {
  blueCharcoal: "var(--bg-raised)",
  deepBlueCharcoal: "var(--bg-band)",
  surfaceBlack: "var(--bg-raised)",
  page: "var(--bg)",
} as const;

export const impactsTheme: ProjectTheme = {
  primary: "var(--ink)",
  secondary: "var(--bg-raised)",
  accent: "var(--ink)",
};
