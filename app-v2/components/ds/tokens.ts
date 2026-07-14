/**
 * Design tokens — extracted from the homepage, the source of truth for
 * every case study built on top of this system.
 *
 * Colors, blur, and glass live as CSS custom properties in app/globals.css
 * (--color-*, .glass / .glass-strong / .glass-nav) so themeing stays a CSS
 * concern. This file documents the *values a component author needs in JS*
 * — motion configs for Framer Motion, and the handful of scales (type,
 * spacing, radius) that recur often enough to name instead of re-guessing
 * per component.
 */
import type { CSSProperties } from "react";

/** Fraunces for display/headings, Inter for body — set globally via next/font in app/layout.tsx. */
export const font = {
  display: "var(--font-display)",
  body: "var(--font-body)",
} as const;

/**
 * Display type scale. Each step is a clamp() so headings stay fluid
 * between mobile and desktop without separate breakpoint overrides.
 */
export const type = {
  heroTitle: "clamp(2.4rem, 5.6vw, 4.6rem)", // homepage bio hero
  caseTitle: "clamp(2.4rem, 6vw, 4.6rem)", // case-study Hero title
  sectionTitle: "clamp(1.8rem, 3.4vw, 2.6rem)", // "Projects", section h2s
  rowTitle: "clamp(2rem, 4.2vw, 3.4rem)", // editorial list item titles
  statement: "clamp(1.6rem, 3.2vw, 2.8rem)", // EditorialStatement
  eyebrow: "0.65rem", // uppercase labels
} as const;

/** Letter spacing — tighter on display type, wider on small uppercase labels. */
export const tracking = {
  display: "-0.02em",
  eyebrow: "0.22em",
  button: "0.1em",
} as const;

/** Section-level vertical rhythm. Rows/cards use padding, never margin, to avoid collapsing-margin bugs next to dividers. */
export const spacing = {
  sectionY: "clamp(3.5rem, 6vw, 5rem)", // py-14 / py-20 equivalents
  rowY: "clamp(3.5rem, 5vw, 5rem)", // editorial row padding
  cardP: "2rem", // p-8 equivalent
  wrapMax: "1240px",
  wrapPadX: "clamp(1.5rem, 5vw, 4rem)",
} as const;

/** Corner radii — pills for interactive chrome, 2xl for media/cards, nothing sharp except hairline dividers. */
export const radius = {
  pill: "9999px",
  card: "1rem", // rounded-2xl
  media: "0.75rem", // rounded-xl, project imagery
  portrait: "2.5rem", // hero portrait, deliberately oversized
  badge: "0.5rem", // logo mark
} as const;

/**
 * Motion — one easing curve everywhere (a soft ease-out-expo) so nothing
 * feels like it belongs to a different product. Entrance reveals animate
 * translateY only, never opacity — content must stay visible even if the
 * IntersectionObserver callback is late or never fires (see Reveal.tsx).
 */
export const motion = {
  ease: [0.16, 1, 0.3, 1] as const,
  duration: {
    fast: 0.3,
    base: 0.6,
    slow: 0.9,
  },
  reveal: {
    initial: { y: 24 },
    whileInView: { y: 0 },
    viewport: { once: true, margin: "-10% 0px" },
  },
} as const;

/** Accent rotation — alternate green/yellow across sibling items (cards, stats, dividers) so no single section reads monochrome. */
export const accents = ["green", "yellow"] as const;
export type Accent = (typeof accents)[number];

export function accentVar(accent: Accent): string {
  return accent === "yellow" ? "var(--color-yellow)" : "var(--color-green)";
}

/** Glass surface tiers — matches the .glass / .glass-strong / .glass-nav classes in globals.css. Use the class names directly; this is just the decision table. */
export const glassTier = {
  /** Floating chrome sitting over varied backgrounds: chips, buttons, small badges. */
  standard: "glass",
  /** Panels that need to stay legible over busy imagery: modals, stat callouts, the chat panel. */
  strong: "glass-strong",
  /** The fixed nav only — tuned separately since it spans full viewport width. */
  nav: "glass-nav",
} as const;

/**
 * Project theme — the three colors a case study extracts from its own
 * brand assets (never guessed). The portfolio default (green/yellow) is
 * itself just one instance of this shape.
 */
export type ProjectTheme = {
  primary: string;
  secondary: string;
  accent: string;
};

export const portfolioTheme: ProjectTheme = {
  primary: "#4CAF50",
  secondary: "#171717",
  accent: "#FFDD44",
};

/**
 * Tinted liquid glass — same blur/sheen physics as .glass, but the tint
 * shifts toward a project's accent color instead of neutral gray, so each
 * case study's glass reads as "belonging" to that project's palette. Kept
 * as a style object (not a class) since the tint is per-project, not
 * static — apply alongside backdropBlur below, not the .glass class.
 */
export function tintedGlass(color: string, strength = 0.14): CSSProperties {
  return {
    background: `color-mix(in oklab, ${color} ${Math.round(strength * 100)}%, rgba(16, 16, 16, 0.68))`,
    backdropFilter: "blur(22px) saturate(160%)",
    WebkitBackdropFilter: "blur(22px) saturate(160%)",
    border: `1px solid color-mix(in oklab, ${color} 28%, rgba(255, 255, 255, 0.12))`,
    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.32)",
  };
}
