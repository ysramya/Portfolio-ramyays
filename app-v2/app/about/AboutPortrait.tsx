"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * The portrait gets its own client component (not inlined in the server
 * page) purely because subtle scroll parallax needs framer-motion's
 * useScroll, which needs a ref and only runs client-side.
 */
export default function AboutPortrait({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full"
    >
      {/* The portrait used to sit on a blurred green glow inside a
          gradient-lit bezel with a deep drop shadow. Glow, gradient and
          shadow are all out of the system (§6); depth comes from the
          hairline border and the cream ground instead. */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "4/5", borderRadius: "var(--radius)" }}
      >
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 45vw" className="object-cover" priority />
        </motion.div>
      </div>
    </motion.div>
  );
}
