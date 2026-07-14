"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { motion as motionTokens } from "./tokens";

/**
 * Why this exists: every scroll-triggered entrance in the system must go
 * through here. Content is visible by default (no opacity in the initial
 * state) — only a subtle translateY is gated on scroll-into-view. Earlier
 * versions animated opacity from 0, and on this Browser pane's rendering
 * pipeline the IntersectionObserver callback sometimes fired late enough
 * that entire sections read as blank. Gating real content on a scroll
 * animation is a correctness bug, not a style choice — see globals.css's
 * prefers-reduced-motion block for the other half of this guarantee.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={motionTokens.reveal.initial}
      whileInView={motionTokens.reveal.whileInView}
      viewport={motionTokens.reveal.viewport}
      transition={{
        duration: motionTokens.duration.base,
        ease: motionTokens.ease,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
