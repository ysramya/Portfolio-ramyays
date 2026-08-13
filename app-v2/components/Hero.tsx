"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const chips = [
  {
    label: "Mixed-Methods Research",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
  },
  {
    label: "Human-AI Interaction",
    icon: (
      <>
        <circle cx="7" cy="12" r="3" />
        <circle cx="17" cy="7" r="3" />
        <circle cx="17" cy="17" r="3" />
        <path d="M9.5 10.5 14.5 8M9.5 13.5 14.5 16" />
      </>
    ),
  },
  {
    label: "Responsible AI",
    icon: (
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Zm-1.2 12.6-2.6-2.6 1.4-1.4 1.2 1.2 4-4 1.4 1.4-5.4 5.4Z" />
    ),
  },
  {
    label: "Systems Thinking",
    icon: (
      <>
        <path d="M12 3 3 8l9 5 9-5-9-5Z" />
        <path d="M3 12l9 5 9-5" />
        <path d="M3 16l9 5 9-5" />
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section
      className="wrap grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-12 items-center"
      style={{
        // Bottom padding is deliberately tight: it lets the credibility
        // strip below peek above the fold, so the first screen carries both
        // the positioning and the proof.
        minHeight: "calc(100dvh - var(--nav-h))",
        paddingTop: "calc(var(--nav-h) + 2rem)",
        paddingBottom: "2rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-[family-name:var(--font-display)] font-semibold leading-[0.98] tracking-[-0.02em] text-[clamp(2.4rem,5.6vw,4.6rem)]">
          Hi, I&rsquo;m
          <br />
          <span className="text-[var(--color-green)]">Ramya Yerramilli</span>,
          <br />
          a <span className="text-[var(--color-yellow)]">Product Designer!</span>
        </h1>
        <p className="mt-5 text-sm font-semibold tracking-[0.14em] uppercase text-[var(--color-ink-muted)]">
          Human-AI Interaction &middot; Responsible AI
        </p>
        <p className="mt-6 text-lg text-[var(--color-ink-muted)] max-w-[52ch]">
          Designing trustworthy AI experiences informed by mixed-methods
          research and six years of complex stakeholder-driven design.
        </p>
        <p className="mt-3 text-sm text-[var(--color-ink-faint)] max-w-[52ch]">
          Graduate Research Assistant at{" "}
          <span className="text-[var(--color-green)]">DePaul&rsquo;s RAISE Lab</span>
          , previously at{" "}
          <span className="text-[var(--color-green)]">MainStreet Advisors</span>.
        </p>

        <ul className="mt-7 flex flex-wrap gap-3">
          {chips.map((chip) => (
            <li
              key={chip.label}
              className="glass flex items-center gap-2 rounded-full pl-2.5 pr-4 py-2"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-[var(--color-green)]"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {chip.icon}
              </svg>
              <span className="text-xs text-[var(--color-ink-muted)]">{chip.label}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="relative mx-auto md:mx-0 w-full max-w-[380px]"
      >
        <svg
          viewBox="0 0 400 400"
          className="absolute -inset-6 text-[var(--color-border)]"
          fill="none"
        >
          <circle cx="200" cy="200" r="185" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
        </svg>
        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
          <Image
            src="/img/profile/ramya.jpg"
            alt="Ramya Yerramilli"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 380px"
            className="object-cover grayscale-[35%] contrast-[1.05]"
          />
        </div>
        <div className="glass-strong absolute -bottom-6 -left-6 rounded-2xl px-5 py-4 max-w-[195px]">
          <p className="font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-[var(--color-yellow)]">
            6 Years Leading Complex Design Projects
          </p>
        </div>
      </motion.div>
    </section>
  );
}
