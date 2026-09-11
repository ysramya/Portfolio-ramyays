"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { motion as motionTokens } from "../tokens";

/**
 * SPOTLIGHT — the case-study opener.
 *
 * Purpose: the first thing a reader sees. Not a title-and-meta header
 * (that's ds/Hero) — the opening statement of the page, with the project's
 * own imagery carrying the mood directly beneath it.
 *
 * This was a full-bleed image with the title overlaid on a black gradient
 * scrim. Gradients are out of the system (§6), and the scrim existed only to
 * make light type survive over an unpredictable photo — which the ivory
 * ground makes unnecessary. Text sits on ivory and the image runs full-bleed
 * below, uncovered.
 *
 * Ideal imagery: the project's brand mark, splash screen, or hero shot —
 * something with its own colour and mood, not a UI screenshot.
 * Ideal typography: the largest type on the page (Prata, one weight).
 * Animation: title reveals via translateY; the image settles in beneath it.
 */
export default function Spotlight({
  eyebrow,
  title,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  image: string;
  imageAlt: string;
  /** Legacy prop, accepted and unused — openers no longer carry a per-project colour. */
  accent?: string;
}) {
  return (
    <section>
      <div
        className="wrap"
        style={{ paddingTop: "calc(var(--nav-h) + 48px)", paddingBottom: 48 }}
      >
        <p className="eyebrow eyebrow-rule">{eyebrow}</p>

        <motion.h1
          initial={{ y: 28 }}
          animate={{ y: 0 }}
          transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease, delay: 0.1 }}
          className="mt-4 max-w-[16ch]"
        >
          {title}
        </motion.h1>

      </div>

      <motion.div
        initial={{ y: 24 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
        className="relative w-full"
        style={{
          aspectRatio: "16 / 7",
          maxHeight: "62dvh",
          borderBlock: "1px solid var(--rule)",
        }}
      >
        <Image src={image} alt={imageAlt} fill priority className="object-cover" />
      </motion.div>
    </section>
  );
}
