import type { ProjectTheme } from "@/components/ds/tokens";

/**
 * ASAP's editorial palette — warm neutrals, not Wellnut's night-sky
 * indigo/purple or Raahi's cool green. This project's own design system
 * (see section 06, "Calm by design") is explicitly a warm, non-stimulating
 * neutral palette with earthy amber accents — this reuses that same
 * register for the case-study page itself, rather than inventing a
 * separate portfolio-side identity.
 */
export const asapPalette = {
  black: "#070707",
  charcoal: "#1C1916",
  graphite: "#2B2620",
  slate: "#8C8577",
  sand: "#C9B79C",
  beige: "#E4D4B8",
  ivory: "#F4ECDD",
  amber: "#D98E3C",
  gold: "#E8B84B",
  sage: "#8A9478", // very subtle secondary accent — used sparingly, never a primary highlight
} as const;

/** Gradient recipes — warm, dark-dominant, accent bleeding in only at the edges. */
export const asapGradients = {
  amberSand: `linear-gradient(135deg, ${asapPalette.amber}26 0%, ${asapPalette.sand}14 45%, ${asapPalette.black} 100%)`,
  charcoalGraphite: `linear-gradient(180deg, ${asapPalette.graphite} 0%, ${asapPalette.black} 100%)`,
  goldCharcoal: `linear-gradient(135deg, ${asapPalette.gold}22 0%, ${asapPalette.charcoal} 55%, ${asapPalette.black} 100%)`,
  sageAmber: `linear-gradient(135deg, ${asapPalette.sage}14 0%, ${asapPalette.amber}18 60%, ${asapPalette.black} 100%)`,
  page: `radial-gradient(ellipse 1300px 850px at 12% 0%, ${asapPalette.amber}1c 0%, transparent 60%), radial-gradient(ellipse 1000px 700px at 88% 25%, ${asapPalette.gold}14 0%, transparent 55%), radial-gradient(ellipse 900px 900px at 50% 92%, ${asapPalette.sand}10 0%, transparent 60%), ${asapPalette.black}`,
} as const;

export const asapTheme: ProjectTheme = {
  primary: asapPalette.sand,
  secondary: asapPalette.black,
  accent: asapPalette.amber,
};
