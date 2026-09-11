/**
 * Design tokens — the JS-side mirror of design-system.md (v2).
 *
 * Colour lives in app/globals.css as custom properties (`--bg`, `--ink`,
 * `--panel`, `--numeral`, `--deep`, …), including the `.theme-deep` scope
 * that re-defines them for dark bands. This file carries what component
 * authors need in JavaScript: motion configs and a few named scales.
 *
 * `tintedGlass`, `radius` and `accentVar` predate the current system and
 * keep their old signatures on purpose — they're called from ~80 places
 * across the older case studies, so re-pointing their bodies converts every
 * call site without touching that markup.
 */
import type { CSSProperties } from "react";

/** Prata for display, DM Sans for body — set globally via next/font in app/layout.tsx. */
export const font = {
  display: "var(--font-display)",
  body: "var(--font-body)",
} as const;

export const type = {
  heroTitle: "clamp(46px, 5.6vw, 80px)",
  caseTitle: "clamp(46px, 5.6vw, 80px)",
  sectionTitle: "clamp(27px, 2.7vw, 36px)",
  statement: "clamp(28px, 3.1vw, 40px)",
  cardTitle: "19px",
  lead: "16px",
  body: "15px",
  eyebrow: "12px",
  meta: "10px",
} as const;

export const tracking = {
  display: "0",
  wordmark: "0.06em",
  eyebrow: "0.22em",
  meta: "0.14em",
} as const;

export const spacing = {
  sectionY: "clamp(48px, 5.5vw, 76px)",
  rowY: "clamp(48px, 5.5vw, 76px)",
  cardP: "24px",
  wrapMax: "1160px",
  wrapPadX: "32px",
} as const;

/** One soft container radius, plus full pills for buttons and tags. */
export const radius = {
  pill: "999px",
  card: "8px",
  media: "8px",
  portrait: "8px",
  badge: "8px",
} as const;

/**
 * Motion — one easing curve everywhere. Entrance reveals animate translateY
 * only, never opacity: content must stay visible even if the
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

/**
 * Legacy accent names. The old system used green/yellow as loud fills; the
 * current one keeps colour to the section numerals, so both resolve to ink.
 */
export const accents = ["green", "yellow"] as const;
export type Accent = (typeof accents)[number];

export function accentVar(_accent?: Accent): string {
  return "var(--ink)";
}

export type ProjectTheme = {
  primary: string;
  secondary: string;
  accent: string;
};

export const portfolioTheme: ProjectTheme = {
  primary: "var(--ink)",
  secondary: "var(--panel)",
  accent: "var(--ink)",
};

/**
 * Formerly "tinted liquid glass". Now the tinted panel from the reference:
 * a quiet fill a step darker than the page, soft corners, no border, no
 * shadow. Inside a `.theme-deep` band `--panel` resolves to a lighter green,
 * so the same call renders correctly on dark.
 *
 * `color` and `strength` are accepted and ignored so the ~80 existing call
 * sites keep compiling. New code should use the `.panel` class instead.
 */
export function tintedGlass(_color?: string, _strength = 0.14): CSSProperties {
  return {
    background: "var(--panel)",
    border: "1px solid transparent",
    borderRadius: "var(--radius)",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    boxShadow: "none",
  };
}
