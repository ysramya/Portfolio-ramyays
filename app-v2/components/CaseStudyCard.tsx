import Image from "next/image";
import Link from "next/link";
import LoopVideo from "@/components/LoopVideo";
import type { Project } from "@/lib/projects";

/**
 * One case study, laid out identically for every project: same media frame,
 * same text order, same slots for the title, summary, impact and action. It
 * is used by the home tabs and the Case Studies page, so the two never drift.
 *
 * The frame has one aspect ratio and every text slot has a minimum height, so
 * switching between case studies (in the tabs) changes the words and picture
 * but nothing moves.
 */
export default function CaseStudyCard({ p, index, total }: { p: Project; index: number; total: number }) {
  return (
    <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-10">
      <div
        className="pop group relative block w-full overflow-hidden"
        style={{ aspectRatio: "4 / 3", background: "var(--panel)", borderRadius: "var(--radius)" }}
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
            alt=""
            fill
            sizes="(max-width: 768px) 92vw, 560px"
            className="object-cover"
          />
        )}
        {/* The link covers the picture; the pause button sits above it. */}
        <Link
          href={`/projects/${p.slug}`}
          aria-label={`${p.title}: read the case study`}
          className="absolute inset-0 z-10 block"
        />
      </div>

      <div className="flex flex-col">
        <p className="meta">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          <span aria-hidden> · </span>
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
        <p className="mt-3 max-w-[30em] text-[16px] leading-[1.65] text-[var(--body)] md:min-h-[6.6em]">
          {p.description}
        </p>

        <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--rule)" }}>
          <p className="meta">Impact</p>
          <p className="mt-1 text-[var(--ink)]" style={{ fontFamily: "var(--font-display)", fontSize: 34, lineHeight: 1.1 }}>
            {p.impact.stat}
          </p>
          <p className="mt-1 max-w-[30em] text-[14px] leading-[1.55] text-[var(--body)] md:min-h-[3.1em]">{p.impact.label}</p>
        </div>

        <div className="mt-auto pt-6">
          <Link href={`/projects/${p.slug}`} className="btn btn-sm">
            Read the case study <span aria-hidden>&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
