import Image from "next/image";
import Link from "next/link";
import NightPage from "@/components/home/NightPage";
import ChapterTrail, { type Chapter } from "@/components/case-study/ChapterTrail";
import ShotExplorer, { type ExplorerItem } from "@/components/case-study/ShotExplorer";
import ZoomShots from "@/components/case-study/ZoomShots";
import { projects } from "@/lib/projects";

/**
 * One layout for every case study: Overview, Challenge, Approach, Solution,
 * Impact, about 80% pictures to 20% words, on the night sky with the chapter
 * trail. Each project's page file is only its content. Nothing here invents a
 * claim: every figure and caption comes from the project's own record.
 */

export type Img = { src: string; w: number; h: number; alt: string; cap?: string };
export type Video = { src: string; poster: string; w: number; h: number; alt: string; cap?: string };

export type CaseStudyData = {
  slug: string;
  title: string;
  kicker: string;
  tagline: string;
  /** One sentence under the tagline. */
  summary?: string;
  snapshot: [string, string][];
  cta?: { label: string; href: string };
  /** A second, same-page action (e.g. jump to the demo). */
  cta2?: { label: string; href: string };
  hero: Img[];
  /** Product demo shown under the hero; anchor id "demo". */
  demo?: Video;
  challenge: {
    title: string;
    lead: string;
    facts: { v: string; l: string }[];
    flow?: { items: string[]; arrows: boolean };
    /** A caveat that must stay beside the numbers. */
    note?: string;
    findings?: { t: string; d: string }[];
    quote?: { text: string; by: string };
    image?: Img;
  };
  /** Alternative middle chapter: assumption, finding, decision, row by row. */
  direction?: { label?: string; title: string; lead?: string; rows: { assumption: string; finding: string; decision: string }[] };
  approach?: { title: string; lead?: string; steps: string[]; gallery: Img[] };
  /** Alternative to `approach`: the product loop and its principles. */
  thinking?: { label?: string; title: string; lead?: string; loop: Img[]; principles: string[]; image?: Img };
  /** Optional chapter after the solution: decisions, shown on real UI. */
  decisions?: { label?: string; title: string; lead?: string; rounds?: Img[]; design?: Img[]; points?: { t: string; d: string }[]; taxonomy?: { t: string; d: string }[]; contribution?: { t: string; d: string }[] };
  solution: { title: string; lead?: string; steps?: string[]; video?: Video; explorer: ExplorerItem[]; gallery?: Img[]; designSystem?: Img[] };
  impact: { label?: string; title: string; metrics: { v: string; l: string }[]; learnings?: string[]; open?: string[]; next?: string; note: string; gallery?: Img[]; video?: Video; reflection?: string; closing?: string };
};

function chaptersFor(d: CaseStudyData): Chapter[] {
  const mid: Chapter = d.direction
    ? { id: "direction", label: d.direction.label ?? "Product direction" }
    : d.thinking
      ? { id: "thinking", label: d.thinking.label ?? "Product thinking" }
      : { id: "approach", label: "The approach" };
  return [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "The challenge" },
    mid,
    { id: "solution", label: "The solution" },
    ...(d.decisions ? [{ id: "decisions", label: d.decisions.label ?? "Design decisions" }] : []),
    { id: "impact", label: d.impact.label ?? (d.thinking || d.direction ? "Outcome" : "Impact") },
  ];
}

export function Head({ n, label, title }: { n: string; label: string; title: string }) {
  return (
    <div data-reveal className="cs-head">
      <p className="cs-label"><span className="cs-num">{n}</span>{label}</p>
      <h2 className="cs-h">{title}</h2>
    </div>
  );
}

export function Shot({ img, priority, className = "" }: { img: Img; priority?: boolean; className?: string }) {
  return (
    <figure className={className}>
      <Image src={img.src} width={img.w} height={img.h} alt={img.alt} priority={priority} sizes="(max-width: 1100px) 94vw, 1100px" className="cs-shot" />
      {img.cap && <figcaption className="mt-2.5 text-[13px] tracking-wide text-[var(--muted)]">{img.cap}</figcaption>}
    </figure>
  );
}

