"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { motion as motionTokens, type } from "./tokens";

export type HeroMeta = { label: string; value: ReactNode };

/**
 * Why this exists: the opening beat of every case study — title, one-line
 * thesis, at-a-glance facts, and the hero mockup — before any narrative
 * section starts. Distinct from the homepage's personal bio-hero (which
 * introduces a person, not a project) — this one is always paired with a
 * project-specific accent color and mockup image passed in by the case
 * study, not hardcoded here.
 */
export default function Hero({
  badge,
  title,
  intro,
  meta,
  image,
  imageAlt,
  accent = "var(--color-green)",
}: {
  badge: string;
  title: ReactNode;
  intro: string;
  meta: HeroMeta[];
  image: string;
  imageAlt: string;
  accent?: string;
}) {
  return (
    <section
      className="wrap"
      style={{ paddingTop: "calc(var(--nav-h) + 3rem)", paddingBottom: "3rem" }}
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
      >
        <p
          className="text-[0.65rem] font-semibold tracking-[0.24em] uppercase"
          style={{ color: accent }}
        >
          {badge}
        </p>
        <h1
          className="mt-3 font-[family-name:var(--font-display)] font-semibold leading-[0.98] tracking-[-0.02em] max-w-[18ch]"
          style={{ fontSize: type.caseTitle }}
        >
          {title}
        </h1>
        <p className="mt-5 text-lg text-[var(--color-ink-muted)] max-w-[64ch] leading-relaxed">
          {intro}
        </p>

        <dl className="mt-8 flex flex-wrap gap-3">
          {meta.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3"
            >
              <dt className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)]">
                {m.label}
              </dt>
              <dd className="mt-1 text-sm text-[var(--color-ink)]">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <Image src={image} alt={imageAlt} fill priority className="object-contain" />
        </div>
      </motion.div>
    </section>
  );
}
