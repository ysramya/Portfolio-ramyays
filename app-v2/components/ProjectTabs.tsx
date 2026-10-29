"use client";

/**
 * Homepage project picker: one tab per case study, the panel shows its
 * preview and the one-line pitch. Order comes from lib/projects.ts.
 */

import Image from "next/image";
import Link from "next/link";
import LoopVideo from "@/components/LoopVideo";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import type { Project } from "@/lib/projects";

/** Slugs whose preview asset is a 16:9 clip rather than a square mockup. */
const LANDSCAPE_THUMBS = new Set(["mainstreet", "invisible-impacts"]);

function ProjectPanel({ p, index, total }: { p: Project; index: number; total: number }) {
  return (
    <div className="grid items-center gap-6 md:min-h-[400px] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-10">
      <Link
        href={`/projects/${p.slug}`}
        aria-label={`${p.title} — read the case study`}
        className="pop group relative block w-full overflow-hidden"
        style={{ aspectRatio: LANDSCAPE_THUMBS.has(p.slug) ? "16 / 9" : "1 / 1", background: "var(--panel)", borderRadius: "var(--radius)" }}
      >
        {p.video ? (
          <LoopVideo
            src={p.video}
            poster={p.image}
            label={`${p.title} preview`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image
            src={p.image}
            alt={`${p.title} preview`}
            fill
            sizes="(max-width: 768px) 92vw, 560px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </Link>

      <div className="flex flex-col">
        <p className="meta">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <p className="meta mt-3">
          {p.category}
          {p.duration && (
            <>
              <span aria-hidden> · </span>
              {p.duration}
            </>
          )}
        </p>
        <h3 className="mt-3" style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.1 }}>
          {p.title}
        </h3>
        <p className="mt-3 max-w-[30em] text-[16px] leading-[1.65] text-[var(--body)]">{p.description}</p>
        <div className="mt-6">
          <Link href={`/projects/${p.slug}`} className="btn btn-sm">
            Read case study <span aria-hidden>&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProjectTabs({ projects }: { projects: Project[] }) {
  return (
    <AnimatedTabs
      label="Projects"
      tabs={projects.map((p, i) => ({
        id: p.slug,
        label: p.title,
        content: <ProjectPanel p={p} index={i} total={projects.length} />,
      }))}
    />
  );
}
