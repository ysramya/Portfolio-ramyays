"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Squishy hover for a hero visual — the card behaviour from 21st.dev's
 * "Squishy Pricing", lifted off the pricing card: on hover the whole visual
 * swells, and the flat shapes behind it stretch and squash on a staggered
 * back-in-out ease while the content floats above them.
 *
 * The shapes are translucent ivory so they read as depth on the deep-green
 * band rather than a second colour. Hover is skipped under reduced motion.
 */

const EASE = "backInOut" as const;
const SHAPE = "rgba(242, 239, 231, 0.07)";

export default function SquishyHero({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      whileHover={reduced ? undefined : "hover"}
      transition={{ duration: 1, ease: EASE }}
      variants={{ hover: { scale: 1.05 } }}
      className={`relative ${className}`}
    >
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 320 384"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        variants={{ hover: { scale: 1.25 } }}
        transition={{ duration: 1, ease: EASE }}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      >
        <motion.circle
          variants={{ hover: { scaleY: 0.5, y: -25 } }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          cx="160.5"
          cy="114.5"
          r="101.5"
          fill={SHAPE}
        />
        <motion.ellipse
          variants={{ hover: { scaleY: 2.25, y: -25 } }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          cx="160.5"
          cy="265.5"
          rx="101.5"
          ry="43.5"
          fill={SHAPE}
        />
      </motion.svg>
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
}
