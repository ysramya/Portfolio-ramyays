"use client";

import { motion } from "framer-motion";
import { motion as motionTokens } from "../tokens";

export type EditorialMetric = { value: string; label: string };

/**
 * METRICS (editorial) — one hero number, supporting numbers in its shadow.
 *
 * Purpose: outcomes, given a visual hierarchy instead of a uniform 3-up
 * grid (that uniform version is ds/Metrics, for when the numbers really
 * are equal weight). Here one metric is the headline result; the rest
 * support it.
 *
 * Ideal imagery: none.
 * Ideal typography: hero number at Spotlight-adjacent scale; supporting
 * numbers roughly a third that size.
 * Spacing: asymmetric — hero metric left-aligned and large, supporting
 * metrics stacked in a narrower column to its right, vertically offset
 * so they don't align to the hero's baseline.
 * Animation: hero number reveals first, supporting metrics stagger in
 * ~100ms apart after it.
 * Responsive: supporting metrics move below the hero and go 2-up instead
 * of stacked, so mobile doesn't end up with four short rows.
 */
export default function Metrics({
  hero,
  supporting,
  accent,
}: {
  hero: EditorialMetric;
  supporting: EditorialMetric[];
  accent: string;
}) {
  return (
    <section className="wrap py-20 md:py-28 grid grid-cols-1 md:grid-cols-5 gap-10 items-end">
      <motion.div
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
        className="md:col-span-3"
      >
        <p
          className="font-[family-name:var(--font-display)] font-semibold leading-[0.9] text-[clamp(4rem,10vw,8rem)]"
          style={{ color: accent }}
        >
          {hero.value}
        </p>
        <p className="mt-2 text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-muted)]">
          {hero.label}
        </p>
      </motion.div>

      <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 md:mb-2">
        {supporting.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease, delay: 0.15 + i * 0.1 }}
          >
            <p className="font-[family-name:var(--font-display)] font-semibold text-3xl">
              {m.value}
            </p>
            <p className="mt-1 text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-ink-faint)]">
              {m.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
