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
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 30%, color-mix(in oklab, var(--color-green) 22%, transparent), transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="relative overflow-hidden rounded-[1.75rem] p-[1px]"
        style={{
          background: "linear-gradient(155deg, rgba(255,255,255,0.14), rgba(255,255,255,0.02))",
          boxShadow: "0 30px 80px -20px rgba(0,0,0,0.55)",
        }}
      >
        <div className="relative overflow-hidden rounded-[1.7rem]" style={{ aspectRatio: "4/5" }}>
          <motion.div style={{ y }} className="absolute inset-0 scale-110">
            <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 45vw" className="object-cover" priority />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
