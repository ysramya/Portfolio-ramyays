import type { ProjectTheme } from "@/components/ds/tokens";

/**
 * PM Dashboard — mapped onto the portfolio design system (design-system.md).
 *
 * The palette was inherited from the Power BI report itself (teal and olive
 * are the report's own chart colours; slate/charcoal/sand echo its header and
 * tier bars). Those colours are still visible where they belong — inside the
 * dashboard screenshots. The page around them is the system's cream ground:
 * no accent fills, no accent text (§1), no gradients (§6). Keys are inverted
 * so existing call sites stay correct as either backgrounds or text.
 */
export const mainstreetPalette = {
  // former grounds → cream surfaces
  black: "var(--bg)",
  charcoal: "var(--bg-raised)",
  graphite: "var(--bg-band)",
  // mid tone stays mid
  slate: "var(--muted-2)",
  // former chart accents → ink hierarchy
  teal: "var(--ink)",
  emerald: "var(--muted)",
  olive: "var(--muted)",
  sand: "var(--muted-2)",
  gold: "var(--muted)",
  // former light type → ink
  beige: "var(--body)",
  white: "var(--ink)",
} as const;

/** Gradients are out (§6). These resolve to flat system surfaces. */
export const mainstreetGradients = {
  tealCharcoal: "var(--bg-raised)",
  oliveCharcoal: "var(--bg-raised)",
  slateBlack: "var(--bg-band)",
  page: "var(--bg)",
} as const;

export const mainstreetTheme: ProjectTheme = {
  primary: "var(--ink)",
  secondary: "var(--bg-raised)",
  accent: "var(--ink)",
};
