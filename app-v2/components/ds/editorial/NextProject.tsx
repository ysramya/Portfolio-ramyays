"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { motion as motionTokens, tintedGlass } from "../tokens";

/**
 * NEXT PROJECT (editorial) — a magazine's "next article" teaser.
 *
 * Purpose: close the chapter and immediately open the next one, so a
 * reader keeps moving through the portfolio. Distinct from ds/NextProject
 * (flat text + button): this version previews the next project's own
 * imagery, full-bleed, so the teaser itself does some of the selling.
 *
 * Ideal imagery: the next project's Spotlight image or brand shot.
 * Ideal typography: a small "Next" label, then the next project's name
 * at Spotlight-adjacent scale.
 * Spacing: full-width band, image sits behind the text at low opacity by
 * default and brightens on hover — text is legible either way.
 * Animation: image scales slightly and brightens on hover; title
 * underline draws in on hover.
 * Responsive: hover state has no equivalent on touch — image sits at its
 * "hovered" brightness by default on mobile so the preview isn't hidden
 * behind an interaction that doesn't exist there.
 */
export default function NextProject({
  href,
  label,
  projectName,
  image,
  imageAlt,
  accent,
}: {
  href: string;
  label: string;
  projectName: string;
  image: string;
  imageAlt: string;
  accent: string;
}) {
  return (
    <Link href={href} className="group relative block overflow-hidden" style={{ minHeight: "60dvh" }}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center py-24">
        <motion.span
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: motionTokens.duration.base }}
          className="rounded-full px-4 py-2 text-[12px] font-medium tracking-[0.22em] uppercase mb-6"
          style={tintedGlass(accent)}
        >
          <span style={{ color: accent }}>{label}</span>
        </motion.span>
        <h2 className="font-[family-name:var(--font-display)] leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]">
          {projectName}
          <span
            className="block h-[2px] w-0 group-hover:w-full mx-auto mt-4 transition-[width] duration-500 ease-out"
            style={{ backgroundColor: accent }}
          />
        </h2>
      </div>
    </Link>
  );
}
