"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type OverviewMeta = { label: string; value: ReactNode };

export default function Overview({
  badge,
  title,
  intro,
  meta,
  heroImage,
  heroAlt,
}: {
  badge: string;
  title: ReactNode;
  intro: string;
  meta: OverviewMeta[];
  heroImage: string;
  heroAlt: string;
}) {
  return (
    <section
      className="wrap"
      style={{ paddingTop: "calc(var(--nav-h) + 3rem)", paddingBottom: "3rem" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[0.65rem] font-semibold tracking-[0.24em] uppercase text-[var(--color-green)]">
          {badge}
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] font-semibold leading-[0.98] tracking-[-0.02em] text-[clamp(2.4rem,6vw,4.6rem)] max-w-[18ch]">
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
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            priority
            className="object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
