"use client";

import { motion } from "framer-motion";
import { motion as motionTokens } from "../tokens";

/**
 * TRANSITION — a pure pacing block between chapters.
 *
 * Purpose: nothing but breathing room and a chapter marker. Long-form
 * editorial pieces use whitespace as punctuation; this block is that
 * punctuation, not a content section. Use between two dense blocks
 * (Evidence → Workshop, Feature Reveal → Metrics) so the page has a
 * place to exhale before the next chapter starts.
 *
 * Ideal imagery: none.
 * Ideal typography: a chapter number/label only, small, centered or
 * offset — never a full heading.
 * Spacing: the tallest padding in the system (this block's entire job is
 * height).
 * Animation: a single thin line draws left-to-right as the block enters
 * view — the only motion, signaling "new chapter" without a headline.
 * Responsive: height reduces on mobile (a full desktop-height pause reads
 * as a bug on a phone, not a pacing choice).
 */
export default function Transition({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) {
  return (
    <section className="wrap flex flex-col items-center justify-center py-24 md:py-40">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "3rem" }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
        className="h-px mb-6"
        style={{ backgroundColor: accent }}
      />
      <p className="text-[0.62rem] font-semibold tracking-[0.28em] uppercase text-[var(--color-ink-faint)]">
        {label}
      </p>
    </section>
  );
}