/** Equal-height row: phones, photos. */
function Row({ imgs, h, hs }: { imgs: Img[]; h?: string; hs?: string }) {
  return (
    <div className="cs-row" style={{ ["--rh" as string]: h, ["--rh-s" as string]: hs }}>
      {imgs.map((im) => (
        <figure key={im.src}>
          <Image src={im.src} width={im.w} height={im.h} alt={im.alt} sizes="(max-width: 640px) 46vw, 380px" className="cs-shot" />
          {im.cap && <figcaption className="mt-2.5 max-w-[26ch] text-[13px] leading-snug tracking-wide text-[var(--muted)]">{im.cap}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export function Clip({ v, className = "" }: { v: Video; className?: string }) {
  const tall = v.h > v.w;
  return (
    <figure className={`cs-stage ${className}`}>
      <video
        controls
        playsInline
        preload="metadata"
        poster={v.poster}
        aria-label={v.alt}
        className="cs-view-video mx-auto"
        style={{ aspectRatio: `${v.w} / ${v.h}`, maxWidth: tall ? 300 : undefined }}
      >
        <source src={v.src} type="video/mp4" />
      </video>
      {v.cap && <figcaption className="mt-3 text-center text-[13px] tracking-wide text-[var(--muted)]">{v.cap}</figcaption>}
    </figure>
  );
}

export default function CaseStudyPage({ d }: { d: CaseStudyData }) {
  const idx = projects.findIndex((p) => p.slug === d.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  let n = 0;
  const num = () => String(++n).padStart(2, "0");

  return (
    <NightPage>
      <ChapterTrail chapters={chaptersFor(d)} />
      <ZoomShots />

      <div className="cs-with-rail">
        <div className="wrap">
          {/* Overview */}
          <section id="overview" className="cs-section !pt-[calc(var(--nav-h)+clamp(28px,4vw,56px))]" aria-labelledby="cs-title">
            <div data-reveal className="max-w-[46rem]">
              <p className="eyebrow eyebrow-rule">{d.kicker}</p>
              <h1 id="cs-title" className="mt-7" style={{ fontSize: "clamp(40px, 5vw, 68px)" }}>{d.title}</h1>
              <p className="mt-6 text-[clamp(18px,2vw,24px)] leading-snug text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>
                {d.tagline}
              </p>
              {d.summary && <p className="mt-4 max-w-[36rem] text-[var(--body)]">{d.summary}</p>}
              {(d.cta || d.cta2) && (
                <p className="mt-7 flex flex-wrap gap-3">
                  {d.cta && (
                    <a href={d.cta.href} {...(d.cta.href.startsWith("#") ? {} : { target: "_blank", rel: "noopener" })} className="btn">
                      {d.cta.label} <span aria-hidden="true">{d.cta.href.startsWith("#") ? "↓" : "↗"}</span>
                    </a>
                  )}
                  {d.cta2 && (
                    <a href={d.cta2.href} className="btn btn-outline">
                      {d.cta2.label} <span aria-hidden="true">↓</span>
                    </a>
                  )}
                </p>
              )}
            </div>

            <dl data-reveal className="cs-glass mt-12 grid grid-cols-2 gap-x-8 gap-y-6 p-6 sm:grid-cols-3 lg:grid-cols-5">
              {d.snapshot.map(([k, v]) => (
                <div key={k}>
                  <dt className="meta">{k}</dt>
                  <dd className="mt-1 text-[14px] leading-snug text-[var(--ink)]">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="cs-stage mt-[clamp(40px,5vw,72px)]">
              {d.hero.length === 1 ? (
                <Shot img={d.hero[0]} priority />
              ) : (
                <Row imgs={d.hero} h="clamp(280px, 34vw, 440px)" hs="clamp(190px, 50vw, 280px)" />
              )}
            </div>

            {d.demo && (
              <div id="demo" className="mt-10 scroll-mt-[calc(var(--nav-h)+24px)]">
                <Clip v={d.demo} />
              </div>
            )}
          </section>

          {/* 01 Challenge */}
          <section id="challenge" className="cs-section">
            <Head n={num()} label="The challenge" title={d.challenge.title} />
            <p data-reveal className="mt-4 max-w-[36rem] text-[var(--body)] lg:ml-[232px]">{d.challenge.lead}</p>

            <dl data-reveal className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
              {d.challenge.facts.map((f) => (
                <div key={f.l} className="cs-glass p-5">
                  <dt className="cs-fact">{f.v}</dt>
                  <dd className="mt-2 max-w-[20ch] text-[14px] leading-snug text-[var(--body)]">{f.l}</dd>
                </div>
              ))}
            </dl>

            {d.challenge.flow && (
              <ul data-reveal className="cs-chip-flow mt-10" aria-label="How the problem showed up">
                {d.challenge.flow.items.flatMap((t, n, a) => {
                  const li = <li key={t} className={n === a.length - 1 && d.challenge.flow!.arrows ? "cs-arrows-end" : ""}>{t}</li>;
                  return n < a.length - 1 && d.challenge.flow!.arrows
                    ? [li, <li key={`${t}-a`} aria-hidden="true" className="!p-0 !shadow-none !text-[#e8b870]">→</li>]
                    : [li];
                })}
              </ul>
            )}

            {d.challenge.note && <p data-reveal className="mt-5 max-w-[40rem] text-[13px] leading-relaxed text-[var(--muted)]">{d.challenge.note}</p>}

            {d.challenge.findings && (
              <ol data-reveal className="mt-10 grid gap-3 sm:grid-cols-2" aria-label="Findings">
                {d.challenge.findings.map((f, n) => (
                  <li key={f.t} className="cs-glass flex gap-4 p-5">
                    <span className="cs-num" aria-hidden="true">{n + 1}</span>
                    <p className="text-[15px] leading-snug text-[var(--body)]"><strong className="font-medium text-[var(--ink)]">{f.t}</strong> {f.d}</p>
                  </li>
                ))}
              </ol>
            )}

            {d.challenge.quote && (
              <blockquote data-reveal className="mt-10 max-w-[40rem] border-l-2 border-[#e8b870] pl-5">
                <p className="text-[clamp(19px,1.8vw,24px)] leading-snug text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>“{d.challenge.quote.text}”</p>
                <footer className="meta mt-3">{d.challenge.quote.by}</footer>
              </blockquote>
            )}

            {d.challenge.image && <Shot img={d.challenge.image} className="mt-12" />}
          </section>

          {/* Product direction: assumption, finding, decision */}
          {d.direction && (
            <section id="direction" className="cs-section">
              <Head n={num()} label={d.direction.label ?? "Product direction"} title={d.direction.title} />
              {d.direction.lead && <p data-reveal className="mt-4 max-w-[36rem] text-[var(--body)] lg:ml-[232px]">{d.direction.lead}</p>}

              <div data-reveal className="cs-rows mt-10" role="table" aria-label="From assumption to decision">
                <div role="row" className="cs-rows-head">
                  <span role="columnheader" className="meta">Initial assumption</span>
                  <span aria-hidden="true" />
                  <span role="columnheader" className="meta">Research finding</span>
                  <span aria-hidden="true" />
                  <span role="columnheader" className="meta">Product decision</span>
                </div>
                {d.direction.rows.map((r) => (
                  <div role="row" key={r.decision} className="cs-rows-row">
                    <p role="cell" data-l="Initial assumption" className="cs-cell">{r.assumption}</p>
                    <span aria-hidden="true" className="cs-rows-arrow">→</span>
                    <p role="cell" data-l="Research finding" className="cs-cell">{r.finding}</p>
                    <span aria-hidden="true" className="cs-rows-arrow">→</span>
                    <p role="cell" data-l="Product decision" className="cs-cell cs-cell-gold">{r.decision}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Product thinking (alternative to Approach) */}
          {d.thinking && (
            <section id="thinking" className="cs-section">
              <Head n={num()} label={d.thinking.label ?? "Product thinking"} title={d.thinking.title} />
              {d.thinking.lead && <p data-reveal className="mt-4 max-w-[36rem] text-[var(--body)] lg:ml-[232px]">{d.thinking.lead}</p>}

              <div data-reveal className="cs-stage mt-10">
                <Row imgs={d.thinking.loop} h="clamp(260px, 30vw, 400px)" hs="clamp(170px, 44vw, 250px)" />
              </div>

              <ul data-reveal className="cs-chip-flow mt-8" aria-label="Design principles">
                {d.thinking.principles.map((t) => <li key={t}>{t}</li>)}
              </ul>

              {d.thinking.image && <Shot img={d.thinking.image} className="mt-12" />}
            </section>
          )}

          {d.approach && (
          <section id="approach" className="cs-section">
            <Head n={num()} label="The approach" title={d.approach!.title} />
            {d.approach!.lead && <p data-reveal className="mt-4 max-w-[36rem] text-[var(--body)] lg:ml-[232px]">{d.approach!.lead}</p>}

            <ol data-reveal className="cs-steps relative mt-10 grid gap-7 md:gap-5" style={{ ["--n" as string]: d.approach!.steps.length }}>
              {d.approach!.steps.map((t, n) => (
                <li key={t} className="relative pl-9 md:pl-0 md:pt-9">
                  <span className="absolute left-0 top-0.5 h-[12px] w-[12px] rounded-full border-2 border-[#e8b870] md:top-0" aria-hidden="true" />
                  {n < d.approach!.steps.length - 1 && (
                    <span aria-hidden="true" className="absolute left-[5px] top-5 h-[calc(100%+20px)] border-l border-dashed border-[#f2efe7]/45 md:left-[18px] md:top-[5px] md:h-0 md:w-[calc(100%+4px)] md:border-l-0 md:border-t" />
                  )}
                  <p className="text-[16px] text-[var(--ink)]">{t}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12">
              <Row imgs={d.approach!.gallery} />
            </div>
          </section>
          )}

          {/* 03 Solution */}
          <section id="solution" className="cs-section">
            <Head n={num()} label="The solution" title={d.solution.title} />
            {d.solution.lead && <p data-reveal className="mt-4 max-w-[36rem] text-[var(--body)] lg:ml-[232px]">{d.solution.lead}</p>}

            {d.solution.steps && (
              <ol data-reveal className="cs-steps relative mt-10 grid gap-7 md:gap-5" style={{ ["--n" as string]: d.solution.steps.length }}>
                {d.solution.steps.map((t, k) => (
                  <li key={t} className="relative pl-9 md:pl-0 md:pt-9">
                    <span className="absolute left-0 top-0.5 h-[12px] w-[12px] rounded-full border-2 border-[#e8b870] md:top-0" aria-hidden="true" />
                    {k < d.solution.steps!.length - 1 && (
                      <span aria-hidden="true" className="absolute left-[5px] top-5 h-[calc(100%+20px)] border-l border-dashed border-[#f2efe7]/45 md:left-[18px] md:top-[5px] md:h-0 md:w-[calc(100%+4px)] md:border-l-0 md:border-t" />
                    )}
                    <p className="text-[16px] text-[var(--ink)]">{t}</p>
                  </li>
                ))}
              </ol>
            )}

            {d.solution.video && <Clip v={d.solution.video} className="mt-10" />}

            <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-10">
              <ShotExplorer items={d.solution.explorer} />
              {d.solution.gallery && <Row imgs={d.solution.gallery} />}
              {d.solution.designSystem && (
                <div className="grid gap-5 sm:grid-cols-2">
                  {d.solution.designSystem.map((im) => <Shot key={im.src} img={im} />)}
                </div>
              )}
            </div>
          </section>

          {/* Design decisions */}
          {d.decisions && (
            <section id="decisions" className="cs-section">
              <Head n={num()} label={d.decisions.label ?? "Design decisions"} title={d.decisions.title} />
              {d.decisions.lead && <p data-reveal className="mt-4 max-w-[36rem] text-[var(--body)] lg:ml-[232px]">{d.decisions.lead}</p>}
              {d.decisions.points && (
                <ul data-reveal className="mt-10 grid gap-3 sm:grid-cols-3">
                  {d.decisions.points.map((p) => (
                    <li key={p.t} className="cs-glass p-5">
                      <p className="text-[17px] text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>{p.t}</p>
                      <p className="mt-2 text-[14px] leading-snug text-[var(--body)]">{p.d}</p>
                    </li>
                  ))}
                </ul>
              )}

              {d.decisions.taxonomy && (
                <div data-reveal className="mt-12">
                  <p className="meta">Shared taxonomy</p>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                    {d.decisions.taxonomy.map((p) => (
                      <li key={p.t} className="cs-glass cs-glass-gold p-5">
                        <p className="text-[19px] text-[#e8b870]" style={{ fontFamily: "var(--font-prata), serif" }}>{p.t}</p>
                        <p className="mt-2 text-[14px] leading-snug text-[var(--body)]">{p.d}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {d.decisions.contribution && (
                <div data-reveal className="mt-12">
                  <p className="meta">My role, across the work</p>
                  <ol className="cs-chip-flow mt-3" aria-label="Contribution map">
                    {d.decisions.contribution.flatMap((p, k, a) => {
                      const li = <li key={p.t} title={p.d}><strong className="font-medium">{p.t}</strong></li>;
                      return k < a.length - 1 ? [li, <li key={`${p.t}-a`} aria-hidden="true" className="!p-0 !shadow-none !text-[#e8b870]">→</li>] : [li];
                    })}
                  </ol>
                  <dl className="mt-4 grid gap-x-8 gap-y-2 text-[14px] leading-snug sm:grid-cols-2">
                    {d.decisions.contribution.map((p) => (
                      <div key={p.t} className="flex gap-2"><dt className="text-[var(--ink)]">{p.t}:</dt><dd className="text-[var(--body)]">{p.d}</dd></div>
                    ))}
                  </dl>
                </div>
              )}

              {d.decisions.rounds && <div className="mt-12"><Row imgs={d.decisions.rounds} /></div>}
              {d.decisions.design && (
                <div className="mt-12 grid gap-5 sm:grid-cols-2">
                  {d.decisions.design.map((im) => <Shot key={im.src} img={im} />)}
                </div>
              )}
            </section>
          )}

          {/* Impact / Outcome */}
          <section id="impact" className="cs-section">
            <Head n={num()} label={d.impact.label ?? (d.thinking || d.direction ? "Outcome" : "Impact")} title={d.impact.title} />

            {d.impact.metrics.length > 0 && (
            <dl data-reveal className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
              {d.impact.metrics.map((m) => (
                <div key={m.l} className="cs-glass p-5">
                  <dt className="cs-metric !text-[clamp(30px,4.4vw,52px)] !text-[#e8b870]">{m.v}</dt>
                  <dd className="mt-2 max-w-[22ch] text-[13px] leading-snug text-[var(--body)] sm:text-[14px]">{m.l}</dd>
                </div>
              ))}
            </dl>
            )}
            {d.impact.learnings && (
              <ul data-reveal className="mt-8 grid gap-4 sm:grid-cols-3">
                {d.impact.learnings.map((t) => (
                  <li key={t} className="cs-glass p-5 text-[15px] leading-snug text-[var(--ink)]">{t}</li>
                ))}
              </ul>
            )}
            <p data-reveal className="mt-5 max-w-[40rem] text-[13px] leading-relaxed text-[var(--muted)]">{d.impact.note}</p>

            {d.impact.open && (
              <div data-reveal className="mt-12">
                <p className="meta">Open product questions</p>
                <ul className="cs-chip-flow mt-3">
                  {d.impact.open.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            )}

            {d.impact.gallery && <div className="mt-12"><Row imgs={d.impact.gallery} /></div>}
            {d.impact.video && <Clip v={d.impact.video} className="mt-12" />}

            {d.impact.next && (
              <p data-reveal className="mt-12 max-w-[40rem] text-[var(--body)]">
                <span className="text-[var(--ink)]">Next direction:</span> {d.impact.next}
              </p>
            )}
            {d.impact.reflection && (
              <p data-reveal className="mt-14 max-w-[36rem] text-[var(--body)]">
                <span className="text-[var(--ink)]">Next:</span> {d.impact.reflection}
              </p>
            )}
            {d.impact.closing && (
              <p data-reveal className="mt-14 max-w-[24ch] text-[clamp(26px,3.4vw,42px)] leading-tight text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>
                {d.impact.closing}
              </p>
            )}

            <nav aria-label="Project navigation" className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid var(--rule)" }}>
              <Link href={`/projects/${prev.slug}`} className="inline-flex min-h-[44px] items-center text-[14px] text-[var(--body)] hover:text-[var(--ink)]">
                <span aria-hidden="true">←&nbsp;</span> {prev.title}
              </Link>
              <Link href="/#case-studies" className="inline-flex min-h-[44px] items-center text-[14px] text-[#e8b870] hover:text-[var(--ink)]">
                Back to projects
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
