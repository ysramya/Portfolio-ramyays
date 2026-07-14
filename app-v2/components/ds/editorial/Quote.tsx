"use client";

import { motion } from "framer-motion";
import { motion as motionTokens, tintedGlass } from "../tokens";

/**
 * QUOTE (editorial) — a full-bleed pull-quote, magazine-style.
 *
 * Purpose: verbatim voice, given the loudest typographic moment on the
 * page — not a centered card (that's ds/FloatingQuote's job in a
 * standard layout). Here the quote mark and the type itself are the
 * composition.
 *
 * Ideal imagery: none.
 * Ideal typography: the largest italic type in the case study outside of
 * Spotlight — deliberately oversized, allowed to run close to the
 * viewport edges.
 * Spacing: full-width band, generous vertical padding, quote mark
 * positioned to bleed off the top-left as a background texture.
 * Animation: quote text reveals top-down (translateY, single block — no
 * per-word stagger, which would read as gimmicky at this size).
 * Responsive: type scales via clamp; the oversized background quote mark
 * shrinks and desaturates further on mobile so it doesn't compete with
 * the text.
 */
export default function Quote({
  text,
  attribution,
  accent,
}: {
  text: string;
  attribution: string;
  accent: string;
}) {
  return (
    <section className="relative wrap py-24 md:py-36 overflow-hidden">
      <span
        aria-hidden
        className="absolute -top-10 left-0 md:left-4 font-[family-name:var(--font-display)] text-[14rem] md:text-[22rem] leading-none opacity-[0.06] select-none"
        style={{ color: accent }}
      >
        &ldquo;
      </span>

      <motion.div
        initial={{ y: 24 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
        className="relative z-10 max-w-[26ch]"
      >
        <p className="font-[family-name:var(--font-display)] italic font-medium leading-[1.05] text-[clamp(2rem,5.5vw,4rem)]">
          {text}
        </p>
        <div className="mt-8 inline-flex items-center gap-3 rounded-full px-4 py-2" style={tintedGlass(accent)}>
          <span className="text-xs tracking-wide text-[var(--color-ink-muted)]">
            {attribution}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
