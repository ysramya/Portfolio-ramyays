import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NightPage from "@/components/home/NightPage";
import ChapterTrail, { type Chapter } from "@/components/case-study/ChapterTrail";
import ZoomShots from "@/components/case-study/ZoomShots";
import { Head, Clip } from "@/components/case-study/CaseStudyPage";
import { projects } from "@/lib/projects";
import {
  MetricsVisual, SynthesisCrops, PainMap, DirectionDiagram, WorkflowStrip,
  Walkthrough, TaxonomyTree, AnnotatedScreen, ContributionStrip, S,
} from "./Visuals";

/**
 * Raahi, per raahi_case_study_brief_80_visual_20_text.md: six chapters, about
 * 80% pictures to 20% words. Pictures are the real prototype screens, crops of
 * them, the real research board, and diagrams from the project's own findings.
 * Raahi is a working prototype: no adoption or business-impact claims, and the
 * generative-AI research is follow-on work, not a current feature. Research
 * numbers keep their caveat (self-selected university sample; directional).
 */

export const metadata: Metadata = {
  title: "Raahi | Ramya Yerramilli",
  description:
    "An AI browser extension that helps UX practitioners detect, document, and explain dark patterns while reviewing live websites.",
};

const chapters: Chapter[] = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The challenge" },
  { id: "direction", label: "Product direction" },
  { id: "solution", label: "The solution" },
  { id: "role", label: "My role" },
  { id: "outcome", label: "Outcome" },
];

