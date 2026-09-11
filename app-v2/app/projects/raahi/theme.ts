import type { ProjectTheme } from "@/components/ds/tokens";

/**
 * Raahi — mapped onto the portfolio design system (design-system.md).
 *
 * The brand's own Deep Green and Emerald (read off the "Brand Identity"
 * panel in img/raahi/product-specs.png) still live in the product
 * screenshots on this page. The page *around* them is the system's cream
 * ground: no accent fills, no accent text (§1), no gradients (§6).
 */
export const raahiTheme: ProjectTheme = {
  primary: "var(--ink)",
  secondary: "var(--bg-raised)",
  accent: "var(--ink)",
};
