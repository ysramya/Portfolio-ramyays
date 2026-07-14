"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { motion as motionTokens, radius } from "../tokens";

/**
 * ImageFrame atom — an image with an optional glass caption, sized
 * entirely by whatever grid cell the caller places it in. No aspect-ratio
 * default is forced beyond a sensible fallback, so it can be a tall
 * portrait slice in a collage or a wide banner in a split — the layout's
 * grid decides its footprint, this component just renders into it.
 */
export default function ImageFrame({
  src,
  alt,
  caption,
  aspect = "4/3",
  rotate,
  style,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  rotate?: number;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <motion.figure
      initial={{ y: 30, rotate: 0 }}
      whileInView={{ y: 0, rotate: rotate ?? 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
      className={`relative overflow-hidden ${className}`}
      style={{ borderRadius: radius.card, ...style }}
    >
      <div className="relative w-full h-full" style={{ aspectRatio: aspect }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
      {caption && (
        <figcaption className="absolute bottom-0 inset-x-0 p-3 text-xs text-white/80 bg-gradient-to-t from-black/70 to-transparent">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
