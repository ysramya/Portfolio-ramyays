import type { ProjectTheme } from "@/components/ds/tokens";

/**
 * Wellnut's editorial palette — deliberately not the mascot's forest
 * green (user direction: "DO NOT use green"). Indigo/purple/pink read as
 * a calm, premium "night sky" register that still nods to the mascot's
 * own Walnut Brown, without tying the whole page to the brand-poster's
 * literal illustration colors.
 */
export const wellnutPalette = {
  black: "#090909",
  navy: "#12162B",
  indigo: "#584BC7",
  purple: "#8B5CF6",
  lavender: "#C9B6FF",
  pink: "#EC6FA0",
  brown: "#5C3A21", // the mascot's own body color — kept for continuity
  ivory: "#F6F1EA",
} as const;

/** Gradient recipes reused across section backgrounds — always dark-dominant, accent only at the edges. */
export const wellnutGradients = {
  purpleIndigo: `linear-gradient(135deg, ${wellnutPalette.purple}26 0%, ${wellnutPalette.indigo}1a 45%, ${wellnutPalette.black} 100%)`,
  indigoPink: `linear-gradient(135deg, ${wellnutPalette.indigo}22 0%, ${wellnutPalette.pink}1f 50%, ${wellnutPalette.black} 100%)`,
  brownPurple: `linear-gradient(135deg, ${wellnutPalette.brown}33 0%, ${wellnutPalette.purple}1a 55%, ${wellnutPalette.black} 100%)`,
  navyBlack: `linear-gradient(180deg, ${wellnutPalette.navy} 0%, ${wellnutPalette.black} 100%)`,
  page: `radial-gradient(ellipse 1200px 800px at 15% 0%, ${wellnutPalette.purple}1f 0%, transparent 60%), radial-gradient(ellipse 1000px 700px at 85% 30%, ${wellnutPalette.indigo}17 0%, transparent 55%), radial-gradient(ellipse 900px 900px at 50% 90%, ${wellnutPalette.pink}12 0%, transparent 60%), ${wellnutPalette.black}`,
} as const;

export const wellnutTheme: ProjectTheme = {
  primary: wellnutPalette.indigo,
  secondary: wellnutPalette.black,
  accent: wellnutPalette.purple,
};
