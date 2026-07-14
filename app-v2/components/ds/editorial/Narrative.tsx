"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { motion as motionTokens } from "../tokens";

/**
 * NARRATIVE — a chapter of prose that carries the emotional weight.
 *
 * Purpose: long-form reading, no imagery competing for attention. The
 * "why does this matter" beat, not a facts dump.
 *
 * Ideal imagery: none — this block is text-only by design.
 * Ideal typography: a large italic pull-line (the chapter's thesis)
 * followed by a body paragraph at a comfortable reading measure.
 * Spacing: the text column is deliberately offset (not centered, not
 * full-width) — `align` alternates left/right per call site so a run of
 * Narrative blocks down a page doesn't all look like the same template.
 * Animation: line-by-line typography reveal (translateY, staggered).
 * Responsive: offset collapses to full-width on mobile — there's no room
 * for an asymmetric margin at 375px.
 */
export default function Narrative({
  chapter,
  pullLine,
  body,
  align = "left",
  accent,
}: {
  chapter?: string;
  pullLine: string;
  body: string;
  align?: "left" | "right";
  accent: string;
}) {
  return (
    <section className="wrap py-20 md:py-28">
      <div
        className={`max-w-[62ch] ${align === "right" ? "md:ml-auto md:text-right" : ""}`}
      >
        {chapter && (
          <motion.p
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease }}
            className="text-[0.65rem] font-semibold tracking-[0.24em] uppercase mb-5"
            style={{ color: accent }}
          >
            {chapter}
          </motion.p>
        )}
        <motion.p
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease, delay: 0.05 }}
          className="font-[family-name:var(--font-display)] italic font-medium leading-tight text-[clamp(1.6rem,3.4vw,2.6rem)]"
        >
          {pullLine}
        </motion.p>
        <motion.p
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease, delay: 0.12 }}
          className="mt-6 text-[var(--color-ink-muted)] text-lg leading-relaxed"
        >
          {body}
        </motion.p>
      </div>
    </section>
  );
}
