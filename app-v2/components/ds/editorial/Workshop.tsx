"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motion as motionTokens } from "../tokens";

export type WorkshopImage = { src: string; alt: string; rotate?: number };

/**
 * WORKSHOP — the "inside the process" texture block.
 *
 * Purpose: whiteboards, sticky notes, roadmap boards — the messy, real
 * artifacts of doing the work, shown as a tilted collage rather than a
 * clean gallery. The point is texture and authenticity, not legibility of
 * any single image; a reader should feel "this was actually made," not
 * read every sticky note.
 *
 * Ideal imagery: process photography and workshop boards — busy, dense,
 * real. Wrong imagery for this block: clean final UI (use FeatureReveal).
 * Ideal typography: one small process label; no body copy competing with
 * the images for attention.
 * Spacing: images at slight independent rotation (±2–4deg), overlapping
 * with generous negative margins — deliberately not grid-aligned.
 * Animation: each image drifts in from a different direction (alternating
 * x-offset) and settles into its rotation — a "scattered onto a desk"
 * feeling, not a synchronized reveal.
 * Responsive: rotation and overlap both reduce on mobile so images stay
 * legible instead of overlapping into illegibility on a small screen.
 */
export default function Workshop({
  label,
  images,
  accent,
}: {
  label: string;
  images: WorkshopImage[];
  accent: string;
}) {
  return (
    <section className="wrap py-20 md:py-28">
      <p
        className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase mb-10"
        style={{ color: accent }}
      >
        {label}
      </p>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-0">
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ x: i % 2 === 0 ? -30 : 30, rotate: 0 }}
            whileInView={{ x: 0, rotate: img.rotate ?? (i % 2 === 0 ? -2 : 2) }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease, delay: i * 0.08 }}
            className="relative aspect-[4/3] w-full md:w-[38%] overflow-hidden rounded-xl border border-white/10 shadow-2xl md:-mr-8 md:[&:nth-child(even)]:mt-16"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
