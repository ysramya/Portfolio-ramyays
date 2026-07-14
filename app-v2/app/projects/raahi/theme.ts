import type { ProjectTheme } from "@/components/ds/tokens";

/**
 * Raahi's theme — extracted, not guessed, from the real brand swatches in
 * img/raahi/product-specs.png ("Brand Identity" panel: Logo, Icon, Color
 * Code). Deep Green and Emerald are the project's own two brand colors;
 * Charcoal is a near-black neutral tinted toward the same green so the
 * whole page reads as one immersive surface instead of a brand color
 * dropped onto the portfolio's default dark palette.
 */
export const raahiTheme: ProjectTheme = {
  primary: "#1A5D38", // Deep Green — from product-specs.png swatch
  secondary: "#0E1712", // Charcoal — green-tinted near-black, no white/cream anywhere
  accent: "#7CFFB7", // Emerald — from product-specs.png swatch
};
