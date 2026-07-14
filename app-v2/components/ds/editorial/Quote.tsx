"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motion as motionTokens, tintedGlass, radius } from "../tokens";

/**
 * QUOTE (editorial) — a full-bleed pull-quote, magazine-style.
 *
 * Purpose: verbatim voice, given the loudest typographic moment on the
 * page — not a centered card (that's ds/FloatingQuote's job in a
 * standard layout). Here the quote mark and the type itself are the
 * composition.
 *
 * Ideal imagery: optional — pass `image` to pair the quote with a
 * supporting photo (the "quote with supporting imagery" pattern) for a
 * genuinely two-column moment; omit it for a text-only pull-quote that
 * still spans most of the content width rather than sitting in a narrow
 * column with empty space beside it.
 * Ideal typography: the largest italic type in the case study outside of
 * Spotlight — deliberately oversized, allowed to run close to the
 * viewport edges. The quote itself spans multiple columns, not a
 * narrow measure.
 * Spacing: full-width band, generous vertical padding, quote mark
 * positioned to bleed off the top-left as a background texture.
 * Animation: quote text reveals top-down (translateY, single block — no
 * per-word stagger, which would read as gimmicky at this size).
 * Responsive: type scales via clamp; the oversized background quote mark
 * shrinks and desaturates further on mobile so it doesn't compete with
 * the text. Two-column variant stacks image below text on mobile.
 */
export default function Quote({
  text,
  attribution,
  accent,
  image,
  imageAlt,
}: {
  text: string;
  attribution: string;
  accent: string;
  image?: string;
  imageAlt?: string;
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

      <div className={image ? "relative z-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 items-center" : "relative z-10"}>
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
          className={image ? "" : "max-w-[46ch]"}
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

        {image && (
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease, delay: 0.1 }}
            className="relative aspect-[4/5] w-full overflow-hidden"
            style={{ borderRadius: radius.card }}
          >
            <Image src={image} alt={imageAlt ?? ""} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
