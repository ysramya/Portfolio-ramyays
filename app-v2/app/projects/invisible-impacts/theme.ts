import type { ProjectTheme } from "@/components/ds/tokens";

/**
 * Invisible Impacts / Cost of a Click — extracted from the real
 * installation photo (public/img/coac/hero-installation.jpg): black
 * hardware and tank, silver DePaul wordmark, vivid blue LED lighting
 * inside the water tank. Not guessed — read directly off the asset.
 */
export const impactsPalette = {
  background: "#0A0A0A",
  surface: "#161616",
  silver: "#C7CBCF",
  lightBlue: "#4FA8FF",
  deepBlue: "#1B3A6B",
  divider: "rgba(255,255,255,.08)",
} as const;

export const impactsGradients = {
  blueCharcoal: `linear-gradient(135deg, ${impactsPalette.lightBlue}1c 0%, ${impactsPalette.surface} 55%, ${impactsPalette.background} 100%)`,
  deepBlueCharcoal: `linear-gradient(135deg, ${impactsPalette.deepBlue}33 0%, ${impactsPalette.surface} 55%, ${impactsPalette.background} 100%)`,
  surfaceBlack: `linear-gradient(180deg, ${impactsPalette.surface} 0%, ${impactsPalette.background} 100%)`,
  page: `radial-gradient(ellipse 1300px 800px at 15% 0%, ${impactsPalette.lightBlue}18 0%, transparent 60%), radial-gradient(ellipse 1000px 700px at 88% 30%, ${impactsPalette.deepBlue}22 0%, transparent 55%), radial-gradient(ellipse 900px 900px at 50% 92%, ${impactsPalette.silver}0a 0%, transparent 60%), ${impactsPalette.background}`,
} as const;

export const impactsTheme: ProjectTheme = {
  primary: impactsPalette.silver,
  secondary: impactsPalette.background,
  accent: impactsPalette.lightBlue,
};
