"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const imageFirst = index % 2 === 0;
  const accentVar =
    project.accent === "yellow" ? "var(--color-yellow)" : "var(--color-green)";

  return (
    <motion.div
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-white/10 py-14 md:py-20 first:border-t-0"
    >
      <Link
        href={`/projects/${project.slug}`}
        className={`group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center`}
      >
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-xl ${
            imageFirst ? "md:order-1" : "md:order-2"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
        </div>

        <div className={imageFirst ? "md:order-2" : "md:order-1"}>
          <h3
            className="font-[family-name:var(--font-display)] font-semibold leading-[0.98] text-[clamp(2rem,4.2vw,3.4rem)] transition-colors duration-300"
            style={{ ["--hover-color" as string]: accentVar }}
          >
            <span className="transition-colors duration-300 group-hover:text-[var(--hover-color)]">
              {project.title}
            </span>
          </h3>
          <p className="mt-5 text-[var(--color-ink-muted)] text-lg leading-relaxed max-w-[46ch]">
            {project.description}
          </p>
          <span
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em]"
            style={{ color: accentVar }}
          >
            View Project
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
              ↗
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
