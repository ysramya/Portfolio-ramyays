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
  style,
}: {
  text: string;
  attribution: string;
  accent: string;
  align?: "left" | "right";
  style?: CSSProperties;
}) {
  return (
    <motion.div
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
      className={`relative ${align === "right" ? "text-right" : ""}`}
      style={style}
    >
      <span
        aria-hidden
        className={`absolute -top-16 ${align === "right" ? "-right-4" : "-left-4"} font-[family-name:var(--font-display)] text-[10rem] md:text-[16rem] leading-none opacity-[0.08] select-none pointer-events-none`}
        style={{ color: accent }}
      >
        &ldquo;
      </span>
      <p className="relative font-[family-name:var(--font-display)] italic font-medium leading-[1.08] text-[clamp(1.6rem,3.6vw,3rem)]">
        {text}
      </p>
      <div
        className={`relative mt-6 inline-flex items-center gap-3 rounded-full px-4 py-2 ${align === "right" ? "ml-auto" : ""}`}
        style={tintedGlass(accent)}
      >
        <span className="text-xs tracking-wide text-[var(--color-ink-muted)]">
          {attribution}
        </span>
      </div>
    </motion.div>
  );
}
