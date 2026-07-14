"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { motion as motionTokens, tintedGlass } from "../tokens";

/**
 * FEATURE REVEAL — the cinematic "here's the actual product" moment.
 *
 * Purpose: one shipped screen or artifact gets the full spotlight. Use
 * once, maybe twice, per case study — for the thing that most needs to
 * land, not every screenshot.
 *
 * Ideal imagery: a real UI screen or product shot with clean edges — this
 * block frames it in a glass bezel and lets it scale slightly larger than
 * its grid column, so it visually breaks the column it's in.
 * Ideal typography: a short title sitting above the frame, oversized
 * relative to the supporting line beneath it.
 * Spacing: the image column is intentionally 8% wider than the text
 * column would suggest — asymmetric on purpose (title text-column is
 * narrow, image bleeds wider).
 * Animation: image scales 0.94→1 with a glass sheen sweeping across on
 * scroll-in (a single soft diagonal highlight, not a shimmer loop).
 * Responsive: image stays full-width on mobile, no bleed (nothing to
 * bleed into on a narrow viewport).
 */
export default function FeatureReveal({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  accent,
}: {
  eyebrow: string;
  title: ReactNode;
  body: string;
  image: string;
  imageAlt: string;
  accent: string;
}) {
  return (
    <section className="wrap py-20 md:py-28">
      <div className="max-w-[36ch]">
        <p
          className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase"
          style={{ color: accent }}
        >
          {eyebrow}
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-[clamp(2rem,4vw,3.2rem)] leading-[1.02]">
          {title}
        </h3>
        <p className="mt-4 text-[var(--color-ink-muted)] text-lg leading-relaxed">{body}</p>
      </div>

      <motion.div
        initial={{ scale: 0.94 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
        className="relative mt-12 md:w-[108%] md:-ml-[4%] rounded-2xl p-3"
        style={tintedGlass(accent, 0.08)}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[var(--color-bg-secondary)]">
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 108vw" className="object-contain" />
        </div>
      </motion.div>
    </section>
  );
}
