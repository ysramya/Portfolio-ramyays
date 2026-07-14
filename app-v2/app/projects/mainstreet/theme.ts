import type { ProjectTheme } from "@/components/ds/tokens";

/**
 * PM Dashboard's palette — inherited directly from the dashboard itself
 * (see the real screenshot at public/img/mainstreet/dashboard.jpg), not
 * invented separately like Raahi/Wellnut/ASAP's portfolio-side identities.
 * Teal and olive are the two colors the actual Power BI report uses for
 * its pie chart and bar chart; slate/charcoal/sand echo its header bar and
 * tan client-tier tones. Analytical and executive — no gradients-as-mood.
 */
export const mainstreetPalette = {
  black: "#060706",
  charcoal: "#181A19",
  graphite: "#242624",
  slate: "#4A5A61",
  teal: "#5C93A5", // dashboard's own navy-teal pie slice, lightened for dark-mode legibility
  emerald: "#5E8A4A", // dashboard's "A" tier bar green
  olive: "#9DC65A", // dashboard's own pie/bar chart green — exact match
  sand: "#C4A97A", // dashboard's "C" tier bar tan
  beige: "#E8E2D3",
  white: "#F5F3EE",
  gold: "#C9A227", // very subtle — used sparingly, never a primary highlight
} as const;

/** Gradient recipes — dark-dominant, teal/olive bleeding in at the edges, never a "mood" gradient. */
export const mainstreetGradients = {
  tealCharcoal: `linear-gradient(135deg, ${mainstreetPalette.teal}20 0%, ${mainstreetPalette.graphite} 55%, ${mainstreetPalette.black} 100%)`,
  oliveCharcoal: `linear-gradient(135deg, ${mainstreetPalette.olive}18 0%, ${mainstreetPalette.graphite} 55%, ${mainstreetPalette.black} 100%)`,
  slateBlack: `linear-gradient(180deg, ${mainstreetPalette.graphite} 0%, ${mainstreetPalette.black} 100%)`,
  page: `radial-gradient(ellipse 1300px 800px at 15% 0%, ${mainstreetPalette.teal}16 0%, transparent 60%), radial-gradient(ellipse 1000px 700px at 88% 30%, ${mainstreetPalette.olive}10 0%, transparent 55%), radial-gradient(ellipse 900px 900px at 50% 92%, ${mainstreetPalette.sand}0c 0%, transparent 60%), ${mainstreetPalette.black}`,
} as const;

export const mainstreetTheme: ProjectTheme = {
  primary: mainstreetPalette.slate,
  secondary: mainstreetPalette.black,
  accent: mainstreetPalette.teal,
};
