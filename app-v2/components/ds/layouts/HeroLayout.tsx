"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { motion as motionTokens } from "../tokens";

/**
 * HeroLayout — 100vw, full-bleed image with a grid-positioned text overlay.
 *
 * No max-width at all: the image owns the entire viewport. Content sits in
 * a 2-row grid (`1fr auto`) so it's pinned to the bottom by default, and
 * the title is allowed to overlap the image edge rather than sitting in a
 * padded box — that overlap is what makes an opener read as a composed
 * page instead of a header bar.
 */
export default function HeroLayout({
  image,
  imageAlt,
  children,
}: {
  image: string;
  imageAlt: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92dvh" }}>
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: motionTokens.ease }}
        className="absolute inset-0"
      >
        <Image src={image} alt={imageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      </motion.div>

      <div
        className="relative z-10 grid wrap"
        style={{
          minHeight: "92dvh",
          gridTemplateRows: "1fr auto",
          paddingTop: "calc(var(--nav-h) + 2rem)",
          paddingBottom: "4rem",
        }}
      >
        <div />
        {children}
      </div>
    </section>
  );
}
