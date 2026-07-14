"use client";

import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { motion as motionTokens, tintedGlass } from "../tokens";

export type EvidenceItem = { label: string; detail: string };

/**
 * EVIDENCE — findings presented as proof, not a bulleted list.
 *
 * Purpose: the "here's what we actually learned" moment — pain points, a
 * taxonomy, findings that need to feel substantiated rather than
 * asserted. Reads like a data-journalism sidebar: numbered markers, not
 * generic bullets.
 *
 * Ideal imagery: none required; an optional glass callout on the side
 * can hold one supporting stat or quote fragment.
 * Ideal typography: a large heading, then a numbered list where the
 * number itself is oversized (the "proof" register — precise, counted).
 * Spacing: asymmetric two-column — the list takes ~60%, a glass aside
 * takes ~40%, offset vertically so they don't align as a tidy grid.
 * Animation: list items stagger in, each 60ms after the last.
 * Responsive: aside moves below the list on mobile, list stays full width.
 */
export default function Evidence({
  title,
  items,
  aside,
  accent,
}: {
  title: string;
  items: EvidenceItem[];
  aside?: { label: string; text: string };
  accent: string;
}) {
  return (
    <section className="wrap py-20 md:py-28 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
      <div className="md:col-span-3">
        <Reveal>
          <h3 className="font-[family-name:var(--font-display)] font-semibold text-[clamp(1.8rem,3.4vw,2.6rem)] max-w-[20ch]">
            {title}
          </h3>
        </Reveal>

        <ol className="mt-10 flex flex-col">
          {items.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ y: 18 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease, delay: i * 0.06 }}
              className="grid grid-cols-[3rem_1fr] gap-4 py-5 border-t border-white/10 first:border-t-0"
            >
              <span
                className="font-[family-name:var(--font-display)] text-2xl font-semibold"
                style={{ color: accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-semibold">{item.label}</p>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      {aside && (
        <div className="md:col-span-2 md:mt-16">
          <Reveal delay={0.15}>
            <div className="rounded-2xl p-7" style={tintedGlass(accent)}>
              <p
                className="text-[0.62rem] font-semibold tracking-[0.22em] uppercase"
                style={{ color: accent }}
              >
                {aside.label}
              </p>
              <p className="mt-4 text-lg leading-relaxed">{aside.text}</p>
            </div>
          </Reveal>
        </div>
      )}
    </section>
  );
}
