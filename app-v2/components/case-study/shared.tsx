"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  // Content is visible by default (opacity always 1) — only a subtle
  // translateY is gated on scroll-into-view, so a missed/late
  // IntersectionObserver callback never hides real content.
  return (
    <motion.div
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionShell({
  eyebrow,
  title,
  lead,
  alt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  alt?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`py-20 md:py-24 ${alt ? "bg-[var(--color-bg-secondary)]" : ""}`}>
      <div className="wrap">
        <Reveal>
          <p className="text-[0.65rem] font-semibold tracking-[0.24em] uppercase text-[var(--color-green)]">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-tight max-w-[18ch]">
            {title}
          </h2>
          {lead && (
            <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed max-w-[68ch]">
              {lead}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Quote({ text, attribution }: { text: string; attribution: string }) {
  return (
    <Reveal className="mt-8 rounded-r-2xl border-l-2 border-[var(--color-green)] bg-[var(--color-surface)] p-6 md:p-7">
      <p className="italic text-lg leading-relaxed text-[var(--color-ink)]">
        &ldquo;{text}&rdquo;
      </p>
      <p className="mt-3 text-xs tracking-wide text-[var(--color-ink-faint)]">
        {attribution}
      </p>
    </Reveal>
  );
}

export function PhotoGrid({
  items,
}: {
  items: { src: string; alt: string; caption: string }[];
}) {
  return (
    <Reveal className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <figure key={item.src} className="rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]">
          <div className="relative aspect-[4/3]">
            <Image src={item.src} alt={item.alt} fill className="object-cover" />
          </div>
          <figcaption className="p-3 text-xs text-[var(--color-ink-faint)] border-t border-[var(--color-border)]">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </Reveal>
  );
}

export function CardGrid({
  cards,
  columns = 3,
}: {
  cards: { label: string; title: string; body: string; note?: string }[];
  columns?: 2 | 3;
}) {
  return (
    <Reveal
      className={`mt-8 grid grid-cols-1 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-5`}
    >
      {cards.map((card, i) => {
        const accent = i % 2 === 0 ? "var(--color-green)" : "var(--color-yellow)";
        return (
        <div
          key={card.title}
          className="rounded-2xl border-t-2 bg-[var(--color-surface)] p-6"
          style={{ borderTopColor: accent }}
        >
          <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase" style={{ color: accent }}>
            {card.label}
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] font-semibold">
            {card.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            {card.body}
          </p>
          {card.note && (
            <p className="mt-3 text-xs leading-relaxed text-[var(--color-ink-faint)] border-t border-[var(--color-border)] pt-3">
              {card.note}
            </p>
          )}
        </div>
        );
      })}
    </Reveal>
  );
}

export function StatRow({
  stats,
}: {
  stats: { label: string; value: string; desc: string }[];
}) {
  return (
    <Reveal className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-[var(--color-surface)] p-7 text-center">
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-yellow)]">
            {stat.value}
          </p>
          <p className="mt-2 text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-muted)]">
            {stat.label}
          </p>
          <p className="mt-2 text-sm text-[var(--color-ink-faint)]">{stat.desc}</p>
        </div>
      ))}
    </Reveal>
  );
}

export function Timeline({
  items,
}: {
  items: { date: string; title: string; body: string }[];
}) {
  return (
    <Reveal className="mt-8 flex flex-col">
      {items.map((item) => (
        <div key={item.title} className="grid grid-cols-[20px_1fr] gap-4 py-4 border-t border-[var(--color-border)] first:border-t-0">
          <div className="w-3 h-3 mt-1 rounded-full border-2 border-[var(--color-green)]" />
          <div>
            <p className="text-xs font-semibold tracking-wide uppercase text-[var(--color-green)]">
              {item.date}
            </p>
            <p className="mt-1 font-[family-name:var(--font-display)] font-semibold">
              {item.title}
            </p>
            <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">
              {item.body}
            </p>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
