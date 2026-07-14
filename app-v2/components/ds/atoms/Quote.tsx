"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { motion as motionTokens, tintedGlass } from "../tokens";

/**
 * Quote atom — a quote is NOT a paragraph and NOT its own section. It's a
 * self-sized block with no width or position opinion; the caller places
 * it into a layout's grid (`style={{ gridColumn: "6 / 13" }}` to float it
 * right, sit beside an image, or extend past a reading column). No
 * section wrapper, no max-width, no centering — that's all the layout's
 * job now.
 */
export default function Quote({
  text,
  attribution,
  accent,
  align = "left",
  size = "default",
  style,
}: {
  text: string;
  attribution: string;
  accent: string;
  align?: "left" | "right" | "center";
  /** "large" bumps the type scale to 56-72px for a standalone editorial-quote moment. */
  size?: "default" | "large";
  style?: CSSProperties;
}) {
  const alignClass =
    align === "right" ? "text-right ml-auto" : align === "center" ? "text-center mx-auto" : "";
  const markSide = align === "right" ? "-right-4" : align === "center" ? "left-1/2 -translate-x-1/2" : "-left-4";
  const attributionAlign = align === "right" ? "ml-auto" : align === "center" ? "mx-auto" : "";

  return (
    <motion.div
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
      className={`relative ${alignClass}`}
      style={{ maxWidth: size === "large" ? "44ch" : "56ch", ...style }}
    >
      <span
        aria-hidden
        className={`absolute -top-16 ${markSide} font-[family-name:var(--font-display)] text-[10rem] md:text-[16rem] leading-none opacity-[0.08] select-none pointer-events-none`}
        style={{ color: accent }}
      >
        &ldquo;
      </span>
      {/* Capped at 2.25rem (not the display-title scale) and given a wide
          measure (56ch) so real quotes land close to two lines instead of
          wrapping into a five/six-line block. "large" trades measure for
          scale (56-72px) for the 1-2 standalone editorial-quote moments per page. */}
      <p
        className={`relative font-[family-name:var(--font-display)] italic font-medium leading-[1.1] ${
          size === "large" ? "text-[clamp(2.25rem,5.5vw,4.5rem)]" : "text-[clamp(1.35rem,2.6vw,2.25rem)]"
        }`}
      >
        {text}
      </p>
      <div
        className={`relative mt-6 inline-flex items-center gap-3 rounded-full px-4 py-2 ${attributionAlign}`}
        style={tintedGlass(accent)}
      >
        <span className="text-xs tracking-wide text-[var(--color-ink-muted)]">
          {attribution}
        </span>
      </div>
    </motion.div>
  );
}
