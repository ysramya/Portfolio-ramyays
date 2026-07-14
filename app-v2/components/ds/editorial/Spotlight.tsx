"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { motion as motionTokens, tintedGlass } from "../tokens";

/**
 * SPOTLIGHT — the case-study opener.
 *
 * Purpose: the first thing a reader sees. Not a title-and-meta header
 * (that's ds/Hero) — a full-bleed brand moment where the project's own
 * imagery IS the composition. Asymmetric on purpose: the title overlaps
 * the image edge instead of sitting in a tidy column beside it, because a
 * clean 50/50 split reads as a template, not an opening page.
 *
 * Ideal imagery: the project's brand mark, splash screen, or hero shot —
 * something with its own color and mood, not a UI screenshot.
 * Ideal typography: the largest type on the page. Deliberately allowed to
 * clip against the image edge on desktop.
 * Spacing: near-fullscreen (min-h-[92dvh]), minimal padding — the image
 * and title fight for the same space instead of being separated.
 * Animation: image scales in from 1.08→1 (a held breath, not a zoom),
 * title reveals via Reveal's translateY after a short stagger.
 * Responsive: desktop overlaps title over the image's left edge; mobile
 * stacks — image full-bleed on top, title below it, no overlap (overlap
 * needs room a phone doesn't have).
 */
export default function Spotlight({
  eyebrow,
  title,
  image,
  imageAlt,
  accent,
}: {
  eyebrow: string;
  title: ReactNode;
  image: string;
  imageAlt: string;
  accent: string;
}) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92dvh" }}>
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: motionTokens.ease }}
        className="absolute inset-0"
      >
        <Image src={image} alt={imageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-end wrap pb-16 pt-[calc(var(--nav-h)+2rem)]" style={{ minHeight: "92dvh" }}>
        <motion.span
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease }}
          className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-6"
          style={tintedGlass(accent)}
        >
          <span style={{ color: accent }}>{eyebrow}</span>
        </motion.span>

        <motion.h1
          initial={{ y: 28 }}
          animate={{ y: 0 }}
          transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease, delay: 0.1 }}
          className="font-[family-name:var(--font-display)] font-semibold leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,9vw,7.5rem)] max-w-[16ch] md:-ml-1"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