export default function RaahiPage() {
  const idx = projects.findIndex((p) => p.slug === "raahi");
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <NightPage>
      <ChapterTrail chapters={chapters} />
      <ZoomShots />

      <div className="cs-with-rail">
        <div className="wrap">
          {/* 1 · Trailer */}
          <section id="overview" className="cs-section !pt-[calc(var(--nav-h)+clamp(16px,2.6vw,34px))] !pb-[clamp(40px,5vw,72px)]" aria-labelledby="cs-title">
            <div data-reveal className="grid items-end gap-x-12 gap-y-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
              <div>
                <p className="eyebrow eyebrow-rule">Case study · AI browser extension</p>
                <h1 id="cs-title" className="mt-5" style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}>Raahi</h1>
                <p className="mt-3 text-[clamp(20px,2.2vw,28px)] leading-snug text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>
                  Spot it. Fix it.
                </p>
              </div>
              <div>
                <p className="max-w-[34rem] text-[var(--body)]">
                  An AI-powered browser extension that helps UX practitioners detect and document dark patterns while reviewing live websites.
                </p>
                <p className="meta-lc mt-3">Product Designer + Co-founder · 16 weeks</p>
                <p className="mt-5 flex flex-wrap gap-3">
                  <a href="#demo" className="btn">Explore prototype <span aria-hidden="true">↓</span></a>
                  <a href="#challenge" className="btn btn-outline">View research <span aria-hidden="true">↓</span></a>
                </p>
              </div>
            </div>

            <figure className="cs-stage mt-[clamp(24px,3vw,40px)]">
              <div className="relative">
                <Image
                  src={S.context.src}
                  width={S.context.w}
                  height={S.context.h}
                  priority
                  sizes="(max-width: 1100px) 94vw, 1100px"
                  alt="Raahi’s Dark Pattern Detected card open over a live subscription page, next to the region it scanned, which is outlined with a dashed border."
                  className="cs-shot"
                />
                <span className="cs-tag" style={{ left: "3%", top: "9%" }}>Detection card</span>
                <span className="cs-tag" style={{ left: "56%", top: "57%" }}>Scanned region</span>
              </div>
            </figure>
          </section>

          {/* 2 · The challenge */}
          <section id="challenge" className="cs-section">
            <Head n="01" label="The challenge" title="The pattern was visible. The proof was missing." />
            <p data-reveal className="mt-4 max-w-[34rem] text-[var(--body)] lg:ml-[232px]">
              Practitioners could spot manipulative design, but lacked a consistent way to classify and document it for stakeholders.
            </p>
            <div className="mt-10 grid gap-8">
              <MetricsVisual />
              <SynthesisCrops />
              <PainMap />
            </div>
          </section>

          {/* 3 · Product direction */}
          <section id="direction" className="cs-section">
            <Head n="02" label="Product direction" title="Bring detection into the workflow." />
            <p data-reveal className="mt-4 max-w-[34rem] text-[var(--body)] lg:ml-[232px]">
              Research pointed to a browser-first tool, a shared taxonomy, and evidence practitioners could take to stakeholders.
            </p>
            <div className="mt-10 grid gap-8">
              <DirectionDiagram />
              <WorkflowStrip />
            </div>
          </section>

          {/* 4 · The solution */}
          <section id="solution" className="cs-section">
            <Head n="03" label="The solution" title="From a suspicious pattern to documented evidence." />
            <p data-reveal className="mt-4 max-w-[34rem] text-[var(--body)] lg:ml-[232px]">
              Raahi brings the review process into the browser, where practitioners already work.
            </p>
            <div className="mt-10 grid gap-10">
              <Walkthrough />
              <TaxonomyTree />
            </div>
          </section>

          {/* 5 · My role */}
          <section id="role" className="cs-section">
            <Head n="04" label="My role" title="Research shaped the product, not the other way around." />
            <p data-reveal className="mt-4 max-w-[34rem] text-[var(--body)] lg:ml-[232px]">
              I connected practitioner research to product strategy and the detection-to-evidence experience, working with Design, Engineering, Legal and Data Science.
            </p>
            <div className="mt-10 grid gap-8">
              <AnnotatedScreen />
              <ContributionStrip />
            </div>
          </section>

          {/* 6 · Outcome */}
          <section id="outcome" className="cs-section">
            <Head n="05" label="Outcome" title="A working prototype. The next step is real-world validation." />
            <p data-reveal className="mt-4 max-w-[34rem] text-[var(--body)] lg:ml-[232px]">
              Raahi is not a shipped commercial product, and no adoption or business-impact metrics are claimed.
            </p>

            <div id="demo" className="mt-10 scroll-mt-[calc(var(--nav-h)+24px)]">
              <Clip
                v={{
                  src: "/img/raahi/raahi-demo.mp4",
                  poster: S.live.src,
                  w: 1713,
                  h: 971,
                  alt: "Raahi prototype demo: switching the plugin on, selecting an area of a live page, and reviewing the detected issues",
                  cap: "The working prototype, start to finish.",
                }}
              />
            </div>

            <ul data-reveal className="cs-chip-flow mt-10" aria-label="Next validation questions">
              <li>Will practitioners use it in real reviews?</li>
              <li>Does the evidence help stakeholder conversations?</li>
              <li>How accurate is detection in varied contexts?</li>
            </ul>
            <p data-reveal className="mt-5 max-w-[40rem] text-[13px] leading-relaxed text-[var(--muted)]">
              Follow-on research on dark patterns in generative AI interfaces is separate work, not a current Raahi feature.
            </p>

            <p data-reveal className="mt-14 max-w-[24ch] text-[clamp(26px,3.4vw,42px)] leading-tight text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>
              Make manipulation visible before it ships.
            </p>
            <p className="mt-6 flex flex-wrap gap-3">
              <a href="#demo" className="btn">Explore prototype <span aria-hidden="true">↑</span></a>
              <Link href="/#case-studies" className="btn btn-outline">Back to projects</Link>
            </p>

            <nav aria-label="Project navigation" className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid var(--rule)" }}>
              <Link href={`/projects/${prev.slug}`} className="inline-flex min-h-[44px] items-center text-[14px] text-[var(--body)] hover:text-[var(--ink)]">
                <span aria-hidden="true">←&nbsp;</span> {prev.title}
              </Link>
              <Link href={`/projects/${next.slug}`} className="inline-flex min-h-[44px] items-center text-[14px] text-[var(--body)] hover:text-[var(--ink)]">
                {next.title} <span aria-hidden="true">&nbsp;→</span>
              </Link>
            </nav>
          </section>
        </div>
      </div>
    </NightPage>
  );
}
