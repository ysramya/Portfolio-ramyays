"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motion as motionTokens } from "../tokens";

export type EditorialGalleryImage = {
  src: string;
  alt: string;
  /** Relative size within the collage — large anchors the composition, the rest offset around it. */
  size?: "large" | "medium" | "small";
};

/**
 * GALLERY (editorial) — an image collage, not a grid.
 *
 * Purpose: multiple real images shown as a composed moment (a validation
 * event, a moodboard) rather than a clean inventory. Distinct from
 * ds/Gallery, which is the flat, captioned, grid version for when a
 * uniform layout is actually correct.
 *
 * Ideal imagery: photos or mockups with headroom to crop — this block
 * offsets images vertically and lets them overlap at the edges.
 * Ideal typography: none inside the block; a Narrative or Transition
 * block above should carry the caption.
 * Spacing: three images max per instance (more than that stops reading
 * as composed and starts reading as a dump) — one `large` anchor plus
 * one or two offset smaller images overlapping its corner.
 * Animation: each image reveals on a slight delay stagger with a small
 * parallax drift as the section scrolls past.
 * Responsive: desktop overlaps images with negative margins; mobile
 * stacks them edge-to-edge with no overlap (overlap at 375px just
 * obscures content).
 */
export default function Gallery({
  images,
}: {
  images: EditorialGalleryImage[];
}) {
  const large = images.find((i) => i.size === "large") ?? images[0];
  const rest = images.filter((i) => i !== large).slice(0, 2);

  return (
    <section className="wrap py-20 md:py-28">
      <div className="relative">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
        >
          <Image src={large.src} alt={large.alt} fill sizes="100vw" className="object-cover" />
        </motion.div>

        {rest.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: motionTokens.duration.slow,
              ease: motionTokens.ease,
              delay: 0.15 + i * 0.1,
            }}
            className={`relative mt-4 md:mt-0 md:absolute aspect-[4/3] w-full md:w-[36%] overflow-hidden rounded-2xl border-4 border-[var(--color-bg)] shadow-2xl ${
              i === 0
                ? "md:-bottom-10 md:left-[6%]"
                : "md:-top-10 md:right-[4%]"
            }`}
          >
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 36vw" className="object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
