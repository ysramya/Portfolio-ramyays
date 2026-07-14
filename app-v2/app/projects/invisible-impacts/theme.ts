import type { ProjectTheme } from "@/components/ds/tokens";

/**
 * Invisible Impacts / Cost of a Click — the exact palette specified for
 * this project's own Design System documentation, reused for the whole
 * case study (not just that section) so the page reads as one coherent
 * environmental-installation identity rather than a portfolio default
 * reskinned per section.
 */
export const impactsPalette = {
  background: "#0D0D0D",
  surface: "#171717",
  ivory: "#F3ECDD",
  forestGreen: "#5DBB63",
  mossGreen: "#83C56A",
  goldenYellow: "#E6BE45",
  softGray: "#A8A8A8",
  divider: "rgba(255,255,255,.08)",
} as const;

export const impactsGradients = {
  forestCharcoal: `linear-gradient(135deg, ${impactsPalette.forestGreen}1c 0%, ${impactsPalette.surface} 55%, ${impactsPalette.background} 100%)`,
  goldCharcoal: `linear-gradient(135deg, ${impactsPalette.goldenYellow}18 0%, ${impactsPalette.surface} 55%, ${impactsPalette.background} 100%)`,
  surfaceBlack: `linear-gradient(180deg, ${impactsPalette.surface} 0%, ${impactsPalette.background} 100%)`,
  page: `radial-gradient(ellipse 1300px 800px at 15% 0%, ${impactsPalette.forestGreen}14 0%, transparent 60%), radial-gradient(ellipse 1000px 700px at 88% 30%, ${impactsPalette.goldenYellow}10 0%, transparent 55%), radial-gradient(ellipse 900px 900px at 50% 92%, ${impactsPalette.mossGreen}0c 0%, transparent 60%), ${impactsPalette.background}`,
} as const;

export const impactsTheme: ProjectTheme = {
  primary: impactsPalette.mossGreen,
  secondary: impactsPalette.background,
  accent: impactsPalette.forestGreen,
};
